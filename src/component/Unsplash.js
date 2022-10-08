import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Unsplash.css";
const Unsplash = ({ search, setSearch, setProgress }) => {
  const [images, setImages] = useState([]);
  const [totalImages, setTotalImages] = useState();
  const [page, setPage] = useState(1);

  const fetchApi = async () => {
    setProgress(40);
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=rO8-iBqU-fJyACi_ev0qXzjDwxd1VCDkub2hNMWGiLM`
    );
    setProgress(70);
    // console.log(data);
    setImages(data.results);
    setProgress(100);
    // setTotalImages(data.total)
    // console.log(images);
  };
  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line
  }, [search]);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?page=${
        page + 1
      }&query=${search}&client_id=rO8-iBqU-fJyACi_ev0qXzjDwxd1VCDkub2hNMWGiLM`
    );

    // console.log(data);
    setImages(images.concat(data.results));
    setTotalImages(data.total);
  };

//   const getImageHandel = async () => {
//            fetchApi()

//     // if (search && !images.length) {
//     //   setImages([]);
//     //   return console.log("not found");
//     // }

//     // if (search.length >= 0 && images.length) {
       
//     //   console.log("results found");
//     // //   setImages([])
//     // } 
//     console.log(images)
//     // setSearch("");
    
//   };

  return (
    <div className="infinite">
      <div className="button-wrapper">
        {/* <button
          className="btn btn-primary get-image-butn"
          onClick={() => getImageHandel()}
        >
          Get image{" "}
        </button> */}
      </div>
      <div className="search-info">
        {
                      


             !images.length&& search? <h2> Result Not Found</h2>: ( images.length && search ? <h2>Search Results! </h2> : <h2>Search images! </h2>) 
            }
            {/* {
                search && images.length? <h2>Search Results ! </h2>: <h2></h2>
            } */}
      </div>
      {!images.length ? (
        <h2 className="search-info"></h2>
      ) : (
        <InfiniteScroll
          dataLength={images.length}
          next={fetchMoreData}
          hasMore={images.length !== totalImages}
          //   loader={"</>Loading..</h1>"}
        >
          <div className="container-wrapper-unsplash">
            {images?.map((i) => {
              return (
                <div className="single-image" key={i.id}>
                  <div className="image box">
                    <img src={i.urls.thumb} alt="" />
                    <div className="box-content">
                      {/* <h3  >Buy things at amazing price</h3>   */}
                      <a href={i.links.download} className="link-btn">
                        Download Image
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* unsplash */}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Unsplash;
