import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-textfield',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextfieldComponent),
      multi: true
    }
  ]
})
export class TextfieldComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';
  @Input() color: 'primary' | 'secondary' | 'success' | 'error'| 'focus' = 'primary';
  @Input() helperText: string = '';
  @Input() disabled = false;
  @Input() onlyNumbers = false;
  @Input() control?: FormControl; 
  @Input() value = '';
  @Output() valueChange = new EventEmitter<string>();


  // ControlValueAccessor callbacks  
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(obj: any): void {
    this.value = obj ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
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
  onKeyDown(event: KeyboardEvent) {
    if (
      this.onlyNumbers &&
      !/[0-9]/.test(event.key) &&
      !['Backspace','Delete','ArrowLeft','ArrowRight','Tab'].includes(event.key)
    ) {
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


  get state(): 'default' | 'error' | 'success' {
    if (this.control?.invalid && this.control?.touched) return 'error';
    if (this.control?.valid && this.control?.touched) return 'success';
    return 'default';
  }

  get errorText(): string {
    if (!this.control?.errors) return '';
    if (this.control.errors['required']) return 'This field is required';
    if (this.control.errors['maxlength'])
      return `Maximum ${this.control.errors['maxlength'].requiredLength} characters`;
    if (this.control.errors['pattern']) return 'Number only';
    return 'Invalid format';
  }
  get hasValue(): boolean {
  return this.control ? !!this.control.value : !!this.value;
}

}