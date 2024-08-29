// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// console.log(officeItems.length)


var people = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
  
for(var i = 0; i < people.length; i++){
    if(people[i].age < 18){
    console.log("Hi, I am " + people[i].name + " and I'm not old enough")
    }
    if(people[i].age > 18){
        console.log("Hi, I am " + people[i].name + " and I am old enough")
    }
}