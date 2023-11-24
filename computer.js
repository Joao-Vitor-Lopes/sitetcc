export default class Computer{
    constructor() {}

    play(spaces, boxes, level) {
        switch (level) {

            case 1:
                this.playInEasyLevel(spaces, boxes);
                break;
            case 2:
                this.playInMiddleLevel(spaces, boxes);
            default:
        }
    }

    playInEasyLevel(spaces, boxes) {
        boxes[this.getRandomAvailableSpace(spaces)].click();
        
    }

    playInMiddleLevel(spaces, boxes){
        if(this.getRandomAvailableSpace(spaces).length === 9){
            boxes[this.getRandomAvailableSpace(spaces)].click();
        }
    }

    getRandomAvailableSpace(spaces){
        const availableSpaces = (() => {
            const aux = [];
            for(let i = 0; i < spaces.length; i++){
                if(!spaces[i]) aux.push(i);
            }
            return aux;
        })();
    
       return availableSpaces[Math.floor(Math.random() * availableSpaces.length)];
    }


}
