import { Link } from "react-router-dom";
import Social from "./Social";
import React from "react";
import "./Blog.css";
import BlogJson from "./BlogJson";
import { useState, useEffect, Fragment } from "react";
import Blogcard from "./Blogcard";
import Blogcard2 from "./Blogcard2";

const Blog = () => {
  return (
    <Fragment>
      <SocialData />
      <BlogJson />
      <div className="user-mother">
        <div className="user-card1">
          <h3 style={{ marginLeft: "30px", fontSize: '15px' }}>USERs POST AND COMMENTS</h3>
          <BlogJson2 />
        </div>
        <div className="user-card2">
          <Blogcard2 />
        </div>
      </div>
    </Fragment>
  );
};

const SocialData = () => {
  return (
    <div>
      <div className=" blog-minor">
        <div className="blog-logo">
          <h4 style={{ fontSize: "15px", textAlign: "left", color: "white" }}>
            Our free WordPress themes are downloaded over 5 millions times.{" "}
            <Link to="/WpThemes" className="blog-link">
              Get them now!
            </Link>
          </h4>
        </div>
        <div className="social-container">
          {Social.map((social) => {
            const { imageUrl } = social;
            return (
              <div key={social.id} className="social-info">
                <Link className="img-link">
                  <img src={imageUrl} alt="" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="blog-container">
        <h3 style={{ marginLeft: "70px" }}>Blog</h3>
      </div>
    </div>
  );
};

const BlogJson2 = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const FetchApis = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_start0&_limit=20",
          {
            method: "GET",
          }
        );
        const responseData = await response.json();
        if (!response.ok) {
          throw new Error();
        }
        console.log(responseData.message);
        setNames(responseData);
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    };
    FetchApis();
  }, []);

  return (
    <Fragment>
      <div className="blogcard-container">
        {names.map((name) => (
          <Blogcard key={name.id} posts={name} />
        ))}
      </div>
    </Fragment>
  );
};

export default Blog;
