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

// Exercise 4 Section

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

function csvConverter(data) {
    let headers =data.slice(0, data.indexOf("\n")).split(",");

    let valuesList = data.slice(data.indexOf("\n")+ 1).split("\n");

    const output = valuesList.map((row) => {
        let values = row.split(",");
        let obj = {};

        values.forEach((value, idx) => {
            if (idx < headers.length) {
                obj[headers[idx]] = values;
            } else {
                obj[`misc${idx- headers.length + 1}`] = values;
            }
        });

        return obj;
    });

    return output;
}
console.log (csvConverter(csvData));
console.log(
    csvConverter("name,city,occupation\nJake,St. Petersburg, Student, Some Value")
);

function converter(fileData) {

    let rows = fileData.split("\n");
    let headers = rows[0].split(",");

    for (let i =1; i < rows.length; i++) {
        let obj ={};
        let data = rows[i].split(",");
        data.forEach((value,index) => {
            let headerName = headers[index];
            obj[headerName] = value;
        });
        result.push(obj);
    }
    return result;
}

console.log(converter(csvData));

function reduceConvert(fileData) {

    return fileData.split("\n").reduce((output, row, index, arr) =>{
        let values = row.split(",")
        if (index == 0) {
            output.headers = values;
        } else {
            let obj = {};
            values.forEach((val,index)=>{
                if (index < output.headers.length){
                    obj[headers[index]] = val;
                } else {
                    obj[`misc${index -output.headers.length + 1}`]= val;
                }
            });

            if (!output.records) {
                output.records = [];
            }

            output.records.push(obj);
        }
        return output;
    },{});

    console.log


}

