import { Fragment } from "react";

const Freecard = ({photos}) =>{
    const { title, url} = photos;
    return(
        <Fragment>
        <div className="freecard-info">
            <h3 style={{fontSize: '10px'}}>TITLE: {title}</h3>
            <img src={url} alt="" />
        </div>
        </Fragment>
    )
};

export default Freecard;