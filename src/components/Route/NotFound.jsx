import { useEffect } from "react"
import { useNavigate } from "react-router-dom"




const NotFound = () => {
const Navigate = useNavigate()

useEffect(() => {
    Navigate('/Notfound')
}, [Navigate])

    return(
        <div>oops page can not be found</div>
    )
};

export default NotFound