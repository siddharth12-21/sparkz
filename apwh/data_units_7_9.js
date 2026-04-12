const UNITS_7_9 = [
  {
    id: 7,
    name: "Global Conflict",
    period: "1900-Present",
    color: "#a855f7",
    description: "World wars, ideological conflicts, and the reshaping of the global order in the 20th century.",
    mapLayers: [
      {
        type: "region",
        name: "Allied Powers (WWI)",
        color: "#3b82f6",
        countries: ["FRA", "GBR", "RUS", "ITA", "SRB", "ROU", "BEL", "GRC", "PRT"],
        info: {
          title: "World War I (1914-1918)",
          desc: "The 'Great War' reshapes Europe and ends multiple empires.",
          details: "<strong>Key Features:</strong><ul><li>Triggered by assassination of Archduke Franz Ferdinand</li><li>Alliance system: Triple Entente vs Central Powers</li><li>Trench warfare, poison gas, machine guns</li><li>Ottoman, Austro-Hungarian, Russian, German empires collapse</li><li>Treaty of Versailles imposes harsh terms on Germany</li></ul>"
        }
      },
      {
        type: "region",
        name: "Nazi Germany (1939)",
        color: "#e74c6f",
        countries: ["DEU", "AUT", "CZE", "POL"],
        info: {
          title: "World War II in Europe (1939-1945)",
          desc: "Hitler's Germany conquers much of Europe before Allied victory.",
          details: "<strong>Key Features:</strong><ul><li>Nazi ideology: racial supremacy, lebensraum</li><li>Holocaust: 6 million Jews murdered</li><li>D-Day invasion, Battle of Stalingrad</li><li>Allied victory leads to UN formation</li><li>Nuremberg Trials establish precedent for war crimes</li></ul>"
        }
      },
      {
        type: "region",
        name: "Japanese Empire (1942)",
        color: "#f59e0b",
        countries: ["JPN", "KOR", "PRK", "TWN", "CHN", "PHL", "VNM", "LAO", "KHM", "THA", "MYS", "SGP", "IDN", "MMR", "BRN"],
        info: {
          title: "Japanese Empire & Pacific War",
          desc: "Japan's imperial expansion leads to conflict across East Asia and the Pacific.",
          details: "<strong>Key Features:</strong><ul><li>Invaded Manchuria (1931), China (1937)</li><li>Attack on Pearl Harbor (1941)</li><li>Brutal occupation of Southeast Asia</li><li>Atomic bombings of Hiroshima and Nagasaki</li><li>Japan's unconditional surrender (1945)</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Russian Revolution",
        color: "#e74c6f",
        lat: 59.93,
        lng: 30.32,
        info: {
          title: "Russian Revolution (1917)",
          desc: "Bolshevik revolution establishes the world's first communist state.",
          details: "<strong>Key Features:</strong><ul><li>February Revolution: Tsar Nicholas II abdicates</li><li>October Revolution: Lenin and Bolsheviks seize power</li><li>Civil War (1917-1922): Reds vs Whites</li><li>USSR established 1922</li><li>Inspires communist movements worldwide</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Armenian Genocide",
        color: "#8b5cf6",
        lat: 40.18,
        lng: 44.51,
        info: {
          title: "Armenian Genocide (1915-1923)",
          desc: "Systematic extermination of 1.5 million Armenians by the Ottoman government.",
          details: "<strong>Key Features:</strong><ul><li>Mass deportations, death marches, massacres</li><li>Estimated 1.5 million Armenians killed</li><li>One of the first modern genocides</li><li>Continues to be a major point of historical contention</li></ul>"
        }
      }
    ],
    timeline: [
      { year: "1905", title: "Russian Revolution of 1905", desc: "Failed revolution forces Tsar Nicholas II to establish a parliament (Duma), foreshadowing 1917.", tags: ["revolution"] },
      { year: "1910", title: "Mexican Revolution begins", desc: "Decade-long conflict transforms Mexican society and government.", tags: ["war","revolution"] },
      { year: "1914", title: "World War I begins", desc: "Assassination of Archduke Franz Ferdinand triggers a global conflict that kills ~17 million.", tags: ["war"] },
      { year: "1915", title: "Armenian Genocide begins", desc: "Ottoman government systematically exterminates 1.5 million Armenians.", tags: ["war"] },
      { year: "1917", title: "Russian Revolution", desc: "Bolsheviks seize power, establishing the world's first communist state.", tags: ["revolution"] },
      { year: "1919", title: "Treaty of Versailles", desc: "Harsh peace terms imposed on Germany sow seeds for future conflict.", tags: ["war"] },
      { year: "1929", title: "Great Depression begins", desc: "Global economic collapse causes mass unemployment and political instability worldwide.", tags: ["trade"] },
      { year: "1931", title: "Japan invades Manchuria", desc: "Japanese imperial expansion in China signals the beginning of wider Pacific conflict.", tags: ["war","expansion"] },
      { year: "1937", title: "Nanjing Massacre", desc: "Japanese forces massacre an estimated 200,000-300,000 Chinese civilians.", tags: ["war"] },
      { year: "1939", title: "World War II begins", desc: "Nazi Germany invades Poland, starting the deadliest conflict in human history (~70-85 million dead).", tags: ["war"] },
      { year: "1941", title: "Attack on Pearl Harbor", desc: "Japan's surprise attack brings the United States into World War II.", tags: ["war"] },
      { year: "1945", title: "Atomic bombs and WWII ends", desc: "U.S. drops atomic bombs on Hiroshima and Nagasaki; Japan surrenders; United Nations founded.", tags: ["war"] }
    ],
    flashcards: [
      { q: "What were the MAIN causes of World War I?", a: "Militarism, Alliances, Imperialism, and Nationalism (MAIN). The immediate trigger was the assassination of Archduke Franz Ferdinand of Austria-Hungary." },
      { q: "What was total war?", a: "A conflict where nations mobilize all resources (economic, industrial, scientific, civilian) for the war effort, blurring the line between military and civilian targets." },
      { q: "How did WWI lead to the Russian Revolution?", a: "Massive casualties, food shortages, economic collapse, and loss of faith in Tsar Nicholas II's leadership led to revolution in February 1917, followed by the Bolshevik takeover in October." },
      { q: "What was the mandate system?", a: "After WWI, the League of Nations assigned former Ottoman and German territories to Allied powers (mainly Britain and France) to govern, ostensibly until they were ready for independence." },
      { q: "What caused World War II?", a: "Treaty of Versailles grievances, rise of fascism, appeasement policy, Great Depression, Japanese imperialism, and Nazi Germany's aggressive expansion." },
      { q: "What was the Holocaust?", a: "The systematic, state-sponsored murder of approximately 6 million Jews and millions of others (Roma, disabled people, political dissidents) by Nazi Germany." }
    ],
    simulation: {
      name: "World War I",
      startYear: 1914,
      endYear: 1918,
      frames: [
        {
          year: 1914,
          label: "War Begins -- June 1914",
          regions: [
            {
              name: "Central Powers",
              color: "#e74c6f",
              countries: ["DEU", "AUT", "HUN", "TUR"]
            },
            {
              name: "Allied Powers",
              color: "#3b82f6",
              countries: ["FRA", "BEL", "GBR", "SRB"]
            },
            {
              name: "Allied Russia",
              color: "#4a90d9",
              countries: ["RUS"]
            },
            {
              name: "Neutral Nations",
              color: "#888888",
              countries: ["ITA", "CHE", "SWE", "DNK", "NOR", "NLD"]
            }
          ],
          events: ["Assassination of Archduke Franz Ferdinand", "Austria declares war on Serbia"],
          context: { dominant: "European great powers (Britain, France, Germany, Austria-Hungary, Russia)", trade: "Industrial goods, raw materials from colonies; global trade disrupted by war", conflict: "World War I begins -- assassination of Franz Ferdinand triggers alliance system" }
        },
        {
          year: 1915,
          label: "Italy Joins Allies -- Gallipoli Campaign",
          regions: [
            {
              name: "Central Powers",
              color: "#e74c6f",
              countries: ["DEU", "AUT", "HUN", "TUR", "BGR"]
            },
            {
              name: "Allied Powers (West)",
              color: "#3b82f6",
              countries: ["FRA", "BEL", "GBR", "ITA", "SRB"]
            },
            {
              name: "Allied Russia",
              color: "#4a90d9",
              countries: ["RUS"]
            }
          ],
          events: ["Italy joins the Entente", "Gallipoli Campaign begins", "Trench warfare on Western Front"]
        },
        {
          year: 1917,
          label: "US Enters War -- Russia Exits",
          regions: [
            {
              name: "Central Powers",
              color: "#e74c6f",
              countries: ["DEU", "AUT", "HUN", "TUR", "BGR"]
            },
            {
              name: "Allied Powers",
              color: "#3b82f6",
              countries: ["FRA", "BEL", "GBR", "ITA", "USA", "SRB", "ROU", "GRC"]
            },
            {
              name: "Revolutionary Russia",
              color: "#a855f7",
              countries: ["RUS"]
            }
          ],
          events: ["United States enters the war", "Russian Revolution -- Russia exits war"]
        },
        {
          year: 1918,
          label: "Armistice -- Empires Collapse",
          regions: [
            {
              name: "Victorious Allies",
              color: "#3b82f6",
              countries: ["FRA", "BEL", "GBR", "ITA", "USA", "SRB", "GRC", "ROU"]
            },
            {
              name: "Defeated Central Powers",
              color: "#e74c6f",
              countries: ["DEU", "AUT", "HUN", "TUR", "BGR"]
            },
            {
              name: "New Nations",
              color: "#34d399",
              countries: ["POL", "CZE", "FIN", "LVA", "LTU", "EST"]
            },
            {
              name: "Soviet Russia",
              color: "#a855f7",
              countries: ["RUS"]
            }
          ],
          events: ["Armistice signed November 11", "Ottoman, Austro-Hungarian, German empires collapse", "New nations emerge in Eastern Europe"],
          context: { dominant: "Allied powers victorious; Ottoman, Austro-Hungarian, German, Russian empires dissolved", trade: "Post-war economic disruption; reparations burden Germany", conflict: "World War I ends; Russian Revolution (1917) reshapes Eastern Europe" }
        }
      ]
    }
  },
  {
    id: 8,
    name: "Cold War & Decolonization",
    period: "1900-Present",
    color: "#22d3ee",
    description: "Superpower rivalry, nuclear threat, and the dismantling of colonial empires reshape the world.",
    mapLayers: [
      {
        type: "region",
        name: "NATO Countries (Cold War)",
        color: "#3b82f6",
        countries: ["USA", "CAN", "GBR", "FRA", "BEL", "NLD", "LUX", "DNK", "NOR", "ISL", "ITA", "PRT", "GRC", "TUR", "DEU"],
        info: {
          title: "NATO & the Western Bloc",
          desc: "U.S.-led military alliance formed in 1949 to counter Soviet expansion.",
          details: "<strong>Key Features:</strong><ul><li>North Atlantic Treaty Organization</li><li>Collective defense: attack on one = attack on all</li><li>Containment policy against communism</li><li>Marshall Plan rebuilt Western European economies</li><li>Nuclear deterrence and arms race</li></ul>"
        }
      },
      {
        type: "region",
        name: "Warsaw Pact Countries",
        color: "#e74c6f",
        countries: ["RUS", "POL", "CZE", "SVK", "HUN", "ROU", "BGR", "ALB", "UKR", "BLR", "LVA", "LTU", "EST", "MDA", "GEO", "ARM", "AZE", "KAZ", "UZB", "TKM", "KGZ", "TJK"],
        info: {
          title: "Warsaw Pact & Soviet Bloc",
          desc: "Soviet-led military alliance of Eastern European communist states.",
          details: "<strong>Key Features:</strong><ul><li>Formed in 1955 as counter to NATO</li><li>Soviet Union dominated member states</li><li>Iron Curtain divided Europe</li><li>Suppressed uprisings in Hungary (1956) and Czechoslovakia (1968)</li><li>Dissolved in 1991 with fall of USSR</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Korean War",
        color: "#f59e0b",
        lat: 37.57,
        lng: 126.98,
        info: {
          title: "Korean War (1950-1953)",
          desc: "Cold War proxy conflict between communist North and U.S.-backed South Korea.",
          details: "<strong>Key Features:</strong><ul><li>North Korea invaded South Korea in 1950</li><li>UN forces (led by U.S.) fought alongside South</li><li>China intervened on North's side</li><li>Armistice in 1953 -- Korea remains divided</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Cuban Missile Crisis",
        color: "#e74c6f",
        lat: 22.44,
        lng: -79.97,
        info: {
          title: "Cuban Missile Crisis (1962)",
          desc: "The closest the world came to nuclear war during the Cold War.",
          details: "<strong>Key Features:</strong><ul><li>Soviet nuclear missiles placed in Cuba</li><li>13-day standoff between U.S. and USSR</li><li>Resolved diplomatically -- Soviets removed missiles</li><li>Led to Nuclear Test Ban Treaty and hotline</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Indian Independence",
        color: "#f0b429",
        lat: 28.61,
        lng: 77.21,
        info: {
          title: "Indian Independence (1947)",
          desc: "India gains independence from Britain through nonviolent resistance.",
          details: "<strong>Key Features:</strong><ul><li>Gandhi's nonviolent civil disobedience movement</li><li>Partition of India and Pakistan (massive migration, violence)</li><li>Nehru becomes first Prime Minister</li><li>Inspired decolonization movements across Asia and Africa</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Fall of Berlin Wall",
        color: "#34d399",
        lat: 52.52,
        lng: 13.40,
        info: {
          title: "Fall of the Berlin Wall (1989)",
          desc: "The opening of the Berlin Wall symbolizes the end of the Cold War.",
          details: "<strong>Key Features:</strong><ul><li>Wall had divided East and West Berlin since 1961</li><li>Peaceful revolution in East Germany</li><li>German reunification in 1990</li><li>Collapse of communist regimes across Eastern Europe</li><li>USSR dissolved in 1991</li></ul>"
        }
      }
    ],
    timeline: [
      { year: "1947", title: "Indian and Pakistani independence", desc: "British India partitioned into independent India and Pakistan; triggers massive migration and violence.", tags: ["revolution"] },
      { year: "1948", title: "State of Israel established", desc: "Creation of Israel leads to Arab-Israeli conflict that continues to shape the Middle East.", tags: ["war"] },
      { year: "1949", title: "Chinese Communist Revolution", desc: "Mao Zedong's communists defeat nationalists, establishing the People's Republic of China.", tags: ["revolution"] },
      { year: "1950", title: "Korean War begins", desc: "Cold War proxy war on the Korean peninsula; ends in stalemate and divided Korea.", tags: ["war"] },
      { year: "1955", title: "Bandung Conference", desc: "Asian and African nations meet to promote cooperation and resist Cold War alignment -- birth of the Non-Aligned Movement.", tags: ["culture","revolution"] },
      { year: "1959", title: "Cuban Revolution", desc: "Fidel Castro overthrows Batista, establishing a communist state 90 miles from the U.S.", tags: ["revolution"] },
      { year: "1960", title: "Year of Africa", desc: "Seventeen African nations gain independence from colonial powers.", tags: ["revolution"] },
      { year: "1962", title: "Cuban Missile Crisis", desc: "Closest the world came to nuclear war; resolved through diplomatic negotiations.", tags: ["war"] },
      { year: "1965", title: "Vietnam War escalates", desc: "U.S. commits combat troops to Vietnam in a failed attempt to prevent communist unification.", tags: ["war"] },
      { year: "1979", title: "Iranian Revolution", desc: "Shah overthrown; Ayatollah Khomeini establishes an Islamic republic.", tags: ["revolution"] },
      { year: "1989", title: "Fall of the Berlin Wall", desc: "Symbolic end of the Cold War; communist regimes collapse across Eastern Europe.", tags: ["revolution"] },
      { year: "1991", title: "Soviet Union dissolves", desc: "USSR breaks into 15 independent republics, ending the Cold War.", tags: ["revolution"] }
    ],
    flashcards: [
      { q: "What was the policy of containment?", a: "U.S. Cold War strategy to prevent the spread of communism beyond its existing borders, implemented through military alliances (NATO), economic aid (Marshall Plan), and proxy wars." },
      { q: "What was the Non-Aligned Movement?", a: "A group of nations (mostly newly independent) that refused to formally align with either the U.S. or USSR during the Cold War, led by India's Nehru, Egypt's Nasser, and Yugoslavia's Tito." },
      { q: "How did decolonization occur in Africa?", a: "Through various means: negotiated independence (Ghana, 1957), armed struggle (Algeria, Kenya), and Pan-African movements. Most African nations gained independence in the 1960s." },
      { q: "What was the significance of the partition of India?", a: "British India was divided along religious lines into Hindu-majority India and Muslim-majority Pakistan, causing one of the largest mass migrations in history (~15 million) and violence killing ~1 million." },
      { q: "What were proxy wars?", a: "Conflicts where the U.S. and USSR supported opposing sides without directly fighting each other, such as in Korea, Vietnam, Angola, and Afghanistan." },
      { q: "What caused the collapse of the Soviet Union?", a: "Economic stagnation, Gorbachev's reforms (glasnost/perestroika), nationalist movements, the Afghanistan War, arms race costs, and the fall of communist regimes in Eastern Europe." }
    ],
    simulation: {
      name: "Cold War & Decolonization",
      startYear: 1947,
      endYear: 1991,
      frames: [
        {
          year: 1947,
          label: "Iron Curtain Descends",
          regions: [
            {
              name: "Western Bloc",
              color: "#3b82f6",
              countries: ["USA", "CAN", "GBR", "FRA", "BEL", "NLD", "LUX", "NOR", "DNK", "ISL", "PRT", "ITA", "GRC", "TUR", "AUS", "NZL", "JPN"]
            },
            {
              name: "Soviet Bloc",
              color: "#e74c6f",
              countries: ["RUS", "POL", "CZE", "HUN", "ROU", "BGR", "ALB", "CHN", "MNG", "PRK", "VNM"]
            },
            {
              name: "Newly Independent India",
              color: "#f0b429",
              countries: ["IND", "PAK"]
            }
          ],
          events: ["India and Pakistan gain independence", "Truman Doctrine announced", "Marshall Plan begins"],
          context: { dominant: "USA and USSR in Cold War rivalry; new post-colonial states emerging", trade: "Marshall Plan rebuilds Western Europe; Soviet bloc develops separately", conflict: "Korean War (1950-1953); Berlin Blockade; nuclear arms race accelerating" }
        },
        {
          year: 1960,
          label: "Year of Africa -- Decolonization Wave",
          regions: [
            {
              name: "Western Bloc / NATO",
              color: "#3b82f6",
              countries: ["USA", "CAN", "GBR", "FRA", "BEL", "NLD", "LUX", "NOR", "DNK", "ISL", "PRT", "ITA", "GRC", "TUR", "DEU", "AUS", "NZL", "JPN", "KOR"]
            },
            {
              name: "Soviet Bloc",
              color: "#e74c6f",
              countries: ["RUS", "POL", "CZE", "HUN", "ROU", "BGR", "ALB", "CHN", "MNG", "PRK", "VNM", "CUB"]
            },
            {
              name: "Newly Independent Africa",
              color: "#34d399",
              countries: ["NGA", "GHA", "SEN", "MLI", "BFA", "NER", "CMR", "CAF", "COD", "COG", "GAB", "CIV", "BEN", "TGO", "GIN", "SLE", "LBR", "GMB", "MDG", "SOM", "TZA", "UGA", "KEN", "RWA", "BDI", "AGO"]
            },
            {
              name: "Non-Aligned Nations",
              color: "#f0b429",
              countries: ["IND", "PAK", "EGY", "IDN", "YUG", "IRN", "IRQ", "SYR", "THA", "MYS", "PHL", "MMR"]
            }
          ],
          events: ["17 African nations gain independence", "Cuban Revolution aligns Cuba with USSR"],
          context: { dominant: "USA-USSR rivalry; newly independent African and Asian nations (Non-Aligned Movement)", trade: "Rapid post-war economic growth in West; decolonization reshapes trade", conflict: "Cuban Missile Crisis (1962); Vietnam War escalating; Berlin Wall (1961)" }
        },
        {
          year: 1975,
          label: "Vietnam War Ends -- Detente",
          regions: [
            {
              name: "NATO Bloc",
              color: "#3b82f6",
              countries: ["USA", "CAN", "GBR", "FRA", "BEL", "NLD", "LUX", "NOR", "DNK", "ISL", "PRT", "ITA", "GRC", "TUR", "DEU", "AUS", "NZL", "JPN", "KOR"]
            },
            {
              name: "Communist Bloc",
              color: "#e74c6f",
              countries: ["RUS", "POL", "CZE", "HUN", "ROU", "BGR", "CHN", "MNG", "PRK", "VNM", "CUB", "KHM", "LAO", "AGO", "MOZ"]
            },
            {
              name: "Independent Africa",
              color: "#34d399",
              countries: ["NGA", "GHA", "SEN", "MLI", "BFA", "NER", "CMR", "CAF", "COD", "COG", "GAB", "CIV", "BEN", "TGO", "GNB", "GIN", "SLE", "LBR", "GMB", "MDG", "SOM", "ETH", "SDN", "TZA", "UGA", "KEN", "RWA", "BDI", "ZMB", "ZWE", "BWA", "NAM", "ZAF", "SWZ", "LSO"]
            },
            {
              name: "Non-Aligned",
              color: "#f0b429",
              countries: ["IND", "PAK", "EGY", "IDN", "YUG", "IRN", "THA", "MYS", "PHL", "MMR"]
            }
          ],
          events: ["Vietnam War ends -- communist victory", "Detente between US and USSR"],
          context: { dominant: "USA weakened by Vietnam; OPEC oil power; China under Mao then Deng", trade: "Oil shocks (1973, 1979) disrupt global economy; Japan rises as economic power", conflict: "Vietnam War ends (1975); proxy wars in Angola, Cambodia, Chile" }
        },
        {
          year: 1989,
          label: "Fall of the Berlin Wall",
          regions: [
            {
              name: "NATO / Western Bloc",
              color: "#3b82f6",
              countries: ["USA", "CAN", "GBR", "FRA", "BEL", "NLD", "LUX", "NOR", "DNK", "ISL", "PRT", "ITA", "GRC", "TUR", "DEU", "ESP", "AUS", "NZL", "JPN", "KOR"]
            },
            {
              name: "Collapsing Soviet Bloc",
              color: "#e74c6f",
              opacity: 0.28,
              countries: ["RUS", "UKR", "BLR", "KAZ", "UZB", "TKM", "KGZ", "TJK", "AZE", "ARM", "GEO", "MDA", "LVA", "LTU", "EST", "CHN", "MNG", "PRK", "VNM", "CUB"]
            },
            {
              name: "Democratizing Eastern Europe",
              color: "#34d399",
              countries: ["POL", "CZE", "HUN", "ROU", "BGR", "ALB"]
            }
          ],
          events: ["Berlin Wall falls", "Revolutions across Eastern Europe", "Communist regimes collapse"]
        },
        {
          year: 1991,
          label: "Soviet Union Dissolves",
          regions: [
            {
              name: "NATO / EU Nations",
              color: "#3b82f6",
              countries: ["USA", "CAN", "GBR", "FRA", "BEL", "NLD", "LUX", "NOR", "DNK", "ISL", "PRT", "ITA", "GRC", "TUR", "DEU", "ESP", "AUT", "FIN", "SWE", "POL", "CZE", "HUN", "ROU", "BGR", "AUS", "NZL", "JPN", "KOR"]
            },
            {
              name: "Russian Federation",
              color: "#e74c6f",
              countries: ["RUS"]
            },
            {
              name: "Former Soviet States",
              color: "#f0b429",
              countries: ["UKR", "BLR", "KAZ", "UZB", "TKM", "KGZ", "TJK", "AZE", "ARM", "GEO", "MDA", "LVA", "LTU", "EST"]
            }
          ],
          events: ["Soviet Union officially dissolves", "15 independent republics emerge", "Cold War ends"],
          context: { dominant: "USA as sole superpower after Soviet collapse; European Union forming", trade: "Globalization accelerates; WTO formed (1995); free market capitalism dominant", conflict: "Soviet Union dissolves (1991); Gulf War (1990-91); Yugoslavia breaks apart" }
        }
      ]
    }
  },
  {
    id: 9,
    name: "Globalization",
    period: "1900-Present",
    color: "#f0b429",
    description: "Increasing global interconnection through technology, economics, culture, and environmental challenges.",
    mapLayers: [
      {
        type: "marker",
        name: "European Union",
        color: "#3b82f6",
        lat: 50.85,
        lng: 4.35,
        info: {
          title: "European Union",
          desc: "Political and economic union of European states promoting integration.",
          details: "<strong>Key Features:</strong><ul><li>Evolved from European Coal and Steel Community (1951)</li><li>Single market, free movement of people</li><li>Euro currency adopted by many members</li><li>Model for regional economic integration</li><li>Challenges: Brexit, migration debates, sovereignty</li></ul>"
        }
      },
      {
        type: "marker",
        name: "World Trade Organization",
        color: "#34d399",
        lat: 46.22,
        lng: 6.15,
        info: {
          title: "World Trade Organization (1995)",
          desc: "International organization regulating global trade rules.",
          details: "<strong>Key Features:</strong><ul><li>Successor to GATT (General Agreement on Tariffs and Trade)</li><li>Promotes free trade and settles trade disputes</li><li>164 member nations</li><li>Criticized for favoring wealthy nations</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Tiananmen Square",
        color: "#e74c6f",
        lat: 39.91,
        lng: 116.39,
        info: {
          title: "Tiananmen Square Protests (1989)",
          desc: "Pro-democracy protests crushed by the Chinese military.",
          details: "<strong>Key Features:</strong><ul><li>Students demanded democratic reforms</li><li>Military crackdown killed hundreds to thousands</li><li>China maintained one-party communist rule</li><li>Continued economic liberalization without political reform</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Rwandan Genocide",
        color: "#8b5cf6",
        lat: -1.94,
        lng: 29.87,
        info: {
          title: "Rwandan Genocide (1994)",
          desc: "Approximately 800,000 Tutsis and moderate Hutus killed in 100 days.",
          details: "<strong>Key Features:</strong><ul><li>Colonial legacy of ethnic division</li><li>International community failed to intervene</li><li>Led to reforms in international humanitarian law</li><li>Rwanda has since undergone significant reconciliation</li></ul>"
        }
      },
      {
        type: "marker",
        name: "September 11 Attacks",
        color: "#f59e0b",
        lat: 40.71,
        lng: -74.01,
        info: {
          title: "September 11, 2001",
          desc: "Terrorist attacks on the U.S. reshape global security and foreign policy.",
          details: "<strong>Key Features:</strong><ul><li>Al-Qaeda attacks kill nearly 3,000 people</li><li>U.S. launches 'War on Terror'</li><li>Wars in Afghanistan (2001) and Iraq (2003)</li><li>Increased surveillance and security measures globally</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Rise of China",
        color: "#22d3ee",
        lat: 31.23,
        lng: 121.47,
        info: {
          title: "China's Economic Rise",
          desc: "China becomes the world's second-largest economy through market reforms.",
          details: "<strong>Key Features:</strong><ul><li>Deng Xiaoping's 'Reform and Opening Up' (1978)</li><li>Special Economic Zones attracted foreign investment</li><li>World's largest manufacturer</li><li>Belt and Road Initiative expands global influence</li><li>Lifted hundreds of millions out of poverty</li></ul>"
        }
      }
    ],
    timeline: [
      { year: "1945", title: "United Nations founded", desc: "International organization established to maintain peace, security, and cooperation between nations.", tags: ["culture"] },
      { year: "1948", title: "Universal Declaration of Human Rights", desc: "UN adopts landmark document establishing fundamental human rights for all people.", tags: ["culture","revolution"] },
      { year: "1978", title: "China begins economic reforms", desc: "Deng Xiaoping's market reforms begin transforming China into a global economic powerhouse.", tags: ["trade","revolution"] },
      { year: "1989", title: "Tiananmen Square protests", desc: "Pro-democracy movement in China is violently suppressed by the government.", tags: ["revolution"] },
      { year: "1991", title: "World Wide Web launched", desc: "Tim Berners-Lee's invention revolutionizes communication, commerce, and information access.", tags: ["culture","trade"] },
      { year: "1994", title: "NAFTA takes effect", desc: "North American Free Trade Agreement creates one of the world's largest free trade zones.", tags: ["trade"] },
      { year: "1994", title: "Rwandan Genocide", desc: "800,000 Tutsis and moderate Hutus killed in 100 days while the world largely watched.", tags: ["war"] },
      { year: "1997", title: "Asian Financial Crisis", desc: "Economic crisis begins in Thailand and spreads across East and Southeast Asia.", tags: ["trade"] },
      { year: "2001", title: "September 11 attacks", desc: "Terrorist attacks on the U.S. launch the global 'War on Terror.'", tags: ["war"] },
      { year: "2008", title: "Global Financial Crisis", desc: "Collapse of U.S. housing market triggers worldwide recession.", tags: ["trade"] },
      { year: "2011", title: "Arab Spring", desc: "Wave of pro-democracy protests sweep across the Middle East and North Africa.", tags: ["revolution"] },
      { year: "2015", title: "Paris Climate Agreement", desc: "196 nations agree to limit global warming, marking a milestone in international environmental cooperation.", tags: ["culture"] },
      { year: "2020", title: "COVID-19 pandemic", desc: "Global pandemic exposes vulnerabilities in interconnected world and accelerates digital transformation.", tags: ["trade","culture"] }
    ],
    flashcards: [
      { q: "What are the key features of globalization?", a: "Increased international trade, cultural exchange, technological connectivity (internet), multinational corporations, migration, and shared environmental challenges." },
      { q: "How did Deng Xiaoping transform China's economy?", a: "Through 'Reform and Opening Up' policies: Special Economic Zones, foreign investment, market mechanisms within a communist political framework, and joining the WTO (2001)." },
      { q: "What is the debate over globalization?", a: "Supporters argue it reduces poverty and promotes growth; critics say it increases inequality, exploits workers in developing nations, threatens cultural diversity, and harms the environment." },
      { q: "What was the Arab Spring?", a: "A wave of pro-democracy protests and uprisings across the Middle East and North Africa (2010-2012), beginning in Tunisia. Results varied from democratic transitions to civil wars." },
      { q: "What challenges does globalization pose?", a: "Climate change, pandemic disease spread, terrorism, economic inequality, cultural homogenization, migration crises, and the power of multinational corporations over national governments." },
      { q: "How has technology accelerated globalization?", a: "The internet, smartphones, social media, container shipping, and air travel have dramatically increased the speed and volume of information, goods, and people moving across borders." }
    ],
    simulation: {
      name: "Rise of Global Trade Blocs",
      startYear: 1957,
      endYear: 2020,
      frames: [
        {
          year: 1957,
          label: "Treaty of Rome -- EEC Founded",
          regions: [
            {
              name: "EEC (6 nations)",
              color: "#3b82f6",
              countries: ["FRA", "DEU", "ITA", "BEL", "NLD", "LUX"]
            }
          ],
          events: ["European Economic Community founded", "France, Germany, Italy, Belgium, Netherlands, Luxembourg"]
        },
        {
          year: 1993,
          label: "European Union & NAFTA",
          regions: [
            {
              name: "European Union",
              color: "#3b82f6",
              countries: ["FRA", "DEU", "ITA", "BEL", "NLD", "LUX", "GBR", "IRL", "DNK", "GRC", "ESP", "PRT"]
            },
            {
              name: "NAFTA",
              color: "#34d399",
              countries: ["USA", "CAN", "MEX"]
            },
            {
              name: "ASEAN",
              color: "#f0b429",
              countries: ["THA", "MYS", "SGP", "IDN", "PHL", "BRN"]
            }
          ],
          events: ["EU officially established (Maastricht Treaty)", "NAFTA takes effect"]
        },
        {
          year: 2004,
          label: "EU Expansion & WTO Growth",
          regions: [
            {
              name: "EU (25 members)",
              color: "#3b82f6",
              countries: ["FRA", "DEU", "ITA", "BEL", "NLD", "LUX", "GBR", "IRL", "DNK", "GRC", "ESP", "PRT", "AUT", "FIN", "SWE", "POL", "CZE", "SVK", "HUN", "SVN", "EST", "LVA", "LTU", "CYP", "MLT"]
            },
            {
              name: "NAFTA",
              color: "#34d399",
              countries: ["USA", "CAN", "MEX"]
            },
            {
              name: "ASEAN",
              color: "#f0b429",
              countries: ["THA", "MYS", "SGP", "IDN", "PHL", "BRN", "VNM", "LAO", "KHM", "MMR"]
            },
            {
              name: "China (WTO member)",
              color: "#22d3ee",
              countries: ["CHN"]
            }
          ],
          events: ["10 new nations join EU", "China WTO member since 2001"],
          context: { dominant: "USA as hyperpower; China's rapid economic rise; European Union established", trade: "WTO membership grows; China joins WTO (2001); internet transforms commerce", conflict: "9/11 attacks; US invasion of Afghanistan (2001); Israeli-Palestinian conflict" }
        },
        {
          year: 2020,
          label: "Globalization Under Pressure",
          regions: [
            {
              name: "EU (post-Brexit)",
              color: "#3b82f6",
              countries: ["FRA", "DEU", "ITA", "BEL", "NLD", "LUX", "IRL", "DNK", "GRC", "ESP", "PRT", "AUT", "FIN", "SWE", "POL", "CZE", "SVK", "HUN", "SVN", "EST", "LVA", "LTU", "CYP", "MLT", "ROU", "BGR", "HRV"]
            },
            {
              name: "USMCA (ex-NAFTA)",
              color: "#34d399",
              countries: ["USA", "CAN", "MEX"]
            },
            {
              name: "ASEAN",
              color: "#f0b429",
              countries: ["THA", "MYS", "SGP", "IDN", "PHL", "BRN", "VNM", "LAO", "KHM", "MMR"]
            },
            {
              name: "China (Belt & Road)",
              color: "#22d3ee",
              countries: ["CHN"]
            }
          ],
          events: ["Brexit complete -- UK leaves EU", "COVID-19 disrupts global supply chains", "US-China trade tensions"],
          context: { dominant: "China and USA in strategic competition; multilateral institutions under stress", trade: "COVID-19 disrupts global supply chains; digital economy accelerates", conflict: "COVID-19 pandemic; US-China trade war; Russia-Ukraine tensions rising" }
        }
      ]
    }
  }
];
