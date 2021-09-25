import React from 'react';
import { Recorder } from 'react-voice-recorder'

import 'react-voice-recorder/dist/index.css'
import './VoiceRecorder.css';


class VoiceRecorder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audioDetails: {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0
        }
      }
    }
  }

  handleAudioStop(data) {
    this.setState({ audioDetails: data });
  }

  handleAudioUpload(file) {
    let formData = new FormData();
    formData.append("file", file);
    fetch('/upload/image', {method: "POST", body: formData});
  }

  handleReset() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0
      }
    };
    this.setState({ audioDetails: reset });
  }

  render() {
    return (
      <>
        <div style={{ width: '50%', margin: 'auto' }}>
          <Recorder
            record={true}
            // title={""}
            audioURL={this.state.audioDetails.url}
            showUIAudio
            handleAudioStop={data => this.handleAudioStop(data)}
            handleAudioUpload={data => this.handleAudioUpload(data)}
            handleReset={() => this.handleReset()}
            mimeTypeToUseWhenRecording={`audio/webm`}
          />
        </div>
      </>
    )
  }
}

export default VoiceRecorder;