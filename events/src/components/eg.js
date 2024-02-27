//call method
//--------------

let movies={
    movie_name:"Inception",
    movie_type:"scifi"
}
let places={
    place_name:"kerala",
    place_id:1
}
let obj={
    num:100
}

let win=window;

function callObject(){
    return this;
}

let result=callObject.call(movies)
console.log(result);

function callObj(a,b){
    return this.num+a+b;
}
let addData=callObj.call(obj,10,10)//120

//=================================================

//apply & bind
//-------------

let courses={
    course_name:"java",
    course_id:1,
    course_num:10
}
//apply method
function callObj(a,b){
    return this.num+a+b;
}
let add=callObj.apply(callObj,[10,20])//40
console.log(add);

//bind method
let addNumbers=function(a,b){
    return this.num+a+b
}
let BOUND=addNumbers.bind(courses,10,10);
console.log(BOUND());