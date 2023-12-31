import {describe,it,expect} from 'vitest'
import { numberToString } from '.'

describe('Number',()=>{
    it('should be return string number',()=>{
        expect(numberToString(12)).toBe("12")
        expect(numberToString(100)).toBe("100")
    })
    it('should be return and when is invalid number',()=>{
        expect(()=>numberToString(1)).toThrowError(/Number < 10/i)
        expect(()=>numberToString(NaN)).toThrowError(/invalid number/i)
    })
})