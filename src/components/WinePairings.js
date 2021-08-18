import React, { useState } from "react";
import { Form, FormGroup, FormControl, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../css/winepairings/wine.css";
import logo1 from "../img/logo_wine.png";
import { setWine } from "../js/action";

function WinePairings(props){
    console.log(props)
    let [category,setCat] = useState('');
    
    function searchWine(){

        const winePairings = `https://api.spoonacular.com/food/wine/dishes?wine=${category}&apiKey=5cdaaf29a71f403bb963c42dbaad4041`;
    
        fetch(winePairings)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            props.setWine(data)
        })
        
    }
    
    function searchFood(){

        const wineWithDish=`https://api.spoonacular.com/food/wine/pairing?food=${category}&apiKey=5cdaaf29a71f403bb963c42dbaad4041`;
        fetch(wineWithDish)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            props.setWine(data)
        })
        
    }
    
    
    
    return(
<div className="wineWrapper">
<div className="body dark-background" style={{backgroundImage: 'url(https://i.ibb.co/nrmkm7d/five-bells-washed-out-logo.png) , linear-gradient(to right, rgba(58, 61, 62, 1) 0%, rgba(58, 61, 62, 1) 100%)'}}>
      <div className="outer-border">
         <div className="mid-border">
            <div className="inner-border">
              <img className="corner-decoration corner-left-top" src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"/>
              <img className="corner-decoration corner-right-top" src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"/>
              <img className="corner-decoration corner-right-bottom" src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"/>
              <img className="corner-decoration corner-left-bottom" src="https://i.ibb.co/4mKvK3N/corner-decoration.jpg"/>
              <img className="vertical-decoration top" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"/>
              <img className="vertical-decoration bottom" src="https://i.ibb.co/JRTK9z4/horizontally-centered-vertical-decoration.png"/>
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12 text-center">
                        <img className="logo logo1" src={logo1} alt="logo"/>
                        <Form inline className="srch">
                            <FormGroup>
                            {' '}
                            <FormControl type="text" className="inp" placeholder="Wine search.." onChange={e=>{setCat(e.target.value)}} />
                            </FormGroup>
                            {' '}
                            <Button className="btn" onClick={e=>{e.preventDefault(); searchWine();}}>Search for Food</Button>
                            <Button className="btn" onClick={e=>{e.preventDefault(); searchFood();}}>Search for Wine</Button>
                            <Link to="/"><Button className="btn">Home</Button> </Link>
                        </Form>
                        <p className="lead skintone-text">
                           <p className="foodTxt">{props.pairingText && props.pairingText}</p>
                            <p> {props.text && props.text}</p>
                        </p>
                        
                        
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</div>
</div>
    );
}

function MapStateToProps(state){
    return state;
}

export default connect(MapStateToProps,{setWine})(WinePairings);