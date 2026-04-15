import sidebarMobile from "../assets/images/bg-sidebar-mobile.svg"

function MobileSidebar() {
  return (
    <div className="relative">
      <img src={sidebarMobile} alt="sidebarMobile" className="w-full" />
      <div className="absolute right-1/2 translate-x-1/2 top-1/5 flex gap-4 text-white text-sm font-bold">
        {
          [1, 2, 3, 4].map((item) => (
            <div key={item} className="rounded-full border w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-all">{item}</div>
          ))
        }
      </div>
    </div>
  )
}

export default MobileSidebar
