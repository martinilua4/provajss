function contagem () {

    let saida = document.getElementById('saida')
    let num = Number (document.getElementById('fnum').value)
    saida.innerHTML += `<h2>contando de 0 ate ${num}</h2>`
    let cont = 0
    while (cont <= num) {

    saida.innerHTML += ` ${cont} &#x1F449;`
    cont ++
    }

    saida.innerHTML += `&#x1F3C1;`


    }