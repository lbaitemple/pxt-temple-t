pins.P15.onEvent(PinEvent.PulseHigh, function () {
    mode = mode + 1
    if (mode > 3) {
        mode = 0
    }
})
let mode = 0
let strip = light.createStrip(pins.P28, 30)
mode = 0
forever(function () {
    if (mode == 1) {
        strip.photonForward(1)
    } else if (mode == 2) {
        strip.showAnimation(light.rainbowAnimation, 500)
    } else if (mode == 3) {
        strip.setAll(0xff0000)
        pause(1000)
        strip.setAll(0x007fff)
        pause(1000)
        strip.setAll(0x7f00ff)
    } else {
    	
    }
})
