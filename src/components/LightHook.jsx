import React, { useState } from 'react'
export const useLight = () =>{
    const [light, setLight] = useState(false)
  
    const switchLight = () =>{
        setLight(!light)
        console.log(light)
        
    }

    return{
        light,
        switchLight
       
    }
}
export default function LightHook() {
    const clickSwitch = useLight()
  return (
    <div>
        <button onClick={clickSwitch.switchLight}>Dark Mode</button>
    </div>
  )
}
