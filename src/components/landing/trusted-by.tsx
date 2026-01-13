import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";

export default function TrustedBy() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-16 bg-gradient-to-r from-gray-200 to-gray-200">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter text-muted-foreground md:text-3xl/tight">
              Trusted by
            </h2>
          </div>

          <div className="flex flex-wrap gap-12 justify-center">
            <img src={logo1} alt="Logo 1" width={100} height={50} />
            <img src={logo2} alt="Logo 2" width={100} height={50} />
            <img src={logo3} alt="Logo 3" width={100} height={50} />
            <img src={logo4} alt="Logo 4" width={100} height={50} />
          </div>
        </div>
      </div>
    </section>
  );
}
