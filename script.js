const popup = document.getElementById("popup");

function openPopup(name, price, image){

    popup.style.display = "block";

    document.getElementById("productName").value = name;
    document.getElementById("productPrice").value = price;
    document.getElementById("productImage").value = image;
}

function closePopup(){
    popup.style.display = "none";
}

function openImage(src){
    document.getElementById("imgPopup").style.display = "flex";
    document.getElementById("popupImg").src = src;
}

function closeImage(){
    document.getElementById("imgPopup").style.display = "none";
}

document
.getElementById("orderForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let quantity = document.getElementById("quantity").value;
    let phone = document.getElementById("phone").value;
    let location = document.getElementById("location").value;

    let valid = true;

    document.getElementById("quantityError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("locationError").innerText = "";

    if(quantity === ""){
        document.getElementById("quantityError")
        .innerText = "Quantity required";
        valid = false;
    }

    if(phone === ""){
        document.getElementById("phoneError")
        .innerText = "Phone number required";
        valid = false;
    }

    if(location === ""){
        document.getElementById("locationError")
        .innerText = "Location required";
        valid = false;
    }

    if(valid){

        let productName =
        document.getElementById("productName").value;

        let productPrice =
        document.getElementById("productPrice").value;

        let message =
`Hello, I want to place an order:

Product: ${productName}
Price: ${productPrice}
Quantity: ${quantity}

Customer Phone: ${phone}
Location: ${location}`;

        let whatsappNumber = "233540992910";

        let whatsappURL = https//wa.me/233540992910
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");

        closePopup();

        document.getElementById("orderForm").reset();
    }
});