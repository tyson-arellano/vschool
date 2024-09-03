var employees = []

function Employee(name, salary, jobtitle, status = "Full Time"){
    this.name = name
    this.salary= salary
    this.jobtitle = jobtitle
    this.status = status
    this.printEmployeeForm = function(){
        console.log(this.name, this.salary, this.jobtitle, this.status);
    } 
   }



var bob = new Employee("Bob", "$3000/hr", "Vschool Instructor")
var gary = new Employee("Gary", "$50/hr", "Web Dev")
var ann = new Employee("Ann", "$30K Min", "CEO")

gary.status = "Partime"

employees.push(bob, gary, ann);

gary.printEmployeeForm()