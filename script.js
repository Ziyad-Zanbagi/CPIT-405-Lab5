
var myInput = document.getElementById("inputNum")
myInput.addEventListener("change", refresh)
var n = 0
var result = 1
function refresh() {
    n = myInput.value;
    // updates value when user 
    // changes inside input field
}
function calcFactorial(n) {
    if (n < 0) return -1;
    else if (n == 0) return 1;
    console.log(n);
    result = n * result
    return (n * calcFactorial(n - 1));
}
function calc() {
    calcFactorial(n);
    document.getElementById("result").textContent = result
    result = 1;
}



class Person {
    constructor(first_name, last_name, year_of_birth) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.year_of_birth = year_of_birth;
    }

    getFullName() {
        return this.first_name+" "+this.last_name
    }

    calculateAge() {
        return new Date().getFullYear() - this.year_of_birth 
    }
}
function calculateInfo() {
    var inputFName = document.getElementById("firstName")
    inputFName.addEventListener("change", updateUserInfo)
    var inputLName = document.getElementById("lastName")
    inputLName.addEventListener("change", updateUserInfo)
    var inputBirthYear = document.getElementById("year")
    inputBirthYear.addEventListener("change", updateUserInfo)
    var person = new Person(inputFName.value, inputLName.value, inputBirthYear.value)
    document.getElementById("fullName").textContent = person.getFullName()
    document.getElementById("age").textContent = person.calculateAge() + " years old"

    function updateUserInfo() {

    }
}



// getAge calculate the age that subtract year_of_birth from current year.
//  getFullName combine first and last name and return them