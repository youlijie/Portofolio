import fishEyeVideo from "../assets/videos/fisheye_x264.mp4";
import ohmyfood from "../assets/videos/ohmyfood.mp4";
import kasa from "../assets/videos/kasa.mp4";
import sportsee from "../assets/videos/sportsee.mp4";
import lespetitsplatsvideo from "../assets/videos/lespetitsplatsvideo.mp4";
import learnjavascript from "../assets/videos/learnjavascript.mp4";
import taskmanager from "../assets/videos/taskmanager.mp4";
import jwtbasic from "../assets/videos/jwtbasic.mp4";
import jobsapi from "../assets/videos/jobsapi.mp4";
import fileupload from "../assets/videos/fileupload.mp4";
import stripe from "../assets/videos/stripe.mp4";
import ecommerceapi from "../assets/videos/ecommerceapi.mp4";
import authworkflow from "../assets/videos/authworkflow.mp4";
import fisheye1 from "../assets/pictures/projects/fisheye1-min.PNG"
import fisheye2 from "../assets/pictures/projects/fisheye2-min.PNG"
import ohmyfood1 from "../assets/pictures/projects/ohmyfood1.png"
import ohmyfood2 from "../assets/pictures/projects/ohmyfood1.png"
import kasa1 from "../assets/pictures/projects/kasa1.png"
import kasa2 from "../assets/pictures/projects/kasa2.png"
import kasa3 from "../assets/pictures/projects/kasa3.png"
import lespetitsplats from "../assets/pictures/projects/lespetitsplats.png"
import sportsee1 from "../assets/pictures/projects/sportsee1.png"
import learnjavascript1 from "../assets/pictures/projects/learnjavascript1.png"
import learnjavascript2 from "../assets/pictures/projects/learnjavascript2.png"
import taskmanager1 from "../assets/pictures/projects/taskmanager1.png"
import taskmanager2 from "../assets/pictures/projects/taskmanager2.png"
import jwtbasic1 from "../assets/pictures/projects/jwtbasic1.png"
import jobsapi1 from "../assets/pictures/projects/jobsapi1.png"
import fileupload1 from "../assets/pictures/projects/fileupload1.png"
import stripe1 from "../assets/pictures/projects/stripe1.png"
import ecommerceapi1 from "../assets/pictures/projects/ecommerceapi1.png"
import authworkflow1 from "../assets/pictures/projects/authworkflow1.png"
import authworkflow2 from "../assets/pictures/projects/authworkflow2.png"
import authworkflow3 from "../assets/pictures/projects/authworkflow3.png"
import authworkflow4 from "../assets/pictures/projects/authworkflow4.png"

export const projectMap = [
    {title : "Auth Workflow" ,description :"Authentication with reset password and multiple cookies",video : authworkflow ,icons :["node","express","mongodb"],githubLink :"https://github.com/youlijie/Auth-Workflow-NodeJS-MongoDB/tree/master/server" ,directLink:"https://react-node-user-workflow-front-end.netlify.app/" ,fullDescription : "Authentication made from the E-Commerce API but, with added functionality like reset password and connection with multiple cookies." ,pictures : [authworkflow1, authworkflow2, authworkflow3, authworkflow4] },
    {title : "E-Commerce API" ,description :"E-Commerce API server",video : ecommerceapi ,icons :["node","express","mongodb"],githubLink :"https://github.com/youlijie/E-Commerce-API-NodeJS-MongoDB" ,directLink:"https://e-commerce-api-node-mongo-1.herokuapp.com/" ,fullDescription : "Create an E-Commerce API with data hosted on MongoDB, connection with JWTCookies, and come with a doc(docgen)" ,pictures : [ecommerceapi1] },
    {title : "Stripe Payment" ,description :"Stripe Payment Server",video : stripe ,icons :["node","express"],githubLink :"https://github.com/youlijie/Stripe-Payment-NodeJS-MongoDB" ,directLink:"https://github.com/youlijie/Stripe-Payment-NodeJS-MongoDB" ,fullDescription : "Implementation of Stripe payment using mock data to simulate an order" ,pictures : [stripe1] },
    {title : "File Upload" ,description :"File Upload Server",video : fileupload ,icons :["node","express","mongodb"],githubLink :"https://github.com/youlijie/File-Upload-NodeJS-MongoDB" ,directLink:"https://github.com/youlijie/File-Upload-NodeJS-MongoDB" ,fullDescription : "File Upload server with picture hosted on cloudinary and date on MongoDB" ,pictures : [fileupload1] },
    {title : "Jobs API" ,description :"CRUD of a Jobs API",video : jobsapi ,icons :["node","express","mongodb"],githubLink :"https://github.com/youlijie/Jobs-API-NodeJS-MongoDB/tree/master/starter" ,directLink:"https://jobs-api-nodejs-mongodb.herokuapp.com/api-docs/#/" ,fullDescription : "Create a Jobs API with JWT connection and come with a doc" ,pictures : [jobsapi1] },
    {title : "JWT Basics" ,description :"JWT basics connection from local storage data",video : jwtbasic ,icons :["node","express"],githubLink :"https://github.com/youlijie/JWT-Basics-NodeJS-MongoDB/tree/master/starter" ,directLink:"https://github.com/youlijie/JWT-Basics-NodeJS-MongoDB/tree/master/starter" ,fullDescription : "Create a basic JWT server connection from local storage" ,pictures : [jwtbasic1] },
    {title : "Task Manager API" ,description :"Simple CRUD of a Task Manager API",video : taskmanager ,icons :["node","express","mongodb"],githubLink :"https://github.com/youlijie/Task-Manager-NodeJS-MongoDB/tree/master" ,directLink:"https://github.com/youlijie/Task-Manager-NodeJS-MongoDB/tree/master" ,fullDescription : "Create a simple CRUD server of a task manager with data hosted on MongoDB" ,pictures : [taskmanager1, taskmanager2] },
    {title : "learnjavascript Final Project" ,description :"Final project of learnjavascript.online",video : learnjavascript ,icons :["javascript"],githubLink :"https://github.com/youlijie/learnjavascript.online-Final-Project-Javascript-" ,directLink:"https://learnjavascript.online/" ,fullDescription : "The purpose of the project was to follow a step-by-step approach that mimics how a developer would build a project and also refactor our code from time to time as well as deal with some edge cases." ,pictures : [learnjavascript1, learnjavascript2] },
    {title : "Sportsee" ,description :"Build an analytics dashboard with React",video : sportsee ,icons :["sass","react"],githubLink :"https://github.com/youlijie/ThibaultWerle_12_02032022" ,directLink:"https://youlijie.github.io/ThibaultWerle_12_02032022/" ,fullDescription : "Ensuring the data quality of an application, Develop advanced graphical elements using JavaScript libraries, Interact with a web service, Produce technical documentation for an application." ,pictures : [sportsee1] },
    {title : "Kasa" ,description :"Develop a web application with React and React Router",video : kasa ,icons :["sass","react"],githubLink :"https://github.com/youlijie/ThibaultWerle_11_22012022" ,directLink:"https://youlijie.github.io/ThibaultWerle_11_22012022/#/" ,fullDescription : "Developing routes for a web application with React Router, Initialize a web application with a framework, Create components with React." ,pictures : [kasa1, kasa2, kasa3] },
    {title : "Les petits plats" ,description :"Develop a search algorithm in JavaScript",video : lespetitsplatsvideo ,icons :["html","css","javascript"],githubLink :"https://github.com/youlijie/ThibaultWerle_7_16112021" ,directLink:"https://youlijie.github.io/ThibaultWerle_7_16112021/" ,fullDescription : "Analyze a computer problem, Develop an algorithm to solve a problem." ,pictures : [lespetitsplats] },
    {title : "Fisheye" ,description :"a platform for photographers in vanilla javascript ",video : fishEyeVideo ,icons :["javascript","html","sass"],githubLink :"https://github.com/youlijie/ThibaultWerle_6_20082021" ,directLink:"https://youlijie.github.io/ThibaultWerle_6_20082021/" ,fullDescription : "fisheye is a photographer's platform that I had to create during my openclassroom training. This application was integrated from a model and the emphasis is on accessibility." ,pictures : [fisheye1,fisheye2] },
    {title : "Ohmyfood" ,description :"Liven up a web page with CSS animations",video : ohmyfood ,icons :["html","css"],githubLink :"https://github.com/youlijie/ThibaultWerle_3_24072021" ,directLink:"https://youlijie.github.io/ThibaultWerle_3_24072021/" ,fullDescription : "Implement advanced CSS graphic effects, Ensure the graphic consistency of a website, Set up its Front-End environment, Set up a navigation structure for a website, Use a version management system for tracking of the project and its hosting." ,pictures : [ohmyfood1, ohmyfood2] },
]