var key = "kwQremZ5tamshfXt6mqgd3xhcT82p1ab1t0jsnqs9fgryhJOde"

//Search button function
function searchButton(searchValue) {
    var name = searchValue
    var fields = "*"
    var url = "https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/" + name + '/';

    //var card_ID = ""
    //var name = ""
    //var cardSet = ""
    //var type = ""
    //var rarity = ""
    $.ajax({
        url: url,
        beforeSend: function(xhrObj) {
            // Request headers
            xhrObj.setRequestHeader("X-Mashape-Key", "kwQremZ5tamshfXt6mqgd3xhcT82p1ab1t0jsnqs9fgryhJOde");
        },
        type: "GET",
        success: function(result) {
            //result is json format
            $("#cardTable tbody").empty();
            for (var i = 0; i < 20; i++) {
                // $('#cardtable tbody').append(result.card_ID);
                console.log(result[i].name)
                $('#cardTable tbody').append('<tr> <td>' + result[i].name + '</td> <td>' + result[i].cardId + '</td> <td>' + result[i].cardSet + '</td> <td>' + result[i].type + '</td> <td>' + result[i].rarity + '</td>  </tr>');
            }
            $("#cardTable").trigger("update");
            $("#myTable").tablesorter({ sortList: [
                    [0, 0],
                    [1, 0]
                ] });
        }
    });
}