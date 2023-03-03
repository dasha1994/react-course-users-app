import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useLoaderData();

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function loader({ request, params }) {
  console.log("loader");
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    console.log("errro");

    throw json({ message: "Could not fetch" }, { status: 500 });
  } else {
    console.log("resp");

    return response;
  }
}
