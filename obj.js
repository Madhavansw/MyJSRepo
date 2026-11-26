
const ob = {
    total: 0,
    add: function(){
        this.total += 1;
        return this;
    },
    mult: function(){
        this.total *=   2
        return this;
    },
    sub : function(){
        this.total -= 1;
        return this;
    }

}
const result = ob.sub().mult().sub();
 console.log(`result :${result.total}`);