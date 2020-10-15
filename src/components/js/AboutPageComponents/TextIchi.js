import style from "../../css/aboutpage.module.css"

class TextIchi extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        const type = this.props.type === 'sent' ? style.sent : style.answer

        let message
        if(this.props.type === 'sent')
        {
            message = <>
                <p>{this.props.message}</p> 
                <img src="/user.png" alt="user" className={style.image} /> 
                </>
        }
        else
        {
            message = <>
                <img src="/bot.png" alt="user" className={style.image} /> 
                <p>{this.props.message}</p> 
                </>
        }

        return(
            <div className={type}>
                {message}
            </div>
        )
    }
}

// div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// Icons made by &lt;a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26"&gt;Icongeek26&lt;/a&gt; from &lt;a href="https://www.flaticon.com/" title="Flaticon"&gt;www.flaticon.com&lt;


export default TextIchi