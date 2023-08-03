import {useEffect, useState, useContext} from 'react'
import BandList from "./components/BandList";
import AddBand from "./components/AddBand";
import {useSocket} from "./hooks/useSocket";
import {SocketContext} from "./context/SocketContext";
import BandChart from "./components/BandChart.jsx";

function Home() {
    const {online} = useContext(SocketContext);
    return (
        <>
            <main className="w-full flex flex-col justify-center items-center ">
                <header className="flex justify-around items-center w-full p-5 border-b border-slate-200 gap-4">
                    <h1 className="text-xl text-brand-color">Band rating app with socket.io and ReactJS</h1>
                    <p>
                        <span className="text-slate-400 text-sm p-2">socket:</span>
                        {
                            online
                                ? <span className="text-green-500 font-bold">Online</span>
                                : <span className="text-red-500 font-bold">Offline</span>
                        }
                    </p>
                </header>
                <article className="w-5/6 sm:5/6 flex justify-around items-start gap-4 p-4">
                    <div className="w-5/6 bg-slate-50 p-2 rounded-2xl">
                        <BandChart />
                    </div>
                </article>
                <article className="w-5/6 sm:5/6 flex justify-around items-start gap-4 p-4">
                    <div className="w-5/6 bg-slate-50 p-2 rounded-2xl">
                        <BandList />
                    </div>
                    <div className="w-2/6 bg-slate-50 p-2 rounded-2xl">
                        <AddBand />
                    </div>
                </article>
            </main>
        </>
    )
}

export default Home
