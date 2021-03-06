import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _createClass from 'babel-runtime/helpers/createClass';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
var __rest = this && this.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};
import React from 'react';
import { Platform } from 'react-native';
import { WithTheme } from '../style';
import InputNumber from './InputNumber';
import StepperStyles from './style';

var Stepper = function (_React$Component) {
    _inherits(Stepper, _React$Component);

    function Stepper() {
        _classCallCheck(this, Stepper);

        return _possibleConstructorReturn(this, (Stepper.__proto__ || Object.getPrototypeOf(Stepper)).apply(this, arguments));
    }

    _createClass(Stepper, [{
        key: 'render',
        value: function render() {
            var inputAndroidStyle = Platform.OS === 'android' ? {
                top: 6,
                paddingTop: 0,
                height: 26
            } : {};
            var _a = this.props,
                inputStyle = _a.inputStyle,
                restProps = __rest(_a, ["inputStyle"]);
            var keyboardType = Platform.OS === 'android' ? 'numeric' : 'numbers-and-punctuation';
            return React.createElement(
                WithTheme,
                { styles: this.props.styles, themeStyles: StepperStyles },
                function (styles) {
                    return React.createElement(InputNumber, _extends({}, restProps, { styles: styles, keyboardType: keyboardType, inputStyle: [inputAndroidStyle, inputStyle] }));
                }
            );
        }
    }]);

    return Stepper;
}(React.Component);

export default Stepper;

Stepper.defaultProps = {
    step: 1,
    readOnly: false,
    disabled: false,
    inputStyle: {}
};