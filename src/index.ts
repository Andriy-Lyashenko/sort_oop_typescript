import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import {StringCollection} from './StringCollection'

const numbersCollection = new NumbersCollection([3,-3,-28,87]);
const stringCollection = new StringCollection('Addskwujfkcbrejh')

const sorterNum = new Sorter(numbersCollection);
const sorterStr = new Sorter(stringCollection)

sorterNum.sort();
sorterStr.sort()

console.log(sorterNum.collection)
console.log(sorterStr.collection)