const flock = [];
typeFlock = 'Bee';
let whoFollow = false
slideVal = 25;
path = [];

function setup() {
	// put setup code here
	triButton = createButton('Triangle');
	//triButton.position(10, 10);
	triButton.mousePressed(changeTri);

	beeButton = createButton('Bee');
	//beeButton.position(70, 10);
	beeButton.mousePressed(changeBee);

	slider = createSlider(1, 50, 1);

	followMouseButton = createButton('Follow Mouse');
	//followMouseButton.position(windowWidth - 600, 850);
	followMouseButton.mousePressed(randToFollow);

	randFlockButton = createButton('Random Flock');
	//followMouseButton.position(triButton.position.x, 1000);
	randFlockButton.mousePressed(followToRand);

	followPathButton = createButton('Follow flower Path')
	followPathButton.mousePressed(followPath);



	createCanvas(700,700);

	//Create Flock
	for(let i = 0; i < 25; i++)
		flock.push(new Boid());

	//Create Path
	path = new Path(path);
}

function draw() {
	// put drawing code here
	if(slider.value() != slideVal){
		console.log(slider.value())
		//if less
		if(slider.value() < slideVal){
			for(let i = 0; i < slideVal - slider.value(); i++)
				flock.pop();
		}
		//if more
		if(slider.value() > slideVal){
			for(let i = 0; i < slider.value() - slideVal; i++)
				flock.push(new Boid());
		}
	}
	slideVal = slider.value();
	background(0);

	//Path
	path.show();

	//Boids
	for(let boid of flock){
		boid.flock(flock, path.pointPath);
		boid.ifAtEdge();
		boid.update();
		if(typeFlock == 'Bee')
			boid.show('Bee');
		else
			boid.show('Tri');
		boid.randOrFollow = whoFollow;

	}
}

function changeTri(){
	typeFlock = 'Tri';
}

function changeBee(){
	typeFlock = 'Bee';
}

function randToFollow(){
	whoFollow = 'followMouse';
}

function followToRand(){
	whoFollow = 'random';
}

function followPath(){
	whoFollow = 'path';
}

function mouseReleased(){
	if(mouseX > 699 || mouseY > 699)
		return
	path.addPoint(mouseX, mouseY);
	//console.log(path.pointPath);
	//console.log(mouseX, " ", mouseY);
}