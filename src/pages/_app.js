import React from 'react'
import Head from 'next/head'
import App from 'next/app'

import NavigationBar from "../components/js/NavigationBar"
import FooterBar from '../components/js/FooterBar'

import "../components/css/globals.css"

class Display extends App 
{
	render () 
	{
		const { Component, pageProps } = this.props

		return (
			<div id="mainOne" className="theme1">
				<Head>
					<title>
						Kishore CMG
					</title>
				</Head>

				<NavigationBar />

				<div className = "main">
					<Component {...pageProps}/>
				</div>

				<FooterBar />

			</div>
		)
		
	}
}

export default Display