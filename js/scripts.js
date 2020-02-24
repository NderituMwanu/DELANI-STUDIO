$("#submit").click(function(){
        var name = $("#Name").val();
        var email = $("#Email").val();
        var info = $("#Message").val();
        $(".Name").text(name);
        $(".Email").text(email);
        $(".Message").text(info);
        $("#output").show();
        alert("Thank you " + name + " for your feedback. ");
        // alert("Thank you " + name + " for your feedback. " +email);