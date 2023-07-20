
import NameCard from "./NameCard";
import { useState, useEffect, Fragment } from "react";


const BlogJson = () => {
    const[names, setNames] = useState([]);

    useEffect(() => {
        const RequestApis = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                    method: 'GET'
                })
                const responseData = await response.json();
                if(!response.ok) {
                    throw new Error(responseData.message)
                }
                console.log(responseData)
                setNames(responseData)
            } catch (error) {
                console.log(error.message)
                alert(error.message)
            }
        }
        RequestApis()
    }, [])

    return(
        <Fragment>
            <h3 style={{textAlign: 'center'}}>USERS AND THIER INFOMATION </h3>
        <div className="fetch-con">
            {
              names.map((name) => (
                <NameCard key= {name.id} user={name}/>
              ))
            }
        </div>
        </Fragment>
    )
};

export default BlogJson;
  