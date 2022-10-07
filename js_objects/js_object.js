marks = {
  Maths: 80,
  science: 82,
  technology: 35,
  support: 70,
  development: 90,
};

// print object list
console.log(marks);

// print key of objects
for (let subject of Object.keys(marks)) {
  console.log(`subjects taken:  ${subject}`);
}

// print values of object
for (let score of Object.values(marks)) {
  console.log(`scores of subjects: ${score}`);
}

// print key and values of dictionary
for (let grades of Object.entries(marks)) {
  console.log(`Subject: ${grades[0]}`);
  console.log(`Score: ${grades[1]}`);
}

//  print values that are less than 50
for (let grades of Object.entries(marks)) {
  if (grades[1] >= 50) {
    console.log("pass");
  } else {
    console.log("fail!!");
  }
}

//update lowest value to new value
marks.technology = 70;
console.log(marks);

//add new key and value to marks
marks["geography"] = 78;
console.log(marks);

//deleting key value per
delete marks.technology;
console.log(marks);
