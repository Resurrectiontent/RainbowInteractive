//var canvas = document.getElementById("Red");
//var ctx = canvas.getContext("2d");
//ctx.fillStyle = "#FF0000";
//ctx.fillRect(0, 0, 150, 75);

var colours = ['Red', 'Orange', 'Yellow', 'Green', 'LBlue', 'Blue', 'Violet'];
colours.forEach(function (colour) {
    var fillColour;
    var number
    switch (colour) {
        case 'Red':
            fillColour = '#ff0000';
            number = 1;
            break;
        case 'Orange':
            fillColour = '#ffa500';
            number = 2;
            break;
        case 'Yellow':
            fillColour = '#ffff00';
            number = 3;
            break;
        case 'Green':
            fillColour = '#008000';
            number = 4;
            break;
        case 'LBlue':
            fillColour = '#42aaff';
            number = 5;
            break;
        case 'Blue':
            fillColour = '#0000ff';
            number = 6;
            break;
        case 'Violet':
            fillColour = '#8b00ff';
            number = 7;
            break;
    }
    var canvas = document.getElementById(colour);
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = fillColour;
    ctx.fillRect(0, 0, 100, 100);
})