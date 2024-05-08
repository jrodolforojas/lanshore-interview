import { useContext } from "react"
import { Link, useLocation } from "wouter"
import { TimerContext } from "./timer-context"

export default function Navbar() {
  const timer = useContext(TimerContext)

  const [currentPath] = useLocation()

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center gap-x-3 justify-center">
          <h2 className="text-xl font-bold ">Affordably!</h2>
          <span className="text-xs">Affordable Housing</span>
        </Link>
        <div className="block w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 items-center">
            {currentPath === '/' ? (
              <>
                <li>
                  <Link href="/submitListings" className="block py-2 px-3 text-black bg-orange-400 rounded-full">New Listings</Link>
                </li>
                <li >
                  <Link href="/publishListings" className="block py-2 px-3 text-black bg-orange-400 rounded-full">Publish Listings</Link>
                </li>
              </>
            ) : (
              <li>
                <Link href="/" className="block py-2 px-3 text-black bg-orange-400 rounded-full">Return</Link>
              </li>
            )}
            <li>
              <span className="text-md text-gray-300">Time on site(seconds): {timer.milliseconds}s</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}