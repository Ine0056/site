var day = new Date(document.lastModified);
var y = day.getFullYear();			// 年を取得
var m = day.getMonth() + 1;			// 月を取得
var d = day.getDate();				// 日にちを取得
document.write("最終更新日：" + y + "年" + m + "月" + d + "日");
