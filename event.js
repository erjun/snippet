	function ready(fn) {
		if (document.addEventListener) {      //标准浏览器  
			document.addEventListener('DOMContentLoaded', function handle() {
				//注销事件，避免反复触发  
				document.removeEventListener('DOMContentLoaded', handle, false);
				fn();
			}, false);
		} else if (document.attachEvent) {     //IE浏览器  
			document.attachEvent('onreadystatechange', function handle() {
				if (document.readyState == 'complete') {
					document.detachEvent('onreadystatechange', handle);
					fn();
				}
			});
		}
	}
