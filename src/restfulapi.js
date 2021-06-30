// @ts-check

//프레임워크 없이 간단한 토이프로젝트 웹 서버 만들기, 노드 기본 기능으로만

/**
 * - 블로그 포스팅 서비스
 * - 로컬 파일을 데이터베이스로 활용 (JSON)
 * - 인증 로직은 넣지 않는다.
 * - RESTful API를 사용한다.
 */

const http = require('http')

/**
 * Post
 *
 * GET /posts
 * GET /Posts/:id
 * POST /posts
 */

const server = http.createServer((req, res) => {
  const POSTS_ID_REGEX = /^\posts\/[a-zA-Z0-9-_]+$/

  if (req.url === '/posts' && req.method === 'GET') {
    res.statusCode = 200
    res.end('List of Posts.')
  } else if (req.url && POSTS_ID_REGEX.test(req.url)) {
    const regexResult = POSTS_ID_REGEX.exec(req.url)
    console.log(regexResult)
    res.statusCode = 200
    res.end('Some content of the Post.')
  } else if (req.url === '/posts' && req.method === 'POST') {
    res.statusCode = 200
    res.end('Createing Posts')
  } else {
    res.statusCode = 404
    res.end('Not found.')
  }
  res.end('hello')
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`The server is listening at Port: ${PORT}`)
})
