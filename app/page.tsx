export default function UserPage({ params }: { params: { username: string } }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="rounded-2xl bg-white/10 backdrop-blur-xl p-8 text-center">
        <h1 className="text-4xl font-bold">@{params.username}</h1>
        <p className="mt-4 text-gray-400">
          Dein guns.lol Profil 😈
        </p>

        <div className="mt-6 space-y-3">
          <a className="block rounded-xl bg-white/20 py-3 hover:bg-white/30">
            Discord
          </a>
          <a className="block rounded-xl bg-white/20 py-3 hover:bg-white/30">
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
