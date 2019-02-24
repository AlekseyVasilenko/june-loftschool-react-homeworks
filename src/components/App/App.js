import React, {Component} from 'react'
import './App.css'

import Switcher from '../Switcher'
import VideoPlayer from '../VideoPlayer'
import CardNumberHolder from '../CardNumberHolder'
import ModalButton from '../ModalButton'

export default class App extends Component {
   render() {
      return (
         <Switcher>
            <VideoPlayer />
            <CardNumberHolder />
            <ModalButton />
         </Switcher>
      )
   }
}
