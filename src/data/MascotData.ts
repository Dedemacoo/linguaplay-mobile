export interface MascotInfo {
  id: string;
  name: string;
  rarity: 'Common' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic';
  unlockRequirement: string;
  story: string;
}

export const MASCOTS: Record<string, MascotInfo> = {
  classic: {
    id: 'classic',
    name: 'Classic Lingo',
    rarity: 'Common',
    unlockRequirement: 'Default Mascot',
    story: 'The pure, friendly dolphin. Your first companion in the world of LinguaPlay.',
  },
  professor: {
    id: 'professor',
    name: 'Professor Lingo',
    rarity: 'Common',
    unlockRequirement: 'Complete the Ocean World',
    story: 'Academic and intelligent. He brings the heavy dictionaries and the deep knowledge.',
  },
  explorer: {
    id: 'explorer',
    name: 'Explorer Lingo',
    rarity: 'Rare',
    unlockRequirement: 'Complete the Forest World',
    story: 'Ready for a safari! He never travels without his trusty golden compass.',
  },
  pirate: {
    id: 'pirate',
    name: 'Pirate Lingo',
    rarity: 'Rare',
    unlockRequirement: 'Complete the Pirate Bay',
    story: 'Swashbuckling captain of the seven seas, searching for the ultimate treasure.',
  },
  wizard: {
    id: 'wizard',
    name: 'Wizard Lingo',
    rarity: 'Epic',
    unlockRequirement: 'Complete the Magic Forest',
    story: 'Master of arcane language magic. His spells are fluent in 100 languages.',
  },
  cyber: {
    id: 'cyber',
    name: 'Cyber Lingo',
    rarity: 'Epic',
    unlockRequirement: 'Complete the Cyber City',
    story: 'Futuristic and sleek. He analyzes vocabulary algorithms in microseconds.',
  },
  ice: {
    id: 'ice',
    name: 'Ice Lingo',
    rarity: 'Epic',
    unlockRequirement: 'Complete the Ice World',
    story: 'Adapted for extreme blizzards. His frozen aura is super cool.',
  },
  fire: {
    id: 'fire',
    name: 'Fire Lingo',
    rarity: 'Epic',
    unlockRequirement: 'Complete the Volcano World',
    story: 'Blazing with passion for learning. He brings the heat to every lesson.',
  },
  astronaut: {
    id: 'astronaut',
    name: 'Astronaut Lingo',
    rarity: 'Legendary',
    unlockRequirement: 'Complete the Galaxy World',
    story: 'Exploring the linguistic cosmos. To the moon and beyond!',
  },
  dragon: {
    id: 'dragon',
    name: 'Dragon Lingo',
    rarity: 'Legendary',
    unlockRequirement: 'Complete the Dragon Valley',
    story: 'An epic, fire-breathing mythical companion. Unstoppable focus.',
  },
  royal: {
    id: 'royal',
    name: 'Royal Lingo',
    rarity: 'Legendary',
    unlockRequirement: 'Complete the Royal Kingdom',
    story: 'The undisputed monarch of vocabulary. Bow before his majestic grammar.',
  },
};
