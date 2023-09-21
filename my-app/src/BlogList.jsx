const BlogList = ({blogs, title, handleDelete}) => {//creating a componant to use on several other componants passing data through "props"
    // const blogs = props.blogs; //you can just mention the componants data you want to use instead of props
   // const title = props.title;

    return (
        <div className="blog-list">
            <h2>{ title }</h2>
        {blogs.map((blog) => (
            //using the map method, it's necessary to add a key attribute, here we'll select it's id
            <div className="blog-preview" key={blog.id}>
                <h3>{blog.title}</h3>
                <p>{blog.body}</p>
                <p> Written by {blog.author} </p>
                <button onClick={() => handleDelete(blog.id)}>delete</button>
            </div>
        ))}
        </div>
);

}

export default BlogList