radio.onReceivedValue(function (name, value) {
    let y2 = ""
    let x2 = ""
    if (name == x2) {
        xValue = value
    }
    if (name == y2) {
        yValue = value
    }
})
let yValue = 0
let xValue = 0
radio.setGroup(1)
basic.forever(function () {
    cuteBot.motors(yValue + xValue, yValue - xValue)
})
