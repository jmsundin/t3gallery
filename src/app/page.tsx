import { v4 as uuidv4 } from 'uuid';
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/tfG8JEUc2NGuBKLWBEQIYdcGx5hJvj8Ki9qZM4PmSX3RBogF",
  "https://utfs.io/f/tfG8JEUc2NGuuensGcsDb4xPjZ5Qyp3RmBv2qo0KJDcCHFLu",
  "https://utfs.io/f/tfG8JEUc2NGulg7jJ9C4B32vlSFXukMdcgzGOpqNneE56xRA",
  "https://utfs.io/f/tfG8JEUc2NGuidVhVn3q46YLXntvWNjdzQkR5MTshOP9uUgK"
];

const mockImages = mockUrls.map((url, index) => ({
  id: uuidv4(),
  url,
}))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.name}</h2>
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, i) => (
          <div key={image.id + i} className="w-48">
            <img src={image.url} alt={`Image ${image.id}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </main>
  );
}
