//Pagination & Content Filter


var students = document.getElementsByClassName('student-item');
var studentsNames = document.querySelectorAll('.student-details h3');
var paginationArea = document.querySelector('.pagination');

$( document ).ready(function() { //loads the first 10 students when document is first load.
  for(i = 10; i < students.length; i++){ // This for just hide everyone on the page using the student-iten class
    students[i].style.display = 'none';  // Chages the CSS prop 'display' to none
  }
    appendPageLinks(students);
    $(".pagination li:first-child a").addClass("active"); //sets the link 1 class to active
});

function appendPageLinks(listOfStudents) { /* take a student list as an argument */
  var numberOfPages = Math.ceil(students.length/10); // determine how many pages for this student list
  var html = '<ul>'; // create a page link section

  for(var i = 1 ; i< numberOfPages ; i++){  // “for” every page add a page link to the page link section
    html += '<li><a href="#">' + i + '</a></li>';
  }
  html += '</ul>';
  paginationArea.innerHTML = html; //inserts the pagination to the html.


  $('.pagination a').click(function(){ //listens to clicks on the pagination area

    $('.active').removeClass('active'); //Removes every link that has the active class
    $(this).addClass('active'); //Adds the active class to the link clicked
    showPage(this.text, listOfStudents); //Calls showPage() that print accordingly to the link

  })

};



function showPage(pageNumber, studentsList){ //recieves the link clicked and a list of all the students

  var superiorLimit = pageNumber*10; // The math to position the students to be selected
  var inferiorLimit = superiorLimit - 10;

  for(i = 0; i < studentsList.length; i++){ // This for just hide everyone on the page using th stunde-iten class
    students[i].style.display = 'none';
  }

   for( ; superiorLimit >= inferiorLimit; superiorLimit--){

     students[superiorLimit].style.display = 'block';

   }
}



$('#button').click(function(){
  var studentSearched = $('#studentName').val();
  $('.pagination').remove();
  console.log(studentSearched)
  for(var i = 0; i < students.length; i++ ){
    console.log($('h3').val());
  }

});
