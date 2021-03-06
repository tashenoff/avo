import Button from './Button';
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    className: { control: 'text' },
   
  
  },
};



const Template = (args) => <Button {...args} />;
export const Basic = Template.bind({});
Basic.args = {variant: 'bg-new-blue', title: 'hello', className: 'text-white py-3 px-5' };




