const home = document.querySelector(".logInSignUpForm"),
    formContainer = document.querySelector(".formContainer"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowandHide = document.querySelectorAll(".pw_hide");

    signupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formContainer.classList.add("active");
    });
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        formContainer.classList.remove("active");
    });

    pwShowandHide.forEach((icon) => {
        icon.addEventListener("click", () => {
            let getpwinput = icon.parentElement.querySelector("input");
            if(getpwinput.type === "password"){
                getpwinput.type = "text";
                icon.classList.replace("uil-eye-slash", "uil-eye");
            } else{
                getpwinput.type = "password";
                icon.classList.replace("uil-eye", "uil-eye-slash");
            }
        })
    })
