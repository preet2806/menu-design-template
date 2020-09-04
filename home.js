const fadeIn = () => {
    var fSize = 30;
    var opac = 0;
    var space = 3;
    var lmargin = 25;
    var gTop = 100;
    var bTop = 100;
    var id6 = setInterval(frame6, 85);
    var id5 = setInterval(frame5, 85);
    var id4 = setInterval(frame4, 85);
    var id3 = setInterval(frame3, 85);
    var id = setInterval(frame, 85);
    var id2 = setInterval(frame2, 85);

    function frame() {
        if (fSize == 45) {
            clearInterval(id);
        } else {
            fSize++;
            document.getElementById("titleText").style.fontSize = fSize + 'px';

        }
    }
    function frame2() {
        if (opac == 0.9) {
            clearInterval(id2);
        } else {
            opac = opac + 0.1;
            document.getElementById("paraText").style.backgroundColor = 'rgba(72,89, 100,' + opac +')';

        }
    }
    function frame3() {
        if (space == 15) {
            clearInterval(id3);
        } else {
            space++;
            document.getElementById("para").style.marginTop = space + '%';

        }
    }
    function frame4() {
        if (lmargin == 15) {
            clearInterval(id4);
        } else {
            lmargin=lmargin-1;
            var rmargin=lmargin+23;
            document.getElementById("circleImage").style.gridColumn = lmargin + '/' + rmargin;

        }
    }
    function frame5() {
        if (gTop == 92) {
            clearInterval(id5);
        } else {
            gTop=gTop-1;
            document.getElementById("greenDiv").style.gridRow = gTop + '/101';

        }
    }
    function frame6() {
        if (bTop == 87) {
            clearInterval(id6);
        } else {
            bTop=bTop-1;
            document.getElementById("brownImage").style.gridRow = bTop + '/101';

        }
    }
    document.getElementById("button1").style.zIndex=-1;
    document.getElementById("button2").style.zIndex=1;
}
const glideUp = () => {
    var cTop=17;
    var id1=setInterval(frame1,85)
    function frame1() {
        if (cTop == 0) {
            clearInterval(id1);
        } else {
            cTop--;
            var cBottom=cTop+42;
            document.getElementById("circleImage").style.gridRow = cTop + '/' +cBottom;

        }
    }
    var pTop=24;
    var id2=setInterval(frame2,85)
    function frame2() {
        if (pTop == 0) {
            clearInterval(id2);
        } else {
            pTop--;
            var pBottom=pTop+25;
            document.getElementById("paraText").style.gridRow = pTop + '/' +pBottom;

        }
    }
    var tOpac=1;
    var id3=setInterval(frame3,85)
    function frame3() {
        if (tOpac == 0) {
            clearInterval(id3);
        } else {
            tOpac=tOpac-0.1;
            document.getElementById("titleText").style.opacity = tOpac;
            document.getElementById("paraText").style.opacity = tOpac;
            document.getElementById("circleImage").style.opacity = tOpac;

        }
    }
    var tTop=14;
    var id4=setInterval(frame4,85)
    function frame4() {
        if (tTop == 0) {
            clearInterval(id4);
        } else {
            tTop--;
            var tBottom=tTop+21;
            document.getElementById("titleText").style.gridRow = tTop + '/' +tBottom;

        }
    }
    

    var bTop=87;
    var id7=setInterval(frame7,20)
    function frame7() {
        if (bTop == 21) {
            clearInterval(id7);
        } else {
            bTop--;
            var bBottom=bTop+50;
            var gTop=bTop+5;
            var gBottom=gTop+53;
            var wTop=bTop+3;
            var wBottom=bBottom-3;
            document.getElementById("brownImage").style.gridRow = bTop + '/' + bBottom;
            document.getElementById("greenDiv").style.gridRow = gTop + '/' + gBottom;
            document.getElementById("whiteText").style.gridRow = wTop +'/' + wBottom;
        }
    }
    var bLeft=34;
    var id8=setInterval(frame8,55)
    function frame8() {
        if (bLeft == 50) {
            clearInterval(id8);
        } else {
            bLeft++;
            document.getElementById("brownImage").style.gridColumn = bLeft + '/81';

        }
    }
    var gRight=81;
    var id9=setInterval(frame9,55)
    function frame9() {
        if (gRight == 84) {
            clearInterval(id9);
        } else {
            gRight++;
            document.getElementById("greenDiv").style.gridColumn ='23/' + gRight;

        }
    }
    var wLeft=34;
    var id10=setInterval(frame10,85)
    function frame10() {
        if (wLeft == 20) {
            clearInterval(id10);
        } else {
            wLeft--;
            document.getElementById("whiteText").style.gridColumn = wLeft + '/81';

        }
    }
    document.getElementById("button2").style.zIndex=-1;
    document.getElementById("button3").style.zIndex=1;

}
const glideUp2 = () => {
    var wBottom =68;
    var gBottom =79;
    var bBottom =71;

    var id1=setInterval(frame1,55)
    function frame1() {
        if (bBottom==50)
        {
            clearInterval(id1);
        }
        else{
            gBottom--;
            bBottom--;
            wBottom--;
            var gTop=gBottom-53;
            var bTop=bBottom-50;
            var wTop=wBottom-44;
            document.getElementById("brownImage").style.gridRow = bTop + '/' + bBottom;
            document.getElementById("greenDiv").style.gridRow = gTop + '/' + gBottom;
            document.getElementById("whiteText").style.gridRow = wTop +'/' + wBottom;

        }
    }
    var tOpac=1;
    var id3=setInterval(frame3,105)
    function frame3() {
        if (tOpac == 0) {
            clearInterval(id3);
        } else {
            tOpac=tOpac-0.1;
            document.getElementById("brownImage").style.opacity = tOpac;
            document.getElementById("greenDiv").style.opacity = tOpac;
            document.getElementById("whiteText").style.opacity = tOpac;

        }
    }
    var rTop =100;
    var id2=setInterval(frame2,20)
    function frame2() {
        if (rTop==12)
        {
            clearInterval(id2);
        }
        else{
            rTop--;
            var rBottom=rTop+53;
            var b2Top=rTop+9;
            var b2Bottom=b2Top+52;
            document.getElementById("brownImage2").style.gridRow = b2Top + '/' + b2Bottom;
            document.getElementById("redDiv").style.gridRow = rTop + '/' + rBottom;

        }
    }
    var w2Left = 37;
    var id5=setInterval(frame5,83)
    function frame5() {
        if (w2Left == 20) {
            clearInterval(id5);
        } else {
            w2Left--;
            var w2Right=w2Left+29;
            document.getElementById("whiteText2").style.gridColumn = w2Left + '/' + w2Right;

        }
    }
    var w2Top =100;
    var id7=setInterval(frame7,25)
    function frame7() {
        if (w2Top==30)
        {
            clearInterval(id7);
        }
        else{
            w2Top--;
            var w2Bottom=w2Top+48;
            document.getElementById("whiteText2").style.gridRow = w2Top +'/' + w2Bottom;

        }
    }
    var rLeft = 20;
    var id4=setInterval(frame4,449)
    function frame4() {
        if (rLeft == 17) {
            clearInterval(id4);
        } else {
            rLeft--;
            var rRight=rLeft+62;
            document.getElementById("redDiv").style.gridColumn = rLeft + '/' + rRight;

        }
    }
    
    var b2Left = 30;
    var b2Right = 71;
    var id6=setInterval(frame6,312)
    function frame6() {
        if (b2Left == 34) {
            clearInterval(id6);
        } else {
            b2Left++;
            b2Right=b2Right+3;
            document.getElementById("brownImage2").style.gridColumn = b2Left + '/' + b2Right;

        }
    }
    document.getElementById("button3").style.zIndex=-1;
    document.getElementById("button4").style.zIndex=1;
}
const glideDown = () => {
    document.getElementById("button4").style.zIndex=-1;
    location.reload();

}

