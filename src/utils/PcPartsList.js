import amd5600x from "../assets/img/cpu/amd5600x.webp"
import amd5800x from "../assets/img/cpu/amd5800x.webp"
import amd5900x from "../assets/img/cpu/amd5900x.webp"
import intel12600k from "../assets/img/cpu/intel12600k.webp"
import intel12700k from "../assets/img/cpu/intel12700k.webp"
import intel12900k from "../assets/img/cpu/intel12900k.webp"
import asus6800xt from "../assets/img/gpu/asus6800xt.webp"
import asusrtx3080 from "../assets/img/gpu/asusrtx3080.webp"
import evgartx3060 from "../assets/img/gpu/evgartx3060.webp"
import evgartx3070ti from "../assets/img/gpu/evgartx3070ti.webp"
import msirx6700xt from "../assets/img/gpu/msirx6700xt.webp"
import msirx6900xt from "../assets/img/gpu/msirx6900xt.webp"

const PcPartsList = {
  cpu: [
    { name: "AMD Ryzen 5 5600x", price: "299.99€", img: amd5600x, id: "amd5600x" },
    { name: "AMD Ryzen 7 5800x", price: "449.99€", img: amd5800x, id: "amd5800x" },
    { name: "AMD Ryzen 9 5900x", price: "549.99€", img: amd5900x, id: "amd5900x" },
    { name: "Intel i5-12600k", price: "299,99€", img: intel12600k, id: "intel12600k" },
    { name: "Intel i7-12700k", price: "499,99€", img: intel12700k, id: "intel12700k" },
    { name: "Intel i9-12900k", price: "599,99€", img: intel12900k, id: "intel12900k" },
  ],
  gpu: [
    {
      name: "EVGA RTX 3060 XC",
      price: "899.99€",
      img: evgartx3060,
      id: "evgartx3060",
    },
    {
      name: "EVGA RTX 3070ti",
      price: "899.99€",
      img: evgartx3070ti,
      id: "evgartx3070ti",
    },
    {
      name: "ASUS TUF RTX 3080",
      price: "899.99€",
      img: asusrtx3080,
      id: "asustufrtx3080",
    },
    {
      name: "MSI RX 6700XT",
      price: "299.99€",
      img: msirx6700xt,
      id: "msirx6700xt",
    },
    {
      name: "ASUS TUF RX 6800XT",
      price: "299.99€",
      img: asus6800xt,
      id: "asustufrx6800xt",
    },
    {
      name: "MSI RX 6900XT",
      price: "299.99€",
      img: msirx6900xt,
      id: "msirx6900xt",
    },
  ],
}

export default PcPartsList
