'use strict'

const refsMainBlock = document.querySelector('.container')
const refsTableBlock = document.querySelector('.test__task')
const refsTableCell = document.querySelector('.test__table__data')
const refsTableCellText = document.querySelectorAll('.text__content')
const refsTableCellTextEl = document.querySelector('.text__content')
const refsArrowUp = document.querySelector('.up')
const refsArrowUpArr = document.querySelectorAll('.up')
const refsArrowDown = document.querySelector('.down')
const refsArrowDownArr = document.querySelectorAll('.down')
const refsInput = document.querySelector('[type="checkbox"]')
const refsBtn = document.querySelectorAll('.btn')
//console.log(refsTableCellText[1].lastChild.textContent);

function addAddEventListenerl (arr, arr1) {
    arr.forEach(element => element.addEventListener('click', onArrowDownClick))
    arr1.forEach(element => element.addEventListener('click', onArrowUpClick))
}
// addAddEventListenerl(refsArrowDownArr, refsArrowUpArr)

function onArrowDownClick (event) {
    
const text = event.currentTarget.parentNode.lastChild.textContent 
event.currentTarget.parentNode.lastChild.textContent = event.currentTarget.parentNode.parentNode.nextElementSibling.firstChild.lastChild.textContent
event.currentTarget.parentNode.parentNode.nextElementSibling.firstChild.lastChild.textContent = text

}

function onArrowUpClick (event) {
   
    const text = event.currentTarget.parentNode.lastChild.textContent 
    event.currentTarget.parentNode.lastChild.textContent = event.currentTarget.parentNode.parentNode.previousElementSibling.firstChild.lastChild.textContent
    event.currentTarget.parentNode.parentNode.previousElementSibling.firstChild.lastChild.textContent = text
    
    }

// refsBtn[0].addEventListener('click', onBtnClickForHidden)

// function onBtnClickForHidden (event) {
//     console.log();
//     event.currentTarget.parentNode.firstElementChild.classList.toggle('hidden')
//     if(event.currentTarget.parentNode.firstElementChild.classList.contains('hidden')){
//          event.currentTarget.textContent = 'показать таблицу'
//     }else{
//         event.currentTarget.textContent = 'спрятать таблицу'
//     }
    
// }

refsBtn[1].addEventListener('click', onBtnClickForCorectText)

function onBtnClickForCorectText (event) {

    makeUnderlineBelowText(refsTableCellText)
    createNewText()
}
 function makeUnderlineBelowText (arr) {
    arr.forEach(element => {
        if(element.classList.contains('underline') === false){
           element.classList.add('underline')
        }else{
            element.classList.remove('underline')
        }
    })
 }
// lastChild.textContent
refsTableCellTextEl.addEventListener('input', createNewText)
// console.log(refsTableCellTextEl);
//  function changeText (arr) {
//     arr.forEach(element => {element.addEventListener('input', createNewText)
//     })
//  }
  
 function createNewText (event) {
    //  console.log(refsTableCellTextEl);
    //  console.log(event)
    //  console.dir(refsTableCellTextEl.lastChild.textContent);
    
 }
 createNewText()
//  makeUnderlineBelowText(refsTableCellText)
//{element.lastChild.textContent = element.lastChild.textContent.value}
//  element.lastChild.textContent = 'ghjdfghj'


const refsLastElDiv = document.querySelector('.new')
const refsLastElDivArr = refsLastElDiv.querySelectorAll('.js-lastDivCell')
const refsLastP = refsLastElDiv.querySelector('p')
const refsLastSpan = refsLastP.querySelector('span')
const refsLastInput = refsLastP.querySelector('.input')
const refsLastInputArr = refsLastElDiv.querySelectorAll('.input')
const refsArrowUp1 = refsLastElDiv.querySelectorAll('.up')
const refsArrowDown1 = refsLastElDiv.querySelectorAll('.down')
console.log(refsLastElDivArr );

function addEventListenerToArrowsUp (arrUp, arrDown) {
    console.log('up');
    arrUp.forEach(arrowUp => 
        arrowUp.addEventListener('click', onArrowUpClicToReversText)
        
        )
        arrDown.forEach(arrowDown => 
            arrowDown.addEventListener('click', onArrowDownClicToReversText)
    )


}
addEventListenerToArrowsUp (refsArrowUp1, refsArrowDown1)

function onArrowUpClicToReversText(event){
    console.log();
    console.log(event.currentTarget.parentNode.parentNode.previousElementSibling.querySelector('.input').value);
    const currentValue = event.currentTarget.parentNode.lastChild.value
   const siblingLeftValue = event.currentTarget.parentNode.parentNode.previousElementSibling.querySelector('.input')
   event.currentTarget.parentNode.lastChild.value = siblingLeftValue.value
   event.currentTarget.parentNode.parentNode.previousElementSibling.querySelector('.input').value = currentValue



}

function onArrowDownClicToReversText(event){
 

    const nextVelue = event.currentTarget.parentNode.parentNode.nextElementSibling.querySelector('.input')
    const currentValue = event.currentTarget.parentNode.lastChild.value
    event.currentTarget.parentNode.lastChild.value = nextVelue.value
    event.currentTarget.parentNode.parentNode.nextElementSibling.querySelector('.input').value = currentValue


}

const refsButtonBlock = document.querySelectorAll('.btn1')

refsButtonBlock[0].addEventListener('click', onBtnClickForHiddenTable)
console.log();

function onBtnClickForHiddenTable (event) {
    refsLastElDiv.classList.toggle('hidden')
    if(refsLastElDiv.classList.contains('hidden')){
         event.currentTarget.textContent = 'показать таблицу'
    }else{
        event.currentTarget.textContent = 'спрятать таблицу'
    }
    
}

refsButtonBlock[1].addEventListener('click', makeUnderlineBelowTextInput)
console.log(refsLastInputArr);

function makeUnderlineBelowTextInput (arr) {
    // arr.forEach(element => {
    //     if(element.classList.contains('underline') === false){
    //        element.classList.add('underline')
    //     }else{
    //         element.classList.remove('underline')
    //     }
    // })
 }
 makeUnderlineBelowTextInput(refsLastInputArr)

// event.currentTarget.parentNode.lastChild.value
// refsLastInput.addEventListenerl('focus', event =>{
//     console.log(event.currentTarget);
//     event.currentTarget.style.outline = 'none'
// })



const students = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];

// function rotate (arr) {
//     // let el = 
//      [arr[0], arr[1]] = [arr[1], arr[0]]

//     console.log(arr);
// }

// rotate(students)
//  students.sort((a, b) => students.indexOf(b) - students.indexOf(a))
// console.log(students.indexOf("Вика"));
//console.log(students);

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']








