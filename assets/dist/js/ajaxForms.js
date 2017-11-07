jQuery(document).ready(function($) {

    /**
     * send contact form
     */
    $(document).on('submit', '#contactForm', function(event) {
        event.preventDefault();
        // test for gcapcha response
        // var response = grecaptcha.getResponse();
        // if (response.length == 0) {
        //       new Noty({
        //             theme: 'mint',
        //             text: 'Вы не ввели капчу',
        //             timeout: 5000,
        //             progressBar: false,
        //             closeWith: ['click', 'button'],
        //       }).show();
        //       return;
        // }

        var user_name = $(this).find('input[name="name"]').val();
        var user_mail = $(this).find('input[name="mail"]').val();

        $.ajax({
            type: "POST",
            data: {
                action: "contactMail",
                nonce: vars.nonce,
                user_name: user_name,
                user_mail: user_mail,
            },
            url: vars.ajax_url,
            success: function(data, text) {
                if (data) {
                    // if is modal form - close modal before show message
                    // $.magnificPopup.close();
                    new Noty({
                        theme: 'mint',
                        text: data.message,
                        timeout: 5000,
                        progressBar: false,
                        closeWith: ['click', 'button'],
                    }).show();
                }
            },
            fail: function(errors) {
                new Noty({
                    theme: 'mint',
                    text: 'Ошибка отправки',
                    timeout: 5000,
                    progressBar: false,
                    closeWith: ['click', 'button'],
                }).show();
                console.log(errors);
            }
        });

        document.getElementById("contactForm").reset();
    });

});
