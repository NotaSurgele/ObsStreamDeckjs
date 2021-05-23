import { Button } from "./button"

export class MediaButton extends Button {
    /**
     * 
     * @param {import('obs-websocket-js')} obs 
     * @param {string} mediaName 
     */
    constructor (obs, mediaName) {
        super();
        this.obs = obs;
        this.mediaName = mediaName;
        this.label = mediaName;
    }
    
    OnMounted() {
        this.obs.on("MediaStarted", (media) => {
            if (media.sourceName == this.mediaName)
            {
                this.Active(true);
            }
        });
        this.obs.on("MediaEnded", (media) => {
            if (media.sourceName == this.mediaName)
            {
                this.Active(false);
            }
        });
    }

    OnClick() {
        this.obs.send("RestartMedia", { "sourceName": this.mediaName});
        
    }
}