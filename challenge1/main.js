
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
const [players1,players2] = game.players;
log(players1,players2);

// yêu cầu 2:
const [gk, ...fieldPlayers] = players1;
log(gk, fieldPlayers);

// yêu cầu 3:
const allPlayers = [...players1,...players2];
log(allPlayers);

// yêu cầu 4:
const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic'];
// log(players1Final);

// yêu cầu 5:
const {
    odds: {team1, x: draw , team2},
} = game;
log(team1,draw,team2);

// yêu cầu 6:
const printGoals = (...players) => {
    log(players);
    log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

// yêu cầu 7:
team1 < team2 && log('Team 1 is more likely to win');
team1 > team2 && log('Team 2 is more likely to win');