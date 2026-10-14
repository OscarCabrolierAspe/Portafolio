document.addEventListener("DOMContentLoaded", () => {
    const serviceLinks = document.querySelectorAll("#services-nav a");
    const contentBox = document.getElementById("service-content-box");

    const servicesData = {
        fullstack: `
            <h3>Desarrollo de Soluciones Web Full Stack Escalables</h3>
            <p>
                Enfoque integral que abarca desde la maquetación y la experiencia de usuario en el frontend hasta la lógica de negocio y persistencia en el backend. Creación de aplicaciones interactivas, fluidas y conectadas eficientemente.
            </p>
            <ul>
                <li><i class="bi bi-check-circle"></i> <span>Creación de interfaces modernas, dinámicas y adaptables (Responsive Design).</span></li>
                <li><i class="bi bi-check-circle"></i> <span>Integración fluida entre servicios front-end y back-end mediante APIs seguras.</span></li>
                <li><i class="bi bi-check-circle"></i> <span>Aplicación de buenas prácticas de desarrollo y optimización de código.</span></li>
            </ul>
            <p>
                Trabajo conectando cada capa del sistema para asegurar que la aplicación no solo luzca bien visualmente, sino que sea rápida, segura y fácil de mantener a lo largo del tiempo.
            </p>
            <p>
                Si buscas llevar a cabo un proyecto web completo desde cero o modernizar una plataforma existente, puedo aportar una visión global y técnica para obtener el mejor resultado.
            </p>
        `,
        backend: `
            <h3>Desarrollo de Aplicaciones Backend con Java y Spring Boot</h3>
            <p>
                Diseño y construcción de lógica de servidor robusta, estructurada bajo los estándares de la programación orientada a objetos. Me encargo de desarrollar arquitecturas limpias orientadas a servicios para garantizar la escalabilidad y eficiencia de las aplicaciones.
            </p>
            <ul>
                <li><i class="bi bi-check-circle"></i> <span>Creación e integración de APIs RESTful seguras y funcionales.</span></li>
                <li><i class="bi bi-check-circle"></i> <span>Conexión y manipulación eficiente de bases de datos relacionales (MySQL, Oracle).</span></li>
                <li><i class="bi bi-check-circle"></i> <span>Aplicación de bases de ciberseguridad y protección de la información.</span></li>
            </ul>
            <p>
                Además del desarrollo de software, cuento con competencias complementarias en el área de redes (diseño de topologías en Cisco Packet Tracer) y gestión de entornos virtuales (Oracle VirtualBox), lo que me otorga una visión integral de la infraestructura tecnológica.
            </p>
            <p>
                Si necesitas desarrollar un sistema a medida, optimizar procesos de backend o estructurar la base lógica de tu proyecto tecnológico, puedo ayudarte a llevarlo a cabo de forma profesional, ordenada y orientada a resultados.
            </p>
        `,
        database: `
            <h3>Diseño, Optimización y Gestión de Bases de Datos</h3>
            <p>
                Estructuración de modelos de datos relacionales seguros y eficientes, garantizando la integridad de la información y consultas optimizadas para sistemas de alta demanda.
            </p>
            <ul>
                <li><i class="bi bi-check-circle"></i> <span>Modelado de esquemas relacionales y normalización de datos.</span></li>
                <li><i class="bi bi-check-circle"></i> <span>Escritura de consultas avanzadas, procedimientos y manejo de motores como MySQL y Oracle.</span></li>
                <li><i class="bi bi-check-circle"></i> <span>Estrategias de respaldo y resguardo de datos frente a vulnerabilidades.</span></li>
            </ul>
            <p>
                Una correcta gestión de la información es el núcleo de cualquier aplicación moderna. Me aseguro de que las bases de datos respondan con rapidez y cumplan con los estándares de seguridad necesarios.
            </p>
            <p>
                Si tu sistema maneja alto volumen de datos o necesitas estructurar desde cero el motor de almacenamiento para tu plataforma, puedo diseñar una solución eficiente.
            </p>
        `,
        infrastructure: `
            <h3>Soporte Técnico, Redes e Infraestructura Tecnológica</h3>
            <p>
                Visión integral de los sistemas informáticos, abarcando desde la solución de incidencias en hardware y software hasta el diseño de topologías de red y virtualización.
            </p>
            <ul>
                <li><i class="bi bi-check-circle"></i> <span>Diseño y simulación de topologías de red escalables en Cisco Packet Tracer.</span></li>
                <li><i class="bi bi-check-circle"></i> <span>Gestión y administración de entornos virtuales mediante Oracle VirtualBox.</span></li>
                <li><i class="bi bi-check-circle"></i> <span>Diagnóstico, mantenimiento y soporte preventivo/correctivo de equipos.</span></li>
            </ul>
            <p>
                La estabilidad del software depende directamente de una infraestructura sólida. Cuento con las herramientas y conocimientos prácticos para asegurar la conectividad y el correcto funcionamiento de los entornos operativos.
            </p>
            <p>
                Si requieres soporte especializado, configuración de redes o asesoría técnica sobre tus equipos y sistemas, puedo brindarte soluciones confiables.
            </p>
        `
    };

    serviceLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            if (link.classList.contains("active")) return;

            serviceLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            const serviceKey = link.getAttribute("data-service");

            if (servicesData[serviceKey]) {
                contentBox.classList.add("fade-out");

                setTimeout(() => {
                    contentBox.innerHTML = servicesData[serviceKey];
                    contentBox.classList.remove("fade-out");
                }, 300);
            }
        });
    });

    // ==========================================
    // NUEVO: Lógica para ocultar/mostrar el botón de scroll
    // ==========================================
    window.addEventListener("scroll", () => {
        const scrollBtn = document.querySelector(".scroll-down-btn");
        
        // Si el botón existe en la página
        if (scrollBtn) {
            if (window.scrollY > 50) {
                scrollBtn.classList.add("hidden");
            } else {
                scrollBtn.classList.remove("hidden");
            }
        }
    });
});