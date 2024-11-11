

/// Readonly and optional keywords to make variable as per that


type Usage = {

    readonly id: number;// readonly parameter, we cannot change it
    name: string;
    age: number;
    email: string
    isActive: boolean
    creditcard_details?: string // '?' makes it an optional parameter

}

let myuser: Usage = {

    id: 123,
    name: 'Parag',
    age: 24,
    email: 'p@package.com',
    isActive: true /// see it is not asking for creditcarddetauls as it is an optional
}

//myuser.id = 234 // we cannot asign new value to it as it is a readonly


type cardNumber = {
    cardNumber: number
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate /// this is how we can use two types and combine them