const Menu = `
<div class="col-md-1 d-flex flex-row justify-content-center">
    <a href="./index.html">Home</a>
</div>
<div class="col-md-1 d-flex flex-row justify-content-center">
    <a href="./Projects.html">Projects</a>
</div>
<div class="col-md-1 d-flex flex-row justify-content-center">
    <a href="./files/CARLETON%20ZHAO.pdf">Resume</a>
</div>
<div class="col-md-1 d-flex flex-row justify-content-center">
    <a href="https://github.com/Tons-of-Carls">Github</a>
</div>
<div class="col-md-1 d-flex flex-row justify-content-center">
    <a href="https://devpost.com/Tons-of-Carls/">Devpost</a>
</div>
`;

/*
image
year
place
description
title
 */

class Project extends Base{

  static show(code, indicator)
  {
    return indicator ? code : "";
  }

  render(){

    const image = `<div class="col-lg-3 text-center"><a href="${this.props.image}"><img src="${this.props.image}" class="img-fluid"></a></div>`;
    const date = `<p><h6><strong>Date:</strong> ${this.props.year}</h6></p>`;
    const place = `<p><h6><strong>Developed At:</strong> ${this.props.place}</h6></p>`;
    const description = `<p><h6><strong>Description:</strong> ${this.props.description}</h6></p>`;
    const awards = `<p><h6><strong>Awards:</strong> ${this.props.awards}</h6></p>`;
    const link = `<a href="${this.props.link}" target="_blank">See More...</a>`

    const size = Project.show(image, this.props.image) ? "9" : "12"

    return `
<div class="row">
    <div class="col-lg-12">
        <h4><strong>${this.props.title}</strong></h4>
    </div>
</div>
<div class="row">
    ${Project.show(image, this.props.image)}
    <div class="col-lg-${size}">
        ${Project.show(date, this.props.year)}
        ${Project.show(place, this.props.place)}
        ${Project.show(description, this.props.description)}
        ${Project.show(awards, this.props.awards)}
        ${this.props.links ? this.props.links.map((item)=>{
          return `<a href="${item.url}" target="_blank">${item.title}</a><br/>`
        }
      ).join("") : ""}
    </div>
</div>

<hr/>
    `
  }
}

document.getElementById("Menu").innerHTML = Menu;
document.getElementById("projects").innerHTML = new List({data: projectData, display: Project}).render()