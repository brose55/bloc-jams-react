import React, { Component } from 'react';
import '../style/Playerbar.css'

class PlayerBar extends Component {
  render() {
    return (
      <div className="pb-container">
        <div className="time">
          <section id="time-control">
            <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
            <input
              type="range"
              className="seek-bar"
              value={(this.props.currentTime / this.props.duration) || 0}
              max="1"
              min="0"
              step="0.01"
              onChange={this.props.handleTimeChange}
            />
            <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
          </section>
        </div>
        <div className="volume">
          <section id="volume-control">
            <div className="icon ion-volume-low"></div>
            <input
              type="range"
              className="seek-bar"
              value={this.props.volume}
              max="1"
              min="0"
              step=".01"
              onChange={this.props.handleVolumeChange}
            />
            <div className="icon ion-volume-high"></div>
          </section>
        </div>
        <div className="buttons">
            <div><button id="previous" onClick={this.props.handlePrevClick}>
              <span className="ion-skip-backward"></span>
            </button></div>
            <div><button id="play-pause" onClick={this.props.handleSongClick} >
              <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
            </button></div>
            <div><button id="next" onClick={this.props.handleNextClick} >
              <span className="ion-skip-forward"></span>
            </button></div>
        </div>
      </div>
    );
  }
}

export default PlayerBar;
