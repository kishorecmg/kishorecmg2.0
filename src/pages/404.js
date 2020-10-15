import Link from 'next/link'

class Error404 extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return(
            <div>
                <h1>You have come a long way from the path. 
                    <Link href="/">Click here</Link> to return. </h1>
            </div>
        )
    }
}

export default Error404