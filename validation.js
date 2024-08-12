
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let emailAddress = document.getElementById('emailAddress');
    let company = document.getElementById('company');
    let address = document.getElementById('address');
    let month = document.getElementById('select-month');
    let day = document.getElementById('select-day');
    let year = document.getElementById('select-year');
    console.log(month.value);
    const formData = {
        first : firstName.value,
        last : lastName.value,
        email : emailAddress.value,
        company : company.value,
        addre : address.value,
        mon : month.value,
        dai : day.value,
        yea : year.value  
    };

    localStorage.setItem("formData",JSON.stringify(formData));
})


