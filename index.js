
import reportWebVitals from './reportWebVitals';
import './index.css';

document.addEventListener("DOMContentLoaded", function() {
  const introText = "Hello! I am Yanilette Montano, a dedicated first-generation latina computer engineering student, entering into my second-year at Los Angeles Pierce College.";
  const hobbies = ["Coding", "Reading", "Hiking", "Weight Training"];
  
  //const profilePictureURL = "IMG_4922.jpeg";
  const instagramURL = "https://www.instagram.com/yanilettemontano/";
  const linkedinURL = "https://www.linkedin.com/in/yanilette-montano-bb9644292/";

  document.getElementById("intro-text").textContent = introText;

  const hobbiesList = document.getElementById("hobbies-list");
  hobbies.forEach(hobby => {
      const listItem = document.createElement("li");
      listItem.textContent = hobby;
      hobbiesList.appendChild(listItem);
  });

  document.getElementById("instagram-link").href = instagramURL;
  document.getElementById("linkedin-link").href = linkedinURL;
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
