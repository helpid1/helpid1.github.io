function showText (el) {
	if(el.previousElementSibling.clientHeight === 20) {
		el.previousElementSibling.style.height = "100%";
		el.innerHTML = "ShowLess";
	} else {
		el.previousElementSibling.style.height = "20px";
		el.innerHTML = "Read More";
	}
}