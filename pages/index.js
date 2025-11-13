export default function Home({ message }) {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Next.js Environment Variable Test</h1>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        maxWidth: '600px'
      }}>
        <p style={{ fontSize: '18px', color: '#555' }}>
          <strong>Message from server:</strong>
        </p>
        <p style={{ 
          fontSize: '20px', 
          color: '#007bff',
          marginTop: '10px',
          wordBreak: 'break-word'
        }}>
          {message}
        </p>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // Read environment variable on the server side
  const envValue = process.env.TEST_ENV_VAR || 'default-value';
  
  // Append text to it
  const message = `${envValue} - processed on server`;
  
  return {
    props: {
      message,
    },
  };
}
