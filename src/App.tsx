import { useLayoutEffect, useState } from 'react'
import desktopDivider from './assets/pattern-divider-desktop.svg'
import mobileDivider from './assets/pattern-divider-mobile.svg'
import iconDice from './assets/icon-dice.svg'
import { useQuote } from './api/queries'

function App() {
  const [divider, setDivider] = useState(mobileDivider)

  const quote = useQuote()

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
        <div className="relative flex w-[85%] flex-col items-center justify-center gap-6 rounded-xl bg-blue-900 p-12 px-5 pb-16 shadow-xl md:w-[500px]">
          {quote.isFetching ? (
            <>
              {/* Skeleton para el "ADVICE #" */}
              <span className="h-3 w-24 animate-pulse rounded bg-green-300"></span>

              {/* Skeleton para la frase */}
              <div className="flex w-full flex-col items-center gap-3 px-6">
                <span className="h-4 w-3/4 animate-pulse rounded bg-blue-200"></span>
                <span className="h-4 w-4/4 animate-pulse rounded bg-blue-200"></span>
                <span className="h-4 w-3/4 animate-pulse rounded bg-blue-200"></span>
              </div>
            </>
          ) : (
            <>
              <span className="text-[0.7rem] tracking-[0.2rem] text-green-300">
                ADVICE #{quote.data?.data.slip.id}
              </span>
              <h1 className="text-center text-[1.3rem] tracking-wide text-blue-200 md:mx-4">
                {quote.data?.data.slip.advice}
              </h1>
            </>
          )}

          <img src={divider} alt="divider" />
          <button
            onClick={async () => {
              await quote.refetch()
            }}
            className="absolute bottom-0 left-1/2 flex h-16 w-16 -translate-x-1/2 translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-green-300 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_2px_hsl(150,100%,66%)]"
          >
            <img src={iconDice} alt="dice" />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
