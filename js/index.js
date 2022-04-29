function obtenerEndPointTecnologia(){
    
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;

       let json = JSON.parse(this.responseText);
       console.log(json)

       let mens = "";

    for (let index = 0; index < 3; index++) {
        mens = mens+`<a href="html/camila.html">${json[index].titulo}s</a>`;
    }
    document.getElementById('noticiasTecnologia').innerHTML = mens;

    console.log(mens);
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
           console.log(json)
    
           let mens = "";
           
    
        for (let index = 0; index < 3; index++) {
            mens = mens+`<a href="html/camila.html">${json[index].titulo}</a>`;
        }
        document.getElementById('noticiasDeportes').innerHTML = mens;
    
        console.log(mens);
        }
    };
    xhttp2.open("GET", "https://carlosreneas.github.io/endpoints/categoria_deporte.json", true);
    xhttp2.send();
    
    }

    function obtenernoticiasImg(){
    
        var xhttp3 = new XMLHttpRequest();
        xhttp3.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               // Typical action to be performed when the document is ready:
               //document.getElementById("demo").innerHTML = xhttp.responseText;
        
               let json = JSON.parse(this.responseText);
               console.log(json)
        
               let mens = "";

               let img = document.getElementById("fotoNoticias2");
               img.setAttribute("src",`${json[0].img}`);
               //<img id="fotoNoticias" src="img/noticias.jpg" alt="foto">
             //  document.getElementById('fotoNoticias').innerHTML =  `<img id="fotoNoticias" src="${json[0].img}" alt="foto"></img>`;

            for (let index = 0; index < 3; index++) {
                mens = mens+` <div >
                <h2>${json[index].titulo} - ${json[index].categoria} - ${json[index].fecha }</h2>
                <p>${json[index].descripcion} <a id="noti${index}" href="#">ver mas</a></p>
                
                
            </div>`
            }
            document.getElementById('noticiasRes').innerHTML = mens;
        
            console.log(mens);
            }
        };
        xhttp3.open("GET", "https://carlosreneas.github.io/endpoints/noticias.json", true);
        xhttp3.send();

      
        
        }

        function aggLinks(){
            let l1 =document.getElementById("noti0");
           l1.href = "html/democracia.html";

       
        }

        function insertarFecha(){
            
            var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
            var f=new Date();
            document.getElementById("fecha").innerHTML= `${f.getDate()} de ${meses[f.getMonth()]} de ${f.getFullYear()}`;
            document.write(f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
        }



        insertarFecha();
        obtenernoticiasImg();
        obtenerEndPointDeporte();
        obtenerEndPointTecnologia();
        setTimeout(aggLinks,1000);
     
