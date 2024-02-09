import Link from "next/link";

async function fetchClient() {
  // let response = await fetch("https://beta-api.vostro-new.com/api/v1/clients/get");
  const jsonResponse = await response.json();
  const data = jsonResponse.data.data;
  return data;
}

export default async function Client() {
  const client = await fetchClient();

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {client.map((items) => (
            <tr key={items.id}>
              <th scope="row">1</th>
              <td><Link  href={`/clients/${items.id}`}>{items.first_name + "" + items.last_name}</Link></td>
              <td>{items.email}</td>
              <td>{items.uuid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
