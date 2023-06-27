import React from 'react';
import "../assets/Rische-Light.ttf";

function CV() {
  const titleStyle = {
    fontFamily: 'Rische',
    fontWeight: 300,
    fontStyle: 'normal',
  };

  return (
    <section className="pt-20 pb-10 lg:pt-[12px] lg:pb-30">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mt-20 mb-10 max-w-[370px]">
              <div>
                <h1>
                  <a
                    href="javascript:void(0)"
                    className="text-dark mb-6 inline-block text-4xl font-semibold sm:text-2xl lg:text-2xl xl:text-2xl"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    Posible línea de tiempo
                  </a>
                </h1>
                <p className="text-body-color text-base italic">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                </p>
              </div>
            </div>
            <div className="mx-auto mb-10 max-w-[370px]">
              <div>
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    1990
                  </a>
                </h3>
                <p className="text-body-color text-base italic">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
            </div>
            <div className="mx-auto mb-10 max-w-[370px]">
              <div>
                <h3>
                  <a
                    href="javascript:void(0)"
                    className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    1990
                  </a>
                </h3>
                <p className="text-body-color text-base italic">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;
