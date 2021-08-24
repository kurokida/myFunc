// min以上、maxよりも小さい整数を返す(maxを含まない)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// 日時の文字列を返す
function getDateStr(){
    const now = new Date();
    // var year = now.getYear(); // 年
    const year = now.getFullYear();
    let month = now.getMonth() + 1; // 月
    let day = now.getDate(); // 日
    // var week = weeks[ now.getDay() ]; // 曜日
    let hour = now.getHours(); // 時
    let minute = now.getMinutes(); // 分
    let sec = now.getSeconds(); // 秒

    // if(year < 2000) { year += 1900; }

    // 数値が1桁の場合、頭に0を付けて2桁で表示する指定
    if(month < 10) { month = "0" + month; }
    if(day < 10) { day = "0" + day; }
    if(hour < 10) { hour = "0" + hour; }
    if(minute < 10) { minute = "0" + minute; }
    if(sec < 10) { sec = "0" + sec; }

    return year + '-' + month + '-' + day + '-' + hour + ':' + minute + ':' + sec;
}

// numをcount個含んだ配列を返す
function getSameNumArray(num, count){
    const res = []
    for (i = 0; i < count; i++) res.push(num)
    return res
}