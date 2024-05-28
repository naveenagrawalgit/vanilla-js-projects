const personone = {
    name: 'kyle',
    age: 23,
    address: {
        city: 'somewhere',
        state: 'oen odds',
    }
}

const presintwo = {
    name: 'blake',
    age: 54,
    butter: 'amul',
    favouritefood: 'pineapple',

}

const personthree = {...presintwo, ...personone}

console.log(personthree);