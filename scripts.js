console.log("veikia")

let myBtn = document.querySelector('input[type=button]')

function btnClick() {
    const myName = prompt('Iveskite varda:')
    const first = prompt('Iveskite pirma skaiciu:')
    const firstNumber = Number(first)
    const second = prompt('Iveskite antra skaiciu:')
    const secondNumber = Number(second)
    const operator = prompt('Iveskite veiksma: +, -, *, / ar kt.:')
    let result = eval(firstNumber + operator + secondNumber)
    console.log(result)
    document.querySelector('h1').innerHTML = myName + ":" + firstNumber + operator + secondNumber + "=" + result 
}
myBtn.addEventListener('click', btnClick)


