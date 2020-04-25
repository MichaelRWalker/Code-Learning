import describe from "./testRunner.js"
import {runTest} from './testRunner.js'
import expect from './expect.js';


let simple = {x:3};
let sayHi = () => 'Hi';

describe('toBe',expect(simple.x).toBe(3))
describe('toEqualPrimative',expect(simple.x).toEqual(3))
describe('toEqual',expect(simple).toEqual({x:3}))
describe('toHaveReturned',expect(sayHi).toHaveReturned('Hi'))
describe('toMatchArray',expect([1,2,3]).toMatchArray([1,2,3]))
describe('anything',expect(3).anything())
describe('toHaveProperty',expect(simple).toHaveProperty('x'))
describe('toHavePropertyWithValue',expect(simple).toHavePropertyWithValue('x',3))
describe('toBeFalsey',expect('').toBeFalsey())
describe('toBe',expect(simple.x).toBe(1))
describe('toBe',expect(simple.x).toBe(2))    

runTest(2);