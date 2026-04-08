import { Navbar } from "./components/Navbar.js";
import { Hero } from "./components/Hero.js";
import { Services } from "./components/Services.js";
import { Footer } from "./components/Footer.js";

document.getElementById("navbar").innerHTML = Navbar();
document.getElementById("hero").innerHTML = Hero();
document.getElementById("services").innerHTML = Services();
document.getElementById("footer").innerHTML = Footer();