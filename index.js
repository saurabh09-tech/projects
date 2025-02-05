// let a= 5
// let b=5
// let add = a+b
// console.log("Answer of Addition is",add)

// 
// check the number is either positive or negative.
function checkpositive (number){
    if (number>0){
        console.log (number,"is positive number")
    }
    else {
        console.log(number,"is negative number")
    }
}

checkpositive(10)
checkpositive(-5)
console.log("this is the line break")

//    convert the minutes into second.
function converttosecond(min){
    let second=min*60
    return second

}
let second= converttosecond(2)
console.log(second,'seconds in 2 minutes')
console.log("this is the line break")
// find the next number of the given number.
function writtennextnumber (initialnumber)
{
    let nextnumber= initialnumber +1
return nextnumber
}
let newnumber=writtennextnumber(5)
console.log("The Next number is ",newnumber,"after 5")
console.log("this is the line break")
// convert the age into days.
function Agetodays(Age){
        let days =Age*365
        return days
    
    }
    let days= Agetodays(1)
    console.log(days,'days in one year')
    console.log("this is the line break")
// find out the greatest number between two numbers.
    function numbers (a,b) {
        if (a>b){
            return a
        }
        else{
            return b
        }
    }
       
    let greatest=numbers(2,3)
    console.log(greatest,"is greatest number among 2 and 3")
    console.log("this is the line break")
// find out the smallest number among two numbers.
function number(a,b){
    if (a<b){
        return a;
    }
    else{
        return b;
    }
}
let smallestnumber= number(3,4);
console.log(smallestnumber,"is smallest number among 3 and 4");
console.log("this is line break ")

// let name="saurabh"
// for (i=1;i<=10;i++)
// {
//     console.log(name)
// }
   
// 

// let names=['Nirajan','Abishek','Bikash','Hari','Shyam','Madan','Krishna','Sachin','Dipesh','Rahul','Ganesh']
// names.push('Manish')
// console.log(names)
// names.shift()

// find out the gratest number among three numbers.
let a=3;
let b=5;
let c=9;
if(a>b && a>c){
    console.log(a,"is the greatest number among 3,5 and 9")
}
else if (b>a && b>c){
    console.log(b,"is the greatest number among 3,5 and 9")
}
else{
    console.log(c,"is the greatest number among 3,5 and 9")
}
console.log("this is the line break")
// find how many hours in a day.
function daystohrs(days){
    let hours= days*24
    return hours
}
let hours=daystohrs(2)
console.log(hours,"hours in 2 days")
console.log("this is break line")

// find age from dob and current dates.
function findage(dob,currentdate){
    let age=currentdate-dob;
    return age;
}
let age=findage(2060,2081)

console.log(age,"is the age between the dates 2060 and 2081 ")
console.log("this is the line break")

// Array of object

let menu=[
    { title:"Cold Drinks",

        items:[
            {
                name:"pepsi/mirinda/7up",
                price: 70
            },
            {
               name:"Slice/Dew",
               price:70
            },
            {
                name:"Frooti",
                price:35
            },
            {
                name:"Mineral Water",
                price:20
            },
            {
                name:"Redbul",
                price:130
            },
            {
                name:"Badam Drink",
                price:115
            }

           
        ]

    },
    {
        title:"Snacks",
        items:[
            {
                name:"Aloo Fried",
                price:80
            },
            {
                name:"Mushroom",
                price:40
            },
            {
                name:"Buff Sekuwa",
                price:120
            },
            {
                name:"Chicken Sussage",
                price:50
            },
            {
                name:"Aloo Chilly",
                price:110
            },
            {
                name:"Spicy Wings/Chicken Drumstick",
                price:75
            },
            {
                name:"Double Omelette",
                price:70
            }
        ]
    },
    {
        title:"Hot Drinks",
        items:[
             {
                name:"Black Tea/ Milk Tea",
                price:'25/30'
            },
            {
                name:"Black Coffee/ Milk Coffee",
                price:'40/60'
            },
            {
                name:"Lemon Tea",
                price:30
            },
            {
                name:"Hot Lemon",
                price:40
            },
            {
                name:"Hot Lemon With Honey",
                price:60
            }
            
        ]
    },
    {
        title:"MoMo",
        items:[
            {
                name:"Chicken MoMo",
                price:150
            },
            {
                name:"Buff MoMo",
                price:120
            },
            {
                name:"Veg- MoMo",
                price:100
            },
            {
                name:"Pork MoMo",
                price:160
            }
            
            
        ] 
    },
    {
        title:"Thukpa",
        items:[
            {
                name:"Chicken Thukpa",
                price:150
            },
            {
                name:"Buff Thukpa",
                price:140
            },
            {
                name:"Plain Thukpa",
                price:100
            },
            {
                name:"Pork Thukpa",
                price:180
            }
            
            
        ]  
    },
    {
        title:"Fried Rice",
        items:[
            {
                name:"Chicken Fried Rice",
                price:150
            },
            {
                name:"Buff Fried Rice",
                price:140
            },
            {
                name:"Plain Fried Rice",
                price:100
            },
            {
                name:"Pork Fried Rice",
                price:180
            }
            
            
        ]  
    }
   
       

    ]
console.log(menu)
console.log("this is the break line")

let school=[
    {
        title:"class 1", 
        classes1:[
            {
              StudentName:"Aavash",
               class:"class 1", 
               Rollno:1,
               ID:12
            },
            {
                 StudentName:"Bishal", 
                 class:"class 1", 
                 Rollno:2,
                 ID:15
             },
             {
                 StudentName:"Aman", 
                 class:"class 1",
                  Rollno:3,
                  ID:3
             },
             {
                 StudentName:"Anish", 
                 class:"class 1", 
                 Rollno:4,
                 ID:19
             },
             {
                 StudentName:"Abishek",
                 class:"class 1", 
                 Rollno:5,
                 ID:1
             },
             {
                StudentName:"krisha",
                class:"class 1",
                Rollno:6,
                ID:10 
             },
             {
                StudentName:"Hari",
                class:"class 1",
                Rollno:7,
                ID:5 
              },
              {
                 StudentName:"Krishna",
                 class:"class 1" ,
                 Rollno:8,
                 ID:2
              },
              {
                 StudentName:"shankar",
                 class:"class 1",
                 Rollno:9,
                 ID:8 
              },
              {
                 StudentName:"Sabina",
                 class:"class 1" ,
                 Rollno:10,
                 ID:9
              }
        ]

    },
    {
        title:"class 2", 
        classes2:[
            {
               StudentName:"Ram",
               class:"class 2",
               Rollno:1,
               ID:11 
            },
            {
               StudentName:"Hari",
               class:"class 2",
               Rollno:2,
               ID:25 
             },
             {
                StudentName:"Krishna",
                class:"class 2" ,
                Rollno:3,
                ID:2
             },
             {
                StudentName:"shankar",
                class:"class 2",
                Rollno:4,
                ID:8 
             },
             {
                StudentName:"Sabina",
                class:"class 2" ,
                Rollno:5,
                ID:9
             },
             {
                StudentName:"Ram",
                class:"class 2",
                Rollno:6,
                ID:10 
             },
             {
                StudentName:"Hari",
                class:"class 2",
                Rollno:7,
                ID:5 
              },
              {
                 StudentName:"Krishna",
                 class:"class 2" ,
                 Rollno:8,
                 ID:2
              },
              {
                 StudentName:"shankar",
                 class:"class 2",
                 Rollno:9,
                 ID:18 
              },
              {
                 StudentName:"Sabina",
                 class:"class 2" ,
                 Rollno:10,
                 ID:29
              }
        ]

    }, {
        title:"class 3", 
        classes3:[
            {
               StudentName:"Raman",
               class:"class 3",
               Rollno:1,
               ID:11 
            },
            {
               StudentName:"Hariram",
               class:"class 3",
               Rollno:2,
               ID:25 
             },
             {
                StudentName:"Kristana",
                class:"class 3" ,
                Rollno:3,
                ID:2
             },
             {
                StudentName:"Sita",
                class:"class 3",
                Rollno:4,
                ID:8 
             },
             {
                StudentName:"Sabitra",
                class:"class 3" ,
                Rollno:5,
                ID:9
             },
             {
                StudentName:"Rameh",
                class:"class 3",
                Rollno:6,
                ID:10 
             },
             {
                StudentName:"Shristi",
                class:"class 3",
                Rollno:7,
                ID:5 
              },
              {
                 StudentName:"jyoti",
                 class:"class 3" ,
                 Rollno:8,
                 ID:2
              },
              {
                 StudentName:"Sital",
                 class:"class 3",
                 Rollno:9,
                 ID:18 
              },
              {
                 StudentName:"Salman",
                 class:"class 3" ,
                 Rollno:10,
                 ID:29
              }
        ]
        

    },
    {
        title:"class 4", 
        classes4:[
            {
               StudentName:"Sumit",
               class:"class 4",
               Rollno:1,
               ID:11 
            },
            {
               StudentName:"Rita",
               class:"class 4",
               Rollno:2,
               ID:25 
             },
             {
                StudentName:"Pooja",
                class:"class 4" ,
                Rollno:3,
                ID:2
             },
             {
                StudentName:"Partima",
                class:"class 4",
                Rollno:4,
                ID:8 
             },
             {
                StudentName:"Salina",
                class:"class 4" ,
                Rollno:5,
                ID:9
             },
             {
                StudentName:"Shyam",
                class:"class 4",
                Rollno:6,
                ID:10 
             },
             {
                StudentName:"Hari krishna",
                class:"class 4",
                Rollno:7,
                ID:5 
              },
              {
                 StudentName:"Kritim",
                 class:"class 4" ,
                 Rollno:8,
                 ID:2
              },
              {
                 StudentName:"shankar",
                 class:"class 4",
                 Rollno:9,
                 ID:18 
              },
              {
                 StudentName:"Aarti",
                 class:"class 4" ,
                 Rollno:10,
                 ID:29
              }
        ]
    },
    {
        title:"Teachers",
        Teacherdetails:[
            {
                name:"Arjun Tamang", 
                Age:25, salary:25000,
                Adress:"kalanki", 
                faculty:"Science"
            },
            {
                name:"Yogendra Pandit", 
                Age:35, 
                salary:30000,
                Adress:"Balaju", 
                faculty:"Math"
            },
            {
                name:"Nishan Thapa Magar", 
                Age:25, 
                salary:35000,
                Adress:"Maharajgunj", 
                faculty:"Optional"
            },
            {
                name:"Bishnu Panthi", 
                Age:33, 
                salary:27000,
                Adress:"Patan", 
                faculty:"Health And Population Education"
            },
            {
                name:"Rajendra Limbu", 
                Age:25, 
                salary:35000,
                Adress:"Shankhamul", 
                faculty:"English"
            },
            {
                name:"Guru Tamang", 
                Age:25, salary:30000,
                Adress:"Baneshwor", 
                faculty:"Nepali"
            },
            {
                name:"Gopal Prasad", 
                Age:25, 
                salary:32000,
                Adress:"tinkune", 
                faculty:"Social"
            },
            {
                name:"Amit Shah", 
                Age:25, 
                salary:40000,
                Adress:"kapan", 
                faculty:"Computer"
            }
        ]
    },
    {
        title:" Faculty Departmant",
        facultydetails:[
            {
                Subject:"English",
                Hod:"Rajendra Limbu",
                RoomNo:20,
                floor:"3rd floor"
            },
            {
                Subject:"Nepali",
                Hod:"Sabina Koirala",
                RoomNo:13,
                floor:"4th floor"
            },
            {
                Subject:"English",
                Hod:"Rajendra Maharjan",
                RoomNo:7,
                floor:"1st floor"
            },
            {
                Subject:"Health",
                Hod:"Ramesh Khatri",
                RoomNo:12,
                floor:"1st floor"
            },
            {
                Subject:"Optional",
                Hod:"Hari Shah",
                RoomNo:18,
                floor:"3rd floor"
            },
            {
                Subject:"Math",
                Hod:"Bishnu Parsad",
                RoomNo:9,
                floor:"2nd floor"
            },
            {
                Subject:"English",
                Hod:"Rajendra Limbu",
                RoomNo:5,
                floor:"3rd floor"
            }
        ]
    },
    {
        title:"SchoolAdminstration",
        schoolAdmin:[
            {
                name:"Bishow Pratap",
                post:"CEO",
                Duty:"Manage whole school"

            },
            {
                name:"Bhairav Shah",
                post:"Accoutant",
                Duty:"Manage Account Section"

            },
            {
                name:"Aman karki",
                post:"School Coordinator",
                Duty:"Do all possible school events "

            },
            {
                name:"Bishal kunwar",
                post:"School Founder",
                Duty:"Funding the school"

            },
            {
                name:"Aakish maharjan",
                post:"School Manager",
                Duty:"Manage school with another coordinator"

            },
            {
                name:"Manoj Poudel",
                post:"Principal",
                Duty:"Observe the school"

            },
            {
                name:"Jitendra Pratap",
                post:"Vice principal",
                Duty:"Host of the different school program"

            }
        ]
    }

]
console.log(school)
console.log("This is the break line")

