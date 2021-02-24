window.onscroll = function() {stickyFunction()};
		
function stickyFunction() {
	var header = document.getElementById("navMobile");
	
	var sticky = header.offsetTop;
	
	if (screen.width < 480){
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	}
}

function copyToClipboard() {
	var copyText = document.getElementById("myEmail");

	copyText.select();
	copyText.setSelectionRange(0, 99999);

	document.execCommand("copy");

	var successed = document.getElementById("copyBtn");
	successed.innerHTML = "Copied";
	successed.classList.add("successed");
}

$(".contact").click(function(){
	$(".information").addClass("show");
});

$(".close").click(function(){
	$(".information").removeClass("show");
});