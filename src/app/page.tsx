import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/tfG8JEUc2NGuBKLWBEQIYdcGx5hJvj8Ki9qZM4PmSX3RBogF",
  "https://utfs.io/f/tfG8JEUc2NGuuensGcsDb4xPjZ5Qyp3RmBv2qo0KJDcCHFLu",
  "https://utfs.io/f/tfG8JEUc2NGulg7jJ9C4B32vlSFXukMdcgzGOpqNneE56xRA",
  "https://utfs.io/f/tfG8JEUc2NGuidVhVn3q46YLXntvWNjdzQkR5MTshOP9uUgK"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={`Image ${image.id}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </main>
  );
}
