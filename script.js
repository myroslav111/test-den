'use strict'

const refsMainBlock = document.querySelector('.container')
const refsTableBlock = document.querySelector('.test__task')
const refsTableCell = document.querySelector('.test__table__data')
const refsTableCellText = document.querySelectorAll('.text__content')
const refsArrowUp = document.querySelector('.up')
const refsArrowUpArr = document.querySelectorAll('.up')
const refsArrowDown = document.querySelector('.down')
const refsArrowDownArr = document.querySelectorAll('.down')
const refsInput = document.querySelector('[type="checkbox"]')
const refsBtn = document.querySelectorAll('.btn')
console.log(refsTableCellText[0]);


refsArrowDownArr[0].addEventListener('click', onArrowDownClick)
refsArrowDownArr[1].addEventListener('click', onArrowDownClick)
refsArrowDownArr[2].addEventListener('click', onArrowDownClick)
refsArrowDownArr[3].addEventListener('click', onArrowDownClick)
refsArrowDownArr[4].addEventListener('click', onArrowDownClick)
refsArrowDownArr[5].addEventListener('click', onArrowDownClick)
refsArrowUpArr[1].addEventListener('click',onArrowUpClick)
refsArrowUpArr[2].addEventListener('click',onArrowUpClick)
refsArrowUpArr[3].addEventListener('click',onArrowUpClick)
refsArrowUpArr[4].addEventListener('click',onArrowUpClick)
refsArrowUpArr[5].addEventListener('click',onArrowUpClick)

refsBtn[0].addEventListener('click', onBtnClickForHidden)
refsBtn[1].addEventListener('click', onBtnClickForCorectText)

refsTableCellText[0].addEventListener('input', onTextRowInput)

function onTextRowInput (event) {
    console.log();
    refsTableCellText[0].lastChild = event.currentTarget.value
}

function onBtnClickForCorectText(event) {
    // console.log(event.currentTarget.parentNode.firstElementChild.firstElementChild);
    // console.log(refsTableCellText[0].lastChild);
    onTextRowInput()
    

}



function onBtnClickForHidden (event) {
    console.log();
    event.currentTarget.parentNode.firstElementChild.classList.toggle('hidden')
    if(event.currentTarget.parentNode.firstElementChild.classList.contains('hidden')){
         event.currentTarget.textContent = 'показать таблицу'
    }else{
        event.currentTarget.textContent = 'спрятать таблицу'
    }
    
}

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

