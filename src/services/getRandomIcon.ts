import { generateRandomNumber } from '../utils';
import { icons } from '../constants';

const getRandomIcon = () => {
  const iconPacks = Object.keys(icons);

  const randomIconPack = iconPacks[generateRandomNumber(0, iconPacks.length - 1)];
  const iconsInThisPack = Object.keys(icons[randomIconPack]);

  const randomIcon = iconsInThisPack[generateRandomNumber(0, iconsInThisPack.length - 1)];
  return icons[randomIconPack][randomIcon];
};

export { getRandomIcon };
