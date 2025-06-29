export function EventsIndex({ events, onShow }) {
  return (
    <div className="container">
      <div className="row"><br /><br /><br />
        {events.map((event) => (
          <div key={event.id} className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <button className="btn btn-outline-primary" onClick={() => onShow(event)}>
                  More info
                </button>
              </div>
            </div>
          </div>
        ))}
        <h2>Total events: {events.length}</h2>
      </div>
    </div>
  );
}
