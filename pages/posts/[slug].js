import { getPosts, getSinglePost } from '../../api/ghost_data'
import Link from 'next/link'
import Layout from '../../components/layout'
import Head from 'next/head'

export default function PostPage({ post }) {


  console.log(post)
  return (
    <>
      <Head>
      
      <title>hello</title>  {/* //не работает */}
      <meta name="keywords" content={ post.excerpt } />
      </Head>

      <Layout>
        <div className="blogInnerHTML">
          <h1>{post.title}</h1>


          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <Link href="/" as={'/'}>
          <a>-- go to homepage --</a>
        </Link>
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const posts = await getPosts()
  const paths = posts.map((post) => ({
    params: {

      slug: post.slug,
      author: post.author,

    },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

  const post = await getSinglePost(params.slug)
  return {
    props: {
      post: post,


    }
  }
}
