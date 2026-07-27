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
        <h1 style={{ fontSize: '2.2rem', color: '#38bdf8', marginBottom: '8px' }}>
          App React (Vite) + Spring Boot (JPA) + PostgreSQL
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>
          Despliegue manual sin Docker Compose
        </p>
      </header>

      <main>
        {loading && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#cbd5e1' }}>
            <p style={{ fontSize: '1.2rem' }}>Cargando datos desde PostgreSQL...</p>
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
            <small>Asegúrate de que el Backend en Spring Boot y PostgreSQL estén activos.</small>
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
                Lista de Productos ({products.length})
              </h2>
              <span style={{
                backgroundColor: '#166534',
                color: '#4ade80',
                padding: '4px 12px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '600'
              }}>
                PostgreSQL Conectado
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
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '12px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justify: 'space-between',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div>
                    <h3 style={{ margin: '0 0 10px 0', color: '#38bdf8', fontSize: '1.25rem' }}>
                      {product.name}
                    </h3>
                    <p style={{ margin: '0 0 15px 0', color: '#94a3b8', fontSize: '0.95rem' }}>
                      {product.description}
                    </p>
                  </div>
                  <div style={{
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid #334155',
                    paddingTop: '12px'
                  }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#4ade80' }}>
                      ${product.price ? product.price.toFixed(2) : '0.00'}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
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
