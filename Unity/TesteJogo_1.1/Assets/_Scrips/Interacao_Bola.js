#pragma strict
var thrust: float;
var rb: Rigidbody;

function Start () {
	rb = GetComponent.<Rigidbody>();
	
}

function Update () {
	

}

function OnMouseOver (){
	if(Input.GetMouseButton(0)){
		rb.AddForce(transform.up * thrust*10 *Time.deltaTime);
	}
 }

