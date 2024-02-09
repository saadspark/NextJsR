"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Profile({ params }) {
  const id = params.profile;
  const [client, setClient] = useState([]);
   

  useEffect(() => {
    async function fetchClient() {
      let response = await fetch(
        `http://127.0.0.1:8000/api/v1/clients/get/${id}`
      );

      const jsonResponse = await response.json();
      const data = jsonResponse.data;
      setClient(data);
    }
    fetchClient();
  }, [id]);

  return (
    <div>
      {console.log(client)}
      <h1>Profile</h1>
      {!client ? <Loader></Loader> :
      client.map((item) => (
        <div key={item.id}>
          <h1>1</h1>
          <h1>
            <Link href={`/clients/${item.id}`}>
              {item.first_name + " " + item.last_name}
            </Link>
          </h1>
          <h1>{item.email}</h1>
          <h1>{item.uuid}</h1>
        </div>
      ))}
    </div>
  );
}


const Loader = ()=>{
  return(
    <p>Loading....</p>
  )
}
   