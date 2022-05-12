canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add(){
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;  
    
    car1_imgTag = new Image(); 
	car1_imgTag.onload = uploadcar1; 
	car1_imgTag.src = car1_image;   

	car2_imgTag = new Image(); 
	car2_imgTag.onload = uploadcar2; 
	car2_imgTag.src = car2_image;   
}

function uploadBackground() {
	/*
	Correct the function names
	*/
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	
	ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2() {
	
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed == '38'){
        Car1_up();
        console.log("Car1 up");
    }
    if(keypressed == '40'){
        Car1_down();
        console.log("Car1 down");
    }
    if(keypressed == '37'){
        Car1_left();
        console.log("Car1 left");
    }
    if(keypressed == '39'){
        Car1_right();
        console.log("Car1 right");
    }
    if(keypressed == '65'){
        Car2_up();
        console.log("Car2 up w");
    }
    if(keypressed == '83'){
        Car2_down();
        console.log("Car2 down s");
    }
    if(keypressed == '90'){
        Car2_left();
        console.log("Car2 left z");
    }
    if(keypressed == '88'){
        Car2_right();
        console.log("Car2 right x");
     }
}