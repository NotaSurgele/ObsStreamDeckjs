import './style.css'
import OBSWebSocket from 'obs-websocket-js'
import { SceneButton } from './SceneButton';
import { getMediaFromScene } from './getMediaScene';

var ip = sessionStorage.getItem('ip');

console.log(ip);

if (ip.length == 0)
{
  while (ip.length == 0)
  {
    ip = prompt("Enter your hosted machine Ip address:", "");
  }
}

sessionStorage.setItem("ip", ip);

const sceneRow = document.getElementById('scenes');

async function main() {
  const obs = new OBSWebSocket();
  await obs.connect( {address: `${ip}:4444`, password: 'StreamDeckjs'} );
  const data = await obs.send("GetSceneList");

  for(const scene of data.scenes) {
    const button = new SceneButton(obs, scene.name)
    button.Add(sceneRow);
    if (scene.name == data['current-scene'])
    {
        button.Active(true)
        getMediaFromScene(obs, scene, data);
    }
  }
}

main();