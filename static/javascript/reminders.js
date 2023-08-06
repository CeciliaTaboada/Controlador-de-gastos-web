
function allReminders(){
    fetch("/home/all-reminders", {
        method: "GET",
        /* define how to create all necessary divs to show reminders */
    })
};

function nextReminder(){
    fetch("/home/next-reminder", {
        method: "GET",
        /* create div to show next reminder */
    })
};

function deleteNote(noteId){ /* conect this function with divs in all reminders */
    fetch("/home/delete-note", {
        method:"DELETE",
        body: JSON.stringify(noteId= noteId),
    }).then((_res) => {
        window.location.href = "/home/all-reminders"; /* refresh the page */
    })
}; 
