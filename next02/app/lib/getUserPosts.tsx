export default async function getUsers(userId: string) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    if (!response.ok) throw new Error("Error to fetch user");
    return response.json();
  }
  