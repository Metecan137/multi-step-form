import { useDispatch, useSelector } from "react-redux"
import FormButtons from "./FormButtons"
import { makeButtonSelectPlan, ons, selectPlan, timeToggle } from "../features/multiformSlice/multiformSlice"

function Summary() {

  const selctPlan = useSelector(selectPlan)
  const getOns = useSelector(ons)
  const toggle = useSelector(timeToggle)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col md:pt-10 md:px-24 pt-6 px-6 h-120 lg:h-140">
      <div className="h-full">
        <h1 className="text-3xl font-bold text-primary-blue-950">Finishing Up</h1>
        <p className="text-neutral-grey-500 pt-3">Double check everything looks OK before confirming.</p>
        <div className="mt-8">
          <div className={`flex flex-col items-center gap-3 bg-neutral-blue-100 w-full h-auto rounded-lg px-2 py-2 sm:px-4 sm:py-4 mt-8`}>
            <div className="flex items-center gap-4 w-full border-b border-b-gray-300">
              <div className="w-full pb-4 ">
                <h1 className="text-primary-blue-950 font-bold text-sm md:text-base">{selctPlan.plan} {toggle ? "(Yearly)" : "(Monthly)"}</h1>
                <p className="text-neutral-grey-500 text-sm cursor-pointer underline" onClick={() => dispatch(makeButtonSelectPlan())}>Change</p>
              </div>
              <p>${selctPlan.price}/{toggle ? "yr" : "mo"}</p>
            </div>
            {
              getOns.map(item => (
                <div key={item.name} className="flex justify-between w-full text-sm">
                  <div className="text-neutral-grey-500">{item.name}</div>
                  <div>${item.price}/{toggle ? "yr" : "mo"}</div>
                </div>
              ))
            }
          </div>
          <div className="flex justify-between mt-4 px-2 py-2 sm:px-4 sm:py-4">
            <p className="text-neutral-grey-500">Total (per {toggle ? "year" : "month"})</p>
            <p>${selctPlan.price + getOns.reduce((acc, item) => acc + item.price, 0)}/{toggle ? "yr" : "mo"}</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block mt-auto"><FormButtons /></div>
    </div>
  )
}

export default Summary