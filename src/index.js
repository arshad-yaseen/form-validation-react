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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        var _a = this.props, rules = _a.rules, onSubmit = _a.onSubmit;
        var errorElement = this.props.errorElement;
        var allowedKeys = [
            "validateRequired",
            "ValidateMinMax",
            "ValidateEmail",
            "ValidatePattern",
            "ValidatePhone",
            "ValidateNumber",
            "ValidateInteger",
            "ValidateFloat",
            "ValidateDate",
            "ValidateTime",
            "ValidateUrl",
            "ValidateCreditCard"
        ];
        var wrapper = document.getElementById("_validation_wrapper");
        var form = wrapper === null || wrapper === void 0 ? void 0 : wrapper.children[0];
        var submit_button = form.querySelector('button[type="submit"]') ||
            form.querySelector('input[type="submit"]');
        var errorText = document.querySelector(errorElement);
        var errorMessage = String;
        form.querySelectorAll("input").forEach(function (input, index) {
            if (input.style.transition === "") {
                input.style.transition = "0.3s ease";
                input.style.transitionDelay = "0." + (index - 1) + "s";
            }
        });
        if (submit_button) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();
                if (errorText.innerHTML === "") {
                    if (onSubmit) {
                        onSubmit(e);
                    }
                    else {
                        form.submit();
                    }
                }
            });
        }
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
                    emailPattern =
                        /^(?!.*@(?:gmail|yahoo|hotmail|outlook)\.com$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
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
        var runValidateNumber = function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            var min = (_a = rules.ValidateNumber) === null || _a === void 0 ? void 0 : _a.min;
            var max = (_b = rules.ValidateNumber) === null || _b === void 0 ? void 0 : _b.max;
            var inputName = (_c = rules.ValidateNumber) === null || _c === void 0 ? void 0 : _c.input;
            var when = (_d = rules.ValidateNumber) === null || _d === void 0 ? void 0 : _d.when;
            var decimalPlaces = (_e = rules.ValidateNumber) === null || _e === void 0 ? void 0 : _e.decimalPlaces;
            var allowNegative = (_f = rules.ValidateNumber) === null || _f === void 0 ? void 0 : _f.allowNegative;
            var integersOnly = (_g = rules.ValidateNumber) === null || _g === void 0 ? void 0 : _g.integersOnly;
            var base = (_h = rules.ValidateNumber) === null || _h === void 0 ? void 0 : _h.base;
            var customErrorMessages = (_j = rules.ValidateNumber) === null || _j === void 0 ? void 0 : _j.customErrorMessages;
            var inputElement = form.querySelector("input[name='".concat(inputName, "']"));
            var errorMessage;
            var onsuccess = (_k = rules.ValidateNumber) === null || _k === void 0 ? void 0 : _k.onsuccess;
            var invalid = (_l = rules.ValidateNumber) === null || _l === void 0 ? void 0 : _l.invalid;
            if (when === "onblur") {
                inputElement.addEventListener("blur", function () {
                    errorMessage = undefined;
                    if (errorText) {
                        errorText.innerText = "";
                    }
                    var input = inputElement.value;
                    var num = Number(input);
                    // If the input is not a valid number, return an error message
                    if (isNaN(num)) {
                        return {
                            isValid: false,
                            errorMessage: (customErrorMessages === null || customErrorMessages === void 0 ? void 0 : customErrorMessages.invalidNumber) || "Invalid number",
                        };
                    }
                    // Check if the number is within the specified range
                    if ((min !== undefined && num < min) ||
                        (max !== undefined && num > max)) {
                        errorMessage =
                            (customErrorMessages === null || customErrorMessages === void 0 ? void 0 : customErrorMessages.range) ||
                                "Number must be between ".concat(min, " and ").concat(max);
                    }
                    // Check if the number has the specified number of decimal places
                    if (decimalPlaces !== undefined) {
                        var numStr = num.toString();
                        var decimalIndex = numStr.indexOf(".");
                        var numDecimalPlaces = decimalIndex !== -1 ? numStr.length - decimalIndex - 1 : 0;
                        if (numDecimalPlaces > decimalPlaces) {
                            errorMessage =
                                (customErrorMessages === null || customErrorMessages === void 0 ? void 0 : customErrorMessages.decimalPlaces) ||
                                    "Number must have no more than ".concat(decimalPlaces, " decimal places");
                        }
                    }
                    // Check if the number is negative (if negative numbers are not allowed)
                    if (!allowNegative && num < 0) {
                        errorMessage =
                            (customErrorMessages === null || customErrorMessages === void 0 ? void 0 : customErrorMessages.negative) ||
                                "Negative numbers are not allowed";
                    }
                    // Check if the number is not an integer (if integers only are required)
                    if (integersOnly && !Number.isInteger(num)) {
                        errorMessage =
                            (customErrorMessages === null || customErrorMessages === void 0 ? void 0 : customErrorMessages.integersOnly) || "Only integers are allowed";
                    }
                    // Check if the number is in the specified base (if a base is specified)
                    if (base !== undefined) {
                        var parsedNum = parseInt(input, base);
                        if (isNaN(parsedNum)) {
                            errorMessage =
                                (customErrorMessages === null || customErrorMessages === void 0 ? void 0 : customErrorMessages.base) || "Number must be in base ".concat(base);
                        }
                    }
                    // If no error message was set, the validation passed
                    if (errorMessage === undefined) {
                        if (onsuccess) {
                            onsuccess(inputElement);
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
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage;
                            }
                        }
                    }
                });
            }
            else if (when === "typing") {
                inputElement.addEventListener("input", function () {
                    errorMessage = undefined;
                    var input = inputElement.value;
                    var num = Number(input);
                    // If the input is not a valid number, return an error message
                    if (isNaN(num)) {
                        return {
                            isValid: false,
                            errorMessage: (customErrorMessages === null || customErrorMessages === void 0 ? void 0 : customErrorMessages.invalidNumber) || "Invalid number",
                        };
                    }
                    // Check if the number is within the specified range
                    if ((min !== undefined && num < min) ||
                        (max !== undefined && num > max)) {
                        errorMessage =
                            (customErrorMessages === null || customErrorMessages === void 0 ? void 0 : customErrorMessages.range) ||
                                "Number must be between ".concat(min, " and ").concat(max);
                    }
                    // Check if the number has the specified number of decimal places
                    if (decimalPlaces !== undefined) {
                        var numStr = num.toString();
                        var decimalIndex = numStr.indexOf(".");
                        var numDecimalPlaces = decimalIndex !== -1 ? numStr.length - decimalIndex - 1 : 0;
                        if (numDecimalPlaces > decimalPlaces) {
                            errorMessage =
                                (customErrorMessages === null || customErrorMessages === void 0 ? void 0 : customErrorMessages.decimalPlaces) ||
                                    "Number must have no more than ".concat(decimalPlaces, " decimal places");
                        }
                    }
                    // Check if the number is negative (if negative numbers are not allowed)
                    if (!allowNegative && num < 0) {
                        errorMessage =
                            (customErrorMessages === null || customErrorMessages === void 0 ? void 0 : customErrorMessages.negative) ||
                                "Negative numbers are not allowed";
                    }
                    // Check if the number is not an integer (if integers only are required)
                    if (integersOnly && !Number.isInteger(num)) {
                        errorMessage =
                            (customErrorMessages === null || customErrorMessages === void 0 ? void 0 : customErrorMessages.integersOnly) || "Only integers are allowed";
                    }
                    // Check if the number is in the specified base (if a base is specified)
                    if (base !== undefined) {
                        var parsedNum = parseInt(input, base);
                        if (isNaN(parsedNum)) {
                            errorMessage =
                                (customErrorMessages === null || customErrorMessages === void 0 ? void 0 : customErrorMessages.base) || "Number must be in base ".concat(base);
                        }
                    }
                    // If no error message was set, the validation passed
                    if (errorMessage == undefined) {
                        if (onsuccess) {
                            onsuccess(inputElement);
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
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage;
                            }
                        }
                    }
                });
            }
        };
        var runValidateInteger = function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            var when = (_a = rules.ValidateInteger) === null || _a === void 0 ? void 0 : _a.when;
            var input = (_b = rules.ValidateInteger) === null || _b === void 0 ? void 0 : _b.input;
            var minValue = (_c = rules.ValidateInteger) === null || _c === void 0 ? void 0 : _c.minValue;
            var maxValue = (_d = rules.ValidateInteger) === null || _d === void 0 ? void 0 : _d.maxValue;
            var uniqueValues = (_e = rules.ValidateInteger) === null || _e === void 0 ? void 0 : _e.uniqueValues;
            var positiveOnly = (_f = rules.ValidateInteger) === null || _f === void 0 ? void 0 : _f.positiveOnly;
            var evenOnly = (_g = rules.ValidateInteger) === null || _g === void 0 ? void 0 : _g.evenOnly;
            var divisibleBy = (_h = rules.ValidateInteger) === null || _h === void 0 ? void 0 : _h.divisibleBy;
            var invalid = (_j = rules.ValidateInteger) === null || _j === void 0 ? void 0 : _j.invalid;
            var customErrorMessages = (_k = rules.ValidateInteger) === null || _k === void 0 ? void 0 : _k.customErrorMessages;
            var inputElement = form.querySelector("input[name=\"".concat(input, "\"]"));
            if (when === "onblur") {
                inputElement.addEventListener("blur", function () {
                    var value = Number(inputElement.value);
                    if (errorText) {
                        errorText.innerText = "";
                    }
                    if (inputElement.style.border) {
                        inputElement.style.borderColor = "";
                    }
                    else {
                        inputElement.style.border = "";
                    }
                    var errorMessage = __assign(__assign({}, customErrorMessages), { notANumber: "The value must be a number", notAnInteger: "The value must be an integer", outOfRange: "The value must be between ".concat(minValue, " and ").concat(maxValue), notUnique: "The value must be unique", notPositive: "The value must be positive", notEven: "The value must be even", notDivisible: "The value must be divisible by ".concat(divisibleBy) });
                    // Check that the input value is actually a number
                    if (typeof value !== "number" || isNaN(value)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage.notANumber;
                            }
                        }
                    }
                    // Check that the input value is an integer
                    if (!Number.isInteger(value)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage.notAnInteger;
                            }
                        }
                    }
                    // Check that the input value is within the specified range (if provided)
                    if ((minValue !== undefined && value < minValue) ||
                        (maxValue !== undefined && value > maxValue)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage.outOfRange;
                            }
                        }
                    }
                    // Check that the input value is unique (if required)
                    if (uniqueValues !== undefined && uniqueValues.includes(value)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage.notUnique;
                            }
                        }
                    }
                    // Check that the input value is positive (if required)
                    if (positiveOnly !== undefined && positiveOnly && value <= 0) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage.notPositive;
                            }
                        }
                    }
                    // Check that the input value is even (if required)
                    if (evenOnly !== undefined && evenOnly && value % 2 !== 0) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage.notEven;
                            }
                        }
                    }
                    // Check that the input value is divisible by a certain number (if required)
                    if (divisibleBy !== undefined && value % divisibleBy !== 0) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage.notDivisible;
                            }
                        }
                    }
                });
            }
            else if (when === "typing") {
                inputElement.addEventListener("input", function () {
                    var value = Number(inputElement.value);
                    if (errorText) {
                        errorText.innerText = "";
                    }
                    if (inputElement.style.border) {
                        inputElement.style.borderColor = "";
                    }
                    else {
                        inputElement.style.border = "";
                    }
                    var errorMessage = __assign(__assign({}, customErrorMessages), { notANumber: "The value must be a number", notAnInteger: "The value must be an integer", outOfRange: "The value must be between ".concat(minValue, " and ").concat(maxValue), notUnique: "The value must be unique", notPositive: "The value must be positive", notEven: "The value must be even", notDivisible: "The value must be divisible by ".concat(divisibleBy) });
                    // Check that the input value is actually a number
                    if (typeof value !== "number" || isNaN(value)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage.notANumber;
                            }
                        }
                    }
                    // Check that the input value is an integer
                    if (!Number.isInteger(value)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage.notAnInteger;
                            }
                        }
                    }
                    // Check that the input value is within the specified range (if provided)
                    if ((minValue !== undefined && value < minValue) ||
                        (maxValue !== undefined && value > maxValue)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage.outOfRange;
                            }
                        }
                    }
                    // Check that the input value is unique (if required)
                    if (uniqueValues !== undefined && uniqueValues.includes(value)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage.notUnique;
                            }
                        }
                    }
                    // Check that the input value is positive (if required)
                    if (positiveOnly !== undefined && positiveOnly && value <= 0) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage.notPositive;
                            }
                        }
                    }
                    // Check that the input value is even (if required)
                    if (evenOnly !== undefined && evenOnly && value % 2 !== 0) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage.notEven;
                            }
                        }
                    }
                    // Check that the input value is divisible by a certain number (if required)
                    if (divisibleBy !== undefined && value % divisibleBy !== 0) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (invalid) {
                            invalid();
                        }
                        if (errorText) {
                            if (errorMessage) {
                                errorText.innerText = errorMessage.notDivisible;
                            }
                        }
                    }
                });
            }
        };
        var runValidateFloat = function () {
            var _a, _b, _c, _d, _e, _f;
            var when = (_a = rules.ValidateFloat) === null || _a === void 0 ? void 0 : _a.when;
            var input = (_b = rules.ValidateFloat) === null || _b === void 0 ? void 0 : _b.input;
            var customErrorMessages = (_c = rules.ValidateFloat) === null || _c === void 0 ? void 0 : _c.customErrorMessages;
            var inputElement = form.querySelector("input[name=\"".concat(input, "\"]"));
            var defaultErrorMessages = __assign({ required: "This field is required", invalid: "Please enter a valid number", min: "Please enter a number greater than or equal to ".concat((_d = rules.ValidateFloat) === null || _d === void 0 ? void 0 : _d.min), max: "Please enter a number less than or equal to ".concat((_e = rules.ValidateFloat) === null || _e === void 0 ? void 0 : _e.max), precision: "Please enter a number with at most ".concat((_f = rules.ValidateFloat) === null || _f === void 0 ? void 0 : _f.precision, " decimal places") }, customErrorMessages);
            var errorMessages = defaultErrorMessages;
            if (when === "onblur") {
                inputElement.addEventListener("blur", function () {
                    var _a, _b, _c, _d;
                    if (errorText) {
                        errorText.innerText = "";
                    }
                    if (inputElement.style.border) {
                        inputElement.style.borderColor = "";
                    }
                    else {
                        inputElement.style.border = "";
                    }
                    var value = inputElement.value;
                    var isEmpty = !value.trim();
                    if (((_a = rules.ValidateFloat) === null || _a === void 0 ? void 0 : _a.required) && isEmpty) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.required;
                            }
                        }
                    }
                    var numberValue = parseFloat(value);
                    if (isNaN(numberValue) || !isFinite(numberValue)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.invalid;
                            }
                        }
                    }
                    if (((_b = rules.ValidateFloat) === null || _b === void 0 ? void 0 : _b.min) !== undefined &&
                        numberValue < rules.ValidateFloat.min) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.min;
                            }
                        }
                    }
                    if (((_c = rules.ValidateFloat) === null || _c === void 0 ? void 0 : _c.max) !== undefined &&
                        numberValue > rules.ValidateFloat.max) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.max;
                            }
                        }
                    }
                    if (((_d = rules.ValidateFloat) === null || _d === void 0 ? void 0 : _d.precision) !== undefined) {
                        var parts = value.split(".");
                        if (parts.length === 2 &&
                            parts[1].length > rules.ValidateFloat.precision) {
                            if (inputElement.style.border) {
                                inputElement.style.borderColor = "red";
                            }
                            else {
                                inputElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                if (errorMessages) {
                                    errorText.innerText = errorMessages.precision;
                                }
                            }
                        }
                    }
                });
            }
            else if (when === "typing") {
                inputElement.addEventListener("input", function () {
                    var _a, _b, _c, _d;
                    var value = inputElement.value;
                    if (errorText) {
                        errorText.innerText = "";
                    }
                    if (inputElement.style.border) {
                        inputElement.style.borderColor = "";
                    }
                    else {
                        inputElement.style.border = "";
                    }
                    var isEmpty = !value.trim();
                    if (((_a = rules.ValidateFloat) === null || _a === void 0 ? void 0 : _a.required) && isEmpty) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.required;
                            }
                        }
                    }
                    var numberValue = parseFloat(value);
                    if (isNaN(numberValue) || !isFinite(numberValue)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.invalid;
                            }
                        }
                    }
                    if (((_b = rules.ValidateFloat) === null || _b === void 0 ? void 0 : _b.min) !== undefined &&
                        numberValue < rules.ValidateFloat.min) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.min;
                            }
                        }
                    }
                    if (((_c = rules.ValidateFloat) === null || _c === void 0 ? void 0 : _c.max) !== undefined &&
                        numberValue > rules.ValidateFloat.max) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.max;
                            }
                        }
                    }
                    if (((_d = rules.ValidateFloat) === null || _d === void 0 ? void 0 : _d.precision) !== undefined) {
                        var parts = value.split(".");
                        if (parts.length === 2 &&
                            parts[1].length > rules.ValidateFloat.precision) {
                            if (inputElement.style.border) {
                                inputElement.style.borderColor = "red";
                            }
                            else {
                                inputElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                if (errorMessages) {
                                    errorText.innerText = errorMessages.precision;
                                }
                            }
                        }
                    }
                });
            }
        };
        var runValidateDate = function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            var when = (_a = rules.ValidateDate) === null || _a === void 0 ? void 0 : _a.when;
            var inputValue = (_b = rules.ValidateDate) === null || _b === void 0 ? void 0 : _b.input;
            var minDate = (_c = rules.ValidateDate) === null || _c === void 0 ? void 0 : _c.minDate;
            var maxDate = (_d = rules.ValidateDate) === null || _d === void 0 ? void 0 : _d.maxDate;
            var allowOnlyBusinessDay = (_e = rules.ValidateDate) === null || _e === void 0 ? void 0 : _e.allowOnlyBusinessDay;
            var allowOnlyWeekend = (_f = rules.ValidateDate) === null || _f === void 0 ? void 0 : _f.allowOnlyWeekend;
            var customFormat = (_g = rules.ValidateDate) === null || _g === void 0 ? void 0 : _g.customFormat;
            var timeZone = (_h = rules.ValidateDate) === null || _h === void 0 ? void 0 : _h.timeZone;
            var customErrorMessages = (_j = rules.ValidateDate) === null || _j === void 0 ? void 0 : _j.customErrorMessages;
            var inputElement = form.querySelector("input[name=\"".concat(inputValue, "\"]"));
            function isBusinessDayCheck(date) {
                // assuming weekends are Saturday (6) and Sunday (0)
                var dayOfWeek = date.getDay();
                return dayOfWeek !== 0 && dayOfWeek !== 6;
            }
            function isWeekendCheck(date) {
                var dayOfWeek = date.getDay();
                return dayOfWeek === 0 || dayOfWeek === 6;
            }
            var defaultErrorMessages = {
                invalidDate: "Invalid date format",
                minDate: "The date must be on or after ".concat((_l = (_k = rules.ValidateDate) === null || _k === void 0 ? void 0 : _k.minDate) === null || _l === void 0 ? void 0 : _l.toLocaleDateString()),
                maxDate: "The date must be on or before ".concat((_o = (_m = rules.ValidateDate) === null || _m === void 0 ? void 0 : _m.maxDate) === null || _o === void 0 ? void 0 : _o.toLocaleDateString()),
                businessDay: "Date is not a business day",
                notWeekend: "Date is not a weekend",
                invalidFormat: "Date is not in the expected format",
                invalidTimeZone: "Time zone is not valid",
            };
            var errorMessages = __assign(__assign({}, customErrorMessages), defaultErrorMessages);
            if (when === "typing") {
                inputElement.addEventListener("input", function () {
                    if (errorText) {
                        errorText.innerText = "";
                    }
                    if (inputElement.style.border) {
                        inputElement.style.borderColor = "";
                    }
                    else {
                        inputElement.style.border = "";
                    }
                    var input = inputElement.value;
                    var inputDate = new Date(input);
                    if (isNaN(inputDate.getTime())) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.invalidDate;
                            }
                        }
                    }
                    if (minDate && inputDate < minDate) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.minDate;
                            }
                        }
                    }
                    if (maxDate && inputDate > maxDate) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.maxDate;
                            }
                        }
                    }
                    if (allowOnlyBusinessDay && !isBusinessDayCheck(inputDate)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.businessDay;
                            }
                        }
                    }
                    if (allowOnlyWeekend && !isWeekendCheck(inputDate)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.notWeekend;
                            }
                        }
                    }
                    if (timeZone) {
                        try {
                            var formatter = new Intl.DateTimeFormat("en-US", __assign({ timeZone: timeZone }, (customFormat && { dateStyle: "short", timeStyle: "short" })));
                            formatter.format(inputDate);
                        }
                        catch (error) {
                            if (inputElement.style.border) {
                                inputElement.style.borderColor = "red";
                            }
                            else {
                                inputElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                if (errorMessages) {
                                    errorText.innerText = errorMessages.invalidTimeZone;
                                }
                            }
                        }
                    }
                });
            }
            else if (when === "onblur") {
                inputElement.addEventListener("blur", function () {
                    if (errorText) {
                        errorText.innerText = "";
                    }
                    if (inputElement.style.border) {
                        inputElement.style.borderColor = "";
                    }
                    else {
                        inputElement.style.border = "";
                    }
                    var input = inputElement.value;
                    var inputDate = new Date(input);
                    if (isNaN(inputDate.getTime())) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.invalidDate;
                            }
                        }
                    }
                    if (minDate && inputDate < minDate) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.minDate;
                            }
                        }
                    }
                    if (maxDate && inputDate > maxDate) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.maxDate;
                            }
                        }
                    }
                    if (allowOnlyBusinessDay && !isBusinessDayCheck(inputDate)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.businessDay;
                            }
                        }
                    }
                    if (allowOnlyWeekend && !isWeekendCheck(inputDate)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.notWeekend;
                            }
                        }
                    }
                    if (timeZone) {
                        try {
                            var formatter = new Intl.DateTimeFormat("en-US", __assign({ timeZone: timeZone }, (customFormat && { dateStyle: "short", timeStyle: "short" })));
                            formatter.format(inputDate);
                        }
                        catch (error) {
                            if (inputElement.style.border) {
                                inputElement.style.borderColor = "red";
                            }
                            else {
                                inputElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                if (errorMessages) {
                                    errorText.innerText = errorMessages.invalidTimeZone;
                                }
                            }
                        }
                    }
                });
            }
        };
        var runValidateTime = function () {
            var _a = rules.ValidateTime, when = _a.when, input = _a.input, customErrorMessages = _a.customErrorMessages, timeRange = _a.timeRange, timeInterval = _a.timeInterval, timezone = _a.timezone;
            var defaultErrorMessages = {
                invalidFormat: "Invalid time format",
                invalidRange: "Time is out of range",
                invalidTimezone: "Invalid timezone",
                invalidInterval: "Time is not within the specified interval",
            };
            var errorMessages = __assign(__assign({}, customErrorMessages), defaultErrorMessages);
            var inputElement = form.querySelector("input[name=\"".concat(input, "\"]"));
            if (when === "typing") {
                inputElement.addEventListener("input", function () {
                    if (errorText) {
                        errorText.innerText = "";
                    }
                    if (inputElement.style.border) {
                        inputElement.style.borderColor = "";
                    }
                    else {
                        inputElement.style.border = "";
                    }
                    var timeString = inputElement.value;
                    // Helper function to pad a number with leading zeros
                    function pad(num) {
                        var str = num.toString();
                        return str.length === 1 ? "0" + str : str;
                    }
                    // Check for valid time format
                    if (!timeString.match(/^([0-1][0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.invalidFormat;
                            }
                        }
                    }
                    // Check for valid time range
                    var timeParts = timeString
                        .split(":")
                        .map(function (part) { return parseInt(part, 10); });
                    var hours = timeParts[0];
                    var minutes = timeParts[1];
                    var seconds = timeParts[2] || 0;
                    if (hours < 0 ||
                        hours > 23 ||
                        minutes < 0 ||
                        minutes > 59 ||
                        seconds < 0 ||
                        seconds > 59) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.invalidRange;
                            }
                        }
                    }
                    // Check if the time string falls within a specified time range
                    if (timeRange !== undefined) {
                        var startTime = new Date("2022-01-01T".concat(timeRange.startTime));
                        var endTime = new Date("2022-01-01T".concat(timeRange.endTime));
                        var time = new Date("2022-01-01T".concat(timeString));
                        if (time < startTime || time > endTime) {
                            if (inputElement.style.border) {
                                inputElement.style.borderColor = "red";
                            }
                            else {
                                inputElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                if (errorMessages) {
                                    errorText.innerText =
                                        "Time is outside of the specified range!";
                                }
                            }
                        }
                    }
                    // Check if the time string falls within a specified interval
                    if (timeInterval !== undefined) {
                        var timeParts_1 = timeString
                            .split(":")
                            .map(function (part) { return parseInt(part, 10); });
                        var totalMinutes = timeParts_1[0] * 60 + timeParts_1[1];
                        if (totalMinutes < timeInterval.startInterval ||
                            totalMinutes > timeInterval.endInterval) {
                            if (inputElement.style.border) {
                                inputElement.style.borderColor = "red";
                            }
                            else {
                                inputElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                if (errorMessages) {
                                    errorText.innerText = errorMessages.invalidInterval;
                                }
                            }
                        }
                    }
                });
            }
            else if (when === "onblur") {
                inputElement.addEventListener("blur", function () {
                    var timeString = inputElement.value;
                    if (errorText) {
                        errorText.innerText = "";
                    }
                    if (inputElement.style.border) {
                        inputElement.style.borderColor = "";
                    }
                    else {
                        inputElement.style.border = "";
                    }
                    // Helper function to pad a number with leading zeros
                    function pad(num) {
                        var str = num.toString();
                        return str.length === 1 ? "0" + str : str;
                    }
                    // Check for valid time format
                    if (!timeString.match(/^([0-1][0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/)) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.invalidFormat;
                            }
                        }
                    }
                    // Check for valid time range
                    var timeParts = timeString
                        .split(":")
                        .map(function (part) { return parseInt(part, 10); });
                    var hours = timeParts[0];
                    var minutes = timeParts[1];
                    var seconds = timeParts[2] || 0;
                    if (hours < 0 ||
                        hours > 23 ||
                        minutes < 0 ||
                        minutes > 59 ||
                        seconds < 0 ||
                        seconds > 59) {
                        if (inputElement.style.border) {
                            inputElement.style.borderColor = "red";
                        }
                        else {
                            inputElement.style.border = "1px solid red";
                        }
                        if (errorText) {
                            if (errorMessages) {
                                errorText.innerText = errorMessages.invalidRange;
                            }
                        }
                    }
                    // Check if the time string falls within a specified time range
                    if (timeRange !== undefined) {
                        var startTime = new Date("2022-01-01T".concat(timeRange.startTime));
                        var endTime = new Date("2022-01-01T".concat(timeRange.endTime));
                        var time = new Date("2022-01-01T".concat(timeString));
                        if (time < startTime || time > endTime) {
                            if (inputElement.style.border) {
                                inputElement.style.borderColor = "red";
                            }
                            else {
                                inputElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                if (errorMessages) {
                                    errorText.innerText =
                                        "Time is outside of the specified range!";
                                }
                            }
                        }
                    }
                    // Check if the time string falls within a specified interval
                    if (timeInterval !== undefined) {
                        var timeParts_2 = timeString
                            .split(":")
                            .map(function (part) { return parseInt(part, 10); });
                        var totalMinutes = timeParts_2[0] * 60 + timeParts_2[1];
                        if (totalMinutes < timeInterval.startInterval ||
                            totalMinutes > timeInterval.endInterval) {
                            if (inputElement.style.border) {
                                inputElement.style.borderColor = "red";
                            }
                            else {
                                inputElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                if (errorMessages) {
                                    errorText.innerText = errorMessages.invalidInterval;
                                }
                            }
                        }
                    }
                });
            }
        };
        var runValidateUrl = function () {
            var when = rules.ValidateUrl.when;
            var input = rules.ValidateUrl.input;
            var customErrorMessages = rules.ValidateUrl.CustomErrorMessages;
            var checkUrl = rules.ValidateUrl.checkUrl;
            var checkProtocol = rules.ValidateUrl.checkProtocol;
            var checkDomain = rules.ValidateUrl.checkDomain;
            var checkIpAddress = rules.ValidateUrl.checkIpAddress;
            var checkInAccessibleUrl = rules.ValidateUrl.checkAccessibleUrl;
            var checkCharacters = rules.ValidateUrl.checkCharacters;
            var protocols = rules.ValidateUrl.protocols;
            var inputElement = form.querySelector("input[name=\"".concat(input, "\"]"));
            var defaultErrorMessages = {
                invalidUrl: "The URL is not well-formed",
                invalidProtocol: "The URL has an invalid protocol",
                invalidDomain: "The URL has an invalid domain name",
                invalidIpAddress: "The URL has an invalid IP address",
                inaccessibleUrl: "The URL is inaccessible",
                invalidCharacters: "The URL contains invalid characters",
                protocolNotAllowed: "The URL must use the ".concat(protocols, " protocol"),
            };
            var errorMessages = __assign(__assign({}, customErrorMessages), defaultErrorMessages);
            if (when === "typing") {
                inputElement.addEventListener("input", function () {
                    if (errorText) {
                        errorText.innerText = "";
                    }
                    if (inputElement.style.border) {
                        inputElement.style.borderColor = "";
                    }
                    else {
                        inputElement.style.border = "";
                    }
                    var url = inputElement.value;
                    var urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(?::\d{1,5})?(?:\/\S*)?$/;
                    if (checkUrl) {
                        if (!urlRegex.test(url)) {
                            if (inputElement.style.border) {
                                inputElement.style.borderColor = "red";
                            }
                            else {
                                inputElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                if (errorMessages) {
                                    errorText.innerText = errorMessages.invalidUrl;
                                }
                            }
                        }
                    }
                    try {
                        var parsedUrl = new URL(url);
                        if (protocols) {
                            if (!protocols.includes(parsedUrl.protocol.replace(":", ""))) {
                                if (inputElement.style.border) {
                                    inputElement.style.borderColor = "red";
                                }
                                else {
                                    inputElement.style.border = "1px solid red";
                                }
                                if (errorText) {
                                    if (errorMessages) {
                                        errorText.innerText = errorMessages.protocolNotAllowed;
                                    }
                                }
                            }
                        }
                        if (checkProtocol) {
                            if (!["http:", "https:", "ftp:"].includes(parsedUrl.protocol)) {
                                if (inputElement.style.border) {
                                    inputElement.style.borderColor = "red";
                                }
                                else {
                                    inputElement.style.border = "1px solid red";
                                }
                                if (errorText) {
                                    if (errorMessages) {
                                        errorText.innerText = errorMessages.invalidProtocol;
                                    }
                                }
                            }
                        }
                        if (checkDomain) {
                            if (!/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(parsedUrl.hostname)) {
                                if (inputElement.style.border) {
                                    inputElement.style.borderColor = "red";
                                }
                                else {
                                    inputElement.style.border = "1px solid red";
                                }
                                if (errorText) {
                                    if (errorMessages) {
                                        errorText.innerText = errorMessages.invalidDomain;
                                    }
                                }
                            }
                        }
                        if (checkIpAddress) {
                            if (parsedUrl.hostname.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)) {
                                var octets = parsedUrl.hostname.split(".");
                                if (octets.some(function (octet) { return parseInt(octet) > 255; })) {
                                    if (inputElement.style.border) {
                                        inputElement.style.borderColor = "red";
                                    }
                                    else {
                                        inputElement.style.border = "1px solid red";
                                    }
                                    if (errorText) {
                                        if (errorMessages) {
                                            errorText.innerText = errorMessages.invalidIpAddress;
                                        }
                                    }
                                }
                            }
                        }
                        if (checkInAccessibleUrl) {
                            fetch(url).then(function (response) {
                                if (!response.ok) {
                                    if (inputElement.style.border) {
                                        inputElement.style.borderColor = "red";
                                    }
                                    else {
                                        inputElement.style.border = "1px solid red";
                                    }
                                    if (errorText) {
                                        if (errorMessages) {
                                            errorText.innerText = errorMessages.inaccessibleUrl;
                                        }
                                    }
                                }
                            });
                        }
                    }
                    catch (err) {
                        if (checkUrl) {
                            if (inputElement.style.border) {
                                inputElement.style.borderColor = "red";
                            }
                            else {
                                inputElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                if (errorMessages) {
                                    errorText.innerText = errorMessages.invalidUrl;
                                }
                            }
                        }
                    }
                    if (checkCharacters) {
                        if (/[ <>]/.test(url)) {
                            if (inputElement.style.border) {
                                inputElement.style.borderColor = "red";
                            }
                            else {
                                inputElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                if (errorMessages) {
                                    errorText.innerText = errorMessages.invalidCharacters;
                                }
                            }
                        }
                    }
                });
            }
            else if (when === "onblur") {
                inputElement.addEventListener("blur", function () {
                    if (errorText) {
                        errorText.innerText = "";
                    }
                    if (inputElement.style.border) {
                        inputElement.style.borderColor = "";
                    }
                    else {
                        inputElement.style.border = "";
                    }
                    var url = inputElement.value;
                    var urlRegex = /^(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(?::\d{1,5})?(?:\/\S*)?$/;
                    if (checkUrl) {
                        if (!urlRegex.test(url)) {
                            if (inputElement.style.border) {
                                inputElement.style.borderColor = "red";
                            }
                            else {
                                inputElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                if (errorMessages) {
                                    errorText.innerText = errorMessages.invalidUrl;
                                }
                            }
                        }
                    }
                    try {
                        var parsedUrl = new URL(url);
                        if (protocols) {
                            if (!protocols.includes(parsedUrl.protocol.replace(":", ""))) {
                                if (inputElement.style.border) {
                                    inputElement.style.borderColor = "red";
                                }
                                else {
                                    inputElement.style.border = "1px solid red";
                                }
                                if (errorText) {
                                    if (errorMessages) {
                                        errorText.innerText = errorMessages.protocolNotAllowed;
                                    }
                                }
                            }
                        }
                        if (checkProtocol) {
                            if (!["http:", "https:", "ftp:"].includes(parsedUrl.protocol)) {
                                if (inputElement.style.border) {
                                    inputElement.style.borderColor = "red";
                                }
                                else {
                                    inputElement.style.border = "1px solid red";
                                }
                                if (errorText) {
                                    if (errorMessages) {
                                        errorText.innerText = errorMessages.invalidProtocol;
                                    }
                                }
                            }
                        }
                        if (checkDomain) {
                            if (!/^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(parsedUrl.hostname)) {
                                if (inputElement.style.border) {
                                    inputElement.style.borderColor = "red";
                                }
                                else {
                                    inputElement.style.border = "1px solid red";
                                }
                                if (errorText) {
                                    if (errorMessages) {
                                        errorText.innerText = errorMessages.invalidDomain;
                                    }
                                }
                            }
                        }
                        if (checkIpAddress) {
                            if (parsedUrl.hostname.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/)) {
                                var octets = parsedUrl.hostname.split(".");
                                if (octets.some(function (octet) { return parseInt(octet) > 255; })) {
                                    if (inputElement.style.border) {
                                        inputElement.style.borderColor = "red";
                                    }
                                    else {
                                        inputElement.style.border = "1px solid red";
                                    }
                                    if (errorText) {
                                        if (errorMessages) {
                                            errorText.innerText = errorMessages.invalidIpAddress;
                                        }
                                    }
                                }
                            }
                        }
                        if (checkInAccessibleUrl) {
                            fetch(url).then(function (response) {
                                if (!response.ok) {
                                    if (inputElement.style.border) {
                                        inputElement.style.borderColor = "red";
                                    }
                                    else {
                                        inputElement.style.border = "1px solid red";
                                    }
                                    if (errorText) {
                                        if (errorMessages) {
                                            errorText.innerText = errorMessages.inaccessibleUrl;
                                        }
                                    }
                                }
                            });
                        }
                    }
                    catch (err) {
                        if (checkUrl) {
                            if (inputElement.style.border) {
                                inputElement.style.borderColor = "red";
                            }
                            else {
                                inputElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                if (errorMessages) {
                                    errorText.innerText = errorMessages.invalidUrl;
                                }
                            }
                        }
                    }
                    if (checkCharacters) {
                        if (/[ <>]/.test(url)) {
                            if (inputElement.style.border) {
                                inputElement.style.borderColor = "red";
                            }
                            else {
                                inputElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                if (errorMessages) {
                                    errorText.innerText = errorMessages.invalidCharacters;
                                }
                            }
                        }
                    }
                });
            }
        };
        var runValidateCreditCard = function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var when = (_a = rules.ValidateCreditCard) === null || _a === void 0 ? void 0 : _a.when;
            var allowedCards = (_b = rules.ValidateCreditCard) === null || _b === void 0 ? void 0 : _b.allowedCards;
            var cardNumberValue = (_c = rules.ValidateCreditCard) === null || _c === void 0 ? void 0 : _c.cardNumber;
            var expirationDateValue = (_d = rules.ValidateCreditCard) === null || _d === void 0 ? void 0 : _d.expirationDate;
            var cvvValue = (_e = rules.ValidateCreditCard) === null || _e === void 0 ? void 0 : _e.cvv;
            var billingZipValue = (_f = rules.ValidateCreditCard) === null || _f === void 0 ? void 0 : _f.billingZip;
            var customErrorMessages = (_g = rules.ValidateCreditCard) === null || _g === void 0 ? void 0 : _g.customErrorMessages;
            var getCardType = (_h = rules.ValidateCreditCard) === null || _h === void 0 ? void 0 : _h.getCardType;
            var cardNumberElement = form.querySelector("input[name=\"".concat(cardNumberValue, "\"]"));
            var expirationDateElement = form.querySelector("input[name=\"".concat(expirationDateValue, "\"]"));
            var cvvElement = form.querySelector("input[name=\"".concat(cvvValue, "\"]"));
            var billingZipElement = form.querySelector("input[name=\"".concat(billingZipValue, "\"]"));
            var defaultErrorMessages = {
                invalidCardNumber: "Invalid credit card number",
                onlyAllowedCards: "Only ".concat(allowedCards, "  are allowed"),
                invalidExpirationDate: "Invalid expiration date",
                invalidCVV: "Invalid CVV code",
                invalidBillingZip: "Invalid billing zip code",
            };
            var errorMessages = __assign(__assign({}, customErrorMessages), defaultErrorMessages);
            function GetCardType(cardNumber) {
                // This function determines the card type based on the first digits of the card number
                // You can implement your own logic to determine the card type
                // Here's an example implementation that supports Visa, Mastercard, American Express, and Discover cards:
                if (/^4/.test(cardNumber)) {
                    return "Visa";
                }
                else if (/^5[1-5]/.test(cardNumber)) {
                    return "Mastercard";
                }
                else if (/^3[47]/.test(cardNumber)) {
                    return "American Express";
                }
                else if (/^6(?:011|5)/.test(cardNumber)) {
                    return "Discover";
                }
                else {
                    return "Unknown";
                }
            }
            function isValidCreditCardNumber(cardNumber) {
                // This function uses the Luhn algorithm to validate the credit card number
                // You can find more information about the algorithm here: https://en.wikipedia.org/wiki/Luhn_algorithm
                var strippedCardNumber = cardNumber.replace(/\D/g, "");
                var sum = 0;
                var shouldDouble = false;
                for (var i = strippedCardNumber.length - 1; i >= 0; i--) {
                    var digit = parseInt(strippedCardNumber.charAt(i), 10);
                    if (shouldDouble) {
                        if ((digit *= 2) > 9)
                            digit -= 9;
                    }
                    sum += digit;
                    shouldDouble = !shouldDouble;
                }
                return sum % 10 === 0 && sum > 0;
            }
            function isValidCreditCardExpirationDate(expirationDate) {
                // This function validates the expiration date of the credit card
                // The expiration date should be in the format "MM/YY"
                var currentDate = new Date();
                var currentYear = currentDate.getFullYear();
                var currentMonth = currentDate.getMonth() + 1;
                var _a = expirationDate.split("/"), expirationMonth = _a[0], expirationYear = _a[1];
                var expMonth = parseInt(expirationMonth, 10);
                var expYear = parseInt(expirationYear, 10) + 2000;
                // Check that the expiration date is in the future
                if (expYear > currentYear ||
                    (expYear === currentYear && expMonth >= currentMonth)) {
                    return true;
                }
                return false;
            }
            function isValidCreditCardCVV(cvv) {
                // This function validates the CVV code of the credit card
                // You can implement your own validation logic based on your requirements
                var strippedCVV = cvv.replace(/\D/g, "");
                return /^[0-9]{3,4}$/.test(strippedCVV);
            }
            function isValidCreditCardBillingZip(billingZip) {
                // This function validates the billing zip code of the credit card
                // You can implement your own validation logic based on your requirements
                var strippedBillingZip = billingZip.replace(/\D/g, "");
                return /^[0-9]{5}(?:-[0-9]{4})?$/.test(strippedBillingZip);
            }
            var checkCardNumber = function (cardNumber) {
                // Validate the credit card number
                var isValidCardNumber = isValidCreditCardNumber(cardNumber);
                if (!isValidCardNumber) {
                    var errorMessage_1 = errorMessages.invalidCardNumber;
                    return errorMessage_1;
                }
                else {
                    return "";
                }
            };
            var checkCardType = function (cardNumber) {
                var cardType = GetCardType(cardNumber);
                // Check if the card type is allowed
                if (allowedCards) {
                    if (allowedCards.length > 0 && !allowedCards.includes(cardType)) {
                        var errorMessage_2 = errorMessages.onlyAllowedCards;
                        return errorMessage_2;
                    }
                    else {
                        return "";
                    }
                }
            };
            var checkExpirationDate = function (expirationDate) {
                // Validate the expiration date
                var isValidExpirationDate = isValidCreditCardExpirationDate(expirationDate);
                if (!isValidExpirationDate) {
                    var errorMessage_3 = errorMessages.invalidExpirationDate;
                    return errorMessage_3;
                }
                else {
                    return "";
                }
            };
            var checkCvv = function (cvv) {
                // Validate the CVV code
                var isValidCVV = isValidCreditCardCVV(cvv);
                if (!isValidCVV) {
                    var errorMessage_4 = errorMessages.invalidCVV;
                    return errorMessage_4;
                }
                else {
                    return "";
                }
            };
            var checkBillingZip = function (billingZip) {
                // Validate the billing zip code
                var isValidBillingZip = isValidCreditCardBillingZip(billingZip);
                if (!isValidBillingZip) {
                    var errorMessage_5 = errorMessages.invalidBillingZip;
                    return errorMessage_5;
                }
                else {
                    return "";
                }
            };
            if (when === "typing") {
                if (cardNumberElement) {
                    cardNumberElement.addEventListener("input", function () {
                        if (errorText) {
                            errorText.innerText = "";
                        }
                        if (cardNumberElement.style.border) {
                            cardNumberElement.style.borderColor = "";
                        }
                        else {
                            cardNumberElement.style.border = "";
                        }
                        var value = cardNumberElement.value;
                        if (checkCardNumber(value) !== "") {
                            if (cardNumberElement.style.border) {
                                cardNumberElement.style.borderColor = "red";
                            }
                            else {
                                cardNumberElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                errorText.innerText = checkCardNumber(value);
                            }
                        }
                        if (allowedCards) {
                            if (checkCardType(value) !== "") {
                                if (cardNumberElement.style.border) {
                                    cardNumberElement.style.borderColor = "red";
                                }
                                else {
                                    cardNumberElement.style.border = "1px solid red";
                                }
                                if (errorText) {
                                    errorText.innerText = checkCardType(value);
                                }
                            }
                        }
                        if (getCardType) {
                            getCardType(GetCardType(value));
                        }
                    });
                }
                if (expirationDateElement) {
                    expirationDateElement.addEventListener("input", function () {
                        if (errorText) {
                            errorText.innerText = "";
                        }
                        if (expirationDateElement.style.border) {
                            expirationDateElement.style.borderColor = "";
                        }
                        else {
                            expirationDateElement.style.border = "";
                        }
                        var value = expirationDateElement.value;
                        if (checkExpirationDate(value) !== "") {
                            if (expirationDateElement.style.border) {
                                expirationDateElement.style.borderColor = "red";
                            }
                            else {
                                expirationDateElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                errorText.innerText = checkExpirationDate(value);
                            }
                        }
                    });
                }
                if (cvvElement) {
                    cvvElement.addEventListener("input", function () {
                        if (errorText) {
                            errorText.innerText = "";
                        }
                        if (cvvElement.style.border) {
                            cvvElement.style.borderColor = "";
                        }
                        else {
                            cvvElement.style.border = "";
                        }
                        var value = cvvElement.value;
                        if (checkCvv(value) !== "") {
                            if (cvvElement.style.border) {
                                cvvElement.style.borderColor = "red";
                            }
                            else {
                                cvvElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                errorText.innerText = checkCvv(value);
                            }
                        }
                    });
                }
                if (billingZipElement) {
                    billingZipElement.addEventListener("input", function () {
                        if (errorText) {
                            errorText.innerText = "";
                        }
                        if (billingZipElement.style.border) {
                            billingZipElement.style.borderColor = "";
                        }
                        else {
                            billingZipElement.style.border = "";
                        }
                        var value = billingZipElement.value;
                        if (checkBillingZip(value) !== "") {
                            if (billingZipElement.style.border) {
                                billingZipElement.style.borderColor = "red";
                            }
                            else {
                                billingZipElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                errorText.innerText = checkBillingZip(value);
                            }
                        }
                    });
                }
            }
            else if (when === "onblur") {
                if (cardNumberElement) {
                    cardNumberElement.addEventListener("blur", function () {
                        if (errorText) {
                            errorText.innerText = "";
                        }
                        if (cardNumberElement.style.border) {
                            cardNumberElement.style.borderColor = "";
                        }
                        else {
                            cardNumberElement.style.border = "";
                        }
                        var value = cardNumberElement.value;
                        if (checkCardNumber(value) !== "") {
                            if (cardNumberElement.style.border) {
                                cardNumberElement.style.borderColor = "red";
                            }
                            else {
                                cardNumberElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                errorText.innerText = checkCardNumber(value);
                            }
                        }
                        if (allowedCards) {
                            if (checkCardType(value) !== "") {
                                if (cardNumberElement.style.border) {
                                    cardNumberElement.style.borderColor = "red";
                                }
                                else {
                                    cardNumberElement.style.border = "1px solid red";
                                }
                                if (errorText) {
                                    errorText.innerText = checkCardType(value);
                                }
                            }
                        }
                        if (getCardType) {
                            getCardType(GetCardType(value));
                        }
                    });
                }
                if (expirationDateElement) {
                    expirationDateElement.addEventListener("blur", function () {
                        if (errorText) {
                            errorText.innerText = "";
                        }
                        if (expirationDateElement.style.border) {
                            expirationDateElement.style.borderColor = "";
                        }
                        else {
                            expirationDateElement.style.border = "";
                        }
                        var value = expirationDateElement.value;
                        if (checkExpirationDate(value) !== "") {
                            if (expirationDateElement.style.border) {
                                expirationDateElement.style.borderColor = "red";
                            }
                            else {
                                expirationDateElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                errorText.innerText = checkExpirationDate(value);
                            }
                        }
                    });
                }
                if (cvvElement) {
                    cvvElement.addEventListener("blur", function () {
                        if (errorText) {
                            errorText.innerText = "";
                        }
                        if (cvvElement.style.border) {
                            cvvElement.style.borderColor = "";
                        }
                        else {
                            cvvElement.style.border = "";
                        }
                        var value = cvvElement.value;
                        if (checkCvv(value) !== "") {
                            if (cvvElement.style.border) {
                                cvvElement.style.borderColor = "red";
                            }
                            else {
                                cvvElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                errorText.innerText = checkCvv(value);
                            }
                        }
                    });
                }
                if (billingZipElement) {
                    billingZipElement.addEventListener("blur", function () {
                        if (errorText) {
                            errorText.innerText = "";
                        }
                        if (billingZipElement.style.border) {
                            billingZipElement.style.borderColor = "";
                        }
                        else {
                            billingZipElement.style.border = "";
                        }
                        var value = billingZipElement.value;
                        if (checkBillingZip(value) !== "") {
                            if (billingZipElement.style.border) {
                                billingZipElement.style.borderColor = "red";
                            }
                            else {
                                billingZipElement.style.border = "1px solid red";
                            }
                            if (errorText) {
                                errorText.innerText = checkBillingZip(value);
                            }
                        }
                    });
                }
            }
        };
        if (rules) {
            if (rules.validateRequired) {
                runValidateRequired();
            }
            else if (rules.ValidateMinMax) {
                runValidateMinMax();
            }
            else if (rules.ValidateEmail) {
                runValidateEmail();
            }
            else if (rules.ValidatePattern) {
                runValidatePattern();
            }
            else if (rules.ValidatePhone) {
                runValidatePhone();
            }
            else if (rules.ValidateNumber) {
                runValidateNumber();
            }
            else if (rules.ValidateInteger) {
                runValidateInteger();
            }
            else if (rules.ValidateFloat) {
                runValidateFloat();
            }
            else if (rules.ValidateDate) {
                runValidateDate();
            }
            else if (rules.ValidateTime) {
                runValidateTime();
            }
            else if (rules.ValidateUrl) {
                runValidateUrl();
            }
            else if (rules.ValidateCreditCard) {
                runValidateCreditCard();
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