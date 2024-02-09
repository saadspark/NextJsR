"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Profile({ params }) {
  const id = params.profile;
  const [client, setClient] = useState(false);

  useEffect(() => {
    async function fetchClient() {
      let response = await fetch(
        `https://beta-api.vostro-new.com/api/v1/clients/get/${id}`
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
      {!client ? (
        <h1>Loading...</h1>
      ) : (
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
            <h1>{item.membership_type[0].get_package_name.name}</h1>
          </div>
        ))
      )}
    </div>
  );
}
