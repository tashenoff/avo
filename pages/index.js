import PostPreviewCard from '../components/PostItem/Postpreviewcard'
import SliderPost from '../components/SliderPost'
import { getFeaturePosts, getPages } from '../api/ghost_data'
import Layout from '../components/layout'
import Link from 'next/link'
import Navlinks from '../components/Navlinks'
import Button from '../components/Button'
import Content from '../components/Content'
import MinBanner from '../components/MinBanner'
import Banner from '../components/Banner'
import Steps from '../components/Steps/steps'
import PlaceOrder from '../components/PlaceOrder'
import Man from '../components/svg/man'
import Input from '../components/Input'
import Form from '../components/Form'
import H1 from '../components/H1'
import Flower from '../components/svg/flower'
import Select from '../components/Select'
import Feedback from '../components/Feedback/Feedback'

// import Image from 'next/image'
// import { icons } from '../assets/img/ico_1.svg'

export default function Home({ posts, pages }) {
  // console.log(posts)
  const postNum = '13'
  return (


    <>
      <Layout
        home _title="My Ghost Blog">
        <Banner title_banner="ddd"
          className='bg-new-green relative text-new-blue h-96 flex flex-col items-center justify-between  dark:bg-dark-blue dark:text-white'>
          <div className="flex w-full absolute -bottom-10 justify-between container items-center">
            <div className="flex flex-col max-w-3xl">
              <H1 title="11Essay writing service for students" />
              <p class="py-5 w-1/2">7Academic writing is difficult, and at Writix, we only work with the best of the best when it comes to our writers.</p>
              <PlaceOrder className="bg-light-blue bottom-0 w-1/1 h-1/2 p-5 rounded-lg ">
                <Form className="flex flex-col w-full">
                  <div className="flex w-full">
                    <Select className="bg-white mr-4  w-full" />
                    <Input placeholder="3Email" className="bg-white mr-4  w-full" />
                    <Button className="bg-orange w-1/2" title="5Place an order" />
                  </div>
                  <p class="py-2 text-sm mt-5">4By clicking “Place an order”, you agree to our terms of service and privacy policy. We’ll occasionally send you promo and account related emails.</p>
                </Form>
              </PlaceOrder>
            </div>
            <Man className="absolute bottom-0 right-28" />
            <Flower className="absolute bottom-0 right-0" />
          </div>


        </Banner>

        <Content className="py-10 mt-20">
          <H1 isBordered={true} title="16The best of the best writers" />
          <p className="py-5">
            17Academic writing is difficult, and at Writix, we only work with the best of the best when it comes to our writers.
            </p>

          <p className="py-5 w-full">We make sure to provide 100% unique papers of the highest quality. All papers are double-checked for mistakes and plagiarism before delivery. First of all, we check for duplicate content on the web and then in our database of completed orders. Feel free to request free revisions of your order, and we will adjust it to your requirements.We won’t take your money until you are happy with a result.</p>

          <MinBanner className="bg-new-blue text-white rounded-lg">

            <p className="w-full">9We provide an essay writing service for all types of academic
            assignments. Check out some of our samples and don't hesitate
to place your order.</p>
            <Button title="Кнопка" className="bg-new-green" onClick={() => { console.log('clicked') }} />
          </MinBanner>
        </Content >
        <Banner
          className='bg-new-green h-80 flex items-center justify-center  dark:bg-new-blue dark:text-white'>

          <Steps />
        </Banner>

        
          <div className="flex items-center flex-col mt-10">
            <H1 isBordered={true} title="21Students’ Feedback about Our Paper Writers" />
            <p className="w-full text-center mb-10">22We’re always meticulous when it comes to paper writing and feedback we get on it. See what other students have to say about their experience with our essay paper writing service:
</p>
          </div>
          <Feedback />
     

        <Content className="p-3 flex w-full justify-between items-center">
          <H1 title="Полезные статьи" />
          <Link href="/AllPost">
            <a>показать все...</a>
          </Link>
        </Content>

        <Content>
          <SliderPost>
            {posts.slice(0, postNum).map(post => (
              <div>
                <PostPreviewCard blogpost={post} />
              </div>
            ))}
          </SliderPost>
        </Content>





        {pages.map((page) => (
          <Navlinks Navlink={page} />
        ))}


      </Layout>


    </>

  )


}

export async function getStaticProps() {
  const posts = await getFeaturePosts()
  const pages = await getPages()



  posts.map((post) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: "2-digit"
    }

    post.dateFormatted = new Intl.DateTimeFormat('en-GB', options).format(
      new Date(post.published_at),
    )
  })


  return {
    props: {
      posts,
      pages,


    },
  }
}
