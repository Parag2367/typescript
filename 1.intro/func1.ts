function addValue(num: number): number | boolean {

    if (num > 5) {
        return false
    }
    return 200
}

// another way of writing functions

const getHello = (s: string): string => { return "" }

const heroes = ['thor', 'captain', 'iron']

heroes.map(hero => {
    return `hero is ${hero}`
}
)

heroes.map((hero): string => {
    return `hero is ${hero}`
}
)


/// ERROR HANDLING

function consoleError(errmsg: string): void {

    console.log(errmsg);

}


function handleError(errmsg: string): void {

    console.log(errmsg);

}