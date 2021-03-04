import H1 from './H1';
export default {
    title: 'H1',
    component: H1,
    argTypes: {
        className: { control: 'text' },


    },
};


const Template = (args) => {
    return (
        <>
            <H1 {...args} />
            <p>lorem</p>
        </>
    )
}
export const Basic = Template.bind({});
Basic.args = { title: 'Got my paper!!!', isBordered: true, className: '' };




