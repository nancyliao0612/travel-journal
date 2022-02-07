import { MdLocationOn } from "react-icons/md";

function Journey(props) {
  return (
    <>
      <div className="journey">
        <img src={props.imageUrl} alt={props.title} />
        <div className="travel-info">
          <div className="text-container">
            <MdLocationOn className="location-icon" />
            <span>{props.location}</span>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1>{props.title}</h1>
          <b>{props.startDate}</b> - <b>{props.endDate}</b>
          <p>{props.description}</p>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Journey;
