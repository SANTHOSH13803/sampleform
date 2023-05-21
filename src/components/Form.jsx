import {  Box, Button, TextField, Typography } from '@mui/material'
import {  useFormik } from 'formik'
import ConfirmationBox from './ConfirmationBox';
// import { UnsavedContext } from '../App';
// import { useContext } from 'react';
import { useContext } from 'react';
import { UnsavedContext } from '../App';
// import { unstable_usePrompt } from 'react-router-dom';
// import useConfirmationHook from '../hooks/useConfirmationHook';


const FormPage = () => {
    // let [isBlocking, setIsBlocking] = useState(false);

    const {unsavedChanges,setUnsavedChanges} = useContext(UnsavedContext)
    console.log(unsavedChanges)


    const formik = useFormik({
        initialValues: {
            name :"",
            email:''
        },
        onSubmit : (values) =>{
            alert(JSON.stringify(values))
        } 
    })




  return (
    <Box>
    <Typography variant='h4' sx={{padding:'10px',textAlign:'left',fontSize:{xs: "20px",lg : '30px'}}}>
        Create Account
    </Typography>
    

    <Box component='form' 
    onSubmit={(e) =>{ 
        formik.handleSubmit(e);
        // setIsBlocking(false); 
        setUnsavedChanges(false); 
    }}
    sx={{padding:3}}>
        <Box display='flex' flexDirection='column' justifyContent={'center'} alignItems={'center'} gap={'1rem'} sx={{boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',borderRadius:"5px" ,height:'300px'}}>
            <TextField name="name" label="Name" variant="outlined" type='text'  
            onChange={(e) =>{
                formik.handleChange(e);
                // setHasUnsavedChanges(true)
                setUnsavedChanges(e.target.value.length>0)
                // setIsBlocking(e.target.value.length>0)

            }} value={formik.values.name}/>
            <TextField name="email" label="Email" variant="outlined" type='text' 
            onChange={(e)=>{formik.handleChange(e);
            // setHasUnsavedChanges(true)
            setUnsavedChanges(e.target.value.length>0)
            // setIsBlocking(e.target.value.length>0)
            }} value= {formik.values.email}/>
            <Box>
                <Button variant="contained" type='submit'>Submit</Button>
            </Box>
        </Box>
    </Box>
        {/* </Formik> */}
    <ConfirmationBox/>
    </Box>
  )
}

export default FormPage


// import React, { useState } from 'react'
// import { unstable_usePrompt } from 'react-router-dom';

// const FormPage = () => {

//     let [isBlocking, setIsBlocking] = useState(false);

//   unstable_usePrompt(
//     "Hello from usePrompt -- Are you sure you want to leave?",
//     isBlocking
//   );
//   // useBlocker(
//   //   () => "Hello from useBlocker -- are you sure you want to leave?",
//   //   isBlocking
//   // );

//   return (
//     <form
//       onSubmit={event => {
//         event.preventDefault();
//         event.target.reset();
//         setIsBlocking(false);
//       }}
//     >
//       <p>
//         Blocking? {isBlocking ? "Yes, click a link or the back button" : "Nope"}
//       </p>

//       <p>
//         <input
//           size="50"
//           placeholder="type something to block transitions"
//           onChange={event => {
//             setIsBlocking(event.target.value.length > 0);
//           }}
//         />
//       </p>

//       <p>
//         <button>Submit to stop blocking</button>
//       </p>
//     </form>
//   )
// }

// export default FormPage