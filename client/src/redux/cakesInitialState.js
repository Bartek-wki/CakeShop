const initialState = {
  allCakes: [],
  topCakes: [],
  singleCake: [],
  requests: [],
  sizeDescription: {
    standardCakes: {
      'small': 'about 12 portions',
      'medium': 'about 16 portions',
      'large': 'about 20 portions',
    },
    weddingCakes: {
      'two tiers': '2 tiers - about 40 portions',
      'three tiers': '3 tiers - about 60-70 portions',
      'four tiers': '4 tiers - about 100-120 portions',
      'five tiers': '5 tiers - about 160-180 portions',
    },
  },
  tastesToChoose: [
    'Cream and raspberry flavor with raspberry mousse - white sponge cake',
    'Cream and strawberry flavour with strawberry mousse - white sponge cake',
    'Flavour cream and chocolate with orange mousse - white sponge cake',
    'Chocolate flavor with cherries - chocolate sponge cake',
    'Tiramisu - white sponge cake',
  ],
};

export default initialState;
