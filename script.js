'use strict'

const board = document.querySelector('#board');
document.createElement('div')

function makeBoard(num = 16) {
    let square = document.createElement('div')
    for(let i = 0; i < num; i++) {
        board.appendChild(document.createElement('div'));
    } 
   
    let squares = board.children
    for(let i = 0; i < squares.length; i++){
        squares[i].className = 'pixel';
        squares[i].style.height = `${((Math.sqrt(num)/num) * 600)}px` ;
        squares[i].style.width = `${((Math.sqrt(num)/num) * 600)}px` ;
    }
}

makeBoard(75);


