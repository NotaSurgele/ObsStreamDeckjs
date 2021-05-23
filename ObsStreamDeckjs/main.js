import './style.css'
import OBSWebSocket from 'obs-websocket-js'
import { SceneButton } from './SceneButton';

//yarn run dev

async function main() {
  const obs = new OBSWebSocket();
  await obs.connect({address: "192.168.1.6:4444", password: 'StreamDeckjs'});
  const data = await obs.send("GetSceneList");

  for(const scene of data.scenes) {
    const button = new SceneButton(obs, scene.name)
    button.Add(document.body);
    if (scene.name == data['current-scene'])
    {
        button.Active(true)
    }
  }
}

main();