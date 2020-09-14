import React from 'react';
import './Navbar.scss';

class Navbar extends React.Component {
    render() {
        return(
            <div className="NavigationBar"> 
                <label>gonzalo torres</label>
                <label>Contactanos <img src="https://img.icons8.com/color/24/000000/whatsapp.png" alt="Whatsapp Icon"/></label>
            </div>
        )
    }
}

export default Navbar;