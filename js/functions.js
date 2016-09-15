$(function(){
    var$orders = $('#orders');

    $.ajax({
        type: 'GET',
        url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/acidmaw'
        success: function(orders){
            $.each(orders, function(i, order){
                $orders.append('<li>my order<</li>');
            });
        }
    });
});
        


