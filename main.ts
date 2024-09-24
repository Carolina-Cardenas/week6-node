import { reverseString, countCharacters } from "./stringUtils";
import * as fs from 'fs';
import * as path from 'path';


const sentence = "It's important to learn Node.js because it's popular in web development.";

const reversedSentence = reverseString(sentence);


const filePath = path.join(__dirname, 'reversed.txt');


fs.writeFileSync(filePath, reversedSentence);

console.log('File saved at:', filePath);


const fileContent = fs.readFileSync(filePath, 'utf-8');
console.log('File content:', fileContent);


const characterCount = countCharacters(sentence);
console.log('Number of characters (ignoring spaces):', characterCount);


console.log("Character count of the original sentence:", countCharacters(sentence));


console.log(reverseString("text")); 
console.log(countCharacters("text"));


console.log(reverseString(sentence)); 
console.log(countCharacters(sentence)); 








// console.log(reverseString("text"));
// console.log(countCharacters("text"));
// console.log(" It's important to learn node.js beacause it's popular in web development ");
// console.log(reverseString(" It's important to learn node.js beacause it's popular in web development "));
// console.log( countCharacters(" It's important to learn node.js beacause it's popular in web development "));