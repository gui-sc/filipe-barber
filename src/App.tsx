function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto">
        <div className="px-4 pt-6 pb-24">

          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-gray-800">
              <img
                src={"./perfil.jpg"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-bold mb-3 tracking-wide">FILIPE BORGES</h1>
            <p className="text-lg text-gray-300">Barbeiro, Mentor</p>
          </div>

          <div className="space-y-4">
            <a
              href="https://wa.link/dx85ek" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition rounded-full px-6 py-4 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧠</span>
                <span className="font-medium">Ensino você a vender mais serviços extras e produtos na sua barbearia</span>
              </div>
            </a>

            <a
              href="https://cashbarber.com.br/oldbarbearia" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition rounded-full px-6 py-4 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">💈</span>
                <span className="font-medium">Corte cabelo comigo</span>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition rounded-full px-6 py-4 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">💇🏾‍♂️</span>
                <span className="font-medium">Conheça nossos produtos </span>
              </div>
            </a>

            <a
              href="https://wa.link/g7g61b" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition rounded-full px-6 py-4 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">💻</span>
                <span className="font-medium">Receba um acompanhamento profissional do seu produto</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
