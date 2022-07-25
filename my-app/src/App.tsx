import React from 'react';
import './App.css';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {

  const [Input, setInput] = useState("");


  function search(){
    alert("LOOKING FOOR FOOD")
  }


  return (


    <div className="Homepage">
      <h1>Recipe Renovator</h1>


      <div className="Searchbar">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Food" variant="outlined" />
          <Button variant="outlined">Submit</Button>
        </Box>
          
      </div>

      <div className="Recipes">

      </div>


    </div>
  );
}

export default App;
