var grades = {
"english": 80,
"math": 77,
"spanish": 90,
"history": 87,
"CS": 100,
};

var total = 0;
for (var subject in grades) {
  total += grades[subject]
}

var average = total / 5

console.log(average)