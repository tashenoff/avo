import Navbar from './Navbar';
export default {
  title: 'Navbar',
  component: Navbar,
  argTypes: {
    className: { control: 'text' },
   
  
  },
};


const Template = (args) => <Navbar {...args} />;
export const Basic = Template.bind({});
Basic.args = {color: 'red'};




