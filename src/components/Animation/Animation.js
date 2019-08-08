import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import Lottie from 'react-lottie';
import classnames from 'classnames';

// Local project (SASS) imports
import './scss/styles.scss';

class Animation extends Component {
  constructor(props){
    super(props);

    this.state = {
      animationEnded: false,
      animationOptions: {
        autoplay: true,
        loop: true,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      },
      direction: 1, // Lottie animations are not allowed to play in reverse on initial render (it can subsequently be changed)
      height: this.props.height,
      isPaused: false,
      logMessages: [],
      showControls: this.props.showControls,
      showLog: this.props.showLog,
      speed: 1, // Lottie animations are not allowed to play <> 1 on initial render (it can subsequently be changed)
      width: this.props.width,
    };

    // Override defaults with any custom options provided
    this.state.animationOptions = {
      ...this.state.animationOptions,
      ...this.props.options,
    };
  }

  updateLog(message){
    this.setState({
      ...this.state, 
      logMessages: [...this.state.logMessages, message]
    })
  }

  render(){
    return (
      <Fragment>
        <ul className={classnames('log', {'visible': this.state.showLog})}>
        {this.state.logMessages.map((message, index) => (
          <li key={`key-${index}`}>{message}</li>
        ))}
        </ul>
        {this.state.showLog && (
          <div className="log-check">
            <label htmlFor="log-check">Debugger</label>
            <input id="log-check" type="checkbox" onChange={() => this.setState({...this.state, showLog: !this.state.showLog})} checked={this.state.showLog} />
          </div>
        )}
        {this.state.showControls && (
          <table className="settings">
            <tbody>
              <tr>
                <th>Direction</th>
                <td><button onClick={() => this.setState({...this.state, animationEnded: false, direction: this.state.direction === 1 ? -1 : 1})}>Direction ({this.state.direction === 1 ? 'backwards' : 'forwards'})</button></td>
              </tr>
              <tr>
                <th>Speed</th>
                <td><button onClick={() => this.setState({...this.state, speed: 0.1})}>Slo-mo</button></td>
              </tr>
              <tr>
                <th>Speed</th>
                <td><button onClick={() => this.setState({...this.state, speed: 1})}>1x</button></td>
              </tr>
              <tr>
                <th>Speed</th>
                <td><button onClick={() => this.setState({...this.state, speed: 2})}>2x</button></td>
              </tr>
              <tr>
                <th>Speed</th>
                <td><button onClick={() => this.setState({...this.state, speed: 3})}>3x</button></td>
              </tr>
              <tr>
                <th>Dimensions</th>
                <td><button onClick={() => this.setState({...this.state, height: 400, width: 400})}>400px x 400px</button></td>
              </tr>
              <tr>
                <th>Dimensions</th>
                <td><button onClick={() => this.setState({...this.state, height: 600, width: 600})}>600px x 600px</button></td>
              </tr>
              <tr>
                <th>Dimensions</th>
                <td><button onClick={() => this.setState({...this.state, height: 800, width: 800})}>800px x 800px</button></td>
              </tr>
              <tr>
                <th>Dimensions</th>
                <td><button onClick={() => this.setState({...this.state, height: '100%', width: '100%'})}>Responsive</button></td>
              </tr>
              <tr>
                <th>Play / Pause</th>
                <td><button onClick={() => this.setState({...this.state, isPaused: !this.state.isPaused})}>{this.state.isPaused ? 'Resume' : 'Pause'}</button></td>
              </tr>
            </tbody>
          </table>
        )}
      
        <div className="lottie">
          <Lottie
            eventListeners={[{
              eventName: 'complete',
              callback: () => {
                if(!this.state.animationEnded){
                  this.setState({
                    ...this.state,
                    animationEnded: true,
                  });

                  this.updateLog('Entire animation complete')
                }
              }
            },{
              eventName: 'loopComplete',
              callback: () => this.updateLog('Loop complete')
            }]}
            direction={this.state.direction}
            height={this.state.height}
            isPaused={this.state.isPaused}
            isStopped={this.state.isStopped}
            options={this.state.animationOptions}
            speed={this.state.speed}
            width={this.state.width}
          />
        </div>
      </Fragment>
    )
  }
}

Animation.defaultProps = {
  autoplay: true,
  options: {
    loop: true,
  },
  showControls: false,
  showLog: false,
};

Animation.propTypes = {
  autoplay: propTypes.bool,
  height: propTypes.number.isRequired,
  options: propTypes.shape({
    animationData: propTypes.object.isRequired,
    loop: propTypes.bool,
  }),
  showControls: propTypes.bool,
  showLog: propTypes.bool,
  width: propTypes.number.isRequired,
};


export default Animation;