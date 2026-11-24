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


    const cancionesInUtero = [
        {
            "id": 1,
            "titulo": "Serve the Servants",
            "descripcion": "La guitarra abre con una disonancia que desemboca en una melodía reconocible. El estribillo conserva elementos pop bajo la textura áspera de la grabación.",
            "contexto": "Abre In Utero, registrado con Steve Albini en Pachyderm Studios en 1993, después del éxito masivo de Nevermind.",
            "significado": "La letra enfrenta la imagen pública del músico con recuerdos de su familia y su juventud. Puede entenderse como una contestación a las expectativas de que Cobain representara a toda una generación, junto con un intento de tomar distancia del resentimiento familiar.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Serve%20the%20Servants",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Serve%20the%20Servants"
        },
        {
            "id": 2,
            "titulo": "Scentless Apprentice",
            "descripcion": "Un patrón de batería contundente y un riff repetitivo dominan la canción; la voz alcanza registros extremos en los estribillos.",
            "contexto": "La composición acredita a los tres integrantes y parte de una idea musical de Dave Grohl. La novela El perfume de Patrick Süskind proporciona su referencia literaria.",
            "significado": "El personaje de la novela sirve para explorar la exclusión y la incapacidad de establecer vínculos humanos. La insistencia rítmica y las imágenes sensoriales desagradables transmiten alienación sin convertir la letra en una confesión personal.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Scentless%20Apprentice",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Scentless%20Apprentice"
        },
        {
            "id": 3,
            "titulo": "Heart-Shaped Box",
            "descripcion": "El arpegio de las estrofas crea una tensión que se libera mediante acordes distorsionados y una melodía vocal ascendente.",
            "contexto": "Fue el primer sencillo de In Utero en 1993. Scott Litt realizó la mezcla publicada en el álbum y Anton Corbijn dirigió su videoclip.",
            "significado": "Las imágenes corporales y la metáfora de quedar atrapado permiten interpretar la canción como una relación de fascinación, dependencia y vulnerabilidad. La coexistencia de atracción y malestar impide reducirla a una simple canción de amor.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Heart-Shaped%20Box",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Heart-Shaped%20Box"
        },
        {
            "id": 4,
            "titulo": "Rape Me",
            "descripcion": "Una progresión de acordes muy reconocible pasa de una voz contenida a un estribillo de gran intensidad. La repetición convierte la frase central en una confrontación.",
            "contexto": "Cobain explicó públicamente que pretendía escribir una canción contra la violación. Se publicó junto a All Apologies como sencillo en 1993.",
            "significado": "La letra confronta al agresor y puede leerse como una afirmación de resistencia ante la violencia. Su lenguaje incómodo busca denunciar el abuso, no celebrarlo; también permite una lectura más amplia sobre la explotación y la pérdida de control personal.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Rape%20Me",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Rape%20Me"
        },
        {
            "id": 5,
            "titulo": "Frances Farmer Will Have Her Revenge on Seattle",
            "descripcion": "Las estrofas de guitarra contenida desembocan en un estribillo de acordes densos, con una melodía que mantiene la tensión emocional.",
            "contexto": "El título remite a Frances Farmer, actriz estadounidense cuya vida estuvo marcada por conflictos públicos e internamientos psiquiátricos. Algunos relatos populares sobre ella son discutidos.",
            "significado": "La figura de Farmer funciona como símbolo de la pérdida de autonomía y del castigo social a quien desafía expectativas. La canción imagina una reivindicación mediante un tono de indignación y una mezcla de tristeza y desafío.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Frances%20Farmer%20Will%20Have%20Her%20Revenge%20on%20Seattle",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Frances%20Farmer%20Will%20Have%20Her%20Revenge%20on%20Seattle"
        },
        {
            "id": 6,
            "titulo": "Dumb",
            "descripcion": "La guitarra limpia, la voz relativamente suave y el violonchelo de Kera Schaley forman un contraste con las pistas más abrasivas del álbum.",
            "contexto": "La composición ya existía antes de las sesiones de In Utero y fue interpretada en Reading en 1992, así como en MTV Unplugged en 1993.",
            "significado": "El narrador contrapone la felicidad con la inseguridad y se pregunta si necesita comprender el mundo para sentirse bien. La calma musical puede interpretarse como alivio provisional, en vez de una resolución definitiva del malestar.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Dumb",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Dumb"
        },
        {
            "id": 7,
            "titulo": "Very Ape",
            "descripcion": "Una guitarra cortante y un ritmo rápido concentran la canción en una forma breve, sin extensas secciones instrumentales.",
            "contexto": "Se encuentra en la segunda mitad de In Utero y conserva la estética directa de las sesiones de 1993.",
            "significado": "La voz narrativa exagera su seguridad y sus contradicciones. Esto permite escuchar la letra como una sátira de la arrogancia, de la pose intelectual y de la tendencia a presentar una identidad más coherente de lo que realmente es.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Very%20Ape",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Very%20Ape"
        },
        {
            "id": 8,
            "titulo": "Milk It",
            "descripcion": "La guitarra utiliza figuras disonantes y silencios repentinos, mientras la batería refuerza los saltos entre contención y explosión.",
            "contexto": "La grabación con Albini representa el costado experimental de In Utero y también apareció como pista complementaria del sencillo Heart-Shaped Box.",
            "significado": "Las metáforas de parasitismo y deterioro corporal pueden representar relaciones que consumen a sus participantes. La forma musical fragmentada refuerza una lectura de dependencia y pérdida de equilibrio sin establecer una explicación única.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Milk%20It",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Milk%20It"
        },
        {
            "id": 9,
            "titulo": "Pennyroyal Tea",
            "descripcion": "Las estrofas de guitarra relativamente limpia dejan paso a un estribillo fuerte, donde la voz transmite agotamiento.",
            "contexto": "La canción recibió una mezcla alternativa de Scott Litt para su sencillo previsto en 1994, retirado entonces y reeditado en 2014.",
            "significado": "La letra combina referencias al cansancio físico y emocional con imágenes de una búsqueda de alivio. La melancolía no equivale a una recomendación de ninguna sustancia ni permite diagnosticar al compositor; expresa un estado narrativo de desorientación.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Pennyroyal%20Tea",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Pennyroyal%20Tea"
        },
        {
            "id": 10,
            "titulo": "Radio Friendly Unit Shifter",
            "descripcion": "Los acoples y efectos de guitarra forman una introducción ruidosa que desemboca en un ritmo de gran regularidad.",
            "contexto": "El título juega con el vocabulario comercial de la industria discográfica; la banda utilizó la canción para abrir conciertos de la gira de In Utero.",
            "significado": "La contradicción entre un título orientado a las ventas y una grabación difícil de domesticar permite leerla como una sátira de las expectativas comerciales. Las preguntas de la letra añaden incertidumbre sobre la identidad artística.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Radio%20Friendly%20Unit%20Shifter",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Radio%20Friendly%20Unit%20Shifter"
        },
        {
            "id": 11,
            "titulo": "Tourette’s",
            "descripcion": "La velocidad, los cambios abruptos y la voz casi ininteligible acercan esta pista al hardcore punk.",
            "contexto": "Fue interpretada en Reading antes de aparecer en In Utero, mientras la banda preparaba material nuevo.",
            "significado": "La canción privilegia la descarga sonora sobre una narración clara. El título no debe tomarse como una descripción clínica del síndrome de Tourette; su forma puede entenderse como una representación artística de tensión y ruptura.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Tourette%E2%80%99s",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Tourette%E2%80%99s"
        },
        {
            "id": 12,
            "titulo": "All Apologies",
            "descripcion": "Una figura de guitarra circular y el violonchelo acompañan una melodía que se vuelve más intensa sin perder su carácter contemplativo.",
            "contexto": "La mezcla publicada en In Utero fue realizada por Scott Litt; la canción también integró el sencillo compartido con Rape Me y el concierto acústico de MTV.",
            "significado": "La letra admite lecturas sobre culpa, cansancio ante las expectativas ajenas y aceptación de las propias limitaciones. Su cierre repetitivo sugiere una búsqueda de reconciliación, aunque deja abierta la relación entre resignación y serenidad.",
            "spotify": "https://open.spotify.com/search/Nirvana%20All%20Apologies",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20All%20Apologies"
        }
    ];

    const cancionesExtrasInUtero = [
        {
            "id": 13,
            "titulo": "Gallons of Rubbing Alcohol Flow Through the Strip",
            "descripcion": "Una improvisación extensa alterna pasajes dispersos, comentarios vocales y cambios de dinámica, sin seguir una estructura de sencillo.",
            "contexto": "Fue registrada en Brasil en 1993 y apareció como pista adicional en ciertas ediciones internacionales de In Utero.",
            "significado": "El lenguaje absurdo y las interrupciones muestran el juego espontáneo entre los músicos. Conviene interpretarla como exploración colectiva más que como relato autobiográfico coherente.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Gallons%20of%20Rubbing%20Alcohol%20Flow%20Through%20the%20Strip",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Gallons%20of%20Rubbing%20Alcohol%20Flow%20Through%20the%20Strip"
        },
        {
            "id": 14,
            "titulo": "Marigold",
            "descripcion": "La guitarra y la voz de Dave Grohl crean una textura íntima, apoyada por una melodía contenida.",
            "contexto": "Grohl compuso la canción y la grabación de Nirvana apareció como cara B de Heart-Shaped Box en 1993.",
            "significado": "Las imágenes breves y la melodía sugieren cercanía e incertidumbre. La letra deja espacio para distintas lecturas afectivas sin explicar una historia completa.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Marigold",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Marigold"
        },
        {
            "id": 15,
            "titulo": "Moist Vagina - 2013 Mix",
            "descripcion": "Los acordes repetidos y los contrastes de volumen convierten una idea breve en una descarga abrasiva.",
            "contexto": "La composición apareció como cara B de All Apologies / Rape Me; esta versión corresponde a las mezclas de aniversario de 2013.",
            "significado": "El lenguaje provocador y la repetición desafían las convenciones de la música comercial. Su exageración no exige una interpretación literal.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Moist%20Vagina%20-%202013%20Mix",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Moist%20Vagina%20-%202013%20Mix"
        },
        {
            "id": 16,
            "titulo": "Sappy - 2013 Mix",
            "descripcion": "Una melodía accesible convive con guitarras distorsionadas y un solo que mantiene el carácter melódico.",
            "contexto": "La grabación de 1993 apareció como pista no anunciada de No Alternative; la edición de aniversario presenta una mezcla de 2013.",
            "significado": "La imagen del cuidado condicionado permite una lectura sobre el control disfrazado de protección y sobre la dificultad de reconocer una situación restrictiva.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Sappy%20-%202013%20Mix",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Sappy%20-%202013%20Mix"
        },
        {
            "id": 17,
            "titulo": "I Hate Myself and Want to Die - 2013 Mix",
            "descripcion": "El riff pesado y las frases vocales fragmentarias producen un contraste entre agresividad y absurdo.",
            "contexto": "La grabación se publicó en The Beavis and Butt-Head Experience en 1993; esta es una mezcla posterior de aniversario.",
            "significado": "El título provocador y la letra inconexa admiten una lectura de humor negro. No debe entenderse automáticamente como una declaración literal de intención del autor.",
            "spotify": "https://open.spotify.com/search/Nirvana%20I%20Hate%20Myself%20and%20Want%20to%20Die%20-%202013%20Mix",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20I%20Hate%20Myself%20and%20Want%20to%20Die%20-%202013%20Mix"
        },
        {
            "id": 18,
            "titulo": "Pennyroyal Tea - Scott Litt Mix",
            "descripcion": "Esta mezcla alternativa permite comparar el balance de la voz, la guitarra y la sección rítmica con la edición habitual. Las estrofas de guitarra relativamente limpia dejan paso a un estribillo fuerte, donde la voz transmite agotamiento.",
            "contexto": "Preparada para el sencillo de 1994. No se trata de una composición nueva, sino de otra presentación de la grabación de 1993.",
            "significado": "La letra combina referencias al cansancio físico y emocional con imágenes de una búsqueda de alivio. La melancolía no equivale a una recomendación de ninguna sustancia ni permite diagnosticar al compositor; expresa un estado narrativo de desorientación.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Pennyroyal%20Tea%20-%20Scott%20Litt%20Mix",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Pennyroyal%20Tea%20-%20Scott%20Litt%20Mix"
        },
        {
            "id": 19,
            "titulo": "Heart-Shaped Box - Original Steve Albini 1993 Mix",
            "descripcion": "Esta mezcla alternativa permite comparar el balance de la voz, la guitarra y la sección rítmica con la edición habitual. El arpegio de las estrofas crea una tensión que se libera mediante acordes distorsionados y una melodía vocal ascendente.",
            "contexto": "Alternativa a la mezcla de Scott Litt publicada en el álbum. No se trata de una composición nueva, sino de otra presentación de la grabación de 1993.",
            "significado": "Las imágenes corporales y la metáfora de quedar atrapado permiten interpretar la canción como una relación de fascinación, dependencia y vulnerabilidad. La coexistencia de atracción y malestar impide reducirla a una simple canción de amor.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Heart-Shaped%20Box%20-%20Original%20Steve%20Albini%201993%20Mix",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Heart-Shaped%20Box%20-%20Original%20Steve%20Albini%201993%20Mix"
        },
        {
            "id": 20,
            "titulo": "All Apologies - Original Steve Albini 1993 Mix",
            "descripcion": "Esta mezcla alternativa permite comparar el balance de la voz, la guitarra y la sección rítmica con la edición habitual. Una figura de guitarra circular y el violonchelo acompañan una melodía que se vuelve más intensa sin perder su carácter contemplativo.",
            "contexto": "Recupera la mezcla de Albini de 1993. No se trata de una composición nueva, sino de otra presentación de la grabación de 1993.",
            "significado": "La letra admite lecturas sobre culpa, cansancio ante las expectativas ajenas y aceptación de las propias limitaciones. Su cierre repetitivo sugiere una búsqueda de reconciliación, aunque deja abierta la relación entre resignación y serenidad.",
            "spotify": "https://open.spotify.com/search/Nirvana%20All%20Apologies%20-%20Original%20Steve%20Albini%201993%20Mix",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20All%20Apologies%20-%20Original%20Steve%20Albini%201993%20Mix"
        }
    ];

    const cancionesBleach = [
        {
            "id": 1,
            "titulo": "Blew",
            "descripcion": "El bajo de Krist Novoselic establece una figura grave que da paso a una guitarra de acordes pesados. Las estrofas mantienen la tensión antes de que la voz se vuelva más abierta en el estribillo.",
            "contexto": "La grabación pertenece a las sesiones con Jack Endino en Seattle y la composición dio nombre al EP británico de diciembre de 1989.",
            "significado": "Las imágenes de presión y de evasión permiten leer la letra como una búsqueda de autonomía. La insistencia del riff convierte esa sensación de encierro en un elemento musical, sin que sea necesario atribuirle una experiencia biográfica concreta.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Blew",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Blew"
        },
        {
            "id": 2,
            "titulo": "Floyd the Barber",
            "descripcion": "La guitarra y el bajo construyen un motivo amenazante, acompañado por golpes secos y una voz que alterna narración y exclamación.",
            "contexto": "La grabación temprana cuenta con Dale Crover en batería. El título y los personajes remiten a la comedia televisiva estadounidense The Andy Griffith Show.",
            "significado": "La canción transforma un entorno televisivo familiar en una pesadilla ficticia. El contraste puede entenderse como una sátira de la aparente inocencia de la vida comunitaria y de la confianza depositada en figuras conocidas.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Floyd%20the%20Barber",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Floyd%20the%20Barber"
        },
        {
            "id": 3,
            "titulo": "About A Girl",
            "descripcion": "Una progresión de acordes sencilla, un bajo melódico y un estribillo accesible distinguen esta composición del resto de Bleach. El solo conserva la economía melódica del tema.",
            "contexto": "Cobain la escribió durante su relación con Tracy Marander. Su admiración por The Beatles ayuda a entender la orientación pop de una canción que contrastaba con la estética pesada del sello Sub Pop. Más tarde abrió el concierto acústico de MTV.",
            "significado": "La voz narrativa busca compañía y comprensión, pero también manifiesta resistencia a las obligaciones de una relación. El afecto convive con el interés propio y la dificultad de corresponder a la otra persona. No constituye una declaración romántica incondicional: su melodía luminosa contrasta con una relación marcada por expectativas desiguales.",
            "spotify": "https://open.spotify.com/search/Nirvana%20About%20A%20Girl",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20About%20A%20Girl"
        },
        {
            "id": 4,
            "titulo": "School",
            "descripcion": "Una figura de guitarra reiterada domina la composición; los cambios de intensidad y el solo aportan movimiento a una estructura deliberadamente escueta.",
            "contexto": "Forma parte del repertorio de la etapa independiente y continuó apareciendo en conciertos después del éxito de Nevermind.",
            "significado": "La referencia a volver a la escuela puede representar la sensación de quedar atrapado en jerarquías, grupos excluyentes y reglas informales. La letra mínima transmite esa frustración mediante insistencia, más que mediante una historia detallada.",
            "spotify": "https://open.spotify.com/search/Nirvana%20School",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20School"
        },
        {
            "id": 5,
            "titulo": "Love Buzz",
            "descripcion": "El motivo de bajo dirige la canción mientras la guitarra aporta adornos y distorsión, transformando su origen psicodélico en una interpretación de rock pesado.",
            "contexto": "Es una composición de Robbie van Leeuwen para Shocking Blue. Nirvana la adaptó y la publicó como su primer sencillo en 1988, con Big Cheese en la cara B.",
            "significado": "La letra expresa una fascinación amorosa insistente y el deseo de que el afecto sea reconocido. La interpretación de Nirvana añade una energía física que intensifica esa sensación sin cambiar la autoría de la composición.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Love%20Buzz",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Love%20Buzz"
        },
        {
            "id": 6,
            "titulo": "Paper Cuts",
            "descripcion": "El tempo contenido y las guitarras densas producen una sensación de amenaza; la voz aumenta en intensidad hasta romper la calma inicial.",
            "contexto": "La pista conserva la batería de Dale Crover de las primeras sesiones de 1988, incorporadas posteriormente al álbum debut.",
            "significado": "Las imágenes de encierro y de una autoridad familiar hostil sugieren una infancia marcada por el aislamiento. La interpretación no requiere considerar cada detalle como autobiográfico: la música construye por sí misma un espacio opresivo.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Paper%20Cuts",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Paper%20Cuts"
        },
        {
            "id": 7,
            "titulo": "Negative Creep",
            "descripcion": "Un riff repetitivo de gran velocidad sostiene una voz deliberadamente áspera y una sección rítmica contundente.",
            "contexto": "Pertenece al repertorio de Bleach y sobrevivió en las actuaciones de la banda durante su etapa de mayor fama.",
            "significado": "El narrador adopta una etiqueta despectiva para describirse, exagerando la negatividad hasta convertirla en una identidad. Puede escucharse como una burla de los juicios externos y también como una expresión de rechazo hacia uno mismo.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Negative%20Creep",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Negative%20Creep"
        },
        {
            "id": 8,
            "titulo": "Scoff",
            "descripcion": "La batería marca un pulso regular mientras la guitarra insiste en motivos cortos y la voz enfatiza el carácter desafiante del estribillo.",
            "contexto": "Fue registrada durante la etapa de trabajo con Jack Endino para el debut de Sub Pop.",
            "significado": "La letra presenta una relación conflictiva en la que el narrador exige atención y manifiesta resentimiento. La repetición musical ayuda a representar una discusión que parece incapaz de resolverse.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Scoff",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Scoff"
        },
        {
            "id": 9,
            "titulo": "Swap Meet",
            "descripcion": "El sonido pesado sirve de marco a una narración más concreta que otras letras del álbum, con una guitarra que alterna figuras cortantes y acordes sostenidos.",
            "contexto": "La composición apareció en Bleach en 1989, antes de que la banda incorporara a Dave Grohl.",
            "significado": "El retrato de una pareja vinculada a la venta de artesanías combina pequeños hábitos, afecto y conflictos. Los detalles cotidianos permiten entender la relación como una convivencia imperfecta en la que coexisten dependencia y autonomía.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Swap%20Meet",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Swap%20Meet"
        },
        {
            "id": 10,
            "titulo": "Mr. Moustache",
            "descripcion": "La figura de guitarra rápida exige precisión rítmica y contrasta con la voz burlona, mientras bajo y batería refuerzan sus cambios de acento.",
            "contexto": "La canción pertenece a la primera etapa de Nirvana y muestra su cercanía tanto al punk como al rock pesado.",
            "significado": "La caricatura del personaje permite cuestionar actitudes machistas y certezas impuestas por la tradición. El tono exagerado evita que la letra funcione como un retrato psicológico literal.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Mr.%20Moustache",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Mr.%20Moustache"
        },
        {
            "id": 11,
            "titulo": "Sifting",
            "descripcion": "El ritmo pausado y las guitarras de sonido denso dan espacio a una voz que pasa de la contención a la protesta.",
            "contexto": "Cierra la secuencia de once canciones de la edición inicial de Bleach; las ediciones de trece pistas añaden material al final.",
            "significado": "Las alusiones a figuras que dictan normas pueden leerse como rechazo a una autoridad que espera obediencia automática. La reiteración de las frases transmite resistencia y cansancio ante esa presión.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Sifting",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Sifting"
        },
        {
            "id": 12,
            "titulo": "Big Cheese",
            "descripcion": "Los acordes graves acompañan una interpretación vocal sarcástica y una estructura de punk de cambios marcados.",
            "contexto": "Fue publicada junto a Love Buzz en el sencillo debut de 1988 y pasó a formar parte de las ediciones ampliadas de Bleach.",
            "significado": "La expresión del título alude a una figura importante o poderosa. La canción puede interpretarse como una crítica a la necesidad de agradar a quienes controlan oportunidades y decisiones.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Big%20Cheese",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Big%20Cheese"
        },
        {
            "id": 13,
            "titulo": "Downer",
            "descripcion": "El tempo acelerado, los cambios de acento y la voz urgente concentran la energía en una pieza muy breve.",
            "contexto": "Registrada con Dale Crover en 1988, aparece tanto en ediciones ampliadas de Bleach como en Incesticide.",
            "significado": "La acumulación de referencias políticas y sociales parece burlarse de las fórmulas prefabricadas de obediencia y moralidad. Su velocidad hace que la crítica se perciba como una descarga antes que como un discurso ordenado.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Downer",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Downer"
        }
    ];

    const cancionesIncesticide = [
        {
            "id": 1,
            "titulo": "Dive",
            "descripcion": "El bajo y la guitarra construyen una figura grave que se abre en un estribillo de gran energía.",
            "contexto": "Fue publicada como cara B de Sliver en 1990, en una grabación de la etapa anterior a la llegada de Dave Grohl.",
            "significado": "La insistencia de la voz puede representar deseo, entrega o una necesidad de contacto. La repetición deja ambiguo si esa entrega proporciona libertad o implica perder el control.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Dive",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Dive"
        },
        {
            "id": 2,
            "titulo": "Sliver",
            "descripcion": "Una línea de bajo muy reconocible sostiene una melodía vocal sencilla y un estribillo que aumenta de intensidad.",
            "contexto": "El sencillo de 1990 cuenta con Dan Peters en batería y antecede a la formación estable con Dave Grohl.",
            "significado": "La letra adopta la mirada de un niño que se siente incómodo al quedar al cuidado de sus abuelos. Su desenlace cotidiano transforma el miedo en una anécdota humorística sobre la separación y la seguridad familiar.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Sliver",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Sliver"
        },
        {
            "id": 3,
            "titulo": "Stain",
            "descripcion": "La guitarra áspera y la batería rápida acompañan una melodía vocal que alterna afirmaciones y un estribillo insistente.",
            "contexto": "Apareció en el EP Blew de 1989 antes de ser recuperada en Incesticide.",
            "significado": "El retrato de alguien definido por lo que rechaza o desconoce puede entenderse como una crítica a las etiquetas sociales. La voz transmite tanto aislamiento como una posible burla del personaje descrito.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Stain",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Stain"
        },
        {
            "id": 4,
            "titulo": "Been a Son",
            "descripcion": "La melodía directa y los acordes rápidos producen un contraste entre ligereza musical y crítica social.",
            "contexto": "La versión de Incesticide procede de una sesión para la BBC, mientras una grabación anterior apareció en el EP Blew.",
            "significado": "La letra enumera expectativas impuestas a una hija y las contrapone al deseo de que hubiera nacido varón. Esa ironía denuncia la discriminación de género y la presión familiar por ajustarse a papeles predeterminados.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Been%20a%20Son",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Been%20a%20Son"
        },
        {
            "id": 5,
            "titulo": "Turnaround",
            "descripcion": "La banda adapta la estructura compacta y el ritmo nervioso de Devo a una interpretación de guitarra distorsionada.",
            "contexto": "Es una versión de Devo registrada para la BBC en 1990 y recuperada en Incesticide.",
            "significado": "La invitación a cambiar de perspectiva permite cuestionar la imagen que alguien tiene de sí mismo y de su entorno. La exageración y la energía punk intensifican el tono satírico del original.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Turnaround",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Turnaround"
        },
        {
            "id": 6,
            "titulo": "Molly’s Lips",
            "descripcion": "Dos acordes sostienen una melodía luminosa y un ritmo veloz, mostrando cómo una estructura mínima puede resultar memorable.",
            "contexto": "Es una composición de The Vaselines, grupo escocés admirado por Cobain, grabada por Nirvana para la BBC.",
            "significado": "El afecto juguetón y la insistencia del estribillo permiten leerla como una celebración de la atracción. Su sencillez musical forma parte de su sentido y contrasta con las imágenes oscuras de otras canciones del repertorio.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Molly%E2%80%99s%20Lips",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Molly%E2%80%99s%20Lips"
        },
        {
            "id": 7,
            "titulo": "Son of a Gun",
            "descripcion": "Una progresión pop y un ritmo acelerado dan a la versión un carácter alegre y directo.",
            "contexto": "Otra adaptación de The Vaselines, procedente de las sesiones de radio que aportaron material a Incesticide.",
            "significado": "La letra contrapone una sensación de alegría con la ausencia de alguien importante. El tono ligero permite representar la dependencia afectiva sin convertirla necesariamente en una tragedia.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Son%20of%20a%20Gun",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Son%20of%20a%20Gun"
        },
        {
            "id": 8,
            "titulo": "(New Wave) Polly",
            "descripcion": "Frente a la versión acústica de Nevermind, esta lectura utiliza batería rápida y guitarra eléctrica para crear una tensión más inmediata.",
            "contexto": "La versión proviene de una sesión para la BBC en 1991 y recibió un título que distingue su arreglo.",
            "significado": "La historia conserva su denuncia de la violencia y del abuso de poder. El cambio instrumental modifica la experiencia auditiva, pero no convierte la narración desde la perspectiva del agresor en una aprobación de sus actos.",
            "spotify": "https://open.spotify.com/search/Nirvana%20%28New%20Wave%29%20Polly",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20%28New%20Wave%29%20Polly"
        },
        {
            "id": 9,
            "titulo": "Beeswax",
            "descripcion": "La guitarra cambia de figuras y acentos mientras la voz juega con imágenes difíciles de conectar entre sí.",
            "contexto": "Procede del demo de 1988 registrado con Jack Endino y Dale Crover, anterior a Bleach.",
            "significado": "El lenguaje corporal y absurdo genera incomodidad y evita una historia lineal. Puede apreciarse como experimentación verbal y sonora, sin atribuir un significado biográfico a cada imagen.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Beeswax",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Beeswax"
        },
        {
            "id": 10,
            "titulo": "Downer",
            "descripcion": "El tempo acelerado, los cambios de acento y la voz urgente concentran la energía en una pieza muy breve.",
            "contexto": "Registrada con Dale Crover en 1988, aparece tanto en ediciones ampliadas de Bleach como en Incesticide.",
            "significado": "La acumulación de referencias políticas y sociales parece burlarse de las fórmulas prefabricadas de obediencia y moralidad. Su velocidad hace que la crítica se perciba como una descarga antes que como un discurso ordenado.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Downer",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Downer"
        },
        {
            "id": 11,
            "titulo": "Mexican Seafood",
            "descripcion": "La velocidad y la distorsión hacen de esta composición una pieza de punk breve y deliberadamente desagradable.",
            "contexto": "Forma parte de las primeras grabaciones de 1988 con Dale Crover que posteriormente se recuperaron en Incesticide.",
            "significado": "Las imágenes de malestar corporal y enfermedad producen humor grotesco. La letra desafía la expectativa de que una canción popular deba presentar asuntos agradables o una narración convencional.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Mexican%20Seafood",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Mexican%20Seafood"
        },
        {
            "id": 12,
            "titulo": "Hairspray Queen",
            "descripcion": "El bajo tiene un papel central y la voz recurre a registros y sonidos poco habituales, sobre una estructura irregular.",
            "contexto": "Pertenece al demo de 1988, que muestra una faceta experimental anterior al sonido conocido de Nevermind.",
            "significado": "Las referencias a relaciones y deseos aparecen de forma fragmentaria y exagerada. La interpretación vocal puede resultar tan importante como las palabras, haciendo que la ambigüedad sea parte del efecto artístico.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Hairspray%20Queen",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Hairspray%20Queen"
        },
        {
            "id": 13,
            "titulo": "Aero Zeppelin",
            "descripcion": "Los cambios de riff y de intensidad combinan elementos del hard rock con una actitud punk, en una estructura más extensa que varias piezas del demo.",
            "contexto": "Grabada en 1988, su título combina alusiones a Aerosmith y Led Zeppelin.",
            "significado": "La letra permite cuestionar la repetición de fórmulas y la imitación dentro de la cultura musical. La ironía aumenta porque la propia composición utiliza recursos del rock pesado que parece poner en discusión.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Aero%20Zeppelin",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Aero%20Zeppelin"
        },
        {
            "id": 14,
            "titulo": "Big Long Now",
            "descripcion": "El tempo lento, la guitarra de sonido denso y la voz distante construyen una atmósfera de espera e incertidumbre.",
            "contexto": "Procede de la etapa de grabación de Bleach, aunque terminó publicándose en Incesticide.",
            "significado": "Las preguntas y las imágenes de percepción sugieren aislamiento e incomunicación. La prolongación instrumental permite explorar esa inquietud sin ofrecer una solución narrativa definitiva.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Big%20Long%20Now",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Big%20Long%20Now"
        },
        {
            "id": 15,
            "titulo": "Aneurysm",
            "descripcion": "La introducción crece gradualmente hasta desembocar en un riff rápido y un estribillo de gran intensidad.",
            "contexto": "La composición acredita a Cobain, Novoselic y Grohl. Una versión apareció como cara B de Smells Like Teen Spirit; Incesticide incluye otra de una sesión de radio.",
            "significado": "La letra vincula fascinación y malestar mediante imágenes de intensidad física. Puede leerse como una relación absorbente, mientras el crecimiento instrumental reproduce la sensación de perder el control.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Aneurysm",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Aneurysm"
        }
    ];

    const cancionesUnplugged = [
        {
            "id": 1,
            "titulo": "About A Girl",
            "descripcion": "En esta interpretación acústica, la melodía y el fraseo vocal adquieren mayor protagonismo al reducirse el peso de la distorsión del arreglo de estudio. La interpretación de apertura presenta la progresión melódica de Bleach desde una perspectiva íntima.",
            "contexto": "Interpretada en la sesión de MTV grabada en Nueva York en noviembre de 1993 y publicada en 1994. Cobain la escribió durante su relación con Tracy Marander. Su admiración por The Beatles ayuda a entender la orientación pop de una canción que contrastaba con la estética pesada del sello Sub Pop. Más tarde abrió el concierto acústico de MTV.",
            "significado": "La voz narrativa busca compañía y comprensión, pero también manifiesta resistencia a las obligaciones de una relación. El afecto convive con el interés propio y la dificultad de corresponder a la otra persona. No constituye una declaración romántica incondicional: su melodía luminosa contrasta con una relación marcada por expectativas desiguales.",
            "spotify": "https://open.spotify.com/search/Nirvana%20About%20A%20Girl%20MTV%20Unplugged",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20About%20A%20Girl%20MTV%20Unplugged"
        },
        {
            "id": 2,
            "titulo": "Come As You Are",
            "descripcion": "En esta interpretación acústica, la melodía y el fraseo vocal adquieren mayor protagonismo al reducirse el peso de la distorsión del arreglo de estudio. La dinámica del acompañamiento permite escuchar con claridad los cambios de intensidad de la composición.",
            "contexto": "Interpretada en la sesión de MTV grabada en Nueva York en noviembre de 1993 y publicada en 1994. Fue grabada durante las sesiones de Nevermind en 1991, con Butch Vig como productor. Se publicó como sensicllo en 1992 y contó con un videoclip dirigido por Kevin Kerslake. Su sonido más accesible contribuyó a ampliar la popularidad de Nirvana despues del éxito de Smells Like Teen Spirit.",
            "significado": "La canción presenta mensajes contradictorios relacionados con la identidad, la confianza y la aceptación. Puede interpretarse como una invitación a mostrarse como uno es, aunque sus frases ambiguas tambien sugieren dudas y contradicciones en las relaciones humanas. Kurt Cobain describió la canción como una composicion sobre las personas y las contradicciones de sus comportamientos.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Come%20As%20You%20Are%20MTV%20Unplugged",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Come%20As%20You%20Are%20MTV%20Unplugged"
        },
        {
            "id": 3,
            "titulo": "Jesus Doesn’t Want Me for a Sunbeam",
            "descripcion": "El acordeón de Krist Novoselic y las guitarras acústicas aportan una textura cercana al folk.",
            "contexto": "Interpretada en la sesión de MTV grabada en Nueva York en noviembre de 1993 y publicada en 1994. La canción adapta una composición de The Vaselines, cuya obra Cobain difundió entre sus seguidores.",
            "significado": "La voz narrativa rechaza una imagen religiosa idealizada de pureza y obediencia. El arreglo contenido convierte la ironía en una reflexión íntima.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Jesus%20Doesn%E2%80%99t%20Want%20Me%20for%20a%20Sunbeam%20MTV%20Unplugged",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Jesus%20Doesn%E2%80%99t%20Want%20Me%20for%20a%20Sunbeam%20MTV%20Unplugged"
        },
        {
            "id": 4,
            "titulo": "The Man Who Sold the World",
            "descripcion": "El riff reconocible de guitarra conserva una textura eléctrica dentro del arreglo acústico y la voz mantiene un carácter contemplativo.",
            "contexto": "Interpretada en la sesión de MTV grabada en Nueva York en noviembre de 1993 y publicada en 1994. Es una composición de David Bowie publicada originalmente en 1970; Nirvana la reinterpretó para MTV.",
            "significado": "El encuentro con una figura que parece reflejar al narrador sugiere desdoblamiento, identidad y extrañeza ante uno mismo.",
            "spotify": "https://open.spotify.com/search/Nirvana%20The%20Man%20Who%20Sold%20the%20World%20MTV%20Unplugged",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20The%20Man%20Who%20Sold%20the%20World%20MTV%20Unplugged"
        },
        {
            "id": 5,
            "titulo": "Pennyroyal Tea",
            "descripcion": "En esta interpretación acústica, la melodía y el fraseo vocal adquieren mayor protagonismo al reducirse el peso de la distorsión del arreglo de estudio. La dinámica del acompañamiento permite escuchar con claridad los cambios de intensidad de la composición.",
            "contexto": "Interpretada en la sesión de MTV grabada en Nueva York en noviembre de 1993 y publicada en 1994. La canción recibió una mezcla alternativa de Scott Litt para su sencillo previsto en 1994, retirado entonces y reeditado en 2014.",
            "significado": "La letra combina referencias al cansancio físico y emocional con imágenes de una búsqueda de alivio. La melancolía no equivale a una recomendación de ninguna sustancia ni permite diagnosticar al compositor; expresa un estado narrativo de desorientación.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Pennyroyal%20Tea%20MTV%20Unplugged",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Pennyroyal%20Tea%20MTV%20Unplugged"
        },
        {
            "id": 6,
            "titulo": "Dumb",
            "descripcion": "En esta interpretación acústica, la melodía y el fraseo vocal adquieren mayor protagonismo al reducirse el peso de la distorsión del arreglo de estudio. La dinámica del acompañamiento permite escuchar con claridad los cambios de intensidad de la composición.",
            "contexto": "Interpretada en la sesión de MTV grabada en Nueva York en noviembre de 1993 y publicada en 1994. La composición ya existía antes de las sesiones de In Utero y fue interpretada en Reading en 1992, así como en MTV Unplugged en 1993.",
            "significado": "El narrador contrapone la felicidad con la inseguridad y se pregunta si necesita comprender el mundo para sentirse bien. La calma musical puede interpretarse como alivio provisional, en vez de una resolución definitiva del malestar.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Dumb%20MTV%20Unplugged",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Dumb%20MTV%20Unplugged"
        },
        {
            "id": 7,
            "titulo": "Polly",
            "descripcion": "En esta interpretación acústica, la melodía y el fraseo vocal adquieren mayor protagonismo al reducirse el peso de la distorsión del arreglo de estudio. La dinámica del acompañamiento permite escuchar con claridad los cambios de intensidad de la composición.",
            "contexto": "Interpretada en la sesión de MTV grabada en Nueva York en noviembre de 1993 y publicada en 1994. Kurt Cobain escribió Polly inspirado en un caso real ocurrido en 1987, cuando una adolescente fue secuestrada y agredida por un hombre en el estado de Washington, Estados Unidos. La víctima consiguió escapar. Cobain decidió abordar la historia desde la perspectiva del agresor, utilizando la canción para retratar una situacion de violencia y abuso. La composicion existia antes de Nevermind y fue incluida en el album de 1991.",
            "significado": "Polly aborda la violencia, el abuso de poder y la deshumanizacion de una víctima. Su letra adopta la perspectiva del agresor, pero esto no significa que la canción justifique sus acciones. Por el contrario, esa elección narrativa permite mostrar de manera inquietante su cureldad y falta de empatía. La canción suele interpretarse como una denuncia de la violencia sexual y del sufrimiento que provoca.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Polly%20MTV%20Unplugged",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Polly%20MTV%20Unplugged"
        },
        {
            "id": 8,
            "titulo": "On A Plain",
            "descripcion": "En esta interpretación acústica, la melodía y el fraseo vocal adquieren mayor protagonismo al reducirse el peso de la distorsión del arreglo de estudio. La dinámica del acompañamiento permite escuchar con claridad los cambios de intensidad de la composición.",
            "contexto": "Interpretada en la sesión de MTV grabada en Nueva York en noviembre de 1993 y publicada en 1994. On a Plain fue grabada durante las sesiones de Nevermind en 1991, con Butch Vig como productor. Dave Grohl participó en las armonías vocales, aportando una de las características más reconocibles de la canción. Kurt Cobain trabajó en parte de su letra durante el proceso de grabación del álbum, utilizando frases personales, imágenes ambiguas y referencias a sus propias experiencias.",
            "significado": "La canción suele interpretarse como una reflexión sobre la identidad, la autoestima y las contradicciones personales. Su letra combina expresiones de confianza con sentimientos de inseguridad y confusión. También presenta un tono irónico y autorreferencial, ya que Cobain parece cuestionar su propia capacidad para expresar lo que siente y encontrar un significado claro en sus palabras.",
            "spotify": "https://open.spotify.com/search/Nirvana%20On%20A%20Plain%20MTV%20Unplugged",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20On%20A%20Plain%20MTV%20Unplugged"
        },
        {
            "id": 9,
            "titulo": "Something In The Way",
            "descripcion": "En esta interpretación acústica, la melodía y el fraseo vocal adquieren mayor protagonismo al reducirse el peso de la distorsión del arreglo de estudio. La dinámica del acompañamiento permite escuchar con claridad los cambios de intensidad de la composición.",
            "contexto": "Interpretada en la sesión de MTV grabada en Nueva York en noviembre de 1993 y publicada en 1994. Something in the Way fue grabada durante las sesiones de Nevermind en 1991, con Butch Vig como productor. Cobain interpretó la canción de manera muy tranquila, utilizando una guitarra acústica y una voz casi susurrada. Posteriormente se incorporó un violonchelo interpretado por Kirk Canning. La canción está relacionada con recuerdos de la juventud de Cobain y con una historia sobre vivir debajo de un puente en Aberdeen, Washington, aunque los detalles de ese relato han sido cuestionados y no deben considerarse completamente autobiográficos.",
            "significado": "La canción suele interpretarse como una representación del aislamiento, la soledad y las dificultades para encontrar un lugar en el mundo. Su atmósfera transmite sentimientos de abandono, resignación y desconexión emocional. Aunque contiene elementos relacionados con las experiencias personales de Kurt Cobain, también utiliza imágenes simbólicas que permiten distintas interpretaciones.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Something%20In%20The%20Way%20MTV%20Unplugged",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Something%20In%20The%20Way%20MTV%20Unplugged"
        },
        {
            "id": 10,
            "titulo": "Plateau",
            "descripcion": "Las guitarras acústicas y las armonías dan espacio a un cierre instrumental delicado.",
            "contexto": "Interpretada en la sesión de MTV grabada en Nueva York en noviembre de 1993 y publicada en 1994. Es una composición de Meat Puppets, cuyos integrantes Cris y Curt Kirkwood participaron en el concierto.",
            "significado": "Las imágenes de ascenso y descubrimiento pueden leerse como una búsqueda de sentido que no termina al alcanzar un objetivo.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Plateau%20MTV%20Unplugged",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Plateau%20MTV%20Unplugged"
        },
        {
            "id": 11,
            "titulo": "Oh Me",
            "descripcion": "El pulso tranquilo y el acompañamiento de guitarras permiten que la melodía vocal destaque.",
            "contexto": "Interpretada en la sesión de MTV grabada en Nueva York en noviembre de 1993 y publicada en 1994. Otra composición de Meat Puppets interpretada junto a los hermanos Kirkwood.",
            "significado": "La letra explora la percepción del propio yo y la distancia entre lo que se siente y lo que se puede expresar.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Oh%20Me%20MTV%20Unplugged",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Oh%20Me%20MTV%20Unplugged"
        },
        {
            "id": 12,
            "titulo": "Lake of Fire",
            "descripcion": "El ritmo marcado y la voz áspera contrastan con el acompañamiento acústico.",
            "contexto": "Interpretada en la sesión de MTV grabada en Nueva York en noviembre de 1993 y publicada en 1994. Es una versión de Meat Puppets realizada con los hermanos Kirkwood.",
            "significado": "Las imágenes del castigo después de la muerte permiten una lectura irónica sobre el miedo moral y las certezas religiosas.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Lake%20of%20Fire%20MTV%20Unplugged",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Lake%20of%20Fire%20MTV%20Unplugged"
        },
        {
            "id": 13,
            "titulo": "All Apologies",
            "descripcion": "En esta interpretación acústica, la melodía y el fraseo vocal adquieren mayor protagonismo al reducirse el peso de la distorsión del arreglo de estudio. La dinámica del acompañamiento permite escuchar con claridad los cambios de intensidad de la composición.",
            "contexto": "Interpretada en la sesión de MTV grabada en Nueva York en noviembre de 1993 y publicada en 1994. La mezcla publicada en In Utero fue realizada por Scott Litt; la canción también integró el sencillo compartido con Rape Me y el concierto acústico de MTV.",
            "significado": "La letra admite lecturas sobre culpa, cansancio ante las expectativas ajenas y aceptación de las propias limitaciones. Su cierre repetitivo sugiere una búsqueda de reconciliación, aunque deja abierta la relación entre resignación y serenidad.",
            "spotify": "https://open.spotify.com/search/Nirvana%20All%20Apologies%20MTV%20Unplugged",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20All%20Apologies%20MTV%20Unplugged"
        },
        {
            "id": 14,
            "titulo": "Where Did You Sleep Last Night",
            "descripcion": "La interpretación crece desde un acompañamiento contenido hasta un cierre vocal de gran intensidad, seguido por una pausa expresiva.",
            "contexto": "Interpretada en la sesión de MTV grabada en Nueva York en noviembre de 1993 y publicada en 1994. Es una canción tradicional estadounidense asociada a Lead Belly, que Cobain admiraba. Cerró la presentación de MTV.",
            "significado": "La historia combina preguntas, sospechas y pérdida. La intensidad final convierte una balada narrativa en una expresión de angustia sin resolver.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Where%20Did%20You%20Sleep%20Last%20Night%20MTV%20Unplugged",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Where%20Did%20You%20Sleep%20Last%20Night%20MTV%20Unplugged"
        }
    ];

    const cancionesReading = [
        {
            "id": 1,
            "titulo": "Breed",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. Cuarta canción de Nevermind (1991). Se caracteriza por su ritmo acelerado, su bajo distorsionado y sus guitarras agresivas. Es una de las canciones del album que conserva una influencia más marcada del punk rock.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. Breed existia antes de la grabación de Nevermind y originalmente se conocia como Imodium. Nirvana ya la interpretaba en directo durante 1989 y 1990. Posteriormente fue grabada con Dave Grohl en la bateria durante las sesiones de Nevermind, producidas por Butch Vig en 1991.",
            "significado": "La canción suele interpretarse como una critica a las expectativas tradicionales sobre las relaciones, el matrimonio y la formación de una familia. Su letra utiliza frases repetitivas y un tono desafiante para cuestionar la presión social de seguir un estilo de vida convencional.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Breed%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Breed%20Live%20at%20Reading"
        },
        {
            "id": 2,
            "titulo": "Drain You",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. Octava canción del álbum (1991). Se caracteriza por sus guitarras distorsionadas, sus melodias vocales y sus cambios de intensidad. Una de sus partes más distintivas es la sección instrumental intermedia, que incorpora sonidos experimentales antes de regresar al riff principal.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. Drain You fue compuesta por Kurt Cobain y grabada durante las sesiones de Nevermind en 1991, con Butch Vig como productor. Durante la grabación se utilizaron distintos efectos sonoros para construir su sección instrumental. Aunque no fue uno de los principales sencillos del álbum, se conritió en una canción habitual de los conciertos de Nirvana. Cobain llegó a mencionarla entre sus composiciones favoritas.",
            "significado": "La canción suele interpretarse como una reprentación de una relación intensa y absorbente, en la que dos personas desarrollan una dependencia emocional. Su letra utiliza imagenes corporales y metaforas inquietantes para expresar sentimientos de apego, vulnerabilidad y posesión. Tambien puede entenderse como una exploración de cómo una relacion puede consumir emocionalmente a quienes participan en ella.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Drain%20You%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Drain%20You%20Live%20at%20Reading"
        },
        {
            "id": 3,
            "titulo": "Aneurysm",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. La introducción crece gradualmente hasta desembocar en un riff rápido y un estribillo de gran intensidad.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. La composición acredita a Cobain, Novoselic y Grohl. Una versión apareció como cara B de Smells Like Teen Spirit; Incesticide incluye otra de una sesión de radio.",
            "significado": "La letra vincula fascinación y malestar mediante imágenes de intensidad física. Puede leerse como una relación absorbente, mientras el crecimiento instrumental reproduce la sensación de perder el control.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Aneurysm%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Aneurysm%20Live%20at%20Reading"
        },
        {
            "id": 4,
            "titulo": "School",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. Una figura de guitarra reiterada domina la composición; los cambios de intensidad y el solo aportan movimiento a una estructura deliberadamente escueta.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. Forma parte del repertorio de la etapa independiente y continuó apareciendo en conciertos después del éxito de Nevermind.",
            "significado": "La referencia a volver a la escuela puede representar la sensación de quedar atrapado en jerarquías, grupos excluyentes y reglas informales. La letra mínima transmite esa frustración mediante insistencia, más que mediante una historia detallada.",
            "spotify": "https://open.spotify.com/search/Nirvana%20School%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20School%20Live%20at%20Reading"
        },
        {
            "id": 5,
            "titulo": "Sliver",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. Una línea de bajo muy reconocible sostiene una melodía vocal sencilla y un estribillo que aumenta de intensidad.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. El sencillo de 1990 cuenta con Dan Peters en batería y antecede a la formación estable con Dave Grohl.",
            "significado": "La letra adopta la mirada de un niño que se siente incómodo al quedar al cuidado de sus abuelos. Su desenlace cotidiano transforma el miedo en una anécdota humorística sobre la separación y la seguridad familiar.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Sliver%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Sliver%20Live%20at%20Reading"
        },
        {
            "id": 6,
            "titulo": "In Bloom",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. Segunda canción de Nevermind (1991). Se caracteriza por sus guitarras distorsionadas, sus cambios entre estrofas más tranquilas y estribillos intensos, y las armonias vocales de Kurt Cobain y Dave Grohl.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. In Bloom fue compuesta antes del lanzamiento de Nevermind. Nirvana grabó una primera version con Chad Channing en la bateria durante 1990, y posteriormente la volvió a grabar con Dave Grohl para el album de 1991. En 1992 se publicó un videoclip dirigido por Kevin Kerslake, que parodia las presentaciones musicales de la televisión de los años sesenta.",
            "significado": "La canción suele interpretarse como una critica a quienes disfrutan de la musica de una banda sin comprender sus mensajes. Su letra presenta la contradiccion de alguien que canta las canciones y disfruta de ellas, pero no entiende realmente lo que significan.",
            "spotify": "https://open.spotify.com/search/Nirvana%20In%20Bloom%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20In%20Bloom%20Live%20at%20Reading"
        },
        {
            "id": 7,
            "titulo": "Come As You Are",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. La tercera canción de Nevermind (1991). Se caracteriza por su riff de guitarra con efecto chorus, su ritmo pausado y su atmosfera melancolica. Es una de las canciones más reconocidas de Nirvana.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. Fue grabada durante las sesiones de Nevermind en 1991, con Butch Vig como productor. Se publicó como sensicllo en 1992 y contó con un videoclip dirigido por Kevin Kerslake. Su sonido más accesible contribuyó a ampliar la popularidad de Nirvana despues del éxito de Smells Like Teen Spirit.",
            "significado": "La canción presenta mensajes contradictorios relacionados con la identidad, la confianza y la aceptación. Puede interpretarse como una invitación a mostrarse como uno es, aunque sus frases ambiguas tambien sugieren dudas y contradicciones en las relaciones humanas. Kurt Cobain describió la canción como una composicion sobre las personas y las contradicciones de sus comportamientos.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Come%20As%20You%20Are%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Come%20As%20You%20Are%20Live%20at%20Reading"
        },
        {
            "id": 8,
            "titulo": "Lithium",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. Quinta canción de Nevermind (1991). Se caracteriza por sus cambios entre estrofas tranquilas y estribillos intensos, combinando guitarras limpias con distorsión. La interpretacion vocal de Kurt Cobain pasa de un tono contenido a momentos muchos más enérgicos.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. Lithium fue compuesta por Kurt Cobain antes de las sesiones definitivas de Nevermind. Nirvana grabó una versión temprana durante las sesiones con Butch Vig en 1990 y posteriormente la volvió a grabar para el álbum de 1991, con Dave Grohl en la bateria. Fue publicada como sencillo en 1992.",
            "significado": "La canción presenta a un personaje que atraviesa dificultades emocionales y encuentra consuelo en la religión. Kurt Cobain explicó que imaginaba a una persona que, después de perder a alguien importante, recurría a la fe para evitar caer en la desesperación. El titulo también puede asociarle con el litio, utilizado como medicamento estabilizador del estado de ánimo, aunque la historia de la canción se centra principalmente en la busqueda de estabilidad emocional.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Lithium%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Lithium%20Live%20at%20Reading"
        },
        {
            "id": 9,
            "titulo": "About A Girl",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. Una progresión de acordes sencilla, un bajo melódico y un estribillo accesible distinguen esta composición del resto de Bleach. El solo conserva la economía melódica del tema.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. Cobain la escribió durante su relación con Tracy Marander. Su admiración por The Beatles ayuda a entender la orientación pop de una canción que contrastaba con la estética pesada del sello Sub Pop. Más tarde abrió el concierto acústico de MTV.",
            "significado": "La voz narrativa busca compañía y comprensión, pero también manifiesta resistencia a las obligaciones de una relación. El afecto convive con el interés propio y la dificultad de corresponder a la otra persona. No constituye una declaración romántica incondicional: su melodía luminosa contrasta con una relación marcada por expectativas desiguales.",
            "spotify": "https://open.spotify.com/search/Nirvana%20About%20A%20Girl%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20About%20A%20Girl%20Live%20at%20Reading"
        },
        {
            "id": 10,
            "titulo": "Tourette’s",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. La velocidad, los cambios abruptos y la voz casi ininteligible acercan esta pista al hardcore punk.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. Fue interpretada en Reading antes de aparecer en In Utero, mientras la banda preparaba material nuevo. En aquel momento todavía no se había publicado In Utero.",
            "significado": "La canción privilegia la descarga sonora sobre una narración clara. El título no debe tomarse como una descripción clínica del síndrome de Tourette; su forma puede entenderse como una representación artística de tensión y ruptura.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Tourette%E2%80%99s%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Tourette%E2%80%99s%20Live%20at%20Reading"
        },
        {
            "id": 11,
            "titulo": "Polly",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. Sexta canción de Nevermind (1991). Se caracteriza por su instrumentación acústica, su ritmo lento y su átmosfera inquietante. A diferencia de las canciones más intensas del álbum, Polly utiliza un sonido sencillo y contenido para abordar una historia pertubadora.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. Kurt Cobain escribió Polly inspirado en un caso real ocurrido en 1987, cuando una adolescente fue secuestrada y agredida por un hombre en el estado de Washington, Estados Unidos. La víctima consiguió escapar. Cobain decidió abordar la historia desde la perspectiva del agresor, utilizando la canción para retratar una situacion de violencia y abuso. La composicion existia antes de Nevermind y fue incluida en el album de 1991.",
            "significado": "Polly aborda la violencia, el abuso de poder y la deshumanizacion de una víctima. Su letra adopta la perspectiva del agresor, pero esto no significa que la canción justifique sus acciones. Por el contrario, esa elección narrativa permite mostrar de manera inquietante su cureldad y falta de empatía. La canción suele interpretarse como una denuncia de la violencia sexual y del sufrimiento que provoca.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Polly%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Polly%20Live%20at%20Reading"
        },
        {
            "id": 12,
            "titulo": "Lounge Act",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. Novena canción del álbum (1991). Se caracteriza por su reconocible linea de bajo, sus guitarras distorsionadas y una interpretación vocal que aumenta progresivamente de intensidad. Combina elementos del rock alternativo y el punk con una estructura melódica.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. Lounge Act fue grabada durante las sesiones de Nevermind en 1991, bajo la producción de Butch Vig. Su introducción de bajo, interpretada por Krist Novoselic, es uno de los elementos más distintivos de la composición. La canción también ha sido relacionada con experiencias sentimentales de Kurt Cobain anteriores al éxito comercial de Nirvana.",
            "significado": "La canción suele interpretarse como una reflexión sobre los celos, la inseguridad y los conflictos dentor de una relación sentimental. Su letra expresa sentimientos contradictorios entre el deseo de mantener una relación y la necesidad de independencia. También puede entenderse como una representación de las dificultades para confiar en otra persona y superar experiencias del pasado.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Lounge%20Act%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Lounge%20Act%20Live%20at%20Reading"
        },
        {
            "id": 13,
            "titulo": "Smells Like Teen Spirit",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. Canción de apertura de Nevermind (1991), reconocida por su riff de guitarra, sus cambios de intensidad y su energia caracteristica del grunge.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. La cancion fue grabada en 1991 con el productor Butch Vig. Su titulo surgió cuando Kathleen Hanna escribió una frase en la pared de Kurt Cobain. Kurt pensó que hacia referencia a la rebeldia juvenil, pero en realidad era una broma relacionada con u ndesodorante llamado \"Teen Spirit\".",
            "significado": "La canción suele interpretarse como una expresion de frustración, inconformismo y apatia juvenil. Kurt Cobain habló de sus temas revolucionarios y de la necesidad de despertar a una generación que consideraba demasiado apatica. Sin embargo, su letra admite distintas interpretaciones.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Smells%20Like%20Teen%20Spirit%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Smells%20Like%20Teen%20Spirit%20Live%20at%20Reading"
        },
        {
            "id": 14,
            "titulo": "On A Plain",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. Undécima canción del álbum (1991). Se caracteriza por sus guitarras distorsionadas, su ritmo constante y sus armonías vocales. Combina una melodía accesible con la energía característica de Nirvana, mientras la interpretación de Kurt Cobain alterna entre momentos tranquilos y otros más intensos.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. On a Plain fue grabada durante las sesiones de Nevermind en 1991, con Butch Vig como productor. Dave Grohl participó en las armonías vocales, aportando una de las características más reconocibles de la canción. Kurt Cobain trabajó en parte de su letra durante el proceso de grabación del álbum, utilizando frases personales, imágenes ambiguas y referencias a sus propias experiencias.",
            "significado": "La canción suele interpretarse como una reflexión sobre la identidad, la autoestima y las contradicciones personales. Su letra combina expresiones de confianza con sentimientos de inseguridad y confusión. También presenta un tono irónico y autorreferencial, ya que Cobain parece cuestionar su propia capacidad para expresar lo que siente y encontrar un significado claro en sus palabras.",
            "spotify": "https://open.spotify.com/search/Nirvana%20On%20A%20Plain%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20On%20A%20Plain%20Live%20at%20Reading"
        },
        {
            "id": 15,
            "titulo": "Negative Creep",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. Un riff repetitivo de gran velocidad sostiene una voz deliberadamente áspera y una sección rítmica contundente.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. Pertenece al repertorio de Bleach y sobrevivió en las actuaciones de la banda durante su etapa de mayor fama.",
            "significado": "El narrador adopta una etiqueta despectiva para describirse, exagerando la negatividad hasta convertirla en una identidad. Puede escucharse como una burla de los juicios externos y también como una expresión de rechazo hacia uno mismo.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Negative%20Creep%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Negative%20Creep%20Live%20at%20Reading"
        },
        {
            "id": 16,
            "titulo": "Been a Son",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. La melodía directa y los acordes rápidos producen un contraste entre ligereza musical y crítica social.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. La versión de Incesticide procede de una sesión para la BBC, mientras una grabación anterior apareció en el EP Blew.",
            "significado": "La letra enumera expectativas impuestas a una hija y las contrapone al deseo de que hubiera nacido varón. Esa ironía denuncia la discriminación de género y la presión familiar por ajustarse a papeles predeterminados.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Been%20a%20Son%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Been%20a%20Son%20Live%20at%20Reading"
        },
        {
            "id": 17,
            "titulo": "All Apologies",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. Una figura de guitarra circular y el violonchelo acompañan una melodía que se vuelve más intensa sin perder su carácter contemplativo.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. La mezcla publicada en In Utero fue realizada por Scott Litt; la canción también integró el sencillo compartido con Rape Me y el concierto acústico de MTV. En aquel momento todavía no se había publicado In Utero.",
            "significado": "La letra admite lecturas sobre culpa, cansancio ante las expectativas ajenas y aceptación de las propias limitaciones. Su cierre repetitivo sugiere una búsqueda de reconciliación, aunque deja abierta la relación entre resignación y serenidad.",
            "spotify": "https://open.spotify.com/search/Nirvana%20All%20Apologies%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20All%20Apologies%20Live%20at%20Reading"
        },
        {
            "id": 18,
            "titulo": "Blew",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. El bajo de Krist Novoselic establece una figura grave que da paso a una guitarra de acordes pesados. Las estrofas mantienen la tensión antes de que la voz se vuelva más abierta en el estribillo.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. La grabación pertenece a las sesiones con Jack Endino en Seattle y la composición dio nombre al EP británico de diciembre de 1989.",
            "significado": "Las imágenes de presión y de evasión permiten leer la letra como una búsqueda de autonomía. La insistencia del riff convierte esa sensación de encierro en un elemento musical, sin que sea necesario atribuirle una experiencia biográfica concreta.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Blew%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Blew%20Live%20at%20Reading"
        },
        {
            "id": 19,
            "titulo": "Dumb",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. La guitarra limpia, la voz relativamente suave y el violonchelo de Kera Schaley forman un contraste con las pistas más abrasivas del álbum.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. La composición ya existía antes de las sesiones de In Utero y fue interpretada en Reading en 1992, así como en MTV Unplugged en 1993. En aquel momento todavía no se había publicado In Utero.",
            "significado": "El narrador contrapone la felicidad con la inseguridad y se pregunta si necesita comprender el mundo para sentirse bien. La calma musical puede interpretarse como alivio provisional, en vez de una resolución definitiva del malestar.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Dumb%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Dumb%20Live%20at%20Reading"
        },
        {
            "id": 20,
            "titulo": "Stay Away",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. Decima canción del álbum (1991). Se caracteriza por sus guitarras distorsionadas, su bateria enérgica y la interpretación vocal agresiva de Kurt Cobain. Su ritmo acelerado y su actitud desafiante reflejan la influencia del punk rock en el sonido de Nirvana.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. Stay Away fue desarrollada originalmente bajo el titulo \"Pay to Play\", con el que Nirvana llegó a grabar una versión en 1990. Ese titulo hacia referencia a la práctica de exigir dinero a las bandas para permitirles actuar en determinados conciertos. La canción fue posteriormente reelaborada y grabada para Nevermind en 1991, con Dave Grohl en la bateria y Butch Vig como productor.",
            "significado": "La canción suele interpretarse como una expresión de rechazo hacia las presiones sociales, el conformismo y las expectativas impuestas por otras personas. Su letra transmite una actitud de rebeldia y distanciamiento frente a comportamientos considerados falsos o superficiales. El titulo original \"Pay to Play\", tambien permite relacionar sus origenes con una critica a determinadas practicas de la industria musical.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Stay%20Away%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Stay%20Away%20Live%20at%20Reading"
        },
        {
            "id": 21,
            "titulo": "Spank Thru",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. La melodía de las estrofas contrasta con un estribillo acelerado y una guitarra de carácter punk.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. Una versión temprana apareció en el repertorio de Fecal Matter y Nirvana publicó otra en Sub Pop 200.",
            "significado": "La letra mezcla deseo, recuerdos y humor irreverente, evitando el tono solemne de una canción romántica.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Spank%20Thru%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Spank%20Thru%20Live%20at%20Reading"
        },
        {
            "id": 22,
            "titulo": "The Money Will Roll Right In",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. La guitarra y el ritmo acelerado acentúan el tono burlón de la interpretación.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. Es una versión de Fang, banda de punk estadounidense.",
            "significado": "La fantasía de éxito y riqueza funciona como sátira de la ambición y de la promesa de fama fácil.",
            "spotify": "https://open.spotify.com/search/Nirvana%20The%20Money%20Will%20Roll%20Right%20In%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20The%20Money%20Will%20Roll%20Right%20In%20Live%20at%20Reading"
        },
        {
            "id": 23,
            "titulo": "D-7",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. La introducción lenta se transforma en una sección de punk veloz y distorsionado.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. Es una composición de Greg Sage para Wipers, banda que influyó en Nirvana.",
            "significado": "La letra expresa extrañamiento y rechazo a la normalidad impuesta; el cambio de velocidad intensifica esa sensación.",
            "spotify": "https://open.spotify.com/search/Nirvana%20D-7%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20D-7%20Live%20at%20Reading"
        },
        {
            "id": 24,
            "titulo": "Territorial Pissings",
            "descripcion": "Interpretación eléctrica en directo, donde la ejecución conjunta y la energía del festival sustituyen el control de las capas de estudio. Séptima canción del album (1991). Se caracteriza por su ritmo acelerado, sus guitarras fuertemente distorsionadas y la interpretación vocal agresiva de Kurt Cobain. Su sonido refleja la influencia del pink rock en Nirvana y contrasta con las composiciones melódicas del álbum.",
            "contexto": "Registrada en el festival de Reading de agosto de 1992 y editada en 2009. Territorial Pissings fue grabada durante las sesiones de Nevermind en 1991, bajo la producción de Butch Vig. La canción comienza con Krist Novoselic cantnado brevemente una parte de Get Together, una canción popularizada por The Youngbloods en los años sesenta. Después de esa introducción, Nirvana pasa abruptamente a una interpretación rápida y caótica.",
            "significado": "La canción suele interpretarse como una critica a los comportamientos territoriales, la agresividad y las actitudes machistas. Su letra también contiene referencias a la necesidad de cmabiar las ideas tradicionales sobre las relaciones entre hombres y mujeres. El tono irónico y desafiante refleja el rechazo de Kurt Cobain hacia determinadas normas sociales y formas de ejercer el poder.",
            "spotify": "https://open.spotify.com/search/Nirvana%20Territorial%20Pissings%20Live%20at%20Reading",
            "youtube": "https://www.youtube.com/results?search_query=Nirvana%20Territorial%20Pissings%20Live%20at%20Reading"
        }
    ];

    const sencillosInformacion = [
        {
            "id": 101,
            "nombre": "Love Buzz",
            "anio": "1988",
            "tipo": "Sencillo",
            "descripcion": "Primer sencillo de Nirvana, publicado por Sub Pop en 1988. Presentó su adaptación de Shocking Blue y la composición Big Cheese, mostrando la combinación de influencias psicodélicas y punk de la banda antes de Bleach. La lista de pistas es una selección, no un inventario de todas las ediciones comerciales.",
            "pistas": [
                "Love Buzz",
                "Big Cheese"
            ]
        },
        {
            "id": 102,
            "nombre": "Sliver",
            "anio": "1990",
            "tipo": "Sencillo",
            "descripcion": "Publicado en 1990, reúne Sliver y Dive, dos composiciones que muestran el avance hacia melodías más accesibles sin abandonar la distorsión. Dan Peters toca la batería en Sliver. La lista de pistas es una selección, no un inventario de todas las ediciones comerciales.",
            "pistas": [
                "Sliver",
                "Dive"
            ]
        },
        {
            "id": 103,
            "nombre": "Smells Like Teen Spirit",
            "anio": "1991",
            "tipo": "Sencillo",
            "descripcion": "Publicado en 1991 como primer sencillo de Nevermind, impulsó el reconocimiento internacional de Nirvana. Sus caras B documentan otras facetas del repertorio de la época. La lista de pistas es una selección, no un inventario de todas las ediciones comerciales.",
            "pistas": [
                "Smells Like Teen Spirit",
                "Even In His Youth",
                "Aneurysm"
            ]
        },
        {
            "id": 104,
            "nombre": "Come As You Are",
            "anio": "1992",
            "tipo": "Sencillo",
            "descripcion": "Segundo sencillo de Nevermind, publicado en 1992. Su riff con chorus y su videoclip ayudaron a consolidar el alcance internacional de la banda. La lista de pistas es una selección, no un inventario de todas las ediciones comerciales.",
            "pistas": [
                "Come As You Are",
                "Endless, Nameless"
            ]
        },
        {
            "id": 105,
            "nombre": "Lithium",
            "anio": "1992",
            "tipo": "Sencillo",
            "descripcion": "Publicado en 1992, destaca por su alternancia de pasajes tranquilos y explosivos. Algunas ediciones incluyen material en directo y Curmudgeon. La lista de pistas es una selección, no un inventario de todas las ediciones comerciales.",
            "pistas": [
                "Lithium",
                "Been a Son",
                "Curmudgeon"
            ]
        },
        {
            "id": 106,
            "nombre": "In Bloom",
            "anio": "1992",
            "tipo": "Sencillo",
            "descripcion": "Sencillo de 1992 acompañado por un videoclip que parodia programas televisivos de los años sesenta. Sus pistas complementarias varían según formato. La lista de pistas es una selección, no un inventario de todas las ediciones comerciales.",
            "pistas": [
                "In Bloom",
                "Sliver",
                "Polly"
            ]
        },
        {
            "id": 107,
            "nombre": "Heart-Shaped Box",
            "anio": "1993",
            "tipo": "Sencillo",
            "descripcion": "Primer sencillo de In Utero, publicado en 1993. Incluye según edición Marigold, compuesta por Grohl, y Milk It, mostrando el contraste entre intimidad y experimentación. La lista de pistas es una selección, no un inventario de todas las ediciones comerciales.",
            "pistas": [
                "Heart-Shaped Box",
                "Marigold",
                "Milk It"
            ]
        },
        {
            "id": 108,
            "nombre": "All Apologies / Rape Me",
            "anio": "1993",
            "tipo": "Sencillo",
            "descripcion": "Sencillo de doble cara A de 1993. Reúne dos composiciones de carácter muy distinto y, en determinadas ediciones, la provocadora Moist Vagina. La lista de pistas es una selección, no un inventario de todas las ediciones comerciales.",
            "pistas": [
                "All Apologies",
                "Rape Me",
                "Moist Vagina"
            ]
        },
        {
            "id": 109,
            "nombre": "Pennyroyal Tea",
            "anio": "1994",
            "tipo": "Sencillo",
            "descripcion": "Preparado para 1994 y retirado ese año, el sencillo fue reeditado oficialmente en 2014. Su mezcla alternativa permite comparar decisiones de producción con la versión del álbum. La lista de pistas es una selección, no un inventario de todas las ediciones comerciales.",
            "pistas": [
                "Pennyroyal Tea",
                "I Hate Myself and Want to Die",
                "Where Did You Sleep Last Night"
            ]
        }
    ];

    const cancionesPorAlbum = {
        1: cancionesBleach,
        2: cancionesNevermind,
        3: cancionesIncesticide,
        4: cancionesInUtero,
        5: cancionesUnplugged,
        6: cancionesReading
    };

    const cancionesDelAlbum = albumSeleccionado
    ? (albumSeleccionado.pistas ? albumSeleccionado.pistas.map((titulo, index) => {
        const original = Object.values(cancionesPorAlbum).flat().concat(cancionesExtrasInUtero).find(c => c.titulo.toLowerCase() === titulo.toLowerCase());
        const consulta = encodeURIComponent(`Nirvana ${titulo}`);
        return { ...original, id: index + 1, titulo, descripcion: original?.descripcion || `Pista del sencillo ${albumSeleccionado.nombre}.`, contexto: `Selección de pistas de ${albumSeleccionado.nombre} (${albumSeleccionado.anio}); las versiones pueden variar.`, significado: original?.significado || "Interpretación abierta; no se atribuye un significado confirmado.", spotify: `https://open.spotify.com/search/${consulta}`, youtube: `https://www.youtube.com/results?search_query=${consulta}` };
    }) : cancionesPorAlbum[albumSeleccionado.id] || [])
    : [];

    const gruposCancionesDelAlbum = [
        {
            titulo: 'Lista de canciones',
            canciones: cancionesDelAlbum
        },

        ...(albumSeleccionado?.id === 4
            ? [
                {
                    titulo: 'Pistas Adicionales - Deluxe Edition',
                    canciones: cancionesExtrasInUtero
                }
            ]
            : [])

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
            canciones: 13,
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
            canciones: 24,
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

                        <div>
                        <div className="lista-albumes">

                            {albumesInformacion.map(
                                (album) => (

                                    <article
                                        className="card-album"
                                        key={album.id}
                                        onClick={() => {
    

                                            setAlbumSeleccionado(album);
                                            
                                            setCancionSeleccionada(null);
                                                
                                            
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
                        <h2>💿 Sencillos</h2>
                        <div className="lista-albumes">
                            {sencillosInformacion.map((sencillo) => (
                                <article className="card-album" key={sencillo.id}>
                                    <h3>{sencillo.nombre}</h3>
                                    <p>{sencillo.anio} · {sencillo.tipo}</p>
                                    <p>{sencillo.descripcion}</p>
                                    <button type="button" className="boton-volver-enciclopedia" onClick={() => {
                                        setAlbumSeleccionado(sencillo);
                                        setCancionSeleccionada(null);
                                    }}>Ver pistas</button>
                                </article>
                            ))}
                        </div>
                        </div>

                    ) : (

                        <section className="detalle-album">

                            <button
                                className="boton-volver-enciclopedia"
                                type="button"
                                onClick={() => {

                                    setAlbumSeleccionado(null);

                                }}
                            >
                                ← Volver a la enciclopedia
                            </button>

                            <div className="cabecera-detalle-album">

                                {albumSeleccionado.imagen && (
                                    <img src={albumSeleccionado.imagen} alt={`Portada de ${albumSeleccionado.nombre}`} />
                                )}

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

                            {gruposCancionesDelAlbum.map((grupo) => (
                            <div className="tracklist-album" key={grupo.titulo}>
                                {/* Canciones del lanzamiento seleccionado. */}

                                <h3>
                                    🎵 {grupo.titulo}
                                </h3>

                                {grupo.canciones.map(
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
                                                                {cancion.spotify.includes("/search/") ? "Buscar en Spotify" : "Spotify"}
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
                                                                {cancion.youtube.includes("/results?") ? "Buscar en YouTube" : "YouTube"}
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

                            ))}

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
