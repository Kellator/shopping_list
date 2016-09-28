//single state object
//var state = {
//	items:[]
	//checkButton = true; to determine if the item is checked or not using class?
//};

//functions that modify the state:

//add list items to list and add class name to create 
//var addItem = function(state, item, className) {
//	state.items.push(item);
//	state.items.toggleClass(className);
//}

//remove list items
//var removeItem = function(state, item) {
//	state.items.filter(item);
//}
//check or uncheck list items
//var toggleCheckItem = function(state, className) {
//	state.items.toggleClass(className);
//}
$(document).ready(function() {
//had incorrect id - was using label not for mid
	$('#js-shopping-list-form').submit(function(event) {
		event.preventDefault();
		//add new item to end of list and all controls in that list item
		$('.shopping-list').append(
			'<li>' +
        	'<span class="shopping-item">'+ $("#shopping-list-entry").val() + '</span>' +
        	'<div class="shopping-item-controls">' +
          	'<button class="shopping-item-toggle">' +
            	'<span class="button-label">check</span>'+
          	'</button>'+

          	'<button class="shopping-item-delete">'+
            	'<span class="button-label">delete</span>'+
          	'</button>'+
        	'</div>'+
      	'</li>'
      	);
	//remove submitted item from the form input - once the form is submitted,
	//this will 'reset' the field. the (this) focuses on the current event listener
		$(this)[0].reset();
	});

//for when the delete button is pressed to remove item
//fires whent he delete button is 'clicked' then focuses on the element clicked
// an	//add to end of list (append) all html elements that make up the list item
//and find the nearest parent element that is a <li> and 'removes' it
	$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
		$(this).closest('li').remove();
	});

//for when the checked button is click to check or uncheck
//event listener listens for the 'click' on the check button with 'shopping-item-toggle' class
//changes the class to shopping-item__checked which changes CSS

	$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
		$(this).closest('li').find('.shopping-item').toggleClass(
			'shopping-item__checked');
	});


})