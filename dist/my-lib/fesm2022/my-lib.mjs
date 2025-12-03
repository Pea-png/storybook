import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Component, forwardRef } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

class SearchfieldComponent {
    label = '';
    placeholder = '';
    control;
    size = 'md';
    color = 'primary';
    // Start / End icons
    iconStart;
    iconEnd;
    valueChange = new EventEmitter();
    iconClick = new EventEmitter();
    onInput() {
        console.log('User typed:', this.control.value);
        this.valueChange.emit(this.control.value);
    }
    clearInput() {
        this.control.setValue('');
        this.control.markAsUntouched();
        this.valueChange.emit('');
    }
    clickIcon(position) { this.iconClick.emit(position); }
    hasText() { return !!this.control.value; }
    get inputClasses() {
        return {
            'has-icon-start': !!this.iconStart,
            'has-icon-end': !!this.iconEnd || this.hasText(),
        };
    }
    get clearButtonClasses() {
        return {
            'with-end-icon': !!this.iconEnd,
            'without-end-icon': !this.iconEnd
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.14", ngImport: i0, type: SearchfieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.14", type: SearchfieldComponent, isStandalone: true, selector: "app-searchfield", inputs: { label: "label", placeholder: "placeholder", control: "control", size: "size", color: "color", iconStart: "iconStart", iconEnd: "iconEnd" }, outputs: { valueChange: "valueChange", iconClick: "iconClick" }, ngImport: i0, template: "<div class=\"textfield\" [ngClass]=\"['textfield--' + size, 'color-' + color]\">\n  <label class=\"textfield__label\">{{ label }}</label>\n\n  <div class=\"textfield__input-wrapper\">\n    <!-- Start Icon -->\n    <span\n      *ngIf=\"iconStart\"\n      class=\"textfield__icon-start material-symbols-outlined\"\n      (click)=\"clickIcon('start')\"\n    >\n      {{ iconStart }}\n    </span>\n\n    <!-- Input -->\n    <input\n      type=\"text\"\n      [formControl]=\"control\"\n      [placeholder]=\"placeholder\"\n      (input)=\"onInput()\"\n      class=\"textfield__input\"\n      [ngClass]=\"inputClasses\"\n    />\n\n    <!-- Clear Button -->\n<span\n  *ngIf=\"hasText()\"\n  class=\"textfield__clear material-symbols-outlined\"\n  [ngClass]=\"clearButtonClasses\"\n  (click)=\"clearInput()\"\n>\n  clear\n</span>\n\n\n    <!-- End Icon -->\n    <span\n      *ngIf=\"iconEnd\"\n      class=\"textfield__icon-end material-symbols-outlined\"\n      (click)=\"clickIcon('end')\"\n    >\n      {{ iconEnd }}\n    </span>\n  </div>\n</div>", styles: [".textfield{margin-bottom:4px;font-family:Arial,sans-serif}.textfield__label{display:block;margin-bottom:4px;font-size:12px;color:#767c89}.textfield__helper{font-size:12px;margin-top:4px;color:#767c89}.textfield__error{font-size:12px;margin-top:4px;color:#ec6a6a}.textfield__input-wrapper{position:relative}.textfield__input{width:100%;padding:0 8px;border:1px solid #d5d6d6;border-radius:6px;font-size:12px;height:40px;transition:.2s}.textfield__input:focus{outline:none;box-shadow:0 0 0 1px #2563eb}.textfield__input::placeholder{color:#a0aec0;font-size:12px;opacity:1}.textfield__input.has-icon-start{padding-left:24px}.textfield__input.has-icon-end{padding-right:24px}.textfield__input.has-clear-button.has-icon-end{padding-right:48px}.textfield__input.has-clear-button:not(.has-icon-end){padding-right:28px}.textfield__icon-start,.textfield__icon-end{position:absolute;top:50%;transform:translateY(-50%);cursor:pointer;font-family:Material Symbols Outlined;font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 24;font-size:16px;color:#666;display:flex;align-items:center;justify-content:center;width:16px;height:16px}.textfield__icon-start{left:8px}.textfield__icon-end{right:8px}.textfield__clear{position:absolute;top:50%;transform:translateY(-50%);cursor:pointer;font-family:Material Symbols Outlined;font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 24;font-size:16px;color:#666;display:flex;align-items:center;justify-content:center;opacity:.6}.textfield__clear:hover{opacity:1}.textfield__clear.with-end-icon{right:28px}.textfield__clear.without-end-icon{right:8px}.textfield--sm .textfield__input{height:32px;font-size:12px}.textfield--md .textfield__input{height:40px;font-size:14px}.textfield--lg .textfield__input{height:42px;font-size:16px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.14", ngImport: i0, type: SearchfieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-searchfield', standalone: true, imports: [CommonModule, ReactiveFormsModule], template: "<div class=\"textfield\" [ngClass]=\"['textfield--' + size, 'color-' + color]\">\n  <label class=\"textfield__label\">{{ label }}</label>\n\n  <div class=\"textfield__input-wrapper\">\n    <!-- Start Icon -->\n    <span\n      *ngIf=\"iconStart\"\n      class=\"textfield__icon-start material-symbols-outlined\"\n      (click)=\"clickIcon('start')\"\n    >\n      {{ iconStart }}\n    </span>\n\n    <!-- Input -->\n    <input\n      type=\"text\"\n      [formControl]=\"control\"\n      [placeholder]=\"placeholder\"\n      (input)=\"onInput()\"\n      class=\"textfield__input\"\n      [ngClass]=\"inputClasses\"\n    />\n\n    <!-- Clear Button -->\n<span\n  *ngIf=\"hasText()\"\n  class=\"textfield__clear material-symbols-outlined\"\n  [ngClass]=\"clearButtonClasses\"\n  (click)=\"clearInput()\"\n>\n  clear\n</span>\n\n\n    <!-- End Icon -->\n    <span\n      *ngIf=\"iconEnd\"\n      class=\"textfield__icon-end material-symbols-outlined\"\n      (click)=\"clickIcon('end')\"\n    >\n      {{ iconEnd }}\n    </span>\n  </div>\n</div>", styles: [".textfield{margin-bottom:4px;font-family:Arial,sans-serif}.textfield__label{display:block;margin-bottom:4px;font-size:12px;color:#767c89}.textfield__helper{font-size:12px;margin-top:4px;color:#767c89}.textfield__error{font-size:12px;margin-top:4px;color:#ec6a6a}.textfield__input-wrapper{position:relative}.textfield__input{width:100%;padding:0 8px;border:1px solid #d5d6d6;border-radius:6px;font-size:12px;height:40px;transition:.2s}.textfield__input:focus{outline:none;box-shadow:0 0 0 1px #2563eb}.textfield__input::placeholder{color:#a0aec0;font-size:12px;opacity:1}.textfield__input.has-icon-start{padding-left:24px}.textfield__input.has-icon-end{padding-right:24px}.textfield__input.has-clear-button.has-icon-end{padding-right:48px}.textfield__input.has-clear-button:not(.has-icon-end){padding-right:28px}.textfield__icon-start,.textfield__icon-end{position:absolute;top:50%;transform:translateY(-50%);cursor:pointer;font-family:Material Symbols Outlined;font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 24;font-size:16px;color:#666;display:flex;align-items:center;justify-content:center;width:16px;height:16px}.textfield__icon-start{left:8px}.textfield__icon-end{right:8px}.textfield__clear{position:absolute;top:50%;transform:translateY(-50%);cursor:pointer;font-family:Material Symbols Outlined;font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 24;font-size:16px;color:#666;display:flex;align-items:center;justify-content:center;opacity:.6}.textfield__clear:hover{opacity:1}.textfield__clear.with-end-icon{right:28px}.textfield__clear.without-end-icon{right:8px}.textfield--sm .textfield__input{height:32px;font-size:12px}.textfield--md .textfield__input{height:40px;font-size:14px}.textfield--lg .textfield__input{height:42px;font-size:16px}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], control: [{
                type: Input
            }], size: [{
                type: Input
            }], color: [{
                type: Input
            }], iconStart: [{
                type: Input
            }], iconEnd: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], iconClick: [{
                type: Output
            }] } });

class TextfieldComponent {
    label = '';
    placeholder = '';
    size = 'sm';
    color = 'primary';
    helperText = '';
    disabled = false;
    onlyNumbers = false;
    control;
    value = '';
    valueChange = new EventEmitter();
    // ControlValueAccessor callbacks  
    onChange = () => { };
    onTouched = () => { };
    writeValue(obj) {
        this.value = obj ?? '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    onBlur() {
        if (this.control) {
            this.control.markAsTouched();
            this.control.setValue(this.value);
        }
        this.onChange(this.value);
        this.onTouched();
        this.valueChange.emit(this.value);
    }
    // จำกัดเฉพาะตัวเลข
    onKeyDown(event) {
        if (this.onlyNumbers &&
            !/[0-9]/.test(event.key) &&
            !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(event.key)) {
            event.preventDefault();
        }
    }
    clearInput() {
        if (this.control) {
            this.control.setValue('');
            this.control.markAsUntouched();
        }
        this.value = '';
        this.onChange(this.value);
        this.onTouched();
        this.valueChange?.emit(this.value);
    }
    get state() {
        if (this.control?.invalid && this.control?.touched)
            return 'error';
        if (this.control?.valid && this.control?.touched)
            return 'success';
        return 'default';
    }
    get errorText() {
        if (!this.control?.errors)
            return '';
        if (this.control.errors['required'])
            return 'This field is required';
        if (this.control.errors['maxlength'])
            return `Maximum ${this.control.errors['maxlength'].requiredLength} characters`;
        if (this.control.errors['pattern'])
            return 'Number only';
        return 'Invalid format';
    }
    get hasValue() {
        return this.control ? !!this.control.value : !!this.value;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.14", ngImport: i0, type: TextfieldComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.14", type: TextfieldComponent, isStandalone: true, selector: "app-textfield", inputs: { label: "label", placeholder: "placeholder", size: "size", color: "color", helperText: "helperText", disabled: "disabled", onlyNumbers: "onlyNumbers", control: "control", value: "value" }, outputs: { valueChange: "valueChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => TextfieldComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div\n  class=\"textfield\"\n  [ngClass]=\"[\n    'textfield--' + size,\n    state === 'error' ? 'textfield--error' : 'textfield--' + state,\n    state === 'error' ? 'color-error' : 'color-' + color\n  ]\"\n>\n  <!-- Label -->\n  <label class=\"textfield__label\">{{ label }}</label>\n\n  <!-- Input wrapper -->\n  <div class=\"textfield__input-wrapper\">\n\n    <!-- \u0E43\u0E0A\u0E49 FormControl \u0E16\u0E49\u0E32\u0E21\u0E35 -->\n    <input\n      *ngIf=\"control; else ngModelInput\"\n      type=\"text\"\n      class=\"textfield__input\"\n      [formControl]=\"control\"\n      [placeholder]=\"placeholder\"\n      (blur)=\"onBlur()\"\n      (keydown)=\"onKeyDown($event)\"\n    />\n\n    <!-- \u0E16\u0E49\u0E32\u0E44\u0E21\u0E48\u0E21\u0E35 FormControl \u0E43\u0E0A\u0E49 ngModel -->\n    <ng-template #ngModelInput>\n      <input\n        type=\"text\"\n        class=\"textfield__input\"\n        [(ngModel)]=\"value\"\n        [placeholder]=\"placeholder\"\n        (blur)=\"onBlur()\"\n        (keydown)=\"onKeyDown($event)\"\n      />\n    </ng-template>\n\n    <!-- \u0E1B\u0E38\u0E48\u0E21 clear -->\n    <button\n      *ngIf=\"hasValue\"\n      type=\"button\"\n      class=\"textfield__clear\"\n      (click)=\"clearInput()\"\n    >\n      clear\n    </button>\n\n  </div>\n\n  <!-- \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21 error -->\n  <p *ngIf=\"state === 'error'\" class=\"textfield__error\">{{ errorText }}</p>\n\n  <!-- helper text \u0E41\u0E2A\u0E14\u0E07\u0E15\u0E25\u0E2D\u0E14 -->\n  <p class=\"textfield__helper\">{{ helperText }}</p>\n</div>", styles: [".textfield{margin-bottom:4px;font-family:Arial,sans-serif}.textfield__label{display:block;margin-bottom:4px;font-size:12px;color:#767c89}.textfield__helper{font-size:12px;margin-top:4px;color:#767c89}.textfield__error{font-size:12px;margin-top:4px;color:#ec6a6a}.textfield__input-wrapper{position:relative}.textfield__input{width:100%;box-sizing:border-box;padding:.5rem 40px .5rem 8px;border:1px solid #d5d6d6;border-radius:6px;font-size:12px;height:40px;transition:.2s}.textfield__input:focus{outline:none;box-shadow:0 0 0 1px #2563eb}.textfield__input::placeholder{color:#a0aec0;font-size:12px;opacity:1}.textfield.color-primary .textfield__input{border-color:#c5c5c5}.textfield.color-secondary .textfield__input{border-color:#9c27b0}.textfield.color-success .textfield__input{border-color:#4caf50}.textfield.color-error .textfield__input{border-color:#ec6a6a}.textfield__clear{position:absolute;top:50%;right:8px;transform:translateY(-50%);cursor:pointer;border:none;background:transparent;font-family:Material Symbols Outlined;font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 24;font-size:16px;color:#666;display:flex;align-items:center;justify-content:center;opacity:.6}.textfield__clear:hover{opacity:1}.textfield--sm .textfield__input{height:32px;font-size:12px}.textfield--md .textfield__input{height:40px;font-size:14px}.textfield--lg .textfield__input{height:42px;font-size:16px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.14", ngImport: i0, type: TextfieldComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-textfield', standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => TextfieldComponent),
                            multi: true
                        }
                    ], template: "<div\n  class=\"textfield\"\n  [ngClass]=\"[\n    'textfield--' + size,\n    state === 'error' ? 'textfield--error' : 'textfield--' + state,\n    state === 'error' ? 'color-error' : 'color-' + color\n  ]\"\n>\n  <!-- Label -->\n  <label class=\"textfield__label\">{{ label }}</label>\n\n  <!-- Input wrapper -->\n  <div class=\"textfield__input-wrapper\">\n\n    <!-- \u0E43\u0E0A\u0E49 FormControl \u0E16\u0E49\u0E32\u0E21\u0E35 -->\n    <input\n      *ngIf=\"control; else ngModelInput\"\n      type=\"text\"\n      class=\"textfield__input\"\n      [formControl]=\"control\"\n      [placeholder]=\"placeholder\"\n      (blur)=\"onBlur()\"\n      (keydown)=\"onKeyDown($event)\"\n    />\n\n    <!-- \u0E16\u0E49\u0E32\u0E44\u0E21\u0E48\u0E21\u0E35 FormControl \u0E43\u0E0A\u0E49 ngModel -->\n    <ng-template #ngModelInput>\n      <input\n        type=\"text\"\n        class=\"textfield__input\"\n        [(ngModel)]=\"value\"\n        [placeholder]=\"placeholder\"\n        (blur)=\"onBlur()\"\n        (keydown)=\"onKeyDown($event)\"\n      />\n    </ng-template>\n\n    <!-- \u0E1B\u0E38\u0E48\u0E21 clear -->\n    <button\n      *ngIf=\"hasValue\"\n      type=\"button\"\n      class=\"textfield__clear\"\n      (click)=\"clearInput()\"\n    >\n      clear\n    </button>\n\n  </div>\n\n  <!-- \u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21 error -->\n  <p *ngIf=\"state === 'error'\" class=\"textfield__error\">{{ errorText }}</p>\n\n  <!-- helper text \u0E41\u0E2A\u0E14\u0E07\u0E15\u0E25\u0E2D\u0E14 -->\n  <p class=\"textfield__helper\">{{ helperText }}</p>\n</div>", styles: [".textfield{margin-bottom:4px;font-family:Arial,sans-serif}.textfield__label{display:block;margin-bottom:4px;font-size:12px;color:#767c89}.textfield__helper{font-size:12px;margin-top:4px;color:#767c89}.textfield__error{font-size:12px;margin-top:4px;color:#ec6a6a}.textfield__input-wrapper{position:relative}.textfield__input{width:100%;box-sizing:border-box;padding:.5rem 40px .5rem 8px;border:1px solid #d5d6d6;border-radius:6px;font-size:12px;height:40px;transition:.2s}.textfield__input:focus{outline:none;box-shadow:0 0 0 1px #2563eb}.textfield__input::placeholder{color:#a0aec0;font-size:12px;opacity:1}.textfield.color-primary .textfield__input{border-color:#c5c5c5}.textfield.color-secondary .textfield__input{border-color:#9c27b0}.textfield.color-success .textfield__input{border-color:#4caf50}.textfield.color-error .textfield__input{border-color:#ec6a6a}.textfield__clear{position:absolute;top:50%;right:8px;transform:translateY(-50%);cursor:pointer;border:none;background:transparent;font-family:Material Symbols Outlined;font-variation-settings:\"FILL\" 0,\"wght\" 400,\"GRAD\" 0,\"opsz\" 24;font-size:16px;color:#666;display:flex;align-items:center;justify-content:center;opacity:.6}.textfield__clear:hover{opacity:1}.textfield--sm .textfield__input{height:32px;font-size:12px}.textfield--md .textfield__input{height:40px;font-size:14px}.textfield--lg .textfield__input{height:42px;font-size:16px}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], size: [{
                type: Input
            }], color: [{
                type: Input
            }], helperText: [{
                type: Input
            }], disabled: [{
                type: Input
            }], onlyNumbers: [{
                type: Input
            }], control: [{
                type: Input
            }], value: [{
                type: Input
            }], valueChange: [{
                type: Output
            }] } });

class MyLib {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.3.14", ngImport: i0, type: MyLib, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.3.14", type: MyLib, isStandalone: true, selector: "lib-my-lib", ngImport: i0, template: `
    <p>
      my-lib works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.3.14", ngImport: i0, type: MyLib, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-lib', imports: [], template: `
    <p>
      my-lib works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLib, SearchfieldComponent, TextfieldComponent };
//# sourceMappingURL=my-lib.mjs.map
