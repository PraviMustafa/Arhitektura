
// ako stavim putanju do slike '../public/hero.jpg' i posaljem ovako do komponente
// onda u recimo Recent komponenti ce da bude '../public/hero.jpg' sto nije isto kao iz ovog fajla
// trenutna putanja slike je u odnosu na domen a ne u odnosu na fajl sistem. http://localhost:3000/hero.jpg
// zato sto je sve iz public foldera dostupno tu

// NOTE: date format mm/dd/yyyy
const projects = [
  {
    id: 0,
    name: 'skyline',
    country: 'Serbia',
    city: 'Belgrade',
    date: new Date('03.10.2023'),
    status: 'Completion',
    images: [
      '/hero.jpg', 
      '/img1_project_1.jpg', 
      '/img2_project_1.jpg'
    ],
    isImportant: false
  },
  {
    id: 1,
    name: 'skyline',
    country: 'Serbia',
    city: 'Belgrade',
    date: new Date('08.12.2023'),
    status: 'Completion',
    images: [
      '/hero.jpg', 
      '/img1_project_1.jpg', 
      '/img2_project_1.jpg'
    ],
    isImportant: false
  },
  {
    id: 2,
    name: 'skyline',
    country: 'Serbia',
    city: 'Belgrade',
    date: new Date('01.16.2020'),
    status: 'Completion',
    images: [
      '/hero.jpg', 
      '/img1_project_1.jpg', 
      '/img2_project_1.jpg'
    ],
    isImportant: false
  }
]

// update date to right format and locale
projects.map(project => project.date = project.date.toLocaleDateString('sr-latn-RS', { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase());

export default projects;
