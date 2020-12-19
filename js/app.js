//the document ready will be trigerred when all component in the web page has been displayed
$(document).ready(function () {
    //display beranda in the first time
    $.ajax({
        url: "beranda.html",
        success: (result) => {
            $("#div1").html(result);
        },
        error: (xhr, status, err) => {
            $("#div1").html("<h2>"+xhr.status+" "+err+"</h2>");
        }
    });
    
    //the a click will be trigerred if an a-tagged is clicked
    $("a").click(function (e) {
        var data = $(e.currentTarget).data("page");
        //Reding data from the server directly and return the result in a call back function
        $.ajax({url: data, success: function(result){
            $("#div1").html(result);
        },error: function(xhr,status,err){
            $("#div1").html("<h2>" + xhr.status + ":" + err + "<h2>");
        }
    });
    });

    //if submit button is clicked
    $("submit").click
});