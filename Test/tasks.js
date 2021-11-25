// Task 1

function chooseName(names) {
    return names[Math.floor(Math.random() * names.length)];
}



// Task 2
function draw_rectangle(x, y, width, height, color) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
    return ctx;
}



// Task 3
function random(start, finish) {
    return Math.floor(start + Math.random() * (finish - start + 1));
}


function chooseNameUpgrade(names) {
    return names[random(0, names.length - 1)];
}



// Task 4

function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;

    this.calcPerimeter = function () {
        let Peri = this.sides * this.sideLength;
        console.log(this.name);
        console.log(Peri);
    }
}



// Task 5
function limitText(limitField, limitCount, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    } else {
        limitCount.value = limitNum - limitField.value.length;
    }
}


