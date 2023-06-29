// 현재 년도를 yyyy형식으로 구하는 함수
function getYear() {
    var date = new Date();
    var year = date.getFullYear();
    return year;
}

const year = document.getElementById('year');
year.setAttribute('datetime', getYear());
year.textContent = getYear();