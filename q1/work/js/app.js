$(document).ready(function () {
  $("#q1").css("color", "#fff"); // 読み込み時に文字色を白に変更
});

$(document).ready(function () {
  // ボタンがクリックされたときの処理
  $("#q2").click(function () {
    $(this).toggleClass("clicked-q2"); // clickedクラスの付け外しで色を変更
  });
});

$(document).ready(function () {
  // クリックしたときの処理
  $("#q3").click(function () {
    // フェードアウトさせる（3秒間）
    $(this).fadeOut(3000);
  });
});

$(document).ready(function () {
  // ボタンがクリックされたときの処理
  $("#q4").click(function () {
    // クリック時にクラスを付け外ししてサイズを変更する
    $(this).toggleClass("clicked-q4");
  });
});

$(document).ready(function () {
  // ボタンがクリックされたときの処理
  $("#q5").click(function () {
    // 挿入される要素のHTMLコード
    var insertedHtml = '<div class="inserted-element">Inserted Element</div>';
    // ボタンの直後に要素を挿入する
    $("#q5").append(insertedHtml);
  });
});

$(document).ready(function () {
  // ボタンがクリックされたときの処理
  $("#q6").click(function () {
    // 移動させるアニメーション
    $(this).animate(
      {
        marginTop: "100px", // 上方向に100px移動
        marginLeft: "100px", // 左方向に100px移動
      },
      2000
    ); // アニメーションの時間（ミリ秒単位）
  });
});

$(document).ready(function () {
  // ボタンがクリックされたときの処理
  $("#q7").click(function () {
    // IDを持つノードをコンソールに表示
    var idNode = $("#q7");
    console.log(idNode);
  });
});

$(document).ready(function () {
  // マウスオーバーとマウスアウトのイベントを設定
  $("#q8").hover(
    function () {
      // マウスオーバー時の処理（サイズを変更）
      $(this).animate({ width: "300px", height: "150px" }, 300);
    },
    function () {
      // マウスアウト時の処理（元のサイズに戻す）
      $(this).animate({ width: "200px", height: "70px" }, 300);
    }
  );
});

$(document).ready(function () {
  // リストの各項目がクリックされたときの処理
  $("#q9 li").click(function () {
    // クリックされたリストの項目のインデックス番号を取得
    var index = $(this).index();
    // アラートでインデックス番号を表示
    alert(+index);
  });
});

$(document).ready(function () {
  // ボタン1がクリックされたときの処理
  $("#q10 li").click(function () {
    // ボタン2のサイズを大きくする
    $("#q11 li").css("font-size", "24px").css("padding", "15px 25px");
  });
});
