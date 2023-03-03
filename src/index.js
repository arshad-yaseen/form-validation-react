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
var countryCodeRegexMap = {
    US: /^(\+?1)?[2-9]\d{9}$/,
    CA: /^(\+?1)?[2-9]\d{9}$/,
    MX: /^(\+?52)?(1)?\d{10}$/,
    GB: /^(\+?44|0)7\d{9}$/,
    FR: /^(\+?33|0)[67]\d{8}$/,
    DE: /^(\+49|0)[1-9]\d{10}$/,
    JP: /^(\+?81|0)\d{1,4}[ \-]?\d{1,4}[ \-]?\d{4}$/,
    AU: /^(\+?61|0)[45789]\d{8}$/,
    NZ: /^(\+?64|0)[28]\d{7,9}$/,
    IN: /^(\+?91|0)?[6789]\d{9}$/,
    CN: /^(\+?0?86\-?)?1[3456789]\d{9}$/,
    HK: /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
    SG: /^(\+65)?[89]\d{7}$/,
    TW: /^(\+?886\-?|0)?9\d{8}$/,
    KR: /^(\+?82|0)?1[0-9]{1,2}-?[0-9]{3,4}-?[0-9]{4}$/,
    TH: /^(\+66|66|0)\d{8}$/,
    PH: /^(\+?63|0)?[89]\d{9}$/,
    VN: /^(\+?84|0)?[1-9]\d{8}$/,
    MY: /^(\+?6?01){1}(([145]{1}(-|\s)?\d{7,8})|([236789]{1}(\s|-)?\d{7}))$/,
    BE: /^(\+?32|0)4?\d{8}$/,
    NL: /^(\+?31|0)6?\d{8}$/,
    IT: /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
    ES: /^(\+?34)?[-. ]?6\d{8}$/,
    PT: /^(\+351)?9[1236]\d{7}$/,
    AT: /^(\+43|0)\d{1,4}\d{3,12}$/,
    CH: /^(\+41|0)([1-9])\d{1,12}$/,
    SE: /^(\+?46|0)7\d{8}$/,
    NO: /^(\+?47)?[49]\d{7}$/,
    DK: /^(\+?45)?(\d{8})$/,
    FI: /^(\+?358|0)\s?(4(0|1|2|4|5)|50|4(6|7)|[5-7]|9\d)\s?\d{6,7}$/,
    BR: /^(\+?55|0)?([1-9]{2})?([6-9]{1})(\d{8})$/,
    AR: /^(\+?54|0)?([1-9])?([1-9])(\d{7,8})$/,
    CO: /^(\+?57|0)?([1-8]{1})?([2-4]{1})(\d{7})$/,
    PE: /^(\+?51|0)?([1-9]{2})?([1-9]{1})(\d{7})$/,
    CL: /^(\+?56|0)?([2-9]{1})?([2-9])(\d{6,7})$/,
    VE: /^(\+?58|0)?([4]{1})(1|2|4|6)(\d{7})$/,
    CR: /^(\+?506)?([2-8]{1})(\d{7})$/,
    PA: /^(\+?507)?([2-8]{1})(\d{7})$/,
    DO: /^(\+?1|0)?([8]{1})(0|1)(\d{7})$/,
    GT: /^(\+?502)?([23]{1})(\d{7})$/,
    EC: /^(\+?593|0)([679]{1})(\d{7})$/,
    UY: /^(\+?598|0)([4]{1}[2-9]{1}|[5-9]{1})(\d{6})$/,
    PY: /^(\+?595|0)([9]{1})([1-9]{1})(\d{6})$/,
    BO: /^(\+?591)?([267]{1})(\d{7})$/,
    HN: /^(\+?504)?([239]{1})(\d{7})$/,
    NI: /^(\+?505)?([5689]{1})(\d{7})$/,
    SV: /^(\+?503)?([67]{1})(\d{7})$/,
    PR: /^(\+?1)?([0]{1}[78]{1}|[2367]{1})(\d{7})$/,
    JM: /^(\+?1)?([8]{1}[79]{1}|[45]{1}[67]{1})(\d{7})$/,
    BB: /^(\+?1)?([246]{1})(\d{7})$/,
    KY: /^(\+?1)?([345]{1}([01]{1}|[69]{1})|[24]{1}([26]{1}|[46]{1})|[78]{1}([4]{1}|[5]{1}|[7]{1}|[9]{1}))(\d{6})$/,
    VG: /^(\+?1)?([284]{1})(\d{7})$/,
    TT: /^(\+?1)?([868]{1})(\d{7})$/,
    DM: /^(\+?1)?([767]{1})(\d{7})$/,
    GD: /^(\+?1)?([473]{1})(\d{7})$/,
    GH: /^(\+?233|0)?([23]0|[57][0567]|6[679]|8[124567])(\d{7})$/,
    KE: /^(\+?254|0)?([17](0|1|[3-9])[0-9]{6}|([2-9]|[4-6][0-9])[0-9]{6,7})$/,
    NG: /^(\+?234|0)?[789]\d{9}$/,
    UG: /^(\+?256|0)?([39]0|[47][057]|[568][056]|[7-9][089])(\d{7})$/,
    RW: /^(\+?250|0)?[7]\d{8}$/,
    CM: /^(\+?237|0)?(6[57]|2[2368]|3[89]|4[6-8]|[78]0|\d{2})(\d{6,7})$/,
    SN: /^(\+?221|0)?[76][05](\d{7}|\d{8})$/,
    TZ: /^(\+?255|0)?[67]\d{8}$/,
    CI: /^(\+?225|0)?[017]\d{7}$/,
    MG: /^(\+?261|0)?[2368]\d{7}$/,
    ZM: /^(\+?26[01]|0)?[567]\d{8}$/,
    ZW: /^(\+?263|0)?[17]\d{8}$/,
    MW: /^(\+?265|0)?[11768]\d{7}$/,
    LS: /^(\+?266|0)?[5-8]\d{7}$/,
    SZ: /^(\+?268|0)?[7]\d{7}$/,
    KM: /^(\+?269|0)?[269]\d{7}$/,
    DJ: /^(\+?253|0)?[77-9](\d{6})$/,
    RE: /^(\+?262|0)?[269]\d{8}$/,
    YT: /^(\+?262|0)?[639]\d{8}$/,
    WF: /^(\+?681|0)?\d{6}$/,
    NU: /^(\+?683|0)?\d{4}$/,
    TK: /^(\+?690|0)?\d{4}$/,
    FM: /^(\+?691|0)?[1-9]\d{3}$/,
    MH: /^(\+?692|0)?\d{7}$/,
    SA: /^(\+?966|0)?5[0-9]{8}$/,
    RU: /^(\+?7|8)?9\d{9}$/,
};
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
            "ValidatePhone",
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
                        case "regex":
                            regex = new RegExp(options === null || options === void 0 ? void 0 : options.pattern, options === null || options === void 0 ? void 0 : options.modifiers);
                            break;
                        case "wildcard":
                            regex = new RegExp("^" +
                                (options === null || options === void 0 ? void 0 : options.pattern.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&").replace(/\\\*/g, ".*").replace(/\\\?/g, ".")) +
                                "$", options === null || options === void 0 ? void 0 : options.modifiers);
                            break;
                        default:
                            throw new Error("Invalid validation type");
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
                        case "regex":
                            regex = new RegExp(options === null || options === void 0 ? void 0 : options.pattern, options === null || options === void 0 ? void 0 : options.modifiers);
                            break;
                        case "wildcard":
                            regex = new RegExp("^" +
                                (options === null || options === void 0 ? void 0 : options.pattern.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&").replace(/\\\*/g, ".*").replace(/\\\?/g, ".")) +
                                "$", options === null || options === void 0 ? void 0 : options.modifiers);
                            break;
                        default:
                            throw new Error("Invalid validation type");
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
        var runValidatePhone = function () {
            var _a, _b, _c, _d, _e, _f;
            var phoneInput = form.querySelector("input[name=\"".concat((_a = rules.ValidatePhone) === null || _a === void 0 ? void 0 : _a.phoneInput, "\"]"));
            var countryCode = (_b = rules.ValidatePhone) === null || _b === void 0 ? void 0 : _b.countryCode;
            var when = (_c = rules.ValidatePhone) === null || _c === void 0 ? void 0 : _c.when;
            var onsuccess = (_d = rules.ValidatePhone) === null || _d === void 0 ? void 0 : _d.onsuccess;
            var invalid = (_e = rules.ValidatePhone) === null || _e === void 0 ? void 0 : _e.invalid;
            var message = (_f = rules.ValidatePhone) === null || _f === void 0 ? void 0 : _f.message;
            var mobileRegex = /^(\+?254|0)?([17](0|1|[3-9])[0-9]{6}|([2-9]|[4-6][0-9])[0-9]{6,7})$/;
            var landlineRegex = /^(\+?254|0)?([2-69][0-9]{6,7})$/;
            if (when === "onblur") {
                phoneInput.addEventListener("blur", function () {
                    var _a, _b;
                    var phoneNumber = phoneInput.value;
                    var isValid = false;
                    if (countryCode && countryCodeRegexMap[countryCode]) {
                        isValid = countryCodeRegexMap[countryCode].test(phoneNumber);
                    }
                    else {
                        for (var _i = 0, _c = Object.values(countryCodeRegexMap); _i < _c.length; _i++) {
                            var regex = _c[_i];
                            if (regex.test(phoneNumber)) {
                                isValid = true;
                                break;
                            }
                        }
                    }
                    if (isValid) {
                        if (onsuccess) {
                            onsuccess(phoneInput);
                        }
                        if (errorText) {
                            errorText.innerText = "";
                        }
                        if (phoneInput.style.border) {
                            phoneInput.style.borderColor = "";
                        }
                        else {
                            phoneInput.style.border = "";
                        }
                    }
                    else {
                        if (phoneInput.style.border) {
                            phoneInput.style.borderColor = "red";
                        }
                        else {
                            phoneInput.style.border = "1px solid red";
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
                    if ((_a = rules.ValidatePhone) === null || _a === void 0 ? void 0 : _a.isLandlineNumber) {
                        rules.ValidatePhone.isLandlineNumber(landlineRegex.test(phoneNumber));
                    }
                    if ((_b = rules.ValidatePhone) === null || _b === void 0 ? void 0 : _b.isMobileNumber) {
                        rules.ValidatePhone.isMobileNumber(mobileRegex.test(phoneNumber));
                    }
                });
            }
            else if (when === "typing") {
                phoneInput.addEventListener("input", function () {
                    var _a, _b;
                    var phoneNumber = phoneInput.value;
                    var isValid = false;
                    if (countryCode && countryCodeRegexMap[countryCode]) {
                        isValid = countryCodeRegexMap[countryCode].test(phoneNumber);
                    }
                    else {
                        for (var _i = 0, _c = Object.values(countryCodeRegexMap); _i < _c.length; _i++) {
                            var regex = _c[_i];
                            if (regex.test(phoneNumber)) {
                                isValid = true;
                                break;
                            }
                        }
                    }
                    if (isValid) {
                        if (onsuccess) {
                            onsuccess(phoneInput);
                        }
                        if (errorText) {
                            errorText.innerText = "";
                        }
                        if (phoneInput.style.border) {
                            phoneInput.style.borderColor = "";
                        }
                        else {
                            phoneInput.style.border = "";
                        }
                    }
                    else {
                        if (phoneInput.style.border) {
                            phoneInput.style.borderColor = "red";
                        }
                        else {
                            phoneInput.style.border = "1px solid red";
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
                    if ((_a = rules.ValidatePhone) === null || _a === void 0 ? void 0 : _a.isLandlineNumber) {
                        rules.ValidatePhone.isLandlineNumber(landlineRegex.test(phoneNumber));
                    }
                    if ((_b = rules.ValidatePhone) === null || _b === void 0 ? void 0 : _b.isMobileNumber) {
                        rules.ValidatePhone.isMobileNumber(mobileRegex.test(phoneNumber));
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
            if (rules.ValidatePhone) {
                runValidatePhone();
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