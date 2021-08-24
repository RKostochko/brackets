module.exports = function check(str, bracketsConfig) {
	// your solution
	if (str.length % 2 > 0) return false;
	let iter = str.length / 2;

	let newArr = [];
	bracketsConfig.forEach((el) => {
		newArr.push(el.join(''));
	})

	let strLength = str.length;

	while (iter > 0) {
		newArr.forEach((el) => {
			str = str.replace(el, '');
		});

		if (strLength === str.length) {
			break;
		} else {
			strLength = str.Length;
			iter--;
		}
	}
	return str.length === 0;
}
