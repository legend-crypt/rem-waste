import type { ISkip } from '../types/skip';

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(price);
}
import yarder4 from '../assets/images/4-yarder-skip.jpg';

function getStatus(skip: ISkip) {
  if (skip.forbidden)
    return { text: 'Forbidden', color: 'bg-red-100 text-red-800' };
  if (!skip.allowed_on_road)
    return {
      text: 'Road Restricted',
      color: 'bg-yellow-100 text-yellow-800',
    };
  return { text: 'Available', color: 'bg-green-100 text-green-800' };
}

function getSkipImage(size: number, imageMap: { [key: number]: string }) {
  if (imageMap[size]) {
    return imageMap[size];
  }

  const availableSizes = Object.keys(imageMap)
    .map(Number)
    .sort((a, b) => a - b);
  const closestSize = availableSizes.reduce((prev, curr) =>
    Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev
  );

  return imageMap[closestSize] || yarder4;
}

export { formatPrice, getStatus, getSkipImage };
