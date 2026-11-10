import React, { useEffect, useState } from 'react';
import './App.css';



import bleachImg from './assets/Bleach-image.png';
import inUteroImg from './assets/In_Utero-image.png';
import incesticideImg from './assets/Incesticide-image.png';
import liveAtReadingImg from './assets/Live_At_Reading-image.png';
import unpluggedImg from './assets/MTV_Unplugged_In_New_York-image.png';
import nevermindImg from './assets/Nevermind-image.png';

import kurtCobain from './assets/Kurt-Cobain.png';
import kristNovoselic from './assets/Krist-Novoselic.png';
import daveGrohl from './assets/Dave-Grohl.png';

import aaronBurckhard from './assets/Aaron.png';
import daleCrover from './assets/Dale-crover.png';
import daveFoster from './assets/Dave-Foster.png';
import chadChanning from './assets/Chad-Channing.png';
import jasonEverman from './assets/Jason-Everman.png';
import danPeters from './assets/Dan-Peters.png';



// export default = exporta App como componente principal.
// function App = componente principal de la aplicación.
export default function App() {


    // Estados del CRUD.
    // useState = guarda datos que pueden cambiar y volver a renderizar React.
    // Primer nombre = valor actual. Segundo nombre = función para cambiarlo.

    const [canciones, setCanciones] = useState([]);

    const [cargando, setCargando] = useState(true);

    const [busqueda, setBusqueda] = useState('');


    // Estados del formulario.
    // Cada estado guarda lo que escribo o selecciono en un campo.

    const [nuevoTitulo, setNuevoTitulo] = useState('');

    const [nuevoAlbum, setNuevoAlbum] = useState('');

    const [nuevoTipoAlbum, setNuevoTipoAlbum] = useState('');

    const [nuevoAnio, setNuevoAnio] = useState('');

    const [nuevoEstado, setNuevoEstado] = useState('');


    // Estados para editar.
    // editandoId guarda qué canción estoy editando. null = ninguna.

    const [editandoId, setEditandoId] = useState(null);

    const [tituloEdicion, setTituloEdicion] = useState('');

    const [albumEdicion, setAlbumEdicion] = useState('');

    const [tipoAlbumEdicion, setTipoAlbumEdicion] = useState('');

    const [anioEdicion, setAnioEdicion] = useState('');

    const [estadoEdicion, setEstadoEdicion] = useState('');

    const [albumSeleccionado, setAlbumSeleccionado] = useState(null);


    // Sección que se está mostrando.
    // MACHETE: ¿Cómo cambio/renderizo CRUD y Enciclopedia?
    // Los botones cambian este estado con setSeccionActiva().
    // Más abajo un ternario mira este valor y decide qué renderizar.

    const [seccionActiva, setSeccionActiva] = useState(
    () => {
        const seccionGuardada = localStorage.getItem(
            'nirvana_vault_seccion'
        );

        return seccionGuardada || 'inicio';
    }
);




    // Información de la enciclopedia.
    // Array de objetos: cada objeto guarda los datos de un álbum.
    // MACHETE: después uso map() para renderizar una card por álbum.
    

    const [cancionSeleccionada, setCancionSeleccionada] = useState();

    const cancionesNevermind = [
    //Lista de canciones del album Nevermind (1991)

    {
        id: 1,
        titulo: 'Smells Like Teen Spirit',

        descripcion: 'Canción de apertura de Nevermind (1991), reconocida por su riff de guitarra, sus cambios de intensidad y su energia caracteristica del grunge.',
        contexto: 'La cancion fue grabada en 1991 con el productor Butch Vig. Su titulo surgió cuando Kathleen Hanna escribió una frase en la pared de Kurt Cobain. Kurt pensó que hacia referencia a la rebeldia juvenil, pero en realidad era una broma relacionada con u ndesodorante llamado "Teen Spirit".',
        significado: 'La canción suele interpretarse como una expresion de frustración, inconformismo y apatia juvenil. Kurt Cobain habló de sus temas revolucionarios y de la necesidad de despertar a una generación que consideraba demasiado apatica. Sin embargo, su letra admite distintas interpretaciones.',

        spotify: 'https://open.spotify.com/intl-es/track/4CeeEOM32jQcH3eN9Q2dGj?si=15804d0b198f481f',
       
        youtube: 'https://www.youtube.com/watch?v=hTWKbfoikeg'
    },

    {

        id: 2,
        titulo: 'In Bloom',

        descripcion: 'Segunda canción de Nevermind (1991). Se caracteriza por sus guitarras distorsionadas, sus cambios entre estrofas más tranquilas y estribillos intensos, y las armonias vocales de Kurt Cobain y Dave Grohl.',
        contexto: 'In Bloom fue compuesta antes del lanzamiento de Nevermind. Nirvana grabó una primera version con Chad Channing en la bateria durante 1990, y posteriormente la volvió a grabar con Dave Grohl para el album de 1991. En 1992 se publicó un videoclip dirigido por Kevin Kerslake, que parodia las presentaciones musicales de la televisión de los años sesenta.',
        significado: 'La canción suele interpretarse como una critica a quienes disfrutan de la musica de una banda sin comprender sus mensajes. Su letra presenta la contradiccion de alguien que canta las canciones y disfruta de ellas, pero no entiende realmente lo que significan.',
        
        spotify: 'https://open.spotify.com/track/3sKLf8SmgbyIikCTBZty9F',
       
        youtube: 'https://www.youtube.com/watch?v=PbgKEjNBHqM'

    },

    {

        id: 3,
        titulo: 'Come As You Are',
        
        descripcion: 'La tercera canción de Nevermind (1991). Se caracteriza por su riff de guitarra con efecto chorus, su ritmo pausado y su atmosfera melancolica. Es una de las canciones más reconocidas de Nirvana.',
        contexto: 'Fue grabada durante las sesiones de Nevermind en 1991, con Butch Vig como productor. Se publicó como sensicllo en 1992 y contó con un videoclip dirigido por Kevin Kerslake. Su sonido más accesible contribuyó a ampliar la popularidad de Nirvana despues del éxito de Smells Like Teen Spirit.',
        significado: 'La canción presenta mensajes contradictorios relacionados con la identidad, la confianza y la aceptación. Puede interpretarse como una invitación a mostrarse como uno es, aunque sus frases ambiguas tambien sugieren dudas y contradicciones en las relaciones humanas. Kurt Cobain describió la canción como una composicion sobre las personas y las contradicciones de sus comportamientos.',

        spotify: 'https://open.spotify.com/track/2RsAajgo0g7bMCHxwH3Sk0',
       
        youtube: 'https://www.youtube.com/watch?v=vabnZ9-ex7o'

    },
    {

        id: 4,
        titulo: 'Breed',

        descripcion: 'Cuarta canción de Nevermind (1991). Se caracteriza por su ritmo acelerado, su bajo distorsionado y sus guitarras agresivas. Es una de las canciones del album que conserva una influencia más marcada del punk rock.',
        contexto: 'Breed existia antes de la grabación de Nevermind y originalmente se conocia como Imodium. Nirvana ya la interpretaba en directo durante 1989 y 1990. Posteriormente fue grabada con Dave Grohl en la bateria durante las sesiones de Nevermind, producidas por Butch Vig en 1991.',
        significado: 'La canción suele interpretarse como una critica a las expectativas tradicionales sobre las relaciones, el matrimonio y la formación de una familia. Su letra utiliza frases repetitivas y un tono desafiante para cuestionar la presión social de seguir un estilo de vida convencional.',

        spotify: 'https://open.spotify.com/track/3DvloR0yV79WpcefeqtWH7',
       
        youtube: 'https://www.youtube.com/watch?v=J6EDW5WFb2M'

    },

    {

        id: 5,
        titulo: 'Lithium',

        descripcion: 'Quinta canción de Nevermind (1991). Se caracteriza por sus cambios entre estrofas tranquilas y estribillos intensos, combinando guitarras limpias con distorsión. La interpretacion vocal de Kurt Cobain pasa de un tono contenido a momentos muchos más enérgicos.',
        contexto: 'Lithium fue compuesta por Kurt Cobain antes de las sesiones definitivas de Nevermind. Nirvana grabó una versión temprana durante las sesiones con Butch Vig en 1990 y posteriormente la volvió a grabar para el álbum de 1991, con Dave Grohl en la bateria. Fue publicada como sencillo en 1992.',
        significado: 'La canción presenta a un personaje que atraviesa dificultades emocionales y encuentra consuelo en la religión. Kurt Cobain explicó que imaginaba a una persona que, después de perder a alguien importante, recurría a la fe para evitar caer en la desesperación. El titulo también puede asociarle con el litio, utilizado como medicamento estabilizador del estado de ánimo, aunque la historia de la canción se centra principalmente en la busqueda de estabilidad emocional.',

        spotify: 'https://open.spotify.com/intl-es/track/2YodwKJnbPyNKe8XXSE9V7',
        
        youtube: 'https://www.youtube.com/watch?v=pkcJEvMcnEg'

    },

    {
    id: 6,
    titulo: 'Polly',

    descripcion: 'Sexta canción de Nevermind (1991). Se caracteriza por su instrumentación acústica, su ritmo lento y su átmosfera inquietante. A diferencia de las canciones más intensas del álbum, Polly utiliza un sonido sencillo y contenido para abordar una historia pertubadora.',
    contexto: 'Kurt Cobain escribió Polly inspirado en un caso real ocurrido en 1987, cuando una adolescente fue secuestrada y agredida por un hombre en el estado de Washington, Estados Unidos. La víctima consiguió escapar. Cobain decidió abordar la historia desde la perspectiva del agresor, utilizando la canción para retratar una situacion de violencia y abuso. La composicion existia antes de Nevermind y fue incluida en el album de 1991.',
    significado: 'Polly aborda la violencia, el abuso de poder y la deshumanizacion de una víctima. Su letra adopta la perspectiva del agresor, pero esto no significa que la canción justifique sus acciones. Por el contrario, esa elección narrativa permite mostrar de manera inquietante su cureldad y falta de empatía. La canción suele interpretarse como una denuncia de la violencia sexual y del sufrimiento que provoca.',

    spotify: 'https://open.spotify.com/track/3kzC0NDNlnP9qvRr9dGZhF',
    
    youtube: 'https://www.youtube.com/watch?v=DrlaVYKWeLU'

    },

    {

        id: 7,
        titulo: 'Territorial Pissings',

        descripcion: 'Séptima canción del album (1991). Se caracteriza por su ritmo acelerado, sus guitarras fuertemente distorsionadas y la interpretación vocal agresiva de Kurt Cobain. Su sonido refleja la influencia del pink rock en Nirvana y contrasta con las composiciones melódicas del álbum.',
        contexto: 'Territorial Pissings fue grabada durante las sesiones de Nevermind en 1991, bajo la producción de Butch Vig. La canción comienza con Krist Novoselic cantnado brevemente una parte de Get Together, una canción popularizada por The Youngbloods en los años sesenta. Después de esa introducción, Nirvana pasa abruptamente a una interpretación rápida y caótica.',
        significado: 'La canción suele interpretarse como una critica a los comportamientos territoriales, la agresividad y las actitudes machistas. Su letra también contiene referencias a la necesidad de cmabiar las ideas tradicionales sobre las relaciones entre hombres y mujeres. El tono irónico y desafiante refleja el rechazo de Kurt Cobain hacia determinadas normas sociales y formas de ejercer el poder.',

        spotify: 'https://open.spotify.com/track/3B4gVz0iyhwRboVbnqEzLk',
        youtube: 'https://www.youtube.com/watch?v=9yNPgx0swCM'

    },

    {

        id: 8,
        titulo: 'Drain You',

        descripcion: 'Octava canción del álbum (1991). Se caracteriza por sus guitarras distorsionadas, sus melodias vocales y sus cambios de intensidad. Una de sus partes más distintivas es la sección instrumental intermedia, que incorpora sonidos experimentales antes de regresar al riff principal.',
        contexto: 'Drain You fue compuesta por Kurt Cobain y grabada durante las sesiones de Nevermind en 1991, con Butch Vig como productor. Durante la grabación se utilizaron distintos efectos sonoros para construir su sección instrumental. Aunque no fue uno de los principales sencillos del álbum, se conritió en una canción habitual de los conciertos de Nirvana. Cobain llegó a mencionarla entre sus composiciones favoritas.',
        significado: 'La canción suele interpretarse como una reprentación de una relación intensa y absorbente, en la que dos personas desarrollan una dependencia emocional. Su letra utiliza imagenes corporales y metaforas inquietantes para expresar sentimientos de apego, vulnerabilidad y posesión. Tambien puede entenderse como una exploración de cómo una relacion puede consumir emocionalmente a quienes participan en ella.',

        spotify: 'https://open.spotify.com/intl-es/track/2styfa36pNOMd0MTP76Q0Z',
        youtube: 'https://www.youtube.com/watch?v=AJUpHxlJUNQ'

    },

    {

        id: 9,
        titulo: 'Lounge Act',

        descripcion: 'Novena canción del álbum (1991). Se caracteriza por su reconocible linea de bajo, sus guitarras distorsionadas y una interpretación vocal que aumenta progresivamente de intensidad. Combina elementos del rock alternativo y el punk con una estructura melódica.',
        contexto: 'Lounge Act fue grabada durante las sesiones de Nevermind en 1991, bajo la producción de Butch Vig. Su introducción de bajo, interpretada por Krist Novoselic, es uno de los elementos más distintivos de la composición. La canción también ha sido relacionada con experiencias sentimentales de Kurt Cobain anteriores al éxito comercial de Nirvana.',
        significado: 'La canción suele interpretarse como una reflexión sobre los celos, la inseguridad y los conflictos dentor de una relación sentimental. Su letra expresa sentimientos contradictorios entre el deseo de mantener una relación y la necesidad de independencia. También puede entenderse como una representación de las dificultades para confiar en otra persona y superar experiencias del pasado.',

        spotify: 'https://open.spotify.com/track/7glld4kxYHp61zIPtSVHNk',
        youtube: 'https://www.youtube.com/watch?v=dZqpol8Yrq8'

    },

    {
        id: 10,
        titulo: 'Stay Away',

        descripcion: 'Decima canción del álbum (1991). Se caracteriza por sus guitarras distorsionadas, su bateria enérgica y la interpretación vocal agresiva de Kurt Cobain. Su ritmo acelerado y su actitud desafiante reflejan la influencia del punk rock en el sonido de Nirvana.',
        contexto: 'Stay Away fue desarrollada originalmente bajo el titulo "Pay to Play", con el que Nirvana llegó a grabar una versión en 1990. Ese titulo hacia referencia a la práctica de exigir dinero a las bandas para permitirles actuar en determinados conciertos. La canción fue posteriormente reelaborada y grabada para Nevermind en 1991, con Dave Grohl en la bateria y Butch Vig como productor.',
        significado: 'La canción suele interpretarse como una expresión de rechazo hacia las presiones sociales, el conformismo y las expectativas impuestas por otras personas. Su letra transmite una actitud de rebeldia y distanciamiento frente a comportamientos considerados falsos o superficiales. El titulo original "Pay to Play", tambien permite relacionar sus origenes con una critica a determinadas practicas de la industria musical.',

        spotify: 'https://open.spotify.com/track/5p62DtOWxZB9yCtrQ4cwSo',
        
        youtube: 'https://www.youtube.com/watch?v=vnHm-u4IYuo'

    },

    {
        id: 11,
        titulo: 'On A Plain',

        descripcion: 'Undécima canción del álbum (1991). Se caracteriza por sus guitarras distorsionadas, su ritmo constante y sus armonías vocales. Combina una melodía accesible con la energía característica de Nirvana, mientras la interpretación de Kurt Cobain alterna entre momentos tranquilos y otros más intensos.',
        contexto: 'On a Plain fue grabada durante las sesiones de Nevermind en 1991, con Butch Vig como productor. Dave Grohl participó en las armonías vocales, aportando una de las características más reconocibles de la canción. Kurt Cobain trabajó en parte de su letra durante el proceso de grabación del álbum, utilizando frases personales, imágenes ambiguas y referencias a sus propias experiencias.',
        significado: 'La canción suele interpretarse como una reflexión sobre la identidad, la autoestima y las contradicciones personales. Su letra combina expresiones de confianza con sentimientos de inseguridad y confusión. También presenta un tono irónico y autorreferencial, ya que Cobain parece cuestionar su propia capacidad para expresar lo que siente y encontrar un significado claro en sus palabras.',

        spotify: 'https://open.spotify.com/intl-es/track/7ACz2RanNIfGzr4J3VDDbI',
        
        youtube: 'https://www.youtube.com/watch?v=c023U4oQGr4'

    },

    {

        id: 12,
        titulo: 'Something In The Way',

        descripcion: 'Duodécima canción del álbum (1991). Se caracteriza por su ritmo lento, su guitarra acústica y la interpretación vocal suave de Kurt Cobain. La incorporación de un violanchelo refuerza su átmosfera melancólica, convirtiendola en una de las composiciones más intimas y sombrias del álbum.',
        contexto: 'Something in the Way fue grabada durante las sesiones de Nevermind en 1991, con Butch Vig como productor. Cobain interpretó la canción de manera muy tranquila, utilizando una guitarra acústica y una voz casi susurrada. Posteriormente se incorporó un violonchelo interpretado por Kirk Canning. La canción está relacionada con recuerdos de la juventud de Cobain y con una historia sobre vivir debajo de un puente en Aberdeen, Washington, aunque los detalles de ese relato han sido cuestionados y no deben considerarse completamente autobiográficos.',
        significado: 'La canción suele interpretarse como una representación del aislamiento, la soledad y las dificultades para encontrar un lugar en el mundo. Su atmósfera transmite sentimientos de abandono, resignación y desconexión emocional. Aunque contiene elementos relacionados con las experiencias personales de Kurt Cobain, también utiliza imágenes simbólicas que permiten distintas interpretaciones.',

        spotify: 'https://open.spotify.com/intl-pt/track/1nFtiJxYdhtFfFtfXBv06s',
        
        youtube: 'https://www.youtube.com/watch?v=4VxdufqB9zg'
    },

    {

        id: 13,
        titulo: 'Endless, Nameless',

        descripcion: 'Pista oculta del album. Se caracteriza por sus guitarras extremadamente distorsionadas, sus cambios bruscos de intensidad y uan interpretación vocal caótica de Kurt Cobain. Su estructura experimental constrasta con las composiciones más melódicas del álbum.',
        contexto: '"Endless, Nameless" surgió durante las sesiones de grabación de Nevermind en 1991, después de que Kurt Cobain se frustrara mientras intentaba grabar Lithium. La banda comenzó una improvisación ruidosa que terminó convirtiéndose en esta composición. Fue incluida como pista oculta en determinadas ediciones del álbum, después de un largo período de silencio al finalizar "Something in the Way".',
        significado: 'La canción suele interpretarse como una expresión de frustración, rabia y liberación emocional. Su estructura improvisada, sus gritos y sus sonidos distorsionados transmiten una sensación de descontrol. A diferencia de otras composiciones de Nirvana, no presenta una narrativa claramente definida, por lo que su significado está especialmente abierto a interpretaciones.',

        spotify: 'https://open.spotify.com/intl-es/track/5KV9bNW1Ta4Z4PdHgu84TA?si=e73010f0d9eb46a3',
        
        youtube: 'https://youtu.be/uj1PagCfejs?si=SC_GoLnsA5ZHhVkB'

    }


    ];


    const albumesInformacion = [

        {
            id: 1,
            nombre: 'Bleach',
            imagen: bleachImg,
            anio: '1989',
            tipo: 'Álbum de estudio',
            canciones: 13,
            descripcion:
                'Primer álbum de estudio de Nirvana. Representa la etapa más cruda y pesada de la banda antes de alcanzar la fama mundial.',
            cancionesDestacadas:
                'About A Girl, Blew y School'
        },

        {
            id: 2,
            nombre: 'Nevermind',
            imagen: nevermindImg,
            anio: '1991',
            tipo: 'Álbum de estudio',
            canciones: 12,
            descripcion:
                'Segundo álbum de estudio de Nirvana. Fue el disco que convirtió a la banda en un fenómeno mundial.',
            cancionesDestacadas:
                'Smells Like Teen Spirit, Come As You Are, Lithium y In Bloom'
        },

        {
            id: 3,
            nombre: 'Incesticide',
            imagen: incesticideImg,
            anio: '1992',
            tipo: 'Álbum recopilatorio',
            canciones: 15,
            descripcion:
                'Recopilación de rarezas, lados B, demos y grabaciones realizadas en diferentes sesiones.',
            cancionesDestacadas:
                'Sliver, Aneurysm y Dive'
        },

        {
            id: 4,
            nombre: 'In Utero',
            imagen: inUteroImg,
            anio: '1993',
            tipo: 'Álbum de estudio',
            canciones: 12,
            descripcion:
                'Tercer y último álbum de estudio de Nirvana. Tiene una producción más áspera y un sonido menos pulido.',
            cancionesDestacadas:
                'Heart-Shaped Box, All Apologies y Rape Me'
        },

        {
            id: 5,
            nombre: 'MTV Unplugged in New York',
            imagen: unpluggedImg,
            anio: '1994',
            tipo: 'Álbum en vivo',
            canciones: 14,
            descripcion:
                'Registro acústico del concierto de Nirvana para MTV, con versiones diferentes de varias canciones de la banda.',
            cancionesDestacadas:
                'About A Girl, All Apologies y The Man Who Sold the World'
        },

        {
            id: 6,
            nombre: 'Live at Reading',
            imagen: liveAtReadingImg,
            anio: '2009',
            tipo: 'Álbum en vivo',
            canciones: 25,
            descripcion:
                'Registro del concierto de Nirvana en el festival de Reading de 1992.',
            cancionesDestacadas:
                'Breed, Aneurysm y Lithium'
        }

    ];


    // Canciones que aparecen al cargar por primera vez.
    // useEffect = ejecuta código después de renderizar.
    // [] al final = este efecto se ejecuta una vez al iniciar.

    useEffect(() => {

        console.log(
            'Nirvana Vault fue abierto. Cargando canciones...'
        );


        // setTimeout = espera 1,5 segundos antes de continuar.
        const timer = setTimeout(() => {

            // localStorage = guarda datos en el navegador.
            // getItem = recupera un dato guardado.



            const cancionesGuardadas = localStorage.getItem(
                'crud_nirvana_vault_db'
            );


            if (cancionesGuardadas) {

                setCanciones(
                    JSON.parse(cancionesGuardadas)
                );

            } else {

                const cancionesIniciales = [

                ];


                setCanciones(cancionesIniciales);

            }


            setCargando(false);

        }, 1500);


        return () => {

            clearTimeout(timer);

        };

    }, []);


    // Mostrar la búsqueda en la consola.
    // [busqueda] = se ejecuta cada vez que cambia busqueda.

    useEffect(() => {

        if (busqueda.trim() !== '') {

            console.log(
                `Buscando dentro de Nirvana Vault: "${busqueda}"`
            );

        }

    }, [busqueda]);


    // Guardar las canciones.
    // MACHETE: guardo el array en localStorage para no perderlo al recargar.
    // JSON.stringify convierte el array en texto.

    useEffect(() => {

        if (cargando) {

            return;

        }


        localStorage.setItem(
            'crud_nirvana_vault_db',
            JSON.stringify(canciones)
        );

    }, [canciones, cargando]);


    // Cancelar la edición con Escape.
    // addEventListener escucha teclas. Si es Escape, cancelo la edición.

    useEffect(() => {

        const manejarTeclaEscape = (evento) => {

            if (evento.key === 'Escape') {

                cancelarEdicion();

            }

        };


        window.addEventListener(
            'keydown',
            manejarTeclaEscape
        );


        return () => {

            window.removeEventListener(
                'keydown',
                manejarTeclaEscape
            );

        };

    }, []);


    // Agregar una canción.
    // MACHETE CREATE: creo un objeto con el formulario y lo agrego al array.

    const agregarCancion = (evento) => {

        // preventDefault = evita que el formulario recargue la página.
        evento.preventDefault();


        if (
            // ! = negación, trim() quita espacios y || significa "o".
            !nuevoTitulo.trim() ||
            !nuevoAlbum.trim() ||
            !nuevoTipoAlbum.trim() ||
            !nuevoAnio.trim() ||
            !nuevoEstado.trim()
        ) {

            alert(
                'Completa todos los campos antes de registrar una canción.'
            );

            return;

        }

        if (!/^\d{4}$/.test(nuevoAnio)) {

            alert(
                'El Año debe tener exactamente 4 digitos.'
            );

            return;
        }

        const anioNumero = Number(nuevoAnio);

        if (anioNumero < 1987 || anioNumero > 1994) {

            alert(
                'El año debe estar entre 1987 y 1994.'

            );

            return;
        }


        const nuevaCancion = {

            // Date.now() genera un número que uso como ID.
            id: Date.now(),

            titulo: nuevoTitulo,

            album: nuevoAlbum,

            tipoAlbum: nuevoTipoAlbum,

            anio: nuevoAnio,

            estado: nuevoEstado

        };


        setCanciones([

            // ... = spread: copia las canciones anteriores.
            ...canciones,

            nuevaCancion

        ]);


        limpiarFormulario();

    };


    // Limpiar el formulario.
    // Dejo los estados del formulario vacíos otra vez.

    const limpiarFormulario = () => {

        setNuevoTitulo('');

        setNuevoAlbum('');

        setNuevoTipoAlbum('');

        setNuevoAnio('');

        setNuevoEstado('');

    };


    // Activar la edición.
    // MACHETE: guardo el ID y copio los datos a los estados de edición.

    const activarEdicion = (cancion) => {

        setEditandoId(cancion.id);

        setTituloEdicion(cancion.titulo);

        setAlbumEdicion(cancion.album);

        setTipoAlbumEdicion(cancion.tipoAlbum);

        setAnioEdicion(cancion.anio);

        setEstadoEdicion(cancion.estado);

    };


    // Guardar los cambios.
    // MACHETE UPDATE: map() recorre las canciones y reemplaza la del mismo ID.

    const guardarEdicion = (id) => {

        if (
            !tituloEdicion.trim() ||
            !albumEdicion.trim() ||
            !tipoAlbumEdicion.trim() ||
            !anioEdicion.trim() ||
            !estadoEdicion.trim()
        ) {

            alert(
                'Los campos de edición no pueden quedar vacíos.'
            );

            return;

        }


        

        if (!/^\d{4}$/.test(anioEdicion)) {

            alert(
                'El año debe tener exactamente 4 digitos.'
            );
            return;

        }

        const anioEdicionNumero = Number(anioEdicion);

        if (
            anioEdicionNumero < 1987 ||
            anioEdicionNumero > 1994

        ) {
            alert(
                'El año debe estar entre 1987 y 1994.'

            );

            return;

        }


        // map() recorre el array y devuelve uno nuevo.
        const cancionesActualizadas = canciones.map(
            (cancion) => {

                if (cancion.id === id) {

                    return {

                        // ...cancion conserva los datos anteriores del objeto.
                        ...cancion,

                        titulo: tituloEdicion,

                        album: albumEdicion,

                        tipoAlbum: tipoAlbumEdicion,

                        anio: anioEdicion,

                        estado: estadoEdicion

                    };

                }


                return cancion;

            }
        );


        setCanciones(cancionesActualizadas);

        cancelarEdicion();

    };


    // Cancelar la edición.
    // null = dejo de editar; también limpio los campos de edición.

    const cancelarEdicion = () => {

        setEditandoId(null);

        setTituloEdicion('');

        setAlbumEdicion('');

        setTipoAlbumEdicion('');

        setAnioEdicion('');

        setEstadoEdicion('');

    };


    // Eliminar una canción.
    // MACHETE DELETE: filter() deja todas menos la canción con ese ID.

    const eliminarCancion = (id) => {

        const confirmar = window.confirm(
            '¿Seguro que querés eliminar esta canción de Nirvana Vault?'
        );


        if (!confirmar) {

            return;

        }


        const cancionesFiltradas = canciones.filter(
            // !== = distinto de.
            (cancion) => cancion.id !== id
        );


        setCanciones(cancionesFiltradas);


        if (editandoId === id) {

            cancelarEdicion();

        }

    };


    // Filtrar las canciones.
    // filter() deja las que coinciden con la búsqueda.
    // toLowerCase() ignora mayúsculas; includes() comprueba si contiene el texto.

    const cancionesFiltradas = canciones.filter(
        (cancion) => {

            const textoBuscado = busqueda.toLowerCase();


            return (

                cancion.titulo
                    .toLowerCase()
                    .includes(textoBuscado) ||

                cancion.album
                    .toLowerCase()
                    .includes(textoBuscado) ||

                cancion.tipoAlbum
                    .toLowerCase()
                    .includes(textoBuscado) ||

                cancion.anio
                    .toLowerCase()
                    .includes(textoBuscado) ||

                cancion.estado
                    .toLowerCase()
                    .includes(textoBuscado)

            );

        }
    );


    // return = JSX que React renderiza en pantalla.
    return (

        <div className="app-nirvana">


            {/* Encabezado. */}

            <header className="hero-nirvana">

                <div>

                    <h1>
                        🎸 Nirvana Vault
                    </h1>

                    <p>
                        Archivo de canciones y enciclopedia de álbumes de Nirvana.
                    </p>

                </div>

            </header>


            {/* Navegación. */}
            {/* MACHETE: los botones cambian seccionActiva y React renderiza otra vez. */}

            <nav className="navegacion-nirvana">

                <button
                type="button"
                className={
                    seccionActiva === 'inicio'
                    ? 'boton-seccion activo'
                    : 'boton-seccion'

                }
                onClick={
                    () =>
                        setSeccionActiva('inicio')

                }
                
                >
                    🏠 Inicio
                </button>

                <button
                    type="button"
                    className={
                        seccionActiva === 'historia'
                        ? 'boton-seccion activo'
                        : 'boton-seccion'

                    }

                    onClick={
                        () =>
                            setSeccionActiva('historia')

                    }
                >
                    📖 Historia

                </button>


                <button
                    type="button"
                    className={
                        seccionActiva === 'integrantes'
                        ? 'boton-seccion activo'
                        : 'boton-seccion'

                    }
                    onClick={
                        () =>
                            setSeccionActiva('integrantes')

                    }
                >
                    👥 Integrantes

                </button>

                

                <button
                    type="button"
                    className={
                        seccionActiva === 'canciones'
                            ? 'boton-seccion activo'
                            : 'boton-seccion'
                    }
                    onClick={
                        () =>
                            setSeccionActiva('canciones')
                    }
                >
                    🎵 Canciones
                </button>


                <button
                    type="button"
                    className={
                        seccionActiva === 'enciclopedia'
                            ? 'boton-seccion activo'
                            : 'boton-seccion'
                    }
                    onClick={
                        () =>
                            setSeccionActiva('enciclopedia')
                    }
                >
                    📚 Enciclopedia de álbumes
                </button>

            </nav>


            <main className="contenedor-principal">

                {/* Seccion inicio:*/}

                {seccionActiva === 'inicio' && (
                    <section className="seccion-inicio">

                    <div className="inicio-presentacion">

                    <h2>Bienvenido a Nirvana Vault</h2>

                    <p>
                        Un archivo digital dedicado a Nirvana,
                        sus canciones y sus álbumes.
                    </p>

                </div>

                




                <div className="inicio-opciones">

                    <article className="inicio-card">

                 <h3>🎵 Canciones</h3>

                  <p>
                      Explora, registra, edita y elimina canciones
                     dentro del archivo.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSeccionActiva('canciones')}
                 >
                    Explorar canciones
                 </button>

                    </article>


                    <article className="inicio-card">

                 <h3>📚 Enciclopedia</h3>

                    <p>
                     Descubre información sobre los álbumes
                      y lanzamientos de Nirvana.
                  </p>

                    <button
                        type="button"
                       onClick={() => setSeccionActiva('enciclopedia')}
                     >
                       Ver enciclopedia
                      </button>

                            </article>

                        </div>

                    </section>
                )}

                
                {/* Historia de la banda */}

                {seccionActiva === 'historia' && (

                    <section className="seccion-historica">

                        <div className="historia-presentacion">

                            <h2>📖 Historia de Nirvana</h2>

                            <p>

                                Un recorrido por la formación, evolución, éxito y legado de Nirvana.

                            </p>

                            
                        </div>

                       


                        <div className='timeline-historia'>

                            <article className='evento-historia'>
                                <span className="anio-historia">1987</span>

                                <div className="contenido-evento">

                                    <h3>Formación de Nirvana</h3>

                                            <p>
                                                Kurt Cobain y Krist Novoselic forman la banda
                                                en Aberdeen, Washington, junto al baterista
                                                Aaron Burckhard.
                                                </p>

                                               <p>
                                                    Cobain quería dedicarse a la música y había
                                                    encontrado en el punk una forma de libertad
                                                    y expresión. Después de conocer a Novoselic,
                                                    ambos comenzaron a desarrollar el proyecto
                                                    que terminaría convirtiéndose en Nirvana.
                                                 </p>

                                                   <p>
                                                      Kurt buscaba un nombre que sonara bello y
                                                       diferente de los nombres agresivos habituales
                                                      del punk. El nombre "Nirvana" también estaba
                                                        relacionado con la idea de liberarse del
                                                     sufrimiento y del mundo exterior, algo que
                                                      Cobain relacionaba con su propia visión del
                                                      punk rock.
                                                      </p>

                                 </div>

                                </article>

                        
                             <div className="timeline-historia">

                    


                    <article className="evento-historia">
                        <span className="anio-historia">1988</span>

                        <div className="contenido-evento">

                            <h3>Primeras grabaciones</h3>

                            <p>
                                Nirvana graba un demo de diez canciones con
                                el productor Jack Endino. Ese material ayuda
                                a que la banda comience a relacionarse con
                                el sello Sub Pop.
                            </p>

                        </div>
                    </article>


                    <article className="evento-historia">
                        <span className="anio-historia">1989</span>

                        <div className="contenido-evento">

                            <h3>Lanzamiento de Bleach</h3>

                            <p>
                                Nirvana publica Bleach, su primer álbum de
                                estudio, mediante el sello Sub Pop.
                            </p>

                        </div>
                    </article>


                    <article className="evento-historia">
                        <span className="anio-historia">1990</span>

                        <div className="contenido-evento">

                            <h3>Dave Grohl se une a Nirvana</h3>

                            <p>
                                Dave Grohl entra como baterista y se forma
                                la alineación más conocida de Nirvana junto
                                a Kurt Cobain y Krist Novoselic.
                            </p>

                        </div>
                    </article>


                    <article className="evento-historia">
                        <span className="anio-historia">1991</span>

                        <div className="contenido-evento">

                            <h3>Nevermind</h3>

                            <p>
                                Nirvana publica Nevermind, su segundo álbum
                                de estudio. Su éxito lleva a la banda a
                                alcanzar reconocimiento internacional.
                            </p>

                        </div>
                    </article>


                    <article className="evento-historia">
                        <span className="anio-historia">1992</span>

                        <div className="contenido-evento">

                            <h3>Incesticide</h3>

                            <p>
                                Se publica Incesticide, una recopilación
                                que reúne grabaciones anteriores, rarezas
                                y lados B de Nirvana.
                            </p>

                        </div>
                    </article>


                    <article className="evento-historia">
                        <span className="anio-historia">1993</span>

                        <div className="contenido-evento">

                            <h3>In Utero y MTV Unplugged</h3>

                            <p>
                                Nirvana publica In Utero, su tercer álbum
                                de estudio. Ese mismo año también graba su
                                presentación para MTV Unplugged en Nueva York.
                            </p>

                        </div>
                    </article>


                    <article className="evento-historia">
                        <span className="anio-historia">1994</span>

                        <div className="contenido-evento">

                            <h3>Final de Nirvana</h3>

                            <p>
                                En 1994 termina la actividad de Nirvana como
                                banda. Posteriormente continúan publicándose
                                grabaciones y material de archivo.
                            </p>

                        </div>
                    </article>


                    <article className="evento-historia">
                        <span className="anio-historia">2014</span>

                        <div className="contenido-evento">

                            <h3>Rock & Roll Hall of Fame</h3>

                            <p>
                               Nirvana es incorporada al Rock & Roll Hall of Fame,
                                reconociendo su impacto y legado dentro del grunge,
                                el rock alternativo y la música de los años 90.
                            </p>

                        </div>
                    </article>

                </div>
                            
                        </div>

                        </section>
                    
                
                )}

                 {seccionActiva === 'integrantes' && (
                    
                    <section className="seccion-integrantes">

                        <div className="integrantes-presentacion">

                            <h2>👥 Integrantes de Nirvana</h2>

                            <p>
                                Conoce a los integrantes que formaron la alineación más iconica de Nirvana.

                            </p>



                        </div>

                        <div className="grupo-integrantes">

                            <h3>Formación Icónica</h3>

                            <div className="integrantes-grid">

                                <article className="integrante-card">
                                    <img
                                        src={kurtCobain}
                                        alt="Kurt Cobain"
                                        className="integrante-imagen"
                                        />
                                
                                    <h4>Kurt Cobain</h4>

                                    <p>
                                        Voz y Guitarra

                                    </p>

                                    <p className="integrante-description">
                                        Vocalista, guitarrista y principal compositor de Nirvana.
                                        Fue uno de los fundadores de la banda junto a Krist Novoselic.
                                    </p>

                                    <span>
                                        1987 - 1994

                                    </span>

                                </article>

                                <article className="integrante-card">

                                    <img
                                        src={kristNovoselic}
                                         alt="Krist Novoselic"
                                         className="integrante-imagen"
                                         />

                                    <h4>Krist Novoselic</h4>

                                    <p>
                                        Bajista
                                    </p>

                                    <p className="integrante-description">
                                        Bajista y co-fundador de Nirvana. Formó parte de la banda desde sus comienzos hasta su final.
                                    </p>

                                    <span>
                                        1987 - 1994
                                    </span>

                                </article>


                                <article className="integrante-card">

                                    <img
                                        src={daveGrohl}
                                         alt="Dave Grohl"
                                         className="integrante-imagen"
                                         />                                    

                                    <h4>Dave Grohl</h4>

                                    <p>
                                        Bateria y Coros
                                    </p>

                                    <p className="integrante-description">

                                        Se incorporó como baterista en Nirvana en 1990 y participó en la etapa de mayor reconocimiento a nivel internacional de Nirvana.
                                    </p>

                                    <span>
                                        1990 - 1994
                                    </span>

                                </article>

                                

                            </div>
                            
                        </div>

                        <div className="grupo-integrantes-extra">

                            <h3>Otros integrantes de Nirvana</h3>

                            <div className="integrantes-grid">

                                <article className="integrante-card">

                                    <img
                                        src={aaronBurckhard}
                                         alt="Aaron Burckhard"
                                         className="integrante-imagen"
                                         />                                    

                                    <h4>Aaron Burckhard</h4>

                                    <p>
                                        Bateria
                                    </p>

                                    <p className="integrante-description">

                                        Primer baterista de Nirvana durante sus comienzos.
                                        Formó parte de la banda en su etapa inicial de 1987.
                                    </p>

                                    <span>
                                        1987
                                    </span>

                                </article>

                                <article className="integrante-card">

                                    <h4>Dale Crover</h4>

                                    <img
                                        src={daleCrover}
                                         alt="Dale Crover"
                                         className="integrante-imagen"
                                         />


                                    <p>
                                        Bateria
                                    </p>

                                    <p className="integrante-description">
                                        Baterista de Melvins que colaboró con Nirvana en algunas de sus primeras grabaciones de Estudio.

                                    </p>

                                    <span>
                                        1988
                                    </span>


                                </article>

                                <article className="integrante-card">

                                    <img
                                        src={daveFoster}
                                         alt="Dave Foster"
                                         className="integrante-imagen"
                                         />


                                    <h4>Dave Foster</h4>

                                    <p>
                                        Bateria
                                    </p>

                                    <p className="integrante-description">
                                        Ocupó brevemente el puesto de baterista durante los primeros años de la banda.
                                    </p>

                                    <span>
                                        1988
                                    </span>

                                </article>


                                <article className="integrante-card">

                                    <img
                                        src={chadChanning}
                                         alt="Chad Channing"
                                         className="integrante-imagen"
                                         />


                                    <h4>Chad Channing</h4>

                                    <p>
                                        Bateria
                                    </p>

                                    <p className="integrante-description">
                                        Baterista de Nirvana durante la etapa de Bleach. Album publicado el 1989. Participó en gran parte de la grabación del album.
                                    </p>

                                    <span>
                                        1988 - 1990
                                    </span>


                                </article>

                                <article className="integrante-card">

                                    <img
                                        src={jasonEverman}
                                         alt="Jason Everman"
                                         className="integrante-imagen"
                                         />



                                    <h4>Jason Everman</h4>

                                    <p>
                                        Guitarra
                                    </p>

                                    <p className="integrante-description">
                                        Se incorporó como segundo guitarrista y acompañó a Nirvana durante parte de la gira de Bleach.

                                    </p>

                                    <span>
                                        1989
                                    </span>


                                </article>

                                <article className="integrante-card">

                                    <img
                                        src={danPeters}
                                         alt="Dan Peters"
                                         className="integrante-imagen"
                                         />


                                    <h4>Dan Peters</h4>

                                    <p>
                                        Bateria
                                    </p>

                                    <p className="integrante-description">
                                        Tocó brevemente con Nirvana en 1990, durante el periodo anterior a la llegada de Dave Grohl.

                                    </p>

                                    <span>
                                        1990
                                    </span>


                                </article>


                            </div>


                        </div>

                        

                    </section>
                    
                )}


                {/* MACHETE: ¿Cómo hice que renderizara la enciclopedia?
                    Uso renderizado condicional con un ternario.
                    Si seccionActiva es 'canciones' -> CRUD.
                    Si no -> Enciclopedia.
                    ? = si se cumple / : = si no. */}

                {seccionActiva === 'canciones' && (


                    <>


                        {/* Buscador. */}
                        {/* value = valor actual. onChange actualiza con evento.target.value. */}

                        <section className="panel">

                            <label htmlFor="busqueda">

                                <strong>
                                    Buscar canción
                                </strong>

                            </label>


                            <input
                                type="search"
                                id="busqueda"
                                placeholder="Buscar por título, álbum, tipo, año o estado..."
                                value={busqueda}
                                onChange={
                                    (evento) =>
                                        setBusqueda(evento.target.value)
                                }
                            />

                        </section>


                        {/* Formulario. */}
                        {/* onSubmit llama a agregarCancion al enviar el formulario. */}

                        <section className="panel">

                            <h2>
                                Registrar una nueva canción
                            </h2>


                            <form
                                className="formulario-entidad"
                                onSubmit={agregarCancion}
                            >


                                <input
                                    type="text"
                                    placeholder="Título"
                                    value={nuevoTitulo}
                                    onChange={
                                        (evento) =>
                                            setNuevoTitulo(evento.target.value)
                                    }
                                />


                                <select
                                    value={nuevoAlbum}
                                    onChange={
                                        (evento) =>
                                            setNuevoAlbum(evento.target.value)
                                    }
                                >

                                    <option value="">
                                        Selecciona un álbum
                                    </option>

                                    <option value="Bleach">
                                        Bleach
                                    </option>

                                    <option value="Nevermind">
                                        Nevermind
                                    </option>

                                    <option value="Incesticide">
                                        Incesticide
                                    </option>

                                    <option value="In Utero">
                                        In Utero
                                    </option>

                                    <option value="MTV Unplugged in New York">
                                        MTV Unplugged in New York
                                    </option>

                                    <option value="Live at Reading">
                                        Live at Reading
                                    </option>

                                </select>


                                <select
                                    value={nuevoTipoAlbum}
                                    onChange={
                                        (evento) =>
                                            setNuevoTipoAlbum(evento.target.value)
                                    }
                                >

                                    <option value="">
                                        Selecciona el tipo de álbum
                                    </option>

                                    <option value="Estudio">
                                        Estudio
                                    </option>

                                    <option value="Recopilatorio">
                                        Recopilatorio
                                    </option>

                                    <option value="En vivo">
                                        En vivo
                                    </option>

                                </select>


                                <input
                                    type="text"
                                    inputMode="numeric"
                                    maxLength="4"
                                    placeholder="Año"
                                    value={nuevoAnio}
                                    onChange={
                                        (evento) => {

                                            const valor = evento.target.value;

                                            if (/^\d*$/.test(valor)) {
                                                setNuevoAnio(valor);

                                            }
                                        }
                                    }
                                />


                                <select
                                    value={nuevoEstado}
                                    onChange={
                                        (evento) =>
                                            setNuevoEstado(evento.target.value)
                                    }
                                >

                                    <option value="">
                                        Selecciona un estado
                                    </option>

                                    <option value="Publicada">
                                        Publicada
                                    </option>

                                    <option value="Favorita">
                                        Favorita
                                    </option>

                                    <option value="Pendiente">
                                        Pendiente
                                    </option>

                                    <option value="Archivada">
                                        Archivada
                                    </option>

                                </select>


                                <button type="submit">

                                    ➕ Registrar canción

                                </button>

                            </form>

                        </section>


                        {/* Cantidad. */}
                        {/* .length = cantidad de canciones filtradas. */}

                        <section className="encabezado-lista">

                            <h2>
                                Canciones registradas
                            </h2>

                            <span>
                                {cancionesFiltradas.length} canciones
                            </span>

                        </section>


                        {/* Lista de canciones. */}
                        {/* Ternario: carga -> mensaje; sin resultados -> vacío; si hay -> tabla. */}

                        {cargando ? (

                            <p className="mensaje-carga">

                                🎸 Cargando canciones de Nirvana...

                            </p>

                        ) : cancionesFiltradas.length === 0 ? (

                            <p className="mensaje-vacio">

                                No se encontraron canciones.

                            </p>

                        ) : (

                            <section className="tabla-contenedor">

                                <table>

                                    <thead>

                                        <tr>

                                            <th>
                                                ID
                                            </th>

                                            <th>
                                                Título
                                            </th>

                                            <th>
                                                Álbum
                                            </th>

                                            <th>
                                                Tipo de álbum
                                            </th>

                                            <th>
                                                Año
                                            </th>

                                            <th>
                                                Estado
                                            </th>

                                            <th>
                                                Acciones
                                            </th>

                                        </tr>

                                    </thead>


                                    <tbody>

                                        {/* MACHETE READ: map() crea una fila por cada canción. */}
                                        {cancionesFiltradas.map(
                                            (cancion) => (

                                                <tr key={cancion.id}>


                                                    <td>
                                                        {cancion.id}
                                                    </td>


                                                    <td>

                                                        {editandoId === cancion.id ? (

                                                            <input
                                                                type="text"
                                                                value={tituloEdicion}
                                                                onChange={
                                                                    (evento) =>
                                                                        setTituloEdicion(
                                                                            evento.target.value
                                                                        )
                                                                }
                                                            />

                                                        ) : (

                                                            cancion.titulo

                                                        )}

                                                    </td>


                                                    <td>

                                                        {editandoId === cancion.id ? (

                                                            <select
                                                                value={albumEdicion}
                                                                onChange={
                                                                    (evento) =>
                                                                        setAlbumEdicion(
                                                                            evento.target.value
                                                                        )
                                                                }
                                                            >

                                                                <option value="Bleach">
                                                                    Bleach
                                                                </option>

                                                                <option value="Nevermind">
                                                                    Nevermind
                                                                </option>

                                                                <option value="Incesticide">
                                                                    Incesticide
                                                                </option>

                                                                <option value="In Utero">
                                                                    In Utero
                                                                </option>

                                                                <option value="MTV Unplugged in New York">
                                                                    MTV Unplugged in New York
                                                                </option>

                                                                <option value="Live at Reading">
                                                                    Live at Reading
                                                                </option>

                                                            </select>

                                                        ) : (

                                                            cancion.album

                                                        )}

                                                    </td>


                                                    <td>

                                                        {editandoId === cancion.id ? (

                                                            <select
                                                                value={tipoAlbumEdicion}
                                                                onChange={
                                                                    (evento) =>
                                                                        setTipoAlbumEdicion(
                                                                            evento.target.value
                                                                        )
                                                                }
                                                            >

                                                                <option value="Estudio">
                                                                    Estudio
                                                                </option>

                                                                <option value="Recopilatorio">
                                                                    Recopilatorio
                                                                </option>

                                                                <option value="En vivo">
                                                                    En vivo
                                                                </option>

                                                            </select>

                                                        ) : (

                                                            cancion.tipoAlbum

                                                        )}

                                                    </td>


                                                    <td>

                                                        {editandoId === cancion.id ? (

                                                            <input
                                                                type="text"
                                                                value={anioEdicion}
                                                                onChange={
                                                                    (evento) =>
                                                                        setAnioEdicion(
                                                                            evento.target.value
                                                                        )
                                                                }
                                                            />

                                                        ) : (

                                                            cancion.anio

                                                        )}

                                                    </td>


                                                    <td>

                                                        {editandoId === cancion.id ? (

                                                            <select
                                                                value={estadoEdicion}
                                                                onChange={
                                                                    (evento) =>
                                                                        setEstadoEdicion(
                                                                            evento.target.value
                                                                        )
                                                                }
                                                            >

                                                                <option value="Publicada">
                                                                    Publicada
                                                                </option>

                                                                <option value="Favorita">
                                                                    Favorita
                                                                </option>

                                                                <option value="Pendiente">
                                                                    Pendiente
                                                                </option>

                                                                <option value="Archivada">
                                                                    Archivada
                                                                </option>

                                                            </select>

                                                        ) : (

                                                            cancion.estado

                                                        )}

                                                    </td>


                                                    <td className="acciones">

                                                        {editandoId === cancion.id ? (

                                                            <>

                                                                <button
                                                                    type="button"
                                                                    className="boton-guardar"
                                                                    onClick={
                                                                        () =>
                                                                            guardarEdicion(
                                                                                cancion.id
                                                                            )
                                                                    }
                                                                >
                                                                    💾 Guardar
                                                                </button>


                                                                <button
                                                                    type="button"
                                                                    className="boton-cancelar"
                                                                    onClick={cancelarEdicion}
                                                                >
                                                                    ✖ Cancelar
                                                                </button>

                                                            </>

                                                        ) : (

                                                            <button
                                                                type="button"
                                                                className="boton-editar"
                                                                onClick={
                                                                    () =>
                                                                        activarEdicion(
                                                                            cancion
                                                                        )
                                                                }
                                                            >
                                                                ✏️ Editar
                                                            </button>

                                                        )}


                                                        <button
                                                            type="button"
                                                            className="boton-eliminar"
                                                            onClick={
                                                                () =>
                                                                    eliminarCancion(
                                                                        cancion.id
                                                                    )
                                                            }
                                                        >
                                                            🗑️ Borrar
                                                        </button>

                                                    </td>

                                                </tr>

                                            )
                                        )}

                                    </tbody>

                                </table>

                            </section>

                        )}

                    </>


                )}


{seccionActiva === 'enciclopedia' && (

    <section className="seccion-enciclopedia">


                        {/* Título de la enciclopedia. */}

                        <div className="encabezado-enciclopedia">

                            <h2>
                                📚 Enciclopedia de álbumes de Nirvana
                            </h2>

                            <p>
                                Información general de los álbumes incluidos dentro de Nirvana Vault.
                            </p>

                        </div>


                        {/* Estadísticas. */}

                        <div className="estadisticas-albumes">

                            <article className="estadistica-album">

                                <strong>
                                    6
                                </strong>

                                <span>
                                    Álbumes registrados
                                </span>

                            </article>


                            <article className="estadistica-album">

                                <strong>
                                    3
                                </strong>

                                <span>
                                    Álbumes de estudio
                                </span>

                            </article>


                            <article className="estadistica-album">

                                <strong>
                                    2
                                </strong>

                                <span>
                                    Álbumes en vivo
                                </span>

                            </article>


                            <article className="estadistica-album">

                                <strong>
                                    1
                                </strong>

                                <span>
                                    Álbum recopilatorio
                                </span>

                            </article>

                        </div>


                        {/* Álbumes. */}
                        {/* MACHETE: ¿Cómo rendericé la enciclopedia?
                            map() recorre albumesInformacion y crea una card por objeto.
                            album.nombre, album.anio, etc. leen sus propiedades. */}
                            {albumSeleccionado === null ? (

                        <div className="lista-albumes">

                            {albumesInformacion.map(
                                (album) => (

                                    <article
                                        className="card-album"
                                        key={album.id}
                                        onClick={() => {

                                            if (album.id === 2) {

                                                setAlbumSeleccionado(album);

                                                
                                            }
                                        }}
                                    >

                                        {/* Portada del álbum. */}
                                        <img
                                            src={album.imagen}
                                            alt={`Portada de ${album.nombre}`}
                                            className="portada-album"
                                        />

                                        <div className="cabecera-card-album">

                                            <span>
                                                {album.anio}
                                            </span>

                                            <small>
                                                {album.tipo}
                                            </small>

                                        </div>


                                        <h3>
                                            {album.nombre}
                                        </h3>


                                        <p>
                                            {album.descripcion}
                                        </p>


                                        <div className="datos-album">

                                            <p>

                                                <strong>
                                                    Cantidad de canciones:
                                                </strong>

                                                {' '}

                                                {album.canciones}

                                            </p>


                                            <p>

                                                <strong>
                                                    Canciones destacadas:
                                                </strong>

                                                {' '}

                                                {album.cancionesDestacadas}

                                            </p>

                                        </div>

                                    </article>

                                )
                            )}

                        </div>

                    ) : (

                        <section className="detalle-album">

                            <button
                                type="button"
                                onClick={() => {

                                    setAlbumSeleccionado(null);

                                }}
                            >
                                ← Volver a la enciclopedia
                            </button>

                            <div className="cabecera-detalle-album">

                                <img
                                    src={albumSeleccionado.imagen}
                                    alt={`Portada de ${albumSeleccionado.nombre}`}
                                />

                                <div>

                                    <h2>
                                        {albumSeleccionado.nombre}
                                    </h2>

                                    <p>
                                        {albumSeleccionado.anio}
                                    </p>

                                    <p>
                                        {albumSeleccionado.tipo}
                                    </p>

                                    <p>
                                        {albumSeleccionado.descripcion}
                                    </p>

                                </div>

                            </div>

                            <div className="tracklist-album">
                                {/* Lista de canciones del album Nevermind. */}

                                <h3>
                                    🎵 Lista de canciones
                                </h3>

                                {cancionesNevermind.map(
                                    (cancion) => (

                                        <div
                                            className="tracklist-cancion-contenedor"
                                            key={cancion.id}

                                        >

                                            <button
                                                type="button"
                                                className="tracklist-cancion"
                                                aria-expanded={cancionSeleccionada === cancion.id}
                                                onClick={() => {

                                                    setCancionSeleccionada(
                                                        cancionSeleccionada === cancion.id
                                                        ? null
                                                        : cancion.id

                                                    );

                                                }}

                                        
                                            >

                                                <span>
                                                    {String(cancion.id).padStart(2, '0')}
                                                </span>

                                                <p>
                                                    {cancion.titulo}
                                                </p>
                                                
                                                <span className="flecha-cancion">
                                                    {cancionSeleccionada === cancion.id ? '▲' : '▼'}
                                                </span>

                                        </button>

                                        {cancionSeleccionada === cancion.id && (

                                            <div className="informacion-cancion">

                                                <h4>
                                                    {cancion.titulo}
                                                </h4>

                                                {cancion.descripcion && (

                                                    <div>

                                                        <h5>
                                                            Descripcion
                                                        </h5>

                                                        <p>
                                                            {cancion.descripcion}
                                                        </p>

                                                    </div>

                                                )}

                                                {cancion.contexto && (

                                                    <div>

                                                        <h5>
                                                            Contexto
                                                        </h5>

                                                        <p>
                                                            {cancion.contexto}
                                                        </p>


                                                    </div>

                                                )}

                                                {cancion.significado && (

                                                    <div>

                                                        <h5>
                                                            Significado e Interpretacion
                                                        </h5>

                                                        <p>
                                                            {cancion.significado}
                                                        </p>

                                                    </div>

                                                )}


                                                {cancion.enlace && (

                                                    <div>

                                                        <h5>
                                                            Enlaces de las canciones
                                                        </h5>
                                                    </div>
                                                )}

                                                {!cancion.descripcion && !cancion.contexto && !cancion.significado && (

                                                    <p>
                                                        Proximamente: informacion de esta cancion.
                                                    </p>

                                                )}
                                                {(cancion.spotify?.trim() || cancion.youtube?.trim()) && (
                                                    <div className="enlaces-cancion">
                                                        {cancion.spotify?.trim() && (
                                                            <a
                                                                className="enlace-plataforma"
                                                                href={cancion.spotify}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                aria-label={`Escuchar ${cancion.titulo} en Spotify`}
                                                            >
                                                                Spotify
                                                            </a>
                                                        )}

                                                        {cancion.youtube?.trim() && (
                                                            <a
                                                                className="enlace-plataforma"
                                                                href={cancion.youtube}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                aria-label={`Ver ${cancion.titulo} en YouTube`}
                                                            >
                                                                YouTube
                                                            </a>
                                                        )}
                                                    </div>
                                                )}

                                            </div>

                                        )}
                                    
                                </div>
                                    
                                    )
                                )}
                            </div>

                        </section>

                    )}

                    </section>

                )}

            </main>
            <footer className="footer-nirvana">
    <div className="footer-contenido">
        <div>
            <h3>NIRVANA VAULT</h3>
            <p>Archivo y enciclopedia dedicada a Nirvana.</p>
        </div>

        <div className="footer-enlaces">

    <button
        type="button"
        onClick={() => {
            setSeccionActiva('inicio');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }}
    >
        Inicio
    </button>

    <button
        type="button"
        onClick={() => {
            setSeccionActiva('historia')
            window.scrollTo({
                top: 0,
                behavior: 'smooth'

            });
        }}
    >
        Historia
    </button>

    <button
        type="button"
        onClick={() => {
            setSeccionActiva('integrantes')
            window.scrollTo({
                top: 0,
                behavior: 'smooth'

            });

        }}

    >
        Integrantes
    </button>

    <button
        type="button"
        onClick={() => {
            setSeccionActiva('canciones');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }}
    >
        Canciones
    </button>

    <button
        type="button"
        onClick={() => {
            setSeccionActiva('enciclopedia');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }}
    >
        Enciclopedia
    </button>

</div>
    </div>

    <div className="footer-inferior">
        <p>© 2026 Nirvana Vault</p>
        <p>Desarrollado por Noxx</p>
    </div>
</footer>

        </div>

        

    );


}
