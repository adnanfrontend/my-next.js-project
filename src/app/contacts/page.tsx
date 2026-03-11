import PostList from "@/components/sections/PostList";

export default function Home() {
  return (
    <main className="container mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold">
        Contacts
      </h1>

      <PostList />
    </main>
  );
}