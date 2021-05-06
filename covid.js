function covid_check( Your_Temp) {

	let message;
if (Your_Temp==33){
	message="Normal Temperature";
}
else if(Your_Temp==35){
	message="Watch your Temperature";
}
else if(Your_Temp>37){
	message="Please test for Covid";
		
}

return message;
	
	
}