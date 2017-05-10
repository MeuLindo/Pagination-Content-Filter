//Pagination & Content Filter

function showPage(pageNumber, studentList){ // Displays a list of 10 students based on page-number selected
  var students = document.getElementsByClassName('student-item');
  for(i = 0; i < students.length; i++){

    students[i].style.display = 'none';

  }


}

function appendPageLinks() { // Creates the links to the different lists

}

setTimeout(showPage, 3000);
