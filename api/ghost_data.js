import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: 'https://theessay365.digitalpress.blog',
  key: '455d933f8d126f7dc52d5aab3d',
  version: 'v3',
})

export async function getPosts() {
  return await api.posts
    .browse({
      include: 'tags,authors',
      limit: 'all',
    })
    .catch((err) => {
      console.error(err)
    })
}


export async function getFeaturePosts() {
  return await api.posts
    .browse({
      include: 'tags,authors',
      limit: 'all',
      filter: 'featured:true',
    })
    .catch((err) => {
      console.error(err)
    })
}



export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })

    .catch((err) => {
      console.error(err)
    })
}

export async function getPages() {
  return await api.pages
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getSinglePage(pageSlug) {
  return await api.pages
    .read({
      slug: pageSlug,
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getTags() {
  return await api.tags
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getSingleTag(tagSlug) {
  return await api.tags
    .read({
      slug: tagSlug,
    })
    .catch((err) => {
      console.error(err)
    })
}

export async function getPostsByTag(tag) {
  const posts = await api.posts
    .browse({
      filter: `tag:${tag}`,
      // filter: `author:${author}`,

    })
    .catch((err) => {
      console.error(err)
    })
  return posts
}


export async function getAuthors() {
  return await api.authors
    .browse({
      limit: 'all',
    })
    .catch((err) => {
      console.error(err)
    })
}

