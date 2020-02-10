/*
* Description: Action listener for buttons within the buttonContainer section.
*               Clears out any elements in the rowsContainer, and then creates
*               5 rows where the text within each row is the value of the clicked button.
* Author: Victoria Pruim 
* Date: February 8, 2020
*/
window.onload = function () {
    // add event listener for the buttonContainer when a child element is clicked
    var buttonContent = document.querySelector("#buttonContainer");
    buttonContent.addEventListener("click", createRows, false);

    function createRows(e) {
        if (e.target !== e.currentTarget) {
            var clickedItem = e.target;

            // clear out any rows inside the table
            var rowsContainer = document.getElementById("rowsContainer");
            rowsContainer.innerHTML = "";
            
            // create 5 new rows and add them to the table 
            var i=0;
            while(i<5)
            {
                var newRow = document.createElement("DIV");
                newRow.innerHTML = clickedItem.value;
                newRow.className = "row";
                rowsContainer.appendChild(newRow);
                i ++;
            }
        }
        e.stopPropagation();
    }
}
