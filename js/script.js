//Pagination & Content Filter


const students = $('.student-item'); // Every student in the page. Used to first page load.
const paginationArea = $('.pagination'); // Used to first page load.
const searchArea = $('.student-search');

function changeVisibility(list, goal) {
  for(let i = 0; i < list.length; i++){ // This for just hide everyone on the page, but the first 10 students, using the student-iten class
    students[i].style.display = goal;  // Changes the CSS prop 'display' to none
  }

};


function loadsPage() { //Loads index page
  for(let i = 10; i < students.length; i++){ // This for just hide everyone on the page, but the first 10 students, using the student-iten class
    students[i].style.display = 'none';  // Changes the CSS prop 'display' to none
  }

  appendPageLinks(students); //Create the pagination links for all the students
  searchList(); // Loads the searchbox

};

function appendPageLinks(listOfStudents) { /* take a student list as an argument */
  var numberOfPages = Math.ceil(listOfStudents.length/10); // determine how many pages for this student list
  var html = '<ul>'; // create a page link section

  for(var i = 1 ; i< numberOfPages + 1 ; i++){  // “for” every page add a page link to the page link section
    html += '<li><a href="#">' + i + '</a></li>';
  }
  html += '</ul>'; // ends paginationArea string

  paginationArea.html(html); //inserts the pagination to the html.

  $('.pagination a').click(function(e){ //listens to clicks on the pagination area

    $('.active').removeClass('active'); //Removes every link that has the active class
    $(this).addClass('active'); //Adds the active class to the link clicked

    showPage($(this).text(), listOfStudents); //Calls showPage() that print accordingly to the link

  })
};

function showPage(pageNumber, listOfStudents){ //recieves the link clicked and a list of all the students

  var superiorLimit = pageNumber*10; // The math to position the students to be selected
  var inferiorLimit = superiorLimit - 10;

  for(var i = 0; i < students.length; i++){ // This for just hide everyone on the page using th stunde-iten class

    students[i].style.display = 'none';

  }

  for( ; superiorLimit > inferiorLimit; superiorLimit--){ // This for display the students on the passed studentsList

     if(!listOfStudents[superiorLimit]){} // Makes sure the loop skips the complement of 10. Meaning if there is 6 students we wont try to access the other 4 elements that doensnt existe in the array.

     else listOfStudents[superiorLimit].style.display = 'block'; // Display the students

   }
  if (pageNumber === 1){} // if page number = 1 we dont need to show the paginationArea
  else appendPageLinks(listOfStudents); // create the paginationArea

};

function searchList() { //Rearange the students based on user query

  const searchBox = '<input placeholder="Search for students..."></input><button>Search</button>';
  searchArea.html(searchBox); //inserts the searchArea to the html.

  $('button').click(function(){ //listens to html button
          //debugger;
    var studentSearched = $('input').val(); // Search text input
    var studentsFound = []; // array for the students found

    if(studentSearched === ''){ // makes sure nothing happens if button is pressed with an empty input and refreshed previous searches
      changeVisibility(students,'');
      loadsPage(); // Just refreshes the page if no one is found
    }
    else{
      $('.pagination a').remove(); // Remove pagination, so we can create the new one with the size of the results

      for(var i = 0; i < students.length; i++ ){ // Loop for all the students

        if(students[i].innerText.indexOf(studentSearched) >= 0){ //indexOf returns the position in the array of the $studentSearched checking with every student in the page.
          studentsFound.push(students[i]); // pushes the student found to an array
        }
      }

      if(!studentsFound.length) { //sends a message to the user that no one was found
        alert('No one found :(');
        changeVisibility(students,'hide');
        loadsPage(); // Just refreshes the page if no one is found
      }
      else if(studentsFound.length > 10){ //checks if we need pages
        appendPageLinks(studentsFound);
      }
      else{ // case for students found but we dont need more the one page.
        showPage(1,studentsFound);
      }
  }


  });


};

loadsPage(); //Loads index page
