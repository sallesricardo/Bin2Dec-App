var app = new Vue({
    el: '#app',
    data: {
      message: 'Binary to Decimal Calculator!',
      bindata: '',
      oldbindata: '',
      nbits: 0,
      decimalvalue: 0,
      alert: false,
   },
   computed: {
   
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
        checkbin: function(e){
            if (!(e.key === '0' || e.key === '1')){
                this.alert = true;
                e.preventDefault();
                return false
            } 
        },   
        countbits: function(e){
            for (var i = 0; i < this.bindata.length; i++){
                if (!(this.bindata[i] === '0' || this.bindata[i] === '1')){
                    this.alert = true;
                    e.preventDefault();
                    this.bindata = this.oldbindata;    
                }
            }
            this.oldbindata = this.bindata;
            this.nbits = this.bindata.length;
        },
        closealert: function () {
            this.alert = false;
        } 
    },
  })
