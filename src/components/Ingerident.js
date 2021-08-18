import { connect } from "react-redux";
import { setIng } from "../js/action";

function Ingerident(props){
    function IngSrch(){
        let receipes = [];
        const ingeridentSearch = 'https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken,garlic&number=2&apiKey=5cdaaf29a71f403bb963c42dbaad4041';
        fetch(ingeridentSearch)
        .then(res=>res.json())
        .then(data=>{
            console.log('data',data);
            if(data.code!==402){
                data.map(e=>{
                    fetch(`https://api.spoonacular.com/recipes/${e.id}/information?includeNutrition=false&apiKey=5cdaaf29a71f403bb963c42dbaad4041`)
                    .then(res1=>res1.json())
                    .then(data1=>{
                        console.log('data1',data1)
                        receipes.push(data1)
                        console.log('rece',receipes)

                    });
                });
            }
        });
    }
    IngSrch();
    return (
    <>
        </>
    )
}

function MapStateToProps(state){
    return state;
}

export default connect(MapStateToProps,{setIng})(Ingerident);