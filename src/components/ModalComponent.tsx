import { chevronForward, closeOutline, shareOutline } from 'ionicons/icons';
import * as React from 'react';
import { useHistory } from 'react-router';

import {
    IonButton, IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonModal, IonTitle,
    IonToolbar
} from '@ionic/react';

import { toDark, toLight } from '../utils/native';
import Slides from './SlidesComponent';

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
        <Slides />
      </IonContent>
    </>
  );
}
interface Props {
  router: HTMLIonRouterOutletElement | null;
}
const ModalComponent: React.FC<Props> = ({ router }) => {
  let [showModal, setShowModal] = React.useState(false);
  let h = useHistory();
  let setModal = () => {
    return (args: boolean) => {
      if (args) toLight();
      else toDark();
      setShowModal(args);
    };
  };
  return (
    <div>
      <IonModal
        swipeToClose={true}
        isOpen={showModal}
        onDidDismiss={() => setModal()(false)}
        presentingElement={router || undefined}
      >
        <ModalContent setShowModal={setModal()} />
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
        <IonFabButton onClick={() => setModal()(true)}>
          <IonIcon icon={shareOutline} />
        </IonFabButton>
      </IonFab>
    </div>
  );
};
export default ModalComponent;

const HalfModalContent = (props: IModalComponentProps) => (
  <>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton onClick={() => props.setShowModal(false)}>
            <IonIcon icon={closeOutline} slot="icon-only" />
          </IonButton>
        </IonButtons>
        <IonTitle>Half Modal</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste impedit
      cumque amet, temporibus doloribus, magnam itaque sequi neque, architecto
      officiis dolor odit! Libero rem nesciunt debitis rerum dignissimos quam
      minus.
    </IonContent>
  </>
);

export const HalfModal = () => {
  let [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <IonModal
        swipeToClose={true}
        cssClass="half-modal"
        isOpen={showModal}
        onDidDismiss={() => setShowModal(false)}
      >
        <HalfModalContent setShowModal={setShowModal} />
      </IonModal>
      <IonFab
        vertical="center"
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
};
