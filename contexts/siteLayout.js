import { createContext } from 'react';

const Site = createContext({
  ads:{},
  latest: [],
  popular: [],
  menu: [],
});

export default Site;