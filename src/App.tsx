import './App.css'
import DesktopSidebar from './components/DesktopSidebar'
import MobileSidebar from './components/MobileSidebar'
import YourInfo from './components/YourInfo'

function App() {

  return (
    <div className='h-screen bg-neutral-blue-100 flex justify-center md:items-center'>
      <div className='w-full md:w-230 md:px-3 md:py-3 bg-white rounded-xl'>

        {/* Mobile */}
        <div className="md:hidden">
          <MobileSidebar />
          <YourInfo />
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
