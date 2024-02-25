function toggleCard(section) {
    var cardContent = document.getElementById(section);

    if (cardContent.style.display === "block") {
        cardContent.style.display = "none";
    } else {
        cardContent.style.display = "block";
    }
}
