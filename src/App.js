import './App.css';
import React, {useState, useEffect} from "react" ;
import MoviesList from "./movieslist/MoviesList";
import NavBar from "./navbar/NavBar"; 
import AddMovie from "./modal/AddMovie";
import { data } from "./data";
import MovieItem from './movieItem/MovieItem';

import {   Router, Link, Routes, Route } from "react-router-dom";



function App() {
    const [movies, setMovies] = useState(data);
    const [search, setSearch] = useState("");
    const [rate, setRate] = useState(0);
    
    return (
        
       <Router>
           
        <div className="App">
            <NavBar setSearch={setSearch} setRate={setRate} rate={rate} />
            <section>
                <AddMovie movies={movies} setMovies={setMovies} />
                <MoviesList movies={movies} search={search} rate={rate} />
            </section>
            <nav>
               <Link to="/NavBar "> NavBar </Link>
               <Link to= "/AddMovie"> AddMovie </Link>
               <Link to= "/MovieList" > MoviesList </Link>
           </nav> 
           <Routes>

               <Route path= "NavBar" element={<NavBar/>}> </Route>
               <Route path='AddMovie' element= { <AddMovie/>}> </Route> 
               <Route path='MovieList' element= { <MoviesList/>}> </Route> 
               <Route path='MovieItem' element= { <MovieItem/>}>  </Route> 
               <Route path='SetSearch' element= { <setSearch/>}>  </Route> 

           </Routes>
        </div>

        </Router>
      
    );
}

export default App;
 