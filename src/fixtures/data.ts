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
  { championsNum: 4, country: "NETHERLANDS", label: "AJAX" },
  { championsNum: 15, country: "SPAIN", label: "REAL MADRID" },
  { championsNum: 5, country: "SPAIN", label: "BARCELONA" },
];

export const countries = ["NETHERLANDS", "SPAIN"];

topSoccerClubs.sort((a, b) => {
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

export const labels: { [index: number]: string } = {
  0.5: "Culero",
  1: "Culero+",
  1.5: "Malo",
  2: "Malo+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Bueno",
  4: "Bueno+",
  4.5: "Muy Bueno",
  5: "Muy Bueno+",
  5.5: "Excelente",
  6: "Excelente+",
};

export const months = [
  "January",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "november",
  "december",
];

export const users = [
  { id: 1, name: "Ana López", age: 28, city: "Madrid", isActive: true },
  { id: 9, name: "Ana López", age: 28, city: "Madrid", isActive: true },
  { id: 10, name: "Ana López", age: 28, city: "Madrid", isActive: true },
  {
    id: 2,
    name: "Carlos Pérez",
    age: 34,
    city: "Barcelona",
    isActive: false,
  },
  { id: 3, name: "María Gómez", age: 22, city: "Valencia", isActive: true },
  {
    id: 4,
    name: "Luis Fernández",
    age: 40,
    city: "Sevilla",
    isActive: true,
  },
  { id: 5, name: "Laura Sánchez", age: 31, city: "Bilbao", isActive: false },
  { id: 6, name: "Jorge Ramírez", age: 45, city: "Málaga", isActive: true },
  {
    id: 7,
    name: "Elena Torres",
    age: 29,
    city: "Zaragoza",
    isActive: false,
  },
  { id: 8, name: "Pedro Castillo", age: 37, city: "Murcia", isActive: true },
];
