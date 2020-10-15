import style from "../../css/homepage.module.css"

class Starrer extends React.Component
{
    constructor(props)
    {
        super(props)

        var colouredStars = Number(this.props.actual)

        this.state = { stars: [] }

        for(let i = 0; i < this.props.total; i++)
        {
            if(colouredStars !== 0)
            {
                this.state.stars.push(<img src="/star.png" alt="star" 
                    key={i} className={style.colourStar} />)
                
                colouredStars --;
            }
            else
            {
                this.state.stars.push(<img src="/star.png" alt="star" 
                    key={i} className={style.bwStar} />)
            }
        }

    }

    render()
    {
        return(
            <div>
                {this.state.stars}
            </div>
        )
    }
}

export default Starrer