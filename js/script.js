//Pagination & Content Filter

var students = document.getElementsByClassName('student-item');
var studentsNames = document.querySelectorAll('.student-details h3');
var paginationArea = document.querySelector('.pagination');



var listenToPage = function appendPageLinks(listOfStudents) { /* take a student list as an argument */
  var numberOfPages = Math.ceil(students.length/10); // determine how many pages for this student list
  var html = '<ul>'; // create a page link section

  for(i = 1 ; i< numberOfPages ; i++){  // “for” every page add a page link to the page link section
    html += '<li><a href="#">' + i + '</a></li>';
  }
  html += '</ul>';
  paginationArea.innerHTML = html;


  $('.pagination a').click(function(){
    $(this).toggleClass('active');
    showPage(this, listOfStudents);
  })



};



function showPage(pageNumber, studentsList){ // Displays a list of 10 students based on page-number selected
  // first hide all students on the page. CHECK
  // Then loop through all students in our student list argument
      // if student should be on this page number
          // show the student
  var superiorLimit = pageNumber*10;

  for(i = 0; i < students.length; i++){ // This for just hide everyone on the page using th stunde-iten class
    students[i].style.display = 'none';
  }
  // for(i = 0; i < studentsList.length; i++){ // This loops through all students in our student list argument
  //   //if(studentsList.name ===)
  //
  // }
}


setTimeout(listenToPage(students), 3000); // just a caller for testing;
