import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LibraryList from './components/LibraryList'

import { Header } from './components/common'

const App = () => {
    return(
        <Provider store={createStore(reducers)}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flex: 1}}>
                    <Header headerText="Tech Stack"/>
                    <LibraryList />
                </View>
            </SafeAreaView>
        </Provider>
    )
}

export default App;