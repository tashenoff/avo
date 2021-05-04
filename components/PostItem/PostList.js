import PostPreviewCard from './Postpreviewcard'
const PostList = ({post}) => {
    console.log(post)
    return (
        <ul className='grid grid-cols-4 gap-3 mt-5 mb-8 border-b-2'>
        {/* {post.map(post => (
          <li>
            <PostPreviewCard blogpost={post} />
          </li>
        ))} */}
        {/* <button onClick={handleClick}>Load More</button> */}
      </ul>
    )
}

export default PostList
