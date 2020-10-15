import HomePageTemp from "../../components/js/HomePageTemp"
import { Text } from  "../../components/js/Lang/Japanese"

class JPHome extends React.Component
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

export default JPHome