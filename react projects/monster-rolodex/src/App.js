import { useState, useEffect } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value,setValue]
  const [monsters, setMonsters] = useState([]); //[value,setValue]
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respnse) => respnse.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChnage = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="main-title">Monster Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChnage}
        placeholder="serach monsters"
        className="monster-search-box"
      />
      <CardList monsters={filteredMonsters}  />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((respnse) => respnse.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             console.log(users);
//             return { monsters: users };
//           }
//         )
//       );
//   }

//   onSearchChnage = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     //moving the searchField to state so that we can have access to it from different places.
//     this.setState(
//       () => {
//         return { searchField }; //changing the state so that we can re render the h1s
//       }
//     );
//   }

//   render() {

//     const {monsters , searchField} = this.state;
//     const {onSearchChnage} = this

//     /////we do not want to change the array in state but what is rendring of seraching
//     /*we do not want to make the future filters on the filtered array rather we want to aplly
//     filter on the complete array that is why we are not chnaging the array in the state but
//      rather chnaging what we are re rendring*/

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="main-title">Monster Rolodex</h1>

//         <SearchBox onChangeHandler={onSearchChnage} placeholder='serach monsters' className='monster-search-box'/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
