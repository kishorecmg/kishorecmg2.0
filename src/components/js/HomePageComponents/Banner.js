import style from "../../css/homepage.module.css"

class Banner extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {list : ["<html></html>", "#css{color:blue};", "import 'React'",
                "require('express')","#include<iostream>", "def main():", 
                "import java.util.*;"], listCursor : 0, display : ''}

        this.typerFunction = this.typerFunction.bind(this)
    }

    componentDidMount()
    {
        this.typerTime = setInterval(() => this.typerFunction(), 500)
    }

    componentWillUnmount()
    {
        clearInterval(this.typerTime)
    }

    typerFunction()
    {
        let displayLength = this.state.display.length + 1
        let wholeWord = this.state.list[this.state.listCursor]

        if(this.state.listCursor !== this.state.list.length)    // wholeword becomes undefined if not
        {   
            this.setState({
                        display : wholeWord.substring(0, displayLength)
            })

            if (wholeWord.length === displayLength - 1)
            {
                this.setState(prevState => ({
                    listCursor : prevState.listCursor + 1
                }))

                if(this.state.listCursor !== this.state.list.length)
                {
                    this.setState({ display : '' })
                }
                else
                {
                    this.setState({ display : this.state.list[this.state.listCursor - 1] })
                }
            }
        }
        else
        {
            clearInterval(this.typerTime)
        }
    }

    render()
    {
        return(
            <div id={style.banner}>
                <h1 className={style.bannerHeader}>
                    {this.props.text.bannerIntro}

                    {this.props.text.bannerIcan} <span className={style.bannerTyper}>{this.state.display}</span>
                </h1>
            </div>
        )
    }
}

export default Banner