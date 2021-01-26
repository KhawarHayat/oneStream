import React, { Component } from 'react'
import '../Sass/Thumbnail.scss'
import {FaPlayCircle} from 'react-icons/fa'
class Thumbnail extends Component {
    state = {  }
    render() {
        return (
            <div className='Thumbnail' onClick={this.props.click}>
            <img src={this.props.src} alt='thumbnail' className='Image' />
            <div className='overlay'>
              <FaPlayCircle className='icons'/>
            </div>
            <p>{this.props.name}</p>
            </div>
        );
    }
}

export default Thumbnail;