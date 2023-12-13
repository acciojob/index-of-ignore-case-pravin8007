function indexOfIgnoreCase(s1, s2) {
  // write your code here
	 if (s1.length === 0 || s2.length === 0) {
		    return -1;
	 }
  const lowerStr = s1.toLowerCase();
  const lowerSubStr = s2.toLowerCase();
  
   const index = lowerStr.indexOf(lowerSubStr);
	return index ;
	
}

// // Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

