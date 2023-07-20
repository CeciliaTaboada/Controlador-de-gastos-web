
function hideShow(idToShow, idToHide){
    document.getElementById(idToShow).style.display = "flex"
    document.getElementById(idToHide).style.display = "none"
}

const newUserForm = document.querySelector("#signupform")

newUserForm.addEventListener("submit", async e => {
    const email = newUserForm["email"].value
    const password = newUserForm["password"].value
    const name = newUserForm["name"].value

    const response = await fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password,
            name
        })
    })
    const data = await response.json()
})
