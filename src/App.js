
import { useState,useEffect } from 'react';
import './App.css';
import { Products } from './Products';
import AppBar from '@mui/material/AppBar';
<<<<<<< HEAD
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { useHistory } from 'react-router';
import { Switch, Route} from 'react-router-dom';
import { Details } from './Details';
import { Edit } from './Edit';
import { Delete } from './Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Add } from './Add';
import { Home } from './Home';
=======
>>>>>>> 95445314c2a6a22a4b4678de1f012252d948d312



function App() {
  const [products,setProducts]=useState([]);
  async function getData() {
    const data= await fetch("https://6166c4e513aa1d00170a6713.mockapi.io/products");
    const prd=await data.json();
    console.log(prd);
    setProducts(prd);
    console.log("setproducts",products);
  }

  useEffect(getData,[]);
<<<<<<< HEAD

  const history=useHistory();
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
        <IconButton
        // change the url on click of button so useHistory is used insted of link
           onClick={()=>history.push("/")}
           edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <HomeIcon />
          </IconButton>
          <IconButton
           onClick={()=>history.push("/desserts")}
           edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <FastfoodIcon />
          </IconButton>
          <IconButton
           onClick={()=>history.push("/add-desserts")}
           edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <AddBoxIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>

    <Switch>
      {/* route to match the url */}
       {/* route path matches the even the substring of url so exact keyword is used to match the exact path */}
      <Route exact path="/">home
        <Home/>
      </Route>
      <Route  exact path="/desserts/:id">Details
      {/* when path is matched call the component */}
        <Details/>
      </Route>
      <Route path="/desserts">
         <Products/>
      </Route>
      <Route path="/edit/:id">Edit
         <Edit/>
      </Route>
      <Route path="/delete/:id">delete
         <Delete/>
      </Route>
      <Route path="/add-desserts">add
         <Add/>
      </Route>
    </Switch>
      
=======
  return (
    <div className="App">
      <Products/>
>>>>>>> 95445314c2a6a22a4b4678de1f012252d948d312
    </div>
  );
}

export default App;

