import React from 'react'

class PhotoUploader extends React.Component {
    constructor(props) {
        super(props)
        this.upload = this.upload.bind(this)
        this.state = {
            photo: null,
            caption: ''
        }
    }

    upload() {
        var data = new FormData()
        data.append('file', this.state.photo)
        data.append('caption', this.state.caption)
        data.append('api_token', sessionStorage.getItem('phetchly'))

        fetch('https://9326a318.ngrok.io/photos', {
            method: 'POST',
            body: data
        })
        .then(response => response.json())
        .then(renderView)
    }

    render() {
        return <div>
            <div className="form-group">
              <label htmlFor="photo">Photo</label>
              <input  className="form-control" type="file" id="photo" name="photo" required onChange={(e) => this.setState({photo:e.target.files[0]})}/>
            </div>

            <div className="form-group">
              <label htmlFor="caption">Caption</label>
              <input className="form-control" type="text" id="caption" name="caption" required maxLength="40" value={this.state.caption} onChange={(e) => this.setState({caption:e.target.value})} />
            </div>

            <div className="form-group">
              <button onClick={this.upload} type="buttion" id="upload" className="btn btn-success btn-block">Upload</button>
            </div>
        </div>
    }
}

export default PhotoUploader
