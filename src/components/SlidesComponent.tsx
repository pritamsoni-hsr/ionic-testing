import React from 'react';

import { IonCard, IonCardHeader, IonCardTitle, IonSlide, IonSlides } from '@ionic/react';

import styles from './SlidesComponent.module.css';

const SlideCard: React.FC<{ id: number }> = ({ id }) => (
  <IonCard className={styles.container}>
    <IonCardHeader>
      <IonCardTitle> Card Title {id}</IonCardTitle>
    </IonCardHeader>
  </IonCard>
);

const Slides = () => {
  let [state, setstate] = React.useState<number[]>([]);
  let ref = React.useRef<HTMLIonSlidesElement>(null);
  React.useEffect(() => {
    let a = setTimeout(() => {
      ref.current?.update();
    }, 100);
    let b = setTimeout(() => {
      setstate([0, 1, 2, 3, 4]);
    }, 1500);

    // let c = setTimeout(() => {
    //   setstate([0, 1]) ;
    //   ref.current?.update();
    // }, 3500);

    // let d = setTimeout(() => {
    //   setstate([0, 1, 2, 3]);
    // }, 4500);

    return () => {
      clearTimeout(a);
      clearTimeout(b);
      // clearTimeout(c);
      // clearTimeout(d);
    };
  }, []);
  console.log(state);

  return (
    <IonSlides ref={ref} options={{ slidesPerView: 4 }}>
      {state.length
        ? state.map((e, idx) => (
            <IonSlide key={idx}>
              <SlideCard id={idx} />{" "}
            </IonSlide>
          ))
        : [0, 0, 0, 0].map((e, idx) => (
            <IonSlide key={idx}> Loading ... </IonSlide>
          ))}
    </IonSlides>
  );
};
export default Slides;
