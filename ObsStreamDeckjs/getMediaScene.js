import { Button } from "./button"
import { MediaButton } from "./MediaButton";
/**
     * 
     * @param {import('obs-websocket-js')} obs 
     * @param {string} sceneName 
     * @param {import('obs-websocket-js').Scene} scene
     * @param {[]} data
*/

const mediaRow = document.getElementById('medias');

export async function getMediaFromScene(obs, scene, data) {
    const medias = data.scenes.find((s) => s.name == scene.name).sources;

    for (const media of medias) {
      if (media.type == "ffmpeg_source")
      {
        const button = new MediaButton(obs, media.name);
        button.Add(mediaRow);
      }
    }
  }
