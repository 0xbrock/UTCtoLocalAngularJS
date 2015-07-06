angular.module('intPonfilters', [])
	.filter('utctolocal', function () {

	var LeadingZero = function (val) {
		return (val < 10) ? "0" + val : val;
	},
	ToDateString = function (dateObj, dateFormat) {
		var curr_year = dateObj.getFullYear(),
			curr_month = LeadingZero(dateObj.getMonth() + 1),
			curr_date = LeadingZero(dateObj.getDate()),
			curr_hour = LeadingZero(dateObj.getHours()),
			curr_min = LeadingZero(dateObj.getMinutes()),
			curr_sec = LeadingZero(dateObj.getSeconds()),
			curr_ampm = "AM";
		if (curr_hour > 11) {
			curr_ampm = "PM";
			curr_hour = (curr_hour == 12) ? 12 : curr_hour - 12;
		}
    var timestamp = curr_year + "-" + curr_month + "-" + curr_date + " " + curr_hour + ":" + curr_min + ":" + curr_sec + " " + curr_ampm + " " + LocalTimeZone();
		return timestamp;
	},
  LocalTimeZone = function() {
    // From http://stackoverflow.com/questions/2897478/get-client-timezone-not-gmt-offset-amount-in-js
    var now = new Date().toString(),
        timezone = now.indexOf('(') > -1 ?
          //now.match(/\([^\)]+\)/)[0] :  // Uncomment this line to return the full time zone text
          now.match(/\([^\)]+\)/)[0].match(/[A-Z]/g).join('') :  // Uncomment this line to return the full time zone abbreviation
          now.match(/[A-Z]{3,4}/)[0];
    if (timezone == "GMT" && /(GMT\W*\d{4})/.test(now))
      timezone = RegExp.$1;
    return timezone;
  };

	return function (input) {
		var inputDate = new Date(input);
		var dateString = ToDateString(inputDate);
		return dateString;
	};
});
