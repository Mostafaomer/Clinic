document.querySelector(".addvisit").addEventListener("click", () => {
    console.log(document.querySelector('input').value);
    fetch( `https://localhost:7299/AddVisit?patientId=${localStorage.getItem("id")}&paid=${document.querySelector('input').value}`).then((e)=> {
        window.location.href="Visits.html"
        console.log(e);
    })
})
console.log("ds");