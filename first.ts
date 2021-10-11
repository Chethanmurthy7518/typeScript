// // console.log(data);


// var nam:string;
// nam= "Puneeth"

// console.log(nam)

// var data1 = "Ramya"


// var age:any;

// age= 563637

// console.log(age)

// age = "45637"

// console.log(age)

// interface obj {
//     UserName: string;
//     age : number


// }

// function Person(Obj:obj){
//     return "CHETHAN" + Obj.UserName;
//     return 26  + Obj.age;
// }
// console.log(Person)
// Person

// var arr:string[]=["CHETHAN","SAYED","RAMYA","ANU"]

// console.log(arr)

// var arr1:number[]=[1,2,3,4,5,6,7,8]

// console.log(arr1)


// let arr2:[string,number] = ["CHETHAN",26];
// console.log(arr2)

// // let arr3:[string,number] = ["Puneeth",26,27]


// let arr4:[string,number,number] = ["Puneeth",26,78]

// console.log(arr4)



// // function sub(num1:number,str1:string){
// //     console.log(num1+str1)
// // }
// // add(26,"chet")



// var person:{name:string,age:number,place:string, phone:number[]}={
//     age:26,
//     name:"CHETHAN",
//     place:"SKUgK",
//     phone:[98225588]

// }

// console.log(person)


// type data ={
//     name:string,
//     age: number,
//     place:string,
//     phone:number[]
// }


// var person2:data = {
//     name:"SOmething",
//     age:26,
//     place:"bwvbj,bdsfkbvkdsjbv",
//     phone:[9845507518]
// }

// console.log(person2)

// enum Colors {
//     black = "#0000",
//     white = "#fffff",
//     red = "#e64ff"


// }

// function getColor(colorName:string):Colors{
//     if(colorName == "black"){
//         return Colors.black;
//     }else if(colorName == "white"){
//         return Colors.white

//     }else if(colorName == "red"){
//         return Colors.red;
//     }
    
// }

// let dat:Colors = getColor("black")
// console.log(dat)


function add(a:number,b:number){

    return a+b;


}
function addition(a:number,b:number,x){
 var a:number =   x(a,b);
 console.log(a);
 

}

addition(4,4,add);


enum MathValue{
    PI = 3.14
}

function respond(val:number,mathVal:MathValue){
    console.log(val*mathVal);

}