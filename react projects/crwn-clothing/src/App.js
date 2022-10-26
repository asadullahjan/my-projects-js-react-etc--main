import Home from "./routes/home/home.component";
import {Routes, Route} from 'react-router-dom';
import NavigationBar from "./routes/navigation-bar/navigation-bar.component";

const Shop = () => {
  return (
    <h1>This is shop page</h1>
  )
}

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<NavigationBar/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
      </Route>
    </Routes>
  );
  
};

export default App;
