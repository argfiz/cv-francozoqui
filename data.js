const proyectos = [
  {
    titulo: "E-commerce",
    descripcion:
      "Una aplicación de comercio electrónico donde demuestro mis habilidades en React, Tailwind CSS, JavaScript, Node.js y PostgreSQL. Este proyecto incluye funciones como un carrito de compras, inicio de sesión y más, demostrando mi capacidad para seguir las mejores prácticas y lograr niveles óptimos de abstracción.",
    link: "https://argfiz.github.io/e-commerce/",
    fecha: "10/07/2024",
    imagen: "e-commerce.png",
    tecnologias: ["React","HTML", "CSS", "Tailwind","Javascript"],
  },
  {
    titulo: "E-commerce my store",
    descripcion:
      "Permite la gestión de productos, usuarios, ordenes, login, etc. desde el lado del servidor atravez de una APIrest. Utiliza Express.js para facilitar la construccion de una aplicacion web manejando rutas y middleware. Joi para la validación de datos, Boom para control de errores y PostgreSQL como base de datos. Docker, Sequelize para el ORM, bcrypt y passport.",
    link: "https://github.com/argfiz/e-commerce-my-store",
    fecha: "27/07/2024",
    imagen: "create-customer.png",
    tecnologias: ["Javascript", "Node, PostgreSQL"],
  },  
  {
    titulo: "WebChat",
    descripcion:
      "WebChat es una aplicación de chat en tiempo real desarrollada con Express.js, Socket.io, HTML, CSS, JavaScript y Node.js, que permite la comunicación entre usuarios mediante WebSocket, asegurando una experiencia fluida y dinámica en cualquier dispositivo",
    link: "https://github.com/argfiz/webchat/blob/main/README.md",
    fecha: "07/10/2024",
    imagen: "webchat.png",
    tecnologias: ["HTML", "CSS", "Javascript", "Node"],
  },
  {
    titulo: "Bases de datos con SQL",
    descripcion:
      "Capacidad de controlar las bases de datos y SQL; esta especialización proporciona las habilidades esenciales para organizar y manipular datos de manera eficiente. Diseñando esquemas robustos, optimizar consultas y gestionar grandes volúmenes de información. Garantizando la integridad de los datos y su seguridad en entornos dinámicos.",
    link: "https://platzi.com/p/francozoqui/learning-path/13458-datos-sql/diploma/detalle/",
    fecha: "23/03/2025",
    imagen: "diploma-datos-sql.png",
    tecnologias: ["SQL"],
  },
  {
    titulo: "Backend con Node.js",
    descripcion:
      "La especializacion en JavaScript con Node.js me permite crear proyectos backend a alta velocidad usando herramientas avanzadas para escalar y monitorear aplicaciones web.",
    link: "https://platzi.com/p/francozoqui/ruta/7048-web-node/diploma/detalle/",
    fecha: "25/10/2024",
    imagen: "diploma-web-node.png",
    tecnologias: ["Node"],
  },
  {
    titulo: "Frontend con React.js",
    descripcion:
      "La especilizacion en React.js, me permite dominar la herramienta más demandada y en mayor crecimiento de JavaScript para desarrollo frontend.",
    link: "https://platzi.com/p/francozoqui/ruta/7043-web-react/diploma/detalle/",
    fecha: "07/12/2024",
    imagen: "diploma-web-react.png",
    tecnologias: ["React"],
  },
  {
    titulo: "Full Stack Developer con JavaScript",
    descripcion:
      "Capaz de desarrollar tanto el frontend como el backend de aplicaciones web. HTML, CSS, y frameworks/librerías como React para el frontend, Node.js, Express y SQL para el backend. APIs RESTful, Docker, todo mientras aplica buenas prácticas de seguridad, testing, y optimización del rendimiento.",
    link: "https://platzi.com/p/francozoqui/ruta/100-javascript-full-stack/diploma/detalle/",
    fecha: "01/08/2024",
    imagen: "diploma-javascript-full-stack.png",
    tecnologias: ["HTML", "CSS", "React", "Javascript", "Node"],
  },
  {
    titulo: "TypeScript",
    descripcion:
      "Capacidad de mejorar la calidad de tu código con TypeScript. Con tipos avanzados y programación orientada a objetos para proyectos robustos.Aumentando la seguridad del código con TypeScript.",
    link: "https://platzi.com/p/francozoqui/ruta/23320-typescript/diploma/detalle/",
    fecha: "25/10/2024",
    imagen: "diploma-typescript.png",
    tecnologias: ["TypeScript"],
  },
  {
    titulo: "Juego de Monstruos",
    descripcion:
          "Un juego interactivo en el que los jugadores seleccionan un monstruo y compiten en emocionantes batallas contra otros monstruos controlados por usuarios reales. Las batallas comienzan cuando se encuentran o chocan entre sí. Este proyecto utiliza tecnologías como HTML, CSS, JavaScript y Node.js para ofrecer una experiencia dinámica e inmersiva.",
    link: "https://github.com/argfiz/mokemon",
    fecha: "25/12/2023",
    imagen: "juego-mokemon.png",
    tecnologias: ["HTML","CSS","Javascript", "Node"],
  },
  {
    titulo: "API Rick & Morty",
    descripcion:
        "Un proyecto que consulta la API de Rick y Morty para recuperar y mostrar información sobre personajes, ubicaciones y episodios de la serie. Utilizo herramientas JavaScript asíncronas, como la gestión de promesas, para interactuar eficientemente con la API, renderizando los datos en una interfaz dinámica y atractiva.",
    link: "https://argfiz.github.io/api-rick-morty/",
    fecha: "5/10/2023",
    imagen: "api-rick&morty.png",
    tecnologias: ["HTML","CSS","Javascript"],
  },
];
  
  const informacionPersonal = {
    nombre: "Franco Ignacio Zoqui",
    subtitulo: "Desarrollador web",
    imagen: "img/argfiz1.png",
    otros: [
      ["Nacionalidad", "Argentino"],
      [
        "Edad",
        new Date(new Date() - new Date("1990/01/18")).getFullYear()-1970 + " años",
      ],
    ],
    idiomas: [
      ["Español", "Nativo"],["Inglés", "B1"],
    ],
    tecnologias: [
      [`<img src="img/iconos/html.png" alt="html">`, 6], 
      [`<img src="img/iconos/css.png" alt="css">`, 6], 
      [`<img src="img/iconos/js.png" alt="js">`, 7], 
      [`<img src="img/iconos/typescript.png" alt="js">`, 7], 
      [`<img src="img/iconos/react.png" alt="react">`, 4], 
      [`<img src="img/iconos/nextjs.png" alt="nextjs">`, 1],
      [`<img src="img/iconos/node.png" alt="node">`, 3],
      [`<img src="img/iconos/nestjs.png" alt="nestjs">`, 1], 
      [`<img src="img/iconos/docker.png" alt="docker">`, 1], 
      [`<img src="img/iconos/sql.png" alt="sql">`, 1],
      [`<img src="img/iconos/postgres.png" alt="postgres">`, 1],
      
    ],
    redes: [

      ["linkedin", "https://www.linkedin.com/in/franco-zoqui-35453456/"],
      ["github", "https://github.com/argfiz"],
      ["platzi", "https://platzi.com/p/francozoqui/"],
      ["instagram", "https://www.instagram.com/francozoqui/?hl=es"],
      ["facebook", "https://www.facebook.com/fizoqui"],
    ]
  };
  