const cl = console.log;

const tabList = [...document.querySelectorAll(".tabHeading li")];
// const allTabContent = [...document.querySelectorAll("tabcontent")];


const ontabClickhandler = (e) => {
	const activeContent  = document.querySelector(".tabcontent.active");
	let getId = e.target.getAttribute("data-kj");
	cl(getId);
	// allTabContent.forEach(tabCon => tabCon.classList.remove("active"));
	activeContent.classList.remove("active");
	let card = document.getElementById(getId);
	card.classList.add("active");
	tabList.forEach(li => li.classList.remove("active"));
	e.target.classList.add("active");
}




tabList.forEach(li => {
	
	li.addEventListener("click", ontabClickhandler);
})