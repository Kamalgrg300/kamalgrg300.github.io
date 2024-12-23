import "./portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-item">
        <header className="header">
          <h1 className="title">Kamal Gurung</h1>
        </header>
      </div>

      <div className="portfolio-item content-container">
        <img
          className="myPicture"
          src="https://img.freepik.com/premium-photo/vector-illustration-depicting-male-software-engineer_1110958-62459.jpg"
          alt="computer engineer"
        />
        <p>
          Hello. I am Kamal Gurung. I am a dedicated software engineer with a
          strong command of multiple programming languages, backend frameworks,
          frontend frameworks, databse, could platforms,DevOps tolls, Api's, web
          technologies, operating system and many more. and a proven ability to
          adapt to emerging technologies. My expertise lies in developing
          scalable, efficient, and innovative solutions tailored to meet diverse
          project requirements. With a deep understanding of both front-end and
          back-end development, I am skilled in creating robust applications
          that align with business goals. In a market where versatile and
          technically proficient engineers are highly sought after, I stand out
          by continuously refining my skills and staying ahead of industry
          trends to deliver exceptional results.
        </p>
      </div>

      <div className="coreTechSkills">
        <h2>Core Tech Skills</h2>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Skills</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Programming Languages</td>
              <td>Java (Java8/11), JavaScript, SQL</td>
            </tr>
            <tr>
              <td>Backend Frameworks</td>
              <td>Spring Boot, Hibernate, Microservices, Node.js, Kafka</td>
            </tr>
            <tr>
              <td>Frontend Frameworks</td>
              <td>Angular, React</td>
            </tr>
            <tr>
              <td>Databases</td>
              <td>MySQL, PostgreSQL, MongoDB, Oracle</td>
            </tr>
            <tr>
              <td>Cloud Platforms</td>
              <td>Amazon Web Services (AWS), Google Cloud Platform (GCP)</td>
            </tr>
            <tr>
              <td>DevOps Tools</td>
              <td>
                Git, Docker, Kubernetes, Jenkins, CI/CD pipelines, Postman, BDD
                Testing, Splunk
              </td>
            </tr>
            <tr>
              <td>APIs</td>
              <td>RESTful APIs, SOAP, MongoDB, GraphQL</td>
            </tr>
            <tr>
              <td>Web Technologies</td>
              <td>HTML, CSS, Bootstrap</td>
            </tr>
            <tr>
              <td>IDE Tools</td>
              <td>VSCode, Eclipse, IntelliJ</td>
            </tr>
            <tr>
              <td>Operating Systems</td>
              <td>UNIX/Linux, Windows XP/7/8/10/11, MacOS</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="professionalExperience">
        <h2>Professional Experience</h2>
        <div className="experience-item">
          <h3>Signify Health</h3>
          <p className="duration">April 2022 - Present</p>
          <ul>
            <li>
              Developed and maintained backend services using Java 8/11, Spring
              Boot, and Hibernate for healthcare applications.
            </li>
            <li>
              Developed single-page applications (SPAs) using Angular 11/12
              alongside Java backend services and developed the application by
              using HTML5 Java development expertise.
            </li>
            <li>
              Designed and implemented RESTful APIs to support integration with
              various healthcare systems and third-party services.
            </li>
            <li>
              Proficient in using Kafka Producer and Consumer APIs to publish
              and consume messages from Kafka topics and experience in
              integrating Kafka with Java applications for real-time data
              streaming and processing.
            </li>
            <li>
              Designed, implemented, and managed AWS cloud infrastructure for
              deploying Java applications, leveraging services such as EC2, VPC,
              Route 53, and IAM to ensure secure scalable environments and
              experience in implementing Angular routing for navigation in
              single-page applications.
            </li>
            <li>
              Experience in developing Kafka Stream applications for processing
              data in real-time using Kafka Streams API and angular components,
              services, and modules for creating modular and reusable code.
            </li>
            <li>
              Developed serverless applications using AWS Lambda, integrating
              with other AWS services like API Gateway, DynamoDB, or S3 for
              event-driven architecture and seamless scaling.
            </li>
            <li>
              Utilized Docker and Kubernetes for containerization and
              orchestration of services.
            </li>
            <li>
              Implemented CI/CD pipelines using Jenkins and enhanced Gitlab
              pipeline to deploy application in test environments (PCF) ensuring
              smooth processes.
            </li>
            <li>
              Orchestrated containerized applications using AWS ECS (Elastic
              Container Service) or EKS (Elastic Kubernetes Service), deploying
              Docker containers for microservices architecture in Java.
            </li>
            <li>
              Worked with Oracle and SQL Server databases for data persistence
              and retrieval, ensuring data security and compliance with
              healthcare regulations.
            </li>
            <li>
              Collaborated with cross-functional teams in a SAFe environment to
              deliver high-quality software solutions compliant with healthcare
              regulations.
            </li>
            <li>
              Proficiency in using Scala for building scalable and
              high-performance applications and ability to write clean,
              maintainable, and efficient Scala code.
            </li>
            <li>
              Created CI/CD pipelines using AWS Code Pipeline, Code Build, and
              Code Deploy to automate building, testing, and deploying Java
              applications, ensuring rapid and reliable releases.
            </li>
            <li>
              Experience integrating Scala with existing Java libraries and
              frameworks, leveraging JVM compatibility.
            </li>
            <li>
              Designed and implemented disaster recovery solutions using AWS
              services like AWS Backup, CloudFormation, and AWS Disaster
              Recovery, ensuring business continuity for Java applications.
            </li>
            <li>
              Proficient in using Git for version control, including setting up
              repositories, branching, merging, and managing code version.
            </li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>State Farm Insurance</h3>
          <p className="duration">Feb 2020 - March 2022</p>
          <ul>
            <li>
              Developed and maintained APIs applications using Java 11 and
              Spring boot application.
            </li>
            <li>
              Implemented Log4j2 for logging in microservices for enhanced
              debugging and monitoring.
            </li>
            <li>
              Designed and implemented the User Interface using JavaScript HTML5
              XHTML XML CSS3 JSP AJAX and MySQL.
            </li>
            <li>
              Experience in developing single-page applications (SPAs) using
              React alongside Java backend services.
            </li>
            <li>
              Utilized AWS S3 for scalable and durable object storage,
              integrating with Java applications for storing and retrieving
              large volumes of data securely.
            </li>
            <li>
              Implemented ingestion services to connect relational databases
              (RDBMS) using Kafka producer APIs and Kafka Connect.
            </li>
            <li>
              Experience with state management in React applications,
              particularly using Redux or React Context API.
            </li>
            <li>
              Built web applications using Java frameworks like spring boot and
              hibernate, integrating with frontend technologies to create
              interactive and responsive web interfaces.
            </li>
            <li>
              Implemented exactly once semantics in Kafka to ensure reliable
              message processing.
            </li>
            <li>
              Designed and developed Java-based applications for logistics and
              package tracking systems.
            </li>
            <li>
              Set up and managed SQL (RDS - Relational Database Service) and
              NoSQL (DynamoDB) databases on AWS, optimizing database performance
              and ensuring high availability for Java applications.
            </li>
            <li>
              Implemented backend services to support real-time package tracking
              and delivery updates and Integrated downstream APIs and services
              to enhance application functionality.
            </li>
            <li>
              Implemented AWS CloudWatch for monitoring Java applications,
              setting up alarms and dashboards to track performance metrics and
              detect issues proactively.
            </li>
            <li>
              Designed and developed microservices using Spring Boot that
              leverage Kafka for inter-service communication.
            </li>
            <li>
              Implemented AWS security best practices, configuring IAM roles,
              policies, and encryption methods to secure data and resources in
              compliance with industry standards.
            </li>
            <li>
              Participated in meetings, code reviews and provided constructive
              feedback to peers.
            </li>
            <li>
              Collaborated with DevOps teams to streamline deployment processes
              and improve system reliability.
            </li>
            <li>
              Optimized AWS resources usage and costs by implementing cost
              management strategies such as Reserved Instances, Spot Instances,
              and Auto Scaling for Java applications.
            </li>
            <li>
              Experience in collaborating with team members using Git for source
              code management, ensuring smooth workflow and code integrations.
            </li>
          </ul>
        </div>
      </div>

      <div className="projects">
        <h2>Projects</h2>
        <div className="project-item">
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
          </ul>
        </div>
        <div className="project-item">
          <h3>Inventory Management System</h3>
          <ul>
            <li>
              Designed and implemented an inventory management system using Java
              8 and 11 and Hibernate.
            </li>
            <li>
              Integrated with Oracle database for data persistence and
              retrieval.
            </li>
            <li>
              Developed RESTful APIs for managing inventory items and generating
              reports.
            </li>
          </ul>
        </div>
      </div>

      <div className="contactForm">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name.."
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email.."
            required
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your phone number.."
            required
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}
