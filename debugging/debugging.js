const people = [
  {
    name: 'Chris',
    cool: true,
    country: 'Canada',
  },
  {
    name: 'Zoe',
    cool: true,
    country: 'Merica',
  },
  {
    name: 'Ben',
    cool: false,
    country: 'Dog Country',
  },
];

// Console Methods
// console.log, console.error, console.warn, console.table  are examples.
// console.count can show how many times a function is running.
// console.group lets you do multiple checks. group and groupEnd need the same string passed in.

console.table(people);

// run this function in the console to see how .group and .groupEnd work:

function lotsOfThings() {
  console.group('Checking lots of things');
  console.log('check #1');
  console.error('here is an error');
  console.warn('warning warning!');
  console.groupEnd('Checking lots of things');
}

lotsOfThings();

// Callstack or Stack Trace:
// -Lets you know what functions were called.

// Grabbing Elements - You can select an element in the inspector, then type $0 in the console and it will show you the element in the console. $1 will be the second to last element, etc...

// Breakpoints - You can type "debugger" in your code...it will pause JS and give you a ton of info in the console under Sources.

// Scope

// Network Requests - Shows files needed for site to work.

// Break On Attribute -  A way to find out where JS is affecting your elements. Select the element, scroll to "Break On" and select attribute modifications. It's a way to throw in breakpoints, pause JS from running and see a lot of console info about what's happening.

function doctorize(name) {
  return `Dr. ${name}`;
}

doctorize('Chris');

// function greet(name) {
//   doesntExist(); // This causes an error.
//   return `Hello ${name}`;
// }

// function go() {
//   const name = doctorize(greet('Wes')); // Also causes an error.
//   console.log(name);
// }

const button = document.querySelector('.bigger');
button.addEventListener('click', function(e) {
  const newFontSize =
    parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
  e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// A Dad joke fetch
async function fetchDadJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'text/plain',
    },
  });
  const joke = await res.text();
  console.log(joke);
  return joke;
}
fetchDadJoke();
