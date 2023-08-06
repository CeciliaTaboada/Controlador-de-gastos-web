
function toggle(){
    document.getElementById("date").classList.toggle("active");
    document.getElementById("main").classList.toggle("active");
    document.getElementById("user-options").classList.toggle("active");
    document.getElementById("footer").classList.toggle("active");
};

function addName(id){
    toggle();
    let inputName = document.getElementById("data-input");
    let pTag = document.getElementById("input-p");
    if (id == "reminder-div"){
        inputName.setAttribute("name", "remider-div");
        pTag.innerHTML="Add a reminder";
    }
    else if (id == "bills-div"){
        inputName.setAttribute("name", "bills-div");
        pTag.innerHTML="Add a new bill payment";
    }
    else if (id == "market-div"){
        inputName.setAttribute("name", "market-div");
        pTag.innerHTML="Add a new market shop";
    }
}