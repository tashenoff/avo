import Banner from "../components/Banner";
import Content from "../components/Content";
import H1 from "../components/H1";
import Layout from "../components/layout";

const About = () => {
    return (
        <Layout>
               <Banner className="h-40 flex flex-col items-center justify-between  bg-dark-blue text-white">
                   <Content>
               <H1 isBordered={false} title="About us" />
               </Content>
                   </Banner>
            <Content className="h-screen">
           
         

                <p className="mt-5">
                <b>Essay365</b> — remote work exchange for professional writers. We help customers find specialists to complete tasks, and help freelancers get orders.

The remote work format attracts an increasing number of freelancers and customers. Remote work is the future, and we do everything to make it as comfortable as possible.

Place orders and respond to them without changing your account: all the functions required for the customer and freelancer roles are available in one profile.

You can register for Essay365 as a customer or freelancer.

Customers place orders for free. And freelancers leave feedback and their bids. Evaluate the user's adequacy by looking at their reviews. A freelancer's qualifications are reflected in their portfolio and self-description. The customer's reliability is assessed by the date of registration on the site and the number of orders closed during this time.

Make suggestions, ask questions, criticize (only constructively), and make comments that will help make the service more convenient and effective in the feedback form below
                </p>
            </Content>
        </Layout>
    )
}
export default About