(function ($) {
    "use strict";

    $('#logo2').hide();

    // 
    let header = document.getElementById('header');

    document.addEventListener('scroll', function() {
        // Get scroll position
        let scrollPosition = window.pageYOffset;

        // console.log(scrollPosition);

        // Calculate whether the scroll it 350px or not then set the opacity to face the header out
        if (scrollPosition >= 80) {
            $('#logo2').show();
            $('#logo1').hide();
        } else {
            $('#logo1').show();
            $('#logo2').hide();
        }

    });
// 
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

    window.onload = function() {
        // Function to check screen size and change image source accordingly
        function checkScreenSize() {
            var image = document.getElementById('logo1');
            if (window.innerWidth <= 991) {
                image.src = 'img/govind-high-resolution-logo-black-transparent.png'; // Change the source to your small image
            } else {
                image.src = 'img/govind-high-resolution-logo-transparent.png'; // Change the source to your large image
            }
        }
    
        // Call the function initially when the page loads
        checkScreenSize();
    
        // Call the function whenever the window is resized
        window.addEventListener('resize', checkScreenSize);
    };

        $('#requestEnquiry').click(function(){

            (function() {
                'use strict'

                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.querySelectorAll('.needs-validation')

                // console.log(forms);

                // Loop over them and prevent submission
                Array.prototype.slice.call(forms)
                    .forEach(function(form) {
                        // console.log(form);
                        

                            if (!form.checkValidity()) {
                                // console.log('true');
                                event.preventDefault()
                                event.stopPropagation()
                            }
                            else
                            {
                                emailjs.init("PJUKdTSGWWSkMFyj6");
                                sendEmail();
                            };

                            form.classList.add('was-validated')
                        
                    })
            })();

            // console.log('btn clicked');
            
            
            // Function to send email
            function sendEmail() {
                // console.log('fn called');

                var complete_message = `
                Name : ${document.getElementById('name').value}\n
                Email : ${document.getElementById('email').value}\n
                Mobile : ${document.getElementById('mob_no').value}\n
                relocation_date : ${document.getElementById('relocation_date').value}\n
                MoveType : ${document.getElementById('MoveType').value}\n
                MoveSize : ${document.getElementById('MoveSize').value}\n
                relocation_from : ${document.getElementById('relocation_from').value}\n
                relocation_to : ${document.getElementById('relocation_to').value}\n
                Message : ${document.getElementById('message').value}\n`;

                // Get form data
                var formData = {
                    to: document.getElementById('email').value,
                    subject: document.getElementById('subject').value,
                    message: complete_message
                };

                // Send email
                emailjs.send("service_pof719f", "template_g7qg95w", formData)
                    .then(function(response) {
                        // alert("Your Enquiry Request submitted!");
                        $('.btn_close_main_modal').click();
                        $('#packersMoversEnquireForm2').click();
                        
                        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
                    }, function(error) {
                        // alert("Failed to send email. Error: " + error);
                        console.log("FAILED", error);
                    });

                return false;
            }

            // Attach sendEmail function to form submission
            // document.getElementById('requestEnquiryForm').addEventListener('submit', sendEmail);
        });

    const myTimeout = setTimeout(packersMoversEnquireForm, 3000);

    function packersMoversEnquireForm() {
        clearTimeout(myTimeout);
        console.log('time out');
        document.getElementById('packersMoversEnquireForm').click();
    }

    
})(jQuery);

