import Link from 'next/link'
import Image from 'next/image'
import PostTitle from './PostTitle'
import PostDate from './PostDate'
import PostTag from './PostTag'


export default function BlogPreviewCard({ blogpost }) {
console.log({blogpost})
  return (



    <div className="">

      <div className="flex justify-start md:justify-center items-center m-2 ">
        <Link prefetch={!process.env.STORYBOOK} href="/posts/[slug]" as={`/posts/${blogpost.slug}`}>  </Link>
       
        <Image className="object-cover rounded-lg"
          src={`${blogpost.feature_image}`}
          alt={`${blogpost.title}`}
          width={500}
          height={500}

        />



      </div>
      <div className="flex md:pt-4 m-2">
        <div className="w-full">
          <p className="text-sm mb-3">

            {blogpost.tags.map((tag) => (
              <span className="mr-3">
                <Link prefetch={!process.env.STORYBOOK} href="/tags/[slug]" as={`/tags/${tag.slug}`}>
                  <a><PostTag tag={tag.name}/></a>
                </Link>
              </span>
            ))}

            {blogpost.authors.map((author) => (
              <span className="text-gray-400">автор {author.name}</span>
            ))}

          </p>
          <PostDate date={blogpost.dateFormatted}/>
         
          <Link prefetch={!process.env.STORYBOOK} href="/posts/[slug]" as={`/posts/${blogpost.slug}`}>
            <a>
              <h1 className="text-2xl font-bold">
              <PostTitle title={blogpost.title}/>
              </h1>
            </a>
          </Link>
         
          <div
            className="excerpt py-2"
            dangerouslySetInnerHTML={{ __html: blogpost.excerpt }}
          />
          

          <Link prefetch={!process.env.STORYBOOK} href="/posts/[slug]" as={`/posts/${blogpost.slug}`}>
            <a className="">...read more</a>
          </Link>
        </div>
      </div>
    </div>

  )
}
