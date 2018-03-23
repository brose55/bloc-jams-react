import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import '../style/Library.css'

class Library extends Component {

  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className="library">
        {
          this.state.albums.map( (album, index) =>
            <div className="library-container"><Link className="pics" to={`/album/${album.slug}`} key={index}>
              <div className="art"><img src={album.albumCover} alt={album.title} className="album" /></div>
              <div className="description-container">
                <div>{album.title}</div>
                <div>{album.artist}</div>
                <div>{album.songs.length} songs</div>
              </div>
            </Link></div>
          )
        }
      </section>
    );
  }
}

export default Library;
