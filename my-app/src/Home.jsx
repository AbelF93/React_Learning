import { useState } from "react";// import useState to describe a value and call a setValue to modify it
import BlogList from "./BlogList";

const Home = () => {// creating a blog template, with specific id.
  const [blogs, setBlogs] = useState([
    {title:'My new wbsite', body: 'lorem ipsum...', author: 'mario', id: 1},
    {title:'Welcome party', body: 'lorem ipsum...', author: 'françis', id: 2},
    {title:'Web dev top tips', body: 'lorem ipsum...', author: 'marc', id: 3}
  ]);

  const handleDelete = (id) => {
    const newBlogs= blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs);
}

    return (// return automaticaly the specific info into the Blog List
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's Blogs"/>
        </div>
      );
}
 
export default Home;

/* const Home = () => {
    // let name ='john';
     const [name, setName] = useState('john');//[variable, setVariable]
    const [age, setAge] = useState(25);
    
     const handleClick = () => {// Create the functions above and refere it in the button tag
      setName('johnny');
      setAge(35);
     }
 
     return (
         <div className="home">
             <h1>Home Section</h1>
             <p>{name} is {age} years old</p>
             <button onClick={handleClick} >Click Here</button>  
         </div>
       );
 } */