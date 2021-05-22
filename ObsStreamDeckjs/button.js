export class Button {
    label = "Default";

    Add(obj) {
        this.button = document.createElement('button')
        this.button.innerText = this.label
        this.button.addEventListener('click', this.OnClick.bind(this))
        obj.appendChild(this.button); 
    }

    OnClick() {
        throw new Error('You should Implement OnClick');
    }

    Active(enabled) {
        if (enabled)
            this.button.classList.add("active");
        else 
            this.button.classList.remove("active")
    }
}