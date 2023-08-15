'use strict'

const board = document.querySelector('#board');
const boardBtn = document.querySelector('#new-board');

function makeBoard(num = 16) {
    for(let i = 0; i < num; i++) {
        board.appendChild(document.createElement('div'));
    } 
    let squares = board.children
    for(let i = 0; i < squares.length; i++){
        squares[i].className = 'pixel';
        squares[i].style.height = `${((Math.sqrt(num)/num) * 600) -1}px` ;
        squares[i].style.width = `${((Math.sqrt(num)/num) * 600) -1}px` ;
    }
    
    let squareArr = Array.from(squares);
    for(let i = 0; i < squareArr.length; i++) {
        let selected = squareArr[i];
        selected.addEventListener('mousemove', function () {
        selected.style.backgroundColor = 'black';
        })
    }
}

function newBoard(num) {
    makeBoard(num)
}

makeBoard(144);

boardBtn.addEventListener('click', function () {
    newBoard(prompt('How big do you want your drawing board to be?'))
});

