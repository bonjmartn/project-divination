const bagOfRunes = [
  {
    id: 1,
    name: 'Fehu',
    englishName: 'Cattle',
    phoneme: 'F',
    description: 'Wealth',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_01-FEHU.png'
  },
  {
    id: 2,
    name: 'Uruz',
    englishName: 'Aurochs',
    phoneme: 'U',
    description: 'Strength of will',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_02-URUZ.png'
  },
  {
    id: 3,
    name: 'Thurisaz',
    englishName: 'Giant',
    phoneme: 'Th',
    description: 'Danger, suffering',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_03-THURISAZ.png'
  },
  {
    id: 4,
    name: 'Ansuz',
    englishName: 'An Aesir god',
    phoneme: 'A',
    description: 'Prosperity, vitality',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_04-ANSUZ.png'
  },
  {
    id: 5,
    name: 'Raidho',
    englishName: 'Journey on horseback',
    phoneme: 'R',
    description: 'Movement, work, growth',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_05-RAIDHO.png'
  },
  {
    id: 6,
    name: 'Kaunan',
    englishName: 'Ulcer',
    phoneme: 'K',
    description: 'Mortality, pain',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_06-KENAZ.png'
  },
  {
    id: 7,
    name: 'Gebo',
    englishName: 'Gift',
    phoneme: 'G',
    description: 'Generosity',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_07-GEBO.png'
  },
  {
    id: 8,
    name: 'Wunjo',
    englishName: 'Joy',
    phoneme: 'W',
    description: 'Joy, ecstasy',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_08-WUNJO.png'
  },
  {
    id: 9,
    name: 'Hagalaz',
    englishName: 'Hail',
    phoneme: 'H',
    description: 'Destruction, chaos',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_09-HAGALAZ.png'
  },
  {
    id: 10,
    name: 'Naudhiz',
    englishName: 'Need',
    phoneme: 'N',
    description: 'Need, unfulfilled desire',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_10-NAUTHIZ.png'
  },
  {
    id: 11,
    name: 'Isaz',
    englishName: 'Ice',
    phoneme: 'I',
    description: 'Unknown',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_11-ISA.png'
  },
  {
    id: 12,
    name: 'Jera',
    englishName: 'Year',
    phoneme: 'Y',
    description: 'Harvest, reward',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_12-JERA.png'
  },
  {
    id: 13,
    name: 'Eihwaz',
    englishName: 'Yew',
    phoneme: 'I',
    description: 'Strength, stability',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_13-EIHWAZ.png'
  },
  {
    id: 14,
    name: 'Perthro',
    englishName: 'Unknown',
    phoneme: 'P',
    description: 'Unknown',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_14-PERTHRO.png'
  },
  {
    id: 15,
    name: 'Algiz',
    englishName: 'Unknown',
    phoneme: 'Z',
    description: 'Protection from enemies, defense of that which one loves',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_15-ALGIZ.png'
  },
  {
    id: 16,
    name: 'Sowilo',
    englishName: 'Sun',
    phoneme: 'S',
    description: 'Success, solace',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_16-SOWELO.png'
  },
  {
    id: 17,
    name: 'Tiwaz',
    englishName: 'The god Tiwaz',
    phoneme: 'T',
    description: 'Victory, honor',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_17-TIEWAZ.png'
  },
  {
    id: 18,
    name: 'Berkana',
    englishName: 'Birch',
    phoneme: 'B',
    description: 'Fertility, growth, sustenance',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_18-BERKANA.png'
  },
  {
    id: 19,
    name: 'Ehwaz',
    englishName: 'Horse',
    phoneme: 'E',
    description: 'Trust, faith, companionship',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_19-EHWAZ.png'
  },
  {
    id: 20,
    name: 'Mannaz',
    englishName: 'Man',
    phoneme: 'M',
    description: 'Augmentation, support',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_20-MANNAZ.png'
  },
  {
    id: 21,
    name: 'Laguz',
    englishName: 'Unknown',
    phoneme: 'L',
    description: 'Formlessness, chaos, potentiality, the unknown',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_21-LAGUZ.png'
  },
  {
    id: 22,
    name: 'Ingwaz',
    englishName: 'The god Ingwaz',
    phoneme: 'Ng',
    description: 'Fertilization, the beginning of something, the actualization of potential',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_22-INGUZ.png'
  },
  {
    id: 23,
    name: 'Othalan',
    englishName: 'Inheritance',
    phoneme: 'O',
    description: 'Inheritance, heritage, tradition, nobility',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_23-DAGAZ.png'
  },
  {
    id: 24,
    name: 'Dagaz',
    englishName: 'Day',
    phoneme: 'D',
    description: 'Hope, happiness',
    imgSrc: 'https://www.projectdivination.xyz/images/Rune_24-OTHALA.png'
  }
]

export { bagOfRunes };