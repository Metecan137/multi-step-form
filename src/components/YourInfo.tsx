import { useForm } from "react-hook-form"
import FormButtons from "./FormButtons"

function YourInfo() {
    const { register } = useForm()
    return (
        <div className="flex flex-col md:pt-10 md:px-24 pt-6 px-6">
            <h1 className="text-3xl font-bold text-primary-blue-950">Personal info</h1>
            <p className="text-neutral-grey-500 pt-3">Please provide your name, email adress and phone number.</p>
            <form className="flex flex-col">
                <label className="text-sm text-primary-blue-950 mt-8">Name</label>
                <input {...register("name")} className="w-full border rounded-lg h-12 mt-1 border-neutral-grey-500 p-4" placeholder="Enter your name"/>
                <label className="text-sm text-primary-blue-950 mt-4">Email Adress</label>
                <input {...register("email")} className="w-full border rounded-lg h-12 mt-1 border-neutral-grey-500 p-4" placeholder="Enter email" />
                <label className="text-sm text-primary-blue-950 mt-4">Phone Number</label>
                <input {...register("phoneNumber")} className="w-full border rounded-lg h-12 mt-1 border-neutral-grey-500 p-4" placeholder="Enter your phone number" />
                <FormButtons />
            </form>
        </div>
    )
}

export default YourInfo