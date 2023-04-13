// Captura de dados para atualização do currículo
(() => {

    const day = () => {
        const date = new Date()
        const month = date.getMonth()
        const year = date.getFullYear()
        return {
            month,
            year
        }
    }

    const birthday = {
        year: 1997,
        month: 4
    }

    const verify = () => {
        if(day().month < birthday.month) return day().year - birthday.year - 1
        else return day().year - birthday.year
    }

    const write = () => `Brasileiro, solteiro, ${verify()} anos<br>Recife - PE<br>(81) 98108-6696<br><a href="mailto:wesleycristiano@outlook.com">wesleycristiano@outlook.com</a>`

    const title = document.querySelector('.title')
    title.innerHTML = write()
})()