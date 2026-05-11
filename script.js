document.getElementById("orderForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    let quantity = document.getElementById("quantity").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let location = document.getElementById("location").value.trim();

    let productName = document.getElementById("productName").value;
    let productPrice = document.getElementById("productPrice").value;

    let valid = true;

    document.getElementById("quantityError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("locationError").innerText = "";

    if(quantity === ""){
        document.getElementById("quantityError").innerText = "Quantity required";
        valid = false;
    }

    if(phone === ""){
        document.getElementById("phoneError").innerText = "Phone number required";
        valid = false;
    }

    if(location === ""){
        document.getElementById("locationError").innerText = "Location required";
        valid = false;
    }

    if(!valid) return;

    let message =
`New Order from Milly's Drinkables

Product: ${productName}
Price: ${productPrice}
Quantity: ${quantity}
Phone: ${phone}
Location: ${location}`;

    // 📱 MOBILE USERS → WHATSAPP
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {

        let whatsappNumber = "233540992910";

        let whatsappURL = https//wa.me/233540992910
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    }

    // 💻 DESKTOP USERS → EMAIL
    else {

        let email = "paulsak123@gmail.com"; // CHANGE THIS

        let subject = "New Order from Milly's Drinkables";

        let mailURL = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

        window.location.href = mailURL;
    }

    closePopup();
    document.getElementById("orderForm").reset();
});