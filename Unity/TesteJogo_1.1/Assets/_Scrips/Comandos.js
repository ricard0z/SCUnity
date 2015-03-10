#pragma strict
var thrust: float;
var rb: Rigidbody;
var moveHorizontal : float;
var moveVertical : float;
var movement : Vector3;

function Start () {
	rb = GetComponent.<Rigidbody>();
}

function Update () {

	moveHorizontal = Input.GetAxis("Horizontal");
	moveVertical = Input.GetAxis("Vertical");
	movement = new Vector3(moveHorizontal, 0, moveVertical);
	rb.AddForce(movement * thrust * Time.deltaTime);

}