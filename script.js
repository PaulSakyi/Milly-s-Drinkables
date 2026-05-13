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

// FORM VALIDATION
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("orderForm");

    form.addEventListener("submit", function (e) {

        let quantity = document.getElementById("quantity").value.trim();
        let customerName = document.getElementById("customerName").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let location = document.getElementById("location").value.trim();

        let valid = true;

        // Clear previous errors
        document.getElementById("quantityError").innerText = "";
        document.getElementById("nameError").innerText = "";
        document.getElementById("phoneError").innerText = "";
        document.getElementById("locationError").innerText = "";

        // Quantity validation
        if (quantity === "") {
            document.getElementById("quantityError").innerText = "Required";
            valid = false;
        }

        // Name validation
        if (customerName === "") {
            document.getElementById("nameError").innerText = "Required";
            valid = false;
        }

        // Phone validation
        if (phone === "") {

    document.getElementById("phoneError").innerText = "Required";
    valid = false;

}
else if (!/^[0-9]{10}$/.test(phone)) {

    document.getElementById("phoneError").innerText = "Phone number must be 10 digits";
    valid = false;

}
        // Location validation
        if (location === "") {
            document.getElementById("locationError").innerText = "Required";
            valid = false;
        }

        if (!valid) {
            e.preventDefault();
        }

    });

});

function searchProducts() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let products = document.querySelectorAll(".product-card");

    products.forEach(function(product){

        let productName = product.querySelector("h2").innerText.toLowerCase();

        if(productName.includes(input)){
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

}

// DARK MODE TOGGLE SWITCH

const toggle = document.getElementById("darkModeToggle");
const modeText = document.getElementById("modeText");

toggle.addEventListener("change", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
    }

});

window.addEventListener("load", function(){

    setTimeout(function(){
        document.getElementById("splash").style.display = "none";
    }, 3500);

});

window.addEventListener("load", function(){

    const splash = document.getElementById("splash");
    const sound = document.getElementById("introSound");

    // Play sound
    if(sound){
        sound.play().catch(()=>{});
    }

    // Remove splash after animation
    setTimeout(function(){
        splash.style.display = "none";
    }, 4000);

});