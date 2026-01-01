export default function UserPage({ params }: { params: { username: string } }) {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 p-8 text-center shadow-2xl">

        {/* Avatar */}
        <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl font-bold shadow-lg">
          {params.username[0].toUpperCase()}
        </div>

        {/* Username */}
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight">
          @{params.username}
        </h1>

        {/* Bio */}
        <p className="mt-2 text-sm text-gray-300">
          guns.lol style profile • hosted on pufferfish 🐡
        </p>

        {/* Links */}
        <div className="mt-6 space-y-4">
          <a className="block rounded-xl bg-white/15 py-3 font-medium hover:bg-white/25 transition">
            Discord
          </a>
          <a className="block rounded-xl bg-white/15 py-3 font-medium hover:bg-white/25 transition">
            GitHub
          </a>
          <a className="block rounded-xl bg-white/15 py-3 font-medium hover:bg-white/25 transition">
            Website
          </a>
        </div>

        {/* Footer */}
        <p className="mt-6 text-xs text-gray-400">
          pufferfish.dpdns.org
        </p>
      </div>
    </main>
  );
}
