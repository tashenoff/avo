import PostList from './PostList';
export default {
  title: 'PostList',
  component: PostList,
  argTypes: {
    className: { control: 'text' },
   
  
  },
};


const Template = (args) => <PostList {...args} />;
export const Basic = Template.bind({});
Basic.args = {color: 'red'};




