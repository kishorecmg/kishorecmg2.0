import style from "../../css/homepage.module.css"

class Card extends React.Component
{
    render()
    {
        return(
            <div className={style.card}>
                <div>
                    <h1>{this.props.title}</h1>
                    <footer>{this.props.para}</footer>
                </div>
            </div>
        )
    }
}

export default Card