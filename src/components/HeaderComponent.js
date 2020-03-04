import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
        <div>
        <Navbar color="success" light>
          <NavbarBrand href="/" className="mr-auto"><span style={{color:'white'}}>RecipeRoulette</span></NavbarBrand>
          
        </Navbar>
      </div>
    );
}


export default Header;