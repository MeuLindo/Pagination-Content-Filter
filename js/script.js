//Pagination & Content Filter

var students = document.getElementsByClassName('student-item');
var studentsNames = document.querySelectorAll('.student-details h3');
var numberOfPages = Math.ceil(students.length/10);




function showPage(pageNumber, studentsList){ // Displays a list of 10 students based on page-number selected

  for(i = 10; i < students.length; i++){ // This for just hide everyone on the page using th stunde-iten class
    students[i].style.display = 'none';  // after the first 10
  }

  pagination();
}

function appendPageLinks() { // Creates the links to the different lists

}

function createList() {

  var studentsList = [];
  for(i = 0 ; i < studentsNames.length ; i++){

  }
  return studentsList;
}

function pagination() {

  var paginationArea = document.querySelector('.pagination');

  var html = '<ul>';

  for(i = 1 ; i< numberOfPages ; i++){
    html += '<li><a href="#">' + i + '</a></li>';
  }
  html += '</ul>';

  paginationArea.innerHTML = html;
}

$('.pagination').click( () => { // Listen to the pagination for filtering purposes
    var test = $(this).text();
    console.log(':::',test);

  });


setTimeout(showPage, 1000); // just a caller for testing;
