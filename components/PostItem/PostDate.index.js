import PostDate from './PostDate';
export default {
  title: 'PostDate',
  component: PostDate,
  argTypes: {
    className: { control: 'text' },
   
  
  },
};


const Template = (args) => <PostDate {...args} />;
export const Basic = Template.bind({});
Basic.args = {date: '12 марта'};




