import landing from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="shadow flex flex-col items-center py-10 gap-5 rounded-md -mt-16 bg-white">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landing} alt="landing" />
        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <span className="text-3xl font-bold tracking-tight">
            Order takeaway even faster
          </span>
          <span>
            Download the merneats app for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownload} alt="app download" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
