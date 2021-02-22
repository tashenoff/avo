import PostPreviewCard from '../components/postpreviewcard'
import SliderPost from '../components/SliderPost'
import styles from '../styles/Home.module.css'
import { getFeaturePosts, getPages } from '../api/ghost_data'
import Layout from '../components/layout'
import Link from 'next/link'
import Navlinks from '../components/Navlinks'


export default function Home({ posts, pages }) {
  console.log(posts)
  const postNum = '19'
  return (


    

 

    <Layout home _title="My Ghost Blog">


<SliderPost>
        {posts.slice(0, postNum).map(post => (
        
            <div>
              <PostPreviewCard blogpost={post} />

            </div>
           

        ))}
        </SliderPost>

      <div className='mb-8 border-b-2 border-gray-100 border-dotted'>


      </div>




      <div className="container mx-auto w-full border border-white">
        <Link href="/AllPost">
          <a>Загрузить все посты</a>
        </Link>
      </div>


      {pages.map((page) => (
        <Navlinks Navlink={page} />
      ))}

    </Layout>




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
