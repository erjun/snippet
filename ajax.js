function getJSON(url) {
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement("script");
		script.async = true;
		script.src = url;

		script.onload = script.onreadystatechange = function (_, isAbort) {
			if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
				script.onload = script.onreadystatechange = null;

				if (script.parentNode) {
					script.parentNode.removeChild(script);
				}

				script = null;
			}
		}

		head.appendChild(script);
	}
