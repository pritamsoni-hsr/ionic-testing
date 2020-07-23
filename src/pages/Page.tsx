import React from 'react';

import {
    IonBackButton, IonButtons, IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar
} from '@ionic/react';

import Slides from '../components/SlidesComponent';

const NavPage = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
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
        <IonLabel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni
          veniam consectetur blanditiis facilis vel aperiam! Quibusdam sint
          exercitationem illum eligendi quod ipsum totam dignissimos sunt,
          voluptatibus omnis? Ab, velit?
        </IonLabel>
      </IonContent>
    </IonPage>
  );
};
export default React.memo(NavPage);
