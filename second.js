// class Employee{
//     empId:string;
//     empName:string;
//     empDes:string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Car = /** @class */ (function () {
    function Car(brand) {
        this.carname = brand;
    }
    Car.prototype.getFunc = function () {
        return "Fastest";
    };
    return Car;
}());
var speed = /** @class */ (function (_super) {
    __extends(speed, _super);
    function speed(brand, speed) {
        var _this = _super.call(this, brand) || this;
        _this.speed = speed;
        return _this;
    }
    speed.prototype.sp = function () {
        return this.speed;
    };
    return speed;
}(Car));
var mycar = new speed("Swift", 20000);
console.log(mycar);
