import {addBook} from '../modules/JS/books/managing-books.js'
import { removeBook } from '../modules/JS/books/managing-books.js'
// import { DateTime } from 'luxon';

// document.addEventListener('DOMContentLoaded', () => {
//   const currentDateElement = document.getElementById('current-date');
//   const currentDateTime = DateTime.now();
//   const formattedDate = currentDateTime.toFormat('dd/MM/yyyy');
//   currentDateElement.textContent = `Today's date: ${formattedDate}`;
// });

const pageLinks = document.querySelectorAll('.link-page');
const sections = document.querySelectorAll('section');

// Hide all sections except the first on page load
const pages = () => {
    sections.forEach((section, index) => {
        if (index !== 0) {
          section.style.display = 'none';
        }
      });
      
      // Add a click event to each page link
      pageLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
          event.preventDefault();
      
          // Show the corresponding section and hide the others
          sections.forEach((section, sectionIndex) => {
            if (sectionIndex === index) {
              section.style.display = 'block';
            } else {
              section.style.display = 'none';
            }
          });
        });
      });
}


// Managing books
addBook();
removeBook();


//  pages

pages()

// Date


