import './style.css'
import OBSWebSocket from 'obs-websocket-js'
import { SceneButton } from './SceneButton';
import { getMediaFromScene } from './getMediaScene';

//yarn run dev

/*var ip = prompt("Enter your hosted machine ip adress: ", "");

while (ip == "") {
  ip = prompt("Enter your hosted machine ip adress: ", "");
}*/

const sceneRow = document.getElementById('scenes');
var isSync = true;

async function main() {
  const obs = new OBSWebSocket();
  await obs.connect( {address: `192.168.1.6:4444`, password: 'StreamDeckjs'} );
  const data = await obs.send("GetSceneList");

  for(const scene of data.scenes) {
    const button = new SceneButton(obs, scene.name)
    button.Add(sceneRow);
    if (scene.name == data['current-scene'])
    {
        button.Active(true)
        getMediaFromScene(obs, scene, data);
        if (isSync == false)
        {
          window.location.reload();
          isSync = true;
        }
    }
  }
}
main();