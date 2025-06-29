export function EventsIndex({ events, onShow }) {
  return (
    <div>
      <h2>Total events: {events.length}</h2>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <button onClick={() => onShow(event)}>More info</button>
          <br />
        </div>
      ))}
    </div>
  )
}