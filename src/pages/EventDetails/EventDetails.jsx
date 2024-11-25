import { useParams, useNavigate } from "react-router-dom"; 
import { eventList } from "../../utils/EventDatabase";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "./EventDetails.css";

const EventDetails = () => {
  const { id } = useParams();
  const numId = Number(id);
  const navigate = useNavigate(); // Use navigate hook

  const filteredEvent = eventList.find(
    (eventDetail) => eventDetail.id === numId
  );

  if (!filteredEvent) {
    return <div>Event not found</div>; 
  }

  // Handle back navigation
  const handleBack = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <div className="event-details-container">
      <div className="event-details-wrapper">
        <img src={filteredEvent.img} alt="Event" />
        <div className="event-details-content">
          <h3>Event Name: {filteredEvent.heading}</h3>
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span className="font-weight-med">{filteredEvent.date.month}</span>
              <span className="font-weight-med">{filteredEvent.date.year}</span>
            </p>
            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {filteredEvent.location}
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span className="description-heading-para">
              {filteredEvent.description}
            </span>
          </p>
        </div>
      </div>

      {/* Back Button */}
      <button className="back-button" onClick={handleBack}>
        &#8592; Back
      </button>
    </div>
  );
};

export default EventDetails;
