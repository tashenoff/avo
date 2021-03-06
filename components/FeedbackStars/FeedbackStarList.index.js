import FeedbackStarList from './FeedbackStarList';
export default {
  title: 'FeedbackStarList',
  component: FeedbackStarList,
  argTypes: {
    className: { control: 'text' },
   
  
  },
};


const Template = (args) => <FeedbackStarList {...args} />;
export const Basic = Template.bind({});
Basic.args = {color: 'red', rating: 2, size: 'sm'};




