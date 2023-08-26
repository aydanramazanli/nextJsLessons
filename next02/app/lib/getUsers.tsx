export default async function getUsers(userId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!response.ok) throw new Error("Error to fetch user");
  return response.json();
}
