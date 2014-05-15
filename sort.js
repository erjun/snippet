function /*array*/ quickSort(/*array*/arr, /*string*/member, /*bool*/ desc){

    if (arr.length <= 1) { return arr; }

    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];

    if(desc){
        for ( var i = 0; i < arr.length; i++){
	    var current = arr[i];
	    if (current[member] > pivot[member]) {
	     　　left.push(current);
	    } else {
	       　right.push(current);
	    }
        }
	    
    }else{
        for ( var i = 0; i < arr.length; i++){
	    var current = arr[i];
	    if (current[member] < pivot[member]) {
	     　　left.push(current);
	    } else {
	       　right.push(current);
	    }
        }
    }

    return quickSort(left, member).concat([pivot], quickSort(right, member));
}
