let coin = {
    state: 0,
    flip: function() {
        // debugger
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        if (Math.random() > .5){
            this.state = 1;
        }else {
            this.state = 0;
        }
    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 1){
            return `Heads`;
        }else if(this.state === 0){
            return `Tails`;
        }else{
            return `state is neither heads nor tails!`;
        }
    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        if (this.state === 1){
            image.src = './img/Heads.png';
            image.alt = 'Heads'
        }else if(this.state === 0){
            image.src = './img/Tails.png';
            image.alt = 'Tails'
        }
        image.width = 100
        image.height = 100
        return image;
    },
    display20Flips: function() {
        let i = 0;
        document.body.innerHTML = ''
        while(i<20){
            this.flip();
            // console.log(this.toHTML());
            document.body.append(this.toHTML());
            document.body.append(this.toString());
            i++
        }
    }
    
};
