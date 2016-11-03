import React from 'react'

class PhotoDisplayer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            photos: []
        }
    }

    componentDidMount() {
        fetch('https://9326a318.ngrok.io/photos')
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            this.setState({
                photos: response.photos
            })
        })
    }

    render() {
        var photos = this.state.photos.map((photo, i) => {
            return <div className="photo" key={i}>
              <img src={'https://9326a318.ngrok.io/photos' + photo.photo} alt={photo.caption} />
              <span>{photo.caption}</span>
            </div>
        })

        return <div id="photoGrid">
                 {photos}
              </div>
    }
}

export default PhotoDisplayer
