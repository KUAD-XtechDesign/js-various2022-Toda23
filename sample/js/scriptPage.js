

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
  
  