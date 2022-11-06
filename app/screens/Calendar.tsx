import React, { useState } from 'react';
import { ImageBackground, View } from 'react-native';
import { Factory, Button, Center } from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';
import { Moment } from 'moment';
function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);

  return (
    <>
      <Center flex={1}>
        <CalendarPicker onDateChange={(date) => setSelectedDate(date)} />
      </Center>
    </>
  );
}

export default Calendar;
