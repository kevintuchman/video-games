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

