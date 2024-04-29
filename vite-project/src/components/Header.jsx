import React from "react"

const Header = () => {
    return (
        <header>
            <h1>Berkeley Blog</h1>
            <nav>
                <ul>
                    <li><a href="welcome">Home</a></li>
                    <li><a href="about">About Us</a></li>
                    <li><a href="signin">Sign In</a></li>
                    <li><a href="signup">Sign Up</a></li>
                    <li><a href="blogposts">Blogs</a></li>
                </ul>
            </nav>
        </header>
    );
};
export default Header