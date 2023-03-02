"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ValidateForm = /** @class */ (function (_super) {
    __extends(ValidateForm, _super);
    function ValidateForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValidateForm.prototype.componentDidMount = function () {
        this.init();
    };
    ValidateForm.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.rules !== prevProps.rules) {
            this.init();
        }
    };
    ValidateForm.prototype.init = function () {
        var rules = this.props.rules;
        var errorElement = this.props.errorElement;
        var allowedKeys = [
            "validateRequired",
            "ValidateMinMax",
            "ValidateEmail",
            "ValidatePattern",
        ];
        var wrapper = document.getElementById("_validation_wrapper");
        var form = wrapper === null || wrapper === void 0 ? void 0 : wrapper.children[0];
        var submit_button = form.querySelector('button[type="submit"]') ||
            form.querySelector('input[type="submit"]');
        var errorText = document.querySelector(errorElement);
        var errorMessage = String;
        submit_button.addEventListener("submit", function () {
            if ((errorText === null || errorText === void 0 ? void 0 : errorText.innerText) === "") {
                form.submit();
            }
        });
        var setErrorText = function (message) {
            if (errorText) {
                errorText.innerText = message;
            }
        };
        var runValidateRequired = function () {
            // Check If All Required Feilds Filled
            form.addEventListener("input", function (event) {
                var input = event.target;
                input.style.borderColor = "";
            });
            var submit_button = (form === null || form === void 0 ? void 0 : form.querySelector('button[type="submit"]')) ||
                (form === null || form === void 0 ? void 0 : form.querySelector('input[type="submit"]'));
            submit_button === null || submit_button === void 0 ? void 0 : submit_button.addEventListener("click", function (event) {
                var _a, _b, _c, _d;
                event.preventDefault();
                var requiredInputs = [];
                if ((_a = rules.validateRequired) === null || _a === void 0 ? void 0 : _a.applyOnly) {
                    (_b = rules.validateRequired) === null || _b === void 0 ? void 0 : _b.applyOnly.forEach(function (inputName) {
                        requiredInputs.push(form === null || form === void 0 ? void 0 : form.querySelector("[name=\"".concat(inputName, "\"]")));
                    });
                }
                else {
                    form === null || form === void 0 ? void 0 : form.querySelectorAll("input[required]").forEach(function (input) {
                        requiredInputs.push(input);
                    });
                }
                var missingInputs = [];
                requiredInputs === null || requiredInputs === void 0 ? void 0 : requiredInputs.forEach(function (input) {
                    if (!input.value) {
                        missingInputs.push(input);
                    }
                });
                if (missingInputs.length > 0) {
                    missingInputs.forEach(function (input, index) {
                        var _a, _b, _c, _d, _e, _f, _g;
                        if ((_a = rules.validateRequired) === null || _a === void 0 ? void 0 : _a.notvalidated) {
                            (_b = rules.validateRequired) === null || _b === void 0 ? void 0 : _b.notvalidated(missingInputs);
                        }
                        if (index === 0) {
                            input.focus();
                        }
                        if (((_c = rules.validateRequired) === null || _c === void 0 ? void 0 : _c.action) === "input_red_border") {
                            if (input.style.border) {
                                input.style.borderColor = "red";
                            }
                            else {
                                input.style.border = "1px solid red";
                            }
                        }
                        else if (((_d = rules.validateRequired) === null || _d === void 0 ? void 0 : _d.action) === "show_error_message") {
                            if (rules.validateRequired.message) {
                                setErrorText(rules.validateRequired.message);
                            }
                        }
                        else if (((_e = rules.validateRequired) === null || _e === void 0 ? void 0 : _e.action) === "both") {
                            if ((_f = rules.validateRequired) === null || _f === void 0 ? void 0 : _f.message) {
                                setErrorText((_g = rules.validateRequired) === null || _g === void 0 ? void 0 : _g.message);
                            }
                            if (input.style.border) {
                                input.style.borderColor = "red";
                            }
                            else {
                                input.style.border = "1px solid red";
                            }
                        }
                    });
                }
                else {
                    if (errorText) {
                        errorText.innerText = "";
                    }
                    if ((_c = rules.validateRequired) === null || _c === void 0 ? void 0 : _c.onsuccess) {
                        (_d = rules.validateRequired) === null || _d === void 0 ? void 0 : _d.onsuccess();
                    }
                    else {
                        if (errorText.innerText === "") {
                            form.submit();
                        }
                    }
                }
            });
        };
        var runValidateMinMax = function () {
            var _a, _b;
            var inputs = form.querySelectorAll("input[min][max]");
            if (((_a = rules.ValidateMinMax) === null || _a === void 0 ? void 0 : _a.when) === "typing") {
                inputs.forEach(function (input) {
                    input.addEventListener("input", function (event) {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
                        var input = event.target;
                        var min = input.min;
                        var max = input.max;
                        var value = input.value;
                        var type = input.type;
                        var inputMinMessage = input.getAttribute("data-min-message");
                        var inputMaxMessage = input.getAttribute("data-max-message");
                        if (min && max) {
                            if (type === "number") {
                                if (value < min) {
                                    if ((_a = rules.ValidateMinMax) === null || _a === void 0 ? void 0 : _a.exceedsMin) {
                                        (_b = rules.ValidateMinMax) === null || _b === void 0 ? void 0 : _b.exceedsMin(input);
                                    }
                                    if (input.style.border) {
                                        input.style.borderColor = "red";
                                    }
                                    else {
                                        input.style.border = "1px solid red";
                                    }
                                    if (inputMinMessage) {
                                        setErrorText(inputMinMessage);
                                    }
                                    else {
                                        if ((_c = rules.ValidateMinMax) === null || _c === void 0 ? void 0 : _c.message) {
                                            setErrorText((_d = rules.ValidateMinMax) === null || _d === void 0 ? void 0 : _d.message.min);
                                        }
                                    }
                                }
                                else if (value > max) {
                                    if ((_e = rules.ValidateMinMax) === null || _e === void 0 ? void 0 : _e.exceedsMax) {
                                        (_f = rules.ValidateMinMax) === null || _f === void 0 ? void 0 : _f.exceedsMax(input);
                                    }
                                    if (input.style.border) {
                                        input.style.borderColor = "red";
                                    }
                                    else {
                                        input.style.border = "1px solid red";
                                    }
                                    if (inputMaxMessage) {
                                        setErrorText(inputMaxMessage);
                                    }
                                    else {
                                        if ((_g = rules.ValidateMinMax) === null || _g === void 0 ? void 0 : _g.message) {
                                            setErrorText((_h = rules.ValidateMinMax) === null || _h === void 0 ? void 0 : _h.message.max);
                                        }
                                    }
                                }
                                else {
                                    input.style.borderColor = "";
                                    if (errorText) {
                                        errorText.innerText = "";
                                    }
                                    if ((_j = rules.ValidateMinMax) === null || _j === void 0 ? void 0 : _j.onsuccess) {
                                        (_k = rules.ValidateMinMax) === null || _k === void 0 ? void 0 : _k.onsuccess(input);
                                    }
                                }
                            }
                            else if (type === "text") {
                                if (value.length < Number(min)) {
                                    if ((_l = rules.ValidateMinMax) === null || _l === void 0 ? void 0 : _l.exceedsMin) {
                                        (_m = rules.ValidateMinMax) === null || _m === void 0 ? void 0 : _m.exceedsMin(input);
                                    }
                                    if (input.style.border) {
                                        input.style.borderColor = "red";
                                    }
                                    else {
                                        input.style.border = "1px solid red";
                                    }
                                    if (inputMinMessage) {
                                        setErrorText(inputMinMessage);
                                    }
                                    else {
                                        if ((_o = rules.ValidateMinMax) === null || _o === void 0 ? void 0 : _o.message) {
                                            setErrorText((_p = rules.ValidateMinMax) === null || _p === void 0 ? void 0 : _p.message.min);
                                        }
                                    }
                                }
                                else if (value.length > Number(max)) {
                                    if ((_q = rules.ValidateMinMax) === null || _q === void 0 ? void 0 : _q.exceedsMax) {
                                        (_r = rules.ValidateMinMax) === null || _r === void 0 ? void 0 : _r.exceedsMax(input);
                                    }
                                    if (input.style.border) {
                                        input.style.borderColor = "red";
                                    }
                                    else {
                                        input.style.border = "1px solid red";
                                    }
                                    if (inputMaxMessage) {
                                        setErrorText(inputMaxMessage);
                                    }
                                    else {
                                        if ((_s = rules.ValidateMinMax) === null || _s === void 0 ? void 0 : _s.message) {
                                            setErrorText((_t = rules.ValidateMinMax) === null || _t === void 0 ? void 0 : _t.message.max);
                                        }
                                    }
                                }
                                else {
                                    input.style.borderColor = "";
                                    if (errorText) {
                                        errorText.innerText = "";
                                    }
                                    if ((_u = rules.ValidateMinMax) === null || _u === void 0 ? void 0 : _u.onsuccess) {
                                        (_v = rules.ValidateMinMax) === null || _v === void 0 ? void 0 : _v.onsuccess(input);
                                    }
                                }
                            }
                        }
                    });
                });
            }
            else if (((_b = rules.ValidateMinMax) === null || _b === void 0 ? void 0 : _b.when) === "onblur") {
                inputs.forEach(function (input) {
                    input.addEventListener("blur", function (event) {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
                        var input = event.target;
                        var min = input.min;
                        var max = input.max;
                        var value = input.value;
                        var type = input.type;
                        var inputMinMessage = input.getAttribute("data-min-message");
                        var inputMaxMessage = input.getAttribute("data-max-message");
                        if (min && max) {
                            if (type === "number") {
                                if (value < min) {
                                    if ((_a = rules.ValidateMinMax) === null || _a === void 0 ? void 0 : _a.exceedsMin) {
                                        (_b = rules.ValidateMinMax) === null || _b === void 0 ? void 0 : _b.exceedsMin(input);
                                    }
                                    if (input.style.border) {
                                        input.style.borderColor = "red";
                                    }
                                    else {
                                        input.style.border = "1px solid red";
                                    }
                                    if (inputMinMessage) {
                                        setErrorText(inputMinMessage);
                                    }
                                    else {
                                        if ((_c = rules.ValidateMinMax) === null || _c === void 0 ? void 0 : _c.message) {
                                            setErrorText((_d = rules.ValidateMinMax) === null || _d === void 0 ? void 0 : _d.message.min);
                                        }
                                    }
                                }
                                else if (value > max) {
                                    if ((_e = rules.ValidateMinMax) === null || _e === void 0 ? void 0 : _e.exceedsMax) {
                                        (_f = rules.ValidateMinMax) === null || _f === void 0 ? void 0 : _f.exceedsMax(input);
                                    }
                                    if (input.style.border) {
                                        input.style.borderColor = "red";
                                    }
                                    else {
                                        input.style.border = "1px solid red";
                                    }
                                    if (inputMaxMessage) {
                                        setErrorText(inputMaxMessage);
                                    }
                                    else {
                                        if ((_g = rules.ValidateMinMax) === null || _g === void 0 ? void 0 : _g.message) {
                                            setErrorText((_h = rules.ValidateMinMax) === null || _h === void 0 ? void 0 : _h.message.max);
                                        }
                                    }
                                }
                                else {
                                    input.style.borderColor = "";
                                    if (errorText) {
                                        errorText.innerText = "";
                                    }
                                    if ((_j = rules.ValidateMinMax) === null || _j === void 0 ? void 0 : _j.onsuccess) {
                                        (_k = rules.ValidateMinMax) === null || _k === void 0 ? void 0 : _k.onsuccess(input);
                                    }
                                }
                            }
                            else if (type === "text") {
                                if (value.length < Number(min)) {
                                    if ((_l = rules.ValidateMinMax) === null || _l === void 0 ? void 0 : _l.exceedsMin) {
                                        (_m = rules.ValidateMinMax) === null || _m === void 0 ? void 0 : _m.exceedsMin(input);
                                    }
                                    if (input.style.border) {
                                        input.style.borderColor = "red";
                                    }
                                    else {
                                        input.style.border = "1px solid red";
                                    }
                                    if (inputMinMessage) {
                                        setErrorText(inputMinMessage);
                                    }
                                    else {
                                        if ((_o = rules.ValidateMinMax) === null || _o === void 0 ? void 0 : _o.message) {
                                            setErrorText((_p = rules.ValidateMinMax) === null || _p === void 0 ? void 0 : _p.message.min);
                                        }
                                    }
                                }
                                else if (value.length > Number(max)) {
                                    if ((_q = rules.ValidateMinMax) === null || _q === void 0 ? void 0 : _q.exceedsMax) {
                                        (_r = rules.ValidateMinMax) === null || _r === void 0 ? void 0 : _r.exceedsMax(input);
                                    }
                                    if (input.style.border) {
                                        input.style.borderColor = "red";
                                    }
                                    else {
                                        input.style.border = "1px solid red";
                                    }
                                    if (inputMaxMessage) {
                                        setErrorText(inputMaxMessage);
                                    }
                                    else {
                                        if ((_s = rules.ValidateMinMax) === null || _s === void 0 ? void 0 : _s.message) {
                                            setErrorText((_t = rules.ValidateMinMax) === null || _t === void 0 ? void 0 : _t.message.max);
                                        }
                                    }
                                }
                                else {
                                    if (errorText) {
                                        errorText.innerText = "";
                                    }
                                    input.style.borderColor = "";
                                    if ((_u = rules.ValidateMinMax) === null || _u === void 0 ? void 0 : _u.onsuccess) {
                                        (_v = rules.ValidateMinMax) === null || _v === void 0 ? void 0 : _v.onsuccess(input);
                                    }
                                }
                            }
                        }
                    });
                });
            }
        };
        var runValidateEmail = function () {
            var _a, _b, _c, _d, _e, _f;
            var emailPattern;
            var type = (_a = rules.ValidateEmail) === null || _a === void 0 ? void 0 : _a.type;
            var emailInput = form.querySelector("input[name=\"".concat((_b = rules.ValidateEmail) === null || _b === void 0 ? void 0 : _b.emailInput, "\"]"));
            var message = (_c = rules.ValidateEmail) === null || _c === void 0 ? void 0 : _c.message;
            var onsuccess = (_d = rules.ValidateEmail) === null || _d === void 0 ? void 0 : _d.onsuccess;
            var invalid = (_e = rules.ValidateEmail) === null || _e === void 0 ? void 0 : _e.invalid;
            var when = (_f = rules.ValidateEmail) === null || _f === void 0 ? void 0 : _f.when;
            switch (type) {
                case "personal":
                    emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    break;
                case "business":
                    emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    break;
                case "yahoo":
                    emailPattern = /^[a-zA-Z0-9._%+-]+@yahoo\.com$/;
                    break;
                case "gmail":
                    emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
                    break;
                case "hotmail":
                    emailPattern = /^[a-zA-Z0-9._%+-]+@(hotmail|outlook)\.com$/;
                    break;
                case "aol":
                    emailPattern = /^[a-zA-Z0-9._%+-]+@aol\.com$/;
                    break;
                case "isp":
                    emailPattern =
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(comcast|verizon|att)\.com$/;
                    break;
                case "education":
                    emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(edu)$/;
                    break;
                case "government":
                    emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(gov)$/;
                    break;
                case "nonprofit":
                    emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(org)$/;
                    break;
                case "international":
                    emailPattern =
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}\.[a-zA-Z]{2}$/;
                    break;
                case "domain-specific":
                    emailPattern =
                        /^[a-zA-Z0-9._%+-]+@(support|sales|info)\.[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    break;
                case "alias":
                    emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    break;
                default:
                    return false;
            }
            if (when === "onblur") {
                emailInput.addEventListener("blur", function () {
                    var email = emailInput.value;
                    if (emailPattern.test(email)) {
                        if (onsuccess) {
                            onsuccess(emailInput);
                        }
                        if (errorText) {
                            errorText.innerText = "";
                        }
                        if (emailInput.style.border) {
                            emailInput.style.borderColor = "";
                        }
                        else {
                            emailInput.style.border = "";
                        }
                    }
                    else {
                        if (emailInput.style.border) {
                            emailInput.style.borderColor = "red";
                        }
                        else {
                            emailInput.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (message) {
                                errorText.innerText = message;
                            }
                        }
                    }
                });
            }
            else if (when === "typing") {
                emailInput.addEventListener("input", function () {
                    var email = emailInput.value;
                    if (emailPattern.test(email)) {
                        if (onsuccess) {
                            onsuccess(emailInput);
                        }
                        if (errorText) {
                            errorText.innerText = "";
                        }
                        if (emailInput.style.border) {
                            emailInput.style.borderColor = "";
                        }
                        else {
                            emailInput.style.border = "";
                        }
                    }
                    else {
                        if (emailInput.style.border) {
                            emailInput.style.borderColor = "red";
                        }
                        else {
                            emailInput.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (message) {
                                errorText.innerText = message;
                            }
                        }
                    }
                });
            }
        };
        var runValidatePattern = function () {
            var _a;
            var inputElement = form.querySelector("input[name=\"".concat((_a = rules.ValidatePattern) === null || _a === void 0 ? void 0 : _a.input, "\"]"));
            var options = rules.ValidatePattern;
            if ((options === null || options === void 0 ? void 0 : options.when) === "onblur") {
                inputElement.addEventListener("blur", function () {
                    var input = inputElement.value;
                    if ((options === null || options === void 0 ? void 0 : options.allowEmpty) && input.length === 0) {
                        return true;
                    }
                    var regex;
                    switch (options === null || options === void 0 ? void 0 : options.type) {
                        case 'regex':
                            regex = new RegExp(options === null || options === void 0 ? void 0 : options.pattern, options === null || options === void 0 ? void 0 : options.modifiers);
                            break;
                        case 'wildcard':
                            regex = new RegExp('^' +
                                (options === null || options === void 0 ? void 0 : options.pattern.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/\\\*/g, '.*').replace(/\\\?/g, '.')) +
                                '$', options === null || options === void 0 ? void 0 : options.modifiers);
                            break;
                        default:
                            throw new Error('Invalid validation type');
                    }
                    var isValid = regex.test(input);
                    if (isValid) {
                        if (options === null || options === void 0 ? void 0 : options.onsuccess) {
                            options === null || options === void 0 ? void 0 : options.onsuccess(inputElement);
                        }
                        if (errorText) {
                            errorText.innerText = "";
                        }
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "";
                        }
                        else {
                            inputElement.style.border = "";
                        }
                    }
                    else {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (options === null || options === void 0 ? void 0 : options.invalid) {
                            options === null || options === void 0 ? void 0 : options.invalid();
                        }
                        if (errorText) {
                            if (options === null || options === void 0 ? void 0 : options.errorMessage) {
                                errorText.innerText = options === null || options === void 0 ? void 0 : options.errorMessage;
                            }
                        }
                    }
                });
            }
            else if ((options === null || options === void 0 ? void 0 : options.when) === "typing") {
                inputElement.addEventListener("input", function () {
                    var input = inputElement.value;
                    if ((options === null || options === void 0 ? void 0 : options.allowEmpty) && input.length === 0) {
                        return true;
                    }
                    var regex;
                    switch (options === null || options === void 0 ? void 0 : options.type) {
                        case 'regex':
                            regex = new RegExp(options === null || options === void 0 ? void 0 : options.pattern, options === null || options === void 0 ? void 0 : options.modifiers);
                            break;
                        case 'wildcard':
                            regex = new RegExp('^' +
                                (options === null || options === void 0 ? void 0 : options.pattern.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/\\\*/g, '.*').replace(/\\\?/g, '.')) +
                                '$', options === null || options === void 0 ? void 0 : options.modifiers);
                            break;
                        default:
                            throw new Error('Invalid validation type');
                    }
                    var isValid = regex.test(input);
                    console.log(isValid, input, options.pattern);
                    if (isValid) {
                        if (options === null || options === void 0 ? void 0 : options.onsuccess) {
                            options === null || options === void 0 ? void 0 : options.onsuccess(inputElement);
                        }
                        if (errorText) {
                            errorText.innerText = "";
                        }
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "";
                        }
                        else {
                            inputElement.style.border = "";
                        }
                    }
                    else {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (options === null || options === void 0 ? void 0 : options.invalid) {
                            options === null || options === void 0 ? void 0 : options.invalid();
                        }
                        if (errorText) {
                            if (options === null || options === void 0 ? void 0 : options.errorMessage) {
                                errorText.innerText = options === null || options === void 0 ? void 0 : options.errorMessage;
                            }
                        }
                    }
                });
            }
        };
        if (rules) {
            if (rules.validateRequired) {
                runValidateRequired();
            }
            if (rules.ValidateMinMax) {
                runValidateMinMax();
            }
            if (rules.ValidateEmail) {
                runValidateEmail();
            }
            if (rules.ValidatePattern) {
                runValidatePattern();
            }
        }
    };
    ValidateForm.prototype.render = function () {
        return react_1.default.createElement("div", { id: "_validation_wrapper" }, this.props.children);
    };
    return ValidateForm;
}(react_1.default.Component));
exports.default = ValidateForm;
//# sourceMappingURL=index.js.map