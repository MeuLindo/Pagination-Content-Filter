# Project Requirements
## Progressive unhancement & unobtrusive JavaScript
* Needs Work
  * ~~Uses inline JavaScript~~
  * ~~HTML markup for search box or pagination is shown/hidden in the HTML markup instead of being created dynamically~~
* Meets Expectations
  * No inline JavaScript. All JavaScript is linked from an external file. :white_check_mark:
  * Use unobtrusive JavaScript to append markup for the pagination links :white_check_mark:
* Exceeds Expectations
  * Use unobtrusive JavaScript to append HTML for a search bar and pagination links :white_check_mark:
## Pagination Links
* Needs Work
  * ~~No links appear for pagination, pagination is hard coded, or the incorrect number of links are displayed.~~
* Meets Expectations
  * Pagination links are created. If there are 44 students, 5 links should be generated, if there’s 66, 7 links should be generated. :white_check_mark:
* Exceeds Expectations
  * Pagination links display based on how many search results are returned. For example: if 10 or fewer results are returned, 0 pagination links are displayed. If 22 search results are returned, 3 pagination links are displayed. :white_check_mark:
## Paging
* Needs Work
  * ~~The first 10 students aren’t shown when the page loads.~~
  * ~~Nothing happens when the links are clicked, or the incorrect number of students are displayed.~~
* Meets Expectations
  * The first 10 students are shown when the page loads, and each pagination link displays the correct students. :white_check_mark:
  * Clicking on “1” in the pagination links should shows students 1 to 10. Clicking “2” shows 11 to 20. Clicking “5” shows students 41 to 50, and so on. :white_check_mark:
* Exceeds Expectations
  * When a search yields 0 results, a message informing the user is that no results have been found is displayed in place of results :white_check_mark:
## Code comments
* Needs Work
  * ~~No comments describing how the code and functions work~~
* Meets Expectations
  * Code comments explaining how the functions work :white_check_mark:
* Exceeds Expectations
  * N/A
