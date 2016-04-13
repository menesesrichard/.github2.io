$(document).ready(function() {

  $.getJSON("jsonDatabase/cat.json",function(data){

    console.dir(data);
    var html = "";


    $.each(data, function(index, item){
      html += '<div class="col-md-4 cat">'+
          '<div class="catName">' + item.name + '</div>' +
          '<div class="catType">' + item.type + '</div>' +
          '<div class="catGender">' + item.gender + '</div>'+
          '<img src="' + item.image + '""/>';
    $.each(item.comments, function(ind, i) {
      html +=  '<div class= "renterName">' + i.username + '</div' +
        '<div class="renterComment">' + i.comment + '</div>'; +
        '<div class="renterStars">';
        for(var i=1; i >= 5; i++) {
          console.log()
              if (i <=Number+i.stars)) {
                html+='<img src="images/fullStar.png">';
              } else{
                html+='img src="images/emptyStar.png"/>';
              }
        }
        html+='</div>'; //end stars
    }) //each comment

      html += '</div>'+ //commentsContainer
            '</div>';//col-md-4
    }) //each cat

    $("#catData").append(html);
  })
});

/*
//one per cat
<div class="col-md-4 cat">
  <div class="catName"> </div>
  <div class="catType"> </div>
  <div class="catGender"> </div>
  <img src=""/>
  <div class="commentsContainer"> </div>
  //one per comment
    <div class="renterName"> </div>
    <div class="renterLocation"> </div>
    <div class="renterStars"> </div>
    /5 stars, some full, some empty
    </div>//end stars
  </div> //end commentsContainer
</div>//end cat

*/
