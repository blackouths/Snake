let myCanvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let snakeSize = 10;
let w = 350;
let h = 350;
let score = 0;
let snake;
let food;
let direction;
let gameloop;