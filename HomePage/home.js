const content = document.getElementById("content");

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        if ($('#sidebar').hasClass('active')) {
            content.style.width = "100%";
            content.style.marginLeft = "0";
            content.style.paddingLeft = "5%";
            content.style.paddingRight = "5%";
        } else {
            content.style.width = "";
            content.style.marginLeft = "";
        }
    });
});


/* for sidebar navigation */



function showpage1()
{
    document.getElementById("page1Content").style.display="block";
    document.getElementById("page2Content").style.display="none";
}
function showpage2()
{
    document.getElementById("page1Content").style.display="none";
    document.getElementById("page2Content").style.display="block";
    
}


document.querySelector('#details').addEventListener('click', function () {
    showpage1();
});

document.querySelector('#calendar').addEventListener('click', function () {
    showpage2();
});




/* sidebar navigation ends */
