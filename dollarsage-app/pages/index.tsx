import { LandingPageColumn } from "../components/LandingPageColumn";

export default function Home() {
  return (
    <>
      <div className="hero bg-base-100">
        <div className="pt-52 pb-52 bg-[#A8D0E6]">
          <header className="text-center">
            <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-[#374785] mb-4">
              {`Unlock Your Financial Freedom: Discover DollarSage\n`}
            </h1>
            <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-[#F8E9A1] mb-8">Your Path to Financial Success</h1>
            <div className="mb-4 text-4xl text-[#374785]">Join DollarSage and become a Financial Wizard</div>
          </header>
        </div>
        <div className="pt-32 pb-24 text-center bg-[#F76C6C] text-[#F8E9A1]">
          <div className="pt-12">
            <h2 className="text-4xl font-bold text-[#24305E]">Welcome to DollarSage</h2>
            <div className="mt-4 text-xl md:px-20">
            DollarSage is your ultimate financial companion on the journey to financial success. Our platform provides you with powerful lessons, insights, and resources to educate you, make informed decisions, and achieve your financial goals.
            </div>
          </div>
          <LandingPageColumn />
        </div>
      </div>
    </>
  );
}
