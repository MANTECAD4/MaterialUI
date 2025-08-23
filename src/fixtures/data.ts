export type Club = {
  championsNum: number;
  country: string;
  label: string;
};
export const topSoccerClubs: Club[] = [
  { championsNum: 6, country: "ENGLAND", label: "LIVERPOOL" },
  { championsNum: 2, country: "ENGLAND", label: "CHELSEA" },
  { championsNum: 3, country: "ENGLAND", label: "MANCHESTER UNITED" },
  { championsNum: 4, country: "ENGLAND", label: "ARSENAL" },
  { championsNum: 5, country: "ENGLAND", label: "TOTTENHAM" },
  { championsNum: 6, country: "GERMANY", label: "BAYERN" },
  { championsNum: 2, country: "GERMANY", label: "DORMUND" },
  { championsNum: 6, country: "GERMANY", label: "FRANKFURT" },
  { championsNum: 7, country: "ITALY", label: "MILAN" },
  { championsNum: 2, country: "ITALY", label: "JUVENTUS" },
  { championsNum: 3, country: "ITALY", label: "INTER" },
  // { championsNum: 4, country: "NETHERLANDS", label: "AJAX" },
  { championsNum: 15, country: "SPAIN", label: "REAL MADRID" },
  { championsNum: 5, country: "SPAIN", label: "BARCELONA" },
];

topSoccerClubs.sort((a, b) => {
  console.log("me ejecute");
  const countryA = a.country.toUpperCase();
  const countryB = b.country.toUpperCase();
  if (countryA < countryB) {
    return -1;
  }
  if (countryA > countryB) {
    return 1;
  } else {
    return 0;
  }
});
