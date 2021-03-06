import Feedback from './Feedback';
export default {
  title: 'Composite/Feedback',
  component: Feedback,
  argTypes: {
    className: { control: 'text' },
   
  
  },
};


const Template = (args) => <Feedback {...args} />;
export const Basic = Template.bind({});
Basic.args = {size: 'sm', title: 'Got my paper!!!', name: 'Mark Zuckerberg', text: 'SO far everything seems to be professional, this is my first time using this kind of online service to get an assignement done. Hoping for the best.', className: 'bg-new-blue text-white py-3 px-5' };




