import React, { Component } from 'react';

 class Gallery extends Component {
   render() {
     let alternateImage = "https://andyswordsandpictures.files.wordpress.com/2013/03/blank-book.jpg"
     return (
       <div>
       {
         this.props.items.map((item, index) => {
           let {title, imageLinks, infoLink} = item.volumeInfo;
           return(
            <a key={index} className="book" href={infoLink} target="_blank">
              <img
                src={imageLinks == undefined ? {alternateImage} : imageLinks.thumbnail} alt={title} className="book-img"
              />
              <div className="book-text">
                {title}
              </div>
            </a>

           )
         })
       }
       </div>
     )
   }
 }

 export default Gallery;
