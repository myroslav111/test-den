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
console.log(refsTableCellText[1].lastChild.textContent);

function addAddEventListenerl (arr, arr1) {
    arr.forEach(element => element.addEventListener('click', onArrowDownClick))
    arr1.forEach(element => element.addEventListener('click', onArrowUpClick))
}
addAddEventListenerl(refsArrowDownArr, refsArrowUpArr)

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

refsBtn[0].addEventListener('click', onBtnClickForHidden)

function onBtnClickForHidden (event) {
    console.log();
    event.currentTarget.parentNode.firstElementChild.classList.toggle('hidden')
    if(event.currentTarget.parentNode.firstElementChild.classList.contains('hidden')){
         event.currentTarget.textContent = 'показать таблицу'
    }else{
        event.currentTarget.textContent = 'спрятать таблицу'
    }
    
}

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
     console.log(refsTableCellTextEl);
     console.log(event)
     console.dir(refsTableCellTextEl.lastChild.textContent);
    
 }
 createNewText()
//  makeUnderlineBelowText(refsTableCellText)
//{element.lastChild.textContent = element.lastChild.textContent.value}
//  element.lastChild.textContent = 'ghjdfghj'