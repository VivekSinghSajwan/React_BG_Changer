import { useState } from "react";

function ButtonTab(){
    let [color,setColor] = useState('gray')

    function changeColor(color){
        setColor(color)
    }
    return (
        <div className="body w-full h-screen py-4" style={{ backgroundColor: color }}>
            <div className="w-5xl m-auto bg-white px-1 py-3 mb-50 flex justify-evenly rounded-full">
                <button onClick={() => changeColor('red')} className="text-white rounded-xl bg-red-400 px-7" >RED</button>
                <button onClick={() => changeColor('orange')}className="text-white rounded-xl bg-orange-400 px-7">ORANGE</button>
                <button onClick={() => changeColor('yellow')} className="text-white rounded-xl bg-yellow-400 px-7">YELLOW</button>
                <button onClick={() => changeColor('green')} className="text-white rounded-xl bg-green-400 px-7">GREEN</button>
                <button onClick={() => changeColor('blue')} className="text-white rounded-xl bg-blue-400 px-7">BLUE</button>
                <button onClick={() => changeColor('indigo')} className="text-white rounded-xl bg-indigo-400 px-7">INDIGO</button>
                <button onClick={() => changeColor('violet')} className="text-white rounded-xl bg-violet-400 px-7">VIOLET</button>
            </div>
        </div>
    )
}

export default ButtonTab;