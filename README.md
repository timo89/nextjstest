# Next.js Environment Variable Test

A simple Next.js application that demonstrates reading environment variables on the server side and displaying them. Docker-ready for deployment to Azure or other cloud platforms.

## Features

- Server-side environment variable reading
- Text appending on the server
- Docker containerization support
- Ready for Azure deployment

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

4. (Optional) Set the environment variable:
```bash
TEST_ENV_VAR="Hello from Azure" npm run dev
```

## Production Build

```bash
npm run build
npm start
```

## Docker Usage

### Build the Docker image:
```bash
docker build -t nextjs-test .
```

### Run the container:
```bash
docker run -p 3000:3000 nextjs-test
```

### Run with environment variable:
```bash
docker run -p 3000:3000 -e TEST_ENV_VAR="Hello from Azure" nextjs-test
```

## Azure Deployment

When deploying to Azure Container Instances or Azure Web App:

1. Build and push your Docker image to Azure Container Registry
2. Set the `TEST_ENV_VAR` environment variable in your Azure service configuration
3. The application will read the variable, append " - processed on server" to it, and display the result

## Environment Variables

- `TEST_ENV_VAR`: The environment variable to read and display (defaults to "default-value" if not set)
