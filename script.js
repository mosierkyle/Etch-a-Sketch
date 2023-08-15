'use strict'

const board = document.querySelector('#board');
const boardBtn = document.querySelector('#new-board');
const clearBtn = document.querySelector('#clear-board');
const colorBtn = document.querySelector('#change-color');

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
        selected.addEventListener('mouseover', function () {
            selected.style.backgroundColor = 'black';
            })
    }
}

function newBoard(num) {
    let squares = board.children
    let squareArr = Array.from(squares);
    for(let i = 0; i < squareArr.length; i++) {
        let selected = squareArr[i];
        selected.style.backgroundColor = 'aliceblue'
    }
    makeBoard(num)
}

function clearBoard() {
    let squares = board.children
    let squareArr = Array.from(squares);
    for(let i = 0; i < squareArr.length; i++) {
        let selected = squareArr[i];
        selected.style.backgroundColor = 'aliceblue'
    }
};

makeBoard(144);

boardBtn.addEventListener('click', function () {
    newBoard(prompt('How big do you want your drawing board to be?'))
});

clearBtn.addEventListener('click', function () {
    clearBoard()});
