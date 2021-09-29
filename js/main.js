
$(document).ready(function () {
    if(window.location.href.indexOf("index")>-1){
  $(function () {
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200,

    });
  
  });
  }
  var post = [
    {
      title: "Titulo 1",
      date: "Publicado el dia "+moment().format("DD")+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
      content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more- or - less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Various versions have evolved over the years, sometimes by accident, sometimes on purpose(injected humour and the like).",
      ulr:"https://www.youtube.com/"
  
    }, { title: "Titulo 2 ",
    date: "Publicado el dia "+moment().format("DD")+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
    content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more- or - less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.Various versions have evolved over the years, sometimes by accident, sometimes on purpose(injected humour and the like)." ,
    ulr:"https://www.google.com/"
    }
  ];
  console.log(post);

  //Recorrer el json para enviar el index.HTML


  if(window.location.href.indexOf("index")>-1){
  post.forEach((item)=>{
   var post=`
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                      ${item.content}
                   </p>
                    <a href="${item.ulr}" class="button-more">Artículo completo</a>
                </article>
                `;
                //console.log(post);
                $("#posts").append(post);
  });
  }


  //selector de tema
  var theme=$("#theme");

 $("#to-red").click(function () {
   theme.attr("href","css/red.css");

 });
 $("#to-green").click(function () {
  theme.attr("href","css/green.css");
  
});
$("#to-blue").click(function () {
  theme.attr("href","css/blue.css");

});

//Login LocalStorage

/*$("login form").submit(function () {
  let  form_name=$("#form_name").val();
  alert(form_name);
  localStorage.setItem("form_name",form_name);
});*/


$("#login form").submit(function () {
  let form_name = $("#form_name").val();
  //alert(form_name);
  // console.log(form_name);
  localStorage.setItem("form_name",form_name);
  window.open("perfil.html");
  window.close("index.html")
});

var form_name = localStorage.getItem("form_name");

if (form_name != null && form_name != "undefined") {
  let about_parrafo = $("#about p");
  $("#about p").html("<b>Bienvenido " + form_name + "</b>");
  about_parrafo.append("<br><a href = '#' id ='logout'>Cerrar Sesión</a>");
  $("#login").hide();

  //Cerrar sesion

  $("#logout").click(function () {
    window.open("index.html")
    window.close("perfil.html")
    localStorage.clear();
    location.reload();
  });
}
});














