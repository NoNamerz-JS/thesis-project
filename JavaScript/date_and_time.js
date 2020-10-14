function date_now() {
    const utc = dayjs().format('DD MMM YYYY, ')
    return utc;
}
function startTime() {
		let tm = new Date();
		let h = tm.getHours();
		let m = tm.getMinutes();
		let s = tm.getSeconds();
		m = checkTime(m);
		s = checkTime(s);
		document.querySelector('.date_and_time').innerHTML = date_now() + h + ":" + m + ":" + s;
		t = setTimeout('startTime()', 500);
}
function checkTime(i) {
		if ( i < 10) {
				i = "0" + i;
			}
		return i;
}
