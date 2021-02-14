const deck = [
  {
    id: 0,
    name: 'The Fool',
    suit: 'Major',
    description: 'Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_00_Fool.jpg'
  },
  {
    id: 1,
    name: 'The Magician',
    suit: 'Major',
    description: 'Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent himself, if male.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_01_Magician.jpg'
  },
  {
    id: 2,
    name: 'High Priestess',
    suit: 'Major',
    description: 'Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_02_High_Priestess.jpg'
  },
  {
    id: 3,
    name: 'The Empress',
    suit: 'Major',
    description: 'Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_03_Empress.jpg'
  },
  {
    id: 4,
    name: 'The Emperor',
    suit: 'Major',
    description: 'Stability, power, protection, realization; a great person; aid, reason, conviction; also authority and will.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_04_Emperor.jpg'
  },
  {
    id: 5,
    name: 'The Hierophant',
    suit: 'Major',
    description: 'Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_05_Hierophant.jpg'
  },
  {
    id: 6,
    name: 'The Lovers',
    suit: 'Major',
    description: 'Attraction, love, beauty, trials overcome.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_06_Lovers.jpg'
  },
  {
    id: 7,
    name: 'The Chariot',
    suit: 'Major',
    description: 'Succour, providence also war, triumph, presumption, vengeance, trouble.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_07_Chariot.jpg'
  },
  {
    id: 8,
    name: 'The Strength',
    suit: 'Major',
    description: 'Power, energy, action, courage, magnanimity; also complete success and honours.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_08_Strength.jpg'
  },
  {
    id: 9,
    name: 'The Hermit',
    suit: 'Major',
    description: 'Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_09_Hermit.jpg'
  },
  {
    id: 10,
    name: 'The Wheel of Fortune',
    suit: 'Major',
    description: 'Destiny, fortune, success, elevation, luck, felicity.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_10_Wheel_of_Fortune.jpg'
  },
  {
    id: 11,
    name: 'Justice',
    suit: 'Major',
    description: 'Equity, rightness, probity, executive; triumph of the deserving side in law.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_11_Justice.jpg'
  },
  {
    id: 12,
    name: 'The Hanged Man',
    suit: 'Major',
    description: 'Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_12_Hanged_Man.jpg'
  },
  {
    id: 13,
    name: 'Death',
    suit: 'Major',
    description: 'End, mortality, destruction, corruption also, for a man, the loss of a benefactor for a woman, many contrarieties; for a maid, failure of marriage projects.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_13_Death.jpg'
  },
  {
    id: 14,
    name: 'Temperance',
    suit: 'Major',
    description: 'Economy, moderation, frugality, management, accommodation.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_14_Temperance.jpg'
  },
  {
    id: 15,
    name: 'The Devil',
    suit: 'Major',
    description: 'Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_15_Devil.jpg'
  },
  {
    id: 16,
    name: 'The Tower',
    suit: 'Major',
    description: 'Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_16_Tower.jpg'
  },
  {
    id: 17,
    name: 'The Star',
    suit: 'Major',
    description: 'Loss, theft, privation, abandonment; another reading says-hope and bright prospects.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_17_Star.jpg'
  },
  {
    id: 18,
    name: 'The Moon',
    suit: 'Major',
    description: 'Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_18_Moon.jpg'
  },
  {
    id: 19,
    name: 'The Sun',
    suit: 'Major',
    description: 'Material happiness, fortunate marriage, contentment.',
    imgSrc: 'https://www.projectdivination.xyz/images/347px-RWS_Tarot_19_Sun.jpg'
  },
  {
    id: 20,
    name: 'Judgement',
    suit: 'Major',
    description: 'Change of position, renewal, outcome. Another account specifies total loss though lawsuit.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_20_Judgement.jpg'
  },
  {
    id: 21,
    name: 'The World',
    suit: 'Major',
    description: 'Assured success, recompense, voyage, route, emigration, flight, change of place.',
    imgSrc: 'https://www.projectdivination.xyz/images/RWS_Tarot_21_World.jpg'
  },
  {
    id: 22,
    name: 'Ace of Cups',
    suit: 'Cups',
    description: 'House of the true heart, joy, content, abode, nourishment, abundance, fertility; Holy Table, felicity hereof.',
    imgSrc: 'https://www.projectdivination.xyz/images/Cups01.jpg'
  },
  {
    id: 23,
    name: 'Two of Cups',
    suit: 'Cups',
    description: 'Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes, and - as a suggestion apart from all offices of divination - that desire which is not in Nature, but by which Nature is sanctified.',
    imgSrc: 'https://www.projectdivination.xyz/images/Cups02.jpg'
  },
  {
    id: 24,
    name: 'Three of Cups',
    suit: 'Cups',
    description: 'The conclusion of any matter in plenty, perfection and merriment; happy issue, victory, fulfilment, solace, healing.',
    imgSrc: 'https://www.projectdivination.xyz/images/Cups03.jpg'
  },
  {
    id: 25,
    name: 'Four of Cups',
    suit: 'Cups',
    description: 'Weariness, disgust, aversion, imaginary vexations, as if the wine of this world had caused satiety only; another wine, as if a fairy gift, is now offered the wastrel, but he sees no consolation therein. This is also a card of blended pleasure.',
    imgSrc: 'https://www.projectdivination.xyz/images/Cups04.jpg'
  },
  {
    id: 26,
    name: 'Five of Cups',
    suit: 'Cups',
    description: 'It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration.',
    imgSrc: 'https://www.projectdivination.xyz/images/Cups05.jpg'
  },
  {
    id: 27,
    name: 'Six of Cups',
    suit: 'Cups',
    description: 'A card of the past and of memories, looking back, as - for example - on childhood; happiness, enjoyment, but coming rather from the past; things that have vanished. Another reading reverses this, giving new relations, new knowledge, new environment, and then the children are disporting in an unfamiliar precinct.',
    imgSrc: 'https://www.projectdivination.xyz/images/Cups06.jpg'
  },
  {
    id: 28,
    name: 'Seven of Cups',
    suit: 'Cups',
    description: 'Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.',
    imgSrc: 'https://www.projectdivination.xyz/images/Cups07.jpg'
  },
  {
    id: 29,
    name: 'Eight of Cups',
    suit: 'Cups',
    description: 'The card speaks for itself on the surface, but other readings are entirely antithetical - giving joy, mildness, timidity, honour, modesty. In practice, it is usually found that the card shews the decline of a matter, or that a matter which has been thought to be important is really of slight consequence - either for good or evil.',
    imgSrc: 'https://www.projectdivination.xyz/images/Cups08.jpg'
  },
  {
    id: 30,
    name: 'Nine of Cups',
    suit: 'Cups',
    description: 'Concord, contentment, physical bien-etre; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made.',
    imgSrc: 'https://www.projectdivination.xyz/images/Cups09.jpg'
  },
  {
    id: 31,
    name: 'Ten of Cups',
    suit: 'Cups',
    description: 'Contentment, repose of the entire heart; the perfection of that state; also perfection of human love and friendship; if with several picture-cards, a person who is taking charge of the Querent\'s interests; also the town, village or country inhabited by the Querent.',
    imgSrc: 'https://www.projectdivination.xyz/images/Cups10.jpg'
  },
  {
    id: 32,
    name: 'Page of Cups',
    suit: 'Cups',
    description: 'Fair young man, one impelled to render service and with whom the Querent will be connected; a studious youth; news, message; application, reflection, meditation; also these things directed to business.',
    imgSrc: 'https://www.projectdivination.xyz/images/Cups11.jpg'
  },
  {
    id: 33,
    name: 'Knight of Cups',
    suit: 'Cups',
    description: 'Arrival, approach - sometimes that of a messenger; advances, proposition, demeanour, invitation, incitement.',
    imgSrc: 'https://www.projectdivination.xyz/images/Cups12.jpg'
  },
  {
    id: 34,
    name: 'Queen of Cups',
    suit: 'Cups',
    description: 'Good, fair woman; honest, devoted woman, who will do service to the Querent; loving intelligence, and hence the gift of vision; success, happiness, pleasure; also wisdom, virtue; a perfect spouse and a good mother.',
    imgSrc: 'https://www.projectdivination.xyz/images/Cups13.jpg'
  },
  {
    id: 35,
    name: 'King of Cups',
    suit: 'Cups',
    description: 'Fair man, man of business, law, or divinity; responsible, disposed to oblige the Querent; also equity, art and science, including those who profess science, law and art; creative intelligence.',
    imgSrc: 'https://www.projectdivination.xyz/images/Cups14.jpg'
  },
  {
    id: 36,
    name: 'Ace of Pentacles',
    suit: 'Pentacles',
    description: 'Perfect contentment, felicity, ecstasy; also speedy intelligence; gold.',
    imgSrc: 'https://www.projectdivination.xyz/images/Pents01.jpg'
  },
  {
    id: 37,
    name: 'Two of Pentacles',
    suit: 'Pentacles',
    description: 'On the one hand it is represented as a card of gaiety, recreation and its connexions, which is the subject of the design; but it is read also as news and messages in writing, as obstacles, agitation, trouble, embroilment.',
    imgSrc: 'https://www.projectdivination.xyz/images/Pents02.jpg'
  },
  {
    id: 38,
    name: 'Three of Pentacles',
    suit: 'Pentacles',
    description: 'Metier, trade, skilled labour; usually, however, regarded as a card of nobility, aristocracy, renown, glory.',
    imgSrc: 'https://www.projectdivination.xyz/images/Pents03.jpg'
  },
  {
    id: 39,
    name: 'Four of Pentacles',
    suit: 'Pentacles',
    description: 'The surety of possessions, cleaving to that which one has, gift, legacy, inheritance.',
    imgSrc: 'https://www.projectdivination.xyz/images/Pents04.jpg'
  },
  {
    id: 40,
    name: 'Five of Pentacles',
    suit: 'Pentacles',
    description: 'The card foretells material trouble above all, whether in the form illustrated - that is, destitution - or otherwise. For some cartomancists, it is a card of love and lovers-wife, husband, friend, mistress; also concordance, affinities. These alternatives cannot be harmonized.',
    imgSrc: 'https://www.projectdivination.xyz/images/Pents05.jpg'
  },
  {
    id: 41,
    name: 'Six of Pentacles',
    suit: 'Pentacles',
    description: 'Presents, gifts, gratification another account says attention, vigilance now is the accepted time, present prosperity, etc.',
    imgSrc: 'https://www.projectdivination.xyz/images/Pents06.jpg'
  },
  {
    id: 42,
    name: 'Seven of Pentacles',
    suit: 'Pentacles',
    description: 'These are exceedingly contradictory; in the main, it is a card of money, business, barter; but one reading gives altercation, quarrels - and another innocence, ingenuity, purgation.',
    imgSrc: 'https://www.projectdivination.xyz/images/Pents07.jpg'
  },
  {
    id: 43,
    name: 'Eight of Pentacles',
    suit: 'Pentacles',
    description: 'Work, employment, commission, craftsmanship, skill in craft and business, perhaps in the preparatory stage.',
    imgSrc: 'https://www.projectdivination.xyz/images/Pents08.jpg'
  },
  {
    id: 44,
    name: 'Nine of Pentacles',
    suit: 'Pentacles',
    description: 'Prudence, safety, success, accomplishment, certitude, discernment.',
    imgSrc: 'https://www.projectdivination.xyz/images/Pents09.jpg'
  },
  {
    id: 45,
    name: 'Ten of Pentacles',
    suit: 'Pentacles',
    description: 'Gain, riches; family matters, archives, extraction, the abode of a family.',
    imgSrc: 'https://www.projectdivination.xyz/images/Pents10.jpg'
  },
  {
    id: 46,
    name: 'Page of Pentacles',
    suit: 'Pentacles',
    description: 'Application, study, scholarship, reflection another reading says news, messages and the bringer thereof; also rule, management.',
    imgSrc: 'https://www.projectdivination.xyz/images/Pents11.jpg'
  },
  {
    id: 47,
    name: 'Knight of Pentacles',
    suit: 'Pentacles',
    description: 'Utility, serviceableness, interest, responsibility, rectitude-all on the normal and external plane.',
    imgSrc: 'https://www.projectdivination.xyz/images/Pents12.jpg'
  },
  {
    id: 48,
    name: 'Queen of Pentacles',
    suit: 'Pentacles',
    description: 'Opulence, generosity, magnificence, security, liberty.',
    imgSrc: 'https://www.projectdivination.xyz/images/Pents13.jpg'
  },
  {
    id: 49,
    name: 'King of Pentacles',
    suit: 'Pentacles',
    description: 'Valour, realizing intelligence, business and normal intellectual aptitude, sometimes mathematical gifts and attainments of this kind; success in these paths.',
    imgSrc: 'https://www.projectdivination.xyz/images/Pents14.jpg'
  },
  {
    id: 50,
    name: 'Ace of Swords',
    suit: 'Swords',
    description: 'Triumph, the excessive degree in everything, conquest, triumph of force. It is a card of great force, in love as well as in hatred. The crown may carry a much higher significance than comes usually within the sphere of fortune-telling.',
    imgSrc: 'https://www.projectdivination.xyz/images/Swords01.jpg'
  },
  {
    id: 51,
    name: 'Two of Swords',
    suit: 'Swords',
    description: 'Conformity and the equipoise which it suggests, courage, friendship, concord in a state of arms; another reading gives tenderness, affection, intimacy. The suggestion of harmony and other favourable readings must be considered in a qualified manner, as Swords generally are not symbolical of beneficent forces in human affairs.',
    imgSrc: 'https://www.projectdivination.xyz/images/Swords02.jpg'
  },
  {
    id: 52,
    name: 'Three of Swords',
    suit: 'Swords',
    description: 'Removal, absence, delay, division, rupture, dispersion, and all that the design signifies naturally, being too simple and obvious to call for specific enumeration.',
    imgSrc: 'https://www.projectdivination.xyz/images/Swords03.jpg'
  },
  {
    id: 53,
    name: 'Four of Swords',
    suit: 'Swords',
    description: 'Vigilance, retreat, solitude, hermit\'s repose, exile, tomb and coffin. It is these last that have suggested the design.',
    imgSrc: 'https://www.projectdivination.xyz/images/Swords04.jpg'
  },
  {
    id: 54,
    name: 'Five of Swords',
    suit: 'Swords',
    description: 'Degradation, destruction, revocation, infamy, dishonour, loss, with the variants and analogues of these.',
    imgSrc: 'https://www.projectdivination.xyz/images/Swords05.jpg'
  },
  {
    id: 55,
    name: 'Six of Swords',
    suit: 'Swords',
    description: 'Journey by water, route, way, envoy, commissionary, expedient.',
    imgSrc: 'https://www.projectdivination.xyz/images/Swords06.jpg'
  },
  {
    id: 56,
    name: 'Seven of Swords',
    suit: 'Swords',
    description: 'Design, attempt, wish, hope, confidence; also quarrelling, a plan that may fail, annoyance. The design is uncertain in its import, because the significations are widely at variance with each other.',
    imgSrc: 'https://www.projectdivination.xyz/images/Swords07.jpg'
  },
  {
    id: 57,
    name: 'Eight of Swords',
    suit: 'Swords',
    description: 'Bad news, violent chagrin, crisis, censure, power in trammels, conflict, calumny; also sickness.',
    imgSrc: 'https://www.projectdivination.xyz/images/Swords08.jpg'
  },
  {
    id: 58,
    name: 'Nine of Swords',
    suit: 'Swords',
    description: 'Death, failure, miscarriage, delay, deception, disappointment, despair.',
    imgSrc: 'https://www.projectdivination.xyz/images/Swords09.jpg'
  },
  {
    id: 59,
    name: 'Ten of Swords',
    suit: 'Swords',
    description: 'Whatsoever is intimated by the design; also pain, affliction, tears, sadness, desolation. It is not especially a card of violent death.',
    imgSrc: 'https://www.projectdivination.xyz/images/Swords10.jpg'
  },
  {
    id: 60,
    name: 'Page of Swords',
    suit: 'Swords',
    description: 'Authority, overseeing, secret service, vigilance, spying, examination, and the qualities thereto belonging.',
    imgSrc: 'https://www.projectdivination.xyz/images/Swords11.jpg'
  },
  {
    id: 61,
    name: 'Knight of Swords',
    suit: 'Swords',
    description: 'Skill, bravery, capacity, defence, address, enmity, wrath, war, destruction, opposition, resistance, ruin. There is therefore a sense in which the card signifies death, but it carries this meaning only in its proximity to other cards of fatality.',
    imgSrc: 'https://www.projectdivination.xyz/images/Swords12.jpg'
  },
  {
    id: 62,
    name: 'Queen of Swords',
    suit: 'Swords',
    description: 'Widowhood, female sadness and embarrassment, absence, sterility, mourning, privation, separation.',
    imgSrc: 'https://www.projectdivination.xyz/images/Swords13.jpg'
  },
  {
    id: 63,
    name: 'King of Swords',
    suit: 'Swords',
    description: 'Whatsoever arises out of the idea of judgment and all its connexions-power, command, authority, militant intelligence, law, offices of the crown, and so forth.',
    imgSrc: 'https://www.projectdivination.xyz/images/Swords14.jpg'
  },
  {
    id: 64,
    name: 'Ace of Wands',
    suit: 'Wands',
    description: 'Creation, invention, enterprise, the powers which result in these; principle, beginning, source; birth, family, origin, and in a sense the virility which is behind them; the starting point of enterprises; according to another account, money, fortune, inheritance.',
    imgSrc: 'https://www.projectdivination.xyz/images/Wands01.jpg'
  },
  {
    id: 65,
    name: 'Two of Wands',
    suit: 'Wands',
    description: 'Between the alternative readings there is no marriage possible; on the one hand, riches, fortune, magnificence; on the other, physical suffering, disease, chagrin, sadness, mortification. The design gives one suggestion; here is a lord overlooking his dominion and alternately contemplating a globe; it looks like the malady, the mortification, the sadness of Alexander amidst the grandeur of this world\'s wealth.',
    imgSrc: 'https://www.projectdivination.xyz/images/Wands02.jpg'
  },
  {
    id: 66,
    name: 'Three of Wands',
    suit: 'Wands',
    description: 'He symbolizes established strength, enterprise, effort, trade, commerce, discovery; those are his ships, bearing his merchandise, which are sailing over the sea. The card also signifies able co-operation in business, as if the successful merchant prince were looking from his side towards yours with a view to help you.',
    imgSrc: 'https://www.projectdivination.xyz/images/Wands03.jpg'
  },
  {
    id: 67,
    name: 'Four of Wands',
    suit: 'Wands',
    description: 'They are for once almost on the surface - country life, haven of refuge, a species of domestic harvest-home, repose, concord, harmony, prosperity, peace, and the perfected work of these.',
    imgSrc: 'https://www.projectdivination.xyz/images/Wands04.jpg'
  },
  {
    id: 68,
    name: 'Five of Wands',
    suit: 'Wands',
    description: 'Imitation, as, for example, sham fight, but also the strenuous competition and struggle of the search after riches and fortune. In this sense it connects with the battle of life. Hence some attributions say that it is a card of gold, gain, opulence.',
    imgSrc: 'https://www.projectdivination.xyz/images/Wands05.jpg'
  },
  {
    id: 69,
    name: 'Six of Wands',
    suit: 'Wands',
    description: 'The card has been so designed that it can cover several significations; on the surface, it is a victor triumphing, but it is also great news, such as might be carried in state by the King\'s courier; it is expectation crowned with its own desire, the crown of hope, and so forth.',
    imgSrc: 'https://www.projectdivination.xyz/images/Wands06.jpg'
  },
  {
    id: 70,
    name: 'Seven of Wands',
    suit: 'Wands',
    description: 'It is a card of valour, for, on the surface, six are attacking one, who has, however, the vantage position. On the intellectual plane, it signifies discussion, wordy strife; in business - negotiations, war of trade, barter, competition. It is further a card of success, for the combatant is on the top and his enemies may be unable to reach him.',
    imgSrc: 'https://www.projectdivination.xyz/images/Wands07.jpg'
  },
  {
    id: 71,
    name: 'Eight of Wands',
    suit: 'Wands',
    description: 'Activity in undertakings, the path of such activity, swiftness, as that of an express messenger; great haste, great hope, speed towards an end which promises assured felicity; generally, that which is on the move; also the arrows of love.',
    imgSrc: 'https://www.projectdivination.xyz/images/Wands08.jpg'
  },
  {
    id: 72,
    name: 'Nine of Wands',
    suit: 'Wands',
    description: 'The card signifies strength in opposition. If attacked, the person will meet an onslaught boldly; and his build shews, that he may prove a formidable antagonist. With this main significance there are all its possible adjuncts - delay, suspension, adjournment.',
    imgSrc: 'https://www.projectdivination.xyz/images/Wands09.jpg'
  },
  {
    id: 73,
    name: 'Ten of Wands',
    suit: 'Wands',
    description: 'A card of many significances, and some of the readings cannot be harmonized. I set aside that which connects it with honour and good faith. The chief meaning is oppression simply, but it is also fortune, gain, any kind of success, and then it is the oppression of these things. It is also a card of false-seeming, disguise, perfidy. The place which the figure is approaching may suffer from the rods that he carries. Success is stultified if the Nine of Swords follows, and if it is a question of a lawsuit, there will be certain loss.',
    imgSrc: 'https://www.projectdivination.xyz/images/Wands10.jpg'
  },
  {
    id: 74,
    name: 'Page of Wands',
    suit: 'Wands',
    description: 'Dark young man, faithful, a lover, an envoy, a postman. Beside a man, he will bear favourable testimony concerning him. A dangerous rival, if followed by the Page of Cups. Has the chief qualities of his suit. He may signify family intelligence.',
    imgSrc: 'https://www.projectdivination.xyz/images/Wands11.jpg'
  },
  {
    id: 76,
    name: 'Knight of Wands',
    suit: 'Wands',
    description: 'Departure, absence, flight, emigration. A dark young man, friendly. Change of residence.',
    imgSrc: 'https://www.projectdivination.xyz/images/Wands13.jpg'
  },
  {
    id: 76,
    name: 'Queen of Wands',
    suit: 'Wands',
    description: 'A dark woman, countrywoman, friendly, chaste, loving, honourable. If the card beside her signifies a man, she is well disposed towards him; if a woman, she is interested in the Querent. Also, love of money, or a certain success in business.',
    imgSrc: 'https://www.projectdivination.xyz/images/Wands13.jpg'
  },
  {
    id: 77,
    name: 'King of Wands',
    suit: 'Wands',
    description: 'Dark man, friendly, countryman, generally married, honest and conscientious. The card always signifies honesty, and may mean news concerning an unexpected heritage to fall in before very long.',
    imgSrc: 'https://www.projectdivination.xyz/images/Wands14.jpg'
  }
]

export { deck };