import PostPreviewCard from '../components/postpreviewcard'
import styles from '../styles/Home.module.css'
import { getPosts, getPages } from '../api/ghost_data'
import Layout from '../components/layout'
import Link from 'next/link'
import Navlinks from '../components/Navlinks'

export default function Home({ posts, pages }) {
  console.log(posts)
  const postNum='4'
  return (
    <Layout home _title="My Ghost Blog">


      
      <ul className='grid grid-cols-3 gap-4 mb-8 border-b-2 border-gray-100 border-dotted'>   
      {posts.slice(0, postNum).map(post => (
          
          <li>
            <PostPreviewCard blogpost={post} />
            
          </li>
        ))}
        
      </ul>
      
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
  const posts = await getPosts()
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
