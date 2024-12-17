const proyectos = [
  {
    titulo: "E-commerce",
    descripcion:
      "App donde demuestro habilidades con React, TailWind, JavaScript, implementando buenas practicas y alcanzando la mayor abstraccion deseada",
    link: "https://argfiz.github.io/e-commerce/",
    fecha: "10/07/2024",
    imagen: "e-commerce.png",
    tecnologias: ["React","HTML", "CSS", "Tailwind","Javascript"],
  },
  {
    titulo: "TypeScript",
    descripcion:
      "Mejora la calidad de tu código con TypeScript. Aprende tipos avanzados y programación orientada a objetos para proyectos robustos.Aumenta la seguridad de tu código con TypeScript.",
    link: "https://platzi.com/p/francozoqui/ruta/23320-typescript/diploma/detalle/",
    fecha: "25/10/2024",
    imagen: "diploma-typescript.png",
    tecnologias: ["TypeScript"],
  },
  {
    titulo: "Direct Chat",
    descripcion:
      "El proyecto WebChat es una aplicación de chat en tiempo real que permite a los usuarios comunicarse entre sí a travez de WebSocket con la herramientas como Express.js, Socket.io ",
    link: "https://github.com/argfiz/webchat/blob/main/README.md",
    fecha: "07/10/2024",
    imagen: "webchat.png",
    tecnologias: ["HTML", "CSS", "Javascript", "Node"],
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
    titulo: "E-commerce my store",
    descripcion:
      "Permite la gestión de productos, usuarios, ordenes, login, etc. desde el lado del servidor atravez de una APIrest. Utiliza Express.js para facilitar la construccion de una aplicacion web manejando rutas y middleware. Joi para la validación de datos, Boom para control de errores y PostgreSQL como base de datos. Docker, Sequelize para el ORM, bcrypt y passport.",
    link: "https://github.com/argfiz/e-commerce-my-store",
    fecha: "21/07/2024",
    imagen: "create-customer.png",
    tecnologias: ["Javascript", "Node, PostgreSQL"],
  },
    {
      titulo: "Javascript a profundidad",
      descripcion:
        "Domina JavaScript el lenguaje más importante para el desarrollo web. Aprende de programación avanzada, conexión con APIs y más.",
      link: "https://platzi.com/p/francozoqui/ruta/7041-web-javascript/diploma/detalle/",
      fecha: "28/05/2024",
      imagen: "diploma-web-javascript.png",
      tecnologias: ["HTML","CSS","Javascript"],
    },
    {
      titulo: "Fundamentos de programación y desarrollo web",
      descripcion:
        "Obtén una base sólida en computación y pensamiento lógico. Aprende de computación básica, algoritmos, estructuras de datos, lenguajes de programación y manejo de Git y GitHub.",
      link: "https://platzi.com/p/francozoqui/ruta/7039-web-fundamentos/diploma/detalle/",
      fecha: "11/04/2024",
      imagen: "diploma-web-fundamentos.png",
      tecnologias: ["Git","GitHub"],
    },
    {
        titulo: "Juego Mokemon",
        descripcion:
          "Juego donde debemos elegir un Mokemon y pelear con otros Mokemones manejado por personas reales en caso de chocarse.",
        link: "https://github.com/argfiz/mokemon",
        fecha: "25/12/2023",
        imagen: "juego-mokemon.png",
        tecnologias: ["HTML","CSS","Javascript", "Node"],
    },
    {
      titulo: "API Rick & Morty",
      descripcion:
        "Consulta a una API Rest utilizando herramientas asincronicas de JavaScript.",
      link: "https://argfiz.github.io/api-rick-morty/",
      fecha: "25/10/2023",
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
      ["Español", "Nativo"],["Inglés", "Bueno"],
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
      
    ],
    redes: [
      ["github", "https://github.com/argfiz"],
      ["linkedin", "https://www.linkedin.com/in/franco-zoqui-35453456/"],
      ["youtube", ""],
      ["instagram", ""],
      ["facebook", "https://www.facebook.com/fizoqui"],
    ]
  };
  