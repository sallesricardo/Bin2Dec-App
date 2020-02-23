var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      bindata: '',
      nbits: 0,
      decimalvalue: 0,
      alert: false,
    },
    methods: {
        convert: function (){
            var value = 0;
            var aux = 1;
            for(var i = this.bindata.length - 1; i >=0; i--){
                if (this.bindata[i] == 1){
                    value += aux; 
                }
                aux *= 2;
            }
            this.decimalvalue = value;
        },
        binkeypressed: function(){
            this.nbits = this.bindata.length;
        },
        checkbin: function(e){
            if (!(e.key === '0' || e.key === '1')){
                e.preventDefault();
                return false
            } 
        }
    },
  })
