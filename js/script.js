//Pagination & Content Filter

const students = $('.student-item'); // Every student on the page
const paginationArea = $('.pagination'); // Grabs the html for paginationArea
const searchArea = $('.student-search'); // Grabs the html for searchArea

function changeVisibility(list, goal) {
  for(let i = 0; i < list.length; i++){ // Loops over given list
    students[i].style.display = goal;  // Sets display as string passed to the function
  }

};

function loadsPage() { //Loads behaviour
  for(let i = 10; i < students.length; i++){ // This hide everyone on the page, but the first 10 students
    students[i].style.display = 'none';  // Changes CSS to none
  }

  appendPageLinks(students); //Create the paginationArea for all students
  searchList(); // Loads the searchbox
  $('.pagination a:first').addClass('active'); //Adds the active class to first link;
};

function appendPageLinks(listOfStudents) { // Deals with paginagionArea

  const numberOfPages = Math.ceil(listOfStudents.length/10); // determine how many pages for this student list

  paginationArea.append('<ul>'); //begins the link list

  for(let i = 1 ; i < numberOfPages + 1 ; i++){  // “for” every page add a page link to the page link section
    $('.pagination ul').append(`<li><a href="#">${i}</a></li>`);
  }

  $('.pagination a').on('click', function(){ //listens to clicks on the pagination area
    $('a').removeClass("active"); //Removes every link that has the active class
    $(this).addClass("active"); //Adds the class to clicked
    showPage($(this).text(), listOfStudents); //Calls showPage() that print accordingly to the link
  })

};

function showPage(pageNumber, listOfStudents){ //recieves the link clicked and a list of all the students

  changeVisibility(students, 'none'); // Hides all the peeps

  for(let i = (pageNumber * 10) , j = (pageNumber * 10) - 10 ; i > j ; j++){ // This for display the students on the passed studentsList

     if(!listOfStudents[j]){} // Makes sure the loop skips the complement of 10. Meaning if there is 6 students we wont try to access the other 4 elements that doensnt existe in the array.

     else listOfStudents[j].style.display = 'block'; // Display the students

   }

};

function searchList() { //Rearange the students based on user query

  const searchBox = '<input placeholder="Search for students..."></input><button>Search</button>';
  searchArea.html(searchBox); //inserts the searchArea to the html.

  $('button').click(function(){ //listens to html button
    var studentSearched = $('input').val(); // Search text input
    var studentsFound = []; // array for the students found

    if(studentSearched === ''){ // makes sure nothing happens if button is pressed with an empty input and refreshed previous searches

    }
    else{

      for(var i = 0; i < students.length; i++ ){ // Loop for all the students

        if(students[i].innerText.indexOf(studentSearched) >= 0){ //indexOf returns the position in the array of the $studentSearched checking with every student in the page.
          studentsFound.push(students[i]); // pushes the student found to an array
        }
      }

      if(!studentsFound.length) { //sends a message to the user that no one was found
        alert('No one found :(');
      }
      else if(studentsFound.length > 10){ //checks if we need pages
        $('.pagination a').remove(); // Remove pagination, so we can create the new one with the size of the results
        appendPageLinks(studentsFound);
      }
      else{ // case for students found but we dont need more the one page.
        showPage(1,studentsFound);
      }
  }


  });


};

loadsPage(); //Loads behaviour
