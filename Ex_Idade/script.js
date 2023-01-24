function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Erro')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        if(fsex[0].checked) {
                gen = 'Masculino'
            if ( idade >= 0 && idade < 10) {
                img.setAttribute('src', 'Fotos/Tarde.jpg')
            }
            } else if (fsex[1].checked) {
                gen = 'Feminino'
            }
        else 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} ${idade}.`
        res.appendChild(img)
    }
}