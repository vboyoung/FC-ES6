// @ts-check

const fs = require('fs')

/* 
fs.readFile('.gitignore', 'utf-8', (error, value) => {
  console.log(value)
})
*/

/**
 * @param {string} fileName
 */

function readFileInPromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'uft-8', (error, value) => {
      if (error) {
        reject(error)
      }
      resolve(value)
    })
  })
}

async function main() {
  try {
    const result = await fs.promises
      .readFile('.gitignore', 'utf-8')
      .then((value) => console.log(value))
    console.log(result)
  } catch (error) {
    console.log('error', error)
  }
}

main()

//readFileInPromise('.gitignore').then((value) => console.log(value))
