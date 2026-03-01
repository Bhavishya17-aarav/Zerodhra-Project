import {FaArrowRight} from "react-icons/fa";


const LeftSection = ({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo  <FaArrowRight /></a>
            <a href={learnMore} style={{ marginLeft: "50px",  textDecoration: "none" }}>
              Learn More
               {" "}  <FaArrowRight />
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} style={{ textDecoration: "none" }}>
              <img src="media/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media/appstoreBadge.svg"
                style={{ marginLeft: "50px", textDecoration: "none"}}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftSection;