import { FilterFormsItemData } from '@/types';

export const FILTER_FIELDS_DATA: FilterFormsItemData[] = [
  {
    type: 'number',
    key: 'year',
    placeholder: 'year',
    attrs: { min: '1900', max: '2023' },
  },
  {
    type: 'number',
    key: 'vote_average_gte',
    placeholder: 'vote_average_gte',
    attrs: { min: '0', max: '10' },
  },
  {
    type: 'number',
    key: 'vote_average_lte',
    placeholder: 'vote_average_lte',
    attrs: { min: '0', max: '10' },
  },
];
