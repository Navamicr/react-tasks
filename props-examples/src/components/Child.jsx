//CHILD COMPONENT

import { Fragment } from "react";

const Child = ({fname,duration,trainer}) => {
    
//const Child = (props) => {
   // let{fname,duration,trainer}=props


    // console.log(props.coursesV.frontend.libraries);
    // let {name,salary,isAvailable,isNull,isUndefined,isSymbol,carV,movieVar}=props;
    // let obj=new Object(isSymbol);
    // console.log(obj.toString());
    // console.log(props.carV);

    // console.log(props.movieVar);
    //console.log(props.data);

    // console.log(props.movies);
       
    //    console.log(props.data);
    // console.log(props);


  return (
    <div>
        {/* <h1>{props.name}</h1>
        <p>iam eating {props.salary}</p> */}
{/* 
        <h1>{name}</h1>
        <p>iam earning {salary}</p> */}
         {/* <p> this is {isAvailable}</p>  */}
        {/* if it is boolean it will not print on web page  */}
        {/* <p> this is {isAvailable?"available":"not"}</p> 
        <p> this is {isNull?"null":"not"}</p> 
        <p> this is {isUndefined==undefined?"undefined":"helo"}</p> 
        <p> this is {isSymbol==undefined?"undefined":"helo"}</p> 
        <hr/> */}

        {/* {
            props.data.map((Lang,index)=>{
                return(
                    <Fragment key={index+1}>
                        <p>{Lang}</p>
                    </Fragment>
                )
              })

        } */}

         {/* ==============iterate array of obj ========== */}

        {/* {
            props.movies.map(movie=>{
                return <Fragment key={movie.id}>
                   <h1>{movie.movie_name}</h1>
                   <p>{movie.movie_genre}</p>
                </Fragment>

                
            })
        } */}

         {/* <hr />
         <h1>{props.data.count}</h1>
         <button onClick={()=>props.data.Increment()}>Increment</button> */}


        {/* {
            props.jsonData.map(user=>{
                return <Fragment key={user.id}>
                    <img src={user.avatar_url} alt="name" />

                </Fragment>
            })
        } */}

        <h1>{fname}</h1>
        <p>duration: {duration+"months"}</p>
        <p>Trainer:{trainer}</p>






    </div>
  )
}

export default Child