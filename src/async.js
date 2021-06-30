/**
 * @param {number} duration
 */

async function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout((resolve) => {
      resolve(undefined)
    }, 1000)
  })
}

async function main() {
  console.log('first')
  await sleep(1000)
  console.log('second')
  await sleep(1000)
  console.log('third')
  await sleep(1000)
  console.log('finish')
}

main()
