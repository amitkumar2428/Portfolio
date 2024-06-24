const burger=document.querySelector('.burger');
const navLinks=document.querySelector('.nav-links');
burger.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
});

var typed = new Typed('#element', {
    strings: ['Web Developer', 'Graphic Designer'],
    typeSpeed: 100,
});


function Submit(){
   
    let nameMessage=document.getElementById('nameError');
    let emailMessage=document.getElementById('emailError');
    let phoneMessage=document.getElementById('phoneError');

    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;

    let isValid=true;
    if(name===''){
        nameMessage.textContent='Fill the above box';
        
        isValid=false;
    }
    if(email===''){
        emailMessage.textContent='Fill the above box';
       
        isValid=false;
    }
    if(phone===''){
        phoneMessage.textContent='Fill the above box';
       
        isValid=false;
    }
    if(isValid){
        document.getElementById('ThankYou').textContent='Thank you for your submission';
        nameMessage.textContent='';
        emailMessage.textContent='';
        phoneMessage.textContent='';
        let inputs=document.querySelectorAll('#contact input, #contact textarea, #contact button');
        inputs.forEach(input=>input.disabled=true);
    }
    document.getElementById('contact').addEventListener('submit',function(event){
        event.preventDefault();
    })
    const firstInvalidControl=document.querySelector('.error');
    if(firstInvalidControl){
        firstInvalidControl.scrollIntoView({
            behavior:'smooth'
        });
    }
};
