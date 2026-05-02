		function openImage(img) {
			var full = document.getElementById("full");
			full.src = img.src;
			full.style.display = "block";
		}

		function closeImage() {
			document.getElementById("full").style.display = "none";
		}