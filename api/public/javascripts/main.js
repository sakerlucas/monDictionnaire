//let url = `https://api.dictionaryapi.dev/api/v2/entries/`

window.onload = () => {
    document.getElementById('bouton').addEventListener('click', (evt) => {
        evt.preventDefault()
        console.log('Recherche');
        mot = document.getElementById('saisie').value
        langue = document.getElementById('langue').value

        fetch(`https://api.dictionaryapi.dev/api/v2/entries/${langue}/${mot}`)
        .then(response => response.json())
        .then((results) => {
            
            document.getElementById('def').innerHTML = `
                <h1>${results[0].word}</h1>
            `

            if (langue != 'en') {
                document.getElementById('def').innerHTML += `
                    <small>(${results[0].meanings[0].partOfSpeech})</small>
                    <ul>
                `
            } else {
                document.getElementById('def').innerHTML += `
                    <ul>
                `
            }

            for (let i = 0; i < results[0].meanings[0].definitions.length; i++) {
                document.getElementById('def').innerHTML += `
                    <li>${results[0].meanings[0].definitions[i].definition}</li>
                `
                
            document.getElementById('def').innerHTML += `
                </ul>
            `
            }
            
        })
        .catch(err => console.log(err))
    })

    document.getElementById('boutonDelete').addEventListener('click', (evt) => {
        evt.preventDefault()
        document.getElementById('def').innerHTML = `
            <h6>Faites une recherche...</h6>
        `
        document.getElementById('saisie').value = ""
    })
}