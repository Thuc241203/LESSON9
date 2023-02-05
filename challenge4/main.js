const log = console.log;

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener
('click', function () {
    const text =document.querySelector('textarea').value;
    const rows = text.split('\n');
    log(rows);
    for (const row in rows) {
        row.split('_');
    }
});