imrc;
class EventCreate extends Component {
  state = {
    title: "",
  };
  render() {
    return (
      <div>
        <form action="">
          <div>
            Event title
            <input name="title" type="text"></input>
          </div>
          <div>
            Speaker
            <input name="speaker" type="text"></input>
          </div>
          <div>
            Location
            <input name="location" type="text"></input>
          </div>
          <div>
            Capacity
            <input name="capacity" type="number"></input>
          </div>

          <div>
            Date
            <input name="date" type="date"></input>
          </div>

          <div className="time">
            Time:
            <select>
              <option>Morning</option>
              <option>Mid-morning</option>
              <option>Afternoon</option>
            </select>
          </div>

          <button>Create Event</button>
        </form>
      </div>
    );
  }
}

export default EventCreate;
