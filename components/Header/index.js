// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
   const headerCont = document.querySelector('.header-container');
   const create = el => document.createElement(el);
   const header = create('div');
   header.classList.add('header');
   const spanDate = create('span');
   spanDate.classList.add = 'date';
   spanDate.textContent = 'SMARCH 28, 2019';
   const headerTitle = create('h1');
   headerTitle.textContent = 'Lambda Times';
   const spanTemp = create('span');
   spanTemp.classList.add('temp');
   spanTemp.textContent = '98°'

   headerCont.append(header);
   header.append(spanDate, headerTitle, spanTemp)
}

Header()

console.log(document)