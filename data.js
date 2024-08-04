const proyectos = [
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
      "Permite la gestión de productos, usuarios, ordenes, login, etc. Utiliza Express.js para construir el servidor, Joi para la validación de datos, Boom para control de errores y PostgreSQL como base de datos. Docker, Sequelize para el ORM, bcrypt y passport.",
    link: "https://github.com/argfiz/e-commerce-my-store",
    fecha: "19/07/2024",
    imagen: "create-customer.png",
    tecnologias: ["Javascript", "Node, PostgreSQL"],
  },
  {
      titulo: "E-commerce",
      descripcion:
        "App donde demuestro habilidades con React, TailWind, JavaScript, implementando buenas practicas y alcanzando la mayor abstraccion deseada",
      link: "https://github.com/argfiz/e-commerce",
      fecha: "10/07/2024",
      imagen: "e-commerce.png",
      tecnologias: ["React","HTML", "CSS", "Tailwind","Javascript"],
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
      ["HTML", 6], ["CSS", 6], ["REACT", 4], ["JS", 7], ["NODE", 3], ["DOCKER", 1]
    ],
    redes: [
      ["github", "https://github.com/argfiz"],
      ["linkedin", "https://www.linkedin.com/in/franco-zoqui-35453456/"],
      ["youtube", ""],
      ["instagram", ""],
      ["facebook", "https://www.facebook.com/fizoqui"],
    ]
  };
  