import {useContext, useEffect, useState} from "react";
import {SocketContext} from "../context/SocketContext.jsx";

const BandList = () => {
    const {socket} = useContext(SocketContext);
    const [bands, setBands] = useState([]);
    useEffect(() => {
        socket.on('current-bands', (data) => {
            setBands(data)
        })
    }, [socket])
    return (
        <table className="w-full">
            <thead className="border-b border-brand-color text-brand-color">
                <tr>
                    <th className="p-3 text-center">Band</th>
                    <th className="p-3 text-center" title="Number of votes for band">Votes</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody className="text-center text-slate-500">
            {bands.map(band => (
                <tr key={band.id} className="border-b border-slate-200 p-2" >
                    <td className="p-2">{band.name}</td>
                    <td className="p-2">{band.votes}</td>
                    <td
                        onClick={() => socket.emit('vote-band', {id: band.id})}
                        title="Add band to list"
                    >
                        <button
                            className="bg-green-400 text-white  text-sm font-bold rounded-full w-7 h-7 cursor-pointer hover:bg-green-500 transition-colors duration-300 flex justify-center"
                        >+1</button>
                    </td>
                    <td
                        onClick={() => socket.emit('remove-band', {id: band.id})}
                        title="Remove band from list"
                    >
                        <button
                            className="bg-red-400 text-white font-bold rounded-full w-7 h-7 cursor-pointer hover:bg-red-500 transition-colors duration-300 flex justify-center"
                        >-</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}
export default BandList;