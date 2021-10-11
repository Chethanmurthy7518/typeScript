// class Employee{
//     empId:string;
//     empName:string;
//     empDes:string;

//     constructor(id:string,name:string,des:string){
//         this.empId = id;
//         this.empName = name;
//         this.empDes = des;
//     }

//     getSalary():number{
//         return 100000;
//     }
    
// }


// let emp1= new Employee("tyc143","CHETHAN","Developer");

// let salary = emp1.getSalary();

// console.log(emp1,salary)



// interface Product{
//     Name:string,
//     price:number,
//     Description:string,
//     quantity:number
// }

// let pen:Product[] = [
//     {
//         Name:"montac",
//         price:10,
//         Description:"Ball Pen",
//         quantity:1
//     },
//     {
//         Name:"Reynolds",
//         price:10,
//         Description:"Ball Pen",
//         quantity:1
//     },
//     {
//         Name:"Blast",
//         price:10,
//         Description:"Ball Pen",
//         quantity:1
//     },
//     {
//         Name:"Brite",
//         price:10,
//         Description:"Ball Pen",
//         quantity:1
//     },
//     {
//         Name:"Parker",
//         price:10,
//         Description:"Ball Pen",
//         quantity:1
//     }

// ]

// console.log(pen)



// interface tv{
//     brandName:string,
//     display:(songs:string)=>string
// }

// class sony implements tv{
//     brandName:string;
//     constructor(name:string){
//         this.brandName = name;
//     }

//     display():string{
//         return 'display the sonngs via internet'
//     }
// }

// let bravia = new sony("sony");
// let b = bravia.display();

// console.log(bravia,b)


// // let fruits:string[] = ["apple","Pomagranete","banana",1,2]

// let fruites:(string|number)[] = ["apple",1,"banana",2,]

// let fruites2:[string,number,boolean]= ["apple",1,true]

// let fruites3:[string,number,boolean][]= [ ["apple",1,true],["banana",2,false]]
// console.log(fruites3)


// class obj{
//     Name:string;
//     Age:number;
//     Qualification:string;

//     constructor(name:string,age:number,qualification:string){
//         this.Name = name,
//         this.Age = age,
//         this.Qualification = qualification
//     }


// }

// let object = new obj("CHETHAN",26,"B.E")



// function generic<T>(args1:T):T{
//     return args1
// }

// console.log(generic(90));
// console.log(generic("CHETHAN"));
// console.log(generic<number>(90));
// console.log(generic<string>("Harshith"));



// function arr<B>(item1:B[]):B[]{
//     return new Array<B>().concat(item1)
// }

// let numberData = arr<number>([10,20,30]);
// let stringData = arr<string>(["Chethan","Anu","pallavi"]);

// console.log(numberData)
// console.log(stringData)

// numberData.push(40)

// console.log(numberData)

// stringData.push("Ramya")
// console.log(stringData)


class Car{
    carname:string
    constructor(brand:string){
            this.carname = brand;

    }

    getFunc():string{
        return "Fastest"
    }
}

class speed extends Car {
    speed:number
    constructor(brand:string,speed:number){
        super(brand)
        this.speed = speed;
    }
    sp():number{
        return this.speed;
    }
}


let mycar = new speed("Swift",20000)

console.log(mycar)



