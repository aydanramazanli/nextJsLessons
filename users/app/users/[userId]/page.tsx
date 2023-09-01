import getUsers from "@/app/lib/getUsers";
import getUserPosts from "@/app/lib/getUserPosts";
import UserPosts from "./components/UserPosts";
import getAllUsers from "@/app/lib/getAllUsers";
import type { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<UserType> = getUsers(userId);
  const user: UserType = await userData;
  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userDatas: Promise<UserType> = getUsers(userId);
  const userPostsData: Promise<UserPost[]> = getUserPosts(userId);
  // const [user, userPosts] = await Promise.all([userData, userPostsData])
  const user = await userDatas;
  return (
    <>
      <h2 className="text-yellow-500 text-3xl">{user.name}</h2>
      <br />

      <UserPosts promise={userPostsData} />
    </>
  );
}


export async function generateStaticParams(){
  const userDatas: Promise<UserType[]> = getAllUsers()
  const users = await userDatas

  return users.map(user =>(
    {userId: user.id.toString()}
  ))
}