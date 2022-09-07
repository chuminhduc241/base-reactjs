import "lightgallery/css/lightgallery-bundle.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import { useState } from "react";

const Gallery = () => {
  const listImg = new Array(3).fill(
    "https://images.fpt.shop/unsafe/fit-in/576x430/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/11/16/637726496707902572_cpu%20intel%20core%20i3-10100f-quat-trang-1.jpg"
  );
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const onInit = (detail) => {
    if (detail) {
      console.log("calling method", detail.instance);
      detail.instance.openGallery();
    }
  };
  const [open,setOpen] = useState(false);
  return (
    <div>
    <div onClick={()=>setOpen(true)}>open</div>
     {open && <LightGallery
        thumbnail={true}
        speed={500}
        thumbWidth={80}
        thumbHeight={`80px`}
        //   thumbHeight: 80,
        thumbMargin={8}
        closable={true}
        flipHorizontal={false}
        flipVertical={false}
        addClass={`lg-comment`}
        download={false}
        getCaptionFromTitleOrAlt={false}
        mobileSettings={{ controls: true, showCloseIcon: true }}
        plugins={[lgZoom, lgThumbnail]}
        onInit={onInit}
        mode="lg-fade"
        closeGallery = "đóng"
      >
        <a style={{display:"none"}}
          data-lg-size="1406-1390"
          className="gallery-item"
          data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@entrycube' >Diego Guzmán </a></h4> <p> Location - <a href='https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan'>Fushimi Ward, Kyoto, Japan</a></p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
        </a>
        <a
        style={{display:"none"}}
          data-lg-size="1400-1400"
          data-pinterest-text="Shinimamiya, Osaka, Japan"
          data-tweet-text="Shinimamiya, Osaka, Japan"
          className="gallery-item"
          data-src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
          data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
        >
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80"
          />
       </a>
       
      </LightGallery>}
    </div>
  );
};

export default Gallery;
