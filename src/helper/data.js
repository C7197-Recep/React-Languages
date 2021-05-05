/*REACTTE FOTOĞRAFLARI GÖSTERMENİN 2 YOLU VAR:
1.import : Buradaki örnek
2.require : App.js içindeki logo örneği
*/
import css from "../components/img/css.png";
import python from "../components/img/python.png";
import java from "../components/img/java.png";
import cpp from "../components/img/cpp.png";
import go from "../components/img/go.png";
import php from "../components/img/php.png";
import javascript from "../components/img/javascript.png";
import html from "../components/img/html.png";

const data = [
  {
    name: "javascript",
    img: javascript,
    options: ["Website Development", "1995", "Brendan Eich"],
  },
  {
    name: "html",
    img: html,
    options: ["Website Development", "1993", "Tim Berners-Lee"],
  },
  {
    name: "css",
    img: css,
    options: ["Website Design", "1994", "Håkon Wium Lie"],
  },
  {
    name: "python",
    img: python,
    options: ["AI", "1980", "Guido van Rossum"],
  },
  {
    name: "java",
    img: java,
    options: ["BackEnd", "1990s", "Sun Microsystems"],
  },
  {
    name: "c++",
    img: cpp,
    options: ["Game Dev.", "1980s", "Bjarne Stroustrup"],
  },
  {
    name: "go",
    img: go,
    options: ["Network", "2009", "Robert Griesemer"],
  },
  {
    name: "php",
    img: php,
    options: ["BackEnd", "1995", "	Rasmus Lerdorf"],
  }
];
export default data;