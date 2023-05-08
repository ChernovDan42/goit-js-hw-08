var _ = require('lodash')


const FORMKEY = "feedback-form-state";

const formData = {};


const formRef = document.querySelector('.feedback-form')


formRef.addEventListener('input', _.throttle(saveLocalStateForm,500))
formRef.addEventListener('submit',submitForm)




function saveLocalStateForm(e) {

    formData[e.target.name] = e.target.value;

    localStorage.setItem(FORMKEY,JSON.stringify(formData))
}

populateForm()


function submitForm(e) {
    e.preventDefault();

    const { email, message } = formRef.elements;
    console.log(`email: ${email.value}, message: ${message.value}`);

    e.target.reset();
    localStorage.removeItem(FORMKEY)

}

function populateForm() {
   const parsedData = JSON.parse(localStorage.getItem(FORMKEY));
    
    const { email, message } = formRef.elements;
   
   
    if (parsedData) {
        email.value = parsedData.email;
        message.value = parsedData.message;
    }
  
}

