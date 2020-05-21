const MESSAGES = {
    pass: "✔ Pass",
    fail: "✘ Fail"
}

 let test_case = (result) => {
    //   if(result > expected) {
    //     throw new Error(`${result} greater than ${expected}`);
    //   } else if(result < expected) {
    //     throw new Error(`${result} smaller than ${expected}`);
    //   } else {
    //     console.log("Pass");
    //   } 
    
    const greater = (expected) => {
        if (result > expected)
         console.log(MESSAGES.pass);
        else
         throw new Error(`${result} not greater than ${expected}`);   
    }
    const lesser = (expected) => {
        if (result < expected)
         console.log(MESSAGES.pass);
        else
         throw new Error(`${result} not less than ${expected}`);   
    }
    const equal = (expected) => {
        if (result === expected)
         console.log(MESSAGES.pass);
        else {
            try {
             throw new Error(`${result} not equal to ${expected}`); 
            } catch(Error) {
              console.log(MESSAGES.fail +  " - " + Error);
            }
        }
           
    }
    return {
        toBeGreaterThan: greater,
        toBeLesserThan: lesser,
        toBeEqualTo: equal,
    };
 }
module.exports = { 
    test: test_case
};