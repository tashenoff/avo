import Banner from './Banner';
import H1 from './H1';
import P from './P';
export default {
    title: 'Banner',
    component: Banner,
    argTypes: {
        className: { control: 'text' },


    },
};


const Template = (args) => {
    return (<>
        <Banner {...args}>
            <H1 className="px-0" {...args} />
            <P {...args} />
        </Banner>

    </>)
}
export const Basic = Template.bind({});
Basic.args = { isBordered: true, title: 'Got my paper!!!', name: 'Mark Zuckerberg', text: 'SO far everything seems to be professional, this is my first time using this kind of online service to get an assignement done. Hoping for the best.', className: 'bg-new-blue text-white' };




