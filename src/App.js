import { useState } from 'react'
import './App.css';
import Filter from './Components/Filter';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Watch from "./Components/Watch"


function App() {

  const [movieList, setMovieList] = useState([
    {
      Id: 1,
      title: "bloodshot",
      Image: "https://m.media-amazon.com/images/M/MV5BYjA5YjA2YjUtMGRlNi00ZTU4LThhZmMtNDc0OTg4ZWExZjI3XkEyXkFqcGdeQXVyNjUyNjI3NzU@._V1_.jpg",
      Year: "2020",
      rate: "5",
      trailer: 'https://www.youtube.com/embed/vOUVVDWdXbo',
      description: "It follows a Marine who was killed in action, only to be brought back to life with superpowers by an organization that wants to use him as a weapon. Bloodshot was theatrically released in the United States on March 13, 2020, by Sony Pictures Releasing."

    },
    {
      Id: 2,
      title: "mantera",
      Image : "https://i.ytimg.com/vi/CwZSR0VNB3s/maxresdefault.jpg",
      Year: "2010",
      rate: "4" ,
      trailer: 'https://www.youtube.com/embed/848q7WLmwbk' ,
      description:"Mantera is a film directed by Aliyar Ali Kutty, Miza Mohamad with Tomok Shah Indrawan, Kamaliya, Mikhail Dorojhkin, Said Dashuk-Nigmatulin, Wael Al-Masri .",  
    },
    {
      Id: 3,
      title: "lac des cygnes",
      Image: "https://fr.web.img4.acsta.net/c_310_420/pictures/14/10/30/14/56/383548.jpg",
      Year: "2003",
      rate: "2",
      trailer: 'https://www.youtube.com/embed/74KB2dBXjUA',
      description:"Barbie - Le lac des cygnes est un film réalisé par Owen Hurley avec les voix de Michèle Lituac, Franck Tordjman 7 août 2019",

    },
    {
      Id: 4,
      title: "security",
      Image: "https://m.media-amazon.com/images/M/MV5BZmI4OGE0MTktOTQ3ZC00ZDlhLTg1OGMtMjRiMTMwNzgzZDIyXkEyXkFqcGdeQXVyNjc4Nzk3NzU@._V1_.jpg",
      Year: "2017",
      rate: "3",
      trailer:'https://www.youtube.com/embed/KbKAkL-tmSY',
      description:"Security est un film réalisé par Alain Desrochers avec Antonio Banderas, Ben Kingsley. Synopsis ",

    },
    {
      id : 5 ,
      title : "mis peregrine" ,
      Image : "https://upload.wikimedia.org/wikipedia/en/7/74/Miss_Peregrine_Film_Poster.jpg",
      Year : "2016" ,
      rate : "4" ,
      trailer: 'https://www.youtube.com/embed/CSYg7Z1KS_I',
      description: "When Jacob (Asa Butterfield) discovers clues to a mystery that stretches across time, he finds Miss Peregrine's Home for Peculiar Children. But the danger deepens after he gets to know the residents and learns about their special powers .",

    } ,
    {
      id : "5" ,
      title : "the descent" ,
      Image : "https://upload.wikimedia.org/wikipedia/en/d/d5/Descentposter.jpg" ,
      Year : "2005" ,
      rate : "1" ,
      trailer:'https://www.youtube.com/embed/CSYg7Z1KS_I',
      description: "The Descent is a 2005 British adventure horror film written and directed by Neil Marshall. The film follows six women who, having entered a cave system, struggle to survive against the humanoid creatures inside.",
      
    }

  ])

  const [newTitle, setNewTitle] = useState("");
  const [newRate, setNewRate] = useState("");

  const handleFilter = (fTitle, fRate) => {
    setNewTitle(fTitle)
    setNewRate(fRate)
  }

  const handleAdd = (newMovie) => {
    setMovieList([...movieList, newMovie]);
  }
  return (
    <Router>
      <Route exact path='/' >
        <div className="app">
          <NavBar handleAdd={handleAdd} handleFilter={handleFilter} />
          <Filter movieList={movieList} newRate={newRate} newTitle={newTitle} />
        </div>
      </Route>
      <Route exact path="/Watch/:id" render={(props) => <Watch movieList={movieList} {...props} />} />
    </Router>
  );
}

export default App;
