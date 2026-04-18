import { useSelector } from "react-redux"
import siderbarDesktop from "../assets/images/bg-sidebar-desktop.svg"
import { buttonCount } from "../features/multiformSlice/multiformSlice"

function DesktopSidebar() {
    const sidebarList = [{ number: 1, info: "YOUR INFO" }, { number: 2, info: "SELECT PLAN" }, { number: 3, info: "ADD-ONS" }, { number: 4, info: "SUMMARY" }]
    const buttonNumber = useSelector(buttonCount)
    console.log(buttonNumber)

    return (
        <div className="relative">
            <img src={siderbarDesktop} alt="sidebarDesktop" className="w-full h-full"/>
            <div className="absolute left-1/7 top-1/14 flex flex-col gap-8 text-white">
                {
                    sidebarList.map((item) => (
                        <div key={item.number} className="flex">
                            <div className={`${buttonNumber === item.number ? "bg-primary-blue-300" : ""} ${item.number === 4 && buttonNumber === 5 ? "bg-primary-blue-300" : ""} text-sm font-bold rounded-full border w-8 h-8 flex items-center justify-center transition-all`}>{item.number}</div>
                            <div className="flex flex-col ml-4">
                                <h3 className="text-[11px] opacity-60">STEP {item.number}</h3>
                                <h1 className="text-xs font-bold">{item.info}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default DesktopSidebar