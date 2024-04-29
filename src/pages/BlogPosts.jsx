import React from "react"
import BlogPost from "../components/BlogPost"
import './BlogPosts.css';


const blogPostsData = [
    {
      image: './src/img/botanical_garden.jpg',
      title: "Place to visit near Berkeley (Part 1): Botanical Garden",
      content: 
      `The 34-acre UC Botanical Garden is one of the most diverse landscapes in the world, 
      with over 10,000 types of plants including many rare and endangered species. 
      The Garden was established in 1890 and its living collections are invaluable resources for international research and conservation.
      `,
      bp1: "UC Berkeley students are FREE",
      bp2: "Members Only Hour: 9:00–10:00 am", 
      bp3: "General Admission: 10:00 am–5:00 pm",
      bp4: "Closed on Tuesdays", 
      author: "Xingyan Zhong"
    },
    {
      image: './src/img/bampfa.jpg',
      title: "Place to visit near Berkeley (Part 2): BAMFA",
      content: `One of the nation’s leading university museums, the Berkeley Art Museum and Pacific Film Archive (BAMPFA) 
      is a forum for cultural experiences that transform individuals and advance the local, national, 
      and global discourse on art and film. Every week BAMPFA offers 'Open Art Labs' for families, art exhibitions and tours, workshops, and films.
      `,
      bp1: "Upcoming Event: Le Bonheur (Film)",
      bp2: "Date: Wednesday, May 1, 2024",
      bp3: "Time: 7 PM (85 mins)",
      bp4: "$5 for UC Berkeley students",
      author: "Katrina Van"
    }, 
    {
      image: './src/img/software.jpg',
      title: "Free software for Berkeley students",
      content: `Software @ Berkeley facilitates software licensing and distribution across the UC Berkeley campus of commonly used software for 
      staff, faculty, and students. Check out the software eligibility tool, and the Software Catalog in the website to see what's available.
      `,
      bp1: "Some Useful Softwares: ",
      bp2: "Adobe Creative Cloud",
      bp3: "Microsoft 365 Apps",
      bp4: "Microsoft Operating System",
      author: "Kambiz Reza"
    }, 
    {
      image: './src/img/food_pantry.jpg',
      title: "Basic Needs Food Pantry at MLK",
      content: `The Food Pantry is an emergency relief program that is designed to meet the short-term food security needs of the UC Berkeley community, 
      which includes all UC Berkeley students (undergraduate and graduate), staff, visiting scholars, student researchers, postdocs, and faculty who need food. 
      It offers items such as rice, pasta, milk, cereal, freezer items, and fresh produce. 
      You can take as much as needed while being mindful that this is a SHARED COMMUNITY RESOURCE FOR EMERGENCIES.`,
      bp1: "Step 1: Bring a bag with you for your food!", 
      bp2: "Step 2: Add yourself to the virtual line, using your phone, computer, or our ipad kiosk",
      bp3: "Step 3: Once you receive a text, “You have reached the front of the line!”, go to the 1st floor of MLK Student Union by the Bnorth entrance Food Pantry check-in desk",
      bp4: "Step 4: Scan your Cal ID at the desk. Then head downstaris to enter the Pantry",
      author: "Jooyeon Kim"
    }
    // Add more blog post objects as needed
];


const BlogPosts = () => {
    return (
      <main>
        <article className="card-container">
        {blogPostsData.map((post, index) => (
          <BlogPost key={index} image={post.image} title={post.title} content={post.content} bp1={post.bp1} bp2={post.bp2} bp3={post.bp3} bp4={post.bp4} author={post.author}/>
        ))}
        </article>
      </main>
    );
  };



// const BlogPosts = ({ title, content, author }) => {
//     return (
//         <main>
//                 <BlogPost title="Welcome to Berkeley Blog" content="This is your first post on the Berkeley Blog." author="Jooyeon" />
//                 {/* Add more <BlogPost /> components as needed */}
//         </main>
//     );
// };

export default BlogPosts;