let langue
let mot
//let url = `https://api.dictionaryapi.dev/api/v2/entries/`

function definition(l, m) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/${l}/${m}`)
        .then(response => response.json())
        .then((results) => {
            console.log(results);
            document.getElementById('def').innerHTML = `
                <h1>${results[0].word}</h1>
            `
        })
        .catch(err => console.log(err))
}

window.onload = () => {
    document.getElementById('bouton').addEventListener('click', (evt) => {
        evt.preventDefault()
        console.log('click');
        mot = document.getElementById('saisie').value
        langue = document.getElementById('langue').value

        definition(langue, mot)
    })
}