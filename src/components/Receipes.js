import { connect } from "react-redux";
function Receipes(props){
    console.log('props',props);
    return(
        <>
        { props.recipes && <div>
            
         {props.recipes.map((receipe,i)=>(
                <h4 key={i}>{receipe.title}</h4>
            ))
         }
            
        </div>
        }
        { props.text && <div>
            
         {props.pairings.map((receipe,i)=>(
                <h4 key={i}>{receipe}</h4>
            ))
         }
            
        </div>
        }
        { props.length && <div>
            
         {props.map((receipe,i)=>(
                <h4 key={i}>{receipe.title}</h4>
            ))
         }
            
        </div>
        }
        </>
    )
    
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps,null)(Receipes);