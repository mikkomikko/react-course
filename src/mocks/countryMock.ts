import { Country } from "../types/types";

export const mockCountry: Country = {
  flags: {
    png: "mock.png",
    svg: "mock.svg",
    alt: "Mock Flag",
  },
  capitalInfo: {
    latlng: [0, 0],
  },
  name: {
    common: "Mock Country",
    official: "Official Mock Country",
    nativeName: {
      eng: {
        official: "Official Mock Country",
        common: "Mock Country",
      },
    },
  },
  cca3: "MCK",
  currencies: {
    MCK: {
      name: "Mock Currency",
      symbol: "M$",
    },
  },
  capital: ["Mock Capital"],
  region: "Mock Region",
  languages: {
    eng: "English",
  },
  landlocked: false,
  population: 1000000,
};
