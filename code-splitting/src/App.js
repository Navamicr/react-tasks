
import { lazy,Suspense, useState } from 'react';
import './App.css';
const Login=lazy(()=> import("./Login.jsx"));
const Profile=lazy(()=> import("./Profile.jsx"));
console.log(Login)
function delayForDemo(promise){
  return new Promise(resolve=>{
    setTimeout(resolve,5000);
  }).then(()=>promise)
}



function App() {
  let [isAuth,isSetAuth]=useState(true)
  let test=()=>{
    return <Login/>
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={test}>Load login component</button> */}
        {!isAuth? <Suspense fallback={<h1>Loading...</h1>}>
        <Login/>
        </Suspense>: (
          <Suspense fallback={<h1>Loading...</h1>}>
        <Profile/>
        </Suspense>
        )}
      </header>
    </div>
  );
}

export default App;
