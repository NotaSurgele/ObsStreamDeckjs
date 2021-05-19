import './style.css'
import OBSWebSocket from 'obs-websocket-js'

async function main() {
  const obs = new OBSWebSocket();
  await obs.connect({adress: "localhost:4444", password: 'StreamDeckjs'})
  const data = obs.send("GetSceneList");
  console.log(data);
}

main();