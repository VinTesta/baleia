#!/bin/zsh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
OUTPUT_DIR="$ROOT_DIR/exports"
OUTPUT_FILE="$OUTPUT_DIR/baleia-whitepaper.pdf"
CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
HOST="127.0.0.1"
PORT="4173"
URL="http://$HOST:$PORT/baleia/whitepaper"

mkdir -p "$OUTPUT_DIR"

if [[ ! -x "$CHROME_BIN" ]]; then
  echo "Google Chrome nao encontrado em $CHROME_BIN" >&2
  exit 1
fi

cleanup() {
  if [[ -n "${SERVER_PID:-}" ]]; then
    kill "$SERVER_PID" >/dev/null 2>&1 || true
    wait "$SERVER_PID" >/dev/null 2>&1 || true
  fi
}

trap cleanup EXIT

cd "$ROOT_DIR"
npm run serve -- --host "$HOST" --port "$PORT" >/tmp/baleia-whitepaper-serve.log 2>&1 &
SERVER_PID=$!

for _ in {1..60}; do
  if curl -fsS "$URL" >/dev/null 2>&1; then
    break
  fi
  sleep 1
done

if ! curl -fsS "$URL" >/dev/null 2>&1; then
  echo "Nao foi possivel iniciar o servidor local para exportar o PDF." >&2
  echo "Consulte /tmp/baleia-whitepaper-serve.log para detalhes." >&2
  exit 1
fi

"$CHROME_BIN" \
  --headless=new \
  --disable-gpu \
  --no-pdf-header-footer \
  --run-all-compositor-stages-before-draw \
  --virtual-time-budget=5000 \
  --print-to-pdf="$OUTPUT_FILE" \
  "$URL" >/tmp/baleia-whitepaper-chrome.log 2>&1

echo "PDF gerado em: $OUTPUT_FILE"
