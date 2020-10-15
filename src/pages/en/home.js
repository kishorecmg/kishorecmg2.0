import HomePageTemp from "../../components/js/HomePageTemp"
import { Text } from  "../../components/js/Lang/English"

class ENHome extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <div>
                <HomePageTemp text = {Text[0]} />
            </div>
        )
    }
}

export default ENHome