import style from "../../css/homepage.module.css"

class Introduction extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    
    render()
    {
        let text = this.props.text

        return(
            <div className={style.introParent}>
                <div className={style.introChild}>
                    <h2>{text.I}</h2>
                    {text.I1}
                </div>
                <div className={style.introChild}>
                    <h2>{text.view}</h2>
                    <p>{text.honest}</p>
                    <img className={style.tumbleweed} src="/tumbleweed.png" alt="tumbleweed" />
                    <p>{text.notnow}</p>
                </div>
            </div>
        )
    }
}

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default Introduction