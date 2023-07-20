import { Link } from "react-router-dom";
import BlogApi from "./BlogApi";

const Blogcard2 = () => {
  return (
    <div className="blogcard2-container">
      {BlogApi.map((blogApi) => {
        const { title, imageUrl } = blogApi;
        return (
          <div key={blogApi.id} className="blogcard2-info">
            <h4>{title}</h4>
           <Link to='/WpThemes' className="blogcard2-link"> <img src={imageUrl} alt="" /></Link>
          </div>
        );
      })}
    </div>
  );
};

export default Blogcard2;
