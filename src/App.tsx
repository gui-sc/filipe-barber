import { Share2, Loader, RotateCcw, Send } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto">
        <header className="flex items-center justify-between p-4 border-b border-gray-800">
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="text-center flex-1">
            <div className="flex items-center justify-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
              </svg>
              <span className="text-sm">linktr.ee</span>
            </div>
            <span className="text-xs text-gray-400">Instagram</span>
          </div>
          <button className="p-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </button>
        </header>

        <div className="px-4 pt-6 pb-24">
          <div className="flex justify-between mb-8">
            <button className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </button>
            <button className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition">
              <Share2 className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-gray-800">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold mb-3 tracking-wide">RAFAELA CENTENO BORGES</h1>
            <p className="text-lg text-gray-300">Mentora, Barbeira, Empresária</p>
          </div>

          <div className="space-y-4">
            <a
              href="#"
              className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition rounded-full px-6 py-4 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔑</span>
                <span className="font-medium">Curso On-line•Serviços extras</span>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </a>

            <a
              href="#"
              className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition rounded-full px-6 py-4 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">📚</span>
                <span className="font-medium">Cursos Presenciais</span>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </a>

            <a
              href="#"
              className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition rounded-full px-6 py-4 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">✂️</span>
                <span className="font-medium">Agende um horário comigo</span>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </a>

            <a
              href="#"
              className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition rounded-full px-6 py-4 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎥</span>
                <span className="font-medium">Edição•Expansão de Barbearias</span>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </a>
          </div>
        </div>

        <footer className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800">
          <div className="max-w-2xl mx-auto flex items-center justify-between px-8 py-4">
            <button className="p-2 hover:bg-gray-900 rounded-full transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-900 rounded-full transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-900 rounded-full transition">
              <Send className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-900 rounded-full transition">
              <Loader className="w-6 h-6" />
            </button>
            <button className="p-2 hover:bg-gray-900 rounded-full transition">
              <RotateCcw className="w-6 h-6" />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
