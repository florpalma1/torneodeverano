import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import atacantesdemoreno from "../assets/img/ATACANTES DE MORENO.png";
import diecisietevoley from '../assets/img/diecisietevoley.png'
import sportivohaedo from '../assets/img/SPORTIVO HAEDO.png'
import elrejunte from '../assets/img/EL REJUNTE.png'
import federal from '../assets/img/FEDERAL.png'
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

/*Agregas a las cards fotos del escudo de cada equipo, nombre y descripcion
la ultima card lleva a una pagina que muestra el listado de todas las cards de cada equipo
Cada equipo debera tener su propia pagina indicando:
datos, lista de jugadores, participaciones, fechas de proximos partidos
Capaz puedo repetir la seccion de projects(equipos) para cada division, quedando dos apartados por seccion, femenino y masculino*/

export const Projects = () => {

  const projects = [
    {
      title: "17 voley",
      description: "DESCRIPCION",
      imgUrl: diecisietevoley,
    },
    {
      title: "Atacantes de Moreno",
      description: "otro equipo",
      imgUrl: atacantesdemoreno,
    },
    {
      title: "Sportivo Haedo",
      description: "otro equipo",
      imgUrl: sportivohaedo,
    },
    {
      title: "El Rejunte",
      description: "otro equipo",
      imgUrl: elrejunte,
    },
    {
      title: "Federal",
      description: "otro equipo",
      imgUrl: federal,
    },
    {
      title: "Mas equipos",
      description: "Conoce todos los equipos que estan participando del torneo de verano",
      imgUrl: diecisietevoley,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Equipos</h2>
                <h3>Mayores 1era</h3>
                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Masculino</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Femenino</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      {/*aca debera ir las cards de mayores masculino, reemplazando el texto*/}
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                                {/*aca debera ir las cards de mixto, reemplazando el texto*/}
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    {/* Aca tengo que agregar una nueva seccion igual a las anteriores, para el listado de cards de la division sub18
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>*/}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="fondo"></img>
    </section>
  )
}
