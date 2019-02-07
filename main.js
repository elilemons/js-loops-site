// let navItems = [
//     "Home",
//     "About",
//     "Blog",
//     "Contact"
// ];

// let navItemsContainer = document.getElementsByClassName('nav-items');

// // for loop
// for (i = 0; i < navItems.length; i++) {
//     console.log(navItems[i]);
// }

// let name = undefined;

// // while
// while (!name) {
//     name = prompt("What is your name?");
// }

// // do while
// let userPass;
// do {
//     userPass = prompt("What is your password?");
// } while (userPass !== "secret");

// // for in
// for (let navItem in navItems) {
//     console.log(`For in navItem: ${navItem}`);
// }

// // for in
// for (let container of navItemsContainer) {
//     console.log(container);
// }

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