//Disable opening context menu when right click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Disable F12 key
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 123) {
        event.preventDefault();
    }
});

// Disable Ctrl+Shift+I shortcut
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        event.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    //Get element by each tab
    const generalTab = document.getElementById("general-tab");
    const skillsTab = document.getElementById("skills-tab");
    const projectsTab = document.getElementById("projects-tab");
    const contactTab = document.getElementById("contact-tab");

    //Get element by each element
    const generalContent = document.getElementById("general-content");
    const skillsContent = document.getElementById("skills-content");
    const projectsContent = document.getElementById("projects-content");
    const contactContent = document.getElementById("contact-content");

    //Function to show/hide content based on click
    function showContent(content, tab) {
        // Hide all content
        generalContent.style.display = "none";
        skillsContent.style.display = "none";
        projectsContent.style.display = "none";
        contactContent.style.display = "none";

        // Remove the active class
        generalTab.classList.remove("active");
        skillsTab.classList.remove("active");
        projectsTab.classList.remove("active");
        contactTab.classList.remove("active");

        // Show the selected content
        content.style.display = "block";

        // Add the active class to the clicked tab
        tab.classList.add("active");
    }

    // Event listerenr for each tab
    generalTab.addEventListener("click", function() {
        showContent(generalContent, generalTab);
    });

    skillsTab.addEventListener("click", function() {
        showContent(skillsContent, skillsTab);
    });

    projectsTab.addEventListener("click", function() {
        showContent(projectsContent, projectsTab);
    });

    contactTab.addEventListener("click", function() {
        showContent(contactContent, contactTab);
    });
});
