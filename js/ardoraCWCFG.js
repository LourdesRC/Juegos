//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=20; timeIni=20; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bien hecho!"; messageTime="Acabó el tiempo!"; messageError="Fallaste"; messageErrorG="Fallaste"; messageAttempts="No hay más intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="Q1I="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Og==","QQ==","Ug==","RA==","Tw==","Ug==","QQ==","Og==","Og==","Og=="],["Og==","SA==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Tw==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Ug==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","Qw==","Og==","Og==","Og==","Og==","Og==","Og==","Og==","Og=="],["Og==","QQ==","Og==","Og==","Og==","Og==","TA==","Og==","Og==","Og=="],["RQ==","RA==","VQ==","Qw==","QQ==","VA==","SQ==","Vg==","Tw==","Og=="],["Og==","Tw==","Og==","Og==","Og==","Og==","Qg==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","Ug==","Og==","Og==","Og=="],["Og==","Og==","Og==","Og==","Og==","Og==","RQ==","Og==","Og==","Og=="]];
var x1=[2,2,1,7];
var y1=[1,1,7,6];
var x2=[7,2,9,7];
var y2=[1,8,7,10];
var imaCW=["","","",""];
var audioCW=["","","",""];
var defCW=["Programa que permite crear juegos educativos.","Uno de los recursos de juego de palabras.","Tipo de software educativo.","Tipo de Licencia de Ardora."];
var colNum=10;
var rowNum=10;
