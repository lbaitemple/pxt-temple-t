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
    } else if (false) {
    	
    } else {
    	
    }
})
