//9t11eTG34zO6gjnLmtOqtxvZzP9xTpZfwxMXZ8u8
const root = document.getElementById("root");

const getdata = fetch(
  "https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=9t11eTG34zO6gjnLmtOqtxvZzP9xTpZfwxMXZ8u8"
);
console.log(getdata);

getdata
  .then((data) => {
    return data.json();
  })
  .then((rover) => {
    console.log(rover);
    const roverinformation = [rover].map((roverinfo, index) => {
      console.log(roverinfo.photo_manifest);

      const rovername = document.getElementById("curiosity-name");
      rovername.textContent = roverinfo.photo_manifest.name;

      const landingdate = document.getElementById("landing-date-curiosity");
      landingdate.textContent =
        "Landing date: " + roverinfo.photo_manifest.landing_date;
    });
  });


let earthdateinfo="";
function earthdatefunc() {
  let earthdate = document.getElementById("earthdate").value;
  earthdateinfo = earthdate;
  console.log(earthdateinfo);
}

let camera = "";

function setCamera_FHAZ() {
  camera = "fhaz";
  console.log(camera);
}
function setCamera_RHAZ() {
  camera = "rhaz";
  console.log(camera);
}
function setCamera_MAST() {
  camera = "mast";
  console.log(camera);
}
function setCamera_CHEMCAM() {
  camera = "chemcam";
  console.log(camera);
}
function setCamera_MAHLI() {
  camera = "mahli";
  console.log(camera);
}
function setCamera_MARDI() {
  camera = "mahdi";
  console.log(camera);
}
function setCamera_NAVCAM() {
  camera = "navcam";
  console.log(camera);
}

const imgdiv = document.getElementById("mars-images");

function photofetch() {
  const getphotos = fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + earthdateinfo + "&camera=" + camera +"&api_key=9t11eTG34zO6gjnLmtOqtxvZzP9xTpZfwxMXZ8u8"
  );
  console.log(getphotos);

  getphotos
    .then((photosgot) => {
      return photosgot.json();
    })
    .then((photo) => {
      console.log(photo);
      const photoinformation = photo.photos.map((photoinfo, index) => {
        console.log(photoinfo.img_src);

        const imageplace = document.createElement("img");
        imageplace.setAttribute("src", photoinfo.img_src);
        imageplace.setAttribute("class", 'img-thumbnail');
        imageplace.setAttribute("style", 'max-width: 25%')
        imgdiv.appendChild(imageplace);
      });
    });
}

