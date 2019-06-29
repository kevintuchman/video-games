document.write('<h1>Hello</h1>');

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening from Seattle!';
} else if (hourNow > 12)  {
    greeting = 'Good afternoon from Seattle!';
} else if (hourNow > 0) {
    greeting = 'Good morning from Seattle!';
} else {
  greeting = 'Welcome';
}

document.write('<h3>' + greeting + '</h3>');

var wantsToAdd = prompt('Do you want to add feedback today? Type yes or no');

//  is wantstoAdd not equal to yes, and is it not equal to no
while (wantsToAdd !== 'yes' && wantsToAdd !== 'no') {
    wantsToAdd = prompt(;Do you want to add feedback today? Type yes or no');
}