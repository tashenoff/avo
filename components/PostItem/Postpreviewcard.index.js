import Postpreviewcard from './Postpreviewcard';
export default {
  title: 'Postpreviewcard',
  component: Postpreviewcard,
  argTypes: {
    className: { control: 'text' },
   
  
  },
};


const Template = (args) => <Postpreviewcard {...args} />;
export const Basic = Template.bind({});
Basic.args = {color: 'red'};




