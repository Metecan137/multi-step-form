import FormButtons from "./FormButtons"

function SelectPlan() {
  return (
    <div className="flex flex-col md:pt-10 md:px-24 pt-6 px-6">
      <h1 className="text-3xl font-bold text-primary-blue-950">Select your plan</h1>
      <p className="text-neutral-grey-500 pt-3">You have the option of monthly or yearly billing.</p>
      <FormButtons/>
    </div>
  )
}

export default SelectPlan