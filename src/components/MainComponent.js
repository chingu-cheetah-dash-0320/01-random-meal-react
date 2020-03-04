import React from "react";
import { Button } from "reactstrap";
import {RecipieDetails} from "./RecipieDetails";

var mainStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}

const Main = () => {
  return (
    <div className="wrapper">
      <br />
      <h3 style={{textAlign: 'center'}}>Whats for dinner tonight?</h3>
      <br />
      <Button outline color="success" block size="lg" >
        Find Inspiration
      </Button>{" "}
      <br />
      <RecipieDetails/>
    </div>
  );
};

export default Main;
