export type Country =  {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  capitalInfo: {
    latlng: [number, number];
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  cca3: string;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  region: string;
  languages: {
    [key: string]: string;
  };
  landlocked: boolean;
}
