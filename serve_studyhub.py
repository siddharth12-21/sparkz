#!/usr/bin/env python3
"""
Serves StudyHub (math + APWH) at http://localhost:8765/
Run from the project root: python3 serve_studyhub.py
"""
import http.server
import os
import socketserver

PORT = 8765
ROOT = os.path.dirname(os.path.abspath(__file__))


class StudyHubHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        super().end_headers()


def main():
    os.chdir(ROOT)
    with socketserver.TCPServer(("", PORT), StudyHubHandler) as httpd:
        print("StudyHub: http://localhost%s/" % (":" + str(PORT) if PORT != 80 else ""))
        print("  Math:   http://localhost:%s/math.html" % PORT)
        print("  APWH:   http://localhost:%s/apwh/index.html" % PORT)
        print("Press Ctrl+C to stop.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")


if __name__ == "__main__":
    main()
