
import './App.css';
import Home from './components/Home';
// import Navbar from './components/Navbar';
import About from './components/About';
import FormPage from './components/Form';
import React, { useState } from 'react';
// import { BrowserRouter, Link, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


export const UnsavedContext = React.createContext({unsavedChanges : false})

// const router= createBrowserRouter(
//   createRoutesFromElements(
//   <Route path='/' element={<Navbar/>
// }>
//     <Route index element={<Home/>}/>
//     <Route path='/about' element={<About/>}/>
//     <Route path='/form' element={<FormPage/>}/>
//   </Route>
//   )
// )

// function App() {
//   // const [unsavedChanges,setUnsavedChanges ] = useState(false)

//   return (
//     <div className="App">
//       <RouterProvider router={router}/>
//     </div>
//   );
// }

function App() {
  const [unsavedChanges,setUnsavedChanges] =useState(false)
  // console.log(unsavedChanges)
  return(
    <UnsavedContext.Provider value={{
      unsavedChanges,
      setUnsavedChanges 
    }}>
    <BrowserRouter>
    <Navbar/>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/form" element={<FormPage/>} />
      </Routes>
    </BrowserRouter>
    </UnsavedContext.Provider>
  )
}

export default App;
