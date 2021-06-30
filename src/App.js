import { useEffect, useState } from "react";
import './App.css';

function App() {

  const [data, setData] = useState("")


  useEffect(() => {

    (async function getAPI() {
      const url = `https://gist.githubusercontent.com/carmandomx/3d7ac5f15af87a587e1d25f5ba96de61/raw/e2d848b87c730a580077de221666343c15b1a243/gistfile1.txt`;
      const respuesta = await fetch(url);
      const json = await respuesta.json();
      setData(json)
    })();

  }, [])


  useEffect(() => {
    if (data) {
      console.log(data["quotes"]);
    }
  }, [data])





  return (
    <div className="App">
      <button className="">Click</button>
    </div>
  );
}

export default App;
