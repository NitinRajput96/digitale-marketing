import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ObjectD from "../object/ObjectD.json";
// import './view.css';

export const View = () => {
  const { serviceName } = useParams();

  const [state, setState] = useState([]);

  const getDtata = () => {
    ObjectD.detailsData.map((item) =>
      item.serviceName === serviceName ? setState(item) : ""
    );
  };
  console.log(state);

  useEffect(() => {
    getDtata();
    window.scroll(0, 0);
    // console.log(ObjectD.detailsData[0]);
  }, [getDtata]);

  return (
    <>
      <div className=" w-full  flex  justify-center items-center gap-12 px-4 py-8 bg-black/90 text-white ">
        {ObjectD.detailsData.map((item, i) => {
          return item.serviceName === serviceName ? (
            <>
              <div className=" max-[600px]:w-full  sm:w-11/12  flex gap-5  justify-evenly items-center max-[600px]:flex-col ">
                <div className=" max-[400px]:w-full  sm:w-3/6">
                  <img src={item.img} alt="img" className=" w-full h-96 " />
                </div>

                <div className=" max-[600px]:w-full  sm:w-3/6  max-[400px]:h-auto h-96 flex flex-col justify-evenly  pl-20 max-[400px]:pl-5">
                  <h1 className="  max-[400px]:text-2xl max-[600px]:text-[28px]    md:text-4xl lg:text-5xl font-bold mb-6">
                    {item.serviceName}
                  </h1>

                  <h1 className=" max-[400px]:text-[15px]  sm:text-md md:font-semibold mb-2 text-white">
                    {item.details1}
                  </h1>
                  <h1 className=" max-[400px]:text-[15px]  sm:text-md md:font-semibold mb-2 text-white">
                    {item.details2}
                  </h1>
                  <h1 className=" max-[400px]:text-[15px]  sm:text-md md:font-semibold mb-2 text-white">
                    {item.details3}
                  </h1>
                  <h1 className=" max-[400px]:text-[15px]  sm:text-md md:font-semibold mb-2">
                    {item.details4}
                  </h1>
                  <h1 className=" max-[400px]:text-[15px]  sm:text-md md:font-semibold mb-2 text-white">
                    {item.details5}
                  </h1>

                  <div className="button bg-blue-600 mt-4 px-4 py-1 border border-transparent hover:border-blue-600 hover:bg-transparent hover:text-blue-600 transiton-colors rounded-lg w-fit">
                     Get Quote
                  </div>
                  
                </div>
          
              </div>
            </>
          ) : (
            ""
          );
        })}
      </div>
    </>
  );
};
