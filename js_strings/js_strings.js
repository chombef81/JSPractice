let myString = "Hello world!";
console.log(myString);

// using ' in string
myOtherString = 'I\'m "a programmer!"';
console.log(myOtherString);

// multi line string (sentance)
let sentence = `I rely enjoy doing this 
but I need to start doing 
more projects!!`;
console.log(sentence);

// getting elements from string
const subString = myString.substring(0, 6);
console.log(subString);

// print every second element of the string and reverse the string
// subs1 = myString.??
sub2 = [...myString].reduce((x, y) => y.concat(x));
console.log(sub2);

// itrate the string
for (let i of myString) {
  console.log(i);
}

// check is string contains any charactor
newString = myString.includes("H");
if (!newString) {
  console.log("no");
} else {
  console.log("yes");
}

// other string methods
let hello = "Hello my man";
console.log(hello.toUpperCase());
console.log(hello.toLowerCase());
console.log(hello.startsWith("Hello"));
console.log(hello.endsWith("Hello"));
console.log(hello.match(/m/gi).length);
console.log(hello.replace("my", "is"));

//create an array from a sentence
sent = "Lets learn to split this sentence";
console.log(sent.split(" "));
newSent = sent.split(" ");
console.log(newSent.join(" "));

// templeting
let temp1 = "awesome";
let temp2 = 5;
let temp3 = 10.2546;
console.log(
  `adding to the string using the templeting ${temp1} and ${temp2} and ${temp3}`
);
