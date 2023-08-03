import Band from "./band.js";
class BandList{
    constructor(){
        this.bands = [
            new Band('Metallica'),
            new Band('Heroes del silencio'),
            new Band('Bon Jovi'),
            new Band('Breaking Benjamin'),
            new Band('Nirvana')
        ];
    }
    add(name){
        const newBand = new Band(name);
        this.bands.push(newBand);
        return this.bands;
    }
    remove(id){
        this.bands = this.bands.filter(band => band.id !== id);
    }
    getBands(){
        return this.bands;
    }
    increaseVotes(id){
        this.bands = this.bands.map(band => {
            if(band.id === id){
                band.votes++;
            }
            return band;
        });
    }
    decreaseVotes(id){
        this.bands = this.bands.map(band => {
            if(band.id === id){
                band.votes--;
            }
            return band;
        });
    }
    changeName(id, newName){
        this.bands = this.bands.map(band => {
            if(band.id === id){
                band.name = newName;
            }
            return band;
        });
    }
}
export default BandList;