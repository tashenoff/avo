import PostPreviewCard from '../components/postpreviewcard'
import SliderPost from '../components/SliderPost'
import { getFeaturePosts, getPages } from '../api/ghost_data'
import Layout from '../components/layout'
import Link from 'next/link'
import Navlinks from '../components/Navlinks'
import Button from '../components/Button'
import Content from '../components/Content'
import MinBanner from '../components/MinBanner'
import Banner from '../components/Banner'
// import Image from 'next/image'
// import { icons } from '../assets/img/ico_1.svg'

export default function Home({ posts, pages }) {
  // console.log(posts)
  const postNum = '13'
  return (


    <>
      <Layout
        home _title="My Ghost Blog">
        <Banner
          className='bg-new-green text-new-blue h-80 flex flex-col items-center justify-center  dark:bg-new-blue dark:text-white'
          title_banner='11Essay writing service for students' text_banner='2Our 726 writers are online now and ready to help you.' />

        <Content className="py-10">
          <h1 className="text-3xl font-bold">6The best of the best writers</h1>
         
          <p className="py-5">
            7Academic writing is difficult, and at Writix, we only work with the best of the best when it comes to our writers.
            </p>

          <p className="py-5 w-full">We make sure to provide 100% unique papers of the highest quality. All papers are double-checked for mistakes and plagiarism before delivery. First of all, we check for duplicate content on the web and then in our database of completed orders. Feel free to request free revisions of your order, and we will adjust it to your requirements.We won’t take your money until you are happy with a result.</p>
         
          <MinBanner className="bg-new-blue text-white">
           
            <p className="w-full">9We provide an essay writing service for all types of academic
            assignments. Check out some of our samples and don't hesitate
to place your order.</p>
            <Button title="Кнопка" className="bg-new-green" onClick={() => { console.log('clicked') }} />
          </MinBanner>
        </Content >
        <Banner
          className='bg-new-green h-80 flex items-center justify-center  dark:bg-new-blue dark:text-white'>

          <div className="grid grid-cols-4 gap-4">
            <div>
              <svg className=" bg-white w-5 h-5 fill-current text-gray-400" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
              </svg>

              <span>10Order Placement</span>
            </div>

            <div>
              <div className="bg-white">
                11
            </div>
              <span>10Order Placement</span>
            </div>

            <div>
              <div className="bg-white">
                11
            </div>
              <span>10Order Placement</span>
            </div>

            <div>
              <div className="bg-white">
                11
            </div>
              <span>10Order Placement</span>
            </div>
          </div>

        </Banner>

        <Content className="p-3 flex w-full justify-between items-center">
          <h1 className="text-3xl font-bold py-5">Полезные статьи</h1>

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
