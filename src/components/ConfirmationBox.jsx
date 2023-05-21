import { Button,DialogActions,DialogContent,DialogContentText,DialogTitle,Dialog, Typography } from '@mui/material'
// import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useState,} from 'react'
import { UnsavedContext } from '../App'
import { Link } from 'react-router-dom'

const ConfirmationBox = (props) => {
    const [open,setOpen] = useState(false)
    const {unsavedChanges,setUnsavedChanges} =useContext(UnsavedContext)
    const navigate = useNavigate();
    const navigateToNextpage =() =>{
        setOpen(false)
        setUnsavedChanges(false)
        navigate(`${props.path}`)
    }

  return (
    <>
    {unsavedChanges ?  (<Typography  onClick={() =>setOpen(true)}>
        {props.name}    
    </Typography>) : <Link style={{color: "black",cursor:'pointer',textDecoration:'none'}} to={props.path}>{props.name}</Link>}
   
    <Dialog open={open} onClose={()=>{setUnsavedChanges(false)}}>
        <DialogTitle id='leave-dialoge'>
            Alert!!!
        </DialogTitle>
        <DialogContent>
            <DialogContentText>Are you sure you want to leave this page without saving.</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() =>setOpen(false)}>Cancel</Button>
            <Button autoFocus onClick={navigateToNextpage}>Leave</Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default ConfirmationBox