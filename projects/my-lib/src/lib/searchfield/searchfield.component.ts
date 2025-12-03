import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchfield',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss'],
})
export class SearchfieldComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() control!: FormControl;
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';
// ใน component
@Input() color: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'focus' | 'fill' = 'default';
  @Input() iconStart?: string;
  @Input() iconEnd?: string;

  @Output() valueChange = new EventEmitter<string>();
  @Output() iconClick = new EventEmitter<'start' | 'end'>();

  // Track focus
  inputFocused = false;

  onInput() {
    const val = this.control.value || '';
    if (val.length > 15) {
      this.control.setErrors({
        ...this.control.errors,
        maxlength: { requiredLength: 15, actualLength: val.length },
      });
    } else {
      if (this.control.errors) {
        const { maxlength, ...rest } = this.control.errors;
        this.control.setErrors(Object.keys(rest).length ? rest : null);
      }
    }
    this.valueChange.emit(val);
  }

  clearInput() {
    this.control.setValue('');
    this.control.markAsUntouched();
    this.valueChange.emit('');
  }

  clickIcon(position: 'start' | 'end') {
    this.iconClick.emit(position);
  }

  hasText(): boolean {
    return !!this.control.value;
  }

  onFocus() {
    this.inputFocused = true;
  }

  onBlur() {
    this.inputFocused = false;
  }

  get inputClasses() {
    return {
      'has-icon-start': !!this.iconStart,
      'has-icon-end': !!this.iconEnd || this.hasText(),
    };
  }

  get clearButtonClasses() {
    return {
      'with-end-icon': !!this.iconEnd,
      'without-end-icon': !this.iconEnd,
    };
  }
get state(): 'default' | 'error' | 'success' | 'focus' | 'primary' | 'secondary' | 'fill' {
  if (this.inputFocused) return 'focus';
  if (this.control?.invalid) return 'error';
  if (this.control?.valid && this.control?.touched) return 'success';
  return this.color || 'default'; // คืนค่า color เป็น state
}




  get errorText(): string {
    if (!this.control?.errors) return '';
    if (this.control.errors['required']) return 'This field is required';
    if (this.control.errors['maxlength'])
      return `Maximum ${this.control.errors['maxlength'].requiredLength} characters`;
    if (this.control.errors['pattern']) return 'Number only';
    return 'Invalid format';
  }
}
