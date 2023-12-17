function mincost(arr)
{ 
//write your code here
// return the min cost
	let totacost=0;
  arr=arr.sort((a,b)=>b-a);
	while (arr.length>1){
		let currentcost=arr[arr.length-1]+arr[arr.length-2];
		total+=totacost;
		arr.pop();
		arr.pop();
		arr.push(currentcost);
		arr.sort((a,b)=>b-a);
	}
	// console.log(totacost);
	return totacost;
}

module.exports=mincost;
