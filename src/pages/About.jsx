import { profile } from '../data/content'

export default function About(){
  return (
    <div className="about-page">
      <div className="card" style={{padding:24, marginBottom:24}}>
        <h1>Sobre mí</h1>
        <div className="hero-grid" style={{gap:24, alignItems:'center'}}>
          <img 
            src={profile.avatar} 
            alt=" Foto de perfil" 
            className="profile-photo"
            style={{
              width: 200,
              height: 200,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid var(--brand)'
            }}
          />
          <div>
            <h2>{profile.name}</h2>
            <p style={{fontSize:'1.2em', color:'var(--brand)', margin:'8px 0'}}>{profile.role}</p>
            <p><strong>Edad:</strong> 21 años</p>
            <p><strong>Ubicación:</strong> {profile.location}</p>
            <p><strong>Teléfono:</strong> +56 9 4549 9200 </p>
          </div>
        </div>
      </div>

      <div className="card" style={{padding:24, marginBottom:24}}>
        <h2>Perfil Profesional</h2>
        <p style={{lineHeight:1.6, textAlign:'justify'}}>
          Soy Cathalina Gutiérrez, estudiante de Ingeniería en Informática, actualmente cursando el segundo año de la carrera. 
          Me caracterizo por ser una persona responsable, creativa y con gran interés en el desarrollo y diseño web.
          Tengo conocimientos en HTML, CSS y JavaScript, y disfruto combinar la tecnología con el diseño para crear sitios web 
          atractivos, funcionales y centrados en la experiencia del usuario. Además, me interesa el área de la animación digital, 
          donde busco seguir aprendiendo y aplicar mis habilidades en proyectos que integren creatividad e innovación.
          Mi objetivo profesional es desarrollarme en el área del diseño y programación web, participando en proyectos
           que me permitan seguir creciendo, aportar ideas y consolidar mi formación como futura ingeniera en informática.
        </p>
      </div>

      <div className="grid" style={{gap:24}}>
        <div className="card" style={{padding:24}}>
          <h2>Educación</h2>
          <div style={{marginBottom:20}}>
            <h3 style={{color:'var(--brand)', marginBottom:8}}>Ingeniería en Informática</h3>
            <p style={{margin:'4px 0', fontWeight:500}}>DuocUC Plaza Oeste (2025 - Presente)</p>
            <p style={{margin:'4px 0', color:'var(--text-secondary)'}}>En curso - 2do año</p>
          </div>
          
          <h4 style={{marginTop:20, marginBottom:12}}>Competencias Académicas:</h4>
          <ul style={{paddingLeft:20, lineHeight:1.6}}>
            <li>Programación y desarrollo de software</li>

          </ul>
        </div>


      </div>



 



    </div>
  )
}
