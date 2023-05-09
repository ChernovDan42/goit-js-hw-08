var _ = require('lodash')


const FORMKEY = "feedback-form-state";

let formData = JSON.parse(localStorage.getItem(FORMKEY)) || {};


const formRef = document.querySelector('.feedback-form')


formRef.addEventListener('input', _.throttle(saveLocalStateForm,500))
formRef.addEventListener('submit',submitForm)


populateForm()

function saveLocalStateForm(e) {

    formData[e.target.name] = e.target.value;

  

    localStorage.setItem(FORMKEY,JSON.stringify(formData))
}




function submitForm(e) {
    e.preventDefault();

    const { email,message } = formRef.elements;

    if (!email.value || !message.value) {
        return alert('Fill all forms')
    }

   
    console.log(formData);

    e.target.reset();
    localStorage.removeItem(FORMKEY)

}

function populateForm() {
   const parsedData = JSON.parse(localStorage.getItem(FORMKEY));
    
    const { email, message } = formRef.elements;
   
   
    if (parsedData) {
        email.value = parsedData.email;
        message.value = parsedData.message;
    } else {
        email.value = '';
        message.value = '';
    }
  
}

