# Q-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
* Answer:  
	1. getElementById: It selects an element with its 'id'. An element has a unique 'id' and   'getElementById' selects that unique element.
	
	2. getElementsByClassName: It selects all elements of same 'class'. An HTML can contain elements of  same 'class name', 'getElementsByClassName' selects all those elements.
	
	3. querySelector: 
		* It is a JavaScript DOM method.
		* It takes valid CSS selector (i.e.) as its argument.
		* It returns the first matched element in the document.
		* If it doesn't find any match, returns 'Null'.
	
	4. querySelectorAll:
		* It is a JavaScript method.
		* It takes valid CSS selector as  its argument.
		* It returns a specified NodeList containing all elements that match the specified selector.

# Q-2: How do you create and insert a new element into the DOM?
* Answer: 
		* Create the element: Use the document.createElement() method, passing the tag name of the desired element as a string.
		* Find the parent element: Using document.getElementById(), document.querySelector(), etc. methods one can select the parent element for appending the new created element.
		* Append the new element to the parent: Use appendChild(), prepend(), append() or insertBefore() methods to append the new created element to the parent.

# Q-3: What is Event Bubbling and how does it work?
* Answer: 
		* Event bubbling in JavaScript is a mechanism where an event triggered on a specific DOM element propagates upwards through its ancestors in the Document Object Model (DOM) tree. 
		
		* This means that if you click on a child element, the event will first be handled by that child element, and then it will "bubble up" to its parent, then its grandparent, and so on, until it reaches the document object or the window object. 
		
		* stopPropagation() method is used to stop propagation.

# Q-4: What is Event Delegation in JavaScript? Why is it useful?
* Answer: 
		* to remove repetition of same event for child elements of a parent element.
		* define an event listener for the parent element.
		* if an event occur on an child element, it will reach the parent element by event bubbling.

# Q-5: What is the difference between preventDefault() and stopPropagation() methods?
* Answer: 
	     * preventDefault(): This method prevents the browser's default action associated with a specific event.
		 * stopPropagation:  This method prevents the event from "bubbling up" or "propagating" further through the DOM hierarchy to parent elements.