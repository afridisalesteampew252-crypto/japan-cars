import { useState } from 'react'
import './App.css'

interface Car {
  id: number
  brand: string
  model: string
  year: number
  description: string
  image: string
}

const cars: Car[] = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Supra',
    year: 2024,
    description: 'A legendary sports car known for its performance and reliability. The modern Supra combines classic design with contemporary technology.',
    image: '🏎️'
  },
  {
    id: 2,
    brand: 'Honda',
    model: 'Civic Type R',
    year: 2024,
    description: 'A high-performance hatchback that delivers thrilling driving dynamics and cutting-edge technology for enthusiasts.',
    image: '🚗'
  },
  {
    id: 3,
    brand: 'Nissan',
    model: 'GT-R',
    year: 2024,
    description: 'An iconic supercar with incredible acceleration and precision handling. A true Japanese engineering masterpiece.',
    image: '⚡'
  },
  {
    id: 4,
    brand: 'Mazda',
    model: 'RX-7',
    year: 2023,
    description: 'A rotary-powered sports car that combines elegance with performance. Known for its lightweight design and responsive handling.',
    image: '🎯'
  },
  {
    id: 5,
    brand: 'Subaru',
    model: 'WRX STI',
    year: 2024,
    description: 'A rally-inspired performance sedan with all-wheel drive and turbocharged power for ultimate control.',
    image: '🏁'
  },
  {
    id: 6,
    brand: 'Mitsubishi',
    model: 'Lancer Evolution',
    year: 2015,
    description: 'A legendary rally car that defined a generation of performance enthusiasts with its aggressive styling and potent engine.',
    image: '🌟'
  }
]

function App() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>🇯🇵 Japan Cars Showcase</h1>
          <p>Explore the world of legendary Japanese automotive engineering</p>
        </div>
      </header>

      <main className="main-content">
        <section className="intro">
          <h2>Welcome to Japan Cars</h2>
          <p>
            Japanese automotive manufacturers have revolutionized the industry with their commitment to quality, 
            innovation, and performance. From reliable everyday vehicles to high-performance sports cars, 
            Japanese brands have earned their place among the world's finest automakers.
          </p>
        </section>

        <section className="cars-grid">
          <h2>Featured Japanese Cars</h2>
          <div className="grid">
            {cars.map((car) => (
              <div
                key={car.id}
                className={`car-card ${selectedCar?.id === car.id ? 'selected' : ''}`}
                onClick={() => setSelectedCar(car)}
              >
                <div className="car-emoji">{car.image}</div>
                <h3>{car.brand}</h3>
                <p className="model">{car.model}</p>
                <p className="year">{car.year}</p>
              </div>
            ))}
          </div>
        </section>

        {selectedCar && (
          <section className="car-details">
            <div className="details-content">
              <div className="details-header">
                <h2>{selectedCar.brand} {selectedCar.model}</h2>
                <button 
                  className="close-btn"
                  onClick={() => setSelectedCar(null)}
                >
                  ✕
                </button>
              </div>
              <div className="details-body">
                <div className="details-emoji">{selectedCar.image}</div>
                <div className="details-info">
                  <p><strong>Brand:</strong> {selectedCar.brand}</p>
                  <p><strong>Model:</strong> {selectedCar.model}</p>
                  <p><strong>Year:</strong> {selectedCar.year}</p>
                  <p><strong>Description:</strong></p>
                  <p className="description">{selectedCar.description}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="brands">
          <h2>Major Japanese Car Brands</h2>
          <div className="brands-list">
            <div className="brand-item">
              <h3>Toyota</h3>
              <p>World's largest automaker known for reliability and innovation</p>
            </div>
            <div className="brand-item">
              <h3>Honda</h3>
              <p>Pioneer in engine technology and fuel efficiency</p>
            </div>
            <div className="brand-item">
              <h3>Nissan</h3>
              <p>Leader in electric vehicles and performance cars</p>
            </div>
            <div className="brand-item">
              <h3>Mazda</h3>
              <p>Master of driving dynamics and rotary engine innovation</p>
            </div>
            <div className="brand-item">
              <h3>Subaru</h3>
              <p>Specialist in all-wheel drive and safety technology</p>
            </div>
            <div className="brand-item">
              <h3>Mitsubishi</h3>
              <p>Pioneer in rally racing and performance vehicles</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Japan Cars Showcase. Celebrating Japanese automotive excellence.</p>
      </footer>
    </div>
  )
}

export default App
