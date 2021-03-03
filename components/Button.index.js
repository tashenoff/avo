import Button from './Button';
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    className: { control: 'text' },
    kinds: { control: 'text' }
  
  },
};


const kinds = {
  'Primary button (primary)': 'primary',
  'Secondary button (secondary)': 'secondary',
  'Tertiary button (tertiary)': 'tertiary',
  'Danger button (danger)': 'danger',
  'Danger tertiary button (danger--tertiary)': 'danger--tertiary',
  'Danger ghost button (danger--ghost)': 'danger--ghost',
  'Ghost button (ghost)': 'ghost',
};

const Template = (args) => <Button {...args} />;
export const Basic = Template.bind({});
Basic.args = {kids: 'primary', title: 'hello', className: 'bg-new-blue text-white py-3 px-5' };




