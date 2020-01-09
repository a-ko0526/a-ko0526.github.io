	function longer(obj) {
	    var id_name = obj.getAttribute("id");
	    var name = obj.getAttribute("class");
	    var text_id = document.getElementById("text_container");

	    for (var i = 1; i <= 7; i++) {
	        if (id_name == "box" + i) {
	            document.getElementById(id_name).className = "ck";

	        } else if (name == "ck") {
	            document.getElementById(id_name).className = "";

	        }
	    }
	}

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

	function appearance() {
	    document.getElementById("result").className = "bl";
	}

	function result() {
	    setTimeout("appearance()", 500);
	    for (var j = 1; j <= 6; j++) {
	        document.getElementById("box" + j).className = "bye";
	    }
	    document.getElementById("button1").className = "bye";
	    document.getElementById("subject").className = "bye";
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
	    var $genre = $(this).find('genre').text();

	    /////////////////////////////////////////////

	    var target = $("#genre1").text();
	    var target2 = $("#ed2").text();
	    console.log(target);

	    //if ($genre == target && $title == target2) {
	    //HTMLを生成
	    $(
	        '<div id="recomend-box">' +
	        '<img src="' + $img + '" >' + '<p id="title">' + $title + '</p>' +
	        '<p>' + '<span id="space">' +
	        $author + '</span>' + $price + '</p>' + '<p>' + $genre + '</p>' + '</div>').appendTo("#result_container_mix");
	    /*} else if ($title == target2) {
	        $(
	            '<div id="recomend-box">' +
	            '<img src="' + $img + '" >' + '<p id="title">' + $title + '</p>' +
	            '<p>' + '<span id="space">' +
	            $author + '</span>' + $price + '</p>' + '<p>' + $genre + '</p>' + '</div>').appendTo("#result_container1");
	    } else if ($genre == target) {
	        $(
	            '<div id="recomend-box">' +
	            '<img src="' + $img + '" >' + '<p id="title">' + $title + '</p>' +
	            '<p>' + '<span id="space">' +
	            $author + '</span>' + $price + '</p>' + '<p>' + $genre + '</p>' + '</div>').appendTo("#result_container2");
	    }
*/

	    document.getElementById("result_container1").style.display = "inline-block";
	    document.getElementById("result_container2").style.display = "inline-block";
	    document.getElementById("result_container_mix").style.display = "inline-block";
	}

	//関数実行
	$(function () {
	    xmlLoad();
	});
	/*
	$(function () {
	    $('#box1').insertAfter('#box2');
	});
	*/
