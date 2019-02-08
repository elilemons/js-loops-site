// // Uncomment this entire file to see the javascript in action
// // Make sure to pull up your dev tools to see the console logs
// // The password is: secret
// // Ctrl/Cmd + A to select the entire file
// // Ctrl/Cmd + / to uncomment/comment the selection
// // Ctrl/Cmd + s to save so the website will show the changes

// let navItems = [
//     "Home",
//     "About",
//     "Blog",
//     "Contact",
//     "Gallery"
// ];

// let navItemsContainer = document.getElementsByClassName('nav-items');

// // HTML Manipulation
// // First we grab all containers with this class name
// for (let navItemContainer of navItemsContainer) {  
//     // Next we iterate through our array of navigation items
//     for (let navItem of navItems) {
//         // We use JS's document object to create a <li> and <a>
//         let li = document.createElement('li');
//         let a = document.createElement('a');

//         li.setAttribute('class', 'nav-item'); // Equivalent to <li class="nav-item"></li>
//         a.setAttribute('href', '#'); // Equivalent to <a href="#"></a>
//         a.innerText = navItem; // This actually sets the text inside the anchor tag (note, not an attribute)

//         li.appendChild(a); // We now append the <a> we made to the <li> we also made
//         navItemContainer.appendChild(li); // Lastly, we append the elements we made to the containers we grabbed
//     }
// }

// // FOR LOOPS
// // Prints out all of the nav items from the Array declared at the top of this file
// for (let i = 0; i < navItems.length; i++) {
//     console.log(navItems[i]);
// }

// // Counts from 1 to 20 
// for (let x = 1; x <= 20; x++) {
//     console.log(x);
// }

// // Finds all even numbers between 1 - 20
// for (let x = 1; x <= 20; x++) {
//     if (x % 2 === 0) {
//         console.log(x);
//     }
// }

// // Another method to get all even numbers between 1 - 20
// for (let x = 2; x <= 20; x+=2) {
//     console.log(x);
// }

// let name = undefined;

// // while
// while (!name) {
//     name = prompt("What is your name?");
// }

// // The same while loop from above in a for loop
// for (name = undefined; !name;) {
//     name = prompt("What is your name for my for loop?");
// }

// // do while 1
// let userWantsToContinue = true;
// let i = 0;
// do {
//   i++;
//   console.log(i);
//   userWantsToContinue = confirm("Do you want to continue?");
// } while (userWantsToContinue);


// // do while 2
// let userPass;
// do {
//     userPass = prompt("What is your password?");
// } while (userPass !== "secret");

// // for in
// // for properties IN objects
// for (let navItem in navItems) {
//     console.log(`For in navItem: ${navItem}`);
// }

// // for of
// // for items OF arrays
// for (let container of navItemsContainer) {
//     console.log(container);
// }
