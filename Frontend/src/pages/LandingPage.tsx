import Navbar from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hero from '@/assets/landing/hero.png'

const LandingPage = () => {
  return (
    <div>
      <Navbar className="sticky top-0"/>

      <div className="w-full flex items-center justify-center flex-wrap gap-5 mx-auto p-6 space-y-12">
     
        <section className="w-4/12 flex flex-col gap-6 items-center">
          <h1 className="text-4xl font-bold">
            AI-Powered Referral Platform for Growing Brands
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Empower your existing customers has a special time and whole or proud success quickly can manage our savings and managing what is coming up in full of safety control.
          </p>

          <div className="w-full">
          <Link to="/login">
            <Button className="px-10 py-4">Get Started</Button>
          </Link>
          </div>
        </section>

        <img src={hero} alt="hero" className="w-6/12"/>
      </div>

      <div className="text-white rounded-lg mx-auto max-w-10/12 min-w-9/12 my-4 p-4 flex flex-wrap items-center justify-center gap-5 bg-black">
          <p className="text-xl w-full text-center">Trusted by Leading Global Brands</p>
          {["Stripe", "Google", "SAMSUNG", "VISA", "Quality", "LinkedIn"].map((brand) => (
              <span className="my-4 px-5 text-3xl">{brand}</span>
          ))}
      </div>


    </div>
  )
}

export default LandingPage