function trocarImagem(img){
    const cityButton = window.document.getElementById('cityButton')
    const natureButton = window.document.getElementById('natureButton')
    const portraitsButton = window.document.getElementById('portraitsButton')
    const showAllButton = window.document.getElementById('showAllButton')
    const photos = window.document.getElementById('photos')
    // innerHTML vai SOBRESCREVER SEU HTML, APAGANDO TUDO
    if (img == 'city') {
        cityButton.style.color = `red`
        natureButton.style.color = `#38CCCC`
        portraitsButton.style.color = `#38CCCC`
        showAllButton.style.color = `#38CCCC`
        photos.innerHTML = `
        <div class = "container-image"><img src = "Style/imgs/city/City01.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/city/City02.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/city/City03.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/city/City04.jpg" width = "100" height = "100"/></div>
        `
    } else if ( img == 'nature'){
        cityButton.style.color = `#38CCCC`
        natureButton.style.color = `red`
        portraitsButton.style.color = `#38CCCC`
        showAllButton.style.color = `#38CCCC`

        photos.innerHTML = `
        <div class = "container-image"><img src = "Style/imgs/nature/nature01.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/nature/nature02.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/nature/nature03.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/nature/nature04.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/nature/nature05.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/nature/nature06.jpg" width = "100" height = "100"/>></div>
        `

    } else if (img == 'portraits') {
        cityButton.style.color = `#38CCCC`
        natureButton.style.color = `#38CCCC`
        portraitsButton.style.color = `red`
        showAllButton.style.color = `#38CCCC`

        photos.innerHTML = `
        <div class = "container-image"><img src = "Style/imgs/portraits/retratos01.jpg" width = "100" height = "100"/></div>
        `

    } else if (img == 'showAll') {
        cityButton.style.color = `#38CCCC`
        natureButton.style.color = `#38CCCC`
        portraitsButton.style.color = `#38CCCC`
        showAllButton.style.color = `red`

        photos.innerHTML = `
        <div class = "container-image"><img src = "Style/imgs/city/City01.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/city/City02.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/city/City03.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/city/City04.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/nature/nature01.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/nature/nature02.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/nature/nature03.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/nature/nature04.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/nature/nature05.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/nature/nature06.jpg" width = "100" height = "100"/></div>
        <div class = "container-image"><img src = "Style/imgs/portraits/retratos01.jpg" width = "100" height = "100"/></div>
        `
        
    }

}

window.onload = trocarImagem('showAll')