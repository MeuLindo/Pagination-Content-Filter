//Pagination & Content Filter


var students = document.getElementsByClassName('student-item');
var paginationArea = document.querySelector('.pagination');

$( document ).ready(function() { //loads the first 10 students when document is first load.
  for(i = 10; i < students.length; i++){ // This for just hide everyone on the page using the student-iten class
    students[i].style.display = 'none';  // Chages the CSS prop 'display' to none
  }
    appendPageLinks(students);
    $(".pagination li:first-child a").addClass("active"); //sets the link 1 class to active

    searchList();
});

function appendPageLinks(listOfStudents) { /* take a student list as an argument */
  var numberOfPages = Math.ceil(listOfStudents.length/10); // determine how many pages for this student list
  var html = '<ul>'; // create a page link section

  for(var i = 1 ; i< numberOfPages + 1 ; i++){  // “for” every page add a page link to the page link section
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

  for(i = 0; i < students.length; i++){ // This for just hide everyone on the page using th stunde-iten class
    students[i].style.display = 'none';
  }

   for( ; superiorLimit >= inferiorLimit; superiorLimit--){

     if(!studentsList[superiorLimit]){}

     else studentsList[superiorLimit].style.display = 'block';

   }

   appendPageLinks(studentsList);

}


function searchList() {

  $('button').click(function(){
    var $studentSearched = $('input').val();
    var studentsFound = [];
    console.log($studentSearched);
    $('.pagination a').remove();

      for(var i = 0; i < students.length; i++ ){

        if(students[i].innerText.indexOf($studentSearched) >= 0){
          studentsFound.push(students[i]);
        }
        console.log(studentsFound);
      }

      if(!studentsFound.length) {
        alert('No one found :(');
      }
      else if(studentsFound.length > 10){
        console.log('>10');
        console.log(studentsFound);
        appendPageLinks(studentsFound);
      }
      else{
        console.log('showpage');
        console.log(studentsFound);
        showPage(1,studentsFound);
      }

  });


};


// $('button').click(function(){
//   var $studentSearched = $('input').val();
//   var $allStudents = $('.student-item h3').text();
//   var studentsFound = [];
//   $('.pagination').remove();
//
//   //console.log($studentSearched, $allStudents);
//   for(var i = 0; i < students.length; i++ ){
//
//     if($allStudents.indexOf($studentSearched) >= 0){
//       studentsFound.push($allStudents[0]);
//     }
//
//   }
//
//   console.log(studentsFound);
//
// });
