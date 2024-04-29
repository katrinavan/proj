import React from "react";
import "./App.css";
import BlogPost from "./components/BlogPost"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Welcome from "./pages/Welcome"
import BlogPosts from "./pages/BlogPosts"

const router = createBrowserRouter([
    {
        path:"/",
        element:(
            <div className="mb-100">
                <Header/>
                <Welcome/>
                <Footer/>
            </div>
        )
    },
    {
        path:"/welcome",
        element:(
            <div className="mb-100">
                <Header/>
                <Welcome/>
                <Footer/>
            </div>
        )
    },
    {
        path:"/about",
        element:(
            <div className="mb-100">
                <Header/>
                <About/>
                <Footer/>
            </div>
        )
    },
    {
        path:"/signin",
        element:(
            <div className="mb-100">
                <Header/>
                <SignIn/>
                <Footer/>
            </div>
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
            <div className="mb-100">
                <Header/>
                <BlogPosts/>
                <Footer/>
            </div>
        )
    },
])

const App = () => {
    return (
      <>
        <RouterProvider router={router} />
      </>
    );
  };

export default App;
