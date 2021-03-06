'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _index = require('../button/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../flex/index');

var _index4 = _interopRequireDefault(_index3);

var _style = require('../style');

var _getLocale = require('../_util/getLocale');

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _index5 = require('./style/index');

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Pagination = function (_React$Component) {
    (0, _inherits3['default'])(Pagination, _React$Component);

    function Pagination(props) {
        (0, _classCallCheck3['default'])(this, Pagination);

        var _this = (0, _possibleConstructorReturn3['default'])(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

        _this.state = {
            current: props.current
        };
        return _this;
    }

    (0, _createClass3['default'])(Pagination, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.current !== this.state.current) {
                this.setState({
                    current: nextProps.current
                });
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(p) {
            this.setState({
                current: p
            });
            if (this.props.onChange) {
                this.props.onChange(p);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                style = _props.style,
                mode = _props.mode,
                total = _props.total,
                simple = _props.simple;

            var locale = (0, _getLocale.getComponentLocale)(this.props, this.context, 'Pagination', function () {
                return _zh_CN2['default'];
            });
            var prevText = locale.prevText,
                nextText = locale.nextText;

            return _react2['default'].createElement(
                _style.WithTheme,
                { styles: this.props.styles, themeStyles: _index6['default'] },
                function (styles) {
                    var current = _this2.state.current;

                    var simpleItem = !simple ? _react2['default'].createElement(
                        _index4['default'].Item,
                        null,
                        _react2['default'].createElement(
                            _reactNative.View,
                            { style: [styles.numberStyle] },
                            _react2['default'].createElement(
                                _reactNative.Text,
                                { style: [styles.activeTextStyle] },
                                current
                            ),
                            _react2['default'].createElement(
                                _reactNative.Text,
                                { style: [styles.totalStyle] },
                                '/',
                                total
                            )
                        )
                    ) : _react2['default'].createElement(_index4['default'].Item, null);
                    var markup = _react2['default'].createElement(
                        _index4['default'],
                        null,
                        _react2['default'].createElement(
                            _index4['default'].Item,
                            null,
                            _react2['default'].createElement(
                                _index2['default'],
                                { disabled: current <= 1, onPress: function onPress() {
                                        return _this2.onChange(current - 1);
                                    } },
                                prevText
                            )
                        ),
                        simpleItem,
                        _react2['default'].createElement(
                            _index4['default'].Item,
                            null,
                            _react2['default'].createElement(
                                _index2['default'],
                                { disabled: current >= total, onPress: function onPress() {
                                        return _this2.onChange(current + 1);
                                    } },
                                nextText
                            )
                        )
                    );
                    if (mode === 'number') {
                        markup = _react2['default'].createElement(
                            _reactNative.View,
                            { style: [styles.numberStyle] },
                            _react2['default'].createElement(
                                _reactNative.Text,
                                { style: [styles.activeTextStyle] },
                                current
                            ),
                            _react2['default'].createElement(
                                _reactNative.Text,
                                { style: [styles.totalStyle] },
                                '/',
                                total
                            )
                        );
                    } else if (mode === 'pointer') {
                        var arr = [];
                        for (var i = 0; i < total; i++) {
                            arr.push(_react2['default'].createElement(_reactNative.View, { key: 'dot-' + i
                                // tslint:disable-next-line:jsx-no-multiline-js
                                , style: [styles.pointStyle, styles.spaceStyle, i + 1 === current && styles.pointActiveStyle] }));
                        }
                        markup = _react2['default'].createElement(
                            _reactNative.View,
                            { style: [styles.indicatorStyle, _this2.props.indicatorStyle] },
                            arr
                        );
                    }
                    return _react2['default'].createElement(
                        _reactNative.View,
                        { style: [styles.container, style] },
                        markup
                    );
                }
            );
        }
    }]);
    return Pagination;
}(_react2['default'].Component);

exports['default'] = Pagination;

Pagination.defaultProps = {
    mode: 'button',
    current: 1,
    total: 0,
    simple: false,
    onChange: function onChange() {},
    indicatorStyle: null
};
Pagination.contextTypes = {
    antLocale: _propTypes2['default'].object
};
module.exports = exports['default'];