const calculateTip = ()=> {

	let billAmt = document.getElementById("billAmt").value;
	let serviceQuality = document.getElementById("serviceQuality").value;
	let numOfPeople = document.getElementById("peopleAmt").value;
	const totalTip = document.getElementById("totalTip");
	const tip = document.getElementById("tip");
	const each = document.getElementById("each");
	const result = document.getElementById("result");
	const calculate = document.getElementById("calculate")

	if(billAmt == "" || serviceQuality <= 0 || numOfPeople == "") {
		alert("please input values in all fields");
		return;
	};


	if(numOfPeople < 1) {
		each.style.color = "red";
		each.innerHTML = `${numOfPeople} is not allowed!!`;
		result.style.display = "none";
	}else {
		let total = (billAmt * serviceQuality) / numOfPeople;
		total = total.toFixed(2);
		totalTip.style.display = "block";
		tip.innerHTML = total;
	}
}

totalTip.style.display = "none";

calculate.addEventListener("click", calculateTip);



