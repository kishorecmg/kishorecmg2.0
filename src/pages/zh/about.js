import AboutPageTemp from "../../components/js/AboutPageTemp"

import { Text } from "../../components/js/Lang/Chinese"

class ZHAbout extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <div>
                <AboutPageTemp text={Text[2]} />
            </div>
        )
    }
}

export default ZHAbout