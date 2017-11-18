const CONTEXT_2D = '2d',
    OBJECT_ARRAY = '[object Array]',
    OBJECT_NUMBER = '[object Number]',
    OBJECT_STRING = '[object String]',
    PI_OVER_DEG180 = Math.PI / 180,
    DEG180_OVER_PI = 180 / Math.PI,
    HASH = '#',
    EMPTY_STRING = '',
    ZERO = '0',
    KONVA_WARNING = 'Konva warning: ',
    KONVA_ERROR = 'Konva error: ',
    RGB_PAREN = 'rgb(',
    COLORS = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 132, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 255, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 203],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [119, 128, 144],
        slategrey: [119, 128, 144],
        snow: [255, 255, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        transparent: [255, 255, 255, 0],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 5]
    },
    RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/;

/*
 * cherry-picked utilities from underscore.js
 */
export function _isElement(obj) {
    return !!(obj && obj.nodeType == 1);
}

export function _isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
}

export function _isObject(obj) {
    return !!obj && obj.constructor === Object;
}

export function _isArray(obj) {
    return Object.prototype.toString.call(obj) === OBJECT_ARRAY;
}

export function _isNumber(obj) {
    return Object.prototype.toString.call(obj) === OBJECT_NUMBER;
}

export function _isString(obj) {
    return Object.prototype.toString.call(obj) === OBJECT_STRING;
}

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
export function _throttle(func, wait, opts) {
    let context, args, result;
    let timeout = null;
    let previous = 0;
    let options = opts || {};
    let later = function () {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        result = func.apply(context, args);
        context = args = null;
    };

    return function () {
        let now = new Date().getTime();
        if (!previous && options.leading === false) {
            previous = now;
        }
        let remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
            context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}

/*
 * other utils
 */
export function _hasMethods(obj) {
    let names = [],
        key;

    for (key in obj) {
        if (!obj.hasOwnProperty(key)) {
            continue;
        }
        if (this._isFunction(obj[key])) {
            names.push(key);
        }
    }
    return names.length > 0;
}

export function isValidSelector(selector) {
    if (typeof selector !== 'string') {
        return false;
    }
    let firstChar = selector[0];
    return (
        firstChar === '#' ||
        firstChar === '.' ||
        firstChar === firstChar.toUpperCase()
    );
}

export function createCanvasElement() {
    return document.createElement('canvas');
}

export function _simplifyArray(arr) {
    let retArr = [],
        len = arr.length,
        n,
        val;

    for (n = 0; n < len; n++) {
        val = arr[n];
        if (_isNumber(val)) {
            val = Math.round(val * 1000) / 1000;
        } else if (!_isString(val)) {
            val = val.toString();
        }

        retArr.push(val);
    }

    return retArr;
}

/*
 * arg can be an image object or image data
 */
export function _getImage(arg, callback) {
    let imageObj, canvas;

    // if arg is null or undefined
    if (!arg) {
        callback(null);
    } else if (_isElement(arg)) {
        // if arg is already an image object
        callback(arg);
    } else if (_isString(arg)) {
        // if arg is a string, then it's a data url
        imageObj = new Image();
        imageObj.onload = function () {
            callback(imageObj);
        };
        imageObj.src = arg;
    } else if (arg.data) {
        //if arg is an object that contains the data property, it's an image object
        canvas = createCanvasElement();
        canvas.width = arg.width;
        canvas.height = arg.height;

        let _context = canvas.getContext(CONTEXT_2D);

        _context.putImageData(arg, 0, 0);
        _getImage(canvas.toDataURL(), callback);
    } else {
        callback(null);
    }
}

export function _getRGBAString(obj) {
    let red = obj.red || 0,
        green = obj.green || 0,
        blue = obj.blue || 0,
        alpha = obj.alpha || 1;

    return ['rgba(', red, ',', green, ',', blue, ',', alpha, ')'].join(
        EMPTY_STRING
    );
}

export function _rgbToHex(r, g, b) {
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export function _hexToRgb(hex) {
    hex = hex.replace(HASH, EMPTY_STRING);
    let bigint = parseInt(hex, 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

/**
 * return random hex color
 * @method
 * @memberof Konva.Util.prototype
 */
export function getRandomColor() {
    let randColor = ((Math.random() * 0xffffff) << 0).toString(16);
    while (randColor.length < 6) {
        randColor = ZERO + randColor;
    }
    return HASH + randColor;
}

/**
 * get RGB components of a color
 * @method
 * @memberof Konva.Util.prototype
 * @param {String} color
 * @example
 * // each of the following examples return {r:0, g:0, b:255}
 * let rgb = Konva.Util.getRGB('blue');
 * let rgb = Konva.Util.getRGB('#0000ff');
 * let rgb = Konva.Util.getRGB('rgb(0,0,255)');
 */
export function getRGB(color) {
    let rgb;
    // color string
    if (color in COLORS) {
        rgb = COLORS[color];
        return {
            r: rgb[0],
            g: rgb[1],
            b: rgb[2]
        };
    } else if (color[0] === HASH) {
        // hex
        return this._hexToRgb(color.substring(1));
    } else if (color.substr(0, 4) === RGB_PAREN) {
        // rgb string
        rgb = RGB_REGEX.exec(color.replace(/ /g, ''));
        return {
            r: parseInt(rgb[1], 10),
            g: parseInt(rgb[2], 10),
            b: parseInt(rgb[3], 10)
        };
    } else {
        // default
        return {
            r: 0,
            g: 0,
            b: 0
        };
    }
}

// convert any color string to RGBA object
// from https://github.com/component/color-parser
export function colorToRGBA(str) {
    str = str || 'black';
    return (
        _namedColorToRBA(str) ||
        _hex3ColorToRGBA(str) ||
        _hex6ColorToRGBA(str) ||
        _rgbColorToRGBA(str) ||
        _rgbaColorToRGBA(str)
    );
}

// Parse named css color. Like "green"
export function _namedColorToRBA(str) {
    let c = COLORS[str.toLowerCase()];
    if (!c) {
        return null;
    }
    return {
        r: c[0],
        g: c[1],
        b: c[2],
        a: 1
    };
}

// Parse rgb(n, n, n)
export function _rgbColorToRGBA(str) {
    if (str.indexOf('rgb(') === 0) {
        str = str.match(/rgb\(([^)]+)\)/)[1];
        let parts = str.split(/ *, */).map(Number);
        return {
            r: parts[0],
            g: parts[1],
            b: parts[2],
            a: 1
        };
    }
}

// Parse rgba(n, n, n, n)
export function _rgbaColorToRGBA(str) {
    if (str.indexOf('rgba(') === 0) {
        str = str.match(/rgba\(([^)]+)\)/)[1];
        let parts = str.split(/ *, */).map(Number);
        return {
            r: parts[0],
            g: parts[1],
            b: parts[2],
            a: parts[3]
        };
    }
}

// Parse #nnnnnn
export function _hex6ColorToRGBA(str) {
    if (str[0] === '#' && str.length === 7) {
        return {
            r: parseInt(str.slice(1, 3), 16),
            g: parseInt(str.slice(3, 5), 16),
            b: parseInt(str.slice(5, 7), 16),
            a: 1
        };
    }
}

// Parse #nnn
export function _hex3ColorToRGBA(str) {
    if (str[0] === '#' && str.length === 4) {
        return {
            r: parseInt(str[1] + str[1], 16),
            g: parseInt(str[2] + str[2], 16),
            b: parseInt(str[3] + str[3], 16),
            a: 1
        };
    }
}

// o1 takes precedence over o2
export function _merge(o1, o2) {
    let retObj = this._clone(o2);
    for (let key in o1) {
        if (this._isObject(o1[key])) {
            retObj[key] = this._merge(o1[key], retObj[key]);
        } else {
            retObj[key] = o1[key];
        }
    }
    return retObj;
}

export function cloneObject(obj) {
    let retObj = {};
    for (let key in obj) {
        if (_isObject(obj[key])) {
            retObj[key] = cloneObject(obj[key]);
        } else if (_isArray(obj[key])) {
            retObj[key] = cloneArray(obj[key]);
        } else {
            retObj[key] = obj[key];
        }
    }
    return retObj;
}

export function cloneArray(arr) {
    return arr.slice(0);
}

export function _degToRad(deg) {
    return deg * PI_OVER_DEG180;
}

export function _radToDeg(rad) {
    return rad * DEG180_OVER_PI;
}

export function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * adds methods to a constructor prototype
 * @method
 * @memberof Konva.Util.prototype
 * @param {Function} constructor
 * @param {Object} methods
 */
export function addMethods(constructor, methods) {
    let key;

    for (key in methods) {
        constructor.prototype[key] = methods[key];
    }
}

export function _getControlPoints(x0, y0, x1, y1, x2, y2, t) {
    let d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)),
        d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)),
        fa = t * d01 / (d01 + d12),
        fb = t * d12 / (d01 + d12),
        p1x = x1 - fa * (x2 - x0),
        p1y = y1 - fa * (y2 - y0),
        p2x = x1 + fb * (x2 - x0),
        p2y = y1 + fb * (y2 - y0);

    return [p1x, p1y, p2x, p2y];
}

export function _expandPoints(p, tension) {
    let len = p.length,
        allPoints = [],
        n,
        cp;

    for (n = 2; n < len - 2; n += 2) {
        cp = Konva.Util._getControlPoints(
            p[n - 2],
            p[n - 1],
            p[n],
            p[n + 1],
            p[n + 2],
            p[n + 3],
            tension
        );
        allPoints.push(cp[0]);
        allPoints.push(cp[1]);
        allPoints.push(p[n]);
        allPoints.push(p[n + 1]);
        allPoints.push(cp[2]);
        allPoints.push(cp[3]);
    }

    return allPoints;
}

export function _removeLastLetter(str) {
    return str.substring(0, str.length - 1);
}

export function _getProjectionToSegment(x1, y1, x2, y2, x3, y3) {
    let x, y, dist;

    let pd2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
    if (pd2 == 0) {
        x = x1;
        y = y1;
        dist = (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2);
    } else {
        let u = ((x3 - x1) * (x2 - x1) + (y3 - y1) * (y2 - y1)) / pd2;
        if (u < 0) {
            x = x1;
            y = y1;
            dist = (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3);
        } else if (u > 1.0) {
            x = x2;
            y = y2;
            dist = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3);
        } else {
            x = x1 + u * (x2 - x1);
            y = y1 + u * (y2 - y1);
            dist = (x - x3) * (x - x3) + (y - y3) * (y - y3);
        }
    }
    return [x, y, dist];
}

// line as array of points.
// line might be closed
export function _getProjectionToLine(pt, line, isClosed) {
    let pc = Konva.Util.cloneObject(pt);
    let dist = Number.MAX_VALUE;
    line.forEach(function (p1, i) {
        if (!isClosed && i === line.length - 1) {
            return;
        }
        let p2 = line[(i + 1) % line.length];
        let proj = Konva.Util._getProjectionToSegment(
            p1.x,
            p1.y,
            p2.x,
            p2.y,
            pt.x,
            pt.y
        );
        let px = proj[0],
            py = proj[1],
            pdist = proj[2];
        if (pdist < dist) {
            pc.x = px;
            pc.y = py;
            dist = pdist;
        }
    });
    return pc;
}

export function _prepareArrayForTween(startArray, endArray, isClosed) {
    let n,
        start = [],
        end = [];
    if (startArray.length > endArray.length) {
        let temp = endArray;
        endArray = startArray;
        startArray = temp;
    }
    for (n = 0; n < startArray.length; n += 2) {
        start.push({
            x: startArray[n],
            y: startArray[n + 1]
        });
    }
    for (n = 0; n < endArray.length; n += 2) {
        end.push({
            x: endArray[n],
            y: endArray[n + 1]
        });
    }

    let newStart = [];
    end.forEach(function (point) {
        let pr = Konva.Util._getProjectionToLine(point, start, isClosed);
        newStart.push(pr.x);
        newStart.push(pr.y);
    });
    return newStart;
}

export function _prepareToStringify(obj) {
    let desc;

    obj.visitedByCircularReferenceRemoval = true;

    for (let key in obj) {
        if (
            !(obj.hasOwnProperty(key) && obj[key] && typeof obj[key] == 'object')
        ) {
            continue;
        }
        desc = Object.getOwnPropertyDescriptor(obj, key);
        if (
            obj[key].visitedByCircularReferenceRemoval ||
            Konva.Util._isElement(obj[key])
        ) {
            if (desc.configurable) {
                delete obj[key];
            } else {
                return null;
            }
        } else if (Konva.Util._prepareToStringify(obj[key]) === null) {
            if (desc.configurable) {
                delete obj[key];
            } else {
                return null;
            }
        }
    }

    delete obj.visitedByCircularReferenceRemoval;

    return obj;
}