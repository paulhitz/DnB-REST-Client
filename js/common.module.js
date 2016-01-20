/**
 * Common utility functions not tied to any particular application.
 */
var common = angular.module('common', []);

common.service('utils', function() {
	var utils = this;

	/**
	 * Replace all occurrences of the target value with the replacement value.
	 */
	utils.replaceAll = function (input, target, replacement) {
		return input.split(target).join(replacement);
	};

	/**
	 * Copies the specified text to the clipboard.
	 */
	utils.copyToClipboard = function (text) {
		var copyFrom = $('<textarea/>');
		copyFrom.text(text);
		$('body').append(copyFrom);
		copyFrom.select();
		document.execCommand('copy', true);
		copyFrom.remove();
	};

	/**
	 * Stringify the input using standard spacing. Handles different input types
	 * such as Objects (JSON) and Strings (HTML/XML).
	 */
	utils.stringify = function (input) {
		var returnValue = input;
		if (angular.isObject(input)) {
			returnValue = utils.toJson(input, true);
		}
		return returnValue;
	};

	/**
	 * Hack to overcome issue in Angular v1.2.8 toJson function. Remove this if upgrading Angular.
	 *
	 * @see https://github.com/angular/angular.js/blob/v1.4.8/src/Angular.js#L1164
	 */
	utils.toJson = function (obj, pretty) {
		if (typeof obj === 'undefined') return undefined;
		if (!angular.isNumber(pretty)) {
			pretty = pretty ? 2 : null;
		}
		return JSON.stringify(obj, angular.toJsonReplacer, pretty);
	};
});

/**
 * A custom filter to convert a date to a format that Angular recognises.
 */
common.filter("asDate", function () {
	return function (input) {
		return new Date(input);
	};
});
