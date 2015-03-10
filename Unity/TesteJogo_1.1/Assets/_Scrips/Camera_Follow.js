#pragma strict
var offset_mouse:Vector3;
var original_mouse:Vector3;
var original_position:Vector3;
var estado : int;

function Start () {
	original_position = transform.position;
	estado = 0;
}

function Update () {
	
	if(Input.GetMouseButton(0) && Input.GetMouseButton(1))
	{
		if(estado == 0){
			original_mouse = new Vector3(Input.GetAxisRaw("Mouse X"), Input.GetAxisRaw("Mouse Y"), 0);
		}
		estado = 1;
		offset_mouse = new Vector3(Input.GetAxisRaw("Mouse X") - original_mouse.x,Input.GetAxisRaw("Mouse Y") - original_mouse.y, 0);
		
		//if(original_position.x-transform.position.x < 5 && offset_mouse.x < 0){
			transform.Translate(offset_mouse.x,offset_mouse.y,0);
		//}
	}
	
	else{
		transform.position = original_position;
		estado = 0;
	}
	

}