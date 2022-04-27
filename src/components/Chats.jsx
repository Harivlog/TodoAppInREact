import React, { useEffect, useState } from 'react'

function Chats() {
   const [Chat, setChat] = useState(0)
   const [WindowWidth, setWindowWidth] = useState(window.screen.width)
   console.log(WindowWidth)
   useEffect(() => {
    if(Chat === 0){
        document.title = `Chat`
    }
    else{
        document.title = `Chat ${Chat}`

    }
    console.log(" Ali")
     
   },[Chat])
   useEffect(()=>{
       window.addEventListener("resize",()=>{
           setWindowWidth(window.screen.width)

       })

   })
   const addChat = ()=>{
       setChat(Chat + 1)
       console.log("Hello")
    
    } 
    
    console.log("Hello Haris Ali")
   return (
    <div>
        <h2>Chats{Chat}</h2>
        <button onClick={addChat}>add chat</button>
        <h3>{WindowWidth}</h3>
        
        </div>
  )
}

export default Chats