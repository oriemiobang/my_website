const header = document.querySelector('.header');
let lastScrollTop = 0;
const templateId = 'template_trq93t4';
const serviceId = 'service_zx29ihn';

window.addEventListener('scroll', () => {
  const currentScrollTop = window.scrollY;

  if (currentScrollTop > lastScrollTop) {
    // Scrolling down
    header.classList.add('hidden');
  } else {
    // Scrolling up
    header.classList.remove('hidden');
  }

  lastScrollTop = currentScrollTop;
});

// circle prosgress bar
let number1 = document.getElementById('percentage1');
let counter1 = 0;

setInterval(() => {
  if (counter1 == 95){
    clearInterval;
  }
  else {
    counter1 +=1;
    number1.innerHTML = `${counter1}%`;
  }
}, 30);


let number2 = document.getElementById('percentage2');
let counter2 = 0;

setInterval(() => {
  if (counter2 == 90){
    clearInterval;
  }
  else {
    counter2 +=1;
    number2.innerHTML = `${counter2}%`;
  }
}, 30);


let number3 = document.getElementById('percentage3');
let counter3 = 0;

setInterval(() => {
  if (counter3 == 87){
    clearInterval;
  }
  else {
    counter3 +=1;
    number3.innerHTML = `${counter3}%`;
  }
}, 30);


let number4 = document.getElementById('percentage4');
let counter4 = 0;

setInterval(() => {
  if (counter4 == 85){
    clearInterval;
  }
  else {
    counter4 +=1;
    number4.innerHTML = `${counter4}%`;
  }
}, 30);

// function toggleNavbar() {
//   var navbar = document.getElementById("navbar");
//   if (navbar.className === "navbar") {
//       navbar.className += " responsive";
//   } else {
//       navbar.className = "navbar";
//   }}
//   $(document).ready(function() {
//     $(".icon").click(function() {
//       $(".query").slideToggle();
//       $(this).html(function(_, html) {
//         return html === '&#9776;' ? '&#10006;' : '&#9776;';
//     });
//     });
// });
$(document).ready(function() {
  $(".icon").click(function() {
      $(".query").slideToggle();
      $(this).html(function(_, html) {
          return html === '☰' ? '✖' : '☰';
      });
  });
  $(".links1").click(function() {
    $(".query").slideUp();
    $(".icon").html('☰');
  });
});

// $(document).ready(function() {
//   $(".icon").click(function() {
//     $(".query").slideToggle();
  
//       });
//   });
//   });
// });







function sendEmail(event){
  event.preventDefault();

  console.log(
    "button cliked"
  )
  const formData = new FormData(event.target);
  const paramsObj = {
    username: formData.get('username'),
    email:formData.get('email'),
    message: formData.get('message'),
    subject: formData.get('subject'), 
    phone: formData.get('phone')
  };





  emailjs.send(serviceId, templateId, paramsObj)
    .then((response)=>{ 
    document.getElementById('username').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
    document.getElementById('subject').value = "";
    document.getElementById('phone').value = "";
  
      alert("Email sent")
      console.log(response)
    


    })
    .catch((error)=>{
      console.log(error)
      alert("Couldn't send email check your Network connection ")
    })


  

  

}



   
function sendEmail2(event){
  event.preventDefault();
console.log("it's working")

let email = document.getElementById('email2').value;


  const paramsObj = {
    username: "",
    email:email,
    message: "a subscription email " + email,
    subject: "",  
    phone: ""
  };
  console.log(email);

  emailjs.send(serviceId, templateId, paramsObj)
    .then((response)=>{ 

    document.getElementById('email2').value = "";

  
      alert("Email sent")
      console.log(response)
    


    })
    .catch((error)=>{
      console.log(error)
      alert("Couldn't send email check your Network connection ")
    })

  
}

  