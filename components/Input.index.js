import Input from './Input';
export default {
  title: 'Input/Basic',
  component: Input,
  argTypes: {
    className: { control: 'text' },
 
  
  },
};


const Template = (args) => <Input {...args} />;
export const Basic = Template.bind({});
Basic.args = {title: 'hello', className: 'dark:border-none border border-gray-200', placeholder: 'hello dady' };




