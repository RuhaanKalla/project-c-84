var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car_1_width = 120;
car_1_height = 70;
car_1_image = "car1.png";
car_1_x = 10;
car_1_y = 10;

car_2_width = 120;
car_2_height = 70;
car_2_image = "car2.png";
car_2_x = 10;
car_2_y = 100;

background_image = "racing.jpg";

function add(){
    background_img_tag = new Image();
    background_img_tag.onload = uploadbackground;
    background_img_tag.src = background_image;

    car1_image_tag = new Image();
    car1_image_tag.onload = uploadcar1;
    car1_image_tag.src = car_1_image;

    car2_image_tag = new Image();
    car2_image_tag.onload = uploadcar2;
    car2_image_tag.src = car_2_image;

}

function uploadbackground(){
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_image_tag,car_1_x,car_1_y,car_1_width,car_1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_image_tag,car_2_x,car_2_y,car_2_width,car_2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
           car1_up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
           car1_down();
            console.log("down");
        }
        if(keyPressed == '37')
        {
            car1_left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            car1_right();
            console.log("right");
        }

        if(keyPressed == '87')
        {
            car2_up();
            console.log("up")
        }
        if(keyPressed == '83')
        {
            car2_down();
            console.log("down")
        }
        if(keyPressed == '65')
        {
            car2_left();
            console.log("left")
        }
        if(keyPressed == '68')
        {
            car2_right();
            console.log("right")
        }
}
