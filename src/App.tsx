import { useState } from 'react'

function App() {
  const [selectedScale, setSelectedScale] = useState<string>('startup');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Service Tool</h1>
          <p className="mt-2 text-gray-600">Comprehensive service customization platform</p>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Service Catalog</h2>
              <p>33+ services across security, development, and consulting categories</p>
              <p>150+ technology stack options across 11+ categories</p>
              <p className="mt-4">Select your business scale:</p>
              <div className="flex space-x-4 mt-2">
                {['individual', 'startup', 'small-business', 'enterprise'].map(scale => (
                  <button
                    key={scale}
                    className={`px-4 py-2 rounded ${selectedScale === scale ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                    onClick={() => setSelectedScale(scale)}
                  >
                    {scale.charAt(0).toUpperCase() + scale.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
