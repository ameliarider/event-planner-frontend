import axios from "axios";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { EventsPage } from "./EventsPage"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <EventsPage />
      <Footer />
    </div>
  )
}

export default App;