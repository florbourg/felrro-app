import iramLogo from "../images/logos/iram.png";
import iqLogo from "../images/logos/logo_iqnet.png";
import ulLogo from "../images/logos/ce-4-ul.png";
import ceLogo from "../images/logos/CE_Approved_logo.png";

export const slidersInfo = [
  {
    title: "INSTRUMENTACION",
    description:
      "Recomendados para la interconexión de equipos de control e instrumentación electrónica. Estos cables están diseñados para proteger en forma íntegra las señales digitales y/o analógicas",
    img: "./images/home/B_01_Instrumentacion-M.jpg",
    pdf: "http://felrro.com/pdf/instrum/Instrumentacion.pdf",
    color: "#f28518",
    url: "/productos?id=1",
  },
  {
    title: "POTENCIA",
    description:
      "Cable para distribución de energía resistente a la propagación de incendios, para ser utilizados en edificios e instalaciones industriales; tendidos en forma horizontal o vertical. Aptos para instalaciones sobre bandejas, caños ó directamente enterrados.",
    img: "./images/home/B_07_Potencia-M.jpg",
    pdf: "http://felrro.com/pdf/potencia/Potencia.pdf",
    color: "#6fc8c9",
    url: "/productos?id=34",
  },
  {
    title: "FLEXIBLES",
    description:
      "Cables flexibles para control, resistentes a los aceites y agentes químicos. De fácil instalación gracias a su maniobrabilidad y reducido diámetro. Aptos para alimentación de botoneras, máquinas herramientas, montacargas y equipos expuestos a severas condiciones de temperatura y químicos.",
    img: "./images/home/B_05_Flexible-M.jpg",
    pdf: "http://felrro.com/pdf/instrum/Instrumentacion.pdf",
    color: "#c0509c",
    url: "/productos?id=57",
  },
  {
    title: "BOMBAS SUMERGIBLES",
    description:
      "Cables y alambres diseñados para conectar eléctricamente equipos que se encuentran sumergidos ó en contacto permanente con agua u otros fluidos. Cables para alimentación eléctrica que pueden ser de sección plana o redonda y construidos con diferentes tipos de compuestos plásticos que le confieren cualidades particulares, como resistencia al agua salada, compatibilidad con agua potable, resistencia a diversos agentes químicos, etc. y los alambres para bobinado de bombas sumergibles del tipo húmedo.",
    img: "./images/home/B_02_Bombas-M.jpg",
    pdf: "http://felrro.com/pdf/bombas/Bombas.pdf",
    color: "#ba7975",
    url: "/productos?id=47",
  },
  {
    title: "SOLDADURA",
    description:
      "Cables extraflexibles diseñados para la transmisión de alta intensidad de corriente entre la máquina de soldar ARC ó MIG/MAG y la pinza porta-electrodo. Estos cables se ofrecen con dos tipos de aislaciones. ET elastómero termoplástico que garantiza una mayor vida útil gracias a su alta resistencia mecánica, química y amplio rango de temperaturas de trabajo; y la alternativa económica en PVC de buenas propiedades físicas y mecánicas.",
    img: "./images/home/B_09_Soldadura-M.jpg",
    pdf: "http://felrro.com/pdf/soldadura/Soldadura.pdf",
    color: "#81a367",
    url: "/productos?id=53",
  },
  {
    title: "COMANDO",
    description:
      "Cables diseñados para transporte de señales de comando y señalización en baja tensión (BT).Los cables de Comando son fabricados con diferentes compuestos para obtener cualidades acordes a cada aplicación. Resistencia a los hidrocarburos, resistencia al fuego, resistencia a los rayos ultravioletas, libre dehalógenos, baja emisión de humos, libre de metales pesados, etc.",
    img: "./images/home/B_03_Comando-M.jpg",
    pdf: "http://felrro.com/pdf/comando/Comando.pdf",
    color: "#1c43ad",
    url: "/productos?id=23",
  },
  {
    title: "DATOS",
    description:
      "Cables diseñados para uso en transmisión de datos, control de procesos, automatización y comunicación industrial, buses de campo FIELDBUS PROFIBUS, sistemasinformáticos EIA RS-232, RS-422 y RS-485. Los materiales especiales, los métodos de elaboración y los blindajes que componen estos cables los hacen aptos para transmitir señales en grandes distancias y en zonas de interferencias electromagneticas (EMI).",
    img: "./images/home/B_04_Datos-M.jpg",
    pdf: "http://felrro.com/pdf/datos/Datos.pdf",
    color: "#bfa03b",
    url: "/productos?id=11",
  },
  {
    title: "PIROMETRIA",
    description:
      "Cables aptos para la distribución y alimentación de energía en baja tensión (BT).Los cables de Potencia son fabricados con diferentes compuestos que le confieren cualidades acordes a cada aplicación. Para uso pesado pueden incluir protecciones mecánicas de acero tipo corona helicoidal, malla trenzada ó doble fleje. Como así también blindajes y pantallas parareducir los efectos de las pertubaciones electromagnéticas en alimentación de variadores de velocidad por frecuencia, playas de maniobra, subestaciones, centrales, etc.",
    img: "./images/home/B_06_Pirometria-M.jpg",
    pdf: "http://felrro.com/pdf/pirometria/Pirometria.pdf",
    color: "#f21818",
    url: "/productos?id=6",
  },
  {
    title: "PROTECCIÓN CATODICA",
    description:
      "Cables diseñados para suministrar corriente a los ánodos desde la fuente de alimentación. Estos cables se ofrecen con varios tipos de aislaciones y formaciones adaptándose a las necesidades de cada instalación.",
    img: "./images/home/B_08_Catodica-M.jpg",
    pdf: "http://felrro.com/pdf/catodica/Catodica.pdf",
    color: "#83096f",
    url: "/productos?id=75",
  },
];

export const certificados = [
  {
    title: "Normas IRAM",
    description:
      "Certificación sobre sistemas de Gestión de Calidad bajo las normas ISO 9001:2015",
    icon: <img src={iramLogo} alt="" />,
    pdf: "http://www.felrro.com.ar/images/Certificados/CertificadoISO2019.pdf",
  },
  {
    title: "Certificado IQNet",
    description:
      "Fabricación y Distribución de cables eléctricos especiales normalizados",
    icon: <img src={iqLogo} alt="" />,
    pdf: "http://www.felrro.com.ar/images/Certificados/CertificadoIQNET2019.pdf",
  },
  {
    title: "Sello UL Listed",
    description:
      "Certificación en nuestra línea de cables de instrumentación, para las familias FR y FH",
    icon: <img src={ulLogo} alt="" />,
    pdf: "http://www.felrro.com/pdf/Certificacion_UL_Listed_2.pdf",
  },
  {
    title: "Certificado CE",
    description:
      "Certificado de la Comunidad Europea para nuestros cables tipo taller y unipolares",
    icon: <img src={ceLogo} alt="" />,
    pdf: "http://www.felrro.com/pdf/Declaracion%20CE%20de%20conformidad.pdf",
  },
];
