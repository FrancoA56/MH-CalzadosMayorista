import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Shop = () => {
  const dispatch = useDispatch();
  const shoes = useSelector((state) => state.shoes);

  return (
    <div className="bg-green-200 dark:bg-[#112213] p-4">
      <div className="bg-green-400  dark:bg-green-800 p-4 rounded shadow-md mx-8">
        {/* Listado de Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 p-4">
          {shoes.map((Product) => (
            <div
              key={Product.id}
              className="bg-green-100 dark:bg-green-950 dark:border-green-950 border rounded p-4 shadow-md flex flex-col mb-4"
            >
              <div className="">
                <CarouselProvider
                  naturalSlideWidth={90}
                  naturalSlideHeight={52}
                  totalSlides={Product.img.length}
                >
                  <Slider>
                    {Product.img.map((image, index) => {
                      return (
                        <div className="w-11/12">
                          <div className="">
                            <Slide index={index}>
                              {" "}
                              <img
                                src={image}
                                alt="imagen de zapatillas"
                                className="transform transition-transform hover:scale-110"
                              />{" "}
                            </Slide>
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                  <div className="flex justify-center gap-3 mt-2">
                    <ButtonBack>
                      <span class="material-symbols-outlined">
                        navigate_before
                      </span>
                    </ButtonBack>
                    <ButtonNext>
                      <span class="material-symbols-outlined">
                        navigate_next
                      </span>
                    </ButtonNext>
                  </div>
                </CarouselProvider>
              </div>
              <div className="mt-4 flex-grow">
                <h2 className="text-lg font-semibold dark:text-gray-200">
                  {Product.name}
                </h2>
                <p className="text-gray-600 dark:text-[#909090]">
                  Colores: {Product.colors}
                </p>
                <p className="text-lg font-semibold mt-2 dark:text-gray-200">
                  Precio unitario: {Product.price}
                </p>
                <p className="text-lg font-semibold mt-2 dark:text-gray-200">
                  Talle: {Product.size}
                </p>
              </div>
              <div className="mt-4">
                <button className="bg-green-500 dark:bg-green-700 text-white px-4 py-2 rounded mr-2">
                  Agregar al carrito
                </button>
                <button className="bg-gray-400 dark:bg-[#303030] text-white px-4 py-2 rounded">
                  Ver detalle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
