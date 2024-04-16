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
    document.getElementById("page3Content").style.display="none";
    document.getElementById("frame").style.display="none";
}
function showpage2()
{
    document.getElementById("page1Content").style.display="none";
    document.getElementById("page2Content").style.display="block";
    document.getElementById("page3Content").style.display="none";
    document.getElementById("frame").style.display="none";
    
}
function showpage3()
{
    document.getElementById("page3Content").style.display="block";
    document.getElementById("page1Content").style.display="none";
    document.getElementById("page2Content").style.display="none";
    document.getElementById("frame").style.display="none";
}

function showdb()
{
    document.getElementById("frame").style.display="block";
    document.getElementById("page3Content").style.display="none";
    document.getElementById("page1Content").style.display="none";
    document.getElementById("page2Content").style.display="none";
}


document.querySelector('#details').addEventListener('click', function () {
    showpage1();
});

document.querySelector('#calendar').addEventListener('click', function () {
    showpage2();
});
document.querySelector('#drives').addEventListener('click', function () {
    showpage3();
});
document.querySelector('#db').addEventListener('click', function () {
    showdb();
});




/* sidebar navigation ends */


/* for form placement drive edit */

// Minimal Javascript (for Edge, IE and select box)
document.addEventListener("change", function(event) {
    let element = event.target;
    if (element && element.matches(".form-element-field")) {
      element.classList[element.value ? "add" : "remove"]("-hasvalue");
    }
  });


  // function showForm() {
  //   document.getElementById('driveForm').style.display = 'block';
  // }
  // function openModal() {
  //   document.getElementById('myModal').style.display = 'flex';
  // }

  // function closeModal() {
  //   document.getElementById('myModal').style.display = 'none';
  // }


  function displayDriveInfo() {
    // Getting form values
    var companyName = document.getElementById("field-omv6eo-metm0n-5j55wv-w3wbws-6nm2b9").value;
    var driveDescription = document.getElementById("field-3naeph-0f3yuw-x153ph-dzmahy-qhkmgm").value;
    var eligibleBranches = document.querySelectorAll('input[name="rap"]:checked, input[name="pop"]:checked, input[name="rock"]:checked, input[name="metal"]:checked, input[name="r_b"]:checked');
    var domain = document.getElementById("field-be1h8i-ll2hpg-q4efzm-nfjj1e-udkw5r").value;
    var date = document.getElementById("field-uyzeji-352rnc-4rv3g1-bvlh88-9dewuz").value;
    var time = document.getElementById("field-uyzeji-352rnc-4rv3g1-bvlh88-9dewuz").value;
    var lastDate = document.getElementById("field-uyzeji-352rnc-4rv3g1-bvlh88-9dewuz").value;
    var venue = document.getElementById("field-uyzeji-352rnc-4rv3g1-bvlh88-9dewuz").value;

    // Constructing the card content
    var branchesText = "Branches Eligible: ";
    eligibleBranches.forEach(function(branch) {
      branchesText += branch.nextElementSibling.textContent + ", ";
    });
    branchesText = branchesText.slice(0, -2); // Removing the extra comma

    // Setting values to the card elements
    document.getElementById("companyName").innerText = "Company Name: " + companyName;
    document.getElementById("driveDescription").innerText = "Description: " + driveDescription;
    document.getElementById("eligibleBranches").innerText = branchesText;
    document.getElementById("domain").innerText = "Domain: " + domain;
    document.getElementById("date").innerText = "Date: " + date;
    document.getElementById("time").innerText = "Time: " + time;
    document.getElementById("lastDate").innerText = "Last Date to Register: " + lastDate;
    document.getElementById("venue").innerText = "Venue: " + venue;

    // Displaying the card
    document.getElementById("driveCard").style.display = "block";
  }

  // Adding event listener to the form submit button
  document.getElementById("driveForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Preventing the default form submission
    displayDriveInfo(); // Calling the function to display the drive information
  });

  
