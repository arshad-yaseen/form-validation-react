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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
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
        var allowedKeys = ["validateRequired", "ValidateMinMax"];
        var wrapper = document.getElementById("_validation_wrapper");
        var form = wrapper === null || wrapper === void 0 ? void 0 : wrapper.children[0];
        var submit_button = form.querySelector('button[type="submit"]') || form.querySelector('input[type="submit"]');
        var errorText = document.querySelector(errorElement);
        var errorMessage = String;
        submit_button.addEventListener("submit", function () {
            if (errorText.innerText === "") {
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
            var submit_button = (form === null || form === void 0 ? void 0 : form.querySelector('button[type="submit"]')) || (form === null || form === void 0 ? void 0 : form.querySelector('input[type="submit"]'));
            submit_button === null || submit_button === void 0 ? void 0 : submit_button.addEventListener("click", function (event) {
                var _a, _b;
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
                        var _a, _b;
                        (_a = rules.validateRequired) === null || _a === void 0 ? void 0 : _a.notvalidated(missingInputs);
                        if (index === 0) {
                            input.focus();
                        }
                        if (((_b = rules.validateRequired) === null || _b === void 0 ? void 0 : _b.action) === "input_red_border") {
                            if (rules.validateRequired.message) {
                                setErrorText(rules.validateRequired.message);
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
                    form.submit();
                }
            });
        };
        var runValidateMinMax = function () {
            var _a, _b;
            var inputs = form.querySelectorAll('input[min][max]');
            if (((_a = rules.ValidateMinMax) === null || _a === void 0 ? void 0 : _a.when) === "typing") {
                inputs.forEach(function (input) {
                    input.addEventListener('input', function (event) {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
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
                                        setErrorText((_c = rules.ValidateMinMax) === null || _c === void 0 ? void 0 : _c.message.min);
                                    }
                                }
                                else if (value > max) {
                                    if ((_d = rules.ValidateMinMax) === null || _d === void 0 ? void 0 : _d.exceedsMax) {
                                        (_e = rules.ValidateMinMax) === null || _e === void 0 ? void 0 : _e.exceedsMax(input);
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
                                        setErrorText((_f = rules.ValidateMinMax) === null || _f === void 0 ? void 0 : _f.message.max);
                                    }
                                }
                                else {
                                    input.style.borderColor = "";
                                    errorText.innerText = "";
                                }
                            }
                            else if (type === "text") {
                                if (value.length < Number(min)) {
                                    if ((_g = rules.ValidateMinMax) === null || _g === void 0 ? void 0 : _g.exceedsMin) {
                                        (_h = rules.ValidateMinMax) === null || _h === void 0 ? void 0 : _h.exceedsMin(input);
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
                                        setErrorText((_j = rules.ValidateMinMax) === null || _j === void 0 ? void 0 : _j.message.min);
                                    }
                                }
                                else if (value.length > Number(max)) {
                                    if ((_k = rules.ValidateMinMax) === null || _k === void 0 ? void 0 : _k.exceedsMax) {
                                        (_l = rules.ValidateMinMax) === null || _l === void 0 ? void 0 : _l.exceedsMax(input);
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
                                        setErrorText((_m = rules.ValidateMinMax) === null || _m === void 0 ? void 0 : _m.message.max);
                                    }
                                }
                                else {
                                    input.style.borderColor = "";
                                    errorText.innerText = "";
                                }
                            }
                        }
                    });
                });
            }
            else if (((_b = rules.ValidateMinMax) === null || _b === void 0 ? void 0 : _b.when) === "onblur") {
                inputs.forEach(function (input) {
                    input.addEventListener('blur', function (event) {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
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
                                        setErrorText((_c = rules.ValidateMinMax) === null || _c === void 0 ? void 0 : _c.message.min);
                                    }
                                }
                                else if (value > max) {
                                    if ((_d = rules.ValidateMinMax) === null || _d === void 0 ? void 0 : _d.exceedsMax) {
                                        (_e = rules.ValidateMinMax) === null || _e === void 0 ? void 0 : _e.exceedsMax(input);
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
                                        setErrorText((_f = rules.ValidateMinMax) === null || _f === void 0 ? void 0 : _f.message.max);
                                    }
                                }
                                else {
                                    input.style.borderColor = "";
                                }
                            }
                            else if (type === "text") {
                                if (value.length < Number(min)) {
                                    if ((_g = rules.ValidateMinMax) === null || _g === void 0 ? void 0 : _g.exceedsMin) {
                                        (_h = rules.ValidateMinMax) === null || _h === void 0 ? void 0 : _h.exceedsMin(input);
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
                                        setErrorText((_j = rules.ValidateMinMax) === null || _j === void 0 ? void 0 : _j.message.min);
                                    }
                                }
                                else if (value.length > Number(max)) {
                                    if ((_k = rules.ValidateMinMax) === null || _k === void 0 ? void 0 : _k.exceedsMax) {
                                        (_l = rules.ValidateMinMax) === null || _l === void 0 ? void 0 : _l.exceedsMax(input);
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
                                        setErrorText((_m = rules.ValidateMinMax) === null || _m === void 0 ? void 0 : _m.message.max);
                                    }
                                }
                                else {
                                    input.style.borderColor = "";
                                }
                            }
                        }
                    });
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
        }
    };
    ValidateForm.prototype.render = function () {
        return (react_1.default.createElement("div", { id: "_validation_wrapper" }, this.props.children));
    };
    return ValidateForm;
}(react_1.Component));
exports.default = ValidateForm;
//# sourceMappingURL=index.js.map