export function EventsShow({ event }) {
  return (
    <div>
      <h1>Event Name: {event.name}</h1>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <h3>Attendees</h3>
      <ul className="list-group list-group-flush">
        {event.attendees?.map((attendee, index) => (
          <li key={index} class="list-group-item">
            Name: {attendee.name} <br />
            Email: <a className="link-secondary" href={`mailto:${attendee.email}`}>{attendee.email}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
