import React from 'react';
import axios from "axios";
import './App.css';
import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {


  // State variable for the search input.
  const [Input, setInput] = useState("");


  const RECIPE_BASE_URL = "https://api.spoonacular.com/recipes/complexSearch?";
  const KEY_URL = "apiKey=cb1c464d94f142c08b156c5beddade8b";
  function search() {
    axios.get(RECIPE_BASE_URL + KEY_URL + "&query=" + Input).then((res) => {
      console.log(res.data);
    });
  }


  return (


    <div className="Homepage">
      <h1>Recipe Renovator 2.0</h1>


      <div className="Searchbar">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Food"
            variant="outlined"
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                search()
              }
            }}
          />
          <Button variant="outlined"
            onClick={e => { search() }}
          >Submit</Button>
        </Box>

      </div>

      <div>
        <p>you searched for {Input}</p>

        <div id="recipe-result">
          These will be the recipe results.

        </div>
      </div>


    </div>
  );
}

export default App;
