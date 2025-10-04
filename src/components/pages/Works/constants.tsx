export interface WorkCardData {
  id: string;
  title: string;
  image: string;
  cardName: string;
  labels: string[];
  description: string;
  params: string[];
  videoUrl?: string;
  gameUrl?: string;
}

export const WORKS_CARDS: WorkCardData[] = [
  {
    id: 'Caldera',
    title: 'STRATEGY',
    image: 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/631f972574477d53d6375cad_ScreenShot00016.png',
    cardName: 'Caldera',
    labels: ['Game Design', 'Programming', 'UX/UI'],
    params: ['Engine: UE4', 'Platform: PC, Windows', 'Crew: 2', 'Genre: Strategy'],
    description: 'GMTK Jam 2022',
    gameUrl: 'https://wild-fat.itch.io/caldera',
  },
  {
    id: 'Ground-From-Under-The-Feet',
    title: 'TOP DOWN SHOOTER',
    image: 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/631fa8f72fd029a03c0df386_ScreenShot00003.png',
    cardName: 'Ground From Under The Feet',
    labels: ['2D Graphics', 'Level Design', 'Modeling', 'Game Design', 'Programming', 'UX/UI'],
    params: ['Engine: UE4', 'Platform: PC, Windows', 'Crew: 1', 'Genre: Top Down Shooter'],
    description: `The game has been developed by myself for Ludum Dare 50 “Delay inevitable” theme for one week. The player's goal is to hold control of the playable area as long as possible. The arena consists of 8 separated platforms, each platform has its own stabilizer which indicates the current state of the platform, when it is overloaded, the platform falls. In the end each platform will fall, and the player has to delay this event. It fits the Jam theme  “Delay inevitable”.`,
    videoUrl: 'https://player.vimeo.com/video/749764372?title=0&byline=0&portrait=0',
    gameUrl: 'https://ldjam.com/events/ludum-dare/50/fallen-platforms-but-not-today',
},
  {
    id: 'Phone-Rage',
    title: 'LIFE SIMULATOR',
    image: 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/61e873180b37a881ff27aa2a_photo_2021-01-07_01-29-21.jpg',
    cardName: 'Phone Rage',
    labels: ['Game Design', 'Programming', 'UX/UI'],
    description: "Everyone experiences anger from time to time. In some situations, it is a natural response. However, what about those times when anger feels extreme or uncontrollable? Phone Rage is an anger issues simulator with human stories. Managing your anger can improve your relationships, reduce your work-related stress, and help you feel healthier. But not here! Deal maximum damage and bare your emotions! Don’t be a bore and find the most valuable things to destroy. The most focused observant gamers will beat the game. The game was developed in 3 days for Dani's Basement Jam #2.",
    params: ['Engine: UE4', 'Platform: PC, Windows', 'Crew: 2', 'Genre: Life simulation'],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    gameUrl: 'https://wild-fat.itch.io/phone-rage'
  },
  {
    id: 'Helicopter-HUD',
    title: 'FIREFIGHTER HELICOPTER SIMULATOR',
    image: 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/62292e9579912485fd76b398_Screenshot%202022-03-10%20at%2001.41%201.png',
    cardName: 'Helicopter HUD',
    labels: ['Modeling', 'Programming', 'UI/UX', 'VFX'],
    params: ['Engine: UE4', 'Platform: PC, Windows', 'Crew: 4', 'Genre: Simulator'],
    description: `The Head Up Display prototype for firefighting helicopters equipped with horizontal fire extinguishing systems. Taken as an example the KA-32. The project has been developed during the AR HUD course of Universal University and WayRay. The goal was to invent and show up the prototype of the HUD display system for some transport. Despite the fact that there wasn’t a requirement of interactive we decided to represent the idea through a game-like prototype. For three months we made a prototype with most of the designed mechanics working, except this we got the instrument which allows us to test arguable ideas with this and get rid of not the best ones on the very start of the project. All the engine jobs were made by me. The project helped me to improve my knowledge at AR Soft, Render, Shaders, UI Programming, Physics, VFX and Optimisation.`,
    videoUrl: 'https://player.vimeo.com/video/686860777?title=0&byline=0&portrait=0',
  },
  {
    id: 'Eggs-Delivery',
    title: 'RACING',
    image: 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/5ec6841f42de90df96d695e7_eggs_delivery_main_menu.jpg',
    cardName: 'Eggs Delivery',
    labels: ['Level Design', 'Modeling', 'Game Design', 'Programming', 'UX/UI'],
    params: ['Engine: UE4', 'Platform: HTML', 'Crew: 1', 'Genre: Racing'],
    description: `Концепт игры был разработан мной на гейм джеме Ludum Dare 46 - Take It Alive за 10 часов. Цель игрока - довести до финиша максимальное количество коробок с яйцами за ограниченное время. Целью проекта было улучшить навыки быстрого прототипирования. За время разработки проекта я изучил особенности работы Wheeled Vehicle и Spline Component. Также улучшил навыки дизайна уровней и работы в Blender.`,
    videoUrl: 'https://player.vimeo.com/video/421536617?title=0&byline=0&portrait=0',
    gameUrl: 'https://wild-fat.itch.io/eggs-delivery',
},
  {
    id: 'Before-I-Disappear',
    title: '3D PLATFORMER',
    image: 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/5ec6885d2b193fd9c457bc06_Frame%2012.jpg',
    cardName: 'Before I Disappear',
    labels: ['Level Design', 'Modeling', 'Game Design', 'Programming', 'VFX'],
    params: ['Engine: UE4', 'Platform: HTML', 'Crew: 1', 'Genre: 3D Platformer'],
    description: `Игра была разработана мной на Weekly Game Jam 146 - тема “Invisible”. Игрок управляет персонажем, видимая оболочка которого начинает убывать как только он сходит со стартовой площадки. Игроку необходимо довести персонажа до следующей контрольной точки, попутно преодолевая препятствия и решая головоломки. Задачу игрока усложняет убывающая со временем видимость персонажа, что заставляет его двигаться быстрее. При полной утрате видимости, игрок способен и дальше управлять персонажем, но контроль становится значительнее сложнее. За время работы над проектом я улучшил навыки дизайна уровней и навыки создания визуальных эффектов.`,
    videoUrl: 'https://player.vimeo.com/video/422828622?title=0&byline=0&portrait=0',
    gameUrl: 'https://wild-fat.itch.io/before-i-disappear',
},
  {
    id: 'Darkest-Path',
    title: '3D PLATFORMER',
    image: 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/5ecd266bb0f99e9454cbdf57_DP.jpg',
    cardName: 'Darkest Path',
    labels: ['Level Design', 'Game Design', 'Programming', 'VFX'],
    params: ['Engine: UE4', 'Platform: HTML', 'Crew: 1', 'Genre: 3D Platformer'],
    description: `Игра была разработана мной на Weekly Game Jam 144 - тема “In the dark”. Задача игрока - преодолеть темный путь. Сложность задачи состоит в том, что на пути расположено множество препятствий, а область видимости ограничена одной клеткой в непосредственной близости от персонажа. За время разработки проекта я закрепил свои знания в работе с материалами, углубился в проектирование уровней и баланс сложности.`,
    videoUrl: 'https://player.vimeo.com/video/423376585?title=0&byline=0&portrait=0',
    // gameUrl: 'https://wild-fat.itch.io/darkest-path',
  },
  {
    id: 'death-mortal-conference',
    title: 'ENDLESS RUNNER',
    image: 'https://uploads-ssl.webflow.com/5e42aee008053d8670f84473/5e42e3db7b97a9493b67ad72_Final_map_city%203.png',
    cardName: 'Death Mortal Conference',
    labels: ['2D Graphics', '2D Animation', 'Level Design', 'Modeling', 'Game Design', 'Programming', 'UX/UI'],
    params: ['Engine: UE4', 'Platform: HTML', 'Crew: 4', 'Genre: Endless runner'],
    description: 'Игра в жанре Endless Runner. Разрабатывалась как часть рекламной кампании к Digital Marketing Conference 2019. Из-за высокой сложности игры, каждый заработанный балл приравнивался к одному проценту скидки на билет на конференцию, что составляло порядка 300 рублей, учитывая стоимость билета. Благодаря успешной реализации проекта на платформе HTML, игра запускалась на всех популярных браузерах. На конференции был проведен киберспортивный турнир с призовым фондом.',
    videoUrl: 'https://player.vimeo.com/video/362755415?title=0&byline=0&portrait=0',
    gameUrl: 'https://wild-fat.itch.io/death-mortal-conference',
  },
  {
    id: 'Dum-Spiro-Spero',
    title: 'DIPLOMA PROJECT',
    image: 'https://cdn.prod.website-files.com/5e42e03812bfc67a8b847258/5e42e4027b97a98a7367ad8d_Final_map_city%202.png',
    cardName: 'Dum Spiro Spero',
    labels: ['2D Graphics', 'Modeling', 'Game Design', 'Programming', 'UX/UI', 'VFX'],
    params: ['Engine: UE4', 'Platform: PC, Windows', 'Crew: 3', 'Genre: Sedescroller'],
    description: `Сайдскроллер в сеттинге постапокалипсиса. Действие игры происходит на Земле после глобального потопа. Игроку противостоит неизвестная биологическая угроза, стремительно ассимилирующая подводные формы жизни и распространяющаяся на сохранившиеся людские поселения. Игроку предстоит взять на себя управление судном, оборудованным для выполнения подводных работ. Члены экипажа владеют индивидуальным набором характеристик, что позволяет им управлять соответствующим оборудованием на судне и выполнять определенные задачи под водой. Используя навыки членов экипажа, игроку необходимо добыть из-под воды требуемые для заданий объекты и ресурсы для производства снаряжения и улучшений судна.`,
    videoUrl: 'https://player.vimeo.com/video/392308816?title=0&byline=0&portrait=0',
  }
];
