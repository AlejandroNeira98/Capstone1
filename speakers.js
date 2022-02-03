const speakers = [
  {
    profile_image: './images/speakers/speaker1.png',
    name: 'Yochai Benkler',
    degree: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    presentation: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006',
  },
  {
    profile_image: './images/speakers/speaker3.png',
    name: 'SohYeong Noh',
    degree: 'Director of Art Centre Nabl and a board member of CC Korea',
    presentation: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology humanities, and the arts.',
  },
  {
    profile_image: './images/speakers/speaker5.png',
    name: 'Lila Tretikov',
    degree: 'Executive Director of the Wikimedia Foundation',
    presentation: 'Lila Tretkovis the Executive Director of the Wkimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },
  {
    profile_image: './images/speakers/speaker2.png',
    name: 'Kilnam Chon',
    degree: '',
    presentation: 'Kinam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society\'s (ISOCO nternet Hal of Fame.',
  },
  {
    profile_image: './images/speakers/speaker4.png',
    name: 'Julia Leda',
    degree: 'President of Young Pirates of Europe',
    presentation: 'European integration, political democracy, and participation of youth through online as her major condern, Reda\'s report outlining potential changes to EU copyright law was approved by the Parlament in July',
  },
  {
    profile_image: './images/speakers/speaker6.png',
    name: 'Ryan Merkley',
    degree: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    presentation: 'Ryan had been leading opensource projects at theMozilla Foundation such as the open-source movement',
  },
];

let text = '';

speakers.forEach((element) => {
  text = `
  
    <div class="profile-img">
      <img src="${element.profile_image}" alt="Speaker">
    </div>
    <div class="speaker-presentation">
      <h3 class="name">${element.name}</h3>
      <h4 class="degree">${element.degree}</h4>
      <div class="main-and-featured-line"></div>
      <p class="presentation">${element.presentation}</p>
    </div>
   
  `;
  const speaker = document.createElement('div');
  speaker.classList.add('speaker');
  if (element === speakers[2] || element === speakers[3] || element === speakers[4] || element === speakers[5]) { speaker.classList.add('more'); }

  speaker.innerHTML = text;

  const Fspeakers = document.getElementById('featured-speakers');
  Fspeakers.insertBefore(speaker, document.getElementById('more-btn'));
});