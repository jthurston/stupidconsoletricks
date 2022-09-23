//setup
const myname = 'Jeff Goode'
const age = 24
const job = 'Front end development engineer'
const hobbies = 'Program with Fortran and read/write articles'

//log  
function logPlain(){
  console.log(myname, age, job, hobbies)  
  document.getElementById('log').innerHTML = 'console.log(items + items + items + items)'
}

//log Object
function logObject(){
  console.log({myname, age, job, hobbies})
  document.getElementById('log').innerHTML = 'console.log({items + items + items + items})'
}

//log Css
function logCss(){
  console.log('%c' + myname, 'color:red;font-size:50px')
  console.log('%cyou found me', 'color:blue;font-size:20px')
  document.getElementById('log').innerHTML = 'console.log("%citems", "color:red;font-size:50px")'
}

//Assert
function logAssert(){
  console.assert(1 === 2, '1 is not equal to 2')
  document.getElementById('log').innerHTML = 'console.assert() is used to test if a given condition is true or not.<br><br>If the condition is false, then the error message is displayed in the console.'
  console.assert(1 === 1, '1 is equal to 1')
}

//Clear
function logClear(){
  console.clear()
  document.getElementById('log').innerHTML = ' console.clear() method clears the console if the console allows it. <br> <br>A graphical console, like those running on browsers, will allow it; a console displaying on the terminal, like the one running on Node, will not support it, and will have no effect (and no error).'
}


function logCount(){
  for (let i = 0; i < 10; i++) {
    console.count('count')
  }
  document.getElementById('log').innerHTML = 'console.count() method is used to count the number of times a particular statement is executed.<br><br>It takes a label as an argument and displays the number of times the statement has been executed.'
}

function logCountReset(){ 
  console.countReset('count')
  document.getElementById('log').innerHTML = 'console.countReset() method resets the counter of a particular label.<br><br>It takes a label as an argument and resets the counter of that label.'
}

//Debug
function logDebug(){
  console.debug('Only seen in a debug mode')
  document.getElementById('log').innerHTML = 'console.debug() method is used to display a message in the console with a debug icon.'
}

//Dir
function logDir(){
  console.dir(document)
  console.dir(document.getElementById('log'))
  document.getElementById('log').innerHTML = 'console.dir() is the way to see all the properties of a specified JavaScript object in console by which the developer can easily get the properties of the object.'
}

//DirXML 
function logDirXML(){
  console.dirxml(document)
  console.dirxml(document.getElementById('log'))
  document.getElementById('log').innerHTML = 'console.dirxml() method is used to display an XML/HTML element representation in the console.<br><br>It takes an element as an argument and displays the XML/HTML element representation of that element.'
}

//Group
function logGroup(){
  console.log("This is the outer level");
  console.group();
  console.log("Level 2");
  console.group();
  console.log("Level 3");
  console.warn("More of level 3");
  console.groupEnd();
  console.log("Back to level 2");
  console.groupEnd();
  console.log("Back to the outer level");
  document.getElementById('log').innerHTML = 'console.group() method creates a new inline group in the Web Console. <br><br>This indents following console messages by an additional level, until console.groupEnd() is called.'
}

//Info
function logInfo(){
  console.info('Here is some info')
  document.getElementById('log').innerHTML = 'console.info() method outputs an informational message to the Web console.'
}

//Warn
function logWarn(){
  for (let i = 0; i < 50; i++) {
  console.log(`i: ${i}`)  
    if (i === 24) {
      console.warn(`i--: ${i}`)
    }
  }
  document.getElementById('log').innerHTML = 'console.warn() method outputs a warning message to the Web console.'
}

//Error
function logError(){
  const a = () => {
    console.error("error");
  }
  const b = () => {
    a()
  }
  const c = () => {
    b() }
  c()
  document.getElementById('log').innerHTML = 'console.error() method outputs an error message to the Web console.'
}

//Count
function logCounted(){
let count = 0
console.time('time1')
document.getElementById('log').innerHTML = 'console.time("time1")'

for (let i = 0; i < 1000000000; i++) {
  count++
}

console.timeEnd('time1')
console.time('time2')

for (let i = 0; i < 1000000000; i++) {
  count++
}

console.timeEnd('time2')
document.getElementById('log').innerHTML = document.getElementById('log').innerHTML + 'console.timeEnd("time2")'
}

//memory
function logMemory(){
  console.memory()
  document.getElementById('log').innerHTML = 'console.memory() method returns an object with information about the memory usage of the Web page.'
}

//Table
function logTable(){
const foods = [
{
  name: '🍔',
  price: 30.89,
  group: 1,
},
{
  name: '🍨',
  price: 20.71,
  group: 1,
},
{
  name: '🍿',
  price: 10.31,
  group: 2,
},
{
  name: '🍵',
  price: 5.98,
  group: 2,
}
]

console.table(foods)
document.getElementById('log').innerHTML = 'console.table() method displays tabular data as a table.<br><br>This function takes one mandatory argument data, which must be an array or an object, and one additional optional parameter columns.'
}