import './App.css'
import DesktopSidebar from './components/DesktopSidebar'
import MobileSidebar from './components/MobileSidebar'
import YourInfo from './components/YourInfo'

function App() {

  return (
    <div className='h-screen bg-neutral-blue-100 flex justify-center md:items-center'>
      <div className='w-full md:w-230 md:px-3 md:py-3 md:bg-white rounded-xl'>

        {/* Mobile */}
        <div className="relative md:hidden">
          <MobileSidebar />
          <div className='absolute top-25 bg-white rounded-lg w-85 h-110 sm:w-110 sm:h-110 sm:top-43 left-1/2 -translate-x-1/2'>
            <YourInfo />
          </div>
        </div>

        {/* Desktop */}
        <div className='hidden md:grid md:grid-cols-[240px_1fr] lg:grid-cols-[274px_1fr] transition-all'>
          <DesktopSidebar />
          <YourInfo />
        </div>
      </div>
    </div>
  )
}

export default App
