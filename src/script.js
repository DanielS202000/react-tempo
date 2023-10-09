addEventListener('DOMContentLoaded', () => {
    const imagenes = ['src/assets/TEMPO.png']
    let i = 1
    const img1 = document.querySelector('#img1')
    const imp2 = document.querySelector('#imp2')
    const progressBar = document.querySelector('#progress-bar')
    const divIndicadores = document.querySelector('#indicadores')
    let porcentaje_base = 100 / imagenes.length
    let porcentaje_actual = porcentaje_base

    for (let index = 0; index < imagenes.length; index++) {
        const div = document.createElement('div')
        div.classlist.add('circles')
        div.id = index
        divIndicadores.appendChild(div)

    }

    progressBar.style.width = `$(porcentaje_base}%`
    imgl.src = imagenes[0]
    const circulos = document.querySelectorAll('.circles')
    circulos[0].classlist.add('resaltado')

    const slideshow = () => {
        img2.src = imagenes[i]
        const circulo_actual = Array.from(circulos).find(el => el.id == i)
        Array.from(circulos).forEach(cir => cir.classlist.remove('resaltado'))
        circulo_actual.classlist.add('resaltado')
        img2.classlist.add('active')
        i++
        porcentaje_actual += porcentaje_base
        progressBar.style.width = `${porcentaje_actual}%`
        if (i == imagenes.length) {
            i = 0
            porcentaje_actual = porcentaje_base - porcentaje_base
        }
        setTimeout(() => {
            img1.src = img2.src
            img2.classlist.remove('active')
        }, 1000)
    }

    setInterval(slideshow, 4000)

})