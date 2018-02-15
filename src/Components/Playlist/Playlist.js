import React from 'react';
import PropTypes from 'prop-types';
import './Playlist.css';
// import child components
import TrackList from '../TrackList/TrackList';

// Playlist component
class Playlist extends React.Component
{
  // constructor
  constructor(props)
  {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  // Handles playlist name change
  handleNameChange(e)
  {
    let name = e.target.value;
    this.props.onNameChange(name);
  }

  // Render
  render()
  {
    return(
      <div className="Playlist">
        <input defaultValue ={'New Playlist'} onChange= {this.handleNameChange}/>
        <TrackList tracks = {this.props.tracks}
                   onRemove= {this.props.onRemove}
                   isRemoval={true}/>
        <a className="Playlist-save" onClick= {this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    );
  }
};

Playlist.propTypes = {
  tracks: PropTypes.array,
  onRemove: PropTypes.func,
  onNameChange: PropTypes.func,
  onSave : PropTypes.func
};
export default Playlist;
