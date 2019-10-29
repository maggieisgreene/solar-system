const planets = [
  {
    name: 'Mercury',
    imageUrl: 'https://www.popsci.com/resizer/UbnLYOTn97o47BjBfh2bJtg1E9c=/1622x1622/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/RZODSOHKA6O4VMNPPUW7GUTUBE.jpg',
    description: 'Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth\'s Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'Mercury doesn\'t have any moons.',
  },
  {
    name: 'Venus',
    imageUrl: 'https://www.popsci.com/resizer/EzmgNUAldjsMHgCx7Ihwj-k2V8Q=/1050x1050/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/LP5TMWXTF6VV6VQ6YDQGZ3YLQQ.jpg',
    description: 'Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: 'Venus doesn\'t have any moons.',
  },
  {
    name: 'Earth',
    imageUrl: 'https://www.popsci.com/resizer/l-gZ_V8nWnjgq60ByrB1ZEICV10=/1622x1622/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/57LV7D7YHYJ2BDWMUKBC3J5WG4.jpg',
    description: 'Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It\'s also the only planet in our solar system with liquid water on the surface.',
    isGasPlanet: false,
    numberOfMoons: 1,
    nameOfLargestMoon: 'The Moon is the largest moon of Earth.',
  },
  {
    name: 'Mars',
    imageUrl: 'https://www.popsci.com/resizer/mQE0iVpqEP-91dR0tqpIuQNMEis=/1050x1050/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/XYNJU7VV7ISTJ4HJLUR5ERUZOE.jpg',
    description: 'Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.',
    isGasPlanet: false,
    numberOfMoons: 2,
    nameOfLargestMoon: 'Phobos is the largest moon of Mars.',
  },
  {
    name: 'Jupiter',
    imageUrl: 'https://www.popsci.com/resizer/KBywcIUr8qTNIUPoSNCUf76ZYhI=/1050x1312/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/THFNFWTVBVSMJVYCP5BACG3YFQ.jpg',
    description: 'Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet\'s Great Red spot is a centuries-old storm bigger than Earth.',
    isGasPlanet: true,
    numberOfMoons: 79,
    nameOfLargestMoon: 'Ganymede is the largest moon of Jupiter.',
  },
  {
    name: 'Saturn',
    imageUrl: 'https://www.popsci.com/resizer/eSWGztL7-oJYyQzc-O84ZjaDgp4=/1622x800/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/M5DUH5KZFNUT5CDTMPIBXAD2GU.jpg',
    description: 'Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn\'s.',
    isGasPlanet: true,
    numberOfMoons: 82,
    nameOfLargestMoon: 'Titan is the largest moon of Saturn.',
  },
  {
    name: 'Uranus',
    imageUrl: 'https://www.popsci.com/resizer/s9qtguvmjs6Z9g2X3De89ct5p3g=/1050x1050/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/2JK6SFTHA6WHV56FGHXNWWNDSE.jpg',
    description: 'Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.',
    isGasPlanet: false,
    numberOfMoons: 27,
    nameOfLargestMoon: 'Titania is the largest moon of Uranus.',
  },
  {
    name: 'Neptune',
    imageUrl: 'https://www.popsci.com/resizer/-bmInMLxkqEF9E-1HeO2UYHjKQ8=/1050x1050/arc-anglerfish-arc2-prod-bonnier.s3.amazonaws.com/public/3BR7HFELGONI3J4CB4USPR5GWI.jpg',
    description: 'Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations. ',
    isGasPlanet: false,
    numberOfMoons: 13,
    nameOfLargestMoon: 'Triton is the largest moon of Neptune.',
  },
];

const getPlanets = () => planets;
const getPlanet = (planet) => planets.filter((p) => p.name.toLowerCase() === planet.toLowerCase());


export default { getPlanets, getPlanet };
