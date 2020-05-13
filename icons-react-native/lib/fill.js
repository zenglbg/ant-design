"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.fillGlyphMap = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var fillGlyphMap = {
  "account-book": 59905,
  alert: 59906,
  "alipay-circle": 59907,
  "alipay-square": 59908,
  aliwangwang: 59909,
  "amazon-circle": 59910,
  "amazon-square": 59911,
  android: 59912,
  api: 59913,
  apple: 59914,
  appstore: 59915,
  audio: 59916,
  backward: 59917,
  bank: 59918,
  "behance-circle": 59919,
  "behance-square": 59920,
  bell: 59921,
  book: 59922,
  "box-plot": 59923,
  bug: 59924,
  build: 59925,
  bulb: 59926,
  calculator: 59927,
  calendar: 59928,
  camera: 59929,
  car: 59930,
  "caret-down": 59931,
  "caret-left": 59932,
  "caret-right": 59933,
  "caret-up": 59934,
  "carry-out": 59935,
  "check-circle": 59936,
  "check-square": 59937,
  chrome: 59938,
  "ci-circle": 59939,
  "clock-circle": 59940,
  "close-circle": 59941,
  "close-square": 59942,
  cloud: 59943,
  "code-sandbox-circle": 59944,
  "code-sandbox-square": 59945,
  code: 59946,
  "codepen-circle": 59947,
  "codepen-square": 59948,
  compass: 59949,
  contacts: 59950,
  container: 59951,
  control: 59952,
  copy: 59953,
  "copyright-circle": 59954,
  "credit-card": 59955,
  crown: 59956,
  "customer-service": 59957,
  dashboard: 59958,
  database: 59959,
  "delete": 59960,
  diff: 59961,
  "dingtalk-circle": 59962,
  "dingtalk-square": 59963,
  dislike: 59964,
  "dollar-circle": 59965,
  "down-circle": 59966,
  "down-square": 59967,
  "dribbble-circle": 59968,
  "dribbble-square": 59969,
  "dropbox-circle": 59970,
  "dropbox-square": 59971,
  edit: 59972,
  environment: 59973,
  "euro-circle": 59974,
  "exclamation-circle": 59975,
  experiment: 59976,
  "eye-invisible": 59977,
  eye: 59978,
  facebook: 59979,
  "fast-backward": 59980,
  "fast-forward": 59981,
  "file-add": 59982,
  "file-excel": 59983,
  "file-exclamation": 59984,
  "file-image": 59985,
  "file-markdown": 59986,
  "file-pdf": 59987,
  "file-ppt": 59988,
  "file-text": 59989,
  "file-unknown": 59990,
  "file-word": 59991,
  "file-zip": 59992,
  file: 59993,
  filter: 59994,
  fire: 59995,
  flag: 59996,
  "folder-add": 59997,
  "folder-open": 59998,
  folder: 59999,
  "format-painter": 60000,
  forward: 60001,
  frown: 60002,
  fund: 60003,
  "funnel-plot": 60004,
  gift: 60005,
  github: 60006,
  gitlab: 60007,
  gold: 60008,
  golden: 60009,
  "google-circle": 60010,
  "google-plus-circle": 60011,
  "google-plus-square": 60012,
  "google-square": 60013,
  hdd: 60014,
  heart: 60015,
  highlight: 60016,
  home: 60017,
  hourglass: 60018,
  html5: 60019,
  idcard: 60020,
  "ie-circle": 60021,
  "ie-square": 60022,
  "info-circle": 60023,
  instagram: 60024,
  insurance: 60025,
  interaction: 60026,
  layout: 60027,
  "left-circle": 60028,
  "left-square": 60029,
  like: 60030,
  linkedin: 60031,
  lock: 60032,
  "mac-command": 60033,
  mail: 60034,
  "medicine-box": 60035,
  "medium-circle": 60036,
  "medium-square": 60037,
  meh: 60038,
  message: 60039,
  "minus-circle": 60040,
  "minus-square": 60041,
  mobile: 60042,
  "money-collect": 60043,
  notification: 60044,
  "pause-circle": 60045,
  "pay-circle": 60046,
  phone: 60047,
  picture: 60048,
  "pie-chart": 60049,
  "play-circle": 60050,
  "play-square": 60051,
  "plus-circle": 60052,
  "plus-square": 60053,
  "pound-circle": 60054,
  printer: 60055,
  profile: 60056,
  project: 60057,
  "property-safety": 60058,
  pushpin: 60059,
  "qq-circle": 60060,
  "qq-square": 60061,
  "question-circle": 60062,
  read: 60063,
  reconciliation: 60064,
  "red-envelope": 60065,
  "reddit-circle": 60066,
  "reddit-square": 60067,
  rest: 60068,
  "right-circle": 60069,
  "right-square": 60070,
  robot: 60071,
  rocket: 60072,
  "safety-certificate": 60073,
  save: 60074,
  schedule: 60075,
  "security-scan": 60076,
  setting: 60077,
  shop: 60078,
  shopping: 60079,
  signal: 60080,
  "sketch-circle": 60081,
  "sketch-square": 60082,
  skin: 60083,
  skype: 60084,
  "slack-circle": 60085,
  "slack-square": 60086,
  sliders: 60087,
  smile: 60088,
  snippets: 60089,
  sound: 60090,
  star: 60091,
  "step-backward": 60092,
  "step-forward": 60093,
  stop: 60094,
  switcher: 60095,
  tablet: 60096,
  tag: 60097,
  tags: 60098,
  "taobao-circle": 60099,
  "taobao-square": 60100,
  thunderbolt: 60101,
  tool: 60102,
  "trademark-circle": 60103,
  trophy: 60104,
  "twitter-circle": 60105,
  "twitter-square": 60106,
  unlock: 60107,
  "up-circle": 60108,
  "up-square": 60109,
  usb: 60110,
  "video-camera": 60111,
  wallet: 60112,
  warning: 60113,
  wechat: 60114,
  "weibo-circle": 60115,
  "weibo-square": 60116,
  windows: 60117,
  yahoo: 60118,
  youtube: 60119,
  yuque: 60120,
  "zhihu-circle": 60121,
  "zhihu-square": 60122
};
exports.fillGlyphMap = fillGlyphMap;

var IconFill = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(IconFill, _React$PureComponent);

  var _super = _createSuper(IconFill);

  function IconFill() {
    _classCallCheck(this, IconFill);

    return _super.apply(this, arguments);
  }

  _createClass(IconFill, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          style = _this$props.style,
          children = _this$props.children,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 14 : _this$props$size,
          _this$props$color = _this$props.color,
          color = _this$props$color === void 0 ? "black" : _this$props$color,
          props = _objectWithoutProperties(_this$props, ["name", "style", "children", "size", "color"]);

      var styleOverrides = {
        fontFamily: "antfill",
        fontWeight: "normal",
        fontStyle: "normal",
        fontSize: size,
        color: color
      };
      var glyph = name ? fillGlyphMap[name] || "?" : "";

      if (typeof glyph === "number") {
        glyph = String.fromCharCode(glyph);
      }

      return /*#__PURE__*/React.createElement(_reactNative.Text, _extends({}, props, {
        style: [styleOverrides, style]
      }), glyph, children);
    }
  }]);

  return IconFill;
}(React.PureComponent);

exports["default"] = IconFill;