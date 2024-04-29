import React from "react";
import "./App.css";
import BlogPost from "./components/BlogPost"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Welcome from "./pages/Welcome"
import BlogPosts from "./pages/BlogPosts"

const router = createBrowserRouter([
    {
        path:"/",
        element:(
            <>
                <Header/>
                <Welcome/>
                <Footer/>
            </>
        )
    },
    {
        path:"/welcome",
        element:(
            <>
                <Header/>
                <Welcome/>
                <Footer/>
            </>
        )
    },
    {
        path:"/home",
        element:(
            <>
                <Header/>
                <Home/>
                <Footer/>
            </>
        )
    },
    {
        path:"/about",
        element:(
            <>
                <Header/>
                <About/>
                <Footer/>
            </>
        )
    },
    {
        path:"/signin",
        element:(
            <>
                <Header/>
                <SignIn/>
                <Footer/>
            </>
        )
    },
    {
        path:"/signup",
        element:(
            <>
                <Header/>
                <SignUp/>
                <Footer/>
            </>
        )
    },
    {
        path:"/blogposts",
        element:(
            <>
                <Header/>
                <BlogPosts/>
                <Footer/>
            </>
        )
    }
])

const App = () => {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  };

export default App;
