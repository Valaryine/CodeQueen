function Learn_Arrays(){
	
	
	var original_array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
	
	var my_Array= new Array(24); // Array Declaration
	
	
		my_Array=original_array.reverse();
		
		let Rest_Array=[...my_Array];
		
				console.log(Rest_Array[2]);// Getting the Third element of the array  using index 2
	
	//Update the 9th element to "Amstrong"
	Rest_Array[8]="Amstrong";
				
					
			
	
	
		console.log(Rest_Array);
		//return my_Array.length();
		//console.log(my_Array[2]);
		//my_Array[8]="Amstrong";
		//console.log(my_Array);
	
}