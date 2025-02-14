const getSum = () => {
//Add your code here
    let p = document.querySelectorAll(".price");
	
	let a = 0
    p.forEach(price =>{
		a += parseInt(price.innerText);
	});

	let r = document.createElement("tr");

	let c = document.createElement("td");
	c.textContent = Total Price: Rs ${a};
	c.id = "ans";

	r.appendChild(c)
	document.querySelector("table").appendChild(r)
};
   