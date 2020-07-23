import React, { useState } from 'react';

import { IonDatetime } from '@ionic/react';

const DateComponent: React.FC = () => {
  const [date, setDate] = useState(new Date().toISOString());
  let handleChange = (e:any) => {
    setDate(new Date().toISOString());
    console.log(e);
  };
  return <IonDatetime value={date} onChange={handleChange} />;
};

export default DateComponent;
