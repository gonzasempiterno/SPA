import React from "react";
import hardwork from "../images/hardwork.jpg";
import "./SectionOne.scss";

class SectionOne extends React.Component {
    render() {
        return(
            <div>
                <img src={hardwork} alt="hardwork" className="bkgImg"/>
                <div>
                    <div className="miniText">
                        <label>DISEÑO WEB & MARKETING DIGITAL</label> <input type="button" value="Pedi tu presupuesto" />
                    </div>
                    <div className="midText">
                        <h1>Destaca en el mundo digital <br/> 
                        obtene hoy tu webpage</h1>
                    </div>
                    <div className="contactBtns">
                        <a href="#Contact"><input type="button" value="CONTACTO"/></a>
                        <a href="#ContPlanes"><input type="button" value="NUESTROS SERVICIOS"/></a>
                        <a href="#ContPlanes"><img src="https://img.icons8.com/fluent-systems-regular/94/000000/chevron-down.png" alt="Next Section"/></a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default SectionOne;