const POST_GRAPHQL_FIELDS = `
slug
title
date
abstract
coverImage {
  url
}

`

// date
// author {
//   name
//   picture {
//     url
//   }
// }
// excerpt
// content {
//   json
//   links {
//     assets {
//       block {
//         sys {
//           id
//         }
//         url
//         description
//       }
//     }
//   }
// }

async function fetchGraphQL(query, preview = false) {
  console.log(process.env.CONTENTFUL_ACCESS_TOKEN);
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractPost(fetchResponse) {
  return fetchResponse?.data?.blogArticleCollection?.items?.[0]
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.blogArticleCollection?.items
}

export async function getPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      blogArticleCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractPost(entry)
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      blogArticleCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractPostEntries(entries)
}

export async function getAllPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      blogArticleCollection {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  console.log({ entries: JSON.stringify(entries) });
  return extractPostEntries(entries)
}

export async function getPostAndMorePosts(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      blogArticleCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  const entries = await fetchGraphQL(
    `query {
      blogArticleCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  }
}
