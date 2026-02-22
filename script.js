document.getElementById('btn-abrir').addEventListener('click', function() {
    
    document.getElementById('pantalla-inicio').style.display = 'none';
    
    
    const carta = document.getElementById('carta-principal');
    carta.style.display = 'block';

    
    const musica = document.getElementById('miMusica');
    musica.play();

    
    escribirCarta();
});

function createPetal() {
    const container = document.getElementById('petals-container');
    if(!container) return;
    
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    const size = Math.random() * 15 + 10 + 'px';
    petal.style.width = size;
    petal.style.height = size;
    petal.style.animationDuration = Math.random() * 3 + 2 + 's';
    petal.style.opacity = Math.random();
    
    container.appendChild(petal);
    setTimeout(() => { petal.remove(); }, 5000);
}
setInterval(createPetal, 300);

const texto = `Mi Danielita,

Hoy celebras tus 19 añitos, la verdad todo el dia me pase buscando las palabras que sean lo suficientemente grandes para describir lo que causas en mí, pero la verdad es que "te quiero" se queda demasiado corto. Me tienes completa y perdidamente embobado. A veces siento que mi corazón ya no me pertenece, porque desde el primer momento que te vi salió de mi pecho para quedarse en tus manos, y te juro que no existe lugar más seguro en el universo que ahí, contigo.

Cuando estoy a tu lado, mi realidad se desvanece. Me transformas de una en una pelicula de fantasia. Tú eres mi magia dentro de un mundo muggle. Eres mi Patronus, Tu eres ese recuerdo feliz, potente y luminoso que es capaz de alejar cualquier oscuridad, cualquier tristeza y hacerme sentir invencible.

Quiero que sepas que cada canción que te dedico, como esta que suena ahora, no es solo música. Cada letra viaja desde la capa más visible de mi piel hasta lo más profundo e inexplorado de mi alma, llevando mensajes que a veces mi voz no alcanza a decir.

Y si alguna vez, por mi torpeza o mi intensidad, te he hecho sentir mal o avergonzada con mi comportamiento, te pido perdón desde lo más profundo de mi ser. Soy humano,hombre (aunque me den asco jajaja) y me equivoco, pero quiero que estes segura de algo, mi misión en esta vida es cuidarte. Quiero ser tu escudo y protegerte de todo mal hasta el fin de mis días.

Deseo que este cumpleaños sea tan hermoso como tu sonrisa. Te mereces todo lo bueno de este mundo y más.

Con Amor, Stefano;

let index = 0;
function escribirCarta() {
    const contenedor = document.getElementById("texto-animado");
    if (index < texto.length) {
        let char = texto.charAt(index);
        contenedor.innerHTML += (char === '\n' ? '<br>' : char);
        index++;
        setTimeout(escribirCarta, 50); 
    }

}
