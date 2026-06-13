const app = document.getElementById('app');

//create  profile card container
const profilecard = document.createElement('div');

profilecard.id = 'profile-card';
profilecard.style.maxWidth = '400px';
profilecard.style.margin = '2rem auto';
profilecard.style.padding = '2rem';
profilecard.style.borderRadius = '12px';
profilecard.style.boxShadow = '0 4px 12px rgb(0 , 0, 0, 0.1)';
profilecard.style.textAlign = 'center';
profilecard.style.fontFamily = 'sans-serif';
profilecard.style.backgroundColor = '#ffffff';

// profile image
const photo = document.createElement('img');

photo.src = 'image.png';
photo.alt ='Photo';
photo.style.width ='150px';
photo.style.height = '150px';
photo.style.borderRadius = '50%';
photo.style.objectFit = 'cover';
photo.style.marginBottom = '1rem';


//create name 

const nameHeading = document.createElement('h2');
nameHeading.textContent = 'Khushi'
nameHeading.style.margin = '0 0.5rem 0 0';
nameHeading.style.color ='#333333';


// paragraph
const para = document.createElement('p');

para.textContent = ' I am a first-year BCA student with a strong interest in web development .';
para.style.color = '#666666';
para.style.lineHeight = '1.5';
para.style.marginBottom = '1.5rem';



//Create Contact Button
const contactBtn = document.createElement('button');

contactBtn.textContent = 'Contact Me';
contactBtn.style.backgroundColor = '#007bff';
contactBtn.style.color = '#ffffff';
contactBtn.style.border = 'none';
contactBtn.style.padding = '0.75rem 1.5rem';
contactBtn.style.borderRadius = '6px';
contactBtn.style.fontSize = '1rem';
contactBtn.style.cursor = 'pointer';
contactBtn.style.transition = 'background-color 0.2s';


// hover effect

contactBtn.addEventListener('mouseover',() =>{
   contactBtn.style.backgroundColor = '#0056b3';

});


contactBtn.addEventListener('mouseout', () => {
    contactBtn.style.backgroundColor = '#007bff';
});

profilecard.appendChild(photo);
profilecard.appendChild(nameHeading);
profilecard.appendChild(para);
profilecard.appendChild(contactBtn);

document.getElementById("app").addEventListener("click",function(){
    alert("you message has been send!")

});



app.appendChild(profilecard);
























