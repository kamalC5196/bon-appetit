import React, { useState, useEffect } from "react";
import { Form, FormGroup, FormControl, FormLabel, Button} from "react-bootstrap";
import { connect } from "react-redux";
import { setCategory } from "../js/action";
import { setWine } from "../js/action";
import { setIng } from "../js/action";

function Search(props){
    
    let [category,setCat] = useState('');
    
    function searchReceipes(){
//        e.preventDefault();
        const categoryURL = `https://api.spoonacular.com/recipes/random?number=10&tags=${category}&apiKey=5cdaaf29a71f403bb963c42dbaad4041`;
        const ingeridentSearch = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken,garlic&number=2&apiKey=5cdaaf29a71f403bb963c42dbaad4041';
        const winePairings = 'https://api.spoonacular.com/food/wine/dishes?wine=malbec&apiKey=5cdaaf29a71f403bb963c42dbaad4041';
        const wineWithDish="https://api.spoonacular.com/food/wine/pairing?food=steak&apiKey=5cdaaf29a71f403bb963c42dbaad4041";
    
        fetch(categoryURL)
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            props.setCategory(data)
        })
        
    }
    
    function searchWine(){
//        e.preventDefault();
        const categoryURL = `https://api.spoonacular.com/recipes/random?number=10&tags=${category}&apiKey=5cdaaf29a71f403bb963c42dbaad4041`;
        const ingeridentSearch = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken,garlic&number=2&apiKey=5cdaaf29a71f403bb963c42dbaad4041';
        const winePairings = 'https://api.spoonacular.com/food/wine/dishes?wine=malbec&apiKey=5cdaaf29a71f403bb963c42dbaad4041';
    
        fetch(winePairings)
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            props.setWine(data)
        })
        
    }
    
    function searchIng(){
//        e.preventDefault();
        const categoryURL = `https://api.spoonacular.com/recipes/random?number=10&tags=${category}&apiKey=5cdaaf29a71f403bb963c42dbaad4041`;
        const ingeridentSearch = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${category}&number=10&apiKey=5cdaaf29a71f403bb963c42dbaad4041`;
        const winePairings = 'https://api.spoonacular.com/food/wine/dishes?wine=malbec&apiKey=5cdaaf29a71f403bb963c42dbaad4041';
    
        fetch(ingeridentSearch)
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            props.setIng(data)
        })
        
    }
    
    function getReceipes(receipe_id){
        const detailed_url = `https://api.spoonacular.com/recipes/${receipe_id}/information?includeNutrition=false&apiKey=5cdaaf29a71f403bb963c42dbaad4041`;
        
    }
    return(
        <Form inline>
            <FormGroup>
                <FormLabel>Category search</FormLabel>
                {' '}
                <FormControl type="text" placeholder="ex: desserts or starters..." onChange={e=>{setCat(e.target.value)}} />
            </FormGroup>
            {' '}
            <Button onClick={searchReceipes}>SearchR</Button>
            <Button onClick={searchWine}>SearchW</Button>
            <Button onClick={searchIng}>SearchW</Button>
        </Form>
    )

}

export default connect(null,{setCategory,setWine,setIng})(Search);

//unsplash
//"https://api.unsplash.com/photos/random/?count=1&client_id=8e31e45f4a0e8959d456ba2914723451b8262337f75bcea2e04ae535491df16d&query=burger"
