import { Link } from "react-router-dom";
import "./css/style.css";
import ing from "./img/ing.jpg";
import logo from "./img/logo.png";
import cat from "./img/cat.jpg";
import wine from "./img/wine.jpg";
import cat1 from "./img/cat1.jpg";

function App() {
  return (
      <>
         <div className="navBar" id="nv">
        <nav>
            <ul>
                
                <li><Link to="/ingeridents">Search by Ingredients </Link></li>|
                <li><Link to="/category" >Category search </Link></li>|
                <li><Link to="/winepairings" >Wine Pairing</Link></li>|
                <li><a >Our recommendations</a></li>
            </ul>
        </nav>
    </div>  
    
    <div className="header">
       
         
    
	<div className="IntroMsg">
    <img  alt="Bon Appetit where food meets passion" 
    className="logo" src={logo} id="introLogo" width="500" height="500" />
    </div>  <br/><br/>
      
      <div className="wrapper">
      
              <article className="postcard dark yellow">
			<a className="postcard__img_link" >
				<img className="postcard__img" src={ing} alt="Image Title" />
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title">Search Yummy Reciepes with Ingeridents</h1>
				
				<div className="postcard__bar"></div><br/><br/><br/>
				<div className="postcard__preview-txt">Ever wondered what dish to prepare with the ingridents that are available in the pantry/fridge. Well worry no more!! we are here to finding tasty and Healthy Recipes For Ingredients You Already Have.<br/><br/>We help you answer the question "What can i make with _____?"</div>
				<ul className="postcard__tagbox">
					
					<li className="tag__item play blue">
						<a ><i className="fas fa-play mr-2"></i>Take Me there --></a>
					</li>
				</ul>
			</div>
		</article>
      <article className="postcard dark green">
			<a className="postcard__img_link" >
				<img className="postcard__img" src={cat} alt="Image Title" />
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title">Search Tasty and Healthy recieps by Category</h1>
				
				<div className="postcard__bar"></div><br/><br/><br/>
				<div className="postcard__preview-txt">Search recipes by their category with our advanced search engine. If you want to prepare breakfast just type in "breakfast" into our search engine and we will serve you with tasty and healthy recipes.</div>
				<ul className="postcard__tagbox">
					
					<li className="tag__item play blue">
						<a ><i className="fas fa-play mr-2"></i>Take Me there --></a>
					</li>
				</ul>
			</div>
		</article>
      
      <article className="postcard dark red">
			<a className="postcard__img_link" >
				<img className="postcard__img" src={wine} alt="Image Title" />
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title">Wine Pairings !!</h1>
				
				<div className="postcard__bar"></div><br/><br/><br/>
				<div className="postcard__preview-txt">You can ask wine pairing to recommend wines to go with a large variety of dishes. Simply type in the dish you're planning to eat and we will recommend you the best wine for whatever you're planning to eat. You can also ask for meal recommendations for a wine you plan on drinking 
            <br/><br/>Finally, a wine and food pairing skill that is informative and helpful!</div>
				<ul className="postcard__tagbox">
					
					<li className="tag__item play blue">
						<a ><i className="fas fa-play mr-2"></i>Take Me there --></a>
					</li>
				</ul>
			</div>
		</article>
      
      <article className="postcard dark blue">
			<a className="postcard__img_link" >
				<img className="postcard__img" src={cat1} alt="Image Title" />
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title">Our Recommendations</h1>
				
				<div className="postcard__bar"></div><br/><br/><br/>
				<div className="postcard__preview-txt txt">Browse through our top recipe recomendations that will definetely make your tummy happy</div>
				<ul className="postcard__tagbox">
					
					<li className="tag__item play blue">
						<a ><i className="fas fa-play mr-2"></i>Take Me there --></a>
					</li>
				</ul>
			</div>
		</article>
      </div>

     </div>
</>
  );
}

export default App;
