// import PostPreviewCard from '../components/PostItem/Postpreviewcard'
// import SliderPost from '../components/SliderPost'
// import { getFeaturePosts, getPages } from '../api/ghost_data'
import Layout from '../components/layout'
import Link from 'next/link'
import Navlinks from '../components/Navlinks'
import Button from '../components/Button'
import Content from '../components/Content'
import MinBanner from '../components/MinBanner'
import Banner from '../components/Banner'
import Steps from '../components/Steps/Steps'
import PlaceOrder from '../components/PlaceOrder'
import Man from '../components/svg/man'
import Input from '../components/Input'
import Form from '../components/Form'
import H1 from '../components/H1'
import Flower from '../components/svg/flower'
import Select from '../components/Select'
import Feedback from '../components/Feedback/Feedback'

export default function Home({ pages }) {

  return (


    
      <Layout
        home _title="My Ghost Blog">
        <Banner title_banner="ddd"
          className='h-96 flex flex-col items-center justify-between  bg-dark-blue text-white'>
          <div className="flex w-full lg:absolute lg:top-40 justify-between container items-center">
            <div className="flex flex-col max-w-3xl lg:p-0 p-3">
              <H1 className="lg:p-5 py-5 lg:text-left" title=" Услуги написания ЭССЭ для студентов" />
              <p class="lg:p-5 py-5 lg:w-1/2 w-full">Наши 726 писателей уже онлайн и готовы помочь вам.</p>
              <PlaceOrder className="bg-light-blue bottom-0 lg:w-1/1 w-full p-3 lg:p-5 rounded-lg ">
                <Form className="flex flex-col w-full pt-5 lg:pt-0 " >
                  <div className="flex w-full flex-col lg:flex-row ">
                    <Select className="bg-white mb-3 lg:mb-0 mr-4 h-full  w-full" />
                    <Input placeholder="Почта" className="bg-white mr-4 h-full w-full" />
                    <a href="https://theessay365.com/profile/client/registration/" className="bg-orange lg:w-1/2 w-full mt-5 lg:mt-0 rounded-lg text-center hover:bg-red-500 transition-colors"><Button title="Заказать" /></a>
                  </div>
                  <p class="py-2 text-sm mt-5 text-white ">Нажимая «Разместить заказ», вы соглашаетесь с нашими условиями обслуживания и политикой конфиденциальности. Время от времени мы будем присылать вам рекламные сообщения и письма, связанные с аккаунтом.</p>
                </Form>
              </PlaceOrder>
            </div>
            <Man className="absolute bottom-0 right-28 invisible lg:visible" />
            <Flower className="absolute bottom-0 right-0 invisible lg:visible" />
          </div>


        </Banner>

        <Content className="py-10 lg:mt-0 mt-40 lg:top-5 relative top-20">
          <H1 isBordered={true} title="Лучшие эксперты" />
   
          <p className="py-5 w-full">Essay365 - это служба написания статей, которую вы так долго искали. Мы поможем вам в написании эссе и университетских работ разной сложности. Наши эксперты по написанию статей  всегда на связи, что бы помочь вам написать работу на бесконечное множество тем с гарантией качества. </p>

          <MinBanner className="bg-new-blue my-5 text-white rounded-lg lg:flex-row flex-col">

            <p className="w-full lg:pb-0 pb-5">Мы предоставляем услуги по написанию эссе для всех типов академических
задания. <br/>Ознакомьтесь с некоторыми из наших образцов и не сомневайтесь
разместить заказ.</p>
           <a className="bg-new-green hover:bg-green-hover transition-colors lg:mt-0 mt-10 w-1/2 lg:w-1/4 rounded-lg text-center" href="https://theessay365.com/profile/client/registration/"><Button title="Нанять специалиста"/></a>
            
          </MinBanner>
        </Content >
        <Banner
          className='h-80 flex items-center justify-center lg:mt-0 mt-20 lg:py-20 py-60  bg-new-blue text-white'>

          <Steps />
        </Banner>

        <Content >
        <div className="flex flex-col mt-10 lg:p-0 p-5">
        <H1 isBordered={true} title="Отзывы" />
          <p className="w-full mb-10 lg:p-0">Мы работаем только с лучшими из лучших, когда речь идет о наших писателях.
</p>
        </div>
        </Content >
        <Feedback />


        {/* <Content className="p-3 flex w-full justify-between items-center">
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
        </Content> */}





        {/* {pages.map((page) => (
          <Navlinks Navlink={page} />
        ))} */}


      </Layout>




  )


}

// export async function getStaticProps() {
//   const posts = await getFeaturePosts()
//   const pages = await getPages()



//   posts.map((post) => {
//     const options = {
//       year: 'numeric',
//       month: 'long',
//       day: "2-digit"
//     }

//     post.dateFormatted = new Intl.DateTimeFormat('en-GB', options).format(
//       new Date(post.published_at),
//     )
//   })


//   return {
//     props: {
//       posts,
//       pages,


//     },
//   }
// }
