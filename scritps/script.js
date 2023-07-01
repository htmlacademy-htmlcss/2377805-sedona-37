if (document.querySelector('.arrival-date .date-example')) {
    document.querySelector('.arrival-date').addEventListener('click', ()=> {
    document.querySelector('.arrival-date .date-example').remove();
    });
}

if (document.querySelector('.departure-date .date-example')) {
    document.querySelector('.departure-date').addEventListener('click', ()=> {
    document.querySelector('.departure-date .date-example').remove();
    });
}

if (document.querySelector('.arrival-date .date-input + .date-example')) {
    document.querySelector('.arrival-date .date-input').addEventListener('focus', ()=> {
    document.querySelector('.arrival-date .date-input + .date-example').remove();
    });
}

if (document.querySelector('.departure-date .date-input + .date-example')) {
    document.querySelector('.departure-date .date-input').addEventListener('focus', ()=> {
    document.querySelector('.departure-date .date-input + .date-example').remove();
    });
}
