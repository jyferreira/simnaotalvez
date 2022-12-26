let resposta = 0
input.onGesture(Gesture.Shake, function () {
    resposta = randint(1, 3)
    if (resposta == 1) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
    } else if (resposta == 2) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
    } else if (resposta == 3) {
        basic.showLeds(`
            . # . # .
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            `)
    } else {
    	
    }
})
basic.forever(function () {
	
})
