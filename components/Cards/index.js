// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get(' https://lambda-times-backend.herokuapp.com/articles')
   .then(response => {
      console.log(response.data.articles);

      response.data.articles.bootstrap.forEach(article => {
         document.querySelector('.cards-container').appendChild(articleCreator(article))

      })
      response.data.articles.javascript.forEach(article => {
         document.querySelector('.cards-container').appendChild(articleCreator(article))

      })
      response.data.articles.jquery.forEach(article => {
         document.querySelector('.cards-container').appendChild(articleCreator(article))

      })
      response.data.articles.node.forEach(article => {
         document.querySelector('.cards-container').appendChild(articleCreator(article))

      })
      response.data.articles.technology.forEach(article => {
         document.querySelector('.cards-container').appendChild(articleCreator(article))

      })

   })

function articleCreator(data) {

   // const create = el => {
   //    document.createElement(el)
   // }







   console.log(data)
   const card = document.createElement('div');
   card.classList.add('card');

   const cardHeadline = document.createElement('div');
   cardHeadline.classList.add('headline')
   cardHeadline.textContent = data.headline;

   const cardAuthor = document.createElement('div');
   cardAuthor.classList.add('author');

   const imgCont = document.createElement('div');
   imgCont.classList.add('img-container');

   const authorImg = document.createElement('img');
   authorImg.src = data.authorPhoto;

   const authorName = document.createElement('span');
   authorName.textContent = `By ${data.authorName}`;


   card.append(cardHeadline, cardAuthor);
   cardAuthor.append(imgCont, authorName);
   imgCont.append(authorImg)

   return card


}

// articleCreator()