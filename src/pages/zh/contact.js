import ContactFormTemp from "../../components/js/ContactFormTemp"

import { Text } from "../../components/js/Lang/Chinese"

class ZHContact extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <div>
                <ContactFormTemp text={Text[1]} />
            </div>
        )
    }
}

export default ZHContact