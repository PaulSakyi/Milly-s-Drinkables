function openPopup(name, price, image) {
    document.getElementById("popup").style.display = "block";

    document.getElementById("productName").value = name;
    document.getElementById("productPrice").value = price;
    document.getElementById("productImage").value = image;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function openImage(src) {
    document.getElementById("imgPopup").style.display = "flex";
    document.getElementById("popupImg").src = src;
}

function closeImage() {
    document.getElementById("imgPopup").style.display = "none";
}

// SIMPLE VALIDATION (optional but useful)
document.getElementById("orderForm").addEventListener("submit", function (e) {
    
    let quantity = document.getElementById("quantity").value;
    let phone = document.getElementById("phone").value;
    let location = document.getElementById("location").value;

    let valid = true;
    
    if (quantity === "") {
        document.getElementById("quantityError").innerText = "Required";
        valid = false;
    }

    if (phone === "") {
        document.getElementById("phoneError").innerText = "Required";
        valid = false;
    }

    if (location === "") {
        document.getElementById("locationError").innerText = "Required";
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
    }
    
});