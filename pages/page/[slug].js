import { getPages, getSinglePage } from '../../api/ghost_data'
import Link from 'next/link'
import Layout from '../../components/layout'

// PostPage page component
export default function PostPage({ page }) {
  // Render post title and content in the page from props
  let _title = page.title + ' - My page'
  return (
    <Layout _title={_title}>
      <div className="blogInnerHTML">
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.html }} />
      </div>
      <Link href="/Home" as={'/'}>
        <a>-- go to homepage --</a>
      </Link>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = await getPages()
  const paths = posts.map((page) => ({
    params: { slug: page.slug },
  }))
  return { paths, fallback: false }
}

// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API

export async function getStaticProps({ params }) {
  const page = await getSinglePage(params.slug)
  return { props: { page: page } }
}
