// React imports
import React, { Component, Fragment } from 'react';

// Local project (JavaScript) imports
import Age from './components/Age/Age';
import Animation from './components/Animation/Animation';
import Name from './components/Name/Name';

class App extends Component {
    render(){
        return (
            <Fragment>
                <Name first="Martin" />
                <Age age={35} />
                <Name first="Daniela" />
                <Age age={36} />
                <Animation
                    height={200}
                    options={{
                        animationData: require('./components/Animation/data/dinosaurs.json')
                    }}
                    showControls={true}
                    showLog={false}
                    width={200}
                />
            </Fragment>
        );
    }
}

export default App;