// @ts-check

//프레임워크 없이 간단한 토이프로젝트 웹 서버 만들기, 노드 기본 기능으로만

/**
 * - 블로그 포스팅 서비스
 * - 로컬 파일을 데이터베이스로 활용 (JSON)
 * - 인증 로직은 넣지 않는다.
 * - RESTful API를 사용한다.
 */

const http = require('http')
const { routes } = require('./api')
require { routes } = require('./api')
/**
 * Post
 *
 * GET /posts
 * GET /Posts/:id
 * POST /posts
 */

const server = http.createServer((req, res) => {
  async function main() { 
    const route =  routes.find(
    (_route) =>
      req.url && 
      req.method && 
      _route.url.test(req.url) &&
      _route.method === req.method 
    )

      if(!route) {
        res.statusCode = 404
        res.end('Not found.')
        return
      }
  
      const result = await route.callback()
      res.statusCode = result.statusCode


      if (typeof result.body === 'string') {
        res.end(result.body)
      }else {
        res.setHeader('Content-Type', 'application/json; encoding=utf-8')
        res.end(JSON.stringify(result.body))
      }

      
    }

    main()
})

const PORT = 4000
server.listen(PORT, () => {
  console.log(`The server is listening at Port: ${PORT}`)
})
