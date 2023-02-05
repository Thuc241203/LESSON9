
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
};

const log = console.log;

// yêu cầu 1:
for(const [i, player] of game.scored.entries())
    log(`Goal ${i + 1}: ${player}`);

// yêu cầu 2:
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
    average /= odds.length;
    log(average);

// yêu cầu 3:
for(const [team,odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    log(`Odd of ${teamStr} ${odd}`);
};
