import Link from 'next/link'
import Image from 'next/image'

export default function BlogPreviewCard({ blogpost }) {

  return (



    <div className="">

      <div className="flex justify-start md:justify-center items-center">
        <Link href="/posts/[slug]" as={`/posts/${blogpost.slug}`}>  </Link>
       
        <Image className="object-cover rounded-lg"
          src={`${blogpost.feature_image}`}
          alt={`${blogpost.title}`}
          width={500}
          height={500}

        />



      </div>
      <div className="flex md:pt-4">
        <div className="ml-5">
          <p className="text-sm">

            {blogpost.tags.map((tag) => (
              <span className="mr-3">
                <Link href="/tags/[slug]" as={`/tags/${tag.slug}`}>
                  <a>{tag.name}</a>
                </Link>
              </span>
            ))}

            {blogpost.authors.map((author) => (
              <p>автор {author.name}</p>
            ))}

          </p>
          <p>{blogpost.dateFormatted}</p>
          <hr />
          <Link href="/posts/[slug]" as={`/posts/${blogpost.slug}`}>
            <a>
              <h1 className="text-2xl font-bold">
                {blogpost.title}
              </h1>
            </a>
          </Link>
          <div
            className="excerpt py-2"
            dangerouslySetInnerHTML={{ __html: blogpost.excerpt }}
          />
          <Link href="/posts/[slug]" as={`/posts/${blogpost.slug}`}>
            <a className="">...read more</a>
          </Link>
        </div>
      </div>
    </div>

  )
}
