export const getFilterState = () => ({
  categories: [{
    id: 'view',
    key: 'view',
    label: 'Styleboard View',
    items: [
      'All Styleboards',
      'My Styleboards',
      'Community Styleboards'
    ],
    expanded: true
  }, {
    id: 'contexts',
    key: 'contexts',
    label: 'Occasion',
    items: [],
    expanded: true
  }, {
    id: 'types',
    key: 'types',
    label: 'Types',
    items: [],
    expanded: true
  }, {
    id: 'styles',
    key: 'styles',
    label: 'Styles',
    items: [],
    expanded: true
  }, {
    id: 'brands',
    key: 'brands',
    label: 'Brands',
    items: ['Brand', 'Brand', 'Brand', 'Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand','Brand', 'Brand', 'Brand', 'Brand', 'Brand', 'Brand', 'Brand', 'Brand', 'Brand', 'Brand', 'Brand', 'Brand', 'Brand', 'Brand', 'Brand', 'Brand', 'Brand', 'Brand', ],
    expanded: true
  }, {
    id: 'colors',
    key: 'colors',
    label: 'Colors',
    items: ['Color', 'Color', 'Color', 'Color', 'Color', 'Color', 'Color', 'Color', 'Color', 'Color', 'Color', 'Color', 'Color', ],
    expanded: true
  }]
});