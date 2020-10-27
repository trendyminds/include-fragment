(function () {
	/**
	 * Ran if the XHR request resulted in a non-200 status code
	 * @param {HTMLElement} $el The element to insert the error into
	 */
	const handleLoadError = ($el) => {
		if ($el.dataset.error) {
			$el.parentNode.innerHTML = $el.dataset.error;
		}
	};

	/**
	 * Ran if the XHR request resulted in a 200 status code
	 * @param {string} html The HTML string to insert into the DOM element
	 * @param {HTMLElement} $el The element to insert the HTML into
	 */
	const insertData = (html, $el) => {
		$el.parentNode.innerHTML = html;
	};

	/**
	 * Runs an XHR request to replace the DOM element
	 * @param {string} url The URL to request
	 * @param {HTMLElement} $el The element to insert our HTML or error into
	 */
	const getData = (url, $el) => {
		const xhr = new XMLHttpRequest();

		xhr.onload = function () {
			if (xhr.status === 200) {
				insertData(xhr.response, $el);
				return;
			}

			handleLoadError($el);
			return;
		};

		xhr.open("GET", url);
		xhr.send();
	};

	/**
	 * Searches the DOM for [data-include-fragment] elements and runs the XHR requests
	 */
	const parseElements = () => {
		document.querySelectorAll("[data-include-fragment]").forEach(($el) => {
			if ($el.dataset.src) {
				getData($el.dataset.src, $el);
			}
		});
	};

	parseElements();
})();
