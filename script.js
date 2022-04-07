'use strict'


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

function onBtnClickForHiddenTable (event) {
    refsLastElDiv.classList.toggle('hidden')
    if(refsLastElDiv.classList.contains('hidden')){
         event.currentTarget.textContent = 'показать таблицу'
    }else{
        event.currentTarget.textContent = 'спрятать таблицу'
    }
}

refsButtonBlock[1].addEventListener('click', makeUnderlineBelowTextInput)

function makeUnderlineBelowTextInput (event) {

    refsLastInputArr.forEach(element => 
        element.classList.toggle('underline') 
    )
    refsLastInputArr.forEach(element => 
       element.hasAttribute('disabled') === true ? element.removeAttribute('disabled') : element.setAttribute('disabled', '' )
       ) 
       if(event.currentTarget.textContent === 'дать доступ к ячейке'){
        event.currentTarget.textContent = 'снять доступ с ячейки'
       }else{
        event.currentTarget.textContent = 'дать доступ к ячейке'
       }
 }

 const refsCheckBoxArr = document.querySelectorAll('[type="checkbox"]')
 const refsCheckBox = document.querySelector('[type="checkbox"]')

function addAddIventListenerToChackBox (arrChackBox) {
    console.log(arrChackBox );
    arrChackBox.forEach(el => el.addEventListener('change', onChangeCheckBoxToGetRefsOnElForRemoveCall))
}
addAddIventListenerToChackBox(refsCheckBoxArr)

function onChangeCheckBoxToGetRefsOnElForRemoveCall (event) {
   console.log(); 
    const refsElToRem = event.currentTarget.parentNode.parentNode
    refsButtonBlock[2].addEventListener('click', () => refsElToRem.remove())
}














