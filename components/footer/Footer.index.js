import Footer from './Footer';
export default {
  title: 'Footer',
  component: Footer,
  argTypes: {
    className: { control: 'text' },
   
  
  },
};



const Template = (args) => <Footer {...args} />;
export const Basic = Template.bind({});
Basic.args = {variant: 'bg-new-blue', title: 'hello', className: 'text-white py-3 px-5' };




