var five = require('johnny-five')
var Raspi = require('raspi-io')

var ledOne = {
    pin: 28,
    instance: new five.Led(28),
    init(client) {
        client.on('led1TurnOn', argv => {
            this.instance.on()
        })
        client.on('led1TurnOff', argv => {
            this.instance.off()
        })
        client.on('led1adjustBright', argv => {
            this.instance.brightness(argv)
        })
        client.on('led1blink', argv => {
            this.instance.blink(argv)
        })
    }
}
var ledTwo = {
    pin: 29,
    instance: new five.Led(29),
    init(client) {
        client.on('led2TurnOn', argv => {
            this.instance.on()
        })
        client.on('led2TurnOff', argv => {
            this.instance.off()
        })
        client.on('led2adjustBright', argv => {
            this.instance.brightness(argv)
        })
        client.on('led2blink', argv => {
            this.instance.blink(argv)
        })
    }
}

module.exports = {
    ledOne,
    ledTwo
}
