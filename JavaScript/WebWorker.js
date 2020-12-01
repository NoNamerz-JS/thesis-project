function mapper(commits) {
	const date = commits.map(element => {
		return element.Date.slice(0, 10);
	});
	const rate = commits.map(element => {
		return element.Cur_OfficialRate
	});
	const cur_id = commits.map(element => {
		return element.Cur_ID
	});
	return { date, rate, cur_id };
}
onmessage = function(e) {
	fetch(e.data)
	.then(response => response.json())
	.then(mapper)
	.then(postMessage);
}
