window.onload = function() {
  document.querySelector("#home").style.display = "block";
  // hide other sections
  var sections = document.querySelectorAll("main > section");
  for (var i = 0; i < sections.length; i++) {
    if (sections[i].id !== "home") {
      sections[i].style.display = "none";
    }
  }
};

function showSection(sectionId) {
    const sections = document.querySelectorAll("main section");
    for (const section of sections) {
        if (section.id === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}
