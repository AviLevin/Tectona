
function fizzBuzz() {
  for (let num = 1; num <= 100; num++) {
    if (num % 5 === 0 && num % 3 === 0) {
      console.log("FizzBuzz");
      document.getElementById("demo").innerHTML += `<p class="p"> TecTona &nbsp
    </p>`;
    } else if (num % 3 === 0) {
      console.log("Fizz");
      document.getElementById("demo").innerHTML += `<p class="p"> Tec &nbsp
        </p>`;
    } else if (num % 5 === 0) {
      console.log("Buzz");
      document.getElementById("demo").innerHTML += `<p class="p"> Tona &nbsp
        </p>`;
    } else {
      console.log(num);
      document.getElementById("demo").innerHTML += `<p class="p"> ${num} &nbsp
        </p>`;
    }
  }
}

document.getElementById("demo").call = fizzBuzz();




class TravellerCollection extends Array {
  sum(key) {
      return this.reduce((a, b) => a + (b[key] || 0), 0);
  }
}
const traveler = new TravellerCollection(...[
  {  description: 'Senior', Amount: 50},
  {  description: 'Senior', Amount: 50},
  {  description: 'Adult', Amount: 75},
  {  description: 'Child', Amount: 35},
  {  description: 'Infant', Amount: 25 }, 
]);

console.log(traveler.sum('Amount'));
document.getElementById("demo1").innerHTML = traveler.sum('Amount');


