import React, {useState, useEffect} from "react";
import { Button } from "reactstrap";
import axios from 'axios';
import {RecipieDetails} from "./RecipieDetails";

var mainStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}

function Main (){
  const [data, setData] = useState(false);

  async function handleClick () {
      const result = await axios('https://www.themealdb.com/api/json/v1/1/random.php',);
      setData(result.data.meals[0]);
      console.log(result.data.meals[0]);
    
  }

  return (
    <div className="wrapper">
      <br />
      <h3 style={{textAlign: 'center'}}>Whats for dinner tonight?</h3>
      <br />
      <Button outline color="success" block size="lg" onClick={handleClick}>
        Find Inspiration
      </Button>{" "}
      <br />
      <RecipieDetails recipe={data}/>
    </div>
  );
};

export default Main;
