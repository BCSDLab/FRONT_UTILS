var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/jongseong/dist/index.js
var require_dist = __commonJS({
  "node_modules/jongseong/dist/index.js"(exports, module) {
    "use strict";
    var _codeForHangul = function _codeForHangul2(h) {
      return (h.charCodeAt(0) - 44032) % 28;
    };
    var _codeForZeros = function _codeForZeros2(zs) {
      var n = zs.length;
      if (n === 1) {
        return 17;
      }
      if (n === 2 || n >= 8 && n <= 11) {
        return 1;
      }
      if (n >= 3 && n <= 7) {
        return 4;
      }
      if (n >= 12 && n <= 15 || n >= 20 && n <= 23) {
        return 0;
      }
      if (n >= 16 && n <= 19) {
        return 21;
      }
      throw new Error("It's too large.");
    };
    var _codeForDigit = function _codeForDigit2(d) {
      return [21, 8, 0, 16, 0, 0, 1, 8, 8, 0][d];
    };
    var _codeForEnglish = function _codeForEnglish2(e) {
      return /ck/i.test(e) ? 1 : /.n/i.test(e) ? 4 : /ne/i.test(e) ? 4 : /.l/i.test(e) ? 8 : /le/i.test(e) ? 8 : /.m/i.test(e) ? 16 : /ob/i.test(e) ? 17 : /.p/i.test(e) ? 17 : /et/i.test(e) ? 19 : /ng/i.test(e) ? 21 : (
        /* else      */
        0
      );
    };
    var _codeForEnglishInitial = function _codeForEnglishInitial2(e) {
      switch (e.toLowerCase()) {
        case "l":
        case "r":
          return 8;
        case "m":
          return 16;
        case "n":
          return 4;
        default:
          return 0;
      }
    };
    var code = function code2(word) {
      if (!word) {
        return 0;
      }
      var w = word.replace(/\([^)]*\)$/, "");
      var last = w[w.length - 1];
      if (/[가-힣]/.test(last)) {
        return _codeForHangul(last);
      }
      if (/[1-9]0+$/.test(w)) {
        var zerosMatch = /0+$/.exec(w);
        return _codeForZeros(zerosMatch[0]);
      }
      if (/\d/.test(last)) {
        return _codeForDigit(last);
      }
      if (/[a-z]{2}$/i.test(w)) {
        return _codeForEnglish(w.slice(w.length - 2, w.length));
      }
      if (/(?:^|[^a-z])[a-z]$/i.test(w)) {
        return _codeForEnglishInitial(last);
      }
      if (/(^|[^a-z])[a-z][^a-z]?$/i.test(w)) {
        return _codeForEnglishInitial(w[w.length - 2]);
      }
      return code2(w.slice(0, w.length - 1));
    };
    var hasJongseong = function hasJongseong2(w) {
      return code(w) !== 0;
    };
    module.exports = {
      _codeForHangul,
      _codeForZeros,
      _codeForDigit,
      _codeForEnglish,
      _codeForEnglishInitial,
      code,
      hasJongseong
    };
  }
});

// node_modules/josa/dist/josaPicker.js
var require_josaPicker = __commonJS({
  "node_modules/josa/dist/josaPicker.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.get = exports.makeJosaPicker = void 0;
    var _jongseong = require_dist();
    var table = {};
    var put = function put2(j1, j2, f) {
      table[j1] = f;
      if (j2) {
        table[j2] = f;
      }
    };
    var get = function get2(j) {
      var f = table[j];
      if (!f) {
        throw new Error("Cannot handle this josa: " + j);
      }
      return f;
    };
    var makeJosaPicker = function makeJosaPicker2(j1, j2) {
      return function(w) {
        return (0, _jongseong.hasJongseong)(w) ? j1.replace(/\?$/, "") : j2;
      };
    };
    var install = function install2(j1, j2, f) {
      put(j1, j2, f || makeJosaPicker(j1, j2));
    };
    install("\uC740", "\uB294");
    install("\uC774", "\uAC00");
    install("\uC744", "\uB97C");
    install("\uACFC", "\uC640");
    install("\uC774\uC5C8", "\uC600");
    install("\uC774\uC5B4", "\uC5EC");
    install("\uC774\uC5D0\uC694", "\uC608\uC694");
    install("\uC544", "\uC57C");
    install("\uC774?", "");
    install("\uC73C\uB85C", "\uB85C", function(w) {
      return (0, _jongseong.code)(w) === 8 ? "\uB85C" : makeJosaPicker("\uC73C\uB85C", "\uB85C")(w);
    });
    exports.makeJosaPicker = makeJosaPicker;
    exports.get = get;
  }
});

// node_modules/josa/dist/fillInJosa.js
var require_fillInJosa = __commonJS({
  "node_modules/josa/dist/fillInJosa.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _josaPicker = require_josaPicker();
    var fillInJosa = function fillInJosa2(str) {
      return str.replace(
        /* +++(___ ____ ____)#{---------} */
        /(\S+(?:\([^)]*\))?)#\{([^}]+)\}/g,
        function(_, noun, josa) {
          return noun + (0, _josaPicker.get)(josa.trim())(noun);
        }
      );
    };
    exports.default = fillInJosa;
  }
});

// node_modules/josa/dist/util.js
var require_util = __commonJS({
  "node_modules/josa/dist/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.makeJosaify = exports.getJosaPicker = void 0;
    var _josaPicker = require_josaPicker();
    var makeJosaify = function makeJosaify2(josa) {
      return function(word) {
        return word + (0, _josaPicker.get)(josa)(word);
      };
    };
    var getJosaPicker = _josaPicker.get;
    exports.getJosaPicker = getJosaPicker;
    exports.makeJosaify = makeJosaify;
  }
});

// node_modules/josa/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/josa/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.makeJosaify = exports.getJosaPicker = exports.josa = void 0;
    var _fillInJosa = require_fillInJosa();
    var _fillInJosa2 = _interopRequireDefault(_fillInJosa);
    var _util = require_util();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.josa = _fillInJosa2.default;
    exports.getJosaPicker = _util.getJosaPicker;
    exports.makeJosaify = _util.makeJosaify;
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  cn: () => cn,
  sha256: () => sha256
});

// src/cn/index.ts
function cn(classes) {
  return Object.entries(classes).filter(([, value]) => value).map(([key]) => key).join(" ");
}

// src/sha256/index.ts
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

// src/index.ts
__reExport(src_exports, __toESM(require_dist2(), 1));
export {
  cn,
  sha256
};
//# sourceMappingURL=index.js.map
