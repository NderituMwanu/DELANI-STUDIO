
            $("#submit").click(function () {
                var name = $("#name").val();
                var email = $("#email").val();
                var info = $("#message").val();
                $("#name").text(name);
                $("#email").text(email);
                $("#message").text(message);
                alert("Thanks " + name + " for your feedback.");
            };