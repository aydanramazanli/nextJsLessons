import type { Metadata } from "next";
import getAllUsers from "../lib/getAllUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function Users() {
  const usersData: Promise<UserType[]> = getAllUsers();
  const users = await usersData;
console.log("userssss")
  const content = (
    <section>
      <h2>
        <Link href="/" > Back to Home Page</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
       
            <p key={user.id}>
              <Link href={`/users/${user.id}`} className="text-yellow-500 font-bold">{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
  return content;
}
