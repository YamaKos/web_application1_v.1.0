// ハンバーガーメニューの表示・非表示
document.getElementById('hamburger').onclick = function () {
    document.getElementById('sidebar').style.width = "250px";
};

document.getElementById('closebtn').onclick = function () {
    document.getElementById('sidebar').style.width = "0";
};

// PDFのページを切り替える
function goToPage(pageNumber) {
    document.getElementById('pdf-viewer').setAttribute('src', 'trip-guide.pdf#page=' + pageNumber);
    document.getElementById('sidebar').style.width = "0"; // サイドバーを閉じる
}
