const UNITS_4_6 = [
  {
    id: 4,
    name: "Transoceanic Interconnections",
    period: "1450-1750",
    color: "#3b82f6",
    description: "European exploration, the Columbian Exchange, and the emergence of global trade networks.",
    mapLayers: [
      {
        type: "polyline",
        name: "Columbus's Voyage (1492)",
        color: "#e74c6f",
        coords: [[37,-8],[28,-20],[22,-40],[20,-60],[19,-70]],
        yearRange: [1492, 1493],
        info: {
          title: "Columbus's First Voyage (1492)",
          desc: "Christopher Columbus's Atlantic crossing initiated permanent European contact with the Americas.",
          details: "<strong>Impact:</strong><ul><li>Landed in the Bahamas, believing he reached Asia</li><li>Initiated the Columbian Exchange</li><li>Began European colonization of the Americas</li><li>Devastating impact on indigenous populations</li></ul>"
        }
      },
      {
        type: "polyline",
        name: "Triangular Trade",
        color: "#f59e0b",
        coords: [[50,-5],[40,-15],[30,-20],[15,-15],[5,-5],[5,0],[15,-5],[25,-20],[30,-40],[25,-60],[20,-75],[25,-82],[30,-78],[35,-65],[40,-45],[45,-20],[50,-5]],
        yearRange: [1550, 1807],
        info: {
          title: "Atlantic Triangular Trade",
          desc: "Three-legged trade network linking Europe, Africa, and the Americas.",
          details: "<strong>The Three Legs:</strong><ul><li><strong>Europe -> Africa:</strong> Manufactured goods (guns, textiles, rum)</li><li><strong>Africa -> Americas:</strong> Enslaved people (Middle Passage)</li><li><strong>Americas -> Europe:</strong> Raw materials (sugar, tobacco, cotton)</li><li>~12.5 million Africans forcibly transported</li></ul>"
        }
      },
      {
        type: "polyline",
        name: "Manila Galleon Trade",
        color: "#22d3ee",
        coords: [[15,120],[18,140],[22,160],[25,170],[28,180],[30,-170],[28,-160],[25,-145],[22,-130],[20,-115],[18,-105]],
        yearRange: [1565, 1815],
        info: {
          title: "Manila Galleon Trade (1565-1815)",
          desc: "Spanish trade route connecting Manila (Philippines) with Acapulco (Mexico).",
          details: "<strong>Key Features:</strong><ul><li>Silver from Americas traded for Asian luxury goods</li><li>Chinese silk, porcelain, and spices shipped to Americas</li><li>First regular transpacific trade route</li><li>Connected global economy -- American silver reached China</li></ul>"
        }
      },
      {
        type: "polyline",
        name: "Portuguese Route to India",
        color: "#34d399",
        coords: [[38,-9],[33,-10],[25,-16],[15,-15],[5,-8],[0,5],[-10,15],[-25,20],[-35,20],[-35,30],[-25,35],[-10,40],[0,42],[10,48],[15,55],[18,65],[15,73]],
        yearRange: [1498, 1750],
        info: {
          title: "Portuguese Route to India (1498)",
          desc: "Vasco da Gama's sea route around Africa to India.",
          details: "<strong>Impact:</strong><ul><li>Bypassed Ottoman-controlled overland routes</li><li>Established Portuguese trading posts across Indian Ocean</li><li>Goa, Malacca, Macao became key Portuguese bases</li><li>Disrupted existing Indian Ocean trade patterns</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Tenochtitlan / Mexico City",
        color: "#f59e0b",
        lat: 19.43,
        lng: -99.13,
        info: {
          title: "Fall of the Aztec Empire (1521)",
          desc: "Hernan Cortes and indigenous allies conquered the Aztec capital.",
          details: "<strong>Key Factors:</strong><ul><li>Spanish military technology (guns, steel, horses)</li><li>Smallpox devastated native populations</li><li>Alliances with peoples conquered by Aztecs</li><li>Tenochtitlan rebuilt as Mexico City</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Potosi Silver Mines",
        color: "#c0c0c0",
        lat: -19.58,
        lng: -65.75,
        info: {
          title: "Potosi Silver Mines",
          desc: "Largest source of silver in the colonial world, fueling global trade.",
          details: "<strong>Key Features:</strong><ul><li>Produced ~80% of world's silver in 16th-17th centuries</li><li>Mita labor system forced indigenous workers into mines</li><li>Silver flowed to Europe and China via Manila Galleons</li><li>Caused inflation in Europe (Price Revolution)</li></ul>"
        }
      }
    ],
    timeline: [
      { year: "1488", title: "Bartolomeu Dias rounds Cape of Good Hope", desc: "Portuguese explorer proves a sea route around Africa is possible, opening the way to the Indian Ocean.", tags: ["expansion"] },
      { year: "1492", title: "Columbus reaches the Americas", desc: "Christopher Columbus's voyage initiates permanent European contact with the Western Hemisphere.", tags: ["expansion"] },
      { year: "1494", title: "Treaty of Tordesillas", desc: "Spain and Portugal divide the non-Christian world between them, sanctioned by the Pope.", tags: ["expansion"] },
      { year: "1498", title: "Vasco da Gama reaches India", desc: "First European to reach India by sea, establishing direct maritime trade between Europe and Asia.", tags: ["trade","expansion"] },
      { year: "1521", title: "Cortes conquers the Aztec Empire", desc: "Spanish conquistadors and indigenous allies topple the Aztec Empire through warfare and disease.", tags: ["war","expansion"] },
      { year: "1533", title: "Pizarro conquers the Inca Empire", desc: "Francisco Pizarro captures and executes Inca emperor Atahualpa, destroying the Inca state.", tags: ["war","expansion"] },
      { year: "1545", title: "Potosi silver mines discovered", desc: "Massive silver deposits in Bolivia fuel global trade and cause inflation across Europe.", tags: ["trade"] },
      { year: "1565", title: "Manila Galleon trade begins", desc: "Regular transpacific trade route connects Asia and the Americas through Spanish Philippines.", tags: ["trade"] },
      { year: "1600", title: "British East India Company founded", desc: "Joint-stock company begins English trade in the Indian Ocean, eventually controlling much of India.", tags: ["trade","empire"] },
      { year: "1602", title: "Dutch East India Company (VOC) founded", desc: "The world's first multinational corporation dominates the spice trade in Southeast Asia.", tags: ["trade"] },
      { year: "1619", title: "First enslaved Africans arrive in Virginia", desc: "Beginning of systematic slave trade in English North America.", tags: ["trade"] },
      { year: "1700s", title: "Columbian Exchange transforms world", desc: "Ongoing exchange of crops, animals, diseases, and cultures reshapes societies across the globe.", tags: ["trade","culture"] }
    ],
    flashcards: [
      { q: "What was the Columbian Exchange?", a: "The widespread transfer of plants, animals, diseases, technology, and culture between the Americas, Europe, and Africa following Columbus's 1492 voyage." },
      { q: "How did silver from the Americas affect the global economy?", a: "American silver (mainly from Potosi) flowed to Europe and then to China via Manila Galleons, creating the first truly global trade network and causing price inflation in Europe." },
      { q: "What was the Middle Passage?", a: "The forced voyage of enslaved Africans across the Atlantic Ocean to the Americas. Conditions were horrific, with mortality rates of 15-20% or higher." },
      { q: "What was the encomienda system?", a: "A Spanish colonial system granting colonists the right to demand labor and tribute from indigenous peoples in exchange for protection and religious instruction." },
      { q: "How did European diseases affect indigenous populations?", a: "Diseases like smallpox, measles, and influenza killed up to 90% of indigenous Americans who had no immunity, enabling European conquest." },
      { q: "What were joint-stock companies?", a: "Business organizations (like the VOC and British East India Company) where investors bought shares to fund trading ventures, spreading risk and enabling large-scale overseas trade." }
    ],
    simulation: {
      name: "European Colonial Expansion",
      startYear: 1492,
      endYear: 1750,
      frames: [
        {
          year: 1492,
          label: "Columbus Reaches the Americas",
          context: {
            dominant: "Spain and Portugal pioneering Atlantic routes; Ming Dynasty China",
            trade: "Columbian Exchange begins -- New World crops and silver flow to Europe and Asia",
            conflict: "Spanish conquest of Aztec (1519-1521) and Inca (1532-1572) empires"
          },
          regions: [
            {
              name: "Spanish Caribbean",
              color: "#e74c6f",
              countries: ["CUB", "DOM", "HTI", "JAM", "PRI", "TTO"]
            }
          ],
          events: ["Columbus lands in the Bahamas", "Beginning of European colonization"]
        },
        {
          year: 1540,
          label: "Spanish Conquest of Americas",
          context: {
            dominant: "Spanish Empire in Americas; Portuguese in Brazil and Indian Ocean",
            trade: "Atlantic triangular trade developing; silver from Potosi floods global markets",
            conflict: "Eighty Years War; Dutch revolt against Spain; indigenous resistance"
          },
          regions: [
            {
              name: "Spanish Empire",
              color: "#e74c6f",
              countries: ["ESP", "MEX", "PER", "COL", "CHL", "ARG", "BOL", "ECU", "VEN", "PRY", "URY", "CUB", "DOM"]
            },
            {
              name: "Portuguese Brazil",
              color: "#34d399",
              countries: ["BRA"]
            }
          ],
          events: ["Aztec and Inca Empires conquered", "Silver mining begins at Potosi"]
        },
        {
          year: 1650,
          label: "Colonial Powers Compete",
          context: {
            dominant: "British, Dutch, French competing for Atlantic and Asian trade",
            trade: "Transatlantic slave trade at scale; East India Companies dominate Asia",
            conflict: "War of Spanish Succession; ongoing Mughal decline"
          },
          regions: [
            {
              name: "Spanish Empire",
              color: "#e74c6f",
              countries: ["ESP", "MEX", "PER", "COL", "CHL", "ARG", "BOL", "ECU", "VEN", "PRY", "URY", "CUB", "DOM", "GTM", "HND", "SLV", "NIC", "CRI", "PAN"]
            },
            {
              name: "Portuguese Empire",
              color: "#34d399",
              countries: ["PRT", "BRA", "AGO", "MOZ", "GNB", "CPV", "STP", "LKA"]
            },
            {
              name: "Dutch Territories",
              color: "#f59e0b",
              countries: ["NLD", "IDN", "ZAF", "SUR"]
            },
            {
              name: "English Colonies",
              color: "#3b82f6",
              countries: ["GBR", "IND", "JAM", "GUY"]
            },
            {
              name: "French Colonies",
              color: "#a855f7",
              countries: ["FRA", "DZA", "HTI", "GUF"]
            }
          ],
          events: ["Dutch dominate spice trade", "English colonies grow in North America"]
        },
        {
          year: 1750,
          label: "Global Colonial Networks",
          context: {
            dominant: "British Empire growing; French colonial presence; Qing Dynasty stable",
            trade: "Cotton, tobacco, sugar, and enslaved Africans define Atlantic economy",
            conflict: "Seven Years War approaching; European rivalries intensify globally"
          },
          regions: [
            {
              name: "Spanish Empire",
              color: "#e74c6f",
              countries: ["ESP", "MEX", "PER", "COL", "CHL", "ARG", "BOL", "ECU", "VEN", "PRY", "URY", "CUB", "DOM", "GTM", "HND", "SLV", "NIC", "CRI", "PAN", "PHL"]
            },
            {
              name: "Portuguese Empire",
              color: "#34d399",
              countries: ["PRT", "BRA", "AGO", "MOZ", "GNB", "CPV", "STP", "LKA", "TLS"]
            },
            {
              name: "British Empire",
              color: "#3b82f6",
              countries: ["GBR", "IND", "JAM", "GUY", "BGD", "LKA"]
            },
            {
              name: "French Empire",
              color: "#a855f7",
              countries: ["FRA", "DZA", "HTI", "GUF", "MTQ", "GLP"]
            }
          ],
          events: ["Silver flows globally via Manila Galleons", "Plantation economies dominate Americas"]
        }
      ]
    }
  },
  {
    id: 5,
    name: "Revolutions",
    period: "1750-1900",
    color: "#f59e0b",
    description: "Enlightenment ideas inspire political revolutions and movements challenging established orders.",
    mapLayers: [
      {
        type: "marker",
        name: "American Revolution",
        color: "#3b82f6",
        lat: 39.95,
        lng: -75.16,
        info: {
          title: "American Revolution (1775-1783)",
          desc: "Thirteen colonies win independence from Britain, establishing a democratic republic.",
          details: "<strong>Key Features:</strong><ul><li>Influenced by Enlightenment thinkers (Locke, Montesquieu)</li><li>Declaration of Independence asserted natural rights</li><li>Constitution created federal republic with separation of powers</li><li>Inspired revolutionary movements worldwide</li></ul>"
        }
      },
      {
        type: "marker",
        name: "French Revolution",
        color: "#e74c6f",
        lat: 48.86,
        lng: 2.35,
        info: {
          title: "French Revolution (1789-1799)",
          desc: "Overthrow of the French monarchy and radical restructuring of society.",
          details: "<strong>Key Features:</strong><ul><li>Declaration of the Rights of Man and Citizen</li><li>Execution of Louis XVI and Marie Antoinette</li><li>Reign of Terror under Robespierre</li><li>Rose of Napoleon Bonaparte</li><li>Spread revolutionary ideals across Europe</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Haitian Revolution",
        color: "#f0b429",
        lat: 18.97,
        lng: -72.34,
        info: {
          title: "Haitian Revolution (1791-1804)",
          desc: "Only successful large-scale slave revolt in history, establishing the first free Black republic.",
          details: "<strong>Key Features:</strong><ul><li>Led by Toussaint L'Ouverture and Jean-Jacques Dessalines</li><li>Enslaved people defeated French, Spanish, and British forces</li><li>First independent nation in Latin America</li><li>Inspired abolition movements worldwide</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Simon Bolivar's Campaigns",
        color: "#34d399",
        lat: 4.71,
        lng: -74.07,
        info: {
          title: "Latin American Independence Movements",
          desc: "Simon Bolivar and other leaders liberate South America from Spanish rule.",
          details: "<strong>Key Features:</strong><ul><li>Bolivar liberated Venezuela, Colombia, Ecuador, Peru, Bolivia</li><li>Jose de San Martin liberated Argentina, Chile, Peru</li><li>Miguel Hidalgo initiated Mexican independence</li><li>Creole elites led most movements</li><li>Inspired by American and French Revolutions</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Taiping Rebellion",
        color: "#a855f7",
        lat: 30.57,
        lng: 114.27,
        info: {
          title: "Taiping Rebellion (1850-1864)",
          desc: "Massive civil war in China that killed 20-30 million people.",
          details: "<strong>Key Features:</strong><ul><li>Led by Hong Xiuquan who claimed to be Jesus's brother</li><li>Challenged Qing Dynasty authority</li><li>Promised land redistribution and gender equality</li><li>One of the deadliest conflicts in history</li><li>Weakened the Qing Dynasty significantly</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Meiji Restoration",
        color: "#22d3ee",
        lat: 35.68,
        lng: 139.69,
        info: {
          title: "Meiji Restoration (1868)",
          desc: "Japan rapidly modernizes and industrializes to resist Western imperialism.",
          details: "<strong>Key Features:</strong><ul><li>Emperor Meiji restored to power, ending shogunate</li><li>Rapid industrialization modeled on Western nations</li><li>Modern army and navy built from scratch</li><li>Abolished feudal system and samurai class</li><li>Japan became an imperial power itself</li></ul>"
        }
      }
    ],
    timeline: [
      { year: "1750s", title: "Enlightenment ideas spread", desc: "Philosophers like Locke, Voltaire, Rousseau, and Montesquieu challenge traditional authority and promote reason.", tags: ["culture","revolution"] },
      { year: "1775", title: "American Revolution begins", desc: "Colonial rebellion against British rule leads to the creation of the United States.", tags: ["war","revolution"] },
      { year: "1789", title: "French Revolution begins", desc: "Storming of the Bastille triggers radical political and social upheaval in France.", tags: ["war","revolution"] },
      { year: "1791", title: "Haitian Revolution begins", desc: "Enslaved people in Saint-Domingue revolt, eventually creating the independent nation of Haiti.", tags: ["war","revolution"] },
      { year: "1804", title: "Haiti declares independence", desc: "First free Black republic and second independent nation in the Western Hemisphere.", tags: ["revolution"] },
      { year: "1810", title: "Latin American independence movements begin", desc: "Creole leaders in Spanish colonies launch wars of independence inspired by Enlightenment ideals.", tags: ["war","revolution"] },
      { year: "1839", title: "First Opium War begins", desc: "Britain forces China to open trade ports after China tries to ban the opium trade.", tags: ["war","trade"] },
      { year: "1848", title: "Revolutions sweep Europe", desc: "Wave of revolutions across Europe demanding liberal reforms, nationalism, and constitutional governance.", tags: ["revolution"] },
      { year: "1850", title: "Taiping Rebellion begins", desc: "Massive uprising in China against the Qing Dynasty kills millions.", tags: ["war","revolution"] },
      { year: "1857", title: "Sepoy Rebellion in India", desc: "Indian soldiers revolt against British East India Company rule, leading to direct British crown control.", tags: ["war","revolution"] },
      { year: "1868", title: "Meiji Restoration in Japan", desc: "Japan begins rapid modernization to compete with Western powers.", tags: ["revolution","culture"] },
      { year: "1871", title: "German and Italian unification", desc: "Nationalist movements create unified German and Italian nation-states.", tags: ["revolution"] }
    ],
    flashcards: [
      { q: "How did the Enlightenment influence revolutions?", a: "Enlightenment ideas about natural rights, social contracts, popular sovereignty, and separation of powers provided the intellectual justification for challenging monarchical authority." },
      { q: "Why was the Haitian Revolution historically significant?", a: "It was the only successful large-scale slave revolt in history, created the first free Black republic, challenged European notions of racial hierarchy, and inspired abolition movements globally." },
      { q: "What was the significance of the Meiji Restoration?", a: "Japan rapidly modernized its military, economy, and government based on Western models while maintaining cultural identity, becoming the only non-Western nation to industrialize in the 19th century." },
      { q: "What role did Creoles play in Latin American revolutions?", a: "Creoles (American-born descendants of Europeans) led most independence movements because they had wealth and education but resented Spanish-born peninsulares holding top political positions." },
      { q: "What were the causes of the French Revolution?", a: "Financial crisis, Enlightenment ideas, resentment of aristocratic privilege, food shortages, and the example of the American Revolution all contributed to revolutionary fervor." },
      { q: "How did the Opium Wars affect China?", a: "China was forced to open ports to Western trade, cede Hong Kong to Britain, accept extraterritoriality, and pay indemnities -- beginning China's 'Century of Humiliation.'" }
    ],
    simulation: {
      name: "Age of Revolutions",
      startYear: 1775,
      endYear: 1871,
      frames: [
        {
          year: 1775,
          label: "American Revolution Begins",
          context: {
            dominant: "British Empire at height; French ancien regime; American colonies rebelling",
            trade: "Industrial Revolution begins in Britain; factory goods replace artisan crafts",
            conflict: "American Revolution (1775-1783); Haitian Revolution beginning"
          },
          regions: [
            {
              name: "13 Colonies (Rebelling)",
              color: "#3b82f6",
              countries: ["USA"]
            },
            {
              name: "British Empire",
              color: "#e74c6f",
              countries: ["GBR", "CAN"]
            }
          ],
          events: ["Colonial rebellion against Britain", "Declaration of Independence (1776)"]
        },
        {
          year: 1789,
          label: "French Revolution",
          context: {
            dominant: "Napoleonic France; British Empire; new American republic",
            trade: "British industrial exports dominate; cotton from American South and India",
            conflict: "Napoleonic Wars reshape Europe; Latin American independence movements"
          },
          regions: [
            {
              name: "United States",
              color: "#3b82f6",
              countries: ["USA"]
            },
            {
              name: "Revolutionary France",
              color: "#e74c6f",
              countries: ["FRA"]
            }
          ],
          events: ["Storming of the Bastille", "Declaration of Rights of Man"]
        },
        {
          year: 1804,
          label: "Haitian Independence & Napoleon",
          context: {
            dominant: "Napoleonic France; British Empire; new American republic",
            trade: "British industrial exports dominate; cotton from American South and India",
            conflict: "Napoleonic Wars reshape Europe; Latin American independence movements"
          },
          regions: [
            {
              name: "United States",
              color: "#3b82f6",
              countries: ["USA"]
            },
            {
              name: "Napoleonic France",
              color: "#e74c6f",
              countries: ["FRA", "ESP", "ITA", "DEU", "NLD", "BEL", "POL", "CHE", "DNK", "NOR"]
            },
            {
              name: "Haiti (Independent)",
              color: "#f0b429",
              countries: ["HTI"]
            }
          ],
          events: ["Haiti declares independence", "Napoleon controls much of Europe"]
        },
        {
          year: 1830,
          label: "Latin American Independence",
          context: {
            dominant: "British Empire at peak; industrializing Germany and France; Qing weakening",
            trade: "Free trade ideology; Opium Wars force open Chinese markets",
            conflict: "Revolutions of 1848 in Europe; Taiping Rebellion in China"
          },
          regions: [
            {
              name: "Independent Latin America",
              color: "#34d399",
              countries: ["MEX", "COL", "VEN", "ECU", "PER", "BOL", "CHL", "ARG", "PRY", "URY", "CRI", "GTM", "HND", "SLV", "NIC", "PAN"]
            },
            {
              name: "United States",
              color: "#3b82f6",
              countries: ["USA"]
            },
            {
              name: "Brazil (Independent)",
              color: "#f0b429",
              countries: ["BRA"]
            }
          ],
          events: ["Bolivar liberates northern South America", "Most of Latin America independent by 1825"]
        },
        {
          year: 1871,
          label: "Unification Movements",
          context: {
            dominant: "European imperial powers carving up Africa and Asia",
            trade: "Industrial goods for raw materials; Suez Canal opens (1869)",
            conflict: "Berlin Conference partitions Africa; Meiji Japan industrializes"
          },
          regions: [
            {
              name: "German Empire",
              color: "#a855f7",
              countries: ["DEU"]
            },
            {
              name: "Kingdom of Italy",
              color: "#34d399",
              countries: ["ITA"]
            },
            {
              name: "Meiji Japan",
              color: "#22d3ee",
              countries: ["JPN"]
            }
          ],
          events: ["German unification under Bismarck", "Italian unification complete", "Japan modernizing rapidly"]
        }
      ]
    }
  },
  {
    id: 6,
    name: "Consequences of Industrialization",
    period: "1750-1900",
    color: "#34d399",
    description: "The Industrial Revolution transforms economies, societies, and global power dynamics.",
    mapLayers: [
      {
        type: "marker",
        name: "Industrial Britain",
        color: "#e74c6f",
        lat: 53.48,
        lng: -2.24,
        info: {
          title: "Industrial Revolution in Britain",
          desc: "Britain becomes the world's first industrialized nation starting in the mid-18th century.",
          details: "<strong>Key Features:</strong><ul><li>Steam engine, spinning jenny, power loom</li><li>Factory system replaces cottage industry</li><li>Urbanization and growth of cities like Manchester</li><li>Coal and iron production skyrocket</li><li>Railways transform transportation</li></ul>"
        }
      },
      {
        type: "region",
        name: "British India",
        color: "#3b82f6",
        countries: ["IND", "PAK", "BGD", "LKA", "MMR", "NPL", "BTN"],
        info: {
          title: "British Raj in India",
          desc: "British colonial control over the Indian subcontinent (1858-1947).",
          details: "<strong>Key Features:</strong><ul><li>India as source of raw materials (cotton, indigo, tea)</li><li>British manufactured goods destroyed Indian textile industry</li><li>Railways built to extract resources</li><li>Cash crop farming caused famines</li></ul>"
        }
      },
      {
        type: "region",
        name: "Scramble for Africa",
        color: "#f59e0b",
        countries: ["DZA", "AGO", "BEN", "BWA", "BFA", "BDI", "CMR", "CAF", "TCD", "COG", "COD", "DJI", "ERI", "GAB", "GMB", "GHA", "GIN", "GNB", "KEN", "LSO", "MDG", "MWI", "MLI", "MRT", "MOZ", "NAM", "NER", "NGA", "RWA", "SEN", "SLE", "SOM", "ZAF", "SSD", "SDN", "SWZ", "TZA", "TGO", "UGA", "ZMB", "ZWE", "EGY", "LBY", "TUN", "MAR"],
        info: {
          title: "Scramble for Africa (1881-1914)",
          desc: "European powers colonize nearly the entire African continent.",
          details: "<strong>Key Features:</strong><ul><li>Berlin Conference (1884-85) divided Africa among Europeans</li><li>Only Ethiopia and Liberia remained independent</li><li>Driven by raw materials, markets, and nationalism</li><li>Social Darwinism and 'civilizing mission' as justification</li><li>Devastating impact on African societies</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Suez Canal",
        color: "#22d3ee",
        lat: 30.46,
        lng: 32.34,
        info: {
          title: "Suez Canal (Opened 1869)",
          desc: "Strategic waterway connecting the Mediterranean Sea to the Red Sea.",
          details: "<strong>Key Features:</strong><ul><li>Cut travel time from Europe to Asia dramatically</li><li>Built with forced Egyptian labor</li><li>Britain gained control in 1875</li><li>Key strategic asset in global imperialism</li></ul>"
        }
      },
      {
        type: "marker",
        name: "Boxer Rebellion",
        color: "#a855f7",
        lat: 39.91,
        lng: 116.39,
        info: {
          title: "Boxer Rebellion (1899-1901)",
          desc: "Anti-foreign, anti-Christian uprising in China suppressed by international forces.",
          details: "<strong>Key Features:</strong><ul><li>Society of Righteous and Harmonious Fists</li><li>Opposed Western influence and Christian missionaries</li><li>Eight-nation alliance crushed the rebellion</li><li>Further weakened Qing Dynasty</li></ul>"
        }
      }
    ],
    timeline: [
      { year: "1760s", title: "Industrial Revolution begins in Britain", desc: "Mechanization of textile production launches an era of unprecedented economic transformation.", tags: ["revolution"] },
      { year: "1793", title: "Eli Whitney invents the cotton gin", desc: "Increases cotton processing efficiency, dramatically expanding slavery in the American South.", tags: ["trade"] },
      { year: "1807", title: "Britain abolishes the slave trade", desc: "Parliament bans the Atlantic slave trade, though slavery continues in colonies.", tags: ["revolution"] },
      { year: "1825", title: "First passenger railway opens", desc: "Stockton and Darlington Railway demonstrates the potential of steam-powered transportation.", tags: ["trade"] },
      { year: "1839", title: "First Opium War", desc: "Britain forces open Chinese markets after China attempts to restrict the opium trade.", tags: ["war","trade"] },
      { year: "1848", title: "Marx and Engels publish Communist Manifesto", desc: "Critique of capitalism inspires workers' movements and later communist revolutions.", tags: ["revolution","culture"] },
      { year: "1853", title: "Commodore Perry opens Japan", desc: "U.S. naval expedition forces Japan to end its isolationist policies.", tags: ["trade","expansion"] },
      { year: "1857", title: "Sepoy Rebellion / Indian Revolt", desc: "Major uprising against British East India Company leads to direct British Crown rule.", tags: ["war","revolution"] },
      { year: "1869", title: "Suez Canal opens", desc: "Strategic waterway dramatically reduces travel time between Europe and Asia.", tags: ["trade"] },
      { year: "1884", title: "Berlin Conference", desc: "European powers divide Africa among themselves with no African representation.", tags: ["empire","expansion"] },
      { year: "1898", title: "Spanish-American War", desc: "U.S. emerges as an imperial power, gaining Philippines, Guam, and Puerto Rico.", tags: ["war","expansion"] },
      { year: "1899", title: "Boxer Rebellion in China", desc: "Anti-foreign uprising in China suppressed by an eight-nation alliance.", tags: ["war","revolution"] }
    ],
    flashcards: [
      { q: "What were the causes of the Industrial Revolution in Britain?", a: "Access to coal and iron, colonial markets, agricultural revolution freeing labor, stable government, banking system, geographical advantages (rivers, ports), and a culture of innovation." },
      { q: "What was the Berlin Conference (1884-85)?", a: "A meeting of European powers that established rules for the colonization of Africa. No Africans were invited. It resulted in the partition of nearly the entire continent among European nations." },
      { q: "How did industrialization change social structures?", a: "It created new classes (industrial bourgeoisie and proletariat), urbanization, child labor, poor working conditions, and eventually labor movements and reforms." },
      { q: "What was Social Darwinism?", a: "A misapplication of Darwin's evolutionary theories to human societies, used to justify imperialism, racism, and the supposed superiority of European civilization." },
      { q: "How did imperialism affect colonized economies?", a: "Colonized regions were forced to produce cash crops and raw materials for export, destroying local industries and creating economic dependency on colonial powers." },
      { q: "What resistance movements arose against imperialism?", a: "The Sepoy Rebellion in India, Boxer Rebellion in China, Zulu resistance in South Africa, the Mahdist War in Sudan, and Ethiopian victory at the Battle of Adwa (1896)." }
    ],
    simulation: {
      name: "Industrial & Imperial Expansion",
      startYear: 1750,
      endYear: 1914,
      frames: [
        {
          year: 1750,
          label: "Britain Begins Industrializing",
          context: {
            dominant: "British industrialists; European colonial administrations; Meiji Japan emerging",
            trade: "Raw materials flow from colonies to European factories; manufactured goods flow back",
            conflict: "Anti-colonial resistance movements; Sepoy Mutiny (1857) in India"
          },
          regions: [
            {
              name: "Industrial Britain",
              color: "#e74c6f",
              countries: ["GBR"]
            }
          ],
          events: ["Textile mechanization begins", "Coal and iron production grows"]
        },
        {
          year: 1830,
          label: "Industrialization Spreads",
          context: {
            dominant: "European powers dominate global economy; Japan modernizing after 1868",
            trade: "Railroads and steamships accelerate global trade; telegraph connects continents",
            conflict: "Scramble for Africa underway; Sino-Japanese War (1894) reveals Qing weakness"
          },
          regions: [
            {
              name: "Industrial Britain",
              color: "#e74c6f",
              countries: ["GBR"]
            },
            {
              name: "Industrializing Europe",
              color: "#f0b429",
              countries: ["FRA", "BEL", "DEU", "NLD"]
            },
            {
              name: "British India",
              color: "#3b82f6",
              countries: ["IND"]
            }
          ],
          events: ["Railways transform transportation", "British textile industry dominates global markets"]
        },
        {
          year: 1884,
          label: "Berlin Conference -- Scramble for Africa",
          context: {
            dominant: "British, French, German, Russian, and American empires competing",
            trade: "Global markets integrated; multinational corporations emerging",
            conflict: "Boxer Rebellion in China; Russo-Japanese War approaching (1904-1905)"
          },
          regions: [
            {
              name: "Industrial Powers",
              color: "#e74c6f",
              countries: ["GBR", "FRA", "DEU", "BEL", "NLD", "PRT", "ESP", "ITA", "AUT"]
            },
            {
              name: "European Africa",
              color: "#f59e0b",
              countries: ["DZA", "AGO", "BEN", "BWA", "BFA", "BDI", "CMR", "CAF", "TCD", "COG", "COD", "DJI", "ERI", "GAB", "GMB", "GHA", "GIN", "GNB", "KEN", "LSO", "MDG", "MWI", "MLI", "MRT", "MOZ", "NAM", "NER", "NGA", "RWA", "SEN", "SLE", "SOM", "ZAF", "SSD", "SDN", "SWZ", "TZA", "TGO", "UGA", "ZMB", "ZWE", "EGY", "LBY", "TUN", "MAR"]
            },
            {
              name: "British India",
              color: "#3b82f6",
              countries: ["IND", "PAK", "BGD", "LKA", "MMR"]
            }
          ],
          events: ["Berlin Conference partitions Africa", "Only Ethiopia and Liberia remain independent"]
        },
        {
          year: 1914,
          label: "World Industrialized & Colonized",
          context: {
            dominant: "British, French, German, Russian, and American empires competing",
            trade: "Global markets integrated; multinational corporations emerging",
            conflict: "Boxer Rebellion in China; Russo-Japanese War approaching (1904-1905)"
          },
          regions: [
            {
              name: "Industrial Nations",
              color: "#e74c6f",
              countries: ["GBR", "FRA", "DEU", "BEL", "NLD", "PRT", "ESP", "ITA", "USA", "JPN"]
            },
            {
              name: "Colonial Africa",
              color: "#f59e0b",
              countries: ["DZA", "AGO", "BEN", "BWA", "BFA", "BDI", "CMR", "CAF", "TCD", "COG", "COD", "DJI", "ERI", "GAB", "GMB", "GHA", "GIN", "GNB", "KEN", "LSO", "MDG", "MWI", "MLI", "MRT", "MOZ", "NAM", "NER", "NGA", "RWA", "SEN", "SLE", "SOM", "ZAF", "SSD", "SDN", "SWZ", "TZA", "TGO", "UGA", "ZMB", "ZWE", "EGY", "LBY", "TUN", "MAR"]
            },
            {
              name: "British India",
              color: "#3b82f6",
              countries: ["IND", "PAK", "BGD", "LKA", "MMR", "NPL", "BTN"]
            },
            {
              name: "European SE Asia",
              color: "#a855f7",
              countries: ["VNM", "LAO", "KHM", "IDN", "MYS", "SGP", "PHL"]
            }
          ],
          events: ["Global economy interconnected", "Tensions between imperial powers growing"]
        }
      ]
    }
  }
];
