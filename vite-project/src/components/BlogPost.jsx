import React from "react"

const BlogPost = ({image, title, content, bp1, bp2, bp3, bp4, author }) => {
    return (
        //<article>
            // {/* <h2>{title}</h2>
            // <p>{content}</p>
            // <p>{author}</p> */}

            // <div className="card w-96 bg-primary text-primary-content">
            //     <div className="card-body">
            //         <h2 className="card-title">{title}</h2>
            //         <p>{content}</p>
            //         <div className="card-actions justify-end">
            //         <button className="btn">By {author}</button>
            //         </div>
            //     </div>
            // </div>
            
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="image"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{content}</p>
                <li>{bp1}</li>
                <li>{bp2}</li>
                <li>{bp3}</li>
                <li>{bp4}</li>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">By {author}</button>
                </div>
            </div>
            </div>

            
        //</article>
        
    );
};
export default BlogPost;