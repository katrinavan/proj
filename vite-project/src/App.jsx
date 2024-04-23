import React from "react";
import "./App.css";

const Header = () => {
    return (
        <header>
            <h1>Berkeley Blog</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

const BlogPost = ({ title, content }) => {
    return (
        <article>
            <h2>{title}</h2>
            <p>{content}</p>
        </article>
    );
};

const Footer = () => {
    return (
        <footer>
            <p>Copyright © 2023 Berkeley Blog. All rights reserved.</p>
        </footer>
    );
};

const App = () => {
    return (
        <div className="app">
            <Header />
            <main>
                <BlogPost title="Welcome to Berkeley Blog" content="This is your first post on the Berkeley Blog." />
                {/* Add more <BlogPost /> components as needed */}
            </main>
            <Footer />
        </div>
    );
};

export default App;
