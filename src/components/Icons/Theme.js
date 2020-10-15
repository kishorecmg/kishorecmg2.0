import NightIcon from './NightIcon'
import SunglassIcon from './SunglassIcon'
import DayIcon from './DayIcon'

import Cookie from 'universal-cookie'

class Theme extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            day: {
                'text-primary' : '#1f1f1f',
                'text-secondary' : '#000000',
                'bg-primary' : '#ffffff',
                'bg-secondary' : '#e4e4e4'
            },
            night: {
                'text-primary' : '#b6b6b6',
                'text-secondary' : '#ececec',
                'bg-primary' : '#23232e',
                'bg-secondary' : '#141418'
            },
            solar: {
                'text-primary' : '#576e75',
                'text-secondary' : '#35535c',
                'bg-primary' : '#fdf6e3',
                'bg-secondary' : '#f5e5b8'
            },

            value : 0,      //returns a int value
            displayIcon: <NightIcon />
        }

        this.changeTheme = this.changeTheme.bind(this)
        this.changeState = this.changeState.bind(this)
    }

    changeTheme()
    { 
        let choice = this.state.value + 1
        this.changeState()      // first click wont work if set state is done here
        
        if (choice % 3  === 0)
        {
            this.setState({displayIcon: <NightIcon />})
            document.documentElement.style.setProperty('--text-primary', this.state.night["text-primary"])
            document.documentElement.style.setProperty('--text-secondary', this.state.night["text-secondary"])
            document.documentElement.style.setProperty('--bg-primary', this.state.night["bg-primary"])
            document.documentElement.style.setProperty('--bg-secondary', this.state.night["bg-secondary"])

            new Cookie().set('theme', 0)
        }
        else if (choice % 3  === 1)
        {
            this.setState({displayIcon: <SunglassIcon />})
            document.documentElement.style.setProperty('--text-primary', this.state.solar["text-primary"])
            document.documentElement.style.setProperty('--text-secondary', this.state.solar["text-secondary"])
            document.documentElement.style.setProperty('--bg-primary', this.state.solar["bg-primary"])
            document.documentElement.style.setProperty('--bg-secondary', this.state.solar["bg-secondary"])

            new Cookie().set('theme', 1)
        }
        else if (choice % 3  === 2)
        {
            this.setState({displayIcon: <DayIcon />})
            document.documentElement.style.setProperty('--text-primary', this.state.day["text-primary"])
            document.documentElement.style.setProperty('--text-secondary', this.state.day["text-secondary"])
            document.documentElement.style.setProperty('--bg-primary', this.state.day["bg-primary"])
            document.documentElement.style.setProperty('--bg-secondary', this.state.day["bg-secondary"])

            new Cookie().set('theme', 2)
        }
    }

    changeState()
    {
        this.setState( prevState => {
            return {value: prevState.value + 1}
        })
    }

    render()
    {
        return(
            <li className="nav-item" id="themeButton" onClick={this.changeTheme} >
                <a href="#" className="nav-link">
                    <span className="link-text">Theme</span>
                    {this.state.displayIcon}
                </a>
            </li>
        )    
    }
}

export default Theme