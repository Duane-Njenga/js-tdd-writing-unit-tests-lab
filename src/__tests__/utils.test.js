// Your tests here
import {isPalindrome} from "../utils"

describe("isPalindrome", () => {
    it("returns true when the word is the same forwards and backwards", () =>{
        const word = "racecar";

        const result = isPalindrome(word);
        

        expect(result).toBe(true);

    });
    it("return true for words that are a combination of uppercase and lowercase letters", () => {
        const word = "RaCecar";
    
        const result = isPalindrome(word);
    
        expect(result).toBe(true);
      });
})
