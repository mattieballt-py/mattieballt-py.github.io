function openPopup() {
    document.getElementById("popup-form").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup-form").style.display = "none";
}

function toggleCustomInput() {
    let serviceDropdown = document.getElementById("service");
    let customInput = document.getElementById("custom-service");

    if (serviceDropdown.value === "custom") {
        customInput.style.display = "block";
    } else {
        customInput.style.display = "none";
    }
}
