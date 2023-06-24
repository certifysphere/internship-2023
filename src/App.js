import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <HomeComp/>
  );
}

function HomeComp() {
  return (
    <div className="App">
    <body>
    <p>
        Welcome to PublicToilet Listing APP!!!
    </p>  
    <AddToilet/>
    <ListToilets/>
    </body>  
    </div>
  );
}

function AddToilet() {
  return (<button>Click Here Add A New Toilet.</button>);
}

function ListToilets(){
  return (
  <>
   <h1>City Public-Toilet-Information</h1>
  <hr></hr>
  <label for="citySelect">Select City:</label>
  <select id="citySelect" onchange="displayCityInfo()">
    <option value="Moradabad">Moradabad</option>
    <option value="Mumbai">Mumbai</option>
    <option value="Kanpur">Kanpur</option>
    <option value="Goa">Goa</option>
    <option value="Delhi">Delhi</option>
  </select>
  <hr></hr>
  <table>
    <thead>
      <tr>
        <th>City</th>
        <th>Toilet-Locations</th>
        <th>Available</th>
      </tr>
    </thead>
    <tbody id="cityInfoTableBody"></tbody>
  </table>
  </>);
}

export default App;
