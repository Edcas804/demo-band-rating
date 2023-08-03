import {useContext, useState} from "react";
import {SocketContext} from "../context/SocketContext.jsx";

const AddBand = () => {
    const {socket} = useContext(SocketContext);
    const [newBandInput, setNewBandInput] = useState('');
    const addBand = (e) => {
        e.preventDefault()
        if(newBandInput.trim() === '') return alert('Please enter a band name')

        socket.emit('add-band', { name: newBandInput })
        setNewBandInput('')
    }
    return(
        <div>
            <form action="" className="flex flex-col gap-3">
                <input type="text" name="newBand" placeholder="new band" value={newBandInput} onChange={(e) => setNewBandInput(e.target.value)} autoComplete="off" className="border-2 border-brand-color focus:outline-none p-2 rounded-xl" />
                <button className="bg-brand-color text-white rounded-xl p-2" onClick={(e) => addBand(e)}><i className="fas fa-plus"></i>Save</button>
            </form>
        </div>
    )
}

export default AddBand;