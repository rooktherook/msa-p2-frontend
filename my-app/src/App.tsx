import React from 'react';
import axios from "axios";
import './App.css';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from "./Components/List"


function App() {


  // State variable for the search input.
  const [Input, setInput] = useState("");
  const [infoJson, setinfoJson] = useState({ results: [{ title: "", image: "" }] });

  const RECIPE_BASE_URL = "https://api.spoonacular.com/recipes/complexSearch?";
  const KEY_URL = "apiKey=cb1c464d94f142c08b156c5beddade8b";

  // Search function uses axios to make api call.
  function search() {
    axios.get(RECIPE_BASE_URL + KEY_URL + "&query=" + Input).then((res) => {
      setinfoJson(res.data);
    });
  }

  // function randomrecipe(){
  //   axios.get(RECIPE_BASE_URL + KEY_URL + "/random").then((res) => {
  //     setinfoJson(res.data);
  //   });

  


  return (


    <div className="Homepage">
      <h1>Recipe Renovator 2.0</h1>


      <div className="Searchbar">
        <TextField
          id="outlined-basic"
          label="Food"
          variant="outlined"
          focused
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              setInput((e.target as HTMLInputElement).value)
              { search() }
            }
          }}
        />
        <Button variant="outlined"
          onClick={e => { search() }}
        >Submit</Button>
        {/* <Button variant="outlined"
          onClick={e => { search() }}
        >Surpise Me</Button> */}
      </div>

      <div>
        <p>you searched for {Input}</p>

        <div id="recipe-result">
          These will be the recipe results.
          {/* <p>{infoJson.results[0].title}</p>
          <img src={infoJson.results[0].image}></img> */}
          <List input={infoJson} />
        </div>
      </div>
    </div>
  );
}

export default App;
