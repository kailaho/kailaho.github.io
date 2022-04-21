let sam = {
  name: "Sam",
  department: "Tech",
  designation: "Manager",
  salary: 40000,
  raise: true,
}

let mary = {
  name: "Mary",
  department: "Finance",
  designation: "Trainee",
  salary: 18500,
  raise: true,
}

let bill = {
  name: "Bill",
  department: "HR",
  designation: "Executive",
  salary: 21200,
  raise: false,
}

console.log("Problem 1", sam, mary, bill);


let company ={
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: [sam, mary, bill]
}

console.log("Problem 2", company);

let anna = {
  name: "Anna",
  department: "Tech",
  designation: "Executive",
  salary: 25600,
  raise: false,
}
company.employees.push(anna);
console.log("Problem 3", company);

let sum = 0;
for( var i = 0; i < company.employees.length; i++){
  sum = sum + company.employees[i].salary;
}
console.log("Problem 4", sum);


function increaseBy10(num){
  return num * 1.1;
}

for(var i = 0; i < company.employees.length; i++){
  if(company.employees[i].raise == true){
    let newSalary  = increaseBy10(company.employees[i].salary);
    company.employees[i].salary = newSalary;
    company.employees[i].raise = false;
  }
}
console.log("Problem 5", company);


const peopleWFH = ['Anna', 'Sam'];
for(var i = 0; i < company.employees.length; i++){
  if(peopleWFH.includes(company.employees[i].name)){
    company.employees[i].wfh = true;
  } else{
    company.employees[i].wfh = false;
  }
}
console.log("Problem 6", company);
