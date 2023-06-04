const input=document.querySelector('input')
const btn=document.querySelector('button')
async function d() {
  fetch(`http://www.sss.somee.com/Home/sendEmails?email=${input.value}`).then((e)=>{
    alert("Email was sent successfully")
  }).catch((e)=>{
    alert("Error")
  })
}
btn.addEventListener('click' , () => {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')
    if(input.value.match(regex)) {
        document.querySelector('p').textContent=""

        d()
    } else {
        document.querySelector('p').textContent="email is wrong"
    }
     
})