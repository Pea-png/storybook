import type { Meta, StoryObj } from '@storybook/angular';
import { FormControl, ValidatorFn, Validators } from '@angular/forms';
import { SearchfieldComponent } from './searchfield.component';

// ==========================
// Meta configuration สำหรับ Storybook
// กำหนด title, component และ argTypes สำหรับ controls และ actions
const meta: Meta<SearchfieldComponent> = {
  title: 'MyLib/Searchfield', // ชื่อ folder/story ใน Storybook
  component: SearchfieldComponent, // component ที่เราจะสร้าง story
  tags: ['autodocs'], // tag สำหรับ Docs addon
  argTypes: {
    valueChange: { action: 'valueChange' }, // log event ใน Storybook action panel
    iconClick: { action: 'iconClick' }, // log event เมื่อคลิก icon
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] }, // dropdown เลือกขนาด
color: { control: { type: 'select' }, options: ['default', 'primary', 'secondary', 'success', 'error', 'focus', 'fill'], // เพิ่ม fill
}, 
    iconStart: { control: 'text' }, // input สำหรับใส่ iconStart
    iconEnd: { control: 'text' }, // input สำหรับใส่ iconEnd
  },
};

export default meta;
type Story = StoryObj<SearchfieldComponent>;

// ==========================
// Helper function สำหรับสร้าง FormControl
// ใช้ในการ bind กับ component ทุก story
const withControl = (value?: string, required = false) => {
  const validators: ValidatorFn[] = [Validators.maxLength(15)]; // validator ตัวอย่าง maxlength
  if (required) validators.push(Validators.required); // เพิ่ม required ถ้า flag ถูกกำหนด
  return new FormControl(value || '', { nonNullable: true, validators });
};

// ==========================
// Shared render function
// ใช้ render template แบบ dynamic สำหรับ story ทุกตัว
const renderTemplate: Story['render'] = (args) => {
  const control = withControl(args.label); // สร้าง FormControl
  const valueAction = args.valueChange; // เก็บ action สำหรับ valueChange

  // subscribe เพื่อส่งค่าไปยัง action panel ของ Storybook
  control.valueChanges.subscribe((val) => valueAction?.(val));

  // template HTML ของ component
  const templateCode = `
<app-searchfield
  [label]="'${args.label}'"
  [placeholder]="'${args.placeholder}'"
  [control]="control"
  [size]="'${args.size}'"
  [color]="'${args.color}'"
  ${args.iconStart ? `[iconStart]="'${args.iconStart}'"` : ''}
  ${args.iconEnd ? `[iconEnd]="'${args.iconEnd}'"` : ''}>
</app-searchfield>
`;

  return {
    props: { ...args, control }, // ส่ง props ให้ component
    template: templateCode, // ใช้ template dynamic
    parameters: {
      docs: {
        source: { code: templateCode }, // แสดงโค้ดใน Docs panel
      },
    },
  };
};

// ========================
// ตัวอย่าง Stories

// Story แสดง Icons
export const Icons: Story = {
  render: renderTemplate,
  args: { 
    label: 'Search', 
    placeholder: 'Search here', 
    size: 'sm', 
    color: 'default', 
    iconStart: 'search', 
    iconEnd: 'mic' 
  },
};

// Story แบบ Outline
export const Outline: Story = {
  render: renderTemplate,
  args: { label: 'Search', placeholder: 'Search here', size: 'sm', color: 'default' },
};

// Story แบบ Outline
export const Fill: Story = {
  render: renderTemplate,
  args: { label: 'Search', placeholder: 'Search here', size: 'sm', color: 'fill' },
};

// ========================
// Stories แยกตาม Size
export const SizeSmall: Story = {
  render: renderTemplate,
  args: { label: 'Small Field', placeholder: 'Search here', size: 'sm', color: 'default', iconStart: 'search', iconEnd: 'mic' },
};

export const SizeMedium: Story = {
  render: renderTemplate,
  args: { label: 'Medium Field', placeholder: 'Search here', size: 'md', color: 'default', iconStart: 'search', iconEnd: 'mic' },
};

export const SizeLarge: Story = {
  render: renderTemplate,
  args: { label: 'Large Field', placeholder: 'Search here', size: 'lg', color: 'default', iconStart: 'search', iconEnd: 'mic' },
};

// ========================
// Stories แยกตาม Color
export const ColorDefault: Story = {
  render: renderTemplate,
  args: { label: 'Default', placeholder: 'Search here', size: 'sm', color: 'default', iconStart: 'search', iconEnd: 'mic' },
};

export const ColorPrimary: Story = {
  render: renderTemplate,
  args: { label: 'Primary', placeholder: 'Search here', size: 'sm', color: 'primary', iconStart: 'search', iconEnd: 'mic' },
};

export const ColorSecondary: Story = {
  render: renderTemplate,
  args: { label: 'Secondary', placeholder: 'Search here', size: 'sm', color: 'secondary', iconStart: 'search', iconEnd: 'mic' },
};

export const ColorSuccess: Story = {
  render: renderTemplate,
  args: { label: 'Success', placeholder: 'Search here', size: 'sm', color: 'success', iconStart: 'check', iconEnd: 'mic' },
};

export const ColorError: Story = {
  render: renderTemplate,
  args: { label: 'Error', placeholder: 'Search here', size: 'sm', color: 'error' },
};

// ========================
// Stories แสดง State ต่าง ๆ

export const ErrorState: Story = {
  render: renderTemplate,
  args: { label: 'Error State', placeholder: 'Enter at least 5 characters', size: 'sm', color: 'error' },
  // Play function ใช้จำลองการป้อนค่าและ blur เพื่อให้เกิด error
  play: async ({ canvasElement }) => {
    const input: HTMLInputElement | null = canvasElement.querySelector('input');
    if (input) {
      input.value = 'Error State';
      input.dispatchEvent(new Event('input'));
      input.dispatchEvent(new Event('blur'));
    }
  },
};

export const FocusState: Story = {
  render: renderTemplate,
  args: { label: 'Focus State', placeholder: 'Typing...', size: 'sm', color: 'focus', iconStart: 'search' },
  // Play function จำลอง focus
  play: async ({ canvasElement }) => {
    const input: HTMLInputElement | null = canvasElement.querySelector('input');
    if (input) input.focus();
  },
};

export const DisabledState: Story = {
  render: (args) => {
    const control = new FormControl({ value: 'Disabled', disabled: true });
    const templateCode = `
<app-searchfield
  [label]="'${args.label}'"
  [placeholder]="'${args.placeholder}'"
  [control]="control"
  [size]="'${args.size}'"
  [color]="'${args.color}'"
  ${args.iconStart ? `[iconStart]="'${args.iconStart}'"` : ''}
  ${args.iconEnd ? `[iconEnd]="'${args.iconEnd}'"` : ''}>
</app-searchfield>
`;
    return { props: { ...args, control }, template: templateCode, parameters: { docs: { source: { code: templateCode } } } };
  },
  args: { label: 'Disabled', placeholder: 'Cannot type', size: 'sm', color: 'default', iconStart: 'lock' },
};

export const SuccessState: Story = {
  render: renderTemplate,
  args: { label: 'Success State', placeholder: 'Placeholder here', size: 'sm', color: 'success', iconStart: 'check' },
  // Play function จำลองการป้อนค่า
  play: async ({ canvasElement }) => {
    const input: HTMLInputElement | null = canvasElement.querySelector('input');
    if (input) {
      input.value = 'Hello world';
      input.dispatchEvent(new Event('input'));
    }
  },
};






