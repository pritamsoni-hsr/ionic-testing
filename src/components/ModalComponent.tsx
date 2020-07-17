import { chevronForward, closeOutline, shareOutline } from 'ionicons/icons';
import * as React from 'react';
import { useHistory } from 'react-router';

import {
    IonBackButton, IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon,
    IonLabel, IonModal, IonPage, IonSlide, IonSlides, IonTitle, IonToolbar
} from '@ionic/react';

export interface IModalComponentProps {
  setShowModal: any;
}

function ModalContent(props: IModalComponentProps) {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => props.setShowModal(false)}>
              <IonIcon icon={closeOutline} slot="icon-only" />
            </IonButton>
          </IonButtons>
          <IonTitle>Test Modal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni
        veniam consectetur blanditiis facilis vel aperiam! Quibusdam sint
        exercitationem illum eligendi quod ipsum totam dignissimos sunt,
        voluptatibus omnis? Ab, velit?
      </IonContent>
    </>
  );
}

export default function ModalComponent() {
  let [showModal, setShowModal] = React.useState(false);
  let h = useHistory();
  let ref = React.createRef<any>();

  return (
    <div>
      <IonModal
        swipeToClose={true}
        isOpen={showModal}
        onDidDismiss={() => setShowModal(false)}
        presentingElement={ref.current}
      >
        <ModalContent setShowModal={setShowModal} />
      </IonModal>
      <IonFab vertical="bottom" horizontal="start" slot="fixed">
        <IonFabButton onClick={() => h.push("/page", { direction: "forward" })}>
          <IonIcon icon={chevronForward} />
        </IonFabButton>
      </IonFab>
      <IonFab
        vertical="bottom"
        horizontal="end"
        slot="fixed"
        activated={showModal}
      >
        <IonFabButton onClick={() => setShowModal(true)}>
          <IonIcon icon={shareOutline} />
        </IonFabButton>
      </IonFab>
    </div>
  );
}
export const NavPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Test Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonLabel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni
          veniam consectetur blanditiis facilis vel aperiam! Quibusdam sint
          exercitationem illum eligendi quod ipsum totam dignissimos sunt,
          voluptatibus omnis? Ab, velit?
        </IonLabel>
        <Slides />
      </IonContent>
    </IonPage>
  );
};

export const Slides = () => {
  let [state, setstate] = React.useState<number[]>([]);
  let ref = React.useRef<HTMLIonSlidesElement>(null);
  React.useEffect(() => {
    let a = setTimeout(() => {
      setstate([0, 1, 2, 3, 4]);
      // ref.current?.update();
    }, 3000);
    return ()=>{
      clearTimeout(a)
    }
  }, []);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     ref.current?.update();
  //   }, 2000);
  // }, []);

  console.log(state);
  return (
    <IonSlides ref={ref} options={{ slidesPerView: 4 }}>
      {state.length
        ? state.map((e, idx) => <IonSlide key={idx}> idx </IonSlide>)
        : [0, 0, 0, 0].map((e, idx) => (
            <IonSlide key={idx}> Loading ... </IonSlide>
          ))}
    </IonSlides>
  );
};
