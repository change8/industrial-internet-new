/**
 * 依托JQuery扩展工具JS
 * 
 * Author Zhaochen
 */
jQuery.extend({
	/**
	 * 判断是否为有效变量
	 * 
	 * @param variable
	 */
	isValidVariable : function(variable) {
		/*
		 * if (typeof(variable) != 'undefined' && variable != undefined &&
		 * variable != 'undefined' && variable != null && variable != 'null' &&
		 * this.trim(variable) != '' && this.trim(variable) != 'undefined' &&
		 * this.trim(variable) != 'null') { return true; } else { return false; }
		 */

		if (variable !== undefined && variable != null && variable != 'null') {
			if (this.type(variable) === 'string') {
				if (this.trim(variable) != '') {
					return true;
				} else {
					return false;
				}
			}
			return true;
		} else {
			return false;
		}
	},

	/**
	 * 判断两个对象是否内容相同
	 * 
	 * @param o1
	 * @param o2
	 */
	isEquals : function(o1, o2) {

		if (this.type(o1) != this.type(o2)) {
			return false;
		}

		if (o1 == null || o2 == null) {
			return o1 == o2;
		}

		if (this.type(o1) == 'object' || this.type(o1) == 'array') {
			if (this.getObjectLength(o1) != this.getObjectLength(o2)) {
				return false;
			}
			for ( var key in o1) {
				if (typeof o2[key] == 'undefined') {
					return false;
				}
				if (!this.isEquals(o1[key], o2[key])) {
					return false;
				}
			}
			return true;
		} else {
			return o1.toString() == o2.toString();
		}

	},

	getObjectLength : function(o) {
		var length = 0;
		if (!$.type(o) == 'object') {
			return undefined;
		} else {
			for ( var key in o) {
				o[key];
				length++;
			}
		}
		return length;
	},

	/**
	 * 获取Date对象的yyyyMMddHHmm格式数据
	 * 
	 * @param date
	 * @returns
	 */
	getFullTime : function(date) {
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		var day = date.getDate();
		var hour = date.getHours();
		var mins = date.getMinutes();
		year = '' + year;
		month = month < 10 ? '0' + month : '' + month;
		day = day < 10 ? '0' + day : '' + day;
		hour = hour < 10 ? '0' + hour : '' + hour;
		mins = mins < 10 ? '0' + mins : '' + mins;
		var fullTime = year + month + day + hour + mins;
		return fullTime;
	},

	/**
	 * 解析yyyyMMddHHmm格式时间
	 * 
	 * @param str
	 * @returns {Date}
	 */
	parseFullTime : function(str) {
		// 按照十进制解析
		var year = parseInt(str.substring(0, 4), 10);
		var month = parseInt(str.substring(4, 6), 10) - 1;
		var day = parseInt(str.substring(6, 8), 10);
		var hour = parseInt(str.substring(8, 10), 10);
		var mins = parseInt(str.substring(10), 10);

		var date = new Date();
		date.setFullYear(year);
		date.setMonth(month);
		date.setDate(day);
		date.setHours(hour);
		date.setMinutes(mins);
		date.setSeconds(0);
		date.setMilliseconds(0);

		return date;
	},

	/**
	 * 时间加减
	 * 
	 * @param time
	 *            Javascript String
	 * @param addMillis
	 * @returns {String}
	 */
	addStringTime : function(time, addMillis) {
		var date = this.parseFullTime(time);
		var newDate = this.addDateTime(date, addMillis);
		var newStringTime = this.getFullTime(newDate);
		return newStringTime;
	},

	/**
	 * 时间加减
	 * 
	 * @param date
	 *            Javascript Date
	 * @param addMillis
	 * @returns {Date}
	 */
	addDateTime : function(date, addMillis) {
		var newDateMillis = date.getTime() + addMillis;
		var newDate = new Date();
		newDate.setTime(newDateMillis);
		return newDate;
	},

	/**
	 * 计算两个时间差, 返回毫秒值
	 * 
	 * @param time1
	 * @param time2
	 * @returns {Number}
	 */
	calculateStringTimeDiff : function(time1, time2) {
		var millis1 = this.parseFullTime(time1).getTime();
		var millis2 = this.parseFullTime(time2).getTime();
		return millis1 - millis2;
	},

	/**
	 * 传入yyyy-MM-dd返回Date类型
	 */
	parseTime : function(dependedVal) {
		// 根据日期字符串转换成日期
		var regEx = new RegExp("\\-", "gi");
		dependedVal = dependedVal.replace(regEx, "/");
		// parse 需要 2005/3/4 这种格式!
		var milliseconds = Date.parse(dependedVal);
		var dependedDate = new Date();
		dependedDate.setTime(milliseconds);

		return dependedDate;
	},

	/**
	 * 传入yyyyMMdd返回Date类型
	 */
	parseStrTime : function(str) {
		// 根据日期字符串转换成日期
		var year = str.substring(0, 4);
		var month = str.substring(4, 6);
		var day = str.substring(6, 8);

		var newStringTime = year+ '/' + month + '/' + day;
		
		var milliseconds = Date.parse(newStringTime);
		var dependedDate = new Date();
		dependedDate.setTime(milliseconds);
		
		return dependedDate;
	},

	/**
	 * 传入Date返回星期
	 */
	parseStrWeek : function(time) {
		if(!$.isValidVariable(time)) {
			return ;
		}
		
		var week = null;
		// 星期
		if (time.getDay() == 0) {
			week = "星期日";
		} else if (time.getDay() == 1) {
			week = "星期一";
		} else if (time.getDay() == 2) {
			week = "星期二";
		} else if (time.getDay() == 3) {
			week = "星期三";
		} else if (time.getDay() == 4) {
			week = "星期四";
		} else if (time.getDay() == 5) {
			week = "星期五";
		} else if (time.getDay() == 6) {
			week = "星期六";
		}
		
		return week;
	},
	
	parseStrMonth : function(strTime) {
		if(!$.isValidVariable(strTime)) {
			return ;
		}
		
		var strMonth = null;
		var time = $.parseTime(strTime);
		var month = time.getMonth() + 1;
		if(month == 1) {
			strMonth = "一月";
		}else if(month == 2) {
			strMonth = "二月";
		}else if(month == 3) {
			strMonth = "三月";
		}else if(month == 4) {
			strMonth = "四月";
		}else if(month == 5) {
			strMonth = "五月";
		}else if(month == 6) {
			strMonth = "六月";
		}else if(month == 7) {
			strMonth = "七月";
		}else if(month == 8) {
			strMonth = "八月";
		}else if(month == 9) {
			strMonth = "九月";
		}else if(month == 10) {
			strMonth = "十月";
		}else if(month == 11) {
			strMonth = "十一月";
		}else if(month == 12) {
			strMonth = "十二月";
		}
		return strMonth;
	}
});