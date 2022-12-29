import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SafeAreaView>
      <View
        key={'title'}
        activeOpacity={0.9}
        style={{
          height: isOpen ? '45%' : '35%',
          width: '90%',
          alignSelf: 'center',
          backgroundColor: '#FFF',
          borderRadius: 10,
          padding: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          marginTop: '15%',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          key={'title'}
          accessibilityLabel="title"
          onPress={() => setIsOpen(!isOpen)}
          style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 14}}>Title text</Text>
          <Text style={{fontSize: 14}}>Bell Icon</Text>
        </TouchableOpacity>
        <View style={{marginTop: 15}}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </Text>
        </View>
        {isOpen && (
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              key={'bell'}
              accessibilityLabel={'bell'}
              style={{
                height: 40,
                width: 40,
                borderRadius: 5,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, color: '#FFF'}}>bell</Text>
            </TouchableOpacity>
            <TouchableOpacity
              key={'edit'}
              accessibilityLabel={'edit'}
              style={{
                height: 40,
                width: 40,
                borderRadius: 5,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 15,
              }}>
              <Text style={{fontSize: 14, color: '#FFF'}}>edit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              key={'delete'}
              accessibilityLabel={'delete'}
              style={{
                height: 40,
                width: 40,
                borderRadius: 5,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 15,
              }}>
              <Text style={{fontSize: 14, color: '#FFF'}}>trash</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;
