const PORT = 8080;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CoinHub - Digital Banking</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        header {
            background: white;
            border-radius: 12px;
            padding: 20px 30px;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #667eea;
            font-size: 32px;
            font-weight: 700;
        }

        .subtitle {
            color: #666;
            margin-top: 5px;
        }

        .dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }

        .card {
            background: white;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .card h2 {
            color: #333;
            font-size: 20px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .status {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 600;
        }

        .status.online {
            background: #d4edda;
            color: #155724;
        }

        .service-list {
            list-style: none;
            margin-top: 15px;
        }

        .service-list li {
            padding: 10px 0;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .service-list li:last-child {
            border-bottom: none;
        }

        .service-name {
            font-weight: 500;
            color: #333;
        }

        .service-port {
            color: #999;
            font-size: 14px;
        }

        .info-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-top: 15px;
        }

        .info-item {
            padding: 15px;
            background: #f8f9fa;
            border-radius: 8px;
        }

        .info-label {
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
            margin-bottom: 5px;
        }

        .info-value {
            font-size: 18px;
            font-weight: 600;
            color: #667eea;
        }

        .footer {
            text-align: center;
            color: white;
            margin-top: 40px;
            opacity: 0.9;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>CoinHub</h1>
            <p class="subtitle">Digital Banking Platform - Demo Environment</p>
        </header>

        <div class="dashboard">
            <div class="card">
                <h2>
                    Microservices
                    <span class="status online">ONLINE</span>
                </h2>
                <ul class="service-list">
                    <li>
                        <span class="service-name">Auth Service</span>
                        <span class="service-port">:8081</span>
                    </li>
                    <li>
                        <span class="service-name">Transaction Service</span>
                        <span class="service-port">:8082</span>
                    </li>
                    <li>
                        <span class="service-name">Account Service</span>
                        <span class="service-port">:8083</span>
                    </li>
                    <li>
                        <span class="service-name">Web UI</span>
                        <span class="service-port">:8080</span>
                    </li>
                </ul>
            </div>

            <div class="card">
                <h2>Technology Stack</h2>
                <ul class="service-list">
                    <li>
                        <span class="service-name">Auth Service</span>
                        <span class="service-port">Go 1.25.3</span>
                    </li>
                    <li>
                        <span class="service-name">Transaction Service</span>
                        <span class="service-port">Go 1.25.3</span>
                    </li>
                    <li>
                        <span class="service-name">Account Service</span>
                        <span class="service-port">Java 21 + Maven</span>
                    </li>
                    <li>
                        <span class="service-name">Web Frontend</span>
                        <span class="service-port">Deno 2.1.4</span>
                    </li>
                </ul>
            </div>

            <div class="card">
                <h2>Build System</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Tool</div>
                        <div class="info-value">Frontseat</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Projects</div>
                        <div class="info-value">4</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Languages</div>
                        <div class="info-value">3</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Build Time</div>
                        <div class="info-value">&lt;10s</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>Built with Frontseat - A modern polyglot build system</p>
            <p>Demo: CoinHub Banking Platform</p>
        </div>
    </div>
</body>
</html>
`;

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);

  // Health check endpoint
  if (url.pathname === "/health") {
    return new Response(
      JSON.stringify({
        status: "healthy",
        service: "coinhub-ui",
        version: "1.0.0",
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // Serve the main page
  return new Response(html, {
    headers: { "Content-Type": "text/html" },
  });
}

console.log(`CoinHub Web UI starting on http://localhost:${PORT}`);
Deno.serve({ port: PORT }, handler);
