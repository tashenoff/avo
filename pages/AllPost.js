import PostPreviewCard from '../components/PostItem/Postpreviewcard'
import styles from '../styles/Home.module.css'
import { getPosts, getPages } from '../api/ghost_data'
import Layout from '../components/layout'
import Link from 'next/link'
import { useState } from 'react'
import Content from '../components/Content'
import Searchbar from '../components/Searchbar'
import Banner from '../components/Banner'
import Fuse from "fuse.js";
import H1 from '../components/H1'
import Form from '../components/Form'
import Input from '../components/Input'
import P from '../components/P'


export default function AllPost({ posts, pages }) {

  function handleClick() {
    setPostNum(prevPostNum => prevPostNum + 3) // 3 is the number of posts you want to load per click
  }

  // const [postNum, setPostNum] = useState(6); 
  const [data, setData] = useState(posts);

  const searchData = (pattern) => {
    if (!pattern) {
      setData(posts);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["title", "excerpt"],
    });

    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    }
    else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setData(matches);

    }

  }


  return (
    <Layout AllPost _title="all post">
      <Banner className="dark:bg-new-blue bg-new-green text-white">
        <H1 title="Статьи" />
        <P className="py-5" text=" We make sure to provide 100% unique papers of the highest quality. All papers are double-checked for mistakes and plagiarism before delivery." />
        <Form>
          <div className="flex items-center bg-white rounded-lg">
            <div className="bg-white p-3 flex justify-center items-center border-2 rounded-l-lg border-white">
              <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <Input onChange={(e) => searchData(e.target.value)} placeholder="поиск статьи по названию или тексту в статье" name="" className="text-new-blue focus:outline-none w-full" />



          </div>
        </Form>

      </Banner>
      <Content>

        <ul className='grid grid-cols-4 gap-3 mt-5 mb-8 border-b-2 border-gray-100 border-dotted'>
          {data.map(post => (
            <li>
              <PostPreviewCard blogpost={post} />
            </li>
          ))}
          {/* <button onClick={handleClick}>Load More</button> */}
        </ul>
      </Content>


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
