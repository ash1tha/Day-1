console.log("Hello")
document.write("hello")

let name1="ASHITHA"
console.log(name1)
console.log(typeof(name1))

let salary=80000.50
console.log(typeof(salary))

var invalid=false
console.log(typeof(invalid))

console.log(2+2)
console.log(2*2)

let num1=3
let num2=4
console.log(num1+num2)
console.log(num1*num2)

console.log(10 % 5)//modulus operator
console.log(5 ** 2)//exponent operator

let x=5
x+=5
console.log(x)

let flag1=true
let flag2=false
console.log(flag1 == flag2)
console.log(flag1 === flag2)

//logical operators
console.log((flag1!=flag2) || (2<3))
console.log((flag1!=flag2) && (2<3))
console.log(!flag1)

//conditional operators
if(5>3){
    console.log("5 is greater thn 3")
} 
else if(5==3){
    console.log("numbers are equal")
}
else{
    console.log("invalid condition")
}

//to get time
const now=new Date()
const hours=now.getHours()
 if(hours<12){
    console.log("good morning")
 }
 else if(hours>12){
    console.log("good evening")
 }
 else{
    console.log("invalid")
 }

//for loop
let sum=0
for(let i=1;i<=10;i++){
    sum+=i
}
console.log(sum)

//skip 1 number
let sum1 = 0
for( let j=0;j<=8;j+=2){
    sum1 += j
}
console.log(sum1)

//while loop
let sum2=0
let i=0
while(i<10){
    sum2+=i
    i+=2
}
console.log(sum2)

//reference types
//objects
let student={
    name:"Ashitha",
    age:21,
    hobby:"gaming"
}
console.log(student)
console.log(student.name)
console.log(student.age)
console.log(student.hobby)

//employee obj name salary location
let employee={
    name:"Sharath",
    salary:20000,
    location:"Kottayam"
}
console.log(employee)
console.log(employee.name)
console.log(employee.salary)
console.log(employee.location)

//arrays using [],index starts with 0
let seasons = ["summer","winter","autumn","spring"]
console.log(seasons)
console.log(seasons[0])
console.log(seasons[1])
console.log(seasons[2])
console.log(seasons[3])
console.log(seasons[4]) //results in undefined

//to print individual values in array using loop
for(let i=0;i<seasons.length;i++){
    console.log(seasons[i])
}

//sum the values
let arr=[10,20,30,40,50]
let result=0
for(let i=0;i<arr.length;i++){
     result+=arr[i]
}
console.log(result)

//functions
function greet(){
    console.log("hello all")
}
greet() //function call

//function to add numbers
function addNumbers(num1,num2){
    return num1+num2
}
let output=addNumbers(100,45)
console.log(`sum of 100 and 45 is ${output}`)

//to check the given no is even or not
function checkEven(number){
    if(number%2==0){
        return true
    }
    else{
        return false
    }
}
let out=checkEven(10)
console.log(`the given number is even:${out}`)

function checkEven(number){
    if(number%2==0){
        return true
    }
    else{
        return false
    }
}
let out2=checkEven(11)
console.log(`the given number is even:${out2}`)

//arrow function format
const checkEvens = (num)=>{
    return num%2==0
}
let isEven=checkEvens(11)
console.log(`the given number is even:${isEven}`)

//simple interest calculator parameters-principle,rate,time
const simpleInterest = (principle,rate,time)=>{
    return principle*rate*time
}
let value=simpleInterest(1000,5,12)
console.log(`the simple interest is ${value}`)

//array methods-explore

//foreach--callback fn 3 parameters max--item,index(not mandatory),array(optional)
let numbers=[1,2,3,4,5,6,7,8,9]
numbers.forEach((item,index,arr)=>{
    console.log(item)
    console.log(index)
    console.log(arr)
})

//foreach modifies og array
let numbers1=[1,2,3,4,5]
numbers1.forEach((item,index)=>{
    numbers1[index]=item+2
})
console.log(numbers1)

//filter--returns new array matching thr given condition
let prices=[101,201,30,400,500]
let prices_gt_100=prices.filter((item)=>{
    return item>100
})
console.log(prices_gt_100)

//filter out even from prices
let prices_even=prices.filter((item)=>{
    return item%2==0
})
console.log(prices_even)

//map--creates a new array by applying a function to each element of og array
const simple_nums=[1,2,3,4,5]
const double_nums=simple_nums.map((item)=>{
    return item*2
})
console.log(double_nums)

const fruits=['apple','banana','cherry']
const upper_fruits=fruits.map((fruits)=>fruits.toUpperCase())
console.log(upper_fruits)

//extract specific values from array of objects
//extract specific values from an array
const items=[
    {name:"TV",price:10000},
    {name:"speaker",price:50000},
    {name:"phone",price:3000}
]
//use map fn to get an array of item names
const items_name=items.map((items)=>{
    return items.name
})
console.log(items_name)


const items_name_gt_4000=items.map((items)=>{
    if(items.price>4000)
    {
       return items.name
    }
})
console.log(items_name_gt_4000)

//the problem is onevalue is undefined  to resolve that use combination of 1)filter and 2)map
const names=items.filter((items)=>{
    return items.price>4000
}) 
console.log(names)
/*
const names_gt=items.map((names)=>{
    return names
})
*/

