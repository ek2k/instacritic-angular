

function getTVShow (){
    var show = '';
    $.ajax({
      url: 'http://api.tvmaze.com/singlesearch/shows?q=Gilmore&Girls',
      method: 'GET'
    }).done(function(data) {
        $('#showTitle').append(data.name);
        show = data.name;
        return show;
  });
}

$(function(){
    $('#searchForReview').click(function(){
        getTVShow();
    });
});
