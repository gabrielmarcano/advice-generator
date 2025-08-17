import { useLayoutEffect, useState } from 'react'
import desktopDivider from './assets/pattern-divider-desktop.svg'
import mobileDivider from './assets/pattern-divider-mobile.svg'
import iconDice from './assets/icon-dice.svg'

function App() {
  const [count, setCount] = useState(1)
  const [divider, setDivider] = useState(mobileDivider)

  useLayoutEffect(() => {
    const handleResize = () => {
      // Set divider image based on screen width
      setDivider(window.innerWidth < 768 ? mobileDivider : desktopDivider)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <div className="font-manrope flex min-h-screen items-center justify-center bg-blue-950">
        <div className="relative flex w-[85%] flex-col items-center justify-center gap-6 rounded-xl bg-blue-900 p-12 px-5 pb-16 shadow-lg md:w-[700px]">
          <span className="text-[0.7rem] tracking-[0.2rem] text-green-300">
            ADVICE #{count}
          </span>
          <h1 className="text-center text-[1.3rem] tracking-wide text-blue-200">
            {/* "El que no agarra consejo no llega a viejo." */}
            "It is easy to sit up and take notice, what's difficult is getting
            up and taking action."
          </h1>
          <img src={divider} alt="divider" className="" />
          <button
            onClick={() => setCount(count + 1)}
            className="absolute bottom-0 left-1/2 flex h-16 w-16 -translate-x-1/2 translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-green-300 shadow-lg"
          >
            <img src={iconDice} alt="dice" />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
