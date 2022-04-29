function obtenerEndPointTecnologia(){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           //document.getElementById("demo").innerHTML = xhttp.responseText;
    
           let json = JSON.parse(this.responseText);
           
    
           let mens = "";
    
        for (let index = 0; index < 3; index++) {
            mens = mens+`<a href="html/camila.html">${json[index].titulo}</a>`;
        }
        document.getElementById('noticiasTecnologia').innerHTML = mens;
    
        
        }
    };
    xhttp.open("GET", "https://carlosreneas.github.io/endpoints/categoria_tecnologia.json", true);
    xhttp.send();
    
    }
    
    
    function obtenerEndPointDeporte(){
        
        var xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               // Typical action to be performed when the document is ready:
               //document.getElementById("demo").innerHTML = xhttp.responseText;
        
               let json = JSON.parse(this.responseText);
               
        
               let mens = "";
        
            for (let index = 0; index < 3; index++) {
                mens = mens+`<a href="#">${json[index].titulo}</a>`;
            }
            document.getElementById('noticiasDeportes').innerHTML = mens;
        
            
            }
        };
        xhttp2.open("GET", "https://carlosreneas.github.io/endpoints/categoria_deporte.json", true);
        xhttp2.send();
        
        }
    
          
            
            
          
            function obtenernoticia() {

                var xhttp3 = new XMLHttpRequest();
                xhttp3.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                        
    
                        let json = JSON.parse(this.responseText);
                        
                        let img = document.getElementById("fotoNoticias2");
                        img.setAttribute("src",`${json.img}`);
                        


                        let mens = "";
                      
    
                        mens = mens + ` <div >
                <h2>${json.titulo} - ${json.categoria} - ${json.fecha}</h2>
                <p>${json.detalle} </p>
                
                
            /div>`;
    
                        document.getElementById('noticiasRes').innerHTML = mens;
    
                        
                    }
                };
                xhttp3.open("GET", "https://carlosreneas.github.io/endpoints/noticia_6.json", true);
                xhttp3.send();
    
            }

            function insertarFecha(){
            
                var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
                var f=new Date();
                document.getElementById("fecha").innerHTML= `${f.getDate()} de ${meses[f.getMonth()]} de ${f.getFullYear()}`;
                
            }
    
    
    
            insertarFecha();
            obtenernoticia();
            obtenerEndPointDeporte();
            obtenerEndPointTecnologia();
      
         
    