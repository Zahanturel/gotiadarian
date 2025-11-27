#!/usr/bin/env python3
import http.server
import socketserver
import os

PORT = 5000
HOST = "0.0.0.0"

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Add Cache-Control header to prevent caching issues
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_GET(self):
        # Serve index.html for root path
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

if __name__ == "__main__":
    # Change to the directory containing the website files
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)
    
    with socketserver.TCPServer((HOST, PORT), MyHTTPRequestHandler) as httpd:
        print(f"Server running at http://{HOST}:{PORT}/")
        print("Press Ctrl+C to stop the server")
        httpd.serve_forever()
