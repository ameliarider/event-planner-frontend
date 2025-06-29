export function EventsShow({event}) {
  return (
    <div>
      <h1>Event Name: {event.name}</h1>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Date: </strong>{event.date}</p>
      <h3>Attendees</h3>
      <ul>
        {event.attendees.map((attendee, index) => (
          <li key={index}>
            {attendee.name} <br />
            {attendee.email}
          </li>
        ))}
      </ul>
    </div>
  )
}