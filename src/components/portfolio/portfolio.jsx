import "./portfolio.css";

const images = {
  taskManagement:
    "https://www.perfony.com/wp-content/uploads/2023/04/CT_GestionTaches_Article3.png",
  eCommerce: "https://virtina.com/wp-content/uploads/2020/06/featured-img.jpg",
  inventoryManagement:
    "https://www.optiproerp.com/wp-content/uploads/erp-inventory_management.jpg",
  packageTracking:
    "https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-030-79168-1_14/MediaObjects/495196_1_En_14_Fig1_HTML.png",
};

export default function Portfolio() {
  return (
    <div id="journey">
      <h2>Professional Experience</h2>

      <div className="boxExp">
        <div className="professionalExperience">
          <div className="experience-item">
            <h3>Signify Health</h3>
            <p className="duration">April 2022 - Present</p>
            <ul>
              <li>
                Built and maintained backend services using Java 8/11, Spring
                Boot, and Hibernate for healthcare apps.
              </li>
              <li>
                Developed SPAs with Angular 12, improving performance and user
                experience.
              </li>
              <li>
                Designed RESTful APIs and integrated Kafka for real-time
                messaging.
              </li>
              <li>
                Utilized AWS services (EC2, ECS, Lambda) to deploy and manage
                scalable applications.
              </li>
              <li>
                Implemented CI/CD pipelines using Jenkins and GitLab for
                seamless deployments.
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Acme Corp</h3>
            <p className="duration">Jan 2018 - Jan 2020</p>
            <ul>
              <li>
                Designed and built scalable full-stack solutions using React,
                Node.js, and MongoDB.
              </li>
              <li>
                Developed reusable components for SPAs, reducing development
                time by 20%.
              </li>
              <li>
                Integrated third-party APIs to enhance app functionality and
                user engagement.
              </li>
              <li>
                Optimized queries in MongoDB, improving application performance
                by 30%.
              </li>
              <li>
                Worked with UI/UX teams to enhance app usability and
                accessibility.
              </li>
            </ul>
          </div>

          <div className="experience-item">
            <h3>Tech Solutions Inc.</h3>
            <p className="duration">Aug 2016 - Dec 2017</p>
            <ul>
              <li>
                Built and deployed dynamic web applications using Angular,
                Spring Boot, and MySQL.
              </li>
              <li>
                Implemented authentication and authorization using JWT and OAuth
                2.0.
              </li>
              <li>
                Worked with Docker for containerization and deployment in
                staging environments.
              </li>
              <li>
                Collaborated with UI/UX teams to enhance app usability and
                accessibility.
              </li>
              <li>
                Optimized application performance through code refactoring and
                caching techniques.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Project Section */}
      {/* Project Section */}
      <div id="projects-kamal" className="projects">
        <h2>Projects</h2>

        <div className="project-item">
          <div className="project-image">
            <img src={images.packageTracking} alt="Package Tracking System" />
          </div>
          <div className="project-details">
            <h3>Package Tracking System</h3>
            <ul>
              <li>
                Developed a scalable package tracking system using Java Spring
                Boot, React, and MySQL.
              </li>
              <li>
                Implemented RESTful APIs for tracking package statuses and
                updating shipment information.
              </li>
              <li>
                Deployed microservices on AWS ECS using Docker containers,
                ensuring high availability and fault tolerance.
              </li>
              <li>
                Integrated external APIs to fetch real-time tracking updates.
              </li>
            </ul>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <img
              src={images.inventoryManagement}
              alt="Inventory Management System"
            />
          </div>
          <div className="project-details">
            <h3>Inventory Management System</h3>
            <ul>
              <li>
                Designed and implemented an inventory management system using
                Java 8 and 11 and Hibernate.
              </li>
              <li>
                Integrated with Oracle database for data persistence and
                retrieval.
              </li>
              <li>
                Developed RESTful APIs for managing inventory items and
                generating reports.
              </li>
              <li>
                Optimized inventory data processing by implementing background
                jobs for syncing data.
              </li>
            </ul>
          </div>
        </div>

        {/* New Full-Stack Developer Projects */}
        <div className="project-item">
          <div className="project-image">
            <img src={images.taskManagement} alt="Task Management System" />
          </div>
          <div className="project-details">
            <h3>Task Management System</h3>
            <ul>
              <li>
                Developed a full-stack task management application using
                Node.js, React, and MongoDB.
              </li>
              <li>
                Integrated real-time notifications using WebSockets to alert
                users of new tasks or updates.
              </li>
              <li>
                Implemented role-based access control to ensure secure task
                management.
              </li>
              <li>
                Deployed on AWS using EC2 instances and RDS for database
                management.
              </li>
            </ul>
          </div>
        </div>

        <div className="project-item">
          <div className="project-image">
            <img src={images.eCommerce} alt="Online E-commerce Platform" />
          </div>
          <div className="project-details">
            <h3>Online E-commerce Platform</h3>
            <ul>
              <li>
                Built a complete e-commerce platform using React, Node.js, and
                MongoDB for product management and sales.
              </li>
              <li>
                Implemented user authentication and authorization with JWT and
                OAuth 2.0.
              </li>
              <li>
                Integrated payment gateway (Stripe) for secure online
                transactions.
              </li>
              <li>
                Deployed the application with Docker and Kubernetes on AWS.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
