let ah: number = -3;
let ahh = 3

let nothing: undefined = undefined

let now: Date = new Date();
let colors: string[] = [
    'red',
    'derk',
    'doop',
]

let nummies: number[] = [1, 2, 3, 3]
let truths: boolean[] = [true, true, false]

class Car {

}

let car: Car = new Car()

let point = {
    x: 10,
    y: 20
}

let opoint: { x: number; y: number } = {
    x: 10,
    y: 20
}

const logNum: (i: number) => void = (i: number) => { // left of equals is annotation; function begins after =
    console.log(i)
}

// use annotations when...
// function returns ANY type

const json = '{"x": 10, "y":20}'
const coordinates: { x: number; y: number } = JSON.parse(json)

// initializing variable later

let apoint: number;

for (let i = 0; i < nummies.length; i++) {
    apoint += i
}

// can't properly infer type

/// functions

const add = (a: number, b: number): number => {
    return a + b
}

const logger = (message: string): void => {
    console.log(message)
}

const throwErr = (message: string): never => {
    throw new Error(message)
}

/// destructurin

const listy =
    ({
         x,
         y
     }: {
        x: number;
        y: number;
    }): void => {
        console.log(x, y)
    }


const profile = {
    namey: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 12
    },
    setAge(age: number): void {
        this.age = age
    }
}

profile.age = 20
profile.setAge(20)

const {namey} = profile
const {age}: { age: number } = profile

// const {coords: {lat, lng}} = profile
const {
    coords: {lat, lng}
}: { coords: { lat: number; lng: number } } = profile

/// arrayz

const carMakers: string[] = ['tesla', 'tesla2', 'tesla3']

const dates = [new Date(), new Date(), '2020-10-10'] // date or string inference

const carsByMake = [
    ['cyberdruck'],
    ['cyberduck'],
    ['superone']
]
const carsByMake2: string[][] = []


const pepsi: [string, boolean, number] = ['brown', true, 30]

type Drink = [string, string, boolean]
const sprite: Drink = ['clear', 'fatty tissue', false]

const carSpect: [number, number] = [12, 121]
const carStats = {
    horses: 300,
    weight: 3
}

const oldone = {
    name: 'civic',
    year: 1999,
    broken: true
}

const printVeh = (vehicle: { name: string; year: number; broken: boolean }) => {
    console.log(vehicle.year)
}

interface Vehicle {
    name: string;
    year: number;
    broken: boolean;

    summary(): string; // return value of function
}

const oldone2 = {
    name: 'civic',
    year: 1999,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const vehDeets = (vehicle: Vehicle): void => {
    console.log(vehicle.summary())
}


const drank = {
    color: 'rain',
    carbonBased: false,
    summary(): string {
        return (this.carbonBased) ? "nrem" : "noerm"
    }
}

interface Reportable {
    summary(): string
}

const printSummary = (item: Reportable): void => {
    console.log(item.summary())
}

//
class Vehikle {
    // color: string
    // constructor(color:string) {
    //     this.color = color
    // }

    constructor(public color:string){ // first arg assigned as instance variable 'color'

    }

    public drive(): void {
        console.log('derp')
    }
    honk(): void {
        console.log("beepderp")
    }
}

class Kar extends Vehikle{
    drive(): string {
        return "DERP!"
    }
    startDriving(): void {
        this.drive()
}
}

const vriim = new  Kar()

vriim.drive()

