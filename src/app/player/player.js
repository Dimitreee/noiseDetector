import {Subject} from 'rxjs/Subject';
import {easeOutCubic, easeOutQuart, smoothElapsedData} from '../../utils/easing.functions.js';
import {_getImage} from '../../utils/konva.utils.js';

export class Player {
    constructor() {
        this.moveThread = new Subject();
        this.endMoveThread = new Subject();
        this.nextMoveThread = new Subject();

        this.position = {
            x: 0,
            y: 100
        };
        this.options = {
            moveSped: 20,
            jumpSpeed: 20
        };

        this.end_animation_options = {
            animation_start: 0,
            break_animation: false,
            last_direction: null,
            duration: 600,
            distance: 2,
            x_difference: 0,
            is_animating: false
        };

        this.move_animation_options = {
            animation_start: 0,
            animation_end: 0,
            x_start: 0,
            x_end: 0,
            break_animation: false,
            last_direction: null,
            duration: 2000,
            distance: 10,
            x_difference: 0,
            is_animating: false,
        };

        this.sprite = null;
        this.frame = null;

        this.startEndAnimation = this.startEndAnimation.bind(this);
        this.move = this.move.bind(this);

        this.nextMoveThread.subscribe((event) => {
            if (this.move_animation_options.is_animating) {
                return;
            }

            this.move_animation_options.is_animating = true;
            this.move_animation_options.animation_start = new Date();
            this.move_animation_options.last_direction = event.direction;
            this.move_animation_options.x_start = this.position.x;
            this.move(event)
        });

        this.endMoveThread.subscribe((event) => {
            this.move_animation_options.is_animating = false;
            this.move_animation_options.x_end = this.position.x;
            this.move_animation_options.animation_end = this.nowDate;

            if (this.end_animation_options.is_animating) {
                return;
            }

            this.end_animation_options.distance = this.frictionDistance;
            this.end_animation_options.duration = this.frictionTime * 10;
            this.end_animation_options.animation_start = event;
            this.startEndAnimation();
        })
    }

    set x(x) {
        this.position.x = x;
    }

    set y(y) {
        this.position.y = y;
    }

    set setSprite(spriteNode) {
        this.sprite = _getImage(spriteNode);
    }

    set props({moveSped = 4, jumpSpeed = 4}) {
        this.options = {moveSped, jumpSpeed};
    }

    get startEndAnimationTime() {
        return this.end_animation_options.animation_start;
    }

    get nowDate() {
        return new Date()
    }

    get moveTime() {
        return this.move_animation_options.animation_end - this.move_animation_options.animation_start;
    }

    get moveDistance() {
        return this.move_animation_options.x_end - this.move_animation_options.x_start;
    }

    get moveSpeed() {
        return this.moveDistance / this.moveTime;
    }

    get frictionDistance() {
        return Math.abs((this.moveSpeed * this.moveSpeed ) / (0.01 * 0.9));
    }

    get frictionTime() {
        return Math.abs(this.moveSpeed / 0.01 * 0.9);
    }

    move({type, direction = this.move_animation_options.last_direction}) {
        if (this.frame) {
            cancelAnimationFrame(this.frame);
            this.frame = null;
        }

        this.getMoveAnimationDistance();
        this.end_animation_options.last_direction = direction;

        const distance = this.move_animation_options.x_difference;

        if (direction === 'right') {
            this.position.x += distance;
        } else if (direction === 'left') {
            this.position.x -= distance;
        }

        this.moveThread.next(this.position);

        if (!this.move_animation_options.break_animation) {
            this.frame = requestAnimationFrame(this.move);
            return;
        }
        this.move_animation_options.break_animation = false;
    }

    startEndAnimation() {
        this.end_animation_options.is_animating = true;
        if (this.frame) {
            cancelAnimationFrame(this.frame);
            this.frame = null;
        }

        this.getEndAnimationDistance();

        const distance = Math.floor(this.end_animation_options.x_difference);

        if (this.end_animation_options.last_direction === 'right') {
            this.position.x += distance;
        } else if (this.end_animation_options.last_direction === 'left') {
            this.position.x -= distance;
        }

        this.moveThread.next(this.position);

        if (!this.end_animation_options.break_animation) {
            this.frame = requestAnimationFrame(this.startEndAnimation);
            return;
        }

        this.end_animation_options.break_animation = false;
        this.end_animation_options.is_animating = false;
    }

    getMoveAnimationDistance() {
        let elapsed = smoothElapsedData(this.nowDate - this.move_animation_options.animation_start, 100),
            to = this.move_animation_options.distance,
            duration = this.move_animation_options.duration;

        this.move_animation_options.x_difference = easeOutQuart(elapsed, 0, to, duration);

        if (!this.move_animation_options.is_animating) {
            this.move_animation_options.break_animation = true;
            this.frame = null;
            this.move_animation_options.animation_end = this.nowDate;
            this.move_animation_options.x_end = this.position.x;
        }
    }

    getEndAnimationDistance() {
        let elapsed = smoothElapsedData(
            this.nowDate - this.end_animation_options.animation_start,
            this.moveTime / 3.2);

        let to = this.end_animation_options.distance,
            duration = this.end_animation_options.duration;

        this.end_animation_options.x_difference = easeOutCubic(elapsed, 0, to, duration);

        if (elapsed >= this.end_animation_options.duration) {
            this.end_animation_options.break_animation = true;
            this.end_animation_options.is_animating = false;
            this.frame = null;
        }
    }
}