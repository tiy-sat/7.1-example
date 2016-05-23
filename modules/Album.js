import React from 'react'

export default React.createClass({
  render() {
    return (
      <ul>
        <h2>{this.props.album.title}</h2>
        {
          this.props.album.photos.map((photo, i) => {
            return <img key={i} src={photo.source} alt={photo.title} style={{width: "100px"}} />
          })
        }
      </ul>
    )
  }
})
