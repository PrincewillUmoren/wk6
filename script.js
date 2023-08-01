// querySelector
//  const para = document.querySelector('p')

// const span = document.querySelector('p span')

// let today = 'Friday'

// const myName = 'Francis'

// span.textContent = today

const list = document.querySelector('ol :nth-child(3)')

list.textContent = 'honey'

list.style.padding = '20px'
list.style.borderLeft = '3em double brown'
list.style.borderRight = '3em double brown'


// querySelectorAll- 

const lists = document.querySelectorAll('li')
lists[0].textContent = 'bread and beans'
lists[3].textContent = 'bread and beans'
lists[4].textContent = 'bread and beans'

const aboutNigeria = document.querySelectorAll ('section p')

aboutNigeria[0].textContent = 'Nigeria is rich in oil'
aboutNigeria[1].textContent = 'the capital of Nigeria is Abuja'
aboutNigeria[2].textContent = 'Lagos is the commercial hub of Nigeria'
aboutNigeria[3].textContent = 'Nigeria is the best destination for jollof rice'

// getElementById

const hen = document.getElementById('hen')
hen.style.textTransform = 'uppercase'

const fowl = document.querySelectorAll('#hen')[0]
fowl.style.color = 'crimson'

// getElementsByClassName

const ils = document.getElementsByClassName('you')
ils[0].innerText = 'amala'
ils[1].innerText = 'eba'
ils[2].innerText = 'eba'


// getElementsByTagName

const lens = document.getElementsByTagName('p')
lens[1].style.textDecoration = "line-through"
lens[3].style.textDecoration = "line-through"

