var important = false;
var formVisible = true;
var icon;

function togglePriority() {
    console.log("Clicked");

    if(important == true) {
        // set it as non-important
        icon.removeClass("fas").addClass("far");
        important = false;
    }
    else {
        // set it as important
        icon.removeClass("far").addClass("fas");
        important = true;
    }
}

function toggleForm() {
    if(formVisible) {
        $(".section-form").hide();
        formVisible = false;
    }
    else {
        $(".section-form").show();
        formVisible = true;
    }
}



function init() {
    console.log("Task manager");
    icon = $("#iPriority");

    // hook events
   icon.click(togglePriority);
   $("#btnShowDetails").click(toggleForm);

    // load data
}


window.onload = init;


/**
 * create the button
 * catch the click on the button
 * call a function (saveTask)
 * inside the fn console log a message
 */
