import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { TextfieldComponent } from 'my-lib';

// ========================
// Meta configuration
// ========================
// กำหนดข้อมูลหลักของ Storybook component
// title: ชื่อที่จะโชว์ใน Storybook
// component: component ที่จะ render
// tags: สำหรับ docs, auto generation
// argTypes: กำหนด controls และ action สำหรับ props ของ component

const meta: Meta<TextfieldComponent> = {
  title: 'MyLib/Textfield',
  component: TextfieldComponent,
  tags: ['autodocs'],
  argTypes: {
    valueChange: { action: 'valueChange' }, // Action panel
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    color: { control: { type: 'select' }, options: ['primary', 'secondary', 'success', 'error', 'focus'] },
  },
};

export default meta;

type Story = StoryObj<TextfieldComponent>;

// ========================
// Helper function
// ========================
// สร้าง FormControl พร้อม validators
// required = true -> เพิ่ม Validators.required
// ใช้ maxLength 10 เป็น default


const withControl = (value: string | undefined, required = false) => {
  const validators: ValidatorFn[] = [Validators.maxLength(10)];
  if (required) validators.push(Validators.required);
  return new FormControl(value || '', { nonNullable: true, validators });
};

// shared renderer
// ========================
// Shared render function
// ========================
// ใช้ renderTemplate เพื่อ reuse template ในทุก story
// - bind control ของ Angular FormControl
// - subscribe valueChanges เพื่อ log ใน console
// - ส่งค่า valueChange ไป Action panel ของ Storybook


const renderTemplate: Story['render'] = (args) => {
  const control = withControl(args.value, args.color === 'error');

  const valueAction = args.valueChange; // Storybook action function

  control.valueChanges.subscribe((val) => {
    console.groupCollapsed(`Field Update: ${args.label || 'Field'}`);
    console.table({
      value: val,
      valid: control.valid,
      invalid: control.invalid,
      touched: control.touched,
      dirty: control.dirty,
      pristine: control.pristine,
      errors: control.errors,
    });
    console.groupEnd();

    valueAction?.(val);
  });

  // return template ของ component
  // size และ color ถูก bind แบบ hard-coded เพื่อแสดงแต่ละ story

  return {
    props: { ...args, control },
    template: `
      <app-textfield
        [label]="label"
        [placeholder]="placeholder"
        [size]="'${args.size}'"
        [color]="'${args.color}'"
        [helperText]="helperText"
        [disabled]="disabled"
        [onlyNumbers]="onlyNumbers"
        [control]="control"
        (valueChange)="valueChange($event)"
      >
        <span class="material-symbols-outlined">clear</span>
      </app-textfield>
    `,
  };
};

// ========================
// Size Stories
export const SizeSmall: Story = {
  render: renderTemplate,
  args: { label: 'Small Field', value: '', size: 'sm', color: 'primary', helperText: 'Max 10 chars' },
};

export const SizeMedium: Story = {
  render: renderTemplate,
  args: { label: 'Medium Field', value: '', size: 'md', color: 'primary', helperText: 'Max 10 chars' },
};

export const SizeLarge: Story = {
  render: renderTemplate,
  args: { label: 'Large Field', value: '', size: 'lg', color: 'primary', helperText: 'Max 10 chars' },
};

// ========================
// Color Stories
export const ColorPrimary: Story = {
  render: renderTemplate,
  args: { label: 'Primary Field', value: '', size: 'sm', color: 'primary', helperText: 'Max 10 chars' },
};

export const ColorSecondary: Story = {
  render: renderTemplate,
  args: { label: 'Secondary Field', value: '', size: 'sm', color: 'secondary', helperText: 'Max 10 chars' },
};

export const ColorSuccess: Story = {
  render: renderTemplate,
  args: { label: 'Success Field', value: '', size: 'sm', color: 'success', helperText: 'Max 10 chars' },
};

export const ColorError: Story = {
  render: renderTemplate,
  args: { label: 'Error Field', value: '', size: 'sm', color: 'error', helperText: 'Max 10 chars' },
};

// ========================
// State Stories
export const Default: Story = {
  render: renderTemplate,
  args: { label: 'Default', value: '', size: 'sm', color: 'primary', helperText: 'Max 10 chars' },
};

export const WithValue: Story = {
  render: renderTemplate,
  args: { label: 'With Value', value: 'Hello', size: 'sm', color: 'primary', helperText: 'Max 10 chars' },
};

export const Disabled: Story = {
  render: renderTemplate,
  args: { label: 'Disabled', value: '', size: 'sm', color: 'primary', disabled: true, helperText: 'Max 10 chars' },
};
// ========================
// Error / Success States
export const ErrorState: Story = {
  render: renderTemplate,
  args: { label: 'Error', value: '', size: 'md', color: 'error', helperText: 'This field is required!' },
};

export const SuccessState: Story = {
  render: renderTemplate,
  args: { label: 'Success', value: 'Valid input', size: 'md', color: 'success', helperText: 'Success' },
};

// ========================
