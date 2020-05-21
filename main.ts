let Choice = 0
let Lunch_options = ["Fried rice", "Spaghetti", "Nasi lemak"]
basic.forever(function () {
    while (edubitIrBit.isIrSensorTriggered()) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    }
    music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    Choice = Math.randomRange(0, Lunch_options.length - 1)
    basic.showString("" + (Lunch_options[Choice]))
    while (!(edubitIrBit.isIrSensorTriggered())) {
    	
    }
})
