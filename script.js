/*These are global variables that can be used in local scope.
*/
let model = document.getElementById("model");
let modelBody = document.getElementById("model-body");
let user = {};

function signup(event) {
    event.preventDefault();
    model.style.display = "flex";
    model.className = "animate__animated animate__fadeIn"
    modelBody.className = "animate__animated animate__zoomIn"
    let form = document.forms.register;
    user.firstname = form.elements.firstname.value;
    user.lastname = form.elements.lastname.value;
    user.email = form.elements.email.value;
    user.password = form.elements.password.value;
    console.log(user);
}
function signin(event) {
    event.preventDefault();
    let form = document.forms.login;
    user.email = form.elements.email.value;
    user.password = form.elements.password.value;
    console.log(user);
    
}

function closeModel() {
    modelBody.className = "animate__animated animate__zoomOut"
    model.className =  "animate__animated animate__fadeOut"
    
}

