import { useSelector } from 'react-redux'
import './App.css'
import DesktopSidebar from './components/DesktopSidebar'
import FormButtons from './components/FormButtons'
import MobileSidebar from './components/MobileSidebar'
import SelectPlan from './components/SelectPlan'
import YourInfo from './components/YourInfo'
import { buttonCount } from './features/multiformSlice/multiformSlice'

function App() {
  const buttonNumber = useSelector(buttonCount)

  return (
    <div className='h-screen bg-neutral-blue-100 flex justify-center md:items-center'>
      <div className='w-full md:w-230 md:px-3 md:py-3 md:bg-white rounded-xl'>

        {/* Mobile */}
        <div className="relative md:hidden">
          <MobileSidebar />
          <div className='absolute top-25 bg-white rounded-lg w-85 h-110 sm:w-110 sm:h-110 sm:top-43 left-1/2 -translate-x-1/2'>
            {buttonNumber === 1 && <YourInfo />}
            {buttonNumber === 2 && <SelectPlan />}
          </div>
        </div>
        <div className='fixed bottom-0 left-0 right-0 px-6 py-4 md:hidden bg-white'><FormButtons /></div>


        {/* Desktop */}
        <div className='hidden md:grid md:grid-cols-[240px_1fr] lg:grid-cols-[274px_1fr] transition-all'>
          <DesktopSidebar />
          {buttonNumber === 1 && <YourInfo />}
          {buttonNumber === 2 && <SelectPlan />}
        </div>
      </div>
    </div>
  )
}

export default App
