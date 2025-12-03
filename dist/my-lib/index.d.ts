import * as i0 from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';

declare class SearchfieldComponent {
    label: string;
    placeholder: string;
    control: FormControl;
    size: 'sm' | 'md' | 'lg';
    color: 'primary' | 'secondary' | 'success' | 'error';
    iconStart?: string;
    iconEnd?: string;
    valueChange: EventEmitter<string>;
    iconClick: EventEmitter<"start" | "end">;
    onInput(): void;
    clearInput(): void;
    clickIcon(position: 'start' | 'end'): void;
    hasText(): boolean;
    get inputClasses(): {
        'has-icon-start': boolean;
        'has-icon-end': boolean;
    };
    get clearButtonClasses(): {
        'with-end-icon': boolean;
        'without-end-icon': boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<SearchfieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SearchfieldComponent, "app-searchfield", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "control": { "alias": "control"; "required": false; }; "size": { "alias": "size"; "required": false; }; "color": { "alias": "color"; "required": false; }; "iconStart": { "alias": "iconStart"; "required": false; }; "iconEnd": { "alias": "iconEnd"; "required": false; }; }, { "valueChange": "valueChange"; "iconClick": "iconClick"; }, never, never, true, never>;
}

declare class TextfieldComponent implements ControlValueAccessor {
    label: string;
    placeholder: string;
    size: 'sm' | 'md' | 'lg';
    color: 'primary' | 'secondary' | 'success' | 'error';
    helperText: string;
    disabled: boolean;
    onlyNumbers: boolean;
    control?: FormControl;
    value: string;
    valueChange: EventEmitter<string>;
    onChange: any;
    onTouched: any;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    onBlur(): void;
    onKeyDown(event: KeyboardEvent): void;
    clearInput(): void;
    get state(): 'default' | 'error' | 'success';
    get errorText(): string;
    get hasValue(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextfieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextfieldComponent, "app-textfield", never, { "label": { "alias": "label"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "size": { "alias": "size"; "required": false; }; "color": { "alias": "color"; "required": false; }; "helperText": { "alias": "helperText"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "onlyNumbers": { "alias": "onlyNumbers"; "required": false; }; "control": { "alias": "control"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, { "valueChange": "valueChange"; }, never, never, true, never>;
}

declare class MyLib {
    static ɵfac: i0.ɵɵFactoryDeclaration<MyLib, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyLib, "lib-my-lib", never, {}, {}, never, never, true, never>;
}

export { MyLib, SearchfieldComponent, TextfieldComponent };
