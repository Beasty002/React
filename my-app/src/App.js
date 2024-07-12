import './App.css';
import Navbar from './components/Navbar';
let name = "Beasty"; //definin a variable to use later
//in js class is written as "className" we use for in label as "HTMLFor" and self closing tahs must have slash before the the greater than sign


function App() {
  return (  //here only return one ekement or tag  in case we want to return multiple items or tag we can enclose it insider "<>" and </>
    <>
      <h1 className="black">
        Hello {name}  {/*we use curly bracket to use the js variable or js parts that we defined above*/}

      </h1>
      <Navbar li1="hello" li2="myfriens" />
    </>
  );
}

export default App;
