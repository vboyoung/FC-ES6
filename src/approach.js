const people = [
  {
    age: 20,
    city: '서울',
    pet: ['cat', 'dog'],
  },
  {
    age: 40,
    city: '부산',
  },
  {
    age: 31,
    city: '대구',
    pet: ['cat', 'dog'],
  },
  {
    age: 36,
    city: '서울',
  },
  {
    age: 27,
    city: '부산',
    pet: 'cat',
  },
  {
    age: 24,
    city: '서울',
    pet: 'dog',
  },
]

/*
    다음 문제를 풀어봅시다.
    A. 30대 미만이 한 명이라도 사는 모든 도시
  */

function solveA() {
  /** @type {string[]} */

  const cities = []

  for (const person of people) {
    //console.log(person)

    if (person.age < 30) {
      if (!cities.find((city) => person.city === city)) {
        cities.push(person.city)
      }
    }
  }
  return cities
}

function solveAModern() {
  const allCities = people.filter(({ age }) => age < 30).map(({ city }) => city)

  //set을 이용해 중복을 없애주고 다시 array로 변경해준다.
  const set = new Set(allCities)
  return Array.from(set)
}
console.log('solveA', solveA())
console.log('solveAModern', solveAModern())

/*  
  B. 각 도시별로 개와 고양이를 키우는 사람의 수  
*/

/** @typedef {Object.<string, Object.<string, number>>} petsOfCities*/
function solveB() {
  /** @type {petsOfCities} */
  const result = {}

  for (const person of people) {
    const { city, pet: petOrPets } = person

    if (petOrPets) {
      const petOfCity = result[city] || {}

      if (typeof petOrPets === 'string') {
        //string
        const pet = petOrPets

        const origNumPetsOfCity = petOfCity[pet] || 0
        petOfCity[pet] = origNumPetsOfCity + 1
      } else {
        //arr
        for (const pet of petOrPets) {
          const origNumPetsOfCity = petOfCity[pet] || 0
          petOfCity[pet] = origNumPetsOfCity + 1
        }
      }
      result[city] = petOfCity
    }
  }

  return result
}

function solveBModern() {
  return people.map(({ pet: petOrPets, city }) => {
    //pet의 형식을 배열로 모두 변경한다.
    const pets = typeof petOrPets === 'string' ? [petOrPets] : petOrPets || []
    return {
      city,
      pets,
    }
  })
}

console.log('solveB', solveB())
console.log('solveBModern', solveBModern())
