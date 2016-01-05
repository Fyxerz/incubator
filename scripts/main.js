function init() {
    initMenu();
    toggleMenu();
    callProject();
}

function initMenu() {
// INITIATE JS BUTTON
$('.js_menu_button').addClass('js-display');

// CHANGE MENU STYLE
$('.nav_menu').addClass('js_nav_menu c4').removeClass('nav_menu');
$('.js-menu-section_heading').addClass('js-display');
$('.nav_menu-ul').addClass('js_nav_menu-ul').removeClass('nav_menu-ul');
// SET INTRO POSITION
$('.intro').addClass('js_intro_position');
}


// MENU TOGGLE

function toggleMenu() {
    // CLICK ON MENU BUTTON
    $('.js_menu_button').click(function(event) {
    // IF MENU IS OPEN: REMOVE CLASS
    // IF MENU IS CLOSED: ADD CLASS
        $('.js_nav_menu').hasClass('hide') ? (
            $('.js_nav_menu').removeClass('hide')
        ) : $('.js_nav_menu').addClass('hide');
    });

    // HIDE ON SCROLL
    $(window).scroll(function(event) {
        $('.js_nav_menu').addClass('hide');
    }); 
}

function callProject() {
// CALL AJAX PROJECTS
    // CHECK FOR PROJECT
    $('.box').click(function(event) {
        event.preventDefault();
        var thisAttr = $(this).attr('data-project');

        // GET AJAX FILE
            $.ajax({
              url: './ajax_projects/' + thisAttr + '.html'
            }).complete(function(data) {
               $('.work_landing').fadeOut();
                $('.ajax_context').html(data.responseText);
                removeProject();
               setTimeout(function() {
                    $('.ajax_context').fadeIn();
               }, 600);
               
            });
    });    
}



// REMOVE AJAX PROJECTS
function removeProject() {    
    $('.back_button').click(function(event) {
        $('.ajax_context').fadeOut();
        console.log('msg')
        setTimeout(function() {
            $('.work_landing').fadeIn();
        }, 600);
    });
}

// MOBILE LAYOUT


init();