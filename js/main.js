/**
 * Jeroen van der Meulen - Senior Programmer Portfolio JavaScript
 * Complete interactive module handling modals, filtering, navigation, and accessibility.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Helper to get matching FontAwesome icon for each platform
    function getPlatformIcon(platform) {
        const p = platform.toLowerCase();
        if (p.includes('playstation') || p.includes('ps4') || p.includes('ps5')) {
            return '<i class="fa-brands fa-playstation"></i>';
        }
        if (p.includes('xbox')) {
            return '<i class="fa-brands fa-xbox"></i>';
        }
        if (p.includes('switch') || p.includes('nintendo') || p.includes('stadia') || p.includes('google stadia')) {
            return '<i class="fa-solid fa-gamepad"></i>';
        }
        if (p.includes('pc') || p.includes('windows')) {
            return '<i class="fa-brands fa-windows"></i>';
        }
        if (p.includes('ios') || p.includes('apple')) {
            return '<i class="fa-brands fa-apple"></i>';
        }
        if (p.includes('android')) {
            return '<i class="fa-brands fa-android"></i>';
        }
        if (p.includes('unity') || p.includes('asset store') || p.includes('tool')) {
            return '<i class="fa-brands fa-unity"></i>';
        }
        if (p.includes('steam')) {
            return '<i class="fa-brands fa-steam"></i>';
        }
        return '<i class="fa-solid fa-layer-group"></i>';
    }

    // ----------------------------------------------------------------------
    // 1. Projects Data Store
    // ----------------------------------------------------------------------
    const projectsData = {
        rockhounds: {
            title: "Rockhounds",
            category: "Triangle Studios",
            platforms: ["Steam"],
            youtubeId: "VRhuHSu8nhk",
            description: "<blockquote><i>Rockhounds is a 1-4 player extraction shooter where you and your squad brave the deadliest planets to extract minerals for ruthless Megacorps. Every mission is a fight for survival, wealth, and glory. Will you conquer the chaos and escape with your team? Gear up, and prove you've got what it takes!</i></blockquote>"
                + "<br>Rockhounds is the last game that I worked on during my time at Triangle Studios. In Rockhounds players can play with up to 4 players in online co-op mode where they can complete a variety of mission types with a different set of objectives and challenges.",
            myrole: "After taking over the enemy AI during the development of From Space, I took this project as an opportunity to set up my own AI implementation. In the beginning of the project it started out with Finite State Machines as the enemy behavior was pretty basic (Idle -> Chase -> Attack -> Repeat). But over time the enemy designs became more complex, so I decided to start using a combination of Finite State Machines, Behavior Trees and Utility AI to create the enemy behavior. This allowed the creation of more complex and dynamic enemy behaviors such as humanoid enemies that could fire weapons, throw grenades, dodge roll and move around at the same time.<br>I also was responsible for the enemy spawning system. The game features encounters which are randomly placed throughout the levels and are triggered when the player enters them. Once triggered a Finite State Machine is started to handle the enemy spawning. However, the main mission objective often used a more advanced spawn system by using Utility AI to decide which enemies to spawn and where, and when to spawn them. This allowed for more dynamic and challenging gameplay."
                + "<br><br>Some of my other responsibilities for Rockhounds included:"
                + "<br><ul><li>- Enemy spawning.</li><li>- Player character active and passive abilities.</li><li>- Performance Optimizations.</li><li>- Bug fixing.</li><li>- Implementing several smaller gameplay mechanics such as snapping of buildings to a grid and a bendable mining laser.</li></ul>",
            techStack: ["Unity", "C#", "Online Multiplayer", "Finite State Machines", "Behavior Trees", "Utility AI", "Performance Optimization"],
            projectLink: "https://store.steampowered.com/app/3563060/Rockhounds/"
        },
        fromspacedlc: {
            title: "From Space - DLC",
            category: "Triangle Studios",
            platforms: ["Steam", "Xbox One", "Xbox Series S|X", "PlayStation 4", "PlayStation 5", "Nintendo Switch", "Google Stadia"],
            youtubeId: "kji2L0gp4tk",
            description: "Immediately after the release of From Space we started working on new content to expand the game. Operation Clear skies is DLC which adds a new story mode to the game. And Molten Iron and Concrete Jungle contain additional levels for the Resistance Mode which is an additional game mode that was added in a free update after the release.",
            myrole: "I assisted with implementing the new content for the DLCs such as new weapons, items and perks. And in addition to that I also implemented support for DLC on Nintendo Switch, PlayStation and Stadia.",
            techStack: ["Unity", "C#", "Nintendo Switch SDK", "PlayStation SDK", "Stadia SDK", "Memory Optimization", "Online Multiplayer"],
            projectLink: "https://store.steampowered.com/bundle/39338/From_Space__Resistance_Bundle/"
        },
        fromspace: {
            title: "From Space",
            category: "Triangle Studios",
            platforms: ["Steam", "Xbox One", "Xbox Series S|X", "PlayStation 4", "PlayStation 5", "Nintendo Switch", "Google Stadia"],
            youtubeId: "r5Yq9Wjen4Y",
            description: "<blockquote><i>From Space is a solo and co-op action-shooter for squads up to four players. Take on the challenge of liberating the earth from an alien infestation with your friends, using over-the-top weaponry in a post-apocalyptic world with awesomely stylized graphics. The apocalypse has never been so much fun!</i></blockquote>"
                + "<br>From Space is successor to It came from space and ate our brains which I worked on previously. Instead of local co-op, From Space features full online co-op for up to 4 players.",
            myrole: "My responsibilities for From Space included:"
                + "<br><ul><li>- Both melee and ranged weapons for the player. Including firing, reloading, ammo usage and upgrades.</li><li>- Item pickups.</li><li>- Inventory system.</li><li>- Perk system which allowed players to customize both their character and their weapons.</li><li>- Enemy AI behavior and spawning.</li><li>- Bug fixing.</li><li>- Performance Optimization.</li><li>- Porting the game to Nintendo Switch, PlayStation 4, PlayStation 5 and Stadia. This included getting Peer 2 Peer multiplayer running for all those platforms. No pre existing Transport Layer existed for these platforms so I had to create one for each platform using their respective SDK's.</li></ul>"
                + "<br>Near the end of the project I took over the responsibility for the PlayStation 4 port from one of my colleagues. I had to get familiar with PlayStation's SDK and the specific requirements for porting to the PlayStation 4 as well.<br><br>Besides the PlayStation 4 port I also took over the enemy AI behavior and spawning. I was always quite interested in AI so I took this as a chance to learn how the enemy AI was set up and how I could expand on it. Besides fixing bugs and improving performance I also added some new enemy types such as the Brawler (short range enemy that carries a large shield around), Buster (ranged enemy), Buffer (enemy that tries to keep its distance from the player and buffs its allies) and the Hive Queen (multi-stage final boss). ",
            techStack: ["Unity", "C#", "Nintendo Switch SDK", "PlayStation SDK", "Stadia SDK", "Memory Optimization", "Online Multiplayer"],
            projectLink: "https://store.playstation.com/nl-nl/product/EP4395-PPSA15550_00-0000FROMSPACEPS5"
        },
        mickeystorm: {
            title: "Mickey Storm and the Cursed Mask",
            category: "Triangle Studios",
            platforms: ["Steam", "Xbox One", "PlayStation 4", "Nintendo Switch"],
            youtubeId: "HnbOZqHPgu4",
            description: "<blockquote><i>Welcome to the world's greatest waterpark! In this resort full of wild adventures and thrilling waterslides only you, and your sister, can stop the evil Dr. Fisher! Jump, slide and rush through a series of challenging 2.5D water slides to take him down!</i></blockquote>"
                + "<br>The development of Mickey Storm and the Cursed Mask started immediately after the release of Slide Stars.",
            myrole: "During the development of Mickey Storm and the Cursed Mask I was responsible for the Nintendo Switch version of the game.",
            techStack: ["Unity", "C#", "Nintendo Switch SDK"],
            projectLink: "https://www.nintendo.com/nl-nl/Games/Nintendo-Switch-download-software/Mickey-Storm-and-the-Cursed-Mask-2024185.html"
        },
        slidestars: {
            title: "Slide Stars",
            category: "Triangle Studios",
            platforms: ["Steam", "Xbox One", "PlayStation 4", "Nintendo Switch"],
            youtubeId: "sNIcZcBUZKY",
            description: "<blockquote><i>Slide Stars is a fun-tastic, action-packed party game where players race, grind, and slide their way through outrageous waterpark courses.</i></blockquote>"
                + "<br>The development of Slide Stars took place at the same time as I was working on the rerelease of It came from space and ate our brains. During that time I sometimes switched between projects to assist where needed.",
            myrole: "My responsibilities included:"
                + "<br><ul><li>- Setting everything up for the Nintendo Switch version.</li><li>- Implementing a checkpoint system.</li><li>- Implementing support for ingame advertisements by using <a href='https://www.anzu.io/' target='_blank'>Anzu</a>.</li></ul><br> ",
            techStack: ["Unity", "C#", "Nintendo Switch SDK", "Anzu"],
            projectLink: "https://www.nintendo.com/nl-nl/Games/Nintendo-Switch-games/Slide-Stars-1871775.html"
        },
        fruitfriends: {
            title: "Fruit Friends",
            category: "Triangle Studios",
            platforms: ["iOS", "Android"],
            youtubeId: "N2Va7OPFDJ4",
            description: "<blockquote><i>Fruit Friends is a fun, educational game that is completely suitable for children from 6 years old and was developed on the initiative of Univé.</i></blockquote>"
                + "<br>Development of this game took place while I was mostly working on the rerelease of It came from space and ate our brains. However, I also assisted here and there with the development of Fruit Friends.",
            myrole: "I assisted our lead programmer with the iOS version of the game as I already had experience with that after working on Hyperbrawl Tournament. I also assisted with testing and bugfixing where needed. One of the features I worked on were the leaderboards that kept track of the highscores of players per province in the Netherlands.",
            techStack: ["Unity", "C#"],
            projectLink: "https://www.dutchgamesindustry.nl/game/fruit-friends"
        }
        ,
        hyperbrawl: {
            title: "Hyperbrawl Tournament",
            category: "Triangle Studios",
            platforms: ["Apple Arcade"],
            youtubeId: "8gVfRu0-h_E",
            description: "<blockquote><i>HyperBrawl Tournament is the ultimate arena combat sport. Assemble your team of intergalactic heroes, arm them with outrageous weapons and score your way to victory in classic single player campaigns, couch or online play for up to four players.</i></blockquote>"
                + "<br>Triangle Studios was approached to assist with porting HyperBrawl Tournament to Apple Arcade. ",
            myrole: "I worked together with our lead programmer to port the game to Apple Arcade. Some of my responsibilities included:"
                + "<br><ul><li>- Saving and loading of gamedata.</li><li>- Achievement support.</li><li>- Controller support.</li><li>- Creating builds for iOS, tvOS and macOS.</li></ul><br> ",
            techStack: ["Unity", "C#", "GameKit"],
            projectLink: "https://apple.fandom.com/wiki/HyperBrawl_Tournament"
        }
        ,
        convoy: {
            title: "Convoy: A Tactical Roguelike",
            category: "Triangle Studios",
            platforms: ["Nintendo Switch"],
            youtubeId: "afY3p7qSOAQ",
            description: "<blockquote><i>Convoy is a tactical roguelike-like inspired by Mad Max and FTL in which you cross a wasteland in search of parts for your broken ship. Presented in pixel art and set in a future post-apocalyptic setting, Convoy is a squad based tactical combat roguelike-like in its core.</i></blockquote>"
                + "<br>Convoy is a game which was originally released in 2015 for PC. The original creators of the game approached Triangle Studios with the idea of porting the game to Nintendo Switch. As I just finished the Nintendo Switch port of It came from space and ate our brains I could immediately use that knowledge to start working on the Nintendo Switch port of Convoy.",
            myrole: "I was responsible for porting the game to Nintendo Switch. This included optimizing memory usage as the game originally used far more memory than was available on the Nintendo Switch. But also implementing everything that was needed to get the game through Nintendo's certification process such as saving/loading and supporting the Nintendo Switch's various control options.",
            techStack: ["Unity", "C#", "Nintendo Switch SDK", "Memory Optimization"],
            projectLink: "https://www.nintendo.com/nl-nl/Games/Nintendo-Switch-download-software/Convoy-A-Tactical-Roguelike-1748121.html"
        }
        ,
        icfsaaob: {
            title: "It came from space and ate our brains",
            category: "Triangle Studios",
            platforms: ["Steam", "Xbox One", "PlayStation 4", "Nintendo Switch", "Google Stadia"],
            youtubeId: "CPKpfTElzrM",
            description: "<blockquote><i>A merciless alien species that feeds on human brains (duh) has invaded the Earth. Who can stand up to them? You, obviously! Save the world—or at least yourself. Send aliens to oblivion in It Came From Space and Ate Our Brains—a unique top-down arcade shooter.<br>Addicting gameplay elements, co-op mode, and a way to turn aliens into goo? It's all here! Explore atmospheric locations with a flashlight and a weapon powerful enough to blast those unwanted intergalactic guests back into space. Survive hordes of enemies trying to corner you and get inside your skull… at least until you set a new high score and die like a badass!</i></blockquote>"
                + "<br>It came from space and ate our brains was originally released on Steam in 2015 before I started working for Triangle Studios. In 2019 a rerelease was announced for all major consoles and I took responsibilty over the Nintendo Switch version of the game a platform both Triangle Studios and I had no prior experience with. I had to get familiar with Nintendo's SDK and the specific requirements for porting to the Nintendo Switch. "
                + "<br><br>About a year after the rerelease I revisited this project as we decided to also release the game on Google Stadia as a way to learn how to develop for that platform. Just as with the Nintendo Switch, this was a new platform for both the studio and me. And I was responsible for getting the game running on Stadia and getting it through certification.",
            myrole: "I was responsible for getting the game running on Nintendo Switch and Google Stadia. This included meeting the requirements for each platform, fixing bugs, optimizing performance, implementing platform specific features and getting the game through certification.",
            techStack: ["Unity", "C#", "Console Porting", "Nintendo Switch SDK", "Google Stadia SDK"],
            projectLink: "https://www.nintendo.com/nl-nl/Games/Nintendo-Switch-download-software/It-came-from-space-and-ate-our-brains-1701372.html"
        }
        ,
        truckdriver: {
            title: "Truck Driver",
            category: "Triangle Studios",
            platforms: ["Xbox One", "PlayStation 4"],
            youtubeId: "vS9-C0-R-3A",
            description: "<blockquote><i>Build your career as a Truck Driver! Haul a wide range of cargo and make a name for yourself amongst the local community. Start from the bottom, take on jobs, buy new trucks & parts and become a respected Truck Driver!</i></blockquote>",
            myrole: "Truck Driver is a trucking simulator for all major consoles. During this project I was responsible for nearly all gameplay related features, including: "
                + "<br><ul><li>- Behavior of the truck and trailers.</li><li>- Mission system.</li><li>- Garage, where you can customize your truck with items that are unlocked by completing missions.</li><li>- Trailer parking mechanic.</li><li>- Zones where the player can rest or refuel their truck.</li><li>- Implementing steering wheel support for the Playstation 4 and Xbox One.</li></ul><br> "
                + "I also assisted with creating builds and patches for all platforms.",
            techStack: ["Unity", "C#", "C/C++", "Vehicle Physics", "3rd party steering wheel support", "PlayStation 4 SDK", "Xbox One SDK"],
            projectLink: "https://store.playstation.com/nl-nl/product/EP4541-CUSA12209_00-TRUCKDRIVEREU000"
        }
        ,
        clustertumble: {
            title: "Cluster Tumble",
            category: "Prerolla",
            platforms: ["PlayStation 4"],
            youtubeId: "roFYcNGjf54",
            description: "<blockquote><i>Cluster Tumble is a fast-paced game of skill. Complete over 100 puzzles as the pieces tumble down the screen rotating and moving them into the correct position. In a race against the clock the puzzles get harder the more you successfully complete. How many can you get through before your time runs out?"
                + "<br><br>Take on the challenge solo or battle friends in 2 person local multiplayer mode."
                + "<br><br>Two local leaderboards make it easy to post your scores and see how you measure up against the competition. Are you one of the best?!</i></blockquote>",
            myrole: "Cluster Tumble was solo-developed by me for a UK-based client. I implemented all of the gameplay features such as the core puzzle mechanics, local multiplayer and the leaderboards. And also ensured that the game would comply with all of Sony's guidelines and requirements for releasing on PlayStation 4.",
            techStack: ["Unity", "C#", "PlayStation 4 SDK"],
            projectLink: "https://store.playstation.com/nl-nl/product/EP4675-CUSA10858_00-CLUSTERTUMBLE0EU"
        }
        ,
        realfarmdlc: {
            title: "Real Farm - Grünes Tal and Potato Pack DLC",
            category: "Triangle Studios",
            platforms: ["Steam", "Xbox One", "PlayStation 4"],
            youtubeId: "4pD-P3aaK9o",
            description: "Extra downloadable content for Real Farm. Included a new map and new types of crops and several new vehicles.",
            myrole: "After the release of Real Farm, two more DLCs were released. These DLC packs included a new map, new types of crops and several new vehicles. It was my responsibility to assist the artists with implementing this new content.",
            techStack: ["Unity", "C#", "PlayStation 4 SDK"],
            projectLink: "https://store.playstation.com/nl-nl/product/EP4541-CUSA07966_00-REALFARMEU000000"
        }
        ,
        realfarm: {
            title: "Real Farm",
            category: "Triangle Studios",
            platforms: ["Steam", "Xbox One", "PlayStation 4"],
            youtubeId: "CEKyPMXbKyQ",
            description: "<blockquote><i>Grow your way to success in Real Farm. Work your way up from nothing in career mode or start with an established farm in free mode. Complete jobs and manage land, crops, animals and staff as you strive to become a respected farmer in the community.</i></blockquote>"
                + "<br>The development of Real Farm started during my internship at Triangle Studios and was published by Soedesco.",
            myrole: "Real Farm is a game that I worked on during my internship at Triangle Studios. Components that I created for this game included: "
                + "<br><ul><li>- Stock market simulation.</li><li>- Weather simulation.</li><li>- Traffic simulation.</li><li>- World- and minimap.</li><li>- Traffic simulation.</li><li>- Support for <a href='https://gaming.tobii.com/games/real-farm/' target='_blank'>Tobii Eye Tracking.</a></li></ul><br> "
                + "I also assisted another programmer with creating builds and patches for the Playstation 4. After the release of the game I was made responsible for delivering a new patch each week containing several bug fixes.",
            techStack: ["Unity", "C#", "PlayStation 4 SDK", "Tobii Eye Tracking"],
            projectLink: "https://store.playstation.com/nl-nl/product/EP4541-CUSA07966_00-REALFARMEU000000"
        }
        ,
        actitout: {
            title: "Act It Out - Dynamic PS4 Theme",
            category: "Snap Finger Click",
            platforms: ["PlayStation 4"],
            youtubeId: "FIP0YSPgP90",
            description: "A dynamic Playstation 4 Theme for Snap Finger Click, a UK-based game studio.",
            myrole: "My job was to research all the requirements of a dynamic PlayStation theme and discuss this with the team. Once all required assets were created I put everything together into a fully functional dynamic Playstation 4 theme.<br>After the theme was created I ensured that it was compliant with all Sony's requirements and guidelines. And I submitted the theme to Sony for certification.",
            techStack: ["XML", "PlayStation 4 SDK"],
            projectLink: "https://store.playstation.com/#!/nl-nl/games/thema/football-(sports)-dynamic-theme-act-it-out/cid=EP0826-CUSA02454_00-ETH0000000000583"
        },
        iceskating: {
            title: "Serious Game - Ice Skating",
            category: "8D-Games",
            platforms: ["PC"],
            youtubeId: "OZwTpj4fFyc",
            description: "A Serious Game in which elderly people can practice their balance to prevent injuries, by playing a game about ice skating in combination with Microsoft's Kinect.",
            myrole: "I got to create an update tool for the game during my internship at 8D-Games. It will automatically check for updates when the user starts the game. And give the user the option to download the latest version.<br><br>To bring more variety to the game I also created the possibility to place markers on the tiles that the game consists of. For each marker the developer can select multiple objects that can spawn at those locations and also set their direction. This feature gives the user always another experience when they play the game.",
            techStack: ["Unity", "C#"],
            projectLink: "https://8d.nl/en/projecten/increasingtherapyadherence/"
        },
        eastergame: {
            title: "Promotional Game - Easter",
            category: "8D-Games",
            platforms: ["PC"],
            youtubeId: "KIsZwpmYs9Q",
            description: "A promotional Bejeweled-like game with an Easter theme that I created during my internship at 8D-Games.",
            myrole: "The game was created with C# in the Unity3D engine. I created this game together with a 2D art intern who created all the sprites for the game. And I was responsible for all the technical aspects of it.<br>It's a Bejeweled-like puzzle game where the user has to swap objects with adjacent objects to create chains of three or more of the same object. When the timer reaches zero the user is game over and can send their score and email address to a database.",
            techStack: ["Unity", "C#", "WebGL", "SQL"],
            projectLink: "https://jvdmeulen.itch.io/eastergame?secret=nMGa44tECUW8VXySjA8nDrgBqxw"
        },
        pakjepakje: {
            title: "Promotional Game - Pak je Pakje",
            category: "8D-Games",
            platforms: ["PC"],
            youtubeId: "Juvp4gZDD5w",
            description: "A promotional Zuma-like game for the Dutch holiday Sinterklaas that I created during my internship at 8D-Games.",
            myrole: "The game was created with the Phaser Framework in JavaScript. I created this game together with a 2D art intern who created all the sprites for the game. And I was responsible for all the technical aspects of it.<br>It's a Zuma-like puzzle game where the user has to shoot colored presents at a moving line of presents to create matches of three or more of the same color. When the presents reach the water the user is game over and can send their score and email address to a database.",
            techStack: ["Phaser Framework", "JavaScript", "HTML5"],
            projectLink: "https://jvdmeulen.itch.io/sintgame?secret=vCTRXFvpCZHaBWAmWz7Tw42mJXM"
        }
    };

    // ----------------------------------------------------------------------
    // 2. Navigation & Mobile Menu Handler
    // ----------------------------------------------------------------------
    const siteHeader = document.getElementById('siteHeader');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky Header on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });

    // Mobile Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Active Section Highlight on Scroll
    const sections = document.querySelectorAll('section[id], header[id]');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // ----------------------------------------------------------------------
    // 3. Category Filter System
    // ----------------------------------------------------------------------
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            const filterValue = btn.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category.includes(filterValue)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ----------------------------------------------------------------------
    // 4. Interactive Project Detail Modal
    // ----------------------------------------------------------------------
    const projectModal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    let previousActiveElement = null;

    function openModal(projectId) {
        const data = projectsData[projectId];
        if (!data) return;

        previousActiveElement = document.activeElement;

        // Construct Modal HTML with dynamic per-platform icons
        const platformBadges = data.platforms.map(p => `<span>${getPlatformIcon(p)} ${p}</span>`).join(' ');
        const techBadges = data.techStack.map(t => `<span>${t}</span>`).join(' ');

        modalContent.innerHTML = `
            <div class="modal-header-info">
                <div class="modal-header-meta">
                    <span class="category-badge">${data.category}</span>
                </div>
                <h2 class="modal-title">${data.title}</h2>
            </div>

            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/${data.youtubeId}"></iframe>
            </div>

            <div class="modal-details-grid">
                <div class="modal-description">
                    <h3 style="font-family: var(--font-heading); font-size: 1.1rem; margin-bottom: 0.6rem; color: var(--text-primary);">About the Project</h3>
                    <p>${data.description}</p>
                    <h3 style="font-family: var(--font-heading); font-size: 1.1rem; margin-bottom: 0.6rem; color: var(--text-primary);">My Role</h3>
                    <p>${data.myrole}</p>
                </div>
                <div class="modal-sidebar">
                    <div class="sidebar-group">
                        <div class="sidebar-label">Target Platforms</div>
                        <div class="skill-tags" style="margin-top: 0.3rem;">${platformBadges}</div>
                    </div>
                    <div class="sidebar-group">
                        <div class="sidebar-label">Technologies &amp; Skills</div>
                        <div class="skill-tags" style="margin-top: 0.3rem;">${techBadges}</div>
                    </div>
                    <div style="margin-top: 1.5rem; text-align: center;">
                        <a href="${data.projectLink}" target="_blank" class="btn btn-primary" style="display: inline-block; width: 100%;"><i class="fa-solid fa-external-link-alt"></i> Visit Project</a>
                    </div>
                </div>
            </div>
        `;

        projectModal.classList.add('open');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        window.history.pushState({ modalOpen: true }, "");

        // Focus close button
        if (modalCloseBtn) modalCloseBtn.focus();
    }

    function closeModal(fromPopState) {
        if (!projectModal.classList.contains('open')) return;

        projectModal.classList.remove('open');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';

        // Clear iframe to stop audio/video
        setTimeout(() => {
            modalContent.innerHTML = '';
        }, 300);

        if (previousActiveElement) {
            previousActiveElement.focus();
        }

        if (fromPopState !== true && window.history.state && window.history.state.modalOpen) {
            window.history.back();
        }
    }

    window.addEventListener('popstate', () => {
        if (projectModal.classList.contains('open')) {
            closeModal(true);
        }
    });

    // Attach click listeners to cards
    portfolioCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            openModal(projectId);
        });

        // Keydown support
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const projectId = card.getAttribute('data-project');
                openModal(projectId);
            }
        });
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // ----------------------------------------------------------------------
    // 5. Back-To-Top Button
    // ----------------------------------------------------------------------
    const backToTopBtn = document.getElementById('backToTopBtn');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
    }

    // Dynamic Copyright Year
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});
