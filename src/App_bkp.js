import "./css/style.css"
import Search from "./components/Search";
import Receipes from "./components/Receipes";
function App() {
  return (
    <div className="App">
      <h1>Receipe Finder</h1>
      <Search />
      <Receipes />
    </div>
  );
}

export default App;
