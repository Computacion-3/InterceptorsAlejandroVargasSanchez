import { useState, useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error en la respuesta del servidor: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error al obtener productos:", err)
        setError(err.message)
        setLoading(false)
      })
  }, [API_URL])

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{ fontSize: '2.2rem', color: '#818cf8', marginBottom: '8px' }}>
          App Orquestada con Docker Compose
        </h1>
        <p style={{ color: '#a5b4fc', fontSize: '1.1rem' }}>
          React (Vite) + Spring Boot (JPA) + PostgreSQL
        </p>
      </header>

      <main>
        {loading && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#c7d2fe' }}>
            <p style={{ fontSize: '1.2rem' }}>Conectando con Backend y PostgreSQL...</p>
          </div>
        )}

        {error && (
          <div style={{
            backgroundColor: '#451a1a',
            border: '1px solid #f87171',
            borderRadius: '8px',
            padding: '16px',
            color: '#fca5a5',
            textAlign: 'center'
          }}>
            <h3>Error de Conexión</h3>
            <p>{error}</p>
            <small>Verifica los logs con `docker compose logs`.</small>
          </div>
        )}

        {!loading && !error && (
          <div>
            <div style={{
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              marginBottom: '20px'
            }}>
              <h2 style={{ fontSize: '1.5rem', margin: 0, color: '#f1f5f9' }}>
                Catálogo de Productos ({products.length})
              </h2>
              <span style={{
                backgroundColor: '#1e1b4b',
                border: '1px solid #6366f1',
                color: '#818cf8',
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                Docker Compose Activo
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '20px'
            }}>
              {products.map((product) => (
                <div
                  key={product.id}
                  style={{
                    backgroundColor: '#1e1b4b',
                    border: '1px solid #3730a3',
                    borderRadius: '12px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', color: '#a5b4fc', fontSize: '1.25rem' }}>
                      {product.name}
                    </h3>
                    <p style={{ margin: '0 0 15px 0', color: '#c7d2fe', fontSize: '0.95rem' }}>
                      {product.description}
                    </p>
                  </div>
                  <div style={{
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid #3730a3',
                    paddingTop: '12px'
                  }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#34d399' }}>
                      ${product.price ? product.price.toFixed(2) : '0.00'}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#818cf8' }}>
                      ID: #{product.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
