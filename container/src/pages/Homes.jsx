import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import FormAsk from "../components/home/FormAskLocation";
import TagFood from "../components/home/Tags";
import Brand from "../components/home/Brand";

import TagImg from "../assets/images/tag-com.webp";
function Homes() {
  return (
    <div>
      <Header />
      <div className="absolute top-0 z-0 w-full">
        <img className="h-96 w-full object-cover" src={TagImg}></img>
      </div>

      <div className="flex justify-center">
        <div style={{ width: 1200 }}>
          <div>
            <FormAsk />
            <div
              className="z-10 mb-20 mt-96"
              style={{ border: "1px solid #e5e9f0" }}
            ></div>
            <div className="mt-32 flex justify-center">
              <div className="w-full">
                <h1 className="text:xl p-4 font-bold md:text-4xl ">
                  GrabFood Promo in{" "}
                  <span className="text-emerald-600">
                    Trường Tiểu Học Võ Văn Tần, KP. 5, P.Trung M
                  </span>
                  ...
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Brand />

      <div className="flex justify-center">
        <div className="mt-20 w-[1200px]">
          <TagFood />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Homes;
