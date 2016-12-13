import React,{Component} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './index.css'

export default class App extends Component{
    render(){
    	return(
                <div className="app">
                   根
                   <Header/>
                   <Footer/>
                </div>
    		)
    }
}