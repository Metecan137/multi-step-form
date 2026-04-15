import './App.css'
import DesktopSidebar from './components/DesktopSidebar'
import MobileSidebar from './components/MobileSidebar'

function App() {

  return (
    <div className='h-screen bg-neutral-blue-100 flex justify-center md:items-center'>
      <div className='w-full md:w-260 md:px-3 md:py-3 bg-white rounded-xl'>
        <div className="md:hidden">
          <MobileSidebar />
        </div>
        <div className='hidden md:flex'>
          <DesktopSidebar />
        </div>
      </div>
    </div>
  )
}

export default App
