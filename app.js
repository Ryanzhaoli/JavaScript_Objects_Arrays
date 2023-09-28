console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers =  [2, 22, 12, 17, 18, 39, 129];

function arraySum (arr) {
    let sum = 0;
  
    arr.forEach((number) => {
       sum += number
   })
   return sum;
}

console.log(arraySum(numbers));



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let favBook = {};

favBook.title = "The Lies Of Lamora Locke";
favBook.author = "Scott Lynch";
favBook.pageCount = 650;
favBook.readCount= 1;


console.log(favBook);

 favBook.info = function () {
   return `${this.title} by ${this.author} is ${this.pageCount} and has been read ${this.readCount} times.`
};

console.log(favBook.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");


let sentence = "The quick brown fox jumps over the lazy dog"

function reverseWords(sentence) {

    let words = sentence.split(" ");

    let result = words.map((word) => {
        let letters = word.split(""); 
        letters.reverse();
        return letters.join("");
    })
    return result.join(" ");
}

console.log(reverseWords(sentence));
console.log(reverseWords("My name is Ryan"));
console.log(reverseWords("My dogs name is LuLu"));

console.log("EXERCISE 4:\n==========\n");

// Exercise 4 Section
let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let parse = csvData.split("\n");
let headers = parse[0].split(",");
const dataTable = [];

for (i = 1; i < parse.length; i++){
    const rowArray = parse[i].split(",");
    const rowObject = {
        name: rowArray[0],
        age: rowArray[1],        
    };
    dataTable.push(rowObject);
};

console.log(dataTable);