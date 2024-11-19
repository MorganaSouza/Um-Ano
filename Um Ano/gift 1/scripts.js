var love = setInterval(function(){
  var r_num = Math.floor(Math.random() * 40) + 1;
  var r_size = Math.floor(Math.random() * 65) + 10;
  var r_left = Math.floor(Math.random() * 100) + 1;
  var r_bg = Math.floor(Math.random() * 25) + 100;
  var r_time = Math.floor(Math.random() * 5) + 5;
  
  // Criando o primeiro coração
  var heart1 = $("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
  
  // Adicionando o coração ao DOM
  $('.bg_heart').append(heart1);
  
  // Criando o segundo coração
  var heart2 = $("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");
  
  // Adicionando o segundo coração ao DOM
  $('.bg_heart').append(heart2);
  
  // Removendo os corações após a animação terminar (r_time + 5 segundos)
  setTimeout(function() {
      heart1.remove();
      heart2.remove();
  }, (r_time + 5) * 1000); // Remover após a animação completar (convertendo para milissegundos)

}, 500);

var i = 0;
var txt1 = "Meu amor, já se passou um ano desde que nossas vidas se cruzaram, e parece que foi ontem que tudo começou. << Desde aquele primeiro dia, quando nossos olhares se encontraram, eu soube que algo especial estava acontecendo. <<< Em cada momento ao seu lado, aprendi mais sobre o que é amar verdadeiramente...!                                                                           > Você se tornou meu abrigo, meu sorriso, e minha razão de felicidade < Cada dia ao seu lado é um presente, e cada risada que compartilhamos faz o meu coração bater mais forte.  << Em todo esse tempo, fomos aprendendo, crescendo e nos fortalecendo juntos, e eu não poderia imaginar minha vida sem você. << Eu sou grata por cada lembrança, cada aventura, cada desafio que enfrentamos e, principalmente, por todo o amor que você me dá...!                                                     > Me sinto tão abençoada por ter você ao meu lado, porque você é muito mais do que eu poderia sonhar.                    << Agora, eu sei que não há ninguém mais perfeito para mim do que você...!                                                             > Eu te amo de uma maneira que as palavras não podem explicar < Você é minha vida, meu tudo, e eu só quero passar muitos e muitos anos ao seu lado, te amando cada vez mais...! |                  <<<< Obrigada por ser o meu maior presente. Te amo, hoje e sempre...! ";
var speed = 50;
  typeWriter();
  function typeWriter() {
    if (i < txt1.length) {        
       if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>'
      else if(txt1.charAt(i)=='>')
        document.getElementById("text1").innerHTML = ''
      else if(txt1.charAt(i)=='|')
        {
          $(".bg_heart").css("background-image","url('img/couple5.webp')");
        }
      else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
