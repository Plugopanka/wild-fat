import { Language, LocalizationTexts } from '../types';
import cubeImage from '../assets/images/cube.jpg';
import cubeIcon from '../assets/images/cube-icon.png';
import heartllImage from '../assets/images/heartll.jpg';
import heartImage from '../assets/images/heart.jpg';

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
      currentProjects: 'CURRENT PROJECTS',
      personalProjects: 'PERSONAL PROJECTS',
      recentProjects: 'RECENT PROJECTS'
    },
    currentProjects: [
      {
        id: 'the-cube',
        title: 'The cube',
        backgroundImage: cubeImage,
        logo: cubeIcon
      },
      {
        id: 'atomic-heart-2',
        title: 'Atomic Heart II',
        backgroundImage: heartllImage,
      }
    ],
    recentProjects: [
      {
        id: 'atomic-heart',
        title: 'Atomic Heart',
        backgroundImage: heartImage,
      },
    ],
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
    competenceDetails: {
      competenceNotFound: 'Competence not found'
    },
    competences: [
      {
        id: 'the-cube',
        title: 'THE CUBE',
        name: 'The Cube Project',
        labels: ['Game Design', 'Technical Design'],
        description: 'An innovative 3D puzzle game featuring unique cube-based mechanics. Developed using advanced game design principles and technical implementation in Unreal Engine.',
        params: ['Engine: Unreal Engine 5', 'Role: Technical Designer', 'Duration: 2+ years', 'Status: In Development'],
        backgroundImage: cubeImage
      },
      {
        id: 'atomic-heart-2',
        title: 'ATOMIC HEART II',
        name: 'Atomic Heart II Development',
        labels: ['Technical Design', 'Systems Design', 'Gameplay Programming'],
        description: 'Contributed to the development of Atomic Heart II as a Technical Game Designer. Focused on gameplay systems, technical implementation, and optimization.',
        params: ['Engine: Unreal Engine 5', 'Role: Technical Designer', 'Duration: 2+ years', 'Status: In Development'],
        backgroundImage: heartllImage
      },
      {
        id: 'atomic-heart',
        title: 'ATOMIC HEART',
        name: 'Atomic Heart Project',
        labels: ['Game Design', 'Technical Design', 'Level Design'],
        description: 'Worked on the original Atomic Heart project as a Technical Game Designer. Contributed to core gameplay mechanics, level design, and technical systems implementation.',
        params: ['Engine: Unreal Engine 4', 'Role: Technical Designer', 'Duration: 3+ years', 'Status: Released'],
        backgroundImage: heartImage
      },
      {
        id: 'Game-Design',
        title: 'GAME DESIGN',
        name: 'Game Design Expertise',
        labels: ['Game Design', 'Level Design', 'Mechanics Design'],
        description: 'Comprehensive experience in game design including mechanics design, level design, and player experience optimization. Specialized in creating engaging gameplay loops and balanced progression systems.',
        params: ['Experience: 5+ years', 'Projects: 15+', 'Specialization: Action, Strategy, Puzzle']
      },
      {
        id: 'Technical-Design',
        title: 'TECHNICAL DESIGN',
        name: 'Technical Game Design',
        labels: ['Technical Design', 'Systems Design', 'Blueprint Programming'],
        description: 'Advanced technical design skills with expertise in Unreal Engine Blueprint programming, systems design, and technical implementation of game mechanics.',
        params: ['Engine: Unreal Engine 4/5', 'Languages: Blueprint, C++', 'Focus: Systems Architecture']
      },
      {
        id: 'UI-UX-Programming',
        title: 'UI/UX PROGRAMMING',
        name: 'User Interface Programming',
        labels: ['UI Programming', 'UX Design', 'Frontend Development'],
        description: 'Specialized in creating intuitive user interfaces and user experiences. Experience with both game UI systems and web-based interfaces.',
        params: ['Platforms: Web, Mobile, Desktop', 'Tools: Figma, Adobe XD', 'Languages: JavaScript, TypeScript']
      },
      {
        id: 'Gameplay-Programming',
        title: 'GAMEPLAY PROGRAMMING',
        name: 'Core Gameplay Programming',
        labels: ['Gameplay Programming', 'C++', 'Blueprint'],
        description: 'Core gameplay programming expertise with focus on player mechanics, AI systems, and game logic implementation.',
        params: ['Languages: C++, Blueprint', 'Focus: Player Mechanics', 'Experience: 3+ years']
      }
    ],
    cardDetailsData: [
      {
        id: 'Caldera',
        articles: []
      },
      {
        id: 'Ground-From-Under-The-Feet',
        articles: [
          {
            title: 'GROUND CONTROL',
            text: [
              `The playing area is divided into 8 parts you have to protect from falling, each of them has its own stabilizer.`,
              `The “Evil Eye” attacks stabilizers in moments of losing an attention to the player, launching them overload. At that stage it starts to cool down itself, getting the heat to the radiator - the big circle around the stabilizer, when the radiator finally fills up, the platform begins to fall and the player has to leave the dangerous area quickly.`,
              `To prevent the falling of the platform you have to shoot its stabilizer to cooldown, until its fade to black again.`,
              `However, heating radiators have an additional sense. Excepting this indicates the current progress of losing the platform it also deals damage to character, when he comes too close, it helps to avoid hiding behind the stabilizer.`,
            ],
            gif: 'https://player.vimeo.com/video/750544281?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0',
          },
          {
            title: 'ENEMIES',
            text: [
              `“Evil Eye” - has two attack phases. On the first stage it chases the character with its laser beam. On the second one it switches to attack stabilizers.`,
              `“Evil robots” - dozens of bad guys who chase the character to eliminate him. But they are useful at the same time, because of bringing the energy that rapidly consumes in gameplay. `,
              `To reach the flow state, it was a couple of iterations by balancing energy consuming speed, amount of energy and HP that players can get from defeated enemies, their health and output damage.`,
            ],
          },
          {
            title: 'DASH',
            text: [
              `Player’s ability that allows him to avoid dangerous situations and helps to shift from falling platforms. I also spend some time implementing the nice looking effect that accompanies it.`,
            ],
          }
        ]
      },
      {
        id: 'Phone-Rage',
        articles: []
      },
      {
        id: 'Helicopter-HUD',
        articles: []
      },
      {
        id: 'Eggs-Delivery',
        articles: [
          {
            title: 'Camera Position',
            text: [
              `Initially, the camera was positioned to the side of the car, which was intended to create additional difficulty when passing the track. After collecting player feedback, it became clear that completing the distance was quite difficult even without this detail. I decided to move the camera to the standard position behind the car.`
            ],
            gif: 'https://player.vimeo.com/video/423380063?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Car Stability',
            text: [
              `In the first version of the game, the car body was positioned on the roof of the car and exceeded it in area, which caused players to often encounter car rollovers on turns. I took this into account when creating the car model and positioned the wheels at a greater distance from each other, thus creating additional stability.`
            ],
          },
          {
            title: 'Results',
            text: [
              `The project helped improve level design skills and work in Blender, as well as gain experience in creating racing games.`
            ],
            gif: 'https://player.vimeo.com/video/423380063?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          }
        ]
      },
      {
        id: 'Before-I-Disappear',
        articles: [
          {
            title: 'Decreasing Visibility',
            text: [
              `To implement this mechanic, I wrote a material whose property dynamically changes when the timer starts. Visibility is restored at checkpoints and when picking up active game objects that are positioned to guide the player in the direction of further movement through the level, and sometimes positioned in hard-to-reach places, provoking the player to take risks.`
            ],
          },
          {
            title: 'Doors',
            text: [
              `The map contains doors that can only be passed through in visible form. After passing through the doors, the character immediately loses visibility and the ability to return. These objects are used as time limiters for passing certain sections of the map.`,
              `Also, one of the checkpoints gives a choice of path, and one of the options involves crossing such a door, behind which there is a relatively simple route that serves to teach players to control an invisible character.`
            ],
          },
          {
            title: 'Auxiliary Surface',
            text: [
              `Testing of the first versions showed that players found it very difficult to control the character in invisible form. To fix this situation, I created a surface that, when stepped on, leaves traces and makes a different sound.`,
              `Such surfaces serve an auxiliary function and are located in places where the player needs to control an invisible character.`
            ],
            gif: 'https://player.vimeo.com/video/423380063?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          }
        ]
      },
      {
        id: 'Darkest-Path',
        articles: [
          {
            title: 'Visibility Area',
            text: [
              `Gameplay is built on limiting map visibility. The player sees a small area in close proximity to the character. The mechanic is implemented by dynamically changing the material parameter.`
            ],
          },
          {
            title: 'Level Design',
            text: [
              `When the player gets used to the controls, the difficulty begins to increase. Along the way, there are gaps that anyone who rushes will definitely fall into. Encountering such traps forces the player to move more carefully.`
            ],
          },
          {
            title: 'Pushing Plate',
            text: [
              `The level contains plates that, when stepped on, give the character momentum in the direction of their movement. Since the player cannot see the landing site, this creates an exciting effect.`
            ],
          }
        ]
      },
      {
        id: 'death-mortal-conference',
        articles: [
          {
            title: 'Score Accumulation',
            text: [
              `Throughout the distance, badges with the DMC logo are placed, collecting which the player earns points. The logo was also developed specifically for the game.`,
              `Badge spawning occurs randomly, often placing them in extremely hard-to-reach places, creating temptation for the player to pick them up with great risk.`
            ],
            gif: 'https://player.vimeo.com/video/394252045?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Maintaining Player Flow State',
            text: [
              `Given that the gameplay is quite difficult, the ability to instantly restart was implemented to maintain the player's mood for the challenge as long as possible.`,
              `The music doesn't stop, leaving the feeling of a continuing challenge. The malicious mockery after death is also aimed at maintaining this mood.`
            ],
            gif: 'https://player.vimeo.com/video/394254062?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Enemies',
            text: [
              `The main task of the project was to represent locally famous persons in the game in a very short time.`,
              `And because of hard time restrictions and no one of us was familiar enough with 3D software we decided to make them as animated sprites, just with only unique face.`
            ],
            gif: 'https://player.vimeo.com/video/394305677?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          }
        ]
      },
      {
        id: 'Dum-Spiro-Spero',
        articles: [
          {
            title: 'World Map and Location Transitions',
            text: [
              `Transitions between locations are carried out in the main game menu from the "map" section. Locations on the map are divided into 3 types - city, settlement and directly game location, each type has its corresponding icon.`,
              `By clicking on the location icon, the player receives information about this place, which consists of data about possible danger in this zone, depth and presence of valuables.`,
              `The amount of information depends on whether the player has already visited this location and what information they managed to acquire by this point in the game. For completing some additional tasks, the player receives information about locations as a reward.`
            ],
            gif: 'https://player.vimeo.com/video/397058315?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Sonar Operation',
            text: [
              `Before diving underwater, it is necessary to conduct reconnaissance of the bottom for the sought-after valuables.`,
              `For these purposes, the vessel can be equipped with a sonar module, with which the player can get a drawing of the bottom relief, determine the depth of the object, and by improving the module, get information about the type of object.`
            ],
            gif: 'https://player.vimeo.com/video/392293778?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Item Collection and Crafting',
            text: [
              `Underwater there are many items of value to the player. The value of loot depends on the depth of occurrence and factors affecting the complexity of item extraction.`,
              `From the collected material, the player can create equipment items, weapons, ammunition, perform repairs and improve the vessel. Crafting is carried out on the vessel using the workbench module.`
            ],
            gif: 'https://player.vimeo.com/video/392543332?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Air Tank Reserve Indication',
            text: [
              `Game tests showed that many players overlook the interface element informing about the character's air reserve.`,
              `For convenience of monitoring the character's condition, I decided to equip the character's air tank with a color indicator, the color change of which will additionally inform the player about danger.`,
              `Subsequent tests showed that this method solved the problem.`
            ],
            gif: 'https://player.vimeo.com/video/392541986?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Raising Sunken Objects',
            text: [
              `Objects underwater are divided into two categories - loot and aggregates.`,
              `Loot is placed in the character's inventory, while aggregates must be loaded onto the vessel and delivered to the settlement to complete mission objectives or extract useful components from them for further use.`,
              `To raise aggregates to the surface, characters must have lifting parachutes in their inventory, with which to perform the lift and load onto the vessel`
            ],
            gif: 'https://player.vimeo.com/video/392327021?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Trading, Team Development, Vessel Upgrades',
            text: [
              `While in the city between missions, the player can engage in vessel improvement and repair, trading, crew hiring and receiving new missions.`
            ],
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
      currentProjects: 'ТЕКУЩИЕ ПРОЕКТЫ',
      personalProjects: 'ЛИЧНЫЕ ПРОЕКТЫ',
      recentProjects: 'ПОСЛЕДНИЕ ПРОЕКТЫ'
    },
    currentProjects: [
      {
        id: 'the-cube',
        title: 'Куб',
        backgroundImage: cubeImage,
        logo: cubeIcon
      },
      {
        id: 'atomic-heart-2',
        title: 'Atomic Heart II',
        backgroundImage: 'https://cdn.prod.website-files.com/5e42aee008053d8670f84473/631fac9e7e50a7b2b5b9366f_1673765062-1_1390x600.jpg',
        logo: 'https://cdn.prod.website-files.com/5e42aee008053d8670f84473/631fac9e7e50a7b2b5b9366f_1673765062-1_1390x600.jpg'
      }
    ],
    recentProjects: [
      {
        id: 'atomic-heart',
        title: 'Atomic Heart',
        backgroundImage: 'https://cdn.prod.website-files.com/5e42aee008053d8670f84473/631fac9e7e50a7b2b5b9366f_1673765062-1_1390x600.jpg'
      }
    ],
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
    competenceDetails: {
      competenceNotFound: 'Компетенция не найдена'
    },
    competences: [
      {
        id: 'the-cube',
        title: 'THE CUBE',
        name: 'Проект The Cube',
        labels: ['Игровой дизайн', 'Технический дизайн', '3D разработка'],
        description: 'Инновационная 3D головоломка с уникальными механиками на основе кубов. Разработана с использованием передовых принципов игрового дизайна и технической реализации в Unreal Engine.',
        params: ['Движок: Unreal Engine 5', 'Роль: Технический дизайнер','Длительность: 2+ года', 'Статус: В разработке'],
        backgroundImage: cubeImage
      },
      {
        id: 'atomic-heart-2',
        title: 'ATOMIC HEART II',
        name: 'Разработка Atomic Heart II',
        labels: ['Технический дизайн', 'Дизайн систем', 'Программирование геймплея'],
        description: 'Участвовал в разработке Atomic Heart II в качестве технического игрового дизайнера. Сосредоточился на игровых системах, технической реализации и оптимизации.',
        params: ['Движок: Unreal Engine 5', 'Роль: Технический дизайнер', 'Длительность: 2+ года', 'Статус: В разработке'],
        backgroundImage: heartllImage
      },
      {
        id: 'atomic-heart',
        title: 'ATOMIC HEART',
        name: 'Проект Atomic Heart',
        labels: ['Игровой дизайн', 'Технический дизайн', 'Дизайн уровней'],
        description: 'Работал над оригинальным проектом Atomic Heart в качестве технического игрового дизайнера. Внес вклад в основные игровые механики, дизайн уровней и техническую реализацию систем.',
        params: ['Движок: Unreal Engine 4', 'Роль: Технический дизайнер', 'Длительность: 3+ года', 'Статус: Выпущена'],
        backgroundImage: heartImage
      },
      {
        id: 'Game-Design',
        title: 'ИГРОВОЙ ДИЗАЙН',
        name: 'Экспертиза в игровом дизайне',
        labels: ['Игровой дизайн', 'Дизайн уровней', 'Дизайн механик'],
        description: 'Комплексный опыт в игровом дизайне, включая дизайн механик, дизайн уровней и оптимизацию игрового опыта. Специализация на создании увлекательных игровых циклов и сбалансированных систем прогрессии.',
        params: ['Опыт: 5+ лет', 'Проекты: 15+', 'Специализация: Экшен, Стратегия, Пазлы']
      },
      {
        id: 'Technical-Design',
        title: 'ТЕХНИЧЕСКИЙ ДИЗАЙН',
        name: 'Технический игровой дизайн',
        labels: ['Технический дизайн', 'Дизайн систем', 'Программирование Blueprint'],
        description: 'Продвинутые навыки технического дизайна с экспертизой в программировании Unreal Engine Blueprint, дизайне систем и технической реализации игровых механик.',
        params: ['Движок: Unreal Engine 4/5', 'Языки: Blueprint, C++', 'Фокус: Архитектура систем']
      },
      {
        id: 'UI-UX-Programming',
        title: 'UI/UX ПРОГРАММИРОВАНИЕ',
        name: 'Программирование пользовательских интерфейсов',
        labels: ['Программирование UI', 'UX дизайн', 'Frontend разработка'],
        description: 'Специализация на создании интуитивных пользовательских интерфейсов и пользовательского опыта. Опыт работы как с игровыми UI системами, так и с веб-интерфейсами.',
        params: ['Платформы: Веб, Мобильные, Десктоп', 'Инструменты: Figma, Adobe XD', 'Языки: JavaScript, TypeScript']
      },
      {
        id: 'Gameplay-Programming',
        title: 'ПРОГРАММИРОВАНИЕ ГЕЙМПЛЕЯ',
        name: 'Основное программирование геймплея',
        labels: ['Программирование геймплея', 'C++', 'Blueprint'],
        description: 'Экспертиза в основном программировании геймплея с фокусом на механики игрока, системы ИИ и реализацию игровой логики.',
        params: ['Языки: C++, Blueprint', 'Фокус: Механики игрока', 'Опыт: 3+ года']
      }
    ],
    cardDetailsData: [
      {
        id: 'Caldera',
        articles: []
      },
      {
        id: 'Ground-From-Under-The-Feet',
        articles: [
          {
            title: 'КОНТРОЛЬ ТЕРРИТОРИИ',
            text: [
              `Игровая область разделена на 8 частей, которые нужно защищать от падения, каждая из них имеет свой стабилизатор.`,
              `"Злой глаз" атакует стабилизаторы в моменты, когда теряет внимание к игроку, запуская их перегрузку. На этом этапе он начинает остывать, передавая тепло радиатору - большому кругу вокруг стабилизатора. Когда радиатор полностью заполняется, платформа начинает падать, и игроку необходимо быстро покинуть опасную зону.`,
              `Чтобы предотвратить падение платформы, нужно стрелять по её стабилизатору для охлаждения, пока он снова не потемнеет.`,
              `Однако нагревающиеся радиаторы имеют дополнительный смысл. Помимо того, что они показывают текущий прогресс потери платформы, они также наносят урон персонажу, когда он подходит слишком близко, это помогает избежать укрытия за стабилизатором.`,
            ],
            gif: 'https://player.vimeo.com/video/750544281?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0',
          },
          {
            title: 'ВРАГИ',
            text: [
              `"Злой глаз" - имеет две фазы атаки. На первом этапе он преследует персонажа своим лазерным лучом. На втором переключается на атаку стабилизаторов.`,
              `"Злые роботы" - десятки плохих парней, которые преследуют персонажа, чтобы уничтожить его. Но в то же время они полезны, потому что приносят энергию, которая быстро расходуется в геймплее.`,
              `Чтобы достичь состояния потока, было проведено несколько итераций по балансировке скорости расхода энергии, количества энергии и HP, которые игроки могут получить от побеждённых врагов, их здоровья и наносимого урона.`,
            ],
          },
          {
            title: 'РЫВОК',
            text: [
              `Способность игрока, которая позволяет ему избегать опасных ситуаций и помогает перемещаться с падающих платформ. Я также потратил некоторое время на реализацию красивого визуального эффекта, который её сопровождает.`,
            ],
          }
        ]
      },
      {
        id: 'Phone-Rage',
        articles: []
      },
      {
        id: 'Helicopter-HUD',
        articles: []
      },
      {
        id: 'Eggs-Delivery',
        articles: [
          {
            title: 'Положение камеры',
            text: [
              `Изначально камера была установлена сбоку автомобиля, что по задумке создавало дополнительную сложность при прохождении трека. Собрав отзывы игроков стало понятно, что пройти дистанцию достаточно сложно и без этой детали. Я принял решение перенести камеру в стандартное положение за автомобиль.`
            ],
            gif: 'https://player.vimeo.com/video/423380063?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Устойчивость автомобиля',
            text: [
              `В первой версии игры, кузов автомобиля располагался на крыше автомобиля и превосходил его по площади, из-за чего игроки часто сталкивались с опрокидыванием машины на поворотах. Я учел этот момент при создании модели автомобиля и расположил колеса большем удалении друг от друга, создав таким образом дополнительную устойчивость.`
            ],
          },
          {
            title: 'Результаты',
            text: [
              `Проект помог улучшить навыки дизайна уровней и работы в Blender, а также получить опыт создания игр в жанре гонок.`
            ],
            gif: 'https://player.vimeo.com/video/423380063?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          }
        ]
      },
      {
        id: 'Before-I-Disappear',
        articles: [
          {
            title: 'Убывающая видимость',
            text: [
              `Для реализации этой механики я написал материал, свойство которого динамически меняется при запуске таймера. Видимость восстанавливается на чекпоинтах и при подборе активных игровых объектов, которые расположены таким образом. чтобы указывать игроку направление дальнейшего движения по уровню, а иногда расположены в труднодоступных местах, провоцируя игрока на риск.`
            ],
          },
          {
            title: 'Двери',
            text: [
              `На карте расположены двери, пройти через которые можно только в видимой форме. Пройдя через двери персонаж сразу теряет видимость и возможность вернуться назад. Эти объекты используются как ограничители времени прохождения некоторых участков карты.`,
              `Также один из чекпоинтов дает выбор пути, и один из вариантов предполагает пересечение такой двери, за которой находится относительно несложный маршрут, выполняющий функцию обучения игроков управлению невидимым персонажем.`
            ],
          },
          {
            title: 'Вспомогательная поверхность',
            text: [
              `Тестирование первых версий показало, что игрокам очень сложно управлять персонажем в невидимой форме. Чтобы исправить ситуацию, я создал поверхность, наступая на которую персонаж оставляет следы, и издает отличающийся звук.`,
              `Такие поверхности выполняют вспомогательную функцию и расположены в местах, где игроку необходимо управлять невидимым персонажем.`
            ],
            gif: 'https://player.vimeo.com/video/423380063?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          }
        ]
      },
      {
        id: 'Darkest-Path',
        articles: [
          {
            title: 'Область видимости',
            text: [
              `Геймплей построен на ограничении видимости карты. Игрок видит небольшую область в непосредственной близости к персонажу. Механика реализована путем динамического изменения параметра материала.`
            ],
          },
          {
            title: 'Дизайн уровня',
            text: [
              `Когда игрок привыкает к управлению, сложность начинает нарастать. На пути встречаются провалы, в которые обязательно угодит тот, кто будет торопиться. Встреча с такими ловушками заставляет игрока двигаться аккуратнее.`
            ],
          },
          {
            title: 'Толкающая плита',
            text: [
              `На уровне расположены плиты, наступив на которые персонажу придается импульс в направлении его движения. Так как игрок не видит место приземления это создает захватывающий эффект.`
            ],
          }
        ]
      },
      {
        id: 'death-mortal-conference',
        articles: [
          {
            title: 'Накопление очков',
            text: [
              `На протяжении дистанции располагаются значки с логотипом DMC, собирая которые игрок зарабатывает очки. Логотип так-же был разработан специально для игры.`,
              `Спавн значков происходит рандомно, зачастую размещая их в крайне труднодоступных местах, создавая для игрока соблазн подобрать его с большим риском.`
            ],
            gif: 'https://player.vimeo.com/video/394252045?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Поддержание состояния потока у игроков',
            text: [
              `Ввиду того, что геймплей достаточно сложен, была реализована возможность мгновенного рестарта, с целью как можно дольше сохранить настрой игрока на испытание.`,
              `Музыка не прерывается, оставляя ощущение продолжающегося испытания. Злобная насмешка после смерти также нацелена на поддержание этого настроя.`
            ],
            gif: 'https://player.vimeo.com/video/394254062?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Враги',
            text: [
              `Основной задачей проекта было представить в игре местных знаменитостей за очень короткое время.`,
              `И из-за жестких временных ограничений и того, что никто из нас не был достаточно знаком с 3D-программным обеспечением, мы решили сделать их в виде анимированных спрайтов, только с уникальным лицом.`
            ],
            gif: 'https://player.vimeo.com/video/394305677?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          }
        ]
      },
      {
        id: 'Dum-Spiro-Spero',
        articles: [
          {
            title: 'Карта мира и переходы между локациями',
            text: [
              `Переход между локациями осуществляется в главном меню игры из раздела "карта". Локации на карте разделены на 3 типа - город, поселение и непосредственно игровая локация, каждый тип имеет соответствующую иконку.`,
              `Кликнув на иконку локации игрок получает информацию об этом месте, которая состоит из данных о возможной опасности в этой зоне, глубине и наличии ценностей.`,
              `Объем информации зависит от того, посещал ли уже игрок эту локацию и какими сведениями ему удалось обзавестись к данному моменту игры. За выполнение некоторых дополнительных заданий игрок получает информацию о локациях в награду.`
            ],
            gif: 'https://player.vimeo.com/video/397058315?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Работа сонара',
            text: [
              `Перед спуском под воду необходимо провести разведку дна на предмет искомых ценностей.`,
              `Для этих целей судно может быть оборудовано модулем сонар, при помощи которого игрок может получить рисунок рельефа дна, определить глубину нахождения объекта, а улучшив модуль получить информацию о типе объекта.`
            ],
            gif: 'https://player.vimeo.com/video/392293778?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Сбор предметов и крафт',
            text: [
              `Под водой находится множество представляющего ценность для игрока лута. Ценность лута зависит от глубины залегания и факторов, влияющих на сложность изъятия предмета.`,
              `Из собранного материала игрок может создавать предметы снаряжения, вооружение, боеприпасы, производить ремонт и улучшать судно. Крафт осуществляется на судне при помощи модуля верстак.`
            ],
            gif: 'https://player.vimeo.com/video/392543332?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Индикация запаса воздуха на баллонах',
            text: [
              `Игровые тесты показали, что многие игроки упускают из виду элемент интерфейса, информирующий о запасе воздуха у персонажа.`,
              `Для удобства контроля состояния персонажа, я решил оснастить воздушный баллон персонажа цветовой индикацией, изменение цвета которой дополнительно сообщит игроку об опасности.`,
              `Последующие тесты показали, что этот способ решил проблему.`
            ],
            gif: 'https://player.vimeo.com/video/392541986?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Подъем затонувших объектов',
            text: [
              `Объекты под водой делятся на две категории - лут и агрегаты.`,
              `Лут размещается в инвентаре персонажа, в то время как агрегаты необходимо погрузить на борт судна и доставить в поселение для выполнения целей задания или изъятия из них полезных компонентов для дальнейшего применения.`,
              `Для подъема агрегатов на поверхность персонажи должны иметь в инвентаре подъемные парашюты, при помощи которых осуществить подъем и погрузить на борт`
            ],
            gif: 'https://player.vimeo.com/video/392327021?title=0&byline=0&portrait=0&autoplay=1&background=1&loop=1&muted=1&autopause=0'
          },
          {
            title: 'Торговля, развитие команды, улучшения судна',
            text: [
              `Находясь в городе между заданиями, игрок может заняться улучшением и ремонтом судна, торговлей, наймом экипажа и получением новых заданий.`
            ],
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
