import './App.css';
import Navbar from './Navbar';//all the components are stocked in the App Component
import Home from './Home';
import NewBlog from './NewBlog';
import Actuality from './Actuality';


function App() {
 const title = 'Welcome to the new blog';//string and number are aloud
 const likes = 50;  
 const link = "https://www.google.com";//you can call a variable to store links/parameters
 // booleans and objects are not
 

 return (
    <div className="App">
      <Navbar/>
      <div className='content'>
      <Home/>
      <NewBlog/>
      <Actuality/>
      </div>
    </div>
  );
}

export default App;
