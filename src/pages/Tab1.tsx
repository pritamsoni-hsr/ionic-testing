import './Tab1.css';

import React, { useState } from 'react';

import { IonContent, IonHeader, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import DateComponent from '../components/DatePickerComponent';
//import ExploreContainer from '../components/ExploreContainer';
import TestContent, { HalfModal } from '../components/ModalComponent';
import InfinteSlides from '../components/SlideComponent2';

interface Props {
  router: HTMLIonRouterOutletElement | null | any;
}

const Tab1: React.FC<Props> = ({ router }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonModal
          isOpen={showModal}
          cssClass="my-custom-class"
          swipeToClose={true}
          presentingElement={router?.current || undefined}
          onDidDismiss={() => setShowModal(false)}
        >
          <IonHeader>
            <IonToolbar>This is modal content</IonToolbar>
          </IonHeader>
          <IonContent>
            <p onClick={() => setShowModal(false)}>Click Me</p>
          </IonContent>
        </IonModal>
        <DateComponent />
        <InfinteSlides />
        <HalfModal />
        <TestContent router={router?.current} />
        <p onClick={() => setShowModal(true)}>Click Me</p>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
