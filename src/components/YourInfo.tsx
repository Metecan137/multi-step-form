import { useForm, type SubmitHandler } from "react-hook-form"
import FormButtons from "./FormButtons"
import type { FormValues } from "../types"
import { useDispatch, useSelector } from "react-redux"
import { addFormValues, formInfo, increaseButtonCount } from "../features/multiformSlice/multiformSlice"

function YourInfo() {
    const formValues = useSelector(formInfo)
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            name: formValues.name,
            email: formValues.email,
            phoneNumber: formValues.phoneNumber
        }
    })
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("submit tetiklendi", data)
        dispatch(addFormValues(data))
        dispatch(increaseButtonCount())
    }

    return (
        <div className="flex flex-col md:pt-10 md:px-24 pt-6 px-6 h-120 lg:h-140">
            <h1 className="text-3xl font-bold text-primary-blue-950">Personal info</h1>
            <p className="text-neutral-grey-500 pt-3">Please provide your name, email adress and phone number.</p>
            <form id="your-info" className="flex flex-col h-full" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-between items-center mt-8">
                    <label className="text-sm text-primary-blue-950">Name</label>
                    {errors.name && (
                        <p className="text-red-600 text-xs font-bold">
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <input {...register("name" , {required: "This field is required", maxLength:{value: 20, message: "Max Length is 20"}})} className="w-full border rounded-lg h-12 mt-1 border-neutral-grey-500 p-4" placeholder="Enter your name"/>
                <div className="flex justify-between items-center mt-4">
                <label className="text-sm text-primary-blue-950">Email Adress</label>
                {errors.email && (
                    <p className="text-red-600 text-xs font-bold">
                        {errors.email.message}
                    </p>
                )}
                </div>
                <input {...register("email", {
                    required: "This field is required", pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Please enter valid email"
                    } })} className="w-full border rounded-lg h-12 mt-1 border-neutral-grey-500 p-4" placeholder="Enter email" />
                <div className="flex justify-between items-center mt-4">
                <label className="text-sm text-primary-blue-950">Phone Number</label>
                    {errors.phoneNumber && (
                        <p className="text-red-600 text-xs font-bold">
                            {errors.phoneNumber.message}
                        </p>
                    )}
                </div>
                <input {...register("phoneNumber", {
                    required: "This field is required",
                    pattern: {
                        value: /^[0-9]{10,15}$/,
                        message: "Please enter valid phone number"
                    }
                })} className="w-full border rounded-lg h-12 mt-1 border-neutral-grey-500 p-4" placeholder="Enter your phone number" />
                <div className="hidden md:block mt-auto"><FormButtons onNext={handleSubmit(onSubmit)} /></div>
            </form>
        </div>
    )
}

export default YourInfo