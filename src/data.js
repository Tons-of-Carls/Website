/*
image
year
place
description
title
awards
link
*/
const projectData = [
  {
    image: "./files/vulpix500.png",
    title: "3D Reconstruction",
    year: 2019,
    description: `I did this project during my second year at UCI. It was spring quarter and I had just finished an introductory course to computer vision. I really enjoyed what I learned in that introductory course and decided to take the computer vision project course offered by UCI. During the first 2 weeks we learned about how pinhole cameras and modern day cameras work. I had the chance to explore how the geometry of pinholes and lenses were different but still gave similar results. From there we looked at projections, camera rotations, and camera movement. We focused on how an image would change when the camera rotated or moved. With this we were able to build up a mathematical model of where a point in 3d would appear in an image given the camera’s rotation and translation from the origin. We built that up further by adding another camera. This allowed us to mathematically relate the x, y coordinates from 2 cameras to the 3d coordinates. The relationship formed the basis of triangulation and allowed us recover 3d points for this 3d reconstruction project.
<br/><br/>
We need 2 cameras because a photo only give us 2 coordinates: x and y. When we try to solve for the z coordinate we actually get a line. With 2 photos from 2 cameras at 2 different locations we can get 2 lines. Where those lines cross in 3d space is the 3d point we are looking for. I should note that the two points we use in the photos need to be of the same point in 3d space. This leads us to the correspondence problem. There are several techniques to find corresponding points between two images. One technique is called SURF which uses hog descriptors to find correspondences. For this project though we used a different technique called Structured Light Scanning (SLS). SLS is where a series of vertical and horizontal lines are projected onto the object. The vertical and horizontal lines create a unique code, similar to binary, for each 3d point we want to recover. We can then match these codes up for both images to find point correspondences.
<br/><br/>
Finally I used a Delaunay Triangulation to connect up points and create a mesh. I did this 5 more times with 5 different sets of images. This gave me 5 different meshes of the object from different viewpoints, which I then aligned using a 3rd party software called Meshlab. There were some holes in the final model but I used another 3rd party software to do a poisson reconstruction, which filled in the holes.

    `,
    place: "CS 117: Project in Computer Vision",
    links:[
      {
        url: "./files/Final report.pdf",
        title: "Final Report.pdf"
      },
      {
        url: "./3dModel.html",
        title: "3D Model"
      }
    ],
  },

  {
    title: "Stern Gerlach Experiment Simulation",
    year: 2019,
    place: "Beach Hacks 2019",
    description: "Coming Soon",
  },

  {
    title: "Resistor Reader",
    year: 2019,
    place: "LA Hacks 2019",
    description: "Coming Soon",
  },

  {
    image: "./files/crapmaps.jpg",
    year: 2019,
    place: "Hack UCI 2019",
    description: `Created a mobile application that allows users to rate and review restrooms around them. The app can
     also point users to the closest restrooms in emergency situations. Developed the user interface in react native 
     and connected the front end to a Firebase realtime database. This app won Best Joke Hack at Hack UCI 2019.`,
    title: "CrapMaps",
    awards: "Hack UCI 2019: Best Joke Hack",
  },

  {
    image: "./files/tshirtcannon.jpg",
    year: 2018,
    place: `<a href=\"https://zotbotics.org\"><u>Zotbotics</u></a> Summer Design Project`,
    description: `Collaborated within a team of 6 people to build a robot that shoots t-shirts. Learned about the 
    design process of building a robot. Helped put together the bill of materials. Wrote the code to control the 
    cannon’s release mechanism. Using air pressure, the t-shirt cannon is able to shoot a t-shirt over 30 feet.`,
    title: "T-Shirt Cannon",
    links:[
      {
        url: "https://blog.zotbotics.org/?cat=4",
        title: "See more..."
      },
    ]
  },

  {
    year: 2018,
    place: "LA Hacks 2018",
    description: `Worked in a team of 5 students to design a web application in 36 hours, which helps students choose 
    a major. Programmed interface between the front and back end using the Firebase API.`,
    title: "Careers 4 Dummies",
  },

  {
    title: "Ruby",
    year: 2017,
    place: "Robodox",
    description: "Coming Soon",
  },

  {
    title: "Neo",
    year: 2016,
    place: "Robodox",
    description: "Coming Soon",
  }

];


/*
CS 117 project
Stern Gerlach experiment simulation
Resistor Reader
ruby
neo
*/