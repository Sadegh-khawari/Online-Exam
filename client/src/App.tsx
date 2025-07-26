import "./App.css";

function App() {
  return (
    <div className="p-6 bg-background-light min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-primary mb-6 fade-in-up">
          Tailwind CSS v4 Demo
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Colors Demo */}
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <h2 className="text-2xl font-semibold text-text-dark mb-4">
              Custom Colors
            </h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded"></div>
                <span className="text-sm text-text-medium">Primary</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary-light rounded"></div>
                <span className="text-sm text-text-medium">Primary Light</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success rounded"></div>
                <span className="text-sm text-text-medium">Success</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-danger rounded"></div>
                <span className="text-sm text-text-medium">Danger</span>
              </div>
            </div>
          </div>

          {/* Typography Demo */}
          <div className="bg-white p-6 rounded-lg shadow-md card-hover">
            <h2 className="text-2xl font-semibold text-text-dark mb-4">
              Typography
            </h2>
            <div className="space-y-2">
              <p className="text-xs text-text-light">Extra Small Text</p>
              <p className="text-sm text-text-medium">Small Text</p>
              <p className="text-base text-text-dark">Base Text</p>
              <p className="text-lg text-text-dark">Large Text</p>
              <p className="text-xl text-text-dark">Extra Large Text</p>
            </div>
          </div>
        </div>

        {/* Custom Effects Demo */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md card-hover">
          <h2 className="text-2xl font-semibold text-text-dark mb-4">
            Custom Effects
          </h2>
          <div className="space-y-4">
            <button className="px-4 py-2 bg-primary text-white rounded-md custom-focus">
              Custom Focus Button
            </button>
            <div className="p-4 custom-gradient text-white rounded-md">
              Custom Gradient Background
            </div>
            <div className="h-32 overflow-y-auto custom-scrollbar bg-gray-100 p-4">
              <p>
                This div has a custom scrollbar. Scroll down to see it in
                action.
              </p>
              {Array.from({ length: 20 }, (_, i) => (
                <p key={i} className="mb-2">
                  Scroll item {i + 1}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Responsive Demo */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-text-dark mb-4">
            Responsive Classes
          </h2>
          <div className="space-y-2">
            <p className="mobile-only text-success">
              This text only shows on mobile
            </p>
            <p className="desktop-only text-primary">
              This text only shows on desktop
            </p>
            <p className="no-print text-text-medium">This text won't print</p>
            <p className="print-only text-text-dark">
              This text only shows when printing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
