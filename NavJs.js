
// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the Projects button
    const projectsButton = document.getElementById("BtnProjects");
  
    // Add a click event listener
    projectsButton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
  
      // Get the position of the MainProjectsContainer
      const projectSection = document.querySelector(".MainProjectsContainer");
      const offsetTop = projectSection.getBoundingClientRect().top + window.scrollY;
  
      // Scroll smoothly to the container
      window.scrollTo({
        top: offsetTop, // Align to the top of the viewport
        behavior: "smooth"
      });
    });
  });

  // Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the Projects button and Learn More button
    const projectsButton = document.getElementById("BtnProjects");
    const learnMoreButton = document.querySelector(".BtnLearnMore");
  
    // Add click event listener for the Projects button
    projectsButton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
  
      // Get the position of the MainProjectsContainer
      const projectSection = document.querySelector(".MainProjectsContainer");
      const offsetTop = projectSection.getBoundingClientRect().top + window.scrollY;
  
      // Scroll smoothly to the MainProjectsContainer
      window.scrollTo({
        top: offsetTop, // Align to the top of the viewport
        behavior: "smooth"
      });
    });
  
    // Add click event listener for the Learn More button
    learnMoreButton.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link behavior
  
      // Get the position of the IntroductionContainer
      const introSection = document.querySelector(".IntroductionContainer");
      const offsetTop = introSection.getBoundingClientRect().top + window.scrollY;
  
      // Scroll smoothly to the IntroductionContainer
      window.scrollTo({
        top: offsetTop, // Align to the top of the viewport
        behavior: "smooth"
      });
    });
  });
