const log = console.log;

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener
('click', function () {
    const text =document.querySelector('textarea').value;
    const rows = text.split('\n');
    log(rows);
    for (const [i,row] of rows.entries()) {
       const [first, second] = row.toLowerCase().trim().split('_');
       const output = ` ${first}${second.replace(
        second[0],
        second[0].toUpperCase()
        )}`;
   
       log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
    }
});