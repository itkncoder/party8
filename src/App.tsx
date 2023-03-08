import { useState } from "react"

function App() {

  const params = new URLSearchParams(document.location.search)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div classNameName="App">

      {!isOpen && 
      <div>
        <h3 className="title">{params.get("ism")}, sizga xabar keldi!</h3>
        <div onClick={() => {
          setIsOpen(prev => !prev)
        }} className="letter-image">
          <div className="animated-mail">
            <div className="back-fold"></div>
            <div className="letter">
              <div className="letter-border"></div>
              <div className="letter-title"></div>
              <div className="letter-context"></div>
              <div className="letter-stamp">
                <div className="letter-stamp-inner"></div>
              </div>
            </div>
            <div className="top-fold"></div>
            <div className="body"></div>
            <div className="left-fold"></div>
          </div>
          <div className="shadow"></div>
        </div>
      </div>}
      
      {isOpen && <div className="flower-container">
        <div className="flower">
          <div className="message"></div>
        </div>
        <div className="message-text">
          Aziz {params.get("ism")}, sizni 8-mart Xalqaro xotin-qizlar kuni bilan chin qalbdan qutlab, Sizga baxoriy tabassum, mustaxkam sixat-salomatlik, quyosh xarorati-yu olam-olam quvonchga to‘la xissiyotlarni tilab qolaman!
          <b>8 - mart bilan {params.get("ism")} ga</b>    
        </div>
      </div>}
    </div>
  )
}

export default App