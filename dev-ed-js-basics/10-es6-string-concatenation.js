// ----------- String Concatenation ----------- 
//Old way: we need to escape special characters like ‘ or “ and also need to manage white spaces manually & also need to append with + sign
let userName = "Aniket";
const ytName = "Dev Ed - Edwin"

console.log("My OLD JS Users!! My name is \""+userName+"\". It\'s been great to work with \""+ytName+"\" so far.");

// New Way: Here the white spaces are managed along with the escape characters being resolved & no + to use. Instead use the ${variable}
console.log(`Hello new ES-6 users!!!! My name is "${userName}" and It's been an amazing experience of learning JavaScript with "${ytName}".`)

