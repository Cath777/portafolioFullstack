// Rutas de imágenes desde la carpeta public
const dontSleepImg = '/images/project1.webp'
const vitalcoImg = '/images/project2.webp'
const reactLogo = '/images/react-logo.svg'

export const profile = {
  name: 'Cathalina Gutierrez',
  role: 'Estudiante Ingeniería en informática (Segundo año)',
  location: 'Santiago, Chile',
  summary: 'Hola, mi nombre es Cathalina Gutiérrez, tengo 21 años y actualmente curso el segundo año de Ingeniería en Informática. Desde que comencé a estudiar esta carrera, he descubierto una gran pasión por el mundo digital, especialmente en áreas como la animación digital y el diseño de páginas web.\n\nMe considero una persona creativa, responsable y con muchas ganas de seguir aprendiendo y creciendo en este campo. Disfruto combinar la tecnología con el diseño para crear experiencias visuales atractivas y funcionales.\n\nSería un verdadero gusto poder colaborar y trabajar contigo, aportando mis conocimientos, entusiasmo y dedicación a cada proyecto.',
  avatar: '/perfil.webp',
  links: {
    github: '',
    linkedin: '',
    email: 'acathagutierrez@gmail.com',
    title: 'Cathalina Gutierrez - Estudiante Ingeniería en informática'
  },
}

// Recursos locales procesados por Vite (ubicados en src/assets)

export const skills = [
  'Diseño Web', 'HTML', 'CSS', 'Animación Digital', 'Diseño de Interfaces',
  'Creatividad Visual', 'Desarrollo Frontend', 'Diseño Responsivo'
]

export const projects = [
  {
    id: 'cafe-gatitos',
    title: '☕ Café de Gatitos',
    summary: 'Página web temática inspirada en cafeterías para amantes de los gatos',
    description: 'Diseñé una página web temática inspirada en cafeterías para amantes de los gatos. El sitio combina una estética cálida y acogedora con secciones informativas sobre el menú, reservas y una galería de adorables felinos. Este proyecto me permitió practicar el uso de HTML, CSS y JavaScript, enfocándome en la presentación visual y la estructura responsiva.',
    image: reactLogo,
    tags: ['HTML', 'CSS', 'JavaScript', 'Diseño Web'],
    links: { demo: '#' },
  },
  {
    id: 'cosplay-world',
    title: '🎭 Cosplay World',
    summary: 'Página web dedicada a la comunidad del cosplay',
    description: 'Desarrollé una página web dedicada a la comunidad del cosplay. El objetivo fue crear un espacio donde los usuarios pudieran explorar diferentes estilos, compartir ideas y conocer eventos relacionados. En este proyecto trabajé especialmente en la organización del contenido y en la integración de imágenes de alta calidad sin perder rendimiento.',
    image: reactLogo,
    tags: ['Diseño Web', 'Optimización', 'Frontend'],
    links: { demo: '#' },
  },
  {
    id: 'adopta-amor',
    title: '🐾 Adopta con Amor',
    summary: 'Página web orientada a la adopción responsable de mascotas',
    description: 'Creé una página web orientada a la adopción responsable de mascotas. El sitio incluye fichas informativas de los animales disponibles, formularios de contacto y una interfaz amigable para el usuario. Este proyecto fortaleció mis habilidades en diseño accesible y estructura intuitiva.',
    image: reactLogo,
    tags: ['Diseño Web', 'Accesibilidad', 'UX/UI'],
    links: { demo: '#' },
  }
]
