
// It is like creating own data type which will have its own arguments
type User = {
    name: string;
    email: string;
    is_active: boolean
}

function createUser(user: User): User {

    return { name: "", email: " ", is_active: true }
}

createUser({ name: "", email: " ", is_active: true })



/// more example

type Point = {
    x: number;
    y: number
}

function printCoord(pt: Point) {
    console.log("The coordinate x value is" + pt.x)
    console.log("The coordinate y value is" + pt.y)
}

printCoord({ x: 100, y: 100 });