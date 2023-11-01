var personaje = function(x, y , nombre) {

    this.x = 0;
    this.y = 0;
    this.nombre= 'personaje';


    //METODO ABAJO
    this.abajo = function () {
        this.y += 10;        
    }

    //METODO HABLAR
    this.hablar = function() {
        console.log('hablar ' + this.nombre);
    }


}

var personaje1 = new personaje(10, 100, "luis");

