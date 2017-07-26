var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };

var employees = [ atticus, jem, boo, scout, robert, mayella ];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// console.log(employees);

//write a function that takes in one **employee object** (as an argument to the function), and returns a **new object**:





function getBonus (employeeInput){
    var bonus = 0
    switch (true){
        case (employeeInput.reviewRating <= 2): 
        bonus = 0;
        break;
        case (employeeInput.reviewRating == 3) :
        bonus = 0.04
        break;   
        case (employeeInput.reviewRating == 4) :
        bonus = 0.06
        break;
        case (employeeInput.reviewRating == 5) :
        bonus = 0.10
        break; 
    }
    if (employeeInput.employeeNumber.length == 4) {
        bonus = bonus + 0.05;
    } 
    if (employeeInput.annualSalary > 65000) {
        bonus = bonus - 0.01;
    }
    if (bonus>0.13){
        bonus = .13
    } 
    if (bonus < 0){
        bonus = 0
    }
    
    return bonus
}


function Employee (employeeInput) {
    this.name = employeeInput.name;
    this.bonusPercentage = getBonus(employeeInput);
    this.totalCompensation = Math.round(employeeInput.annualSalary + employeeInput.annualSalary * this.bonusPercentage);
    this.totalBonus= Math.round(employeeInput.annualSalary * this.bonusPercentage);

}

var newEmployee = [] ;

for (var i = 0; i < employees.length; i++) {
  //   console.log(employees[i]);
     var newEmp = new Employee(employees[i]);
     console.log(newEmp);
     newEmployee.push(newEmp);
}

// console.log(newEmployee);
