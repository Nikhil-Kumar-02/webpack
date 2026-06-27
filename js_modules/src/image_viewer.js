import '../styles/image_viewer.css'
import a from "../images/a.jfif"
import b from "../images/b.jfif"
import c from "../images/c.jfif"
import d from "../images/d.jfif"
import e from "../images/e.jfif"

const aimage = document.createElement('img');
const eimage = document.createElement('img');

// image.src = "https://picsum.photos/seed/myproject/400/400"
aimage.src = a;
eimage.src = e;

document.body.appendChild(aimage);
document.body.appendChild(eimage);
