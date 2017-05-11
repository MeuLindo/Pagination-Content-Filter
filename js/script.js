//Pagination & Content Filter

setTimeout(showPage, 1000); // just a caller for testing;


function showPage(pageNumber, studentList){ // Displays a list of 10 students based on page-number selected
  var students = document.getElementsByClassName('student-item');


  for(i = 10; i < students.length; i++){ // This for just hide everyone on the page using th stunde-iten class
    students[i].style.display = 'none';  // after the first 10
  }

  pagination();

}

function appendPageLinks() { // Creates the links to the different lists

}

function pagination() {
  var students = document.getElementsByClassName('student-item');
  var numberOfPages = Math.ceil(students.length/10) ;
  var paginationArea = document.querySelector('.pagination');

  var html = '<ul>';

  for(i = 0 ; i< numberOfPages ; i++){
    html += '<li><a href="#">' + i + '</a></li>';
  }
  html += '</ul>';

  paginationArea.innerHTML = html;
}
