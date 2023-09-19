const Home = () => {

    const handleClick = (e) => {// Create the functions above and refere it in the button tag
        console.log('hello you', e.target);
    }
    const handleClickAgain= (name, e) => {
        console.log('hello '+ name, e.target);
    }

    return (
        <div className="home">
            <h1>Home Section</h1>
            <button onClick={handleClick} >Click Here</button>
            <button onClick={(e) => handleClickAgain('toi', e)} >Click Again</button>
        </div>
      );
}
 
export default Home;
