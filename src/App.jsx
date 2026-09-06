import React, { useEffect, useState } from 'react';
import './App.css';



import bleachImg from './assets/Bleach-image.png';
import inUteroImg from './assets/In_Utero-image.png';
import incesticideImg from './assets/Incesticide-image.png';
import liveAtReadingImg from './assets/Live_At_Reading-image.png';
import unpluggedImg from './assets/MTV_Unplugged_In_New_York-image.png';
import nevermindImg from './assets/Nevermind-image.png';

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


    // Sección que se está mostrando.
    // MACHETE: ¿Cómo cambio/renderizo CRUD y Enciclopedia?
    // Los botones cambian este estado con setSeccionActiva().
    // Más abajo un ternario mira este valor y decide qué renderizar.

    const [seccionActiva, setSeccionActiva] = useState('inicio');


    // Información de la enciclopedia.
    // Array de objetos: cada objeto guarda los datos de un álbum.
    // MACHETE: después uso map() para renderizar una card por álbum.

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
                        seleccionActiva === 'integrantes'
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

                {seccionActiva === 'integrantes' && (
                    
                    <section className="seccion-integrantes">

                        <h2>👥 Integrantes de Nirvana</h2>

                    </section>
                    
                )}

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
                                        Kurt Cobain y Krist Novoselic forman Nirvana en Aberdeen, Washington, junto al baterista Aaron Burckhard.

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
                                    placeholder="Año"
                                    value={nuevoAnio}
                                    onChange={
                                        (evento) =>
                                            setNuevoAnio(evento.target.value)
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

                        <div className="lista-albumes">

                            {albumesInformacion.map(
                                (album) => (

                                    <article
                                        className="card-album"
                                        key={album.id}
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
        <p>© 2026 Nirvana Vault — Proyecto educativo.</p>
        <p>Desarrollado por Noxx</p>
    </div>
</footer>

        </div>

        

    );


}
