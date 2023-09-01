type Props = {
  promise: Promise<UserPost[]>;
};

export default async function UserPosts({ promise }: Props) {
  const posts = await promise;
  const content = posts.map((post) => {

    return <>
      <article key={post.id}>
        <h2 className="text-2xl text-stone-400" >{post.title}</h2>
        <p className=" text-slate-50">{post.body}</p>
        <br />
      </article>
    </>;
  });

  return content
}
