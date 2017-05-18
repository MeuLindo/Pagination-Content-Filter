//Pagination & Content Filter


var students = document.getElementsByClassName('student-item');
var studentsNames = document.querySelectorAll('.student-details h3');
var paginationArea = document.querySelector('.pagination');

$( document ).ready(function() {
    listenToPage(students);
    $(".pagination li:first-child a").addClass("active");
});

var listenToPage = function appendPageLinks(listOfStudents) { /* take a student list as an argument */
  var numberOfPages = Math.ceil(students.length/10); // determine how many pages for this student list
  var html = '<ul>'; // create a page link section

  for(var i = 1 ; i< numberOfPages ; i++){  // “for” every page add a page link to the page link section
    html += '<li><a href="#">' + i + '</a></li>';
  }
  html += '</ul>';
  paginationArea.innerHTML = html;


  $('.pagination a').click(function(){

    $('.active').removeClass('active');
    $(this).addClass('active');
    showPage(this.text, listOfStudents);

  })

};



function showPage(pageNumber, studentsList){

  var superiorLimit = pageNumber*10;
  var inferiorLimit = superiorLimit - 9;

  for(i = 0; i < studentsList.length; i++){ // This for just hide everyone on the page using th stunde-iten class
    students[i].style.display = 'none';
  }

   for( ; superiorLimit >= inferiorLimit; superiorLimit--){
     console.log(superiorLimit);
     students[superiorLimit].style.display = 'block';

   }
}
