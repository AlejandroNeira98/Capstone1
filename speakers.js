const speakers = [
  {
  'profile_image': '',
  'name':'',
  'degree': '',
  'presentation':''
  },
  {
  'profile_image': '',
  'name':'',
  'degree': '',
  'presentation':''
  },
  {
  'profile_image': '',
  'name':'',
  'degree': '',
  'presentation':''
  },
  {
  'profile_image': '',
  'name':'',
  'degree': '',
  'presentation':''
  },
  {
  'profile_image': '',
  'name':'',
  'degree': '',
  'presentation':''
  },
  {
  'profile_image': '',
  'name':'',
  'degree': '',
  'presentation':''
  },
]
 
let text= "";

speakers.forEach(element => {
  
  text = `
  
    <div class="profile-img">
      <img src="${element.profile_image}" alt="Speaker">
    </div>
    <div class="speaker-presentation">
      <h3 class="name">${element.name}</h3>
      <h4 class="degree">${element.degree}</h4>
      <p class="presentation">${element.presentation}</p>
    </div>
   
  `;
  let speaker = document.createElement(div);
  speaker.classList.add('speaker');
  speaker.innerHTML = text;

  document.getElementById('featured-speakers').appendChild(speaker);
});