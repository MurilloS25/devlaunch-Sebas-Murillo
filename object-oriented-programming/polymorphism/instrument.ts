
type InstrumentType = 'Wind' | 'Rope' | 'Percusion'

abstract class Instrument{
    constructor(public type: InstrumentType){

    }

    play() {}
}

class Guitar extends Instrument{
    constructor(){
        super('Rope')
    }

    play():void {
        console.log('Strum strum strum')
    }
    
}

class Flute extends Instrument{
    constructor(){
        super('Wind')
    }

    play():void {
        console.log('Toot toot toot')
    }   
}

class Drums extends Instrument{
    constructor(){
        super('Percusion')
    }

    play():void {
        console.log('Boom boom boom')
    }   
}


class Artist{
    constructor(){

    }

    playInstrument(instrument: Instrument){
        instrument.play()
    }
}

const guitar = new Guitar()
const flute = new Flute()
const drums = new Drums()
const artist = new Artist()

guitar.play()
flute.play()
artist.playInstrument(drums)