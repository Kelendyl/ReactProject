import React from 'react';

const About = () => {
    return (
        <div class="container"> 
        <h1>About</h1>
        <p>
            This application uses New York Times Books API to generate 
                list of bestsellers' categoties <br/> In future I'm planning 
                to add some more functionality to it, so every category in 
                tha table would be a link, leading to the list of 
                bestseller books in this category.
        </p>
        </div>
     );
}
 
export default About;