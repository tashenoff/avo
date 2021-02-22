import PostPreviewCard from '../components/postpreviewcard'
import styles from '../styles/Home.module.css'
import { getPosts, getPages } from '../api/ghost_data'
import Layout from '../components/layout'
import Link from 'next/link'
import {useState } from 'react'

export default function AllPost({ posts, pages }) {
  
  const [ postNum, setPostNum] = useState(6); // Default number of posts dislplayed

  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 3) // 3 is the number of posts you want to load per click
  }

  console.log(posts)
  return (
    <Layout AllPost _title="all post">
      <ul className='grid grid-cols-3 gap-4 mb-8 border-b-2 border-gray-100 border-dotted'>   
        {posts.slice(0, postNum).map(post => (
          <li>
            <PostPreviewCard blogpost={post} />
          </li>
        ))}
         <button onClick={handleClick}>Load More</button>
      </ul>

  

      {pages.map((page) => (
         <Link href="/page/[slug]" as={`/page/${page.slug}`}>
            <a className="text-indigo-900">{page.title}</a>
          </Link>
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
