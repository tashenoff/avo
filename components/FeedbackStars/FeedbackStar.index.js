import FeedbackStar from './FeedbackStar';
export default {
  title: 'FeedbackStar',
  component: FeedbackStar,
  argTypes: {
    className: { control: 'text' },
   
  
  },
};


const Template = (args) => <FeedbackStar {...args} />;
export const Basic = Template.bind({});
Basic.args = {color: 'red', size: 'sm'};




