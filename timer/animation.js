var form = 0;
var i = 0;

function foo(obj) {
    // var test = document.getElementById("check");
    var test = $("#" + obj.id);
    console.log(test);
    //var test = obj.getAttribute("id");
    var parent = test.parent();
    console.log(parent);
    // console.log(tset.parentNode);

    if (obj.checked) {


        //parent.style.color = "red";
        $(parent).css('color', '#0367A6');
        $(parent).css("font-weight", "bold");
        $("#button1").prop("disabled", false);
        $('#button1').css('background-color', '#591E23');
    } else {

        //var id_name = obj.getAttribute("id");
        $("#button1").prop("disabled", false);
        $(parent).css("font-weight", "");
        $(parent).css('color', 'Black');
    }
    var count = $("body :checkbox:checked").length
    if (count == 0) {
        $('#button1').css('background-color', '#C4C4C4');
        $("#button1").prop("disabled", true);
    }
}

function reduce(obj) {

    for (var j = 1; j <= 9; j++) {
        document.getElementById("box" + j).className = "min";
        if (j == 1 || j == 6) {
            document.getElementById("box" + j).className = "ck";
        }
    }
    setTimeout("color_change()", 1000);
}


function appearance() {
    document.getElementById("result").className = "bl";
    var robj = document.getElementById("result_container")
    robj.innerHTML = "<h3>あなたの好みは" + "「" + "」" + "ですね！" + "<br>" + "これらの本がおすすめです</h3>\n";
}


function result() {
    setTimeout("appearance()", 500);
    for (var j = 1; j <= 6; j++) {
        document.getElementById("box" + j).className = "bye";
    }
    document.getElementById("button1").className = "bye";
    document.getElementById("subject").className = "bye";
}

//c#で判定した停留座標をうけとる
//c#からもらった座標値を整数値に変換
//getElement関数の呼び出し
function position(x, y) {
    if (s_status == "record") {
        //parseInt(string,radix) striongを解析し、整数またはNaN(変換できない場合)を返す
        //example:radix=10 10進数
        var cx = parseInt(x);
        var cy = parseInt(y);

        getHtmlElement(cx, cy);
    }
}




function getHtmlElement(x, y) {
    var dom = document.elementFromPoint(x, y); //文書の左上を基点として指定された座標上にある要素を返します 
    var currentElem = dom;
    var elemClass;
    var currentElemTag;

    console(dom);

    if (currentElem != null) //もし見ている座標上に要素があれば
    {
        //tagName 要素の名前を返す　exa:DIV 
        currentElemTag = dom.tagName; // HTML要素取得
    }

    var flag = 1;

    // <body> までに class属性値が'eye_～'のものがないか調べる 
    while (flag) { //ループを通過するごとに、その前に評価される式。この条件が true と評価された場合は以下の処理を続ける
        if (currentElem != null) {
            elemClass = currentElem.className; // class属性を取得　座標上のclass名
            elemId = currentElem.id; // id属性を取得　
        }

        if (currentElemTag != null) { //要素がnullじゃなかったら
            if (currentElemTag.indexOf("BODY") != -1) { //BODYを検索しみつかった場合whileを抜ける
                break;
            }

            if (elemClass.indexOf('eye_') != -1) { //eye_を検索しみつかった場合以下を実行
                switch (elemClass) { //座標上の要素のクラス名を評価して、eye_foodと一致するなら、food(グローバル変数、初期値０)を増やす、そしてbreak。これを4パターン
                    case 'eye_from':
                        from++;
                        flag = 0;
                        break;
                        /*
                                            case 'eye_foodcourt':
                                                foodcourt++;
                                                flag = 0;
                                                break;

                                            case 'eye_fashion':
                                                knickknack++;
                                                flag = 0;
                                                break;

                                            case 'eye_knickknack':
                                                fashion++;
                                                flag = 0;
                                                break;
                        */
                    default: //一致するものがなかった場合
                        break;
                }

            } else { //eye_を検索し見つからなかった場合
                currentElem = currentElem.parentNode; //親要素を代入
                currentElemTag = currentElem.tagName; //親要素の名前を代入
            }
        }
    }

    i++;
    record_position(x, y, i);
    record_class(elemClass);

    if (i => 1) {
        start(dom);
    }

}









function start(obj) {
    var id_name = obj.getAttribute("id");
    var num = id_name.replace(/box/g, "");
    var name = obj.getAttribute("class");
    var text_id = document.getElementById("text_container");

    //伸びるゲージ　
    document.getElementById("time_bar" + num).className = "fi";

    for (var i = 1; i <= 7; i++) {
        if (id_name == "box" + i) {
            document.getElementById(id_name).className = "ck";

        } else if (name == "ck") {
            document.getElementById(id_name).className = "";

        }
    }

}

///////xml対応↓//////////////////////////////////////////////////////////////////////
// -------------------------------------------------
// 初期設定（いったんHTMLを空にする）
// -------------------------------------------------
$(function () {
    for (var i = 1; i < 10; i++) {
        $("#result_container" + i).html("");
    }
    $("#result_container_mix").html("");
});

// -------------------------------------------------
// XML読み込み
// -------------------------------------------------

function xmlLoad() {
    $.ajax({
        url: 'text.xml',
        type: 'get',
        dataType: 'xml',
        timeout: 1000,
        success: parse_xml
    });
    // console.log("d");
}

// -------------------------------------------------
// XMLデータを取得
// -------------------------------------------------

function parse_xml(xml, status) {
    if (status != 'success') return;
    $(xml).find('item').each(disp);

}


// -------------------------------------------------
// HTML生成関数
// -------------------------------------------------



function disp() {

    //各要素を変数に格納
    var $title = $(this).find('title').text();
    var $author = $(this).find('author').text();
    var $img = $(this).find('img').text();
    var $price = $(this).find('price').text();
    var $summary = $(this).find('summary').text();
    var $publisher = $(this).find('publisher').text();
    /////////////////////////////////////////////

    var target = $("#color1").text();



    //if ($genre == target && $price == '￥2475') {

    //HTMLを生成
    $(
        '<div id="recomend-box">' +
        '<img src="' + 'book_img/' + $img + '" >' + '<p id="title">' + $title + '</p>' +
        '<p>' + '<span id="space">' +
        $author + '</span>' + '<span id="space">' + $price + '</span>' + $publisher + '</p>' + '<div id="text-box">' + '<p>' + $summary +
        '</p>' + '</div>' + '</div>').appendTo("#result_container1");
    /* } else if ($price == '￥247') {
         $(
             '<div id="recomend-box">' +
             '<img src="' + $img + '" >' + '<p id="title">' + $title + '</p>' +
             '<p>' + '<span id="space">' +
             $author + '</span>' + $price + '</p>' + '<p>' + $genre + '</p>' + '</div>').appendTo("#result_container1");
     }*/
}


//関数実行
$(function () {
    xmlLoad();
});
