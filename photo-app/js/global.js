import React from 'react'
import ReactDOM from 'react-dom'

import PhotoUploader from '../components/PhotoUploader'
import PhotoDisplayer from '../components/PhotoDisplayer'

window.renderView = function() {
    ReactDOM.render(
        <div>
            <PhotoUploader />
            <PhotoDisplayer />
        </div>,
        document.querySelector('#app')
    )
}

renderView()
