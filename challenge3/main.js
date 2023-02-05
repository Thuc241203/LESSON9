
const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

// yêu cầu 1:
const log = console.log;
const events = [...new Set(gameEvents.values())];
    log(events);

// yêu cầu 2:
gameEvents.delete(64);

// yêu cầu 3:
log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
log(time);
log(
    `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// yêu cầu 4:
for (const [min,event] of gameEvents){
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    log(`[${half} HALF] ${min}: ${event}`);
};