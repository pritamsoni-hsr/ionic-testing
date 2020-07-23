import React, { createRef, useState } from 'react';
import { SwiperOptions } from 'swiper';

import { IonItem, IonLabel, IonSlide, IonSlides } from '@ionic/react';

const Card: React.FC<{ idx: number; big?: boolean; small?: boolean }> = ({
  idx,
  big = false,
  small = false,
}) => (
  <div className="custom">
    {big && <span className="big"></span>}
    {small && <span className="small"></span>}
  </div>
);
const INITIAL_SLIDE = 17;
const slideOpts: SwiperOptions = {
  initialSlide: 0,
  spaceBetween: INITIAL_SLIDE,
  slidesPerView: 7.4,
  centeredSlides: true,

  // centeredSlidesBounds: true,
  watchSlidesProgress: true,
  // cssMode:true,
  on: {
    setTranslate: function () {
      // const swiper = this as any;
      // console.log(swiper.realIndex);
      // console.log("translating");
    },
    transitionStart: () => {
      console.log("slide chagsaases");
    },
  },
};

const InfinteSlides: React.FC<{ setState: any }> = React.memo(({ setState }) => {
  let ref = createRef<HTMLIonSlidesElement>();

  let extraOpts = {
    speed: 400,
    on: {
      beforeInit: function () {
        let swiper = this as any;
        console.log(swiper, "init");
      },
      slideChange: function () {
        const swiper = this as any;
        // console.log(swiper);
        setState(swiper.realIndex);
        if (swiper.realIndex < 3)
          swiper.params.virtual.slides.splice(0, 0, {
            big: true,
            small: false,
          });
      },
      ...slideOpts.on,
    },
  };
  let virtual = {
    slides: (function () {
      var slides = [];
      for (var i = 0; i < 20; i += 1) {
        slides.push({ big: Math.random() < 0.5, small: Math.random() < 0.5 });
      }
      return slides;
    })(),
    cache: true,
    renderSlide: (slide: any, idx: any) => <Card idx={idx} />,
    addSlidesBefore: 10,
  };

  return (
    <div>
      <IonItem lines="full">
        <IonLabel slot="start">
          {" "}
          Demo Infinite Slides {ref.current?.length()}{" "}
        </IonLabel>
      </IonItem>
      <IonSlides
        ref={ref}
        options={{ ...slideOpts, ...extraOpts, virtual: virtual }}
        mode="ios"
        className="custom"
      >
        {virtual.slides.map((e, idx) => (
          <IonSlide key={idx}>
            {console.log(e)}
            <Card idx={idx} {...e} />
          </IonSlide>
        ))}
      </IonSlides>
      <p>
        Here we have some
        <span data-descr="collection of words and punctuation">text</span> with
        a few
        <span data-descr="small popups that appear when hovering">
          tooltips
        </span>
        .
      </p>
    </div>
  );
});
const MainDiv = () => {
  let [state, setState] = useState(1);
  return (
    <div>
      <p>{state}</p>
      <InfinteSlides setState={setState} />
    </div>
  );
};
export default MainDiv;
