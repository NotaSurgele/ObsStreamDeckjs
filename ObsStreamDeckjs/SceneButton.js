import { Button } from "./button";

export class SceneButton extends Button {
    /**
     * 
     * @param {import('obs-websocket-js')} obs 
     * @param {string} sceneName 
     */

    constructor (obs, sceneName) {
        super();
        this.obs = obs;
        this.sceneName = sceneName;
        this.label = sceneName;
    }

    OnMounted(obj) {
        this.obs.on("SwitchScenes", (data) => {
            this.Active(data['scene-name'] === this.sceneName);
        });
    }

    OnClick() {
        this.obs.send("SetCurrentScene", { "scene-name": this.sceneName });
        window.location.reload();
    }
}