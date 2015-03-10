#pragma strict
var Luz:GameObject;
var estado: int;
var tempo:float;

function Start () {
	estado = 1;
	tempo = 0;
}

function Update () {
	tempo = tempo + Time.deltaTime;

}

function OnMouseOver (){
	if(Input.GetMouseButtonDown(0) && estado==1 && tempo > 0.1){
		Luz.GetComponent.<Light>().intensity = 0;
		estado = 0;
		tempo = 0;
	}
	
	if(Input.GetMouseButtonDown(0) && estado==0 && tempo > 0.1){
		Luz.GetComponent.<Light>().intensity = 10;
		estado = 1;
		tempo = 0;
	}
 }