import Router from 'next/router'
import Link from 'next/link'

import { Text as Tamil } from "./Lang/Tamil"
import { Text as English } from "./Lang/English"
import { Text as Japanese } from "./Lang/Japanese"
import { Text as Chinese } from "./Lang/Chinese"

import HomeIcon from '../Icons/HomeIcon'
import ContactIcon from '../Icons/ContactIcon'
import AboutIcon from '../Icons/AboutIcon'
import GlobeIcon from '../Icons/GlobeIcon'

import DayIcon from '../Icons/DayIcon'
import NightIcon from '../Icons/NightIcon'
import SunglassIcon from '../Icons/SunglassIcon'

import style from "../css/navigation.module.css"

class NavigationBar extends React.Component
{
    constructor(props)
    {
        super(props)

        let temp, tempLang

        if(process.browser)
        {
            temp = String(window.location.pathname)
            temp = temp.slice(1, 3)
        }

        if(temp === 'ta')
        {
            tempLang = Tamil[3]  
        }
        else if(temp == 'jp')
        {
            tempLang = Japanese[3]  
        }
        else if(temp == 'zh')
        {
            tempLang = Chinese[3]  
        }
        else
        {
            tempLang = English[3]  
        }
        
        this.state = 
        {
            language : temp !== undefined? temp : 'en' ,
            currentPage: 'home',
            currentTheme: 0,
            displayMenu: false,
            displayText : tempLang
        }

        this.changeCurrentLanguage = this.changeCurrentLanguage.bind(this)
        this.changeCurrentPage = this.changeCurrentPage.bind(this)
        this.changeCurrentTheme = this.changeCurrentTheme.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
    }


    changeCurrentPage(nextPage)
    {
        if(this.state.currentPage !== nextPage)
        {
            this.setState({currentPage: nextPage, displayMenu: false})
        }
    }

    changeCurrentLanguage(wantedLanguage)
    {
        if(this.state.language !== wantedLanguage)
        {
            this.setState({language: wantedLanguage, displayMenu: false})
            
            Router.push(`/${wantedLanguage}/${this.state.currentPage}/`)
            
            if(wantedLanguage === 'ta')
            {
                this.setState( { displayText: Tamil[3] } )
            }
            else if(wantedLanguage == 'en')
            {
                this.setState( { displayText: English[3] } )
            }
            else if(wantedLanguage == 'jp')
            {
                this.setState( { displayText: Japanese[3] } )
            }
            else if(wantedLanguage == 'zh')
            {
                this.setState( { displayText: Chinese[3] } )
            }


        }
    }

    changeCurrentTheme(wantedTheme)
    {
        if(process.browser)
        {
            if(wantedTheme === 0 && this.state.currentTheme !== 0)
            {
                document.getElementById("mainOne").className = "theme1"
                this.setState({currentTheme: wantedTheme, displayMenu: false})
            }

            if(wantedTheme === 1 && this.state.currentTheme !== 1)
            {
                document.getElementById("mainOne").className = "theme2"
                this.setState({currentTheme: wantedTheme, displayMenu: false})
            }

            if(wantedTheme === 2 && this.state.currentTheme !== 2)
            {    
                document.getElementById("mainOne").className = "theme3"
                this.setState({currentTheme: wantedTheme, displayMenu: false})
            }

        }
    }

    toggleMenu()
    {
        this.setState({displayMenu: !this.state.displayMenu})
    }

    render()
    {
        let text = this.state.displayText

        return(
            <div className={style.menuWrap}> 
               
            <input type="checkbox" onChange={() => this.toggleMenu()}
                checked={this.state.displayMenu}
                className={style.toggler}/>

            <div className={style.hamburger}><div></div></div>
            <div className={style.menu}>
            <div>
                <div>
                <ul>
                    <li className={style.navbarSvgIconParent} onClick={() => this.changeCurrentPage("home")}>
                        <HomeIcon />
                        <Link href={`/${this.state.language}/home`}>{text.home}</Link></li>

                    <li className={style.navbarSvgIconParent} onClick={() => this.changeCurrentPage("contact")}>
                        <ContactIcon />
                        <Link href={`/${this.state.language}/contact`}>{text.contact}</Link></li>

                    <li className={style.navbarSvgIconParent} onClick={() => this.changeCurrentPage("about")}>
                        <AboutIcon />
                        <Link href={`/${this.state.language}/about`}>{text.about}</Link></li>

                    <li className={style.navbarSvgIconParent}><GlobeIcon />
                        {text.language}
                        <br/>
                        <ul>
                            <li onClick={() => this.changeCurrentLanguage("ta")}>
                                <img className={style.navbarFlagImage} src="/Indian_flag.png" alt="Indian flag" />
                                <span>{text.tamil}</span></li>

                            <li onClick={() => this.changeCurrentLanguage("jp")}>
                                <img className={style.navbarFlagImage} src="/Japan_flag.png" alt="Japan flag" />
                                <span>{text.japanese}</span></li>

                            <li onClick={() => this.changeCurrentLanguage("en")}>
                                <img className={style.navbarFlagImage} src="/UK_flag.png" alt="UK flag" />
                                <span>{text.english}</span></li>
                            
                            <li onClick={() => this.changeCurrentLanguage("zh")}>
                                <img className={style.navbarFlagImage} src="/Taiwan_flag.png" alt="Taiwan flag" />
                                <span>{text.chinese}</span></li>
                        </ul>
                    </li>

                    <li>{text.theme}
                        <br/>
                        <ul>
                            <li className={style.navbarSvgIconParent} onClick={() => this.changeCurrentTheme(0)}>
                                <DayIcon />
                                <span>{text.day}</span></li>

                            <li className={style.navbarSvgIconParent} onClick={() => this.changeCurrentTheme(1)}>
                                <SunglassIcon />
                                <span>{text.noon}</span></li>

                            <li className={style.navbarSvgIconParent} onClick={() => this.changeCurrentTheme(2)}>
                                <NightIcon />
                                <span>{text.night}</span></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>

        )
    }
}

export default NavigationBar

// https://codepen.io/bradtraversy/pen/vMGBjQ