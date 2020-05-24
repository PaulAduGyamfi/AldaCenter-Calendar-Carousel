// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/EventBuilder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var EventBuilder = function EventBuilder() {
  var Title = "";
  var Day = "Dates to be announced";
  var Day2 = "";
  var _isOnCalendar = false;
  var _isOnCalendar2 = false;
  var Caption = "";
  return {
    withTitle: function withTitle(value) {
      Title = value;
      return this;
    },
    withDay: function withDay(value) {
      Day = value;
      return this;
    },
    withDay2: function withDay2(value) {
      Day2 = value;
      return this;
    },
    isOnCalendar: function isOnCalendar(value) {
      _isOnCalendar = value;
      return this;
    },
    isOnCalendar2: function isOnCalendar2(value) {
      _isOnCalendar2 = value;
      return this;
    },
    withCaption: function withCaption(value) {
      Caption = value;
      return this;
    },
    build: function build() {
      return {
        Title: Title,
        Day: Day,
        Day2: Day2,
        isOnCalendar: _isOnCalendar,
        isOnCalendar2: _isOnCalendar2,
        Caption: Caption
      };
    }
  };
};

var _default = EventBuilder;
exports.default = _default;
},{}],"src/js/EventArray.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventArray = exports.userEventMaker = void 0;

var _EventBuilder = _interopRequireDefault(require("./EventBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDefined = function isDefined(string) {
  return string != null || string != undefined;
};

var EventArray = [];
exports.EventArray = EventArray;

var userEventMaker = function userEventMaker(_ref) {
  var Title = _ref.Title,
      Day = _ref.Day,
      Day2 = _ref.Day2,
      isOnCalendar = _ref.isOnCalendar,
      isOnCalendar2 = _ref.isOnCalendar2,
      Caption = _ref.Caption;
  var event = (0, _EventBuilder.default)();
  event.withTitle(Title);

  if (isDefined(Day)) {
    var parts = Day.split('-');
    var mydate = new Date(parts[0], parts[1] - 1, parts[2]);

    if (mydate == "Invalid Date") {
      event.withDay(Day);
    } else {
      var splitArray = mydate.toDateString().split(" ");
      var monthAndDay = "<span class=\"month\">".concat(splitArray[1], "</span>  <span class=\"number\">").concat(splitArray[2], "</span> "); // document.querySelector(".day").classList.add("isOnCalendar");

      isOnCalendar = true;
      event.isOnCalendar(isOnCalendar);
      event.withDay(monthAndDay);
    }
  }

  if (isDefined(Day2)) {
    var parts2 = Day2.split('-');
    var mydate2 = new Date(parts2[0], parts2[1] - 1, parts2[2]);

    if (mydate2 == "Invalid Date") {
      event.withDay2(Day2);
    } else {
      var splitArray2 = mydate2.toDateString().split(" ");
      var monthAndDay2 = "<span class=\"month\">".concat(splitArray2[1], "</span>  <span class=\"number\">").concat(splitArray2[2], "</span> "); // document.querySelector(".day").classList.add("isOnCalendar");

      isOnCalendar2 = true;
      event.isOnCalendar2(isOnCalendar);
      event.withDay2(monthAndDay2);
    }
  }

  event.withCaption(Caption);
  EventArray.push(event.build());
};

exports.userEventMaker = userEventMaker;
},{"./EventBuilder":"src/js/EventBuilder.js"}],"src/js/EventModel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var createEventModel = function createEventModel(eventOject) {
  var element = "\n            \n            <div class=\"card\" style=\"height: auto; width: 443px;\">\n              <header>".concat(eventOject.Title, "</header>\n              <content>\n                <div class=\"calendar-wrap\">\n                    <p class=\"day ").concat(eventOject.isOnCalendar && 'calendar', "\">").concat(eventOject.Day, "</p>\n                    <p class=\"").concat(eventOject.isOnCalendar2 && 'calendar', "\">").concat(eventOject.Day2, "</p>\n                </div>\n                <p class=\"paragraph\">").concat(eventOject.Caption, "</p>\n              </content>\n            </div> \n\n            ");
  return element;
};

var _default = createEventModel;
exports.default = _default;
},{}],"src/js/index.js":[function(require,module,exports) {
"use strict";

var _EventBuilder = _interopRequireDefault(require("./EventBuilder"));

var _EventArray = require("./EventArray");

var _EventModel = _interopRequireDefault(require("./EventModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Caraousel from Glider.js Library
new Glider(document.querySelector('.glider'), {
  slidesToShow: 3,
  slideToScroll: 1,
  dots: '#dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
}); //--------------------------------------------------------------------------------------

(0, _EventArray.userEventMaker)({
  Title: "Know Your Audience",
  Caption: "An Alda-certified instructor will help scientists and other researchers learn to identify and better understand the people they will be addressing."
});
(0, _EventArray.userEventMaker)({
  Title: "Know Your Tactics",
  Day: "2020-04-02",
  Caption: "An Alda-certified instructor will help scientists and other researchers learn to identify and better understand the people they will be addressing."
});
(0, _EventArray.userEventMaker)({
  Title: "Making Your Case to Congress",
  Day: "2020-11-21",
  Day2: "2020-12-02",
  Caption: "An Alda-certified instructor will help scientists and other researchers learn to identify and better understand the people they will be addressing."
});
(0, _EventArray.userEventMaker)({
  Title: "Webinars",
  Day: "Presented live and on-demand",
  Caption: "An Alda-certified instructor will help scientists and other researchers learn to identify and better understand the people they will be addressing."
});
(0, _EventArray.userEventMaker)({
  Title: "Making Your Case to Congress",
  Day: "2020-04-03",
  Caption: "An Alda-certified instructor will help scientists and other researchers learn to identify and better understand the people they will be addressing."
});
(0, _EventArray.userEventMaker)({
  Title: "Making Your Case to Congress",
  Day: "2020-05-23",
  Caption: "An Alda-certified instructor will help scientists and other researchers learn to identify and better understand the people they will be addressing."
}); //--------------------------------------------------------------------------------------
// Map Event into Glider

var glider = '';

_EventArray.EventArray.sort(function (a, b) {
  return b.Day - a.Day;
});

_EventArray.EventArray.map(function (event) {
  return (0, _EventModel.default)(event);
}).forEach(function (card) {
  glider += card;
});

var cardWrap = document.querySelector('.glider .glider-track');
cardWrap.style.width = "".concat(_EventArray.EventArray.length * 430, "px");
cardWrap.innerHTML = glider;
},{"./EventBuilder":"src/js/EventBuilder.js","./EventArray":"src/js/EventArray.js","./EventModel":"src/js/EventModel.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58501" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map