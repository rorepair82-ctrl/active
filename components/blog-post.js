import React from "react";
import Img from "./img";
import blogDetails1 from "@/images/blog/blog-details.jpg";

const BlogPost = () => {
  return (
    <div>
      <div className="blog_left_box">
        <div className="bl_share_img">
          <Img src={blogDetails1} alt="blog details" layout="responsive" />
          <span className="blog_date">26 Nov</span>
        </div>
        <div className="blog_share_details blog_share_details__details">
          <span className="comment_author">
            von <a href="#">Admin</a> - <a href="#">3 Kommentare</a>
          </span>
          <h1>Tipps für einen effizienten Geräteeinsatz</h1>
          <p>
            Gut eingestellte und regelmäßig gewartete Haushaltsgeräte arbeiten
            effizienter und verbrauchen weniger Energie. Achten Sie auf
            saubere Filter, frei zugängliche Lüftungsöffnungen und passende
            Programme für Ihren Alltag.
          </p>
          <p>
            Gern beraten wir Sie persönlich, wie Sie Ihre Geräte optimal
            einsetzen und wann sich eine professionelle Wartung oder Reparatur
            lohnt.
          </p>
        </div>
      </div>
      <div className="blog_social_share_box">
        <div className="share_box_left">
          <p>
            Tags: <a href="#">Reparatur,</a> <a href="#">Haushaltsgeräte,</a>{" "}
            <a href="#">Energie sparen</a>
          </p>
        </div>
        <div className="share_box_left text-end">
          <ul>
            <li>
              <a href="">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-youtube-play"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
