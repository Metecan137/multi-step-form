import { useDispatch, useSelector } from "react-redux"
import { buttonCount, decreaseButtonCount, increaseButtonCount } from "../features/multiformSlice/multiformSlice"

function FormButtons({ onNext }: { onNext?: () => void }) {
    const dispatch = useDispatch()
    const buttonNumber = useSelector(buttonCount)
    console.log("Button count:", buttonNumber)

    return (
        <div className={`flex ${buttonNumber > 1 ? "justify-between" : "justify-end"} items-center font-bold`}>
            {buttonNumber > 1 && <button type="button" className="text-neutral-grey-500" onClick={() => dispatch(decreaseButtonCount())}>Go Back</button>}
            <button type={buttonNumber === 1 ? "submit" : "button"} className={`${buttonNumber === 4 ? "bg-primary-purple-600" : "bg-primary-blue-950"} rounded-lg w-30 text-white h-12`} onClick={onNext ? onNext : () => dispatch(increaseButtonCount())}>{buttonNumber === 4 ? "Confirm" : "Next Step"}</button>
        </div>
    )
}

export default FormButtons