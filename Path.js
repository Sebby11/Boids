/*
Holds list of list [x, y], which are translated
to points on the canvas.
*/
class Path{
	//Path holds a list of points
	constructor(pathList){
		this.pointPath = pathList;
	}

	show(){
		//makes Asters (pollinated plant Bees enjoy);
		for(let marker of this.pointPath){
			strokeWeight(10)
  			stroke(255, 255, 0, 255)
			fill(255, 255, 0, 255);
			point(marker[0], marker[1]);
			strokeWeight(0);
			fill(128,0,128)
			ellipse(marker[0], marker[1]+15,10, 20);
			ellipse(marker[0], marker[1]-15,10, 20);
			ellipse(marker[0]+15, marker[1],20, 10);
			ellipse(marker[0]-15, marker[1],20, 10);
		}
	}

	getPath(){
		return this.pointPath
	}

	addPoint(x, y){
		this.pointPath.push([x, y]);
	}
}