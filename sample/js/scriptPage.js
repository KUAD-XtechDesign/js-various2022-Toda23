

  //ボタンの設定
  $('.button').on('click',function(){
    console.log($(this).attr('id'));
    $("#container").removeClass();
    $("#container").addClass($(this).attr('id'));
  })
  
  //以下パーティクル風
  let count = 12;//総数
  let angle = 50;//角度の制限
  
  //繰り返し
  for(let i=0;i<count;i++){
    let rand= Math.random()*angle - angle/2;//ランダムな角度(angleで制限)
    let obj=$('<div class="item"><div class="object"></div></div>');
    $("#container").append(obj);
   
    setTimeout(function(){
      obj.children('.object').addClass('anim');
      obj.css({'transform':'rotate('+rand+'deg)'});
    },i*100)
  }
  

  
    // マウスストーカー関連の要素（任意で変更してください）
    const mouseStalker = "#stkr";           // マウスストーカーになる要素を指定
    const mouseTarget = ".stkr-target";     // リンクなどアクションを付けたい要素を指定
    const mouseStalkerArea = window;        // マウスストーカーが機能する要素を指定

    // 処理で使う変数たち
    const stkrSize = parseInt($(mouseStalker).css("width").replace(/px/, ""));
    const stkrPosX = parseInt($(mouseStalker).css("left").replace(/px/, ""));
    const stkrPosY = parseInt($(mouseStalker).css("top").replace(/px/, ""));
    const cssPosAjust = stkrPosX + (stkrSize / 2);
    let scale = 1;

    // 追従用の処理
    $(mouseStalkerArea).hover(function(){
      $(mouseStalkerArea).mousemove(function(e){
        let x = e.clientX - cssPosAjust;
        let y = e.clientY - cssPosAjust;
        $(mouseStalker).css({
          "transform": "translate(" + x + "px," + y + "px) scale(" + scale + ")",
        });
      });
    });

    // リンクホバーの処理
    $(mouseTarget).hover(function(e){
      scale = 2;
      let x = e.clientX - cssPosAjust;
      let y = e.clientY - cssPosAjust;
      $(mouseStalker).css({
        "transform": "translate(" + x + "px," + y + "px) scale(" + scale + ")",
      });
    }, function(){
      scale = 1;
    });