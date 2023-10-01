

function Nav(props) {
    const navStyle ={
        background: "pink",
        width: "calc",
        marginLeft: "10px",
        
        }
    console.log(props)
    return (
        <nav className="main-nav" style={navStyle}>
            <ul>
                <li>Home</li>
                <li>Articles</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;