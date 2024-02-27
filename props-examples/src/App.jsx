
import { useState } from 'react';
import JSON from "./data.json"
import Child from './components/Child'
//PARENT COMPONENT
const App = () => {
    // here car is created outside and movie is created inside
    // let car={
    //     Cname:"maruthi",
    //     color:"black"
        

    // }
    // let courses={
    //     frontend:{
    //         libraries:{
    //             facebook:"react",
    //             google:"angular",
    //         },
    //     },
    // };


// let movies=[{
//     movie_id:1,
//     movie_name:"inception",
//     movie_genre:"scifi"

// },{
//     movie_id:2,
//     movie_name:"arrival",
//     movie_genre:"thriller"
// },{
//     movie_id:1,
//     movie_name:"nun",
//     movie_genre:"horror"
// }]

// let [count,setCount]=useState(0);
// let Increment=()=>{
//    return setCount(count+1);
// };

let obj={
    fname:"javafullstack",
    duration:3,
    trainer:"shahsi",
};




  return (
    <div>
        
        {/* <Child name="navu" food="biriyani"/>
       
        <Child name="tobby" salary={100000} isAvailable={true} isNull={false} isUndefined={undefined} isSymbol={Symbol("flower")}/>
        
        <Child carV={car}/>
        <Child movieVar={{name:"Inception",genre:"thriller"}}/> */}
        {/* <Child coursesV={courses}/> */}

        {/* <Child data={["java","js","react"]}/> */}
      {/* <Child movies={movies}/> */}

      {/* <Child data={{count,Increment}}/> */}

      {/* <Child jsonData={JSON}/> */}

      <Child {...obj}/>
    </div>
  )
}

export default App