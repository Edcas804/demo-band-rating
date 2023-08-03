import {useEffect, useState} from 'react'
import BandList from "./components/BandList";
import AddBand from "./components/AddBand.jsx";
import io from "socket.io-client";
import {SocketProvider} from "./context/SocketContext";
import Home from "./Home.jsx";

function App() {
    return (
        <SocketProvider>
            <Home />
        </SocketProvider>
    )
}

export default App
