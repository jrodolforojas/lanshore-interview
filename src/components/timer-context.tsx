import { createContext, useState, useEffect } from 'react'

interface Timer {
  milliseconds: number
}

export const TimerContext = createContext<Timer>({
  milliseconds: 0
})

const TimerProvider = ({ children }: {
  children: React.ReactNode
}) => {
  const [timeElapsed, setTimeElapsed] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setTimeElapsed(prevTime => prevTime + 1)
    }, 1000)
  }, [])

  return (
    <TimerContext.Provider value={{ milliseconds: timeElapsed }}>
      {children}
    </TimerContext.Provider>
  )
}

export default TimerProvider
