import HomePageTemp from "../../components/js/HomePageTemp"
import { Text } from  "../../components/js/Lang/Tamil"

class TAHome extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <div>
                <HomePageTemp text={Text[0]} />
            </div>
        )
    }
}

export default TAHome