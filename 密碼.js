function send(rep1, rep2, rep3) {
    let ans1 = "1010101010";
    let ans2 = "monkey";
    let ans3 = "orz";
    if(ans1 == rep1 && ans2 == rep2 && ans3 == rep3) {
        alert("好像有了甚麼動靜\n下面那是傳送門嗎？");
        document.write("<a href = './router/router.html'><div>我是傳送門</div></a>");
    }
    else {
        alert("密碼並不正確，再想想吧");
    }
}
