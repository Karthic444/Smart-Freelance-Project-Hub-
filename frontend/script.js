// Search Projects
function searchProjects() {
    const searchInput = document.getElementById("searchInput");
    const searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter a project, skill or category.");
        return;
    }

    alert("Searching for: " + searchText);
}


// Find Projects
function findProjects() {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
        projectsSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// Post Project
function postProject() {
    alert("Post Project feature coming soon!");
}


// Login Button
document.addEventListener("DOMContentLoaded", function () {

    const loginButton = document.querySelector(".login-btn");
    const signupButton = document.querySelector(".signup-btn");

    if (loginButton) {
        loginButton.addEventListener("click", function () {
            alert("Login feature coming soon!");
        });
    }

    if (signupButton) {
        signupButton.addEventListener("click", function () {
            alert("Sign Up feature coming soon!");
        });
    }

});