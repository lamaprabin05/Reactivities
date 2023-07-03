export interface Duck{
    name: string;
    numLegs:number;
    makeSound?: (sound : string) => void;

}

export interface Person{
    name:string;
    age:number;
}

const duck1 : Duck = {
name: 'mickey',
numLegs: 2,
makeSound: (sound: any) => console.log(sound)

}

const duck2 : Duck = {
    name: 'dewey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

const person1 : Person = {
    name: 'prabin',
    age: 13
}

    //duck1.makeSound!('quack');

    export const ducks = [duck1,duck2]