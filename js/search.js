$(function () {

    $('#search').click(function(){
        $('#searchresult').empty();
        var keyword = $('#keyword').val();
        var type = $('#type').val();
        var radius = $('#radius').val();
        PlaceSearch.Search(keyword, type, radius).then(function(data){
                var num = 0;
            for(var i=0;i<data.length;i++){
                    num ++;
                   if(data[i].rating == NaN){
                    data[i].rating =0;
                   }
                   
                var row = 
                '<a href="detail.html?placeid=' + data[i].id + '">' + 
                '<div class="well search-result">'+
            	'<div class="row">'+
            		
                		'<div class="col-xs-6 col-sm-3 col-md-3 col-lg-2">'+
	                    	'<img src=' + data[i].photo + ' class="thumbnail" >'+
                		'</div>'+
                        '<div class="col-xs-6 col-sm-9 col-md-9 col-lg-10 title">'+
                        "Lacation"+
                            '<h3>' + data[i].name + '</h3>'+
                            "Rating"+
                            
                            
                            '<p>'+ data[i].rating + '</p>'+
                            '<center><span class="rating-static rating-'+ data[i].rating*10+'"></span></center>';
                            
                           
                		'</div>'+
                   
            	'</div>'+
            '</div>'+
                
                '</a>';
                
                $('#searchresult').append(row);
            }
        });
    });    
});
