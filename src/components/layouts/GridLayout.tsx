import React, {ReactNode} from "react"

type Props = {
    children: ReactNode[]
}
const GridLayout: React.FC<Props> = ({children}) => {
    return (
        <div className='container mx-auto p-4'>
            <div className="grid grid-cols-4 gap-4">
                {children}
            </div>
        </div>
    )
}
export default GridLayout
