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
