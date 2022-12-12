var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
/*var deleteButton = document.getElementbyId("delete");*/

function inputLength()
{
	return input.value.length;
};

function createListElement()
{
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);	
		input.value = "";
};

/*function deleteListElement()
{
	var li = document.deleteElement("li")
		li.removeChild(document.
		ul.appendChild(li);	
		input.value = "";	
}
*/

// function doneToggle()
// {
// 	if (li.done === true)	
// 	{
// 		li.done === false
// 	}
// 	else if (li.done === false)
// 	{
// 		li.done === true
// 	};
// };

var addListItem = function(event)
{
	if (input.value.length > 0 && event.button === 0) 
	{
		createListElement();
	}
	else if (input.value.length > 0 && event.keyCode === 13) 
	{
		createListElement();
	};
};

button.addEventListener("click", addListItem);

input.addEventListener("keypress", addListItem);