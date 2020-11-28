const flock = [];
typeFlock = 'Bee';
let whoFollow = false
slideVal = 25;

function setup() {
	// put setup code here
	triButton = createButton('Triangle');
	//triButton.position(10, 10);
	triButton.mousePressed(changeTri);

	slider = createSlider(1, 50, 25);

	beeButton = createButton('Bee');
	//beeButton.position(70, 10);
	beeButton.mousePressed(changeBee);

	followMouseButton = createButton('Follow Mouse');
	followMouseButton.position(550, 850);
	followMouseButton.mousePressed(randToFollow);

	followMouseButton = createButton('Random Flock');
	followMouseButton.position(450, 850);
	followMouseButton.mousePressed(followToRand);

	createCanvas(700,700);
	for(let i = 0; i < 25; i++)
		flock.push(new Boid());
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

	for(let boid of flock){
		boid.flock(flock);
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
	whoFollow = true;
}

function followToRand(){
	whoFollow = false;
}