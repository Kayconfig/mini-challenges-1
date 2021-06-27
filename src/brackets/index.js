/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    let opened_brackets = []
    let closed_bracket_map = { '}': '{', ']': '[', ')': '(' }
    for (let bracket of str){
    if( !Object.keys(closed_bracket_map).includes(bracket) ){//bracket is an open bracket
         opened_brackets.push(bracket) 
          } //end if
    else{ //the bracket is closed
     let correct_opening_bracket = closed_bracket_map[bracket]
     let last_opened_bracket = opened_brackets.pop()
     if (correct_opening_bracket != last_opened_bracket){ 
            
        return "invalid" 
         }//end if
 
        }//end else 
                        }
 return opened_brackets.length !== 0 ? "invalid" : "valid" 
}

module.exports = isValid;
