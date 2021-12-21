//Bài Tập 1 Tìm số chẵn/lẻ nhỏ hơn 100
document.getElementById("btnxemketQua").onclick = function () {
    tinhchanle();
    tinhchanle2();
}
function tinhchanle() {
    var soChan = "";
    var soLe = "";
    for (var i = 0; i < 100; i++) {
        if (i % 2 == 0) {
            soChan += " " + i;
        } else {
            soLe += " " + i;
        }

    }
    document.getElementById("txtxemketQua").innerHTML = "Số chẵn là:" + soChan + "</br>" + " Số lẻ là :" + soLe;
    document.getElementById("txtxemketQua").style.display = "block";
}

function tinhchanle2() {

    var soChan2 = "";
    var soLe2 = "";
    count = 0;
    while (count < 100) {
        if (count % 2 == 0) {
            soChan2 += " " + count;
        } else {
            soLe2 += " " + count;
        }
        count++;
    }
    document.getElementById("txtxemketQua").innerHTML = "Số chẵn là:" + soChan2 + "</br>" + " Số lẻ là :" + soLe2;
    document.getElementById("txtxemketQua").style.display = "block";
}

// Bài Tập 2 : Đếm số chia hết cho 3

document.getElementById("btndemSo").onclick = function () {
    fdemSo();
    wdemSo();
}

function fdemSo() {
    var count2 = 0;
    for (i = 0; i < 1000; i++) {
        if (i % 3 == 0) {
            count2++;
        }
    }
    document.getElementById("txtdemSo").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count2 + " số";
    document.getElementById("txtdemSo").style.display = "block";


}

function wdemSo() {
    var h = 0;
    var count2 = 0;
    while (h < 1000) {
        if (h % 3 == 0) {
            count2++;
        }
        h++;
    }
    document.getElementById("txtdemSo").innerHTML = "Số chia hết cho 3 nhỏ hơn 1000: " + count2 + " số";
    document.getElementById("txtdemSo").style.display = "block";
}
// bài 3 : Tìm số nguyên dương nhỏ nhất
document.getElementById("timsoNguyen").onclick = function () {
    fsoNguyen();
    wsoNguyen();
}
function fsoNguyen() {
    var n = 0;

    for (var sum = 0; sum < 10000;) {
        n++;
        sum += n;
    }
    document.getElementById("txtsonguyen").innerHTML = "Số nguyên dương nhỏ nhất: " + n;
    document.getElementById("txtsonguyen").style.display = "block";
}

function wsoNguyen() {
    var i = 0;
    var sum = 0;
    while (sum < 10000) {
        i++;
        sum = sum + i;
    }
    document.getElementById("txtsonguyen").innerHTML = "Số nguyên dương nhỏ nhất: " + i;
    document.getElementById("txtsonguyen").style.display = "block";
}
// Bài 4  Tính tổng
document.getElementById("btntinhtong").onclick = function () {
    tinhTong();
}

function tinhTong() {
    for (
        var x = Number(document.getElementById("inpsoX").value),
        n = Number(document.getElementById("inpsoN").value),
        s = 0,
        i = 1;
        i <= n;
        i++
    ) {
        s = s + Math.pow(x, i);
    }
    document.getElementById("txttinhTong").innerHTML = "Tổng :" + s;
    document.getElementById("txttinhTong").style.display = "block";
}

// Bài 5 : Tính giai thừa
document.getElementById("btnTinhN").onclick = function(){
    TinhN() ;
}
    function TinhN(){
        var n = document.getElementById("inpNhapN").value ;
        for (var s = 1 , i = 1 ; i <= n; i++)
        s *= i;
        document.getElementById("txtTinhN").innerHTML = " Giai thừa = " + s;
        document.getElementById("txtTinhN").style.display = "block";
    }

//Bài 6 Tạo thẻ div chẵn lẻ

document.getElementById("btnTaoTheDiv").onclick = function () {
    for (var x = "", n = 1; n <= 10; n++) {
        if (n % 2 == 0) {
           x += "<div class='bg-danger text-white p-3'>Div Chẵn</div>";
       } else {
           x += "<div class='bg-primary text-white p-3'>Div Lẻ</div>";
       }
    }
    document.getElementById("txtTaoTheDiv").innerHTML = x;
    document.getElementById("txtTaoTheDiv").style.display = "block";
}
//Bài 7 : In số nguyên tố
document.getElementById("btnInsoN").onclick = function(){
    InsoN() ;
}
function InsoN(){
    var e = document.getElementById("inpInsoN").value;
    for (var t = "", n = 1; n <= e; n++) {
      if (checkSNT(n)) {
        t += " " + n;
      }
    }
    document.getElementById("txtInsoN").innerHTML = t;
    document.getElementById("txtInsoN").style.display = "block";
  }
  
  function checkSNT(e) {
    if (e < 2) return false;
    for (var t = 2; t <= Math.sqrt(e); t++) {
      if (e % t == 0) {
        return false;
      }
    }
    return true;
  }