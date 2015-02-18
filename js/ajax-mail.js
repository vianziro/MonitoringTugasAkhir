// Content Contact Form
$(function () {
    $('.error').hide();
    $('.text-input').css({backgroundColor:"#FFFFFF"});
    $('.text-input').focus(function () {
        $(this).css({backgroundColor:"#FCFCFC"});
    });
    $('.text-input').blur(function () {
        $(this).css({backgroundColor:"#FFFFFF"});
    });

    $(".form-button").click(function () {
        // validate and process form
        // first hide any error messages
        $('.error').hide();
        var ida = $("input#ida").val();
        var name = $("input#name").val();
        if (name == "") {
            $("label#name_error").show();
            $("input#name").focus();
            return false;
        }
        var email = $("input#email").val();
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        console.log(filter.test(email));
        if (!filter.test(email)) {
            $("label#email_error").show();
            $("input#email").focus();
            return false;
        }
        var message = $("#input-message").val();
        if (message == "") {
            $("label#message_error").show();
            $("#input-message").focus();
            return false;
        }
        var captcha = $("input#captcha").val();
        if (captcha == "") {
            $("label#captcha_error").show();
            $("input#captcha").focus();
            return false;
        }

        
        var dataString = 'id=' + ida + '&nama=' + name + '&email=' + email + '&pesan=' + message + '&captcha=' + captcha;
        var mainkomentar = "komentar.php?arid=" + ida;
        //alert (dataString);return false;


        $.ajax({
            type:"POST",
            url:"simpankomen.php",
            dataType:'json',
            data:dataString,
            success:function (response) {
                $('#af-form').append('<div class="modal hide" id="frmModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-body"><p><strong class="color2">Success..</strong> thanks for your comment..!</p></div><div class="modal-footer"><a href="#" class="btn" data-dismiss="modal">Close</a></div></div>');
                $('#frmModal').modal();
                $('#af-form')[0].reset();
                $('#komen').load(mainkomentar);
            }
            
        });
        
        return false;
    });
});

// Footer Contact Form
$(function () {

    $('.ferror').hide();

    $(".footer-button").click(function () {
        // validate and process form
        // first hide any error messages
        $('.ferror').hide();

        var name = $("#inputName").val();
        if (name == "") {
            $("label#fname_error").show();
            $("#inputName").focus();
            return false;
        }
        var email = $("#inputEmail").val();
        var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
        console.log(filter.test(email));
        if (!filter.test(email)) {
            $("label#femail_error").show();
            $("#inputEmail").focus();
            return false;
        }
        var message = $("#inputMessage").val();
        if (message == "") {
            $("label#fmessage_error").show();
            $("#inputMessage").focus();
            return false;
        }

        var dataString = 'name=' + name + '&email=' + email + '&message=' + message;
        //alert (dataString);return false;

        $.ajax({
            type:"POST",
            url:"process.php",
            data:dataString,
            success:function () {
                $('#contact').append('<div class="modal hide" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-body"><p><strong class="color2">Your message was sent!</strong> - We will get back at You soon!</p></div><div class="modal-footer"><a href="#" class="btn" data-dismiss="modal">Close</a></div></div>');
                $('#contactModal').modal();
                $('#contact')[0].reset();
            }
        });
        return false;
    });
});