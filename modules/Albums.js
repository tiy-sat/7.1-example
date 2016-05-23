import React from 'react'
import {Link} from 'react-router'
import Album from './Album'

export default React.createClass({
  getDefaultProps() {
    return {
      albums: [
        // albums
        {
          title: "Randy Savage",
          photos: [
              {
                title: "Randy Savage Meme 1",
                source: "http://i1.kym-cdn.com/entries/icons/original/000/005/880/wheres-randy-savage.jpg"
              },
              {
                title: "Randy Savage and Batman",
                source: "http://static.wixstatic.com/media/2c7eb9_0706f603b4674f9fec1c0b18afad6a1a.jpg"
              }
            ]
        },
        {
          title: "Album 2",
          photos: [
              {
                title: "Photo Title",
                source: "image.jpg"
              },
              {
                title: "Next Photo",
                source: ""
              }
            ]
        }
      ]
    }
  },
  componentWillMount() {
    this.setState(
      {
        currentAlbum: this.props.albums[0]
      }
    )
  },
  handleAlbumClick(e){
    // determine which link was clicked (current target)
    // set state to current Album prop for that from the data
      // because when state is set state it will work for `album` property on line 65
    e.preventDefault();
  },
  render() {
    return (
      <div>
        <aside>
          <nav>
            {
              this.props.albums.map(function(album, i){
                return <Link key={i} to={`/albums/${album.title}`} onClick={this.handleAlbumClick}> { album.title } </Link>
              }, this)
            }
          </nav>
        </aside>

        <Album album={this.state.currentAlbum}/>
      </div>
    )
  }
})
