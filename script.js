/******************************************************************************
------------------------------------
!LES OPPGAVETEKSTEN NØYE!
------------------------------------

1.

Bruk en vanlig 'for-løkke' til å iterere gjennom `people`-arrayet og utfør følgende:

- Hvis objektets `name`-verdi er "Otto", skal ingen av endringene nedenfor gjøres 
  på det objektet (hint: bruk `continue`-nøkkelordet).

- Lag en ny nøkkel på hvert person-objekt i arrayet kalt "city" og sett verdien
  til en random by fra `cities`-arrayen.

- Lag en ny nøkkel på hvert person-objekt kalt "title" og sett den til "Mr." for
  menn og "Ms." for kvinner.
	
- Øk alderen med 2.

- Legg til "coding" i begynnelsen av hobby-arrayet i hvert objekt.

**PS**: Bruk kun én løkke for å gjøre alle de ovennevnte stegene.

Bruk `console.log(people)` etter løkken for å sjekke at endringene er riktige.

Bruk løkken din til å regne ut den kombinerte alderen til alle person-objektene 
og lagre det i variabelen `combinedAge`.

Deretter, etter løkken, bruk den kombinerte alderen til å regne ut gjennomsnittsalderen
for alle, og lagre det i variabelen `averageAge`.

Gjør beregningene ETTER at du legger til to år på alderen, og husk, hopp over Otto!

******************************************************************************/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];
let combinedAge = 0;

// Skriv koden for oppgave 1 her
console.log("Assignement 1:");
let averageAge = 0;

for (let i = 0; i < people.length; i++) {
  const person = people[i];

  if (person.name === "Otto") continue;

  person.city = cities[Math.floor(Math.random() * cities.length)];
  person.title = person.male ? "Mr." : "Ms.";
  person.age += 2;
  person.hobbies.unshift("coding");

  combinedAge += person.age;
}

console.log(people);

averageAge = combinedAge / people.length;

console.log("Combined Age:", combinedAge);
console.log("Average Age:", averageAge);

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn ett tall som parameter.

Funksjonen skal returnere et array med tilfeldige tall mellom 1 og 6.
Lengden på arrayet bestemmes av tallet som funksjonen mottar som parameter
(tenk på det som antall terninger vi kaster).

Eksempler: 
diceRoller(4) skal returnere noe som: [4, 1, 2, 6]
diceRoller(6) skal returnere noe som: [5, 5, 6, 2, 3, 4]

Legg til en andre parameter i funksjonen som bestemmer hvor mange sider terningen skal ha.
diceRoller(5, 20) skal returnere et array med 5 tilfeldige tall fra 1-20.

******************************************************************************/

// Skriv koden for oppgave 2 her
console.log("\nAssignment 2:");
let diceThrows = [];
const diceRoller = (num, max) => {
  max = Math.floor(max);
  for (let i = 0; i < num; i++) diceThrows.push(Math.ceil(Math.random() * max));
};

diceRoller(15, 20);

console.log(diceThrows);

/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn ett array av strings som parameter.

Inne i funksjonen, gjør følgende:

Skriv en løkke som itererer gjennom stringene i arrayet, og gjør følgende:
- Fjern mellomrom fra starten og slutten av hvert ord.
- Gjør alle ordene om til små bokstaver.

Bruk en "for...of"-løkke.

Etter løkken, bruk en metode for å sette sammen arrayet til en enkelt string 
med et enkelt mellomrom mellom ordene (" "), og returner den resulterende stringen.

Eksempel:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
skal returnere:
"this text needs to be cleaned up"

******************************************************************************/

// Skriv koden for oppgave 3 her
console.log("\nAssignment 3:");
const textCleaner = (array) => {
  for (let item of array) {
    item.trim();
    item.toLowerCase();
  }
  return array.join(" ");
};

/******************************************************************************
4.

Fullfør funksjonen nedenfor for å oppnå følgende:

Returner stringen som mottas i første parameter med følgende endringer:

Hver bokstav i stringen som matcher `charA` (andre parameteret) skal erstattes 
med `charB` (tredje parameteret), og VICE VERSA - det vil si at bokstaver som 
matcher `charA` skal byttes med `charB`, og bokstaver som matcher `charB` skal 
byttes med `charA`.

Eksempler:

doubleSwap("this is a string", "i", "s")
skal returnere "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
skal returnere "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
skal returnere "whao is ohe ptino tf ohis?"

******************************************************************************/
console.log("\nAssignment 4:");
function doubleSwap(string = "example", charA, charB) {
  // Skriv koden for oppgave 4 her
  const lowerInput = string.toLowerCase();
  const a = charA.toLowerCase();
  const b = charB.toLowerCase();

  // Jeg fikk hjelp av AI for koden under, men jeg skjønner alt sammen.
  const transformed = Array.from(lowerInput).map((char) => {
    if (char === a) return b;
    if (char === b) return a;
    return char;
  });

  const result = transformed.join("");

  return result.charAt(0).toUpperCase() + result.slice(1);
}
/* Her er min kode før jeg brukte AI om du er interessert:
  let modifiedString = "";
  for (let i = 0; i < string.length; i++) {
    switch (lowerInput[i]) {
      case a:
        modifiedString[i] = b;
        break;
      case b:
        modifiedString[i] = a;
        break;
      default:
        modifiedString[i] = lowerInput[i];
        break;
    }
  }

  return modifiedString.charAt(0).toUpperCase() + modifiedString.slice(1);
}

Den virket ikke fordi jeg prøvde å overskrive en index i en string, men strings er immutable*/
console.log(
  doubleSwap("It's a fine morning for programming, ain't it?", "m", "i"),
);
/******************************************************************************
5.

EKSTRA UTFORDRING:

(Løsning av denne oppgaven er ikke obligatorisk, kun for de som vil ha en ekstra utfordring)

Lag en funksjon kalt `helloChecker` som tar inn en string som parameter.

Skriv kode som sjekker alle ordene i stringen for å finne ut om noen av dem
matcher ordet for "hei" på noen av disse språkene:

- hello (engelsk)
- ciao (italiensk)
- salut (fransk)
- hallo (tysk)
- hola (spansk)
- czesc (polsk)

Hvis noen av ordene i stringen matcher et av disse, skal funksjonen returnere:
"HELLO oppdaget på (navn på språket)."

Hvis ingen av ordene i strengen matcher, skal funksjonen returnere:
"Ingen HELLO oppdaget."

PS: Sørg for at funksjonen er case-insensitive; både "Hello" og "hello" skal oppdages.

Jeg har lagt til noen testvariabler for å sjekke funksjonen din.

******************************************************************************/

const greetings = [
  "Hello, how are you today?",
  "Diciamo ciao prima di andare!",
  "Salut, ça va bien?",
  "Kannst du mich hören? Hallo!",
  "Hva er regex?",
  "Nos saludamos con un alegre hola.",
  "Ona pomachała i powiedziała cześć z uśmiechem.",
  "Good afternoon gentlemen!",
];

// Skriv koden for oppgave 5 her
console.log("\nAssignment 5:");
const helloChecker = (input = "default") => {
  input = input.toLowerCase();
  if (input.includes("hello")) return "HELLO oppdaget på engelsk.";
  else if (input.includes("ciao")) return "HELLO oppdaget på italiensk.";
  else if (input.includes("salut")) return "HELLO oppdaget på fransk.";
  else if (input.includes("hallo")) return "HELLO oppdaget på tysk.";
  else if (input.includes("hola")) return "HELLO oppdaget på spansk.";
  else if (input.includes("cześć")) return "HELLO oppdaget på polsk.";
  else return "Ingen HELLO oppdaget.";
};

for (let greeting of greetings) {
  console.log(helloChecker(greeting));
}
