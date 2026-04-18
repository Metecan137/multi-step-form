import FormButtons from "./FormButtons"
import arcadeIcon from "../assets/images/icon-arcade.svg"
import advancedIcon from "../assets/images/icon-advanced.svg"
import proIcon from "../assets/images/icon-pro.svg"
import { useDispatch, useSelector } from "react-redux"
import { selectPlan, setSelectPlan, timeToggle, toggleTime } from "../features/multiformSlice/multiformSlice"

function SelectPlan() {
  const dispatch = useDispatch()
  const selctPlan = useSelector(selectPlan)
  const toggle = useSelector(timeToggle)

  return (
    <div className="flex flex-col md:pt-10 md:px-24 pt-6 px-6 h-120 lg:h-140">
      <div className="h-full">
        <h1 className="text-3xl font-bold text-primary-blue-950">Select your plan</h1>
        <p className="text-neutral-grey-500 pt-3">You have the option of monthly or yearly billing.</p>
        <div className="flex justify-between items-stretch mt-8">
          <div onClick={() => dispatch(setSelectPlan({ plan: "Arcade", price: toggle ? 9*10 : 9 }))} className={`flex flex-col justify-between ${selctPlan.plan === "Arcade" ? "bg-neutral-blue-100" : ""} border hover:border-primary-blue-950 border-neutral-grey-500 w-23 sm:w-28 md:w-33 h-auto rounded-lg px-2 py-2 sm:px-4 sm:py-4`}>
            <img src={arcadeIcon} className="w-10 h-10" />
            <div>
              <h1 className="text-primary-blue-950 font-bold text-sm md:text-base">Arcade</h1>
              <p className="text-neutral-grey-500">{toggle ? "$90/yr" : "$9/mo"}</p>
              {toggle && <p className="text-xs text-primary-blue-950">2 months free</p>}
            </div>
          </div>
          <div onClick={() => dispatch(setSelectPlan({ plan: "Advanced", price: toggle ? 12 * 10 : 12 }))} className={`flex flex-col justify-between ${selctPlan.plan === "Advanced" ? "bg-neutral-blue-100" : ""} border hover:border-primary-blue-950 border-neutral-grey-500 w-23 sm:w-28 md:w-33 h-auto rounded-lg px-2 py-2 sm:px-4 sm:py-4`}>
            <img src={advancedIcon} className="w-10 h-10" />
            <div>
              <h1 className="text-primary-blue-950 font-bold text-sm md:text-base">Advanced</h1>
              <p className="text-neutral-grey-500">{toggle ? "$120/yr" : "$12/mo"}</p>
              {toggle && <p className="text-xs text-primary-blue-950">2 months free</p>}
            </div>
          </div>
          <div onClick={() => dispatch(setSelectPlan({ plan: "Pro", price: toggle ? 15 * 10 : 15 }))} className={`flex flex-col gap-10 ${selctPlan.plan === "Pro" ? "bg-neutral-blue-100" : ""} border hover:border-primary-blue-950 border-neutral-grey-500 w-23 sm:w-28 md:w-33 h-auto rounded-lg px-2 py-2 sm:px-4 sm:py-4`}>
            <img src={proIcon} className="w-10 h-10" />
            <div>
              <h1 className="text-primary-blue-950 font-bold text-sm md:text-base">Pro</h1>
              <p className="text-neutral-grey-500">{toggle ? "$150/yr" : "$15/mo"}</p>
              {toggle && <p className="text-xs text-primary-blue-950">2 months free</p>}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 bg-neutral-blue-100 h-12 mt-12 md:mt-10 rounded-lg">
          <span>Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" onChange={(e) => dispatch(toggleTime(e.target.checked))} checked={toggle} />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer 
                    peer-checked:bg-primary-blue-950
                    after:content-[''] after:absolute after:top-0.5 after:left-0.5 
                    after:bg-white after:rounded-full after:h-5 after:w-5 
                    after:transition-all peer-checked:after:translate-x-5" />
          </label>
          <span>Yearly</span>
        </div>
      </div>
      <div className="hidden md:block mt-auto"><FormButtons /></div>
    </div>
  )
}

export default SelectPlan