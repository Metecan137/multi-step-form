import { useForm, type SubmitHandler } from "react-hook-form"
import FormButtons from "./FormButtons"
import type { FormValues } from "../types"
import { useDispatch, useSelector } from "react-redux"
import { addFormValues, formInfo, increaseButtonCount } from "../features/multiformSlice/multiformSlice"

function YourInfo() {
    const formValues = useSelector(formInfo)
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            name: formValues.name,
            email: formValues.email,
            phoneNumber: formValues.phoneNumber
        }
    })
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        dispatch(addFormValues(data))
        dispatch(increaseButtonCount())
    }

    return (
        <div className="flex flex-col md:pt-10 md:px-24 pt-6 px-6">
            <h1 className="text-3xl font-bold text-primary-blue-950">Personal info</h1>
            <p className="text-neutral-grey-500 pt-3">Please provide your name, email adress and phone number.</p>
            <form id="your-info" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <label className="text-sm text-primary-blue-950 mt-8">Name</label>
                <input {...register("name")} className="w-full border rounded-lg h-12 mt-1 border-neutral-grey-500 p-4" placeholder="Enter your name"/>
                <label className="text-sm text-primary-blue-950 mt-4">Email Adress</label>
                <input {...register("email")} className="w-full border rounded-lg h-12 mt-1 border-neutral-grey-500 p-4" placeholder="Enter email" />
                <label className="text-sm text-primary-blue-950 mt-4">Phone Number</label>
                <input {...register("phoneNumber")} className="w-full border rounded-lg h-12 mt-1 border-neutral-grey-500 p-4" placeholder="Enter your phone number" />
                <div className="hidden md:block"><FormButtons /></div>
            </form>
        </div>
    )
}

export default YourInfo