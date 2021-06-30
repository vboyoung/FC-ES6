// @ts-check

/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/** @type {Post[]} */
const posts = [
  {
    id: 'my_first_post',
    title: 'my first post',
    content: 'Hello!',
  },
  {
    id: 'my_second_post',
    title: '나의 두번째 포스트',
    content: 'Hello!',
  },
]

/**
 * @typedef APIRespose
 * @property {number} statusCode
 * @property {string | Object} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET' | 'POST'} method
 * @property {() => Promise<APIRespose>} callback
 */

/** @type {Route[]}  */
const routes = [
  {
    url: /^\posts$/,
    method: 'GET',
    callback: async () => ({
      // TODO: implement
      statusCode: 200,
      body: posts,
    }),
  },

  {
    url: /^\/posts\/([a-zA-Z0-9-_]+)$/, // TODO: RegExp로 고쳐야 함.
    method: 'GET',
    callback: async () => ({
      // TODO: implement
      statusCode: 200,
      body: {},
    }),
  },
  {
    url: /^\posts$/,
    method: 'POST',
    callback: async () => ({
      // TODO: implement
      statusCode: 200,
      body: {},
    }),
  },
]

module.exports = {
  routes,
}
