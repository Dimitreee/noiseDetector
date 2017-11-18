// https://github.com/chenglou/tween-functions
// t: current time, b: beginning value, _c: final value, d: total duration
export let linear = (t, b, _c, d) => {
    let c = _c - b;
    return c * t / d + b;
};

export let easeInQuad = (t, b, _c, d) => {
    let c = _c - b;
    return c * (t /= d) * t + b;
};

export let easeOutQuad = (t, b, _c, d) => {
    let c = _c - b;
    return -c * (t /= d) * (t - 2) + b;
};

export let easeInOutQuad = (t, b, _c, d) => {
    let c = _c - b;
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t + b;
    } else {
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
};

export let easeInCubic = (t, b, _c, d) => {
    let c = _c - b;
    return c * (t /= d) * t * t + b;
};

export let easeOutCubic = (t, b, _c, d) => {
    let c = _c - b;
    return c * ((t = t / d - 1) * t * t + 1) + b;
};

export let easeInOutCubic = (t, b, _c, d) => {
    let c = _c - b;
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t + b;
    } else {
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
};

export let easeInQuart = (t, b, _c, d) => {
    let c = _c - b;
    return c * (t /= d) * t * t * t + b;
};

export let easeOutQuart = (t, b, _c, d) => {
    let c = _c - b;
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};

export let easeInOutQuart = (t, b, _c, d) => {
    let c = _c - b;
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t + b;
    } else {
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
};

export let easeInQuint = (t, b, _c, d) => {
    let c = _c - b;
    return c * (t /= d) * t * t * t * t + b;
};

export let easeOutQuint = (t, b, _c, d) => {
    let c = _c - b;
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
};

export let easeInOutQuint = (t, b, _c, d) => {
    let c = _c - b;
    if ((t /= d / 2) < 1) {
        return c / 2 * t * t * t * t * t + b;
    } else {
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }
};

export let easeInSine = (t, b, _c, d) => {
    let c = _c - b;
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
};

export let easeOutSine = (t, b, _c, d) => {
    let c = _c - b;
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
};

export let easeInOutSine = (t, b, _c, d) => {
    let c = _c - b;
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
};

export let easeInExpo = (t, b, _c, d) => {
    let c = _c - b;
    return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
};

export let easeOutExpo = (t, b, _c, d) => {
    let c = _c - b;
    return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
};

export let easeInOutExpo = (t, b, _c, d) => {
    let c = _c - b;
    if (t === 0) {
        return b;
    }
    if (t === d) {
        return b + c;
    }
    if ((t /= d / 2) < 1) {
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    } else {
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
};

export let easeInCirc = (t, b, _c, d) => {
    let c = _c - b;
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
};
export let easeOutCirc = (t, b, _c, d) => {
    let c = _c - b;
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
};

export let easeInOutCirc = (t, b, _c, d) => {
    let c = _c - b;
    if ((t /= d / 2) < 1) {
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    } else {
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
};

export let easeInElastic = (t, b, _c, d) => {
    let c = _c - b;
    let a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
        return b;
    } else if ((t /= d) === 1) {
        return b + c;
    }
    if (!p) {
        p = d * 0.3;
    }
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
};

export let easeOutElastic = (t, b, _c, d) => {
    let c = _c - b;
    let a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
        return b;
    } else if ((t /= d) === 1) {
        return b + c;
    }
    if (!p) {
        p = d * 0.3;
    }
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
};

export let easeInOutElastic = (t, b, _c, d) => {
    let c = _c - b;
    let a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
        return b;
    } else if ((t /= d / 2) === 2) {
        return b + c;
    }
    if (!p) {
        p = d * (0.3 * 1.5);
    }
    if (a < Math.abs(c)) {
        a = c;
        s = p / 4;
    } else {
        s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    } else {
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    }
};

export let easeInBack = (t, b, _c, d, s) => {
    let c = _c - b;
    if (s === void 0) {
        s = 1.70158;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
};

export let easeOutBack = (t, b, _c, d, s) => {
    let c = _c - b;
    if (s === void 0) {
        s = 1.70158;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
};

export let easeInOutBack = (t, b, _c, d, s) => {
    let c = _c - b;
    if (s === void 0) {
        s = 1.70158;
    }
    if ((t /= d / 2) < 1) {
        return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    } else {
        return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    }
};

export let easeInBounce = (t, b, _c, d) => {
    let c = _c - b;
    let v;
    v = easeOutBounce(d - t, 0, c, d);
    return c - v + b;
};

export let easeOutBounce = (t, b, _c, d) => {
    let c = _c - b;
    if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
};

export let easeInOutBounce = (t, b, _c, d) => {
    let c = _c - b;
    let v;
    if (t < d / 2) {
        v = easeInBounce(t * 2, 0, c, d);
        return v * 0.5 + b;
    } else {
        v = easeOutBounce(t * 2 - d, 0, c, d);
        return v * 0.5 + c * 0.5 + b;
    }
};