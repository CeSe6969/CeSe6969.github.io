function changeLanguage(lang) {
    document.querysekectorAll("[data-en]").forEach(element =>{
        element.textContent = element.getAttribute(`data-${lang}`);
    });
}