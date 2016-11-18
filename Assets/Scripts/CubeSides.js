#pragma strict

function OnCollisionEnter (col : Collision) {
	if(this.gameObject.tag == "cRS" && col.gameObject.tag == "RedGround")
    {
    	Destroy (col.gameObject);
    	gameObject.tag == "Burning";
		if(TurnScript.turnPl == 1) {
			TurnScript.points1 += 3;
		} else if(TurnScript.turnPl == 2) {
			TurnScript.points2 += 3;
		} else if(TurnScript.turnPl == 3) {
			TurnScript.points3 += 3;
		} else if(TurnScript.turnPl == 4) {
			TurnScript.points4 += 3;
		}
    } 
    
    if(this.gameObject.tag == "cYS" && col.gameObject.tag == "YellowGround")
    {
    	Destroy (col.gameObject);
    	gameObject.tag == "Burning";
		if(TurnScript.turnPl == 1) {
			TurnScript.points1 += 3;
		} else if(TurnScript.turnPl == 2) {
			TurnScript.points2 += 3;
		} else if(TurnScript.turnPl == 3) {
			TurnScript.points3 += 3;
		} else if(TurnScript.turnPl == 4) {
			TurnScript.points4 += 3;
		}
    }
    
    if(this.gameObject.tag == "cOS" && col.gameObject.tag == "OrangeGround")
    {
    	Destroy (col.gameObject);
    	gameObject.tag == "Burning";
		if(TurnScript.turnPl == 1) {
			TurnScript.points1 += 3;
		} else if(TurnScript.turnPl == 2) {
			TurnScript.points2 += 3;
		} else if(TurnScript.turnPl == 3) {
			TurnScript.points3 += 3;
		} else if(TurnScript.turnPl == 4) {
			TurnScript.points4 += 3;
		}
    }
    
    if(this.gameObject.tag == "cBS" && col.gameObject.tag == "BlueGround")
    {
    	Destroy (col.gameObject);
    	gameObject.tag == "Burning";
		if(TurnScript.turnPl == 1) {
			TurnScript.points1 += 3;
		} else if(TurnScript.turnPl == 2) {
			TurnScript.points2 += 3;
		} else if(TurnScript.turnPl == 3) {
			TurnScript.points3 += 3;
		} else if(TurnScript.turnPl == 4) {
			TurnScript.points4 += 3;
		}
		
    }
    
    if(this.gameObject.tag == "cPS" && col.gameObject.tag == "PinkGround")
    {
    	Destroy (col.gameObject);
    	gameObject.tag == "Burning";
		if(TurnScript.turnPl == 1) {
			TurnScript.points1 += 3;
		} else if(TurnScript.turnPl == 2) {
			TurnScript.points2 += 3;
		} else if(TurnScript.turnPl == 3) {
			TurnScript.points3 += 3;
		} else if(TurnScript.turnPl == 4) {
			TurnScript.points4 += 3;
		}
    }
    
    if(this.gameObject.tag == "cGS" && col.gameObject.tag == "GreenGround")
    {
   		Destroy (col.gameObject);
   		gameObject.tag == "Burning";
		if(TurnScript.turnPl == 1) {
			TurnScript.points1 += 3;
		} else if(TurnScript.turnPl == 2) {
			TurnScript.points2 += 3;
		} else if(TurnScript.turnPl == 3) {
			TurnScript.points3 += 3;
		} else if(TurnScript.turnPl == 4) {
			TurnScript.points4 += 3;
		}
    }
    
     
    if(this.gameObject.tag == "cGS" && col.gameObject.tag == "PowerPoint" || this.gameObject.tag == "cRS" && col.gameObject.tag == "PowerPoint" || this.gameObject.tag == "cOS" && col.gameObject.tag == "PowerPoint" || this.gameObject.tag == "cYS" && col.gameObject.tag == "PowerPoint" || this.gameObject == "cPS" && col.gameObject.tag == "Powerpoint")
    {
    	Destroy (col.gameObject);
		if(TurnScript.turnPl == 1) {
			TurnScript.points1 += 7;
		} else if(TurnScript.turnPl == 2) {
			TurnScript.points2 += 7;
		} else if(TurnScript.turnPl == 3) {
			TurnScript.points3 += 7;
		} else if(TurnScript.turnPl == 4) {
			TurnScript.points4 += 7;
		}
    }
     
}