import BandList from './band-list.js'
class Sockets {
    constructor(io) {
        this.io = io
        this.bandList = new BandList()
        this.socketEvents()
    }

    socketEvents() {
        this.io.on('connection', (socket) => {
            console.log('new client connected')
            socket.emit('current-bands', this.bandList.getBands())

            socket.on('change-name', (data) => {
                this.bandList.changeName(data.id, data.name)
                this.io.emit('current-bands', this.bandList.getBands())
            })
            socket.on('remove-band', (data) => {
                this.bandList.remove(data.id)
                this.io.emit('current-bands', this.bandList.getBands())
            })
            socket.on('add-band', (data) => {
                this.bandList.add(data.name)
                this.io.emit('current-bands', this.bandList.getBands())
            })
            socket.on('vote-band', (data) => {
                this.bandList.increaseVotes(data.id)
                this.io.emit('current-bands', this.bandList.getBands())
            })
        });
    }
}

export default Sockets;