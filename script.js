let billAmt = document.getElementById("billAmt");
let serQual = document.getElementById("serQual");
let numOfPeople = document.getElementById('peopleAmt');
const calculate = document.getElementById('calculate');
const totalTip = document.getElementById('totalTip');
const tip = document.getElementById('tip');
const each = document.getElementById('each');
const result = document.getElementById('result');

const newBill = document.getElementById('newEntry');
newBill.style.display = "none";

const reset = ()=> {
	billAmt.value = "";
	serQual.value = "";
	numOfPeople.value = "";
	//totalTip.innerHTML = "<sup>$</sup>0.00";
	newBill.style.display = "none";
	calculate.style.display = "block";
	billAmt.disabled = false;
	serQual.disabled = false;
	numOfPeople.disabled = false;

}



const calculateTip = ()=> {
	let inputBillAmt = billAmt.value;
	let selectSerQual = serQual.value;
	let inputNumOfPple = numOfPeople.value;

	if(inputBillAmt == "" || selectSerQual <= 0 || inputNumOfPple == "") {
		alert("please input values in all fields");
		return false;
	} 

	if(inputNumOfPple < 1) {
		alert("Negative values not allowed");
		return false;
	}else {
		let total = (inputBillAmt * selectSerQual) / inputNumOfPple;
		total = total.toFixed(2);
		totalTip.style.display = "block";
		tip.innerHTML = total;
		newBill.style.display = "inline-block";
		//calculate.style.display = "none";
		billAmt.disabled = true;
		serQual.disabled = true;
		numOfPeople.disabled = true;

	}

	
	calculate.style.display = "none";
}


//totalTip.style.display = "none";

newEntry.addEventListener('click', reset);
calculate.addEventListener('click', calculateTip);






