import { ErrorIcon, ScuessIcon, WarningIcon } from './src/DetectionTab';

export const pcScoreObj = {
  'Cumulative Layout Shift': [0.1, 0.25],
  'Largest Contentful Paint': [1.2, 2.4],
  'Total Blocking Time': [150, 350],
  'Speed Index': [1.32, 2.32],
  'Time to Interactive': [2.5, 4.51],
  'First Contentful Paint': [0.95, 1.6],
};

export const mbScoreObj = {
  'Cumulative Layout Shift': [0.1, 0.25],
  'Largest Contentful Paint': [2.5, 4],
  'Total Blocking Time': [200, 600],
  'Speed Index': [3.4, 5.8],
  'Time to Interactive': [3.8, 7.3],
  'First Contentful Paint': [1.8, 3],
};

export const getType = (endType: 'pc' | 'mb', numericValue?: number, name: string = '') => {
  const [first, second] = endType == 'pc' ? pcScoreObj[name] : mbScoreObj[name];
  if ((!numericValue && numericValue !== 0) || (numericValue && numericValue > second)) {
    return 'error';
  }

  if (numericValue <= first) {
    return 'success';
  }
  if (numericValue > first && numericValue <= second) {
    return 'warning';
  }
  return '';
};

export const getIcon = (endType: 'pc' | 'mb', numericValue?: number, name: string = '') => {
  const type = getType(endType, numericValue, name);
  if (type === 'error') {
    return <ErrorIcon />;
  }

  if (type === 'success') {
    return <ScuessIcon />;
  }
  if (type === 'warning') {
    return <WarningIcon />;
  }
  return null;
};
