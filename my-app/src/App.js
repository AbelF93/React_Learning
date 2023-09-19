import './App.css';

function App() {
 const title = 'Welcome to the new blog';//string and number are aloud
 const likes = 50;  
 const link = "https://www.google.com";//you can call a variable to store links/parameters
 // booleans and objects are not
 

 return (
    <div className="App">
      <div className='content'>
        <h1>{ title }</h1>
        <p>Liked {likes} times</p>
        <p> {[1,2,3,4,5]} </p>
        <a href={link} >Google Website</a>
      </div>
    </div>
  );
}

export default App;
