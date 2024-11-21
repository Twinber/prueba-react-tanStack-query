import React, {ReactNode} from "react"

type Props = {
    children: ReactNode
}
const ContainerLayout: React.FC<Props> = ({children}) => {
    return (
        <div className='container mx-auto p-4'>
            {children}
        </div>
    )
}
export default ContainerLayout
