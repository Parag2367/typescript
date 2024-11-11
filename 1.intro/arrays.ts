// Arrays in typescript
// string[] : this is how we difine type of array not like other types

const superHeroes: string[] = []

const superteam: number[] = []

const supercars: Array<number> = []  // another way of defining array types

type Users = {
    name: string
    isActive: boolean
}

const usages: Users[] = [] // as we have defined a user type it should have the values

usages.push({ name: "", isActive: true })

superHeroes.push("spiderman")
superteam.push(23)