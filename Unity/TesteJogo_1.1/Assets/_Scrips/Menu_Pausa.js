#pragma strict

var posiX: float;
var posiY: float;

var altura: float;
var largura: float;

function Start () {
altura  = 50;
largura = 90;

posiX = Screen.width/2 - largura/2 ; 
posiY = Screen.height/2- altura /2 + 90;
}

function Update () {

}

function OnGUI()
{
if (GUI.Button(Rect(posiX+largura*6,posiY,largura,altura),"Opçao 7"))
{
  //Application.LoadLevel("terreno");
}

if (GUI.Button(Rect(posiX+largura*4,posiY,largura,altura),"Opçao 6"))
{
  //Application.LoadLevel("terreno");
}

if (GUI.Button(Rect(posiX+largura*2,posiY,largura,altura),"Nivel 2"))
{
  Application.LoadLevel("Nivel_2");
}

if (GUI.Button(Rect(posiX,posiY,largura,altura),"Nivel 1"))
{
  Application.LoadLevel("Nivel_1");
}


if (GUI.Button(Rect(posiX-largura*2,posiY,largura,altura),"Menu Principal"))
{
  Application.LoadLevel("Menu_Principal");
}

if (GUI.Button(Rect(posiX-largura*4,posiY,largura,altura),"Menu Pausa"))
{
  Application.LoadLevel("Menu_Pausa");
}

if (GUI.Button(Rect(posiX-largura*6,posiY,largura,altura),"Menu Final"))
{
  Application.LoadLevel("Menu_Final");
}


}