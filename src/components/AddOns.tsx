import { useDispatch, useSelector } from "react-redux"
import FormButtons from "./FormButtons"
import { addOnsToList, ons, timeToggle, toggleTime } from "../features/multiformSlice/multiformSlice"

function AddOns() {

  const dispatch = useDispatch()
  const getOns = useSelector(ons)
  const toggle = useSelector(timeToggle)

  return (
    <div className="flex flex-col md:pt-10 md:px-24 pt-6 px-6 h-120 lg:h-140">
      <div className="h-full">
        <h1 className="text-3xl font-bold text-primary-blue-950">Pick add-ons</h1>
        <p className="text-neutral-grey-500 pt-3">Add-ons help enhance your gamin experience.</p>
        <label className="cursor-pointer">
          <div className={`flex justify-between items-center gap-10 border hover:border-primary-blue-950 border-neutral-grey-500 w-full h-auto rounded-lg px-2 py-2 sm:px-4 sm:py-4 mt-8`}>
            <div className="flex items-center gap-4">
              <input type="checkbox" className="w-5 h-5 accent-primary-purple-600" checked={getOns.some(item => item.name === "Online Services")} 
                onChange={() => dispatch(addOnsToList({ name: "Online Services", price: toggle ? 1*10 :1}))}/>
              <div>
                <h1 className="text-primary-blue-950 font-bold text-sm md:text-base">Online Services</h1>
                <p className="text-neutral-grey-500">Acces to multiplayer games.</p>
              </div>
            </div>
            <div><p className="text-primary-blue-950 text-sm">{toggle ? "+$10/mo" : "+$1/mo"}</p></div>
          </div>
        </label>
        <label className="cursor-pointer">
          <div className={`flex justify-between items-center gap-10 border hover:border-primary-blue-950 border-neutral-grey-500 w-full h-auto rounded-lg px-2 py-2 sm:px-4 sm:py-4 mt-4`}>
            <div className="flex items-center gap-4">
              <input type="checkbox" className="w-5 h-5 accent-primary-purple-600" checked={getOns.some(item => item.name === "Large Storage")}
                onChange={() => dispatch(addOnsToList({ name: "Large Storage", price: toggle ? 2 * 10 : 2 }))} />
              <div>
                <h1 className="text-primary-blue-950 font-bold text-sm md:text-base">Large Storage</h1>
                <p className="text-neutral-grey-500">Extra 1TB of cloud storage.</p>
              </div>
            </div>
            <div><p className="text-primary-blue-950 text-sm">{toggle ? "+$20/mo" : "+$2/mo"}</p></div>
          </div>
        </label>
        <label className="cursor-pointer">
          <div className={`flex justify-between items-center gap-10 border hover:border-primary-blue-950 border-neutral-grey-500 w-full h-auto rounded-lg px-2 py-2 sm:px-4 sm:py-4 mt-4`}>
            <div className="flex items-center gap-4">
              <input type="checkbox" className="w-5 h-5 accent-primary-purple-600" checked={getOns.some(item => item.name === "Customizable Profile")}
                onChange={() => dispatch(addOnsToList({ name: "Customizable Profile", price: toggle ? 2 * 10 : 2 }))} />
              <div>
                <h1 className="text-primary-blue-950 font-bold text-sm md:text-base">Customizable Profile</h1>
                <p className="text-neutral-grey-500">Custom theme on your profile.</p>
              </div>
            </div>
            <div><p className="text-primary-blue-950 text-sm">{toggle ? "+$20/mo" : "+$2/mo"}</p></div>
          </div>
        </label>
      </div>
      <div className="hidden md:block mt-auto"><FormButtons /></div>
    </div>
  )
}//${selctPlan.plan === "Pro" ? "bg-neutral-blue-100" : ""} 

export default AddOns