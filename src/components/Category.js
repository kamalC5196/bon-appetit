import React, { useState } from "react";
import { Form, FormGroup, FormControl, Button} from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setCategory } from "../js/action";
import "../css/category/category.css";

function Category(props){
    let [cat , setCat] = useState('');
    function searchCat(){
        
        const categoryURL = `https://api.spoonacular.com/recipes/random?number=20&tags=${cat}&apiKey=5cdaaf29a71f403bb963c42dbaad4041`;
        fetch(categoryURL)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            props.setCategory(data)
            
        })
    }
    return(
        <div className="category">
        <Link to="/"><Button className="btnn1">Home</Button> </Link>
        <Form inline className="srchh" onSubmit={e=>{e.preventDefault(); searchCat();}}>
                            <FormGroup>
                            {' '}
                            <FormControl type="text" className="inpp" placeholder="search" onChange={e=>{setCat(e.target.value)}} />
                            </FormGroup>
                            <Button className="btnn" type="submit">Search</Button>
        </Form>
<ul className="cards">
    { props.recipes && props.recipes.map((e,i)=>{
        return (
  <li key={i}>
    <a href={e.sourceUrl} target="_blank" className="card">
      <img src={e.image} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src={e.image} alt="" />
          <div className="card__header-text">
            <h2 className="card__title">{e.title}</h2>            
            <span className="card__status">Cooking Time: {e.readyInMinutes} Min</span>
          </div>
        </div>
        <p className="card__description">Click to View Receipe</p>
      </div>
    </a>      
  </li>  
        ) 
    })}
    </ul>
</div>
    )
}

function MapStateToProps(state){
    return state;
}

export default connect(MapStateToProps,{setCategory})(Category);