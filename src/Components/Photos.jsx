import React, { useEffect, useState } from "react";
import { album } from "../Data/data";
import { motion, AnimatePresence } from "framer-motion";

const Photos = () => {
  const [images, setImages] = useState(album);
  const [tag, setTag] = useState("All");

  useEffect(() => {
    if (tag === "All") {
      setImages(album);
      return;
    }
    const filterImages = album.filter((item) => item.category === tag);
    setImages(filterImages);
  }, [images, tag]);

  // function for filter btns
  const categories = album.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );

  return (
    <div className="container">
      <div className="tags">
        {categories.map((item) => (
          <button className="tags-btn" key={item} onClick={() => setTag(item)}>
            {item}
          </button>
        ))}
      </div>
      <motion.div className="photos-wrapper">
        <AnimatePresence>
          {images.map((item) => (
            <motion.div layout animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} transition={{duration:1}} key={item.id} className="img-card">
              <img src={item.img} alt=""/>
              <div className="hashtag">
                <p>#{item.category}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>      
    </div>
  );
};

export default Photos;
