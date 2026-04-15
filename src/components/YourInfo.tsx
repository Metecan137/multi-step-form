import { useForm } from "react-hook-form"

function YourInfo() {
    const { register } = useForm()
    return (
        <div className="flex flex-col pt-10 px-24">
            <h1 className="text-3xl font-bold text-primary-blue-950">Personal info</h1>
            <p className="text-neutral-grey-500 pt-3">Please provide your name, email adress and phone number.</p>
            <form className="flex flex-col">
                <label className="text-sm text-primary-blue-950 mt-8">Name</label>
                <input {...register("name")} className="w-full border rounded-lg h-12 mt-1 border-neutral-grey-500 p-4" placeholder="Enter your name!"/>
                <label className="text-sm text-primary-blue-950 mt-4">Email Adress</label>
                <input {...register("email")} className="w-full border rounded-lg h-12 mt-1 border-neutral-grey-500 p-4" placeholder="Enter your name!" />
                <label className="text-sm text-primary-blue-950 mt-4">Phone Number</label>
                <input {...register("phoneNumber")} className="w-full border rounded-lg h-12 mt-1 border-neutral-grey-500 p-4" placeholder="Enter your name!" />
            </form>
        </div>
    )
}

export default YourInfo