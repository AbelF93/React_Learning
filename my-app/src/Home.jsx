import { useState } from "react";// import useState to describe a value and call a setValue to modify it

const Home = () => {// creating a blog template, with specific id.
  const [blogs, setBlogs] = useState([
    {title:'My new wbsite', body: 'lorem ipsum...', author: 'mario', id: 1},
    {title:'Welcome party', body: 'lorem ipsum...', author: 'françis', id: 2},
    {title:'Web dev top tips', body: 'lorem ipsum...', author: 'marc', id: 3}
  ]);
    return (// return automaticaly through Map method.
        <div className="home">
            {blogs.map((blog) => (
                //using the map method, it's necessary to add a key attribute, here we'll select it's id
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p> Written by {blog.author} </p>

                </div>
            ))}
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