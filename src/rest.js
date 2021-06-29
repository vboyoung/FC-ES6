/* array rest */
const ary = [1, 2, 3, 4, 5]
const [head, ...rest] = ary
console.log(head, rest)
console.log(head, ...rest)

/* overrides */
const personalData = {
  email: 'abc@mail.com',
  password: '****',
}

const publicData = {
  nickname: 'foo',
}

const override = {
  email: 'ffff@fff.com',
}

const user = {
  ...personalData,
  ...publicData,
  ...override,
}

/* shouldOverrides */
const shouldOverrides = false

const userinline = {
  ...{ email: 'abc@mail.com', password: '****' },
  ...{ nickname: 'foo' },
  ...(shouldOverrides ? { email: 'ffff@fff.com' } : null),
}

console.log(userinline)

/* function rest */
function foo(head, ...rest) {
  console.log(head)
  console.log(rest)
}

foo(1, 2, 3, 4)
