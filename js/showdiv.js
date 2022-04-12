
		    function showDiv(str) {
		        var divs = []; 
		        for(var i = 0;i < 6;i++) {
		            divs[i] = document.getElementById("div" + i);
		            divs[i].style.display = "none";
		        }
		        document.getElementById(str).style.display = "block";               
		    }
