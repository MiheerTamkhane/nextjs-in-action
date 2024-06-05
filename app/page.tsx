import { Card } from "@/components/Card";

async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

export default async function Home() {
  const users = await fetchData();
  return (
    <div>
      <h1>Hello World!</h1>
      <div>
        {users.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
}
