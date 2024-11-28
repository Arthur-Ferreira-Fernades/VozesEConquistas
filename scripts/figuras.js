function toggleInfo(id) {
    const info = document.getElementById(`info-${id}`);
    const descripton = document.getElementById(id);

    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
        descripton.style.display = "none";
    } else {
        info.style.display = "none";
        descripton.style.display = "block";
    }
}