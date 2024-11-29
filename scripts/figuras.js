function toggleInfo(id) {
    const info = document.getElementById(`info-${id}`);
    const description = document.getElementById(id);

    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
        description.style.display = "none";
        info.classList.add('fade-in');
    } else {
        info.style.display = "none";
        description.style.display = "block";
    }
}
