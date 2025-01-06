document.addEventListener("DOMContentLoaded", () => {
    // Editable sections
    const editableSections = document.querySelectorAll("#resume-container section, .header h1, .header p");
  
    editableSections.forEach((section) => {
      section.setAttribute("contenteditable", true);
      section.style.outline = "none";
      section.style.cursor = "text";
  
      section.addEventListener("focus", () => {
        section.style.border = "1px dashed #ccc";
      });
  
      section.addEventListener("blur", () => {
        section.style.border = "none";
        saveToLocalStorage();
      });
    });
  
    // Save content to localStorage
    function saveToLocalStorage() {
      const resumeContent = document.getElementById("resume-container").innerHTML;
      localStorage.setItem("resumeContent", resumeContent);
    }
  
    // Load content from localStorage
    function loadFromLocalStorage() {
      const savedContent = localStorage.getItem("resumeContent");
      if (savedContent) {
        document.getElementById("resume-container").innerHTML = savedContent;
      }
    }
  
    // Initialize the page with saved content
    loadFromLocalStorage();
  });
  