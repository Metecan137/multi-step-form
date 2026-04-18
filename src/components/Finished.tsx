import thanks from "../assets/images/icon-thank-you.svg"
function Finished() {
  return (
      <div className="flex flex-col md:pt-10 md:px-24 pt-6 px-6 h-120 lg:h-140">
          <div className="flex flex-col items-center justify-center h-full">
             <img src={thanks}/>
             <h1 className="text-3xl font-bold text-primary-blue-950 mt-5">Thank You</h1>
             <p className="mt-5 text-neutral-grey-500 text-center">Thanks for confirming your subscription. We hope you have fun using our platform. If your ever need support, please feel free to email us at metecancikrikcioglu57@gmail.com.</p>
          </div>
      </div>
  )
}

export default Finished