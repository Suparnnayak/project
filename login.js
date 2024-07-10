const mail=document.querySelector('#Email');
const pass=document.querySelector('#password');
const myform=document.querySelector('#my-form');
const msg=document.querySelector('.msg');
const userlist=document.querySelector('#users');

myform.addEventListener("submit",onsubmit);

function onsubmit(e){
   e.preventDefault();

   if(mail=='' || pass==''){
       msg.classList.add('error');
       msg.innerHTML='please enter all fields';

   setTimeout(() => msg.remove(),3000)
   }
   else{
       const li=document.createElement('li')
       li.appendChild(document.createTextNode(`${mailinput.value} : ${passlinput.value}`));
       userlist.append(li)

       // claear fields
       mailinput.value="";
       passinput.value="";
   }
}