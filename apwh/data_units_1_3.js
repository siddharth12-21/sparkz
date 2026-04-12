const UNITS_1_3 = [
  {
    id: 1,
    name: "The Global Tapestry",
    period: "1200-1450",
    color: "#6c63ff",
    description: "Diverse political, social, and economic developments across empires and states in the period 1200-1450.",
    mapLayers: [
      {
        type: "region",
        name: "Song Dynasty China",
        color: "#e74c6f",
        countries: ["CHN"],
        info: {
          title: "Song Dynasty (960-1279)",
          desc: "One of the most technologically advanced civilizations of its era.",
          details: "<strong>Key Features:</strong><ul><li>Gunpowder, printing press, magnetic compass</li><li>Neo-Confucianism as state philosophy</li><li>Thriving commercial economy with paper money</li><li>Population exceeded 100 million</li><li>Advanced civil service examination system</li></ul>"
        }
      },
      {
        type: "region",
        name: "Delhi Sultanate",
        color: "#f0b429",
        countries: ["IND", "PAK", "BGD", "AFG"],
        info: {
          title: "Delhi Sultanate (1206-1526)",
          desc: "Islamic sultanate that ruled large parts of South Asia.",
          details: "<strong>Key Features:</strong><ul><li>Introduced Persian culture to South Asia</li><li>Mix of Hindu and Islamic traditions</li><li>Important trade networks with Central Asia</li><li>Bhakti and Sufi movements spread</li></ul>"
        }
      },
      {
        type: "region",
        name: "Mali Empire",
        color: "#34d399",
        countries: ["MLI", "SEN", "GMB", "GIN", "GNB", "SLE", "MRT", "BFA", "NER"],
        info: {
          title: "Mali Empire (c. 1235-1600)",
          desc: "West African empire famous for its wealth and centers of learning.",
          details: "<strong>Key Features:</strong><ul><li>Mansa Musa -- one of the wealthiest individuals in history</li><li>Timbuktu as center of Islamic scholarship</li><li>Trans-Saharan gold and salt trade</li><li>Griots preserved oral traditions</li></ul>"
        }
      },
      {
        type: "region",
        name: "Mongol Empire",
        color: "#3b82f6",
        countries: ["MNG", "CHN", "RUS", "KAZ", "UZB", "TKM", "KGZ", "TJK", "AFG", "IRN", "IRQ", "TUR", "AZE", "GEO", "ARM", "UKR", "POL", "HUN", "PRK", "KOR"],
        info: {
          title: "Mongol Empire (1206-1368)",
          desc: "The largest contiguous land empire in history under Genghis Khan and successors.",
          details: "<strong>Key Features:</strong><ul><li>Pax Mongolica enabled trade and cultural exchange</li><li>Yam postal relay system</li><li>Religious tolerance across the empire</li><li>Facilitated spread of Black Death along trade routes</li><li>Split into four khanates after Genghis Khan's death</li></ul>"
        }
      },
      {
        type: "region",
        name: "Aztec Empire",
        color: "#f59e0b",
        countries: ["MEX"],
        info: {
          title: "Aztec Empire (1345-1521)",
          desc: "Mesoamerican empire centered at Tenochtitlan.",
          details: "<strong>Key Features:</strong><ul><li>Chinampas floating agriculture</li><li>Tribute system from conquered peoples</li><li>Human sacrifice in religious practices</li><li>Complex calendar and writing system</li></ul>"
        }
      },
      {
        type: "region",
        name: "Inca Empire",
        color: "#22d3ee",
        countries: ["PER", "ECU", "BOL", "CHL", "COL", "ARG"],
        info: {
          title: "Inca Empire (1438-1533)",
          desc: "Largest empire in pre-Columbian South America.",
          details: "<strong>Key Features:</strong><ul><li>Quipu record-keeping system</li><li>Mit'a labor tribute system</li><li>25,000-mile road network through the Andes</li><li>No written language but highly organized bureaucracy</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Byzantine Empire",
        color: "#a855f7",
        lat: 41.01,
        lng: 28.98,
        info: {
          title: "Byzantine Empire",
          desc: "Continuation of the Eastern Roman Empire centered in Constantinople.",
          details: "<strong>Key Features:</strong><ul><li>Greek Orthodox Christianity</li><li>Justinian's Code of Law</li><li>Hagia Sophia and iconic art</li><li>Fell to Ottoman Turks in 1453</li></ul>"
        }
      }
    ],
    simulation: {
      name: "Mongol Empire Expansion",
      startYear: 1206,
      endYear: 1279,
      frames: [
        {
          year: 1206,
          label: "Genghis Khan Unifies Mongol Tribes",
          regions: [
            {
              name: "Mongol Homeland",
              color: "#e74c6f",
              countries: ["MNG"]
            }
          ],
          events: ["Temujin proclaimed Genghis Khan", "Mongol tribes unified"],
          context: { dominant: "Mongol tribal confederation under Genghis Khan", trade: "Overland Silk Road trade disrupted by tribal warfare", conflict: "Unification wars among Mongol tribes; raids into northern China" }
        },
        {
          year: 1227,
          label: "Death of Genghis Khan -- Empire Stretches to Persia",
          regions: [
            {
              name: "Early Mongol Conquests",
              color: "#e74c6f",
              countries: ["MNG", "CHN", "KAZ", "UZB", "TKM", "AFG", "IRN"]
            }
          ],
          events: ["Genghis Khan dies", "Empire spans from Korea to Caspian Sea"],
          context: { dominant: "Mongol Empire under Ogedei Khan -- expanding in all directions", trade: "Silk Road beginning to reopen under Mongol protection", conflict: "Mongol invasions of Persia, Russia, and Eastern Europe" }
        },
        {
          year: 1258,
          label: "Mongols Sack Baghdad",
          regions: [
            {
              name: "Mongol Empire Mid",
              color: "#e74c6f",
              countries: ["MNG", "CHN", "KAZ", "UZB", "TKM", "KGZ", "TJK", "AFG", "IRN", "IRQ", "SYR", "AZE", "GEO", "ARM", "UKR", "RUS"]
            }
          ],
          events: ["Hulagu Khan destroys Baghdad", "Abbasid Caliphate falls"],
          context: { dominant: "Mongol Empire near peak; Ilkhanate sacks Baghdad", trade: "Pax Mongolica at height -- Silk Road safe for merchants", conflict: "Sack of Baghdad ends Abbasid Caliphate; Mamluk resistance rising" }
        },
        {
          year: 1279,
          label: "Kublai Khan Conquers Song Dynasty",
          regions: [
            {
              name: "Mongol Empire Peak",
              color: "#e74c6f",
              countries: ["MNG", "CHN", "KAZ", "UZB", "TKM", "KGZ", "TJK", "AFG", "IRN", "IRQ", "AZE", "GEO", "ARM", "UKR", "RUS", "POL", "HUN", "PRK", "KOR"]
            }
          ],
          events: ["Song Dynasty falls", "Yuan Dynasty established in China"],
          context: { dominant: "Yuan Dynasty (China), Ilkhanate (Persia), Golden Horde (Russia), Chagatai Khanate (Central Asia)", trade: "Peak Silk Road trade; Chinese goods reach Europe via Mongol relay", conflict: "Failed Mongol invasions of Japan; resistance in Vietnam and Java" }
        },
        {
          year: 1350,
          label: "Mongol Empire Fragments into Khanates",
          regions: [
            {
              name: "Ilkhanate Remnant",
              color: "#f59e0b",
              opacity: 0.28,
              countries: ["IRN", "IRQ", "AZE", "ARM"]
            },
            {
              name: "Golden Horde",
              color: "#a855f7",
              opacity: 0.32,
              countries: ["RUS", "UKR", "KAZ"]
            },
            {
              name: "Yuan Dynasty",
              color: "#3b82f6",
              opacity: 0.30,
              countries: ["CHN", "MNG"]
            },
            {
              name: "Chagatai Khanate",
              color: "#34d399",
              opacity: 0.30,
              countries: ["UZB", "TKM", "KGZ", "TJK", "AFG"]
            }
          ],
          events: ["Mongol Empire splits into four khanates", "Yuan Dynasty weakens in China"],
          context: { dominant: "Fragmented Khanates in decline; Ming Dynasty rising in China", trade: "Black Death devastates Silk Road trade; Indian Ocean routes persist", conflict: "Khanate succession wars; Red Turban Rebellion against Yuan in China" }
        }
      ]
    },
    timeline: [
      { year: "1206", title: "Genghis Khan unifies Mongol tribes", desc: "Temujin is proclaimed Genghis Khan, launching campaigns that would create the largest contiguous land empire.", tags: ["empire","expansion"] },
      { year: "1215", title: "Magna Carta signed in England", desc: "King John forced to sign, limiting royal power and laying groundwork for constitutional governance.", tags: ["revolution"] },
      { year: "1235", title: "Sundiata Keita founds Mali Empire", desc: "After victory at Battle of Kirina, Sundiata establishes the wealthy Mali Empire in West Africa.", tags: ["empire"] },
      { year: "1258", title: "Mongols sack Baghdad", desc: "The Abbasid Caliphate falls as Hulagu Khan destroys Baghdad, ending the Islamic Golden Age.", tags: ["war","empire"] },
      { year: "1271", title: "Marco Polo begins journey to China", desc: "Venetian merchant travels the Silk Road, later writing accounts that inspire European interest in Asia.", tags: ["trade","culture"] },
      { year: "1279", title: "Mongols conquer Song Dynasty", desc: "Kublai Khan completes conquest of China, establishing the Yuan Dynasty.", tags: ["war","empire"] },
      { year: "1324", title: "Mansa Musa's pilgrimage to Mecca", desc: "Mali emperor's hajj displays extraordinary wealth, disrupting gold markets in Cairo and drawing European attention.", tags: ["trade","culture"] },
      { year: "1325", title: "Founding of Tenochtitlan", desc: "The Aztecs establish their capital on an island in Lake Texcoco, which becomes the largest city in the Americas.", tags: ["empire","culture"] },
      { year: "1347", title: "Black Death reaches Europe", desc: "Bubonic plague kills ~30-60% of Europe's population, transforming social and economic structures.", tags: ["trade"] },
      { year: "1405", title: "Zheng He's first voyage", desc: "Ming Dynasty admiral launches massive naval expeditions across the Indian Ocean, reaching East Africa.", tags: ["trade","expansion"] },
      { year: "1438", title: "Inca Empire expansion begins", desc: "Under Pachacuti, the Inca rapidly expand from Cusco to dominate western South America.", tags: ["empire","expansion"] },
      { year: "1453", title: "Fall of Constantinople", desc: "Ottoman Sultan Mehmed II captures Constantinople, ending the Byzantine Empire and reshaping trade routes.", tags: ["war","empire"] }
    ],
    flashcards: [
      { q: "What was the significance of the Mongol Pax Mongolica?", a: "It created safe trade routes across Eurasia, facilitating the exchange of goods, ideas, technology, and diseases (including the Black Death) between East and West." },
      { q: "What were chinampas?", a: "Floating agricultural gardens used by the Aztecs in Lake Texcoco to grow crops, significantly increasing agricultural productivity." },
      { q: "Why was Mansa Musa's 1324 pilgrimage significant?", a: "It demonstrated Mali's extraordinary wealth to the wider world. He distributed so much gold in Cairo that he temporarily devalued the metal in the region." },
      { q: "What was the mit'a system?", a: "A mandatory labor tribute system used by the Inca Empire where citizens owed labor to the state for construction, farming, and military service." },
      { q: "What was Neo-Confucianism?", a: "A revival of Confucian thought during the Song Dynasty that blended traditional Confucian ethics with Buddhist and Daoist ideas, emphasizing rational investigation and self-cultivation." },
      { q: "How did the Mongol Empire facilitate cultural exchange?", a: "Through the Yam relay system, religious tolerance, protection of merchants along the Silk Road, and movement of artisans and scholars across the empire." },
      { q: "What caused the fall of the Byzantine Empire?", a: "The Ottoman Turks under Mehmed II besieged and captured Constantinople in 1453, using massive cannons to breach the ancient walls." },
      { q: "What was the role of Timbuktu in the Mali Empire?", a: "It served as a major center of Islamic learning and trade, home to the University of Sankore and extensive manuscript libraries." }
    ]
  },
  {
    id: 2,
    name: "Networks of Exchange",
    period: "1200-1450",
    color: "#f0b429",
    description: "Trade networks, cultural exchanges, and the spread of religions and technologies across Afro-Eurasia.",
    mapLayers: [
      {
        type: "polyline",
        name: "Silk Road",
        color: "#f0b429",
        yearRange: [100, 1500],
        coords: [[35,35],[37,52],[39,62],[40,72],[38,85],[40,95],[36,105],[35,115]],
        info: {
          title: "Silk Road Trade Network",
          desc: "Ancient network of overland trade routes connecting East Asia to the Mediterranean.",
          details: "<strong>Goods traded:</strong><ul><li>Silk, porcelain, spices (East -> West)</li><li>Gold, silver, horses, wool (West -> East)</li><li>Spread of Buddhism, Islam, Christianity</li><li>Paper-making, gunpowder diffusion</li><li>Protected by Mongol Empire during Pax Mongolica</li></ul>"
        }
      },
      {
        type: "polyline",
        name: "Indian Ocean Trade",
        color: "#3b82f6",
        yearRange: [700, 2020],
        coords: [[25,35],[20,42],[15,50],[10,60],[5,72],[0,78],[-5,80],[5,95],[10,105],[15,110]],
        info: {
          title: "Indian Ocean Trade Network",
          desc: "Maritime trade network driven by monsoon winds connecting East Africa, Arabia, India, and Southeast Asia.",
          details: "<strong>Key Features:</strong><ul><li>Monsoon wind patterns determined sailing seasons</li><li>Dhows and junks were primary vessels</li><li>Swahili city-states served as African hubs</li><li>Spread of Islam through merchant communities</li><li>Chinese porcelain found as far as East Africa</li></ul>"
        }
      },
      {
        type: "polyline",
        name: "Trans-Saharan Trade",
        color: "#34d399",
        yearRange: [700, 1800],
        coords: [[35,0],[30,0],[25,0],[20,-2],[15,-5],[12,-8]],
        info: {
          title: "Trans-Saharan Trade Routes",
          desc: "Camel caravan routes connecting North Africa with West Africa across the Sahara.",
          details: "<strong>Key Features:</strong><ul><li>Gold from West Africa traded for Saharan salt</li><li>Camel caravans could include thousands of animals</li><li>Spread of Islam into West Africa</li><li>Empires like Ghana, Mali, Songhai grew wealthy</li></ul>"
        }
      },
      {
        type: "polyline",
        name: "Mediterranean Sea Trade",
        color: "#e74c6f",
        yearRange: [500, 2020],
        coords: [[36,-5],[37,5],[38,15],[37,25],[36,30],[35,35]],
        info: {
          title: "Mediterranean Sea Trade",
          desc: "Maritime trade connecting European, North African, and Middle Eastern ports.",
          details: "<strong>Key Features:</strong><ul><li>Italian city-states (Venice, Genoa) dominated</li><li>Luxury goods from the East reached Europe</li><li>Crusades increased European desire for Eastern goods</li><li>Bills of exchange and banking innovations</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Swahili Coast",
        color: "#22d3ee",
        lat: -6.16,
        lng: 39.19,
        info: {
          title: "Swahili Coast City-States",
          desc: "Network of trading city-states along the East African coast.",
          details: "<strong>Key Features:</strong><ul><li>Cities: Kilwa, Mombasa, Mogadishu, Zanzibar</li><li>Swahili language blended Bantu and Arabic</li><li>Islam spread through trade contacts</li><li>Exported gold, ivory, and enslaved people</li><li>Imported porcelain, textiles, and spices</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Great Zimbabwe",
        color: "#a855f7",
        lat: -20.27,
        lng: 30.93,
        info: {
          title: "Great Zimbabwe (c. 1100-1450)",
          desc: "Major stone city in southern Africa and hub of the gold trade.",
          details: "<strong>Key Features:</strong><ul><li>Massive stone walls built without mortar</li><li>Controlled gold trade to the Swahili coast</li><li>Population of ~18,000 at peak</li><li>Chinese porcelain fragments found at the site</li></ul>"
        }
      }
    ],
    simulation: {
      name: "Trade Network Expansion",
      startYear: 1200,
      endYear: 1450,
      frames: [
        {
          year: 1200,
          label: "Early Silk Road & Indian Ocean Trade",
          regions: [
            {
              name: "Silk Road Zone",
              color: "#f0b429",
              countries: ["CHN", "MNG", "KAZ", "UZB", "TKM", "AFG", "IRN", "IRQ", "TUR"]
            },
            {
              name: "Indian Ocean Zone",
              color: "#3b82f6",
              countries: ["IND", "LKA", "MDV", "OMN", "YEM", "SAU", "SOM", "KEN", "TZA", "MOZ", "IDN", "MYS", "THA"]
            }
          ],
          events: ["Silk Road trade active under various empires", "Indian Ocean monsoon trade well established"],
          context: { dominant: "Song Dynasty China; Abbasid Caliphate; Mali Empire in West Africa", trade: "Silk, spices, and porcelain flow via Indian Ocean and Silk Road", conflict: "Crusader States in Holy Land; Almohad decline in North Africa" }
        },
        {
          year: 1260,
          label: "Pax Mongolica Expands Silk Road",
          regions: [
            {
              name: "Pax Mongolica Trade Zone",
              color: "#f0b429",
              countries: ["CHN", "MNG", "KAZ", "UZB", "TKM", "AFG", "IRN", "IRQ", "TUR"]
            },
            {
              name: "Indian Ocean Zone",
              color: "#3b82f6",
              countries: ["IND", "LKA", "MDV", "OMN", "YEM", "SAU", "SOM", "KEN", "TZA", "MOZ", "IDN", "MYS", "THA"]
            },
            {
              name: "Trans-Saharan Zone",
              color: "#34d399",
              countries: ["MLI", "NER", "TCD", "SDN", "LBY", "DZA", "MAR", "MRT", "SEN", "EGY"]
            }
          ],
          events: ["Pax Mongolica enables safe Silk Road travel", "Marco Polo begins journey"],
          context: { dominant: "Mongol Empire; Mamluk Sultanate; Song Dynasty's final years", trade: "Pax Mongolica opens Silk Road to European merchants like Marco Polo", conflict: "Mongol-Mamluk wars at Ain Jalut; end of Crusader presence imminent" }
        },
        {
          year: 1350,
          label: "Black Death Disrupts Trade",
          regions: [
            {
              name: "Plague-Affected Trade Zone",
              color: "#e74c6f",
              opacity: 0.35,
              countries: ["ITA", "GRC", "EGY", "TUN", "DZA", "MAR", "ESP", "PRT", "TUR", "LBN", "SYR", "ISR"]
            },
            {
              name: "Indian Ocean (Continues)",
              color: "#3b82f6",
              countries: ["IND", "LKA", "MDV", "OMN", "YEM", "SAU", "SOM", "KEN", "TZA", "MOZ", "IDN", "MYS", "THA"]
            }
          ],
          events: ["Black Death travels along trade routes", "European population devastated"],
          context: { dominant: "Fractured Mongol Khanates; Ottoman Empire emerging; Mali Empire", trade: "Black Death collapses trade volume across Europe and Middle East", conflict: "Black Death spreads along trade routes; Hundred Years War begins" }
        },
        {
          year: 1450,
          label: "Trade Networks at Peak",
          regions: [
            {
              name: "Overland Trade Zone",
              color: "#f0b429",
              countries: ["CHN", "MNG", "KAZ", "UZB", "TKM", "AFG", "IRN", "IRQ", "TUR"]
            },
            {
              name: "Indian Ocean Zone",
              color: "#3b82f6",
              countries: ["IND", "LKA", "MDV", "OMN", "YEM", "SAU", "SOM", "KEN", "TZA", "MOZ", "IDN", "MYS", "THA"]
            },
            {
              name: "Trans-Saharan Zone",
              color: "#34d399",
              countries: ["MLI", "NER", "TCD", "SDN", "LBY", "DZA", "MAR", "MRT", "SEN", "EGY"]
            }
          ],
          events: ["Zheng He's voyages reach Africa", "Malacca becomes major hub"],
          context: { dominant: "Ming Dynasty China; Ottoman Empire; Songhai rising in West Africa", trade: "Zheng He voyages to Africa; Ottomans soon to control eastern routes", conflict: "Ottoman expansion westward; Fall of Constantinople in 1453 imminent" }
        }
      ]
    },
    timeline: [
      { year: "1200s", title: "Swahili city-states flourish", desc: "East African trading cities like Kilwa and Mombasa become major hubs in the Indian Ocean trade network.", tags: ["trade"] },
      { year: "1206", title: "Delhi Sultanate established", desc: "Qutb ud-Din Aibak establishes Muslim rule in northern India, facilitating trade and cultural exchange.", tags: ["empire"] },
      { year: "1250s", title: "Great Zimbabwe at its peak", desc: "Southern African city controls gold trade routes to the Swahili coast and Indian Ocean.", tags: ["trade"] },
      { year: "1271-95", title: "Marco Polo's travels", desc: "His detailed accounts of Mongol China and Asian trade inspire European desire for Eastern goods.", tags: ["trade","culture"] },
      { year: "1291", title: "Crusader states fall", desc: "End of Crusades increases European demand for direct trade routes to Asia.", tags: ["war","trade"] },
      { year: "1300s", title: "Bantu migrations continue", desc: "Bantu-speaking peoples spread iron-working, agriculture, and languages across sub-Saharan Africa.", tags: ["culture","expansion"] },
      { year: "1325-54", title: "Ibn Battuta's travels", desc: "Moroccan traveler visits virtually the entire Islamic world, documenting trade networks and cultures.", tags: ["trade","culture"] },
      { year: "1347-53", title: "Black Death pandemic", desc: "Plague travels along Silk Road and maritime routes, devastating populations across Eurasia.", tags: ["trade"] },
      { year: "1380s", title: "Caravansaries expand along Silk Road", desc: "Rest stops and trading posts proliferate, facilitating long-distance trade across Central Asia.", tags: ["trade"] },
      { year: "1400s", title: "Malacca becomes major trade hub", desc: "Southeast Asian port city becomes crucial waypoint connecting Indian Ocean and East Asian trade.", tags: ["trade"] }
    ],
    flashcards: [
      { q: "What role did monsoon winds play in Indian Ocean trade?", a: "Monsoon winds reversed direction seasonally, allowing sailors to travel northeast in summer and southwest in winter, creating predictable trade routes and seasonal trading patterns." },
      { q: "How did the Black Death spread across Eurasia?", a: "The plague traveled along trade routes -- both the Silk Road overland and maritime routes -- carried by rats and fleas on merchant ships and caravans from Central Asia to Europe." },
      { q: "What was a diasporic community?", a: "A community of merchants from one culture living and trading in a foreign city. Examples include Arab merchants in Chinese ports and Jewish traders across the Mediterranean." },
      { q: "How did trade affect the spread of Islam?", a: "Muslim merchants established communities along trade routes in East Africa, Southeast Asia, and West Africa, spreading Islam through commerce rather than conquest." },
      { q: "What was a bill of exchange?", a: "A financial instrument allowing merchants to conduct transactions without carrying large amounts of currency, developed in the Italian city-states to facilitate long-distance trade." },
      { q: "What was the significance of caravansaries?", a: "They were roadside inns along the Silk Road that provided shelter, food, and security for merchants and travelers, facilitating long-distance overland trade." }
    ]
  },
  {
    id: 3,
    name: "Land-Based Empires",
    period: "1450-1750",
    color: "#e74c6f",
    description: "Gunpowder empires and land-based states expand using military technology and administrative systems.",
    mapLayers: [
      {
        type: "region",
        name: "Ottoman Empire",
        color: "#e74c6f",
        countries: ["TUR", "GRC", "BGR", "MKD", "ALB", "BIH", "SRB", "HRV", "ROU", "SYR", "LBN", "ISR", "PSE", "JOR", "IRQ", "EGY", "LBY", "TUN", "DZA", "SAU", "YEM", "KWT", "CYP"],
        info: {
          title: "Ottoman Empire (1299-1922)",
          desc: "Powerful multi-ethnic empire spanning Southeast Europe, Western Asia, and North Africa.",
          details: "<strong>Key Features:</strong><ul><li>Devshirme system recruited Christian boys for Janissary corps</li><li>Millet system allowed religious autonomy</li><li>Sultan held both political and religious authority</li><li>Constantinople renamed Istanbul after 1453 conquest</li><li>Controlled key trade routes between Europe and Asia</li></ul>"
        }
      },
      {
        type: "region",
        name: "Safavid Empire",
        color: "#34d399",
        countries: ["IRN", "IRQ", "AZE", "ARM", "GEO", "TKM", "AFG"],
        info: {
          title: "Safavid Empire (1501-1736)",
          desc: "Persian empire that established Twelver Shia Islam as the official state religion.",
          details: "<strong>Key Features:</strong><ul><li>Shah Ismail I established Shia Islam as state religion</li><li>Shah Abbas I modernized the military and capital Isfahan</li><li>Silk trade was major economic driver</li><li>Rivalry with Sunni Ottoman Empire shaped the region</li></ul>"
        }
      },
      {
        type: "region",
        name: "Mughal Empire",
        color: "#f0b429",
        countries: ["IND", "PAK", "BGD", "AFG"],
        info: {
          title: "Mughal Empire (1526-1857)",
          desc: "Islamic dynasty ruling much of the Indian subcontinent, known for cultural synthesis.",
          details: "<strong>Key Features:</strong><ul><li>Founded by Babur at Battle of Panipat (1526)</li><li>Akbar's policy of religious tolerance (Din-i Ilahi)</li><li>Taj Mahal built by Shah Jahan</li><li>Mansabdar system for military-bureaucratic administration</li><li>Blended Hindu, Islamic, and Persian cultural elements</li></ul>"
        }
      },
      {
        type: "region",
        name: "Qing Dynasty",
        color: "#3b82f6",
        countries: ["CHN", "MNG", "TWN"],
        info: {
          title: "Qing Dynasty (1644-1912)",
          desc: "Last imperial dynasty of China, established by Manchus.",
          details: "<strong>Key Features:</strong><ul><li>Manchu rulers maintained dual administration</li><li>Queue hairstyle imposed on Han Chinese</li><li>Expanded into Tibet, Mongolia, Taiwan, and Xinjiang</li><li>Kangxi and Qianlong emperors oversaw golden age</li><li>Strict trade restrictions with Europeans (Canton system)</li></ul>"
        }
      },
      {
        type: "region",
        name: "Russian Empire",
        color: "#a855f7",
        countries: ["RUS", "UKR", "BLR", "LVA", "LTU", "EST", "POL", "FIN", "KAZ", "UZB", "TKM", "KGZ", "TJK", "AZE", "GEO", "ARM", "MDA"],
        info: {
          title: "Russian Empire (1547-1917)",
          desc: "Vast empire expanding across Northern Eurasia under tsarist rule.",
          details: "<strong>Key Features:</strong><ul><li>Ivan IV (The Terrible) centralized power</li><li>Peter the Great westernized Russia</li><li>Expansion eastward across Siberia to the Pacific</li><li>Serfdom remained central to the economy</li><li>Orthodox Christianity as unifying force</li></ul>"
        }
      },
      {
        type: "region",
        name: "Songhai Empire",
        color: "#f59e0b",
        countries: ["MLI", "NER", "BFA", "SEN", "GMB", "MRT", "GIN"],
        info: {
          title: "Songhai Empire (c. 1464-1591)",
          desc: "Largest empire in African history at its peak, controlling trans-Saharan trade.",
          details: "<strong>Key Features:</strong><ul><li>Sunni Ali and Askia Muhammad expanded the empire</li><li>Timbuktu and Djenne as centers of Islamic learning</li><li>Professional army and bureaucracy</li><li>Defeated by Moroccan invasion using gunpowder weapons</li></ul>"
        }
      }
    ],
    simulation: {
      name: "Gunpowder Empires Expansion",
      startYear: 1450,
      endYear: 1700,
      frames: [
        {
          year: 1453,
          label: "Ottoman Conquest of Constantinople",
          regions: [
            {
              name: "Ottoman Empire",
              color: "#e74c6f",
              countries: ["TUR", "GRC", "BGR", "MKD", "ALB", "BIH", "SRB"]
            }
          ],
          events: ["Mehmed II conquers Constantinople", "Byzantine Empire falls"],
          context: { dominant: "Ottoman Empire; Timurid Persia; Ming Dynasty China", trade: "Ottomans control Eastern Mediterranean; spice trade routes endangered", conflict: "Ottoman conquest of Constantinople ends Byzantine Empire" }
        },
        {
          year: 1530,
          label: "Ottomans Expand, Mughal Empire Founded",
          regions: [
            {
              name: "Ottoman Empire",
              color: "#e74c6f",
              countries: ["TUR", "GRC", "BGR", "MKD", "ALB", "BIH", "SRB", "HRV", "ROU", "SYR", "LBN", "ISR", "JOR", "IRQ", "EGY", "SAU"]
            },
            {
              name: "Mughal Empire",
              color: "#f0b429",
              countries: ["IND", "PAK", "AFG"]
            }
          ],
          events: ["Suleiman the Magnificent rules Ottoman Empire", "Babur establishes Mughal rule at Panipat (1526)"],
          context: { dominant: "Ottoman Empire (Suleiman); Mughal Empire (Babur); Habsburg Spain", trade: "Spanish silver flowing from Americas; Ottoman Red Sea controls spice trade", conflict: "Ottoman-Safavid wars (Battle of Chaldiran 1514); Spanish Conquest of Americas" }
        },
        {
          year: 1600,
          label: "Three Gunpowder Empires at Strength",
          regions: [
            {
              name: "Ottoman Empire",
              color: "#e74c6f",
              countries: ["TUR", "GRC", "BGR", "MKD", "ALB", "BIH", "SRB", "HRV", "ROU", "SYR", "LBN", "ISR", "PSE", "JOR", "IRQ", "EGY", "LBY", "TUN", "DZA", "SAU", "YEM", "KWT", "CYP"]
            },
            {
              name: "Mughal Empire",
              color: "#f0b429",
              countries: ["IND", "PAK", "BGD", "AFG"]
            },
            {
              name: "Safavid Empire",
              color: "#34d399",
              countries: ["IRN", "IRQ", "AZE", "ARM", "GEO", "TKM", "AFG"]
            }
          ],
          events: ["Shah Abbas I transforms Safavid Persia", "Akbar expands Mughal India"],
          context: { dominant: "Ottoman, Mughal, Safavid, and Qing Empires all active", trade: "Atlantic trade dominates; East India Companies challenge Portuguese monopoly", conflict: "Thirty Years War approaching; Ottoman-Safavid border conflicts" }
        },
        {
          year: 1700,
          label: "Empires at Peak -- Qing Dynasty Rises",
          regions: [
            {
              name: "Ottoman Empire",
              color: "#e74c6f",
              countries: ["TUR", "GRC", "BGR", "MKD", "ALB", "BIH", "SRB", "HRV", "ROU", "SYR", "LBN", "ISR", "PSE", "JOR", "IRQ", "EGY", "LBY", "TUN", "DZA", "SAU", "YEM", "KWT", "CYP"]
            },
            {
              name: "Mughal Empire",
              color: "#f0b429",
              countries: ["IND", "PAK", "BGD", "AFG"]
            },
            {
              name: "Qing Dynasty",
              color: "#3b82f6",
              countries: ["CHN", "MNG", "TWN"]
            }
          ],
          events: ["Aurangzeb expands Mughal Empire to greatest extent", "Kangxi Emperor consolidates Qing rule"],
          context: { dominant: "Qing Dynasty; Ottoman Empire; European colonial powers expanding", trade: "Transatlantic slave trade at high volume; East India Companies dominant", conflict: "War of Spanish Succession; Mughal overextension under Aurangzeb" }
        }
      ]
    },
    timeline: [
      { year: "1453", title: "Ottoman conquest of Constantinople", desc: "Sultan Mehmed II captures the Byzantine capital using massive cannons, establishing Ottoman control over East-West trade.", tags: ["war","empire"] },
      { year: "1464", title: "Songhai Empire rises under Sunni Ali", desc: "West African empire expands to become the largest in African history, controlling trans-Saharan trade.", tags: ["empire","expansion"] },
      { year: "1501", title: "Safavid Empire established", desc: "Shah Ismail I establishes the Safavid dynasty and makes Twelver Shia Islam the state religion of Persia.", tags: ["empire"] },
      { year: "1517", title: "Ottomans conquer Mamluk Egypt", desc: "Ottoman Empire expands into North Africa and gains control of holy cities Mecca and Medina.", tags: ["war","expansion"] },
      { year: "1526", title: "Mughal Empire founded", desc: "Babur defeats the Delhi Sultanate at the Battle of Panipat, establishing Mughal rule in India.", tags: ["war","empire"] },
      { year: "1556", title: "Akbar's reign begins", desc: "Mughal Emperor Akbar implements religious tolerance and administrative reforms that strengthen the empire.", tags: ["empire","culture"] },
      { year: "1588", title: "Shah Abbas I reforms Safavid Empire", desc: "Modernizes military with gunpowder weapons and transforms Isfahan into a spectacular capital city.", tags: ["empire"] },
      { year: "1613", title: "Romanov dynasty begins in Russia", desc: "Michael Romanov becomes Tsar, beginning a dynasty that would rule Russia for over 300 years.", tags: ["empire"] },
      { year: "1644", title: "Qing Dynasty established in China", desc: "Manchu forces overthrow the Ming Dynasty and establish the Qing, China's last imperial dynasty.", tags: ["war","empire"] },
      { year: "1689", title: "Peter the Great becomes Tsar", desc: "Begins aggressive westernization of Russia, building St. Petersburg and modernizing the military.", tags: ["empire","culture"] }
    ],
    flashcards: [
      { q: "What was the devshirme system?", a: "A system in the Ottoman Empire where Christian boys from the Balkans were recruited, converted to Islam, and trained for military (Janissaries) or administrative service." },
      { q: "What were the 'Gunpowder Empires'?", a: "The Ottoman, Safavid, and Mughal empires, so named because they used gunpowder weapons to conquer and maintain their territories." },
      { q: "How did Akbar promote religious tolerance?", a: "He abolished the jizya tax on non-Muslims, held interfaith debates, created Din-i Ilahi (a syncretic religion), and married Hindu princesses." },
      { q: "What was the millet system?", a: "An Ottoman system that allowed non-Muslim religious communities (Christians, Jews) to govern their own internal affairs under their own leaders." },
      { q: "How did Peter the Great westernize Russia?", a: "He built St. Petersburg as a 'window to the West,' modernized the military, required Western dress, sent nobles to study in Europe, and reformed the government." },
      { q: "What was the Qing Queue Order?", a: "The Manchu-imposed requirement that all Han Chinese men shave the front of their heads and wear the remaining hair in a long braid (queue) as a sign of submission." }
    ]
  }
];
