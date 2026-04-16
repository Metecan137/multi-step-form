import { useDispatch, useSelector } from "react-redux"
import { buttonCount, decreaseButtonCount, increaseButtonCount } from "../features/multiformSlice/multiformSlice"

function FormButtons() {
    const dispatch = useDispatch()
    const buttonNumber = useSelector(buttonCount)
    console.log("Button count:", buttonNumber)

    return (
        <div className={`flex ${buttonNumber > 1 ? "justify-between" : "justify-end"} items-center md:mt-8 lg:mt-24 font-bold`}>
            {buttonNumber > 1 && <button className="text-neutral-grey-500" onClick={() => dispatch(decreaseButtonCount())}>Go Back</button>}
            <button className="bg-primary-blue-950 rounded-lg w-30 text-white h-12" onClick={() => dispatch(increaseButtonCount())}>Next Step</button>
        </div>
    )
}

export default FormButtons