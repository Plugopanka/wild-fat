// Константы для страницы Works

import cubeVideoSrc from '../../../assets/videos/cube-video.mp4';
import heartllVideoSrc from '../../../assets/videos/heart-ll-video.mp4';
import heartVideoSrc from '../../../assets/videos/heart-video.mp4';

// Маппинг изображений для карточек
export const cardImages: Record<string, string> = {
  'Caldera': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/631f972574477d53d6375cad_ScreenShot00016.png',
  'Ground-From-Under-The-Feet': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/631fa8f72fd029a03c0df386_ScreenShot00003.png',
  'Phone-Rage': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/61e873180b37a881ff27aa2a_photo_2021-01-07_01-29-21.jpg',
  'Helicopter-HUD': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/62292e9579912485fd76b398_Screenshot%202022-03-10%20at%2001.41%201.png',
  'Eggs-Delivery': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/5ec6841f42de90df96d695e7_eggs_delivery_main_menu.jpg',
  'Before-I-Disappear': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/5ec6885d2b193fd9c457bc06_Frame%2012.jpg',
  'Darkest-Path': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/5ecd266bb0f99e9454cbdf57_DP.jpg',
  'death-mortal-conference': 'https://uploads-ssl.webflow.com/5e42aee008053d8670f84473/5e42e3db7b97a9493b67ad72_Final_map_city%203.png',
  'Dum-Spiro-Spero': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/5e42e4027b97a98a7367ad8d_Final_map_city%202.png',
  // Competence images
  'Game-Design': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/631fa8f72fd029a03c0df386_ScreenShot00003.png',
  'Technical-Design': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/62292e9579912485fd76b398_Screenshot%202022-03-10%20at%2001.41%201.png',
  'UI-UX-Programming': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/61e873180b37a881ff27aa2a_photo_2021-01-07_01-29-21.jpg',
  'Gameplay-Programming': 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/5ec6841f42de90df96d695e7_eggs_delivery_main_menu.jpg'
};

// Маппинг видео для проектов
export const projectVideos: Record<string, string> = {
  'the-cube': cubeVideoSrc,
  'atomic-heart-2': heartllVideoSrc,
  'atomic-heart': heartVideoSrc
};

// Конфигурация видео по умолчанию
export const defaultVideoConfig = {
  src: cubeVideoSrc, // Используем cube-video как видео по умолчанию
  autoplay: true,
  loop: true,
  muted: true
};
