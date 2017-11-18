/*
 A simple script with a few niceties that allows for multiple requestAnimationFrame calls, and FPS pinning.
 * */
export let raw = (window, request, cancel) => {
    'use strict';
    let lastTime = 0;
    let strings = {
        raf: 'requestAnimationFrame',
        caf: 'cancelAnimationFrame',
        af: 'AnimationFrame',
    };
    /**
     * requestAnimationFrame shim layer with setTimeout fallback
     * @see http://paulirish.com/2011/requestanimationframe-for-smart-animating
     * modified for use with raf shim and raf based setInterval/Timeout
     */
    let vendors = ['ms', 'moz', 'webkit', 'o'];
    for (let x = 0; x < vendors.length && !window[strings.raf]; ++x) {
        window[strings.raf] = window[vendors[x] + 'Request' + strings.af];
        window[strings.caf] =
            window[vendors[x] + 'Cancel' + strings.af] || window[vendors[x] + 'CancelRequest' + strings.af];
    }

    if (!window[strings.raf]) {
        window[strings.raf] = function (callback) {
            let currTime = new Date().getTime();
            let timeToCall = Math.max(0, 16 - (currTime - lastTime));
            let id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                },
                timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window[strings.caf]) {
        window[strings.caf] = function (id) {
            window.clearTimeout(id);
        };
    }

    /* ^---------- end of polyfill, start of raf shim ------------> */

    let queue = [];
    let lookup = {};
    let guid = 0;

    let _rAF = window[strings.raf];
    let _cAF = window[strings.caf];

    function clearQueue(time) {
        _rAF(clearQueue);
        if (!queue.length || !raf.running) {
            return;
        }

        let todo = queue.splice(0); // move items across
        let i = 0;
        let item = null;
        let length = todo.length;
        for (; i < length; i++) {
            item = todo[i];
            if (!item.cancel) {
                item.fn(time);
            }
            delete lookup[item.guid];
        }
    }

    clearQueue();

    let raf = function raf(fn) {
        guid++;

        lookup[guid] = fn;

        queue.push({
            guid: guid,
            cancel: false,
            fn: fn,
        });

        return guid;
    };

    raf.running = true;

    raf.cancel = function (id) {
        if (lookup[id]) {
            lookup[id].cancel = true;
            return true;
        }

        return false;
    };

    raf.fps = function (fn, fps) {
        let lastFrameTime = 0;
        let ms = 1000 / fps;

        function update(elapsedTime) {
            // calculate the delta since the last frame
            let delta = elapsedTime - (lastFrameTime || 0);

            // queue up an rAF update call
            raf(update);

            // if we *don't* already have a first frame, and the
            // delta is less than 33ms (30fps in this case) then
            // don't do anything and return
            if (lastFrameTime && delta < ms) {
                return;
            }
            // else we have a frame we want to update at our fps...

            // capture the last frame update time so we can work out
            // a delta next time.
            lastFrameTime = elapsedTime;

            // now do the frame update and render work
            fn(elapsedTime);
        }

        update();
    };

    if (cancel) {
        window[cancel] = raf.cancel;
    }

    if (!request) {
        request = 'raf';
    }

    window[request] = raf;

}