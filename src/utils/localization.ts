export type Language = 'en' | 'ru';

export interface LocalizationTexts {
  // Header
  header: {
    works: string;
    about: string;
    downloadCv: string;
  };
  
  // CardDetails
  cardDetails: {
    additionalMaterials: string;
    cardNotFound: string;
    noImage: string;
  };
  
  // WorkDetails
  workDetails: {
    workNotFound: string;
  };
  
  // About page
  about: {
    title: string;
    description: string[];
    skills: string[];
    contactText: string;
    contactTextEnd: string;
  };
  
  // Works page
  works: {
    title: string;
    currentProject: string;
    personalProjects: string;
  };
  
  // EducationList
  education: {
    title: string;
    items: Array<{
      period: string;
      institution: string;
      degree: string;
    }>;
  };
  
  // Works Cards
  worksCards: Array<{
    id: string;
    title: string;
    cardName: string;
    labels: string[];
    description: string;
    params: string[];
  }>;
  
  // Card Details
  cardDetailsData: Array<{
    id: string;
    articles: Array<{
      title: string;
      text: string;
    }>;
  }>;
}

export const LOCALIZATION: Record<Language, LocalizationTexts> = {
  en: {
    header: {
      works: 'Works',
      about: 'About',
      downloadCv: 'download cv'
    },
    cardDetails: {
      additionalMaterials: 'Additional Materials',
      cardNotFound: 'Card details not found',
      noImage: 'No image'
    },
    workDetails: {
      workNotFound: 'Work not found'
    },
    about: {
      title: 'About',
      description: [
        `I've been working in game development for the last 5 years in different roles, such as Game Designer, Technical Designer, UX Programmer, Gameplay Programmer. Currently I'm working as a Technical Game Designer at Mundfish for the Atomic Heart project.`,
        `I also have past experience working as a UX/UI Designer, which is extremely useful in my routine job.`,
        `My favorite instruments are Unreal Engine and Visual Studio / Rider, but I'm also familiar with other popular engines such as Unity and Godot.`,
        `In my free time, I enjoy traveling by motorcycle, going to the gym and taking part in game jams.`
      ],
      skills: [
        'Game Design',
        'UX/UI',
        'UI Programming',
        'Technical Design',
        'Gameplay Programming',
        'Level Design',
        '2D Graphics',
        'Modeling',
        'VFX'
      ],
      contactText: 'You may email me',
      contactTextEnd: 'or contact via social network.'
    },
    works: {
      title: 'Works',
      currentProject: 'CURRENT PROJECT',
      personalProjects: 'PERSONAL PROJECTS'
    },
    education: {
      title: 'Education',
      items: [
        {
          period: '2015 - 2019',
          institution: 'Moscow State University of Technology and Management',
          degree: 'Bachelor\'s degree in Information Systems and Technologies'
        },
        {
          period: '2019 - 2021',
          institution: 'Moscow State University of Technology and Management',
          degree: 'Master\'s degree in Information Systems and Technologies'
        }
      ]
    },
    worksCards: [
      {
        id: 'Caldera',
        title: 'STRATEGY',
        cardName: 'Caldera',
        labels: ['Game Design', 'Programming', 'UX/UI'],
        params: ['Engine: UE4', 'Platform: PC, Windows', 'Crew: 2', 'Genre: Strategy'],
        description: 'GMTK Jam 2022'
      },
      {
        id: 'Ground-From-Under-The-Feet',
        title: 'TOP DOWN SHOOTER',
        cardName: 'Ground From Under The Feet',
        labels: ['2D Graphics', 'Level Design', 'Modeling', 'Game Design', 'Programming', 'UX/UI'],
        params: ['Engine: UE4', 'Platform: PC, Windows', 'Crew: 1', 'Genre: Top Down Shooter'],
        description: `The game has been developed by myself for Ludum Dare 50 "Delay inevitable" theme for one week. The player's goal is to hold control of the playable area as long as possible. The arena consists of 8 separated platforms, each platform has its own stabilizer which indicates the current state of the platform, when it is overloaded, the platform falls. In the end each platform will fall, and the player has to delay this event. It fits the Jam theme  "Delay inevitable".`
      },
      {
        id: 'Phone-Rage',
        title: 'LIFE SIMULATOR',
        cardName: 'Phone Rage',
        labels: ['Game Design', 'Programming', 'UX/UI'],
        params: ['Engine: UE4', 'Platform: PC, Windows', 'Crew: 2', 'Genre: Life simulation'],
        description: "Everyone experiences anger from time to time. In some situations, it is a natural response. However, what about those times when anger feels extreme or uncontrollable? Phone Rage is an anger issues simulator with human stories. Managing your anger can improve your relationships, reduce your work-related stress, and help you feel healthier. But not here! Deal maximum damage and bare your emotions! Don't be a bore and find the most valuable things to destroy. The most focused observant gamers will beat the game. The game was developed in 3 days for Dani's Basement Jam #2."
      },
      {
        id: 'Helicopter-HUD',
        title: 'FIREFIGHTER HELICOPTER SIMULATOR',
        cardName: 'Helicopter HUD',
        labels: ['Modeling', 'Programming', 'UI/UX', 'VFX'],
        params: ['Engine: UE4', 'Platform: PC, Windows', 'Crew: 4', 'Genre: Simulator'],
        description: `The Head Up Display prototype for firefighting helicopters equipped with horizontal fire extinguishing systems. Taken as an example the KA-32. The project has been developed during the AR HUD course of Universal University and WayRay. The goal was to invent and show up the prototype of the HUD display system for some transport. Despite the fact that there wasn't a requirement of interactive we decided to represent the idea through a game-like prototype. For three months we made a prototype with most of the designed mechanics working, except this we got the instrument which allows us to test arguable ideas with this and get rid of not the best ones on the very start of the project. All the engine jobs were made by me. The project helped me to improve my knowledge at AR Soft, Render, Shaders, UI Programming, Physics, VFX and Optimisation.`
      },
      {
        id: 'Eggs-Delivery',
        title: 'RACING',
        cardName: 'Eggs Delivery',
        labels: ['Level Design', 'Modeling', 'Game Design', 'Programming', 'UX/UI'],
        params: ['Engine: UE4', 'Platform: HTML', 'Crew: 1', 'Genre: Racing'],
        description: `Game concept developed by me at Ludum Dare 46 - Take It Alive in 10 hours. The player's goal is to deliver the maximum number of egg boxes to the finish line within a limited time. The project's goal was to improve rapid prototyping skills. During development, I studied the features of Wheeled Vehicle and Spline Component. I also improved my level design skills and work in Blender.`
      },
      {
        id: 'Before-I-Disappear',
        title: '3D PLATFORMER',
        cardName: 'Before I Disappear',
        labels: ['Level Design', 'Modeling', 'Game Design', 'Programming', 'VFX'],
        params: ['Engine: UE4', 'Platform: HTML', 'Crew: 1', 'Genre: 3D Platformer'],
        description: `The game was developed by me for Weekly Game Jam 146 - theme "Invisible". The player controls a character whose visible shell begins to disappear as soon as he leaves the starting platform. The player must bring the character to the next checkpoint, overcoming obstacles and solving puzzles. The player's task is complicated by the character's decreasing visibility over time, forcing him to move faster. When visibility is completely lost, the player can still control the character, but control becomes significantly more difficult. During the project, I improved my level design skills and visual effects creation skills.`
      },
      {
        id: 'Darkest-Path',
        title: '3D PLATFORMER',
        cardName: 'Darkest Path',
        labels: ['Level Design', 'Game Design', 'Programming', 'VFX'],
        params: ['Engine: UE4', 'Platform: HTML', 'Crew: 1', 'Genre: 3D Platformer'],
        description: `The game was developed by me for Weekly Game Jam 144 - theme "In the dark". The player's task is to overcome the dark path. The difficulty lies in the many obstacles and limited visibility area. During development, I consolidated my knowledge of working with materials and delved deeper into level design and difficulty balance.`
      },
      {
        id: 'death-mortal-conference',
        title: 'ENDLESS RUNNER',
        cardName: 'Death Mortal Conference',
        labels: ['2D Graphics', '2D Animation', 'Level Design', 'Modeling', 'Game Design', 'Programming', 'UX/UI'],
        params: ['Engine: UE4', 'Platform: HTML', 'Crew: 4', 'Genre: Endless runner'],
        description: 'Endless Runner game. Developed as part of an advertising campaign for Digital Marketing Conference 2019. Due to the high difficulty of the game, each earned point was equal to one percent discount on a conference ticket, which amounted to about 300 rubles, considering the ticket price. Thanks to the successful implementation of the project on the HTML platform, the game launched on all popular browsers. A cybersports tournament with a prize fund was held at the conference.'
      },
      {
        id: 'Dum-Spiro-Spero',
        title: 'DIPLOMA PROJECT',
        cardName: 'Dum Spiro Spero',
        labels: ['2D Graphics', 'Modeling', 'Game Design', 'Programming', 'UX/UI', 'VFX'],
        params: ['Engine: UE4', 'Platform: PC, Windows', 'Crew: 3', 'Genre: Sedescroller'],
        description: `Side-scroller in a post-apocalyptic setting. The game takes place on Earth after a global flood. The player faces an unknown biological threat that rapidly assimilates underwater life forms and spreads to surviving human settlements. The player must take control of a vessel equipped for underwater work. Crew members have individual sets of characteristics that allow them to operate corresponding equipment on the vessel and perform certain tasks underwater. Using the crew's skills, the player must extract required objects and resources from underwater for producing equipment and vessel upgrades.`
      }
    ],
    cardDetailsData: [
      {
        id: 'Caldera',
        articles: [
          {
            title: 'Strategic Planning',
            text: 'Caldera is a strategic game where players must plan their actions several moves ahead. The game mechanics are based on resource balancing and predicting opponent actions.'
          },
          {
            title: 'Gameplay Features',
            text: 'The game features a unique territory and resource management system. Every decision affects the further development of events, creating a deep strategic experience.'
          },
          {
            title: 'Technical Implementation',
            text: 'The project was developed on Unreal Engine 4 using modern rendering technologies and performance optimization.'
          }
        ]
      },
      {
        id: 'Ground-From-Under-The-Feet',
        articles: [
          {
            title: 'Game Concept',
            text: 'Ground From Under The Feet is a unique top-down shooter where the player must maintain control over platforms for as long as possible. Each platform has its own stabilizer that shows the current state.'
          },
          {
            title: 'Platform Falling Mechanics',
            text: 'When a platform becomes overloaded, it falls. The player must delay this event as long as possible, which perfectly fits the jam theme "Delay inevitable".'
          },
          {
            title: 'One Week Development',
            text: 'The game was created in one week for Ludum Dare 50. This required careful planning and rapid design iteration.'
          }
        ]
      },
      {
        id: 'Phone-Rage',
        articles: [
          {
            title: 'Anger Simulator Concept',
            text: 'Phone Rage is an anger issues simulator based on human stories. The game allows players to express their emotions through destroying virtual objects.'
          },
          {
            title: 'Psychological Aspect',
            text: 'The game explores the theme of anger management in the modern world, where technology often becomes a source of stress and frustration.'
          },
          {
            title: '3-Day Development',
            text: 'The project was created in 3 days for Dani\'s Basement Jam #2, which required rapid prototyping and efficient teamwork.'
          }
        ]
      },
      {
        id: 'Helicopter-HUD',
        articles: [
          {
            title: 'AR HUD Prototype',
            text: 'Helicopter HUD is a Head Up Display system prototype for firefighting helicopters equipped with horizontal fire extinguishing systems. The project is based on the KA-32 example.'
          },
          {
            title: 'Educational Project',
            text: 'The project was developed as part of the AR HUD course at Universal University and WayRay. The goal was to invent and demonstrate a HUD system prototype for transport.'
          },
          {
            title: 'Technical Achievements',
            text: 'Over three months, a working prototype with most of the designed mechanics was created. The project helped improve knowledge in AR Soft, Render, Shaders, UI Programming, Physics, VFX and optimization.'
          }
        ]
      },
      {
        id: 'Eggs-Delivery',
        articles: [
          {
            title: 'Racing Concept',
            text: 'Eggs Delivery is a game concept developed at Ludum Dare 46 in 10 hours. The player\'s goal is to deliver the maximum number of egg boxes to the finish line within a limited time.'
          },
          {
            title: 'Learning and Development',
            text: 'The project\'s goal was to improve rapid prototyping skills. During development, I studied the features of Wheeled Vehicle and Spline Component.'
          },
          {
            title: 'Results',
            text: 'The project helped improve level design skills and work in Blender, as well as gain experience in creating racing games.'
          }
        ]
      },
      {
        id: 'Before-I-Disappear',
        articles: [
          {
            title: 'Invisibility Mechanics',
            text: 'Before I Disappear is a 3D platformer where the character\'s visible shell begins to disappear as soon as he leaves the starting platform. This creates a unique gaming experience.'
          },
          {
            title: 'Puzzles and Obstacles',
            text: 'The player must bring the character to the next checkpoint, overcoming obstacles and solving puzzles while controlling the decreasing visibility.'
          },
          {
            title: 'Weekly Game Jam 146',
            text: 'The game was developed for Weekly Game Jam 146 on the theme "Invisible". The project helped improve level design skills and visual effects creation.'
          }
        ]
      },
      {
        id: 'Darkest-Path',
        articles: [
          {
            title: 'Dark Path',
            text: 'Darkest Path is a game where the player\'s task is to overcome a dark path. The difficulty lies in the many obstacles and limited visibility area.'
          },
          {
            title: 'Limited Visibility',
            text: 'The visibility area is limited to one cell in the immediate vicinity of the character, creating an atmosphere of tension and requiring careful planning.'
          },
          {
            title: 'Weekly Game Jam 144',
            text: 'The game was developed for Weekly Game Jam 144 on the theme "In the dark". The project helped consolidate knowledge in working with materials and delve deeper into level design.'
          }
        ]
      },
      {
        id: 'death-mortal-conference',
        articles: [
          {
            title: 'Endless Runner',
            text: 'Death Mortal Conference is an Endless Runner game developed as part of an advertising campaign for Digital Marketing Conference 2019.'
          },
          {
            title: 'Marketing Campaign',
            text: 'Due to the high difficulty of the game, each earned point was equal to one percent discount on a conference ticket, which amounted to about 300 rubles.'
          },
          {
            title: 'Cybersports Tournament',
            text: 'Thanks to the successful implementation of the project on the HTML platform, the game launched on all popular browsers. A cybersports tournament with a prize fund was held at the conference.'
          }
        ]
      },
      {
        id: 'Dum-Spiro-Spero',
        articles: [
          {
            title: 'Diploma Project',
            text: 'Dum Spiro Spero is a side-scroller in a post-apocalyptic setting. The action takes place on Earth after a global flood, where the player faces an unknown biological threat.'
          },
          {
            title: 'Underwater Work',
            text: 'The player controls a vessel equipped for underwater work. Crew members have individual sets of characteristics for operating equipment.'
          },
          {
            title: 'Resources and Upgrades',
            text: 'Using the crew\'s skills, the player must extract required objects and resources from underwater for producing equipment and vessel upgrades.'
          }
        ]
      }
    ]
  },
  ru: {
    header: {
      works: 'Работы',
      about: 'О себе',
      downloadCv: 'скачать резюме'
    },
    cardDetails: {
      additionalMaterials: 'Дополнительные материалы',
      cardNotFound: 'Детали карточки не найдены',
      noImage: 'Нет изображения'
    },
    workDetails: {
      workNotFound: 'Работа не найдена'
    },
    about: {
      title: 'О себе',
      description: [
        `Я работаю в игровой разработке последние 5 лет в различных ролях, таких как Game Designer, Technical Designer, UX Programmer, Gameplay Programmer. В настоящее время я работаю Technical Game Designer в Mundfish над проектом Atomic Heart.`,
        `У меня также есть опыт работы в качестве UX/UI Designer, что крайне полезно в моей повседневной работе.`,
        `Мои любимые инструменты - Unreal Engine и Visual Studio / Rider, но я также знаком с другими популярными движками, такими как Unity и Godot.`,
        `В свободное время я люблю путешествовать на мотоцикле, ходить в спортзал и участвовать в игровых джемах.`
      ],
      skills: [
        'Игровой дизайн',
        'UX/UI',
        'Программирование UI',
        'Технический дизайн',
        'Программирование геймплея',
        'Дизайн уровней',
        '2D графика',
        'Моделирование',
        'VFX'
      ],
      contactText: 'Вы можете написать мне на',
      contactTextEnd: 'или связаться через социальные сети.'
    },
    works: {
      title: 'Работы',
      currentProject: 'ТЕКУЩИЙ ПРОЕКТ',
      personalProjects: 'ЛИЧНЫЕ ПРОЕКТЫ'
    },
    education: {
      title: 'Образование',
      items: [
        {
          period: '2015 - 2019',
          institution: 'Московский государственный университет технологий и управления',
          degree: 'Бакалавр по направлению "Информационные системы и технологии"'
        },
        {
          period: '2019 - 2021',
          institution: 'Московский государственный университет технологий и управления',
          degree: 'Магистр по направлению "Информационные системы и технологии"'
        }
      ]
    },
    worksCards: [
      {
        id: 'Caldera',
        title: 'STRATEGY',
        cardName: 'Caldera',
        labels: ['Игровой дизайн', 'Программирование', 'UX/UI'],
        params: ['Движок: UE4', 'Платформа: PC, Windows', 'Команда: 2', 'Жанр: Стратегия'],
        description: 'GMTK Jam 2022'
      },
      {
        id: 'Ground-From-Under-The-Feet',
        title: 'TOP DOWN SHOOTER',
        cardName: 'Ground From Under The Feet',
        labels: ['2D графика', 'Дизайн уровней', 'Моделирование', 'Игровой дизайн', 'Программирование', 'UX/UI'],
        params: ['Движок: UE4', 'Платформа: PC, Windows', 'Команда: 1', 'Жанр: Top Down Shooter'],
        description: `Игра была разработана мной для Ludum Dare 50 на тему "Delay inevitable" за одну неделю. Цель игрока - удерживать контроль над игровой областью как можно дольше. Арена состоит из 8 разделенных платформ, каждая платформа имеет свой стабилизатор, который показывает текущее состояние платформы. Когда платформа перегружается, она падает. В конце концов каждая платформа упадет, и игрок должен задержать это событие. Это идеально соответствует теме джема "Delay inevitable".`
      },
      {
        id: 'Phone-Rage',
        title: 'LIFE SIMULATOR',
        cardName: 'Phone Rage',
        labels: ['Игровой дизайн', 'Программирование', 'UX/UI'],
        params: ['Движок: UE4', 'Платформа: PC, Windows', 'Команда: 2', 'Жанр: Симулятор жизни'],
        description: "Каждый время от времени испытывает гнев. В некоторых ситуациях это естественная реакция. Однако что насчет тех случаев, когда гнев кажется экстремальным или неконтролируемым? Phone Rage - это симулятор проблем с гневом, основанный на человеческих историях. Управление гневом может улучшить ваши отношения, снизить стресс на работе и помочь вам чувствовать себя здоровее. Но не здесь! Нанесите максимальный урон и обнажите свои эмоции! Не будьте скучными и найдите самые ценные вещи для разрушения. Самые внимательные геймеры пройдут игру. Игра была разработана за 3 дня для Dani's Basement Jam #2."
      },
      {
        id: 'Helicopter-HUD',
        title: 'FIREFIGHTER HELICOPTER SIMULATOR',
        cardName: 'Helicopter HUD',
        labels: ['Моделирование', 'Программирование', 'UI/UX', 'VFX'],
        params: ['Движок: UE4', 'Платформа: PC, Windows', 'Команда: 4', 'Жанр: Симулятор'],
        description: `Прототип системы Head Up Display для пожарных вертолетов, оснащенных горизонтальными системами пожаротушения. В качестве примера взят KA-32. Проект был разработан в рамках курса AR HUD в Universal University и WayRay. Целью было изобрести и продемонстрировать прототип системы HUD для транспорта. Несмотря на то, что не было требования интерактивности, мы решили представить идею через игровой прототип. За три месяца мы создали прототип с большинством запланированных механик, работающих, кроме того, мы получили инструмент, который позволяет нам тестировать спорные идеи и избавляться от не самых лучших в самом начале проекта. Вся работа с движком была выполнена мной. Проект помог мне улучшить знания в области AR Soft, Render, Shaders, UI Programming, Physics, VFX и оптимизации.`
      },
      {
        id: 'Eggs-Delivery',
        title: 'RACING',
        cardName: 'Eggs Delivery',
        labels: ['Дизайн уровней', 'Моделирование', 'Игровой дизайн', 'Программирование', 'UX/UI'],
        params: ['Движок: UE4', 'Платформа: HTML', 'Команда: 1', 'Жанр: Гонки'],
        description: `Концепт игры был разработан мной на гейм джеме Ludum Dare 46 - Take It Alive за 10 часов. Цель игрока - довести до финиша максимальное количество коробок с яйцами за ограниченное время. Целью проекта было улучшить навыки быстрого прототипирования. За время разработки проекта я изучил особенности работы Wheeled Vehicle и Spline Component. Также улучшил навыки дизайна уровней и работы в Blender.`
      },
      {
        id: 'Before-I-Disappear',
        title: '3D PLATFORMER',
        cardName: 'Before I Disappear',
        labels: ['Дизайн уровней', 'Моделирование', 'Игровой дизайн', 'Программирование', 'VFX'],
        params: ['Движок: UE4', 'Платформа: HTML', 'Команда: 1', 'Жанр: 3D платформер'],
        description: `Игра была разработана мной на Weekly Game Jam 146 - тема "Invisible". Игрок управляет персонажем, видимая оболочка которого начинает убывать как только он сходит со стартовой площадки. Игроку необходимо довести персонажа до следующей контрольной точки, попутно преодолевая препятствия и решая головоломки. Задачу игрока усложняет убывающая со временем видимость персонажа, что заставляет его двигаться быстрее. При полной утрате видимости, игрок способен и дальше управлять персонажем, но контроль становится значительнее сложнее. За время работы над проектом я улучшил навыки дизайна уровней и навыки создания визуальных эффектов.`
      },
      {
        id: 'Darkest-Path',
        title: '3D PLATFORMER',
        cardName: 'Darkest Path',
        labels: ['Дизайн уровней', 'Игровой дизайн', 'Программирование', 'VFX'],
        params: ['Движок: UE4', 'Платформа: HTML', 'Команда: 1', 'Жанр: 3D платформер'],
        description: `Игра была разработана мной на Weekly Game Jam 144 - тема "In the dark". Задача игрока - преодолеть темный путь. Сложность задачи состоит в том, что на пути расположено множество препятствий, а область видимости ограничена одной клеткой в непосредственной близости от персонажа. За время разработки проекта я закрепил свои знания в работе с материалами, углубился в проектирование уровней и баланс сложности.`
      },
      {
        id: 'death-mortal-conference',
        title: 'ENDLESS RUNNER',
        cardName: 'Death Mortal Conference',
        labels: ['2D графика', '2D анимация', 'Дизайн уровней', 'Моделирование', 'Игровой дизайн', 'Программирование', 'UX/UI'],
        params: ['Движок: UE4', 'Платформа: HTML', 'Команда: 4', 'Жанр: Endless runner'],
        description: 'Игра в жанре Endless Runner. Разрабатывалась как часть рекламной кампании к Digital Marketing Conference 2019. Из-за высокой сложности игры, каждый заработанный балл приравнивался к одному проценту скидки на билет на конференцию, что составляло порядка 300 рублей, учитывая стоимость билета. Благодаря успешной реализации проекта на платформе HTML, игра запускалась на всех популярных браузерах. На конференции был проведен киберспортивный турнир с призовым фондом.'
      },
      {
        id: 'Dum-Spiro-Spero',
        title: 'DIPLOMA PROJECT',
        cardName: 'Dum Spiro Spero',
        labels: ['2D графика', 'Моделирование', 'Игровой дизайн', 'Программирование', 'UX/UI', 'VFX'],
        params: ['Движок: UE4', 'Платформа: PC, Windows', 'Команда: 3', 'Жанр: Сайдскроллер'],
        description: `Сайдскроллер в сеттинге постапокалипсиса. Действие игры происходит на Земле после глобального потопа. Игроку противостоит неизвестная биологическая угроза, стремительно ассимилирующая подводные формы жизни и распространяющаяся на сохранившиеся людские поселения. Игроку предстоит взять на себя управление судном, оборудованным для выполнения подводных работ. Члены экипажа владеют индивидуальным набором характеристик, что позволяет им управлять соответствующим оборудованием на судне и выполнять определенные задачи под водой. Используя навыки членов экипажа, игроку необходимо добыть из-под воды требуемые для заданий объекты и ресурсы для производства снаряжения и улучшений судна.`
      }
    ],
    cardDetailsData: [
      {
        id: 'Caldera',
        articles: [
          {
            title: 'Strategic Planning',
            text: 'Caldera представляет собой стратегическую игру, где игроки должны планировать свои действия на несколько ходов вперед. Механика игры основана на балансировании ресурсов и предсказании действий противника.'
          },
          {
            title: 'Gameplay Features',
            text: 'Игра отличается уникальной системой управления территориями и ресурсами. Каждое решение влияет на дальнейшее развитие событий, создавая глубокий стратегический опыт.'
          },
          {
            title: 'Technical Implementation',
            text: 'Проект разработан на Unreal Engine 4 с использованием современных технологий рендеринга и оптимизации производительности.'
          }
        ]
      },
      {
        id: 'Ground-From-Under-The-Feet',
        articles: [
          {
            title: 'Game Concept',
            text: 'Ground From Under The Feet - это уникальный топ-даун шутер, где игрок должен удерживать контроль над платформами как можно дольше. Каждая платформа имеет свой стабилизатор, который показывает текущее состояние.'
          },
          {
            title: 'Platform Falling Mechanics',
            text: 'Когда платформа перегружается, она падает. Игрок должен задержать это событие как можно дольше, что идеально соответствует теме джема "Delay inevitable".'
          },
          {
            title: 'One Week Development',
            text: 'Игра была создана за одну неделю для Ludum Dare 50. Это потребовало тщательного планирования и быстрой итерации дизайна.'
          }
        ]
      },
      {
        id: 'Phone-Rage',
        articles: [
          {
            title: 'Anger Simulator Concept',
            text: 'Phone Rage - это симулятор проблем с гневом, основанный на человеческих историях. Игра позволяет игрокам выразить свои эмоции через разрушение виртуальных объектов.'
          },
          {
            title: 'Psychological Aspect',
            text: 'Игра исследует тему управления гневом в современном мире, где технологии часто становятся источником стресса и разочарования.'
          },
          {
            title: '3-Day Development',
            text: 'Проект был создан за 3 дня для Dani\'s Basement Jam #2, что потребовало быстрого прототипирования и эффективной работы в команде.'
          }
        ]
      },
      {
        id: 'Helicopter-HUD',
        articles: [
          {
            title: 'AR HUD Prototype',
            text: 'Helicopter HUD - это прототип системы Head Up Display для пожарных вертолетов, оснащенных горизонтальными системами пожаротушения. Проект основан на примере KA-32.'
          },
          {
            title: 'Educational Project',
            text: 'Проект был разработан в рамках курса AR HUD в Universal University и WayRay. Целью было изобретение и демонстрация прототипа HUD системы для транспорта.'
          },
          {
            title: 'Technical Achievements',
            text: 'За три месяца был создан рабочий прототип с большинством запланированных механик. Проект помог улучшить знания в области AR Soft, Render, Shaders, UI Programming, Physics, VFX и оптимизации.'
          }
        ]
      },
      {
        id: 'Eggs-Delivery',
        articles: [
          {
            title: 'Racing Concept',
            text: 'Eggs Delivery - концепт игры, разработанный на Ludum Dare 46 за 10 часов. Цель игрока - доставить максимальное количество коробок с яйцами до финиша за ограниченное время.'
          },
          {
            title: 'Learning and Development',
            text: 'Целью проекта было улучшение навыков быстрого прототипирования. За время разработки были изучены особенности работы с Wheeled Vehicle и Spline Component.'
          },
          {
            title: 'Results',
            text: 'Проект помог улучшить навыки дизайна уровней и работы в Blender, а также получить опыт создания игр в жанре гонок.'
          }
        ]
      },
      {
        id: 'Before-I-Disappear',
        articles: [
          {
            title: 'Invisibility Mechanics',
            text: 'Before I Disappear - 3D платформер, где видимая оболочка персонажа начинает исчезать, как только он покидает стартовую площадку. Это создает уникальный игровой опыт.'
          },
          {
            title: 'Puzzles and Obstacles',
            text: 'Игрок должен довести персонажа до следующей контрольной точки, преодолевая препятствия и решая головоломки, при этом контролируя убывающую видимость.'
          },
          {
            title: 'Weekly Game Jam 146',
            text: 'Игра была разработана для Weekly Game Jam 146 на тему "Invisible". Проект помог улучшить навыки дизайна уровней и создания визуальных эффектов.'
          }
        ]
      },
      {
        id: 'Darkest-Path',
        articles: [
          {
            title: 'Dark Path',
            text: 'Darkest Path - игра, где задача игрока - преодолеть темный путь. Сложность заключается в множестве препятствий и ограниченной области видимости.'
          },
          {
            title: 'Limited Visibility',
            text: 'Область видимости ограничена одной клеткой в непосредственной близости от персонажа, что создает атмосферу напряженности и требует осторожного планирования.'
          },
          {
            title: 'Weekly Game Jam 144',
            text: 'Игра была разработана для Weekly Game Jam 144 на тему "In the dark". Проект помог закрепить знания в работе с материалами и углубиться в проектирование уровней.'
          }
        ]
      },
      {
        id: 'death-mortal-conference',
        articles: [
          {
            title: 'Endless Runner',
            text: 'Death Mortal Conference - игра в жанре Endless Runner, разработанная как часть рекламной кампании к Digital Marketing Conference 2019.'
          },
          {
            title: 'Marketing Campaign',
            text: 'Из-за высокой сложности игры каждый заработанный балл приравнивался к одному проценту скидки на билет на конференцию, что составляло порядка 300 рублей.'
          },
          {
            title: 'Cybersports Tournament',
            text: 'Благодаря успешной реализации проекта на платформе HTML, игра запускалась на всех популярных браузерах. На конференции был проведен киберспортивный турнир с призовым фондом.'
          }
        ]
      },
      {
        id: 'Dum-Spiro-Spero',
        articles: [
          {
            title: 'Diploma Project',
            text: 'Dum Spiro Spero - сайдскроллер в сеттинге постапокалипсиса. Действие происходит на Земле после глобального потопа, где игроку противостоит неизвестная биологическая угроза.'
          },
          {
            title: 'Underwater Work',
            text: 'Игрок управляет судном, оборудованным для выполнения подводных работ. Члены экипажа владеют индивидуальным набором характеристик для управления оборудованием.'
          },
          {
            title: 'Resources and Upgrades',
            text: 'Используя навыки членов экипажа, игрок должен добыть из-под воды требуемые объекты и ресурсы для производства снаряжения и улучшений судна.'
          }
        ]
      }
    ]
  }
};

export const getCurrentLanguage = (): Language => {
  const stored = sessionStorage.getItem('language') as Language;
  return stored || 'en';
};

export const setLanguage = (language: Language): void => {
  sessionStorage.setItem('language', language);
};
