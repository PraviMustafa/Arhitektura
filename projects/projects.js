import { LANG_SR, LANG_EN } from '@constants'

export default class Projects {

  // get localized projects
  static getLocalizedProjects(locale) {
    const localizedProjects = [];
    Projects._projects.forEach(project => {
      const localizedProject = {};
      Object.keys(project).forEach(key => {
        if (key === 'date') {
          localizedProject[key] = Projects._getLocalizedDate(project[key], locale);
          return;
        }
        localizedProject[key] = project[key][locale] ? project[key][locale] : project[key];
      })
      localizedProjects.push(localizedProject);
    })
    return localizedProjects;
  }

  // get date formatted to right locale
  static _getLocalizedDate(date, locale) {
    // transition between locales
    if (typeof date === 'string') {
      return date.toLocaleString(locale);
    }
    // transition from initial date object to locale
    return date.toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase();
  }

  // date format mm/dd/yyyy
  static _projects = [
    {
      id: 0,
      date: new Date('03.10.2023'),
      images: [
        '/hero.jpg', 
        '/img1_project_1.jpg', 
        '/img2_project_1.jpg'
      ],
      isImportant: true,
      name: {
        [LANG_SR]: 'Skajlan',
        [LANG_EN]: 'Skyline'
      },
      country: {
        [LANG_SR]: 'Srbija',
        [LANG_EN]: 'Serbia'
      },
      city: {
        [LANG_SR]: 'Beograd',
        [LANG_EN]: 'Belgrade'
      },
      status: {
        [LANG_SR]: 'Zavrsen',
        [LANG_EN]: 'Completed'
      }
    },
    {
      id: 1,
      date: new Date('09.02.2022'),
      images: [
        '/hero.jpg', 
        '/img1_project_1.jpg', 
        '/img2_project_1.jpg'
      ],
      isImportant: true,
      name: {
        [LANG_SR]: 'Majstor',
        [LANG_EN]: 'Chef'
      },
      country: {
        [LANG_SR]: 'Spanija',
        [LANG_EN]: 'Spain'
      },
      city: {
        [LANG_SR]: 'Valensija',
        [LANG_EN]: 'Valencia'
      },
      status: {
        [LANG_SR]: 'U toku',
        [LANG_EN]: 'In progress'
      }
    },
    {
      id: 2,
      date: new Date('01.05.2016'),
      images: [
        '/hero.jpg', 
        '/img1_project_1.jpg', 
        '/img2_project_1.jpg'
      ],
      isImportant: true,
      name: {
        [LANG_SR]: 'Kapija',
        [LANG_EN]: 'Gate'
      },
      country: {
        [LANG_SR]: 'Nemacka',
        [LANG_EN]: 'Germany'
      },
      city: {
        [LANG_SR]: 'Novi sad',
        [LANG_EN]: 'New now'
      },
      status: {
        [LANG_SR]: 'Zavrsen',
        [LANG_EN]: 'Completed'
      }
    },
    {
      id: 3,
      date: new Date('03.10.2023'),
      images: [
        '/hero.jpg', 
        '/img1_project_1.jpg', 
        '/img2_project_1.jpg'
      ],
      isImportant: false,
      name: {
        [LANG_SR]: 'Nebitan',
        [LANG_EN]: 'Not important'
      },
      country: {
        [LANG_SR]: 'Srbija',
        [LANG_EN]: 'Serbia'
      },
      city: {
        [LANG_SR]: 'Beograd',
        [LANG_EN]: 'Belgrade'
      },
      status: {
        [LANG_SR]: 'Zavrsen',
        [LANG_EN]: 'Completed'
      }
    }
  ]
}