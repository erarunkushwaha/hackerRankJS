// function getLetter(s) {
//     let letter;
//     // Write your code here
//     switch(s.charAt(0)){
//         case ('a'||'e'||'o'||'i'||'u'):
//         letter = "A";
//         break;
//     }
    
//     return letter;
// }

function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {
        case "aeiou".includes(s[0]):
          letter = "A";
          break;
        case "bcdefg".includes(s[0]):
          letter = "B";
          break;
        case "hijklm".includes(s[0]):
          letter = "C";
          break;
        case "nopqrstuvwxyz".includes(s[0]):
          letter = "D";
          break;
      }

    return letter;
}
console.log(getLetter('eas'));