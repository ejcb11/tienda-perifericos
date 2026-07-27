import React, { useState, useRef, useEffect } from 'react';
import './store-theme.css';


import { InputText, Modal, Carrusel, Boton, SwitchToggle } from './index.jsx'; 
/*
import Acordeon from './components/acordeon/Acordeon.jsx';
import DateRange from './components/date-range/DateRange.jsx';
import SelectDinamico from './components/select-dinamico/SelectDinamico.jsx';
import ShowcaseBox from './components/ShowcaseBox/ShowcaseBox.jsx';
import SideBar from './components/Side-bar/SideBar.jsx';
import Table from './components/table/Table.jsx';
import Tabs from './components/tabs/Tabs.jsx';
import Toast from './components/toast/Toast.jsx';
import Tooltip from './components/tooltip/Tooltip.jsx';
*/

import fotoEduardo from './assets/eduardo.jpg'; 
import fotoAngel from './assets/angel.jpg'; 
import fotoDavid from './assets/david.jpg'; 
import fotoYoxs from './assets/yoxs.jpg'; 
import imagenFooter from './assets/imagen-footer3.jpg';


import airpods1 from './assets/airpods.png';
import airpods2 from './assets/airpods2.png';
import airpods3 from './assets/airpods3.png';


import imagenOverwatch from './assets/overwatch.png';


import imagen1 from './assets/imagen1.jpg';
import imagen2 from './assets/imagen2.jpg';
import imagen3 from './assets/imagen3.jpg';
import imagen4 from './assets/imagen4.jpg';
import imagen5 from './assets/imagen5.jpg';
import imagen6 from './assets/imagen6.jpg';
import imagen7 from './assets/imagen7.jpg';
import imagen8 from './assets/imagen8.jpg';
import imagen9 from './assets/imagen9.jpg';
import imagen10 from './assets/imagen10.jpg';
import imagen11 from './assets/imagen11.jpg';
import imagen12 from './assets/imagen12.jpg';


function AlertModal({ isOpen, onClose, mensaje }) {
    if (!isOpen) return null;
    return (
        <div className="alert-modal-overlay" onClick={onClose}>
            <div className="alert-modal-wrapper" onClick={e => e.stopPropagation()}>
                {/* La mascota asomándose */}
                <img src={imagenOverwatch} alt="Alerta Sistema" className="alert-modal-mascot" />
                
                <div className="alert-modal-content glassmorphism-nav">
                    <button className="alert-modal-close" onClick={onClose}>✕</button>
                    <h2 className="alert-modal-title">Aviso del Sistema</h2>
                    <p className="alert-modal-message">{mensaje}</p>
                    <button className="alert-modal-btn" onClick={onClose}>ENTENDIDO</button>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// COMPONENTE: MENÚ DESPLEGABLE (PRODUCTOS)
// ==========================================
function MenuDesplegable({ children, contenido, onToggle }) {
    const [isOpen, setIsOpen] = useState(false);
    const cerrarMenu = () => setIsOpen(false);

    return (
        <div className="menu-desplegable-wrapper">
            <div className="menu-trigger" onClick={() => {
                setIsOpen(!isOpen);
                if(onToggle) onToggle(); 
            }}>
                {children}
            </div>
            {isOpen && (
                <>
                    <div className="menu-overlay" onClick={cerrarMenu}></div>
                    <div className="mega-menu-panel" onClick={(e) => e.stopPropagation()}>
                        {React.cloneElement(contenido, { onClose: cerrarMenu })}
                    </div>
                </>
            )}
        </div>
    );
}

// ==========================================
// COMPONENTE: MENÚ DESPLEGABLE SIMPLE (EQUIPO & CONTACTO)
// ==========================================
function MenuSimple({ children, opciones, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="menu-simple-wrapper">
            <div className="menu-trigger" onClick={() => setIsOpen(!isOpen)}>
                {children}
            </div>
            {isOpen && (
                <>
                    <div className="menu-overlay" onClick={() => setIsOpen(false)}></div>
                    <div className="menu-simple-dropdown glassmorphism-nav">
                        {opciones.map(op => (
                            <div 
                                key={op.id} 
                                className="menu-simple-item" 
                                onClick={() => { setIsOpen(false); onSelect(op); }}
                                style={op.style} 
                            >
                                {op.icon && <span style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>{op.icon}</span>}
                                {op.name}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

// RECIBE LAS FUNCIONES PARA FILTRAR Y CERRAR
function MegaMenuProducts({ onCategoryClick, onClose }) {
    const categories = [
        { name: 'Mouse', searchTerm: 'Mouse', img: 'https://fantechworld.com/cdn/shop/files/Collection_Image_Mice_061207e8-b021-41ea-8adf-42856cb82c0b.png?v=14544363280142083004' },
        { name: 'Teclados', searchTerm: 'Teclado', img: 'https://fantechworld.com/cdn/shop/files/Collection_Image_Keyboard_9a2f139b-2107-4b46-ae92-7d7ce0e9bfca.png?v=16141341206661834728' },
        { name: 'Audifonos', searchTerm: 'Headset', img: 'https://fantechworld.com/cdn/shop/files/Collection_Image_Audio_0825104e-1c5d-4c97-aa9b-fd8f69730e65.png?v=14269119583080409126' },
        { name: 'Accessorios', searchTerm: 'Accesorio', img: 'https://fantechworld.com/cdn/shop/files/Collection_Banner_Accessories.png?v=9882958021404065538' },
        { name: 'Controles', searchTerm: 'Console', img: 'https://fantechworld.com/cdn/shop/files/Collection_Image_Console_8bf7e15a-ab1b-438b-9e8c-cd84d14ed511.png?v=6168298525374764213' },
        { name: 'Microfonos y laptops', searchTerm: 'Streaming', img: 'https://fantechworld.com/cdn/shop/files/Collection_Image_Streaming.png?v=1893670215478276469' },
    ];

    return (
        <div className="mega-menu-container">
            <div className="mega-menu-grid" style={{ marginBottom: 0 }}>
                {categories.map((cat, index) => (
                    <div 
                        key={index} 
                        className="mega-menu-item"
                        onClick={() => {
                            if (onCategoryClick) onCategoryClick(cat.searchTerm);
                            if (onClose) onClose(); 
                        }}
                    >
                        <img src={cat.img} alt={cat.name} />
                        <span>{cat.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// APLICACIÓN PRINCIPAL (LA TIENDA)
// ==========================================
export default function App() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const [modalEquipoAbierto, setModalEquipoAbierto] = useState(false);
  const [miembroSeleccionado, setMiembroSeleccionado] = useState(null);

  const [modalFacturaAbierto, setModalFacturaAbierto] = useState(false);

  // NUEVO ESTADO PARA NUESTRO MODAL DE ALERTAS D.VA
  const [alertaSistema, setAlertaSistema] = useState({ isOpen: false, mensaje: '' });

  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [filtroAplicado, setFiltroAplicado] = useState('');
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  
  const [carrito, setCarrito] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  
  const [fechaEntrega, setFechaEntrega] = useState('');

  // ESTADO PARA LA ANIMACIÓN ESTILO APPLE
  const [scrollProgress, setScrollProgress] = useState(0);

  const seccionProductosRef = useRef(null);
  const carouselColRef = useRef(null);
  const appleContainerRef = useRef(null); 

  const teamMembers = [
    { id: 1, name: 'Eduardo Contreras', role: 'Frontend Engineer & UI/UX', image: fotoEduardo, 
      bio: 'Apasionado por el diseño de interfaces limpias y la optimización de código, en su tiempo libre es un gran aficionado de los videojuegos Shooters. Encargado de la estructura visual y la experiencia de usuario del proyecto. Actualmente se encuentra estudiando el tercer año de Ingeniería en Informática en la Universidad Politecnica del Estado Tachira, en Venezuela.' },
    
    { id: 2, name: 'David Rosales', role: 'Backend Engineer', image: fotoDavid, 
      bio: 'Especialista en lógica funcional y estructuración de componentes interactivos para la tienda. Apasionado a los videojuegos y Anime como One Piece y Minecraft, Cursante de Tercer año de Ingenieria en Informatica en la Universidad Politecnica del Estado Tachira, en Venezuela' },
    
    { id: 3, name: 'Angel Torres', role: 'Database Engineer', image: fotoAngel, 
      bio: 'Responsable de la arquitectura de datos, gestión del servidor y manejo de base de datos. Amante del Futbol y los deportes, fuera del trabajo comparte tiempo con su familia, actualmente es estudiante del Tercer año de ingenieria en Informatica en la Universidad Politecnica del Estado Tachira.' },
    
    { id: 4, name: 'Yoxs Roa', role: 'QA & Testing Developer', image: fotoYoxs, 
      bio: 'Encargado de probar cada funcionalidad para asegurar una experiencia libre de bugs y rendimiento perfecto. Le gusta mucho los videojuegos arcade, apasionado a la programacion y al mundo de las motos. Estudiante del Tercer año de Ingenieria en Informatica en la Universidad Politecnica del Estado Tachira.' }
  ];

  const contactLinks = [
    { 
        id: 'wa', 
        name: 'WhatsApp', 
        url: 'https://wa.me/584220078173', 
        style: { color: '#25D366' },
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
    },
    { 
        id: 'ig', 
        name: 'Instagram', 
        url: 'https://www.instagram.com/_ejcb_/?__pwa=1#', 
        style: { color: '#E1306C' },
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    },
    { 
        id: 'fb', 
        name: 'Facebook', 
        url: 'https://www.facebook.com/me/', 
        style: { color: '#1877F2' },
        icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    }
  ];

  const abrirRedSocial = (contacto) => {
      window.open(contacto.url, '_blank');
  };

  // TU BASE DE DATOS INTACTA
  const products = [
    { id: 1, name: 'KANATA VX9', price: 17.80, isOffer: true, image: 'https://fantechworld.com/cdn/shop/files/Product_Image_Kanata_Wireless_WG9_Black.png?v=1739506493&width=540', hoverImage: 'https://fantechworld.com/cdn/shop/files/Product_Image_Kanata_Wireless_WG9_White.png?v=1739506493&width=540', tag: 'MOUSE GAMING', description: 'Ratón ergonómico diseñado para un agarre perfecto y clics rápidos.', fotosParaCarrusel: [{ src: 'https://fantechworld.com/cdn/shop/files/ProductImage_WG9RD_2.png?v=1770472479&width=540', alt: 'Yari 1', titulo: '' }, { src: 'https://fantechworld.com/cdn/shop/files/ProductImage_WG9RD_4.png?v=1770472479&width=540', alt: 'Yari 2', titulo: '' }] },
    { id: 2, name: 'ATOM61 MECHANICAL', price: 35.50, isOffer: false, image: 'https://fantechworld.com/cdn/shop/files/Product_Image_Atom_Air61_Black.png?v=1751963086&width=540', hoverImage: 'https://fantechworld.com/cdn/shop/files/Product_Image_Atom_Air61_White.png?v=1751963086&width=540', tag: 'TECLADO GAMING', description: 'Teclado mecánico ultracompacto con interruptores precisos.', fotosParaCarrusel: [{ src: 'https://fantechworld.com/cdn/shop/files/Product_Image_Atom_Air61_Black.png?v=1751963086&width=540', alt: 'Atom 1', titulo: '' }, { src: 'https://fantechworld.com/cdn/shop/files/Product_Image_Atom_Air61_White.png?v=1751963086&width=540', alt: 'Atom 2', titulo: '' }] },
    { id: 3, name: 'TANTO PRO WG13P', price: 58.80, isOffer: true, image: 'https://fantechworld.com/cdn/shop/files/Product_Image_Tanto_Pro_WG13P_black.png?v=1768272197&width=540', hoverImage: 'https://fantechworld.com/cdn/shop/files/Product_Image_Tanto_Pro_WG13P_red.png?v=1768272180&width=540', tag: 'MOUSE GAMING', description: 'Switches silenciosos, conectividad wireless total.', fotosParaCarrusel: [{ src: 'https://fantechworld.com/cdn/shop/files/Product_Image_Tanto_Pro_WG13P_1.png?v=1768272119&width=540', alt: 'Tanto 1', titulo: '' }] },
    { id: 4, name: 'REDRAGON TKL', price: 55.00, isOffer: false, image: 'https://redragon.es/content/uploads/2023/09/HORUS-BLACK-TKL.png', hoverImage: 'https://redragon.es/content/uploads/2023/09/HORUS-WHITE-TKL.png', tag: 'TECLADO GAMING', description: 'Teclado mecánico compacto sin teclado numérico.', fotosParaCarrusel: [{ src: 'https://redragon.es/content/uploads/2022/06/redragon-horus-construccion.jpg', alt: 'Foto A', titulo: '' }, { src: 'https://redragon.es/content/uploads/2022/06/redragon-horus-switches.jpg', alt: 'Foto B', titulo: '' }] },
    { id: 5, name: 'REDRAGON KING PRO 1K', price: 40.00, isOffer: true, image: 'https://redragon.es/content/uploads/2024/07/KING-PRO-1K-BLACK-M916.png', hoverImage: 'https://redragon.es/content/uploads/2024/07/KING-PRO-4K-PINK-M916.png', tag: 'MOUSE GAMING', description: 'Nuestro mouse tope de gama de la marca Redragon, promete alta respuesta con su Pixart3395.', fotosParaCarrusel: [{ src: 'https://redragon.es/content/uploads/2024/07/king-1k-black-6.jpg', alt: 'Foto', titulo: '' }] },
    { id: 6, name: 'REDRAGON KUMARA', price: 35.00, isOffer: false, image: 'https://redragon.es/content/uploads/2023/07/K552RGB_PNGWEB_1.png', hoverImage: 'https://redragon.es/content/uploads/2023/07/K552W-KR-SPS-KUMARA-RAINBOW-WHITE-SPAIN1.png', tag: 'TECLADO GAMING', description: 'Teclado mecánico con interruptores de alta calidad.', fotosParaCarrusel: [{ src: 'https://redragon.es/content/uploads/2021/05/K552rgb-920X880-1.m4v', alt: 'Foto', titulo: '' }] },
    { id: 7, name: 'LOGITECH X2 PRO', price: 130.00, isOffer: false, image: 'https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x2-superstrike-pdp/2026/pro-x2-superstrike-top-angle-lifestyle-gallery-2.png', hoverImage: 'https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x2-superstrike-pdp/2026/pro-x2-superstrike-mouse-profile-left-angle-white-guinness-badge.png', tag: 'MOUSE GAMING', description: 'El mejor mouse gaming en la actualidad, ganador del record guiness y muy querido en el mundo Esports, lo mejor solamente hecho para los mejores jugadores.', fotosParaCarrusel: [{ src: 'https://resource.logitechg.com/w_544,h_544,ar_1,c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x2-superstrike-pdp/2026/pro-x2-superstrike-lifestyle-gallery-3.png', alt: 'Foto', titulo: '' }] },
    { id: 8, name: 'LOGITECH G305 LIGHTSPEED', price: 38.00, isOffer: true, image: 'https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g305/2025-update/g305-lightspeed-mouse-top-angle-black-gallery-1.png', hoverImage: 'https://resource.logitechg.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g305/2025-update/g305-lightspeed-mouse-top-angle-blue-gallery-1.png', tag: 'MOUSE GAMING', description: 'Ratón inalámbrico con sensor HERO. Impulsado por la tecnología inalámbrica LIGHTSPEED, ofrece un rendimiento de nivel profesional con una latencia ultrabaja.', fotosParaCarrusel: [{ src: 'https://resource.logitechg.com/w_544,h_544,ar_1,c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g305/2025-update/g305-lightspeed-mouse-black-lifestyle-gallery-3.png', alt: 'Foto', titulo: '' }] },
    { id: 9, name: 'RAZER V4 PRO', price: 100.00, isOffer: false, image: 'https://assets3.razerzone.com/5laj2rf23EVxNK2WGaCtV8YwPJ4=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhbc%2Fhd3%2F9874162941982%2Fviper-v3-pro-faker-500x500.png', hoverImage: 'https://assets3.razerzone.com/V_ROn1uwZTtCNoOLjBRGWrYqS48=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh57%2Fh60%2F10039373201438%2Fviper-v4-pro-white-2-500x500.png', tag: 'MOUSE GAMING', description: 'Mouse gaming con sensor de alta precisión. Posee un alcance de 12k DPI, con un diseño ergonómico y ligero para largas sesiones de juego.', fotosParaCarrusel: [{ src: 'https://assets2.razerzone.com/images/pnx.assets/21cd6b3b987baf37ce411ffec58be660/razer-viper-v4-pro-video-1920x700.mp4', alt: 'Foto', titulo: '' }] },
    { id: 10, name: 'RAZER BLACKWIDOW V3', price: 100.00, isOffer: false, image: 'https://assets3.razerzone.com/pBMTdMe7WUDqfq9quZOh1vRfCno=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhe5%2Fhdd%2F9952066175006%2Fbw-v4-x-zzz-500x500.png', hoverImage: 'https://assets3.razerzone.com/rPeithzerN5PT7HfQB6td5u2-tA=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh8f%2Fh57%2F9640099217438%2Fblackwidow-v4-black-x-500x500.png', tag: 'TECLADO GAMING', description: 'Teclado mecánico con interruptores de alta calidad, ideal para jugadores exigentes.', fotosParaCarrusel: [{ src: 'https://assets2.razerzone.com/images/pnx.assets/d1214d5743f81ffa35081a86d65bf8f6/blackwidow-v4-low-profile-hyperspeed.mp4', alt: 'Foto', titulo: '' }] },
    { id: 11, name: 'FANTECH CRYPTO II', price: 20.00, isOffer: true, image: 'https://fantechworld.com/cdn/shop/files/ProductImage_CryptoIIWirelessWG7V2White.png?v=1752128632&width=540', hoverImage: 'https://fantechworld.com/cdn/shop/files/ProductImage_CryptoIIWirelessWG7V2Black.png?v=1752128632&width=540', tag: 'MOUSE GAMING', description: 'Mouse gaming con sensor de alta precisión. Posee un alcance de 12k DPI, con un diseño ergonómico y ligero para largas sesiones de juego.', fotosParaCarrusel: [{ src: 'https://fantechworld.com/cdn/shop/files/ProductImage_CryptoIIWirelessWG7V2Black.png?v=1752128632&width=540', alt: 'Foto', titulo: '' }] },
    { id: 12, name: 'CORSAIR K65 RGB PRO', price: 45.00, isOffer: true, image: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/COD/bo7/gallery/k65/cod_bo7_k65_01.webp', hoverImage: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_360,w_360/products/COD/Gallery/CH-91D471E-NA/CH-91D471E-NA_10.webp', tag: 'TECLADO GAMING', description: 'Teclado mecánico con interruptores de alta calidad, ideal para jugadores exigentes.', fotosParaCarrusel: [{ src: 'https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/COD/Gallery/CH-91D471E-NA/CH-91D471E-NA_12.webp', alt: 'Foto', titulo: '' }] },
    { id: 13, name: 'CARBON MH92', price: 70.00, isOffer: true, image: 'https://fantechworld.com/cdn/shop/files/ProductImageCarbonMH92Black.png?v=1756108727&width=360', hoverImage: 'https://fantechworld.com/cdn/shop/files/ProductImageCarbonMH92White.png?v=1756108727&width=360', tag: 'HEADSET GAMING', description: 'Su diseño ligero y materiales de alta calidad garantizan comodidad durante horas de juego, mientras que su sonido envolvente 7.1 te sumerge completamente en la acción.', fotosParaCarrusel: [{ src: 'https://fantechworld.com/cdn/shop/files/ProductImage_Carbon7.1Black_e09a7362-b210-412a-91ec-54f7cf0ccfde.png?v=1752043935&width=540', alt: 'Foto', titulo: '' }] },
    { id: 14, name: 'MARS II', price: 38.00, isOffer: true, image: 'https://fantechworld.com/cdn/shop/files/Product_Image_Mars_Black.png?v=1752054278&width=540', hoverImage: 'https://fantechworld.com/cdn/shop/files/Product_Image_Mars_White.png?v=1752054278&width=540', tag: 'HEADSET GAMING', description: 'La opcion de entrada de fantech para audio gaming, con sonido envolvente 7.1 y diseño cómodo para largas sesiones de juego.', fotosParaCarrusel: [{ src: 'https://fantechworld.com/cdn/shop/files/Product_Image_Mars_White.png?v=1752054278&width=540', alt: 'Foto', titulo: '' }] },
    { id: 15, name: 'REDRAGON IRE PRO H848', price: 60.00, isOffer: false, image: 'https://redragon.es/content/uploads/2023/06/ire-848-blue.png', hoverImage: 'https://redragon.es/content/uploads/2023/07/ire-848-purple-1.png', tag: 'HEADSET GAMING', description: 'El mejor audio para tu streaming, con cancelación de ruido y sistema plug and play.', fotosParaCarrusel: [{ src: 'https://redragon.es/content/uploads/2023/06/hero-home-ire.jpg', alt: 'Foto', titulo: '' }] },
    { id: 16, name: 'RAZER BLACKSHARK V3 PRO', price: 190.00, isOffer: false, image: 'https://assets3.razerzone.com/k4GG0WYBScbUPCXUC2_W0cgyYZg=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhce%2Fh1e%2F9971709804574%2Fblackshark-v3-pro-2xko-500x500.png', hoverImage: 'https://assets3.razerzone.com/tDDgqgl3aHwiO8Y1pR8Fu5XkP2w=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh9b%2Fhb6%2F10023907459102%2Fblackshark-v3-pro-niko-500x500.png', tag: 'HEADSET GAMING', description: 'La mejor calidad de audio, directamente de los laboratorios de Razer, con un diseño cómodo y ligero para largas sesiones de juego.', fotosParaCarrusel: [{ src: 'https://assets2.razerzone.com/images/pnx.assets/ff21ac52438ded537041484084ee8d8e/blackshark-v3-pro-kv-1920x700.mp4', alt: 'Foto', titulo: '' }] },
    { id: 17, name: 'CABLE TRENZADO FANTECH', price: 15.00, isOffer: true, image: 'https://fantechworld.com/cdn/shop/files/ProductImage_CoiledCableCarbonGrey_44b4fce4-335e-4351-b0d5-5e0b09b10e0c.png?v=1698717746&width=360', hoverImage: 'https://fantechworld.com/cdn/shop/files/ProductImage_CoiledCablePearlWhite_229642b3-7a27-41f5-911a-9c90b9a4d587.png?v=1698717745&width=360', tag: 'ACCESORIOS', description: 'Mejora tu respuesta haptica de tu teclado con nuestro cable trenzado Fantech.', fotosParaCarrusel: [{ src: 'https://fantechworld.com/cdn/shop/files/Square_Image_Coiled_Cable_AC701_6.jpg?v=1700620911&width=360', alt: 'Foto', titulo: '' }] },
    { id: 18, name: 'MOUSEPAD RAZER GENGAR EDITION', price: 40.00, isOffer: true, image: 'https://assets3.razerzone.com/gPLrYDNVlaMdp8gY-OP9kTCvBwQ=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh84%2Fhae%2F9969883250718%2Fgigantus-v2-xxl-gengar-500x500.png', hoverImage: 'https://assets3.razerzone.com/NOqWPvk-n9ks-YNMA90D4c524qk=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh08%2Fhf5%2F9969882628126%2F251007-gigantus-v2-xxl-gengar-1500x1000-2.jpg', tag: 'ACCESORIOS', description: 'Pad de mouse de alta calidad con diseño ergonómico para un agarre cómodo durante largas sesiones de juego.', fotosParaCarrusel: [{ src: 'https://assets3.razerzone.com/j2dgpj3rpcL33Wfkx1k08-Ccjsc=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fha0%2Fhf1%2F9969882529822%2F251007-gigantus-v2-xxl-gengar-1500x1000-1.jpg', alt: 'Foto', titulo: '' }] },
    { id: 19, name: 'GLASSPAD RAZER ATLAS PRO', price: 90.00, isOffer: false, image: 'https://assets3.razerzone.com/qbQv4H6W9Z9TQThm_bLH4aI6Wf8=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh9c%2Fh8e%2F10049737097246%2Fatlas-pro-white-2-500x500.png', hoverImage: 'https://assets3.razerzone.com/YE_kCUaGnTJfwHFrqP3lxevWpcY=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh57%2Fh91%2F10049737130014%2Fatlas-pro-black-2-500x500.png', tag: 'ACCESORIOS', description: 'Pad de mouse de alta calidad con diseño ergonómico para un agarre cómodo durante largas sesiones de juego, super suave y con velocidad de respuesta ultra rápida.', fotosParaCarrusel: [{ src: 'https://assets3.razerzone.com/Bps_Mz4XiydvYFdpvDPZ3WgXqcE=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh9f%2Fhc3%2F10049583972382%2F260421-atlas-pro-white-1500x1000-1.jpg', alt: 'Foto', titulo: '' }] },
    { id: 20, name: 'NOVA PRO ONE PIECE EDITION', price: 45.00, isOffer: false, image: 'https://fantechworld.com/cdn/shop/files/Product_Image_Nova_Pro_WGP14V2_Luffy.png?v=1764230407&width=540', hoverImage: 'https://fantechworld.com/cdn/shop/files/Product_Image_Nova_Pro_WGP14V2_Gear5.png?v=1764230407&width=540', tag: 'CONSOLE GAMING', description: 'Equipado con un giroscopio incorporado altamente sensible que puede detectar movimientos sutiles, la inclinacion y la rotacion.', fotosParaCarrusel: [{ src: 'https://fantechworld.com/cdn/shop/files/Image_product_Page_Nova_Pro_2.jpg?v=1764386674', alt: 'Foto', titulo: '' }] },
    { id: 21, name: 'RAZER WOLVERINE V3 PRO', price: 150.00, isOffer: false, image: 'https://assets3.razerzone.com/bGE9XDoPKWJ4T1d0DLbVO_3H-BU=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh2f%2Fh9d%2F9809965056030%2Fwolverine-v3-pro-500x500.png', hoverImage: 'https://assets3.razerzone.com/6nrkSMNEOClhZYdb5tPN2qdErXU=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh3d%2Fh6a%2F9980073410590%2Fwolv-v3-pro-esports-gr-500x500.png', tag: 'CONSOLE GAMING', description: 'Diseño premium y ergonomico para un agarre firme y comodo, equipado con tecnologia de puntero optico de alta precision hall effect.', fotosParaCarrusel: [{ src: 'https://assets3.razerzone.com/YGxJBCa6tph90C-uDXyIHfFUE_s=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh34%2Fhb1%2F9980075900958%2F251024-wolv-v3-pro-esports-gr-1500x1000-4.jpg', alt: 'Foto', titulo: '' }] },
    { id: 22, name: 'REVOLVER III WIRELESS', price: 80.00, isOffer: false, image: 'https://fantechworld.com/cdn/shop/files/Product_Image_Revolver_III_Black.png?v=1750671490&width=540', hoverImage: 'https://fantechworld.com/cdn/shop/files/Product_Image_Revolver_III_Grey.png?v=1750671490&width=540', tag: 'CONSOLE GAMING', description: 'Logra una experiencia de juego sin interrupciones con su conectividad inalámbrica de baja latencia, diseñada para ofrecer un rendimiento excepcional en juegos competitivos.', fotosParaCarrusel: [{ src: 'https://fantechworld.com/cdn/shop/files/Product_Image_Revolver_III_Black.png?v=1750671490&width=540', alt: 'Foto', titulo: '' }] },
    { id: 23, name: 'MICRÓFONO BLAZAR GM300', price: 40.00, isOffer: false, image: 'https://redragon.es/content/uploads/2021/05/BLAZAR.png', hoverImage: 'https://redragon.es/content/uploads/2021/05/BLAZAR-GM300-Hero-Desktop-Hero-1920x880-1.jpg', tag: 'STREAMING GEAR', description: 'Redragon nos conmueve con su blazar GM300 y su cancelacion de ruido y su alta calidad de audio.', fotosParaCarrusel: [{ src: 'https://redragon.es/content/uploads/2021/05/B1.jpg', alt: 'Foto', titulo: '' }] },
    { id: 24, name: 'LAPTOP RAZER BLADE 16', price: 4000.00, isOffer: false, image: 'https://assets3.razerzone.com/JOT8FMjdAZTS59dcVanFVihoWeU=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh20%2Fh24%2F10040018665502%2F260325-blade16-s12-black-1500x1000-1.jpg', hoverImage: 'https://assets3.razerzone.com/xWj_q1ZtB-_RZbFxSH4nbddH1Gw=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhc9%2Fh23%2F10040018632734%2F260325-blade16-s12-black-1500x1000-2.jpg', tag: 'STREAMING GEAR', description: 'Laptop de alto rendimiento para gaming y streaming, equipada con procesador Intel Core ultra 9 y tarjeta gráfica NVIDIA RTX 5080.', fotosParaCarrusel: [{ src: 'https://assets2.razerzone.com/images/pnx.assets/25bd4d690a204ac6c9f408d1c63c06e0/blade16-2026-oled-1920x700.mp4', alt: 'Foto', titulo: '' }] },
    { id: 25, name: 'REDRAGON GM200', price: 20.00, isOffer: false, image: 'https://redragon.es/content/uploads/2021/04/QUAZAR-1.png', hoverImage: 'https://redragon.es/content/uploads/2021/04/QUA1.jpg', tag: 'STREAMING GEAR', description: 'La opcion economica para tu setup de streaming, con cancelasion de ruido y sistema plug and play mediante usb y wireless.', fotosParaCarrusel: [{ src: 'https://redragon.es/content/uploads/2021/04/HEROS-12.jpg', alt: 'Foto', titulo: '' }] },
    { id: 26, name: 'RAZER DEATHADDER V4 PRO', price: 160.00, isOffer: false, image: 'https://assets3.razerzone.com/9FvPlvujlrxafg7AbznLiEuAncE=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh01%2Fhf3%2F9926511951902%2Fdeathadder-v4-pro-black-500x500.png', hoverImage: 'https://assets3.razerzone.com/GR734dOVzR85QRCl-aqTAs6EJ8I=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhaa%2Fhf2%2F9926511984670%2Fdeathadder-v4-pro-white-500x500.png', tag: 'MOUSE GAMING', description: 'El mouse gaming de elección para jugadores profesionales.', fotosParaCarrusel: [{ src: 'https://assets2.razerzone.com/images/pnx.assets/0b6aa489cca90eb6a4174f16cc36557c/razer-deathadder-v4-pro-lightweight-1920x700.mp4', alt: 'Foto', titulo: '' }] },
    { id: 27, name: 'HUNTSMAN V3 PRO TKL', price: 230.00, isOffer: false, image: 'https://assets3.razerzone.com/fyezJVcREZBeWKYoLkvntQ8cd-g=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhb9%2Fh24%2F9980311076894%2Fhuntsman-v3-pro-tkl-8khz-b-500x500.png', hoverImage: 'https://assets3.razerzone.com/F_U74FWprORitWCrGmYmvFdixSI=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fhca%2Fh27%2F9980311142430%2Fhuntsman-v3-pro-tkl-8khz-esports-gr-500x500.png', tag: 'TECLADO GAMING', description: 'Teclado mecánico de gama alta para jugadores exigentes.', fotosParaCarrusel: [{ src: 'https://assets2.razerzone.com/images/pnx.assets/e16f1ce45a3adc59a85b67240ca964a7/huntsman-v3-pro-tkl-8khz-kv-animation-[1920-x-700].mp4', alt: 'Foto', titulo: '' }] },
    { id: 28, name: 'TANTO E ONE PIECE LUFYY', price: 38.00, isOffer: false, image: 'https://fantechworld.com/cdn/shop/files/ProductImage_TantoEFantechxOnePieceLuffy.png?v=1767803875&width=540', hoverImage: 'https://fantechworld.com/cdn/shop/files/ProductImage_TantoEFantechxOnePieceZoro.png?v=1767803884&width=540', tag: 'MOUSE GAMING', description: 'El mouse gaming de elección para jugadores profesionales con diseño ergonómico y sensor óptico de alta precisión.', fotosParaCarrusel: [{ src: 'https://fantechworld.com/cdn/shop/files/Product_Image_Tanto_E_WG13E_Luffy_3.png?v=1764298759&width=540', alt: 'Foto', titulo: '' }] },
    { id: 29, name: 'REDRAGON DRAGONBORN', price: 45.00, isOffer: true, image: 'https://redragon.es/content/uploads/2021/07/K630RGB-PNGWEB-10.png', hoverImage: 'https://redragon.es/content/uploads/2021/07/K630W-PNGWEB-1.png', tag: 'TECLADO GAMING', description: 'Teclado mecánico de gama media para jugadores exigentes que quieren una opcion accesible para los switches red mecanicos de redragon.', fotosParaCarrusel: [{ src: 'https://redragon.es/content/uploads/2021/07/HEROS.jpg', alt: 'Foto', titulo: '' }] },
    { id: 30, name: 'LAPTOP RAZER BLADE 18', price: 3000.00, isOffer: false, image: 'https://assets3.razerzone.com/FXdoMtEksY39fa9-ZK3Rza1F8bE=/300x300/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh73%2Fh47%2F10064527589406%2Fblade18-k12-black-500x500.png', hoverImage: 'https://assets3.razerzone.com/m2RYHEkSR_qRjwUaIalwSNCFeFw=/1500x1000/https%3A%2F%2Fmedias-p1.phoenix.razer.com%2Fsys-master-phoenix-images-container%2Fh84%2Fh4a%2F10064527654942%2F260514-blade18-k12-black-1500x1000-3.png', tag: 'STREAMING GEAR', description: 'Descripción de la plantilla para Headset Extra.', fotosParaCarrusel: [{ src: 'https://assets2.razerzone.com/images/pnx.assets/e4dcc744a1386b47aa762f3eb3266e19/razer-blade-18-2026-hero-1920x700-v2.mp4', alt: 'Foto', titulo: '' }] },
    { id: 31, name: 'APPLE AIRPODS PRO', price: 249.00, isOffer: true, image: 'https://images.unsplash.com/photo-1616781678220-15abd16b61e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGFpcnBvZHMlMjBwcm98ZW58MHx8MHx8fDA%3D', hoverImage: 'https://images.unsplash.com/photo-1659943063301-e9ddf5ce8be3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8', tag: 'HEADSET', description: 'Cancelación Activa de Ruido y Audio Espacial Personalizado. Pura magia para tus oídos, silencia el mundo a tu alrededor y disfruta de una experiencia inmersiva incomparable.', fotosParaCarrusel: [{ src: 'https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8', alt: 'AirPods Pro Detalle', titulo: '' }] },
  ];

  const collectionItems = [
    { id: 1, name: 'Setup Gamer 1', image: imagen1 },
    { id: 2, name: 'Setup Gamer 2', image: imagen2 },
    { id: 3, name: 'Setup Gamer 3', image: imagen3 },
    { id: 4, name: 'Setup Gamer 4', image: imagen4 }, 
    { id: 5, name: 'Setup Gamer 5', image: imagen5 },
    { id: 6, name: 'Setup Gamer 6', image: imagen6 },
    { id: 7, name: 'Setup Gamer 7', image: imagen7 },
    { id: 8, name: 'Setup Gamer 8', image: imagen8 },
    { id: 9, name: 'Setup Gamer 9', image: imagen9 },
    { id: 10, name: 'Setup Gamer 10', image: imagen10 },
    { id: 11, name: 'Setup Gamer 11', image: imagen11 },
    { id: 12, name: 'Setup Gamer 12', image: imagen12 }
  ];

  const categoriasBusqueda = ["Mouse", "Teclado", "Headset", "Accesorios", "Console", "Streaming"];

  const categoriasMostradas = terminoBusqueda.trim() === '' 
    ? categoriasBusqueda 
    : categoriasBusqueda.filter(c => c.toLowerCase().includes(terminoBusqueda.toLowerCase()));

  const productosMostrados = filtroAplicado === '' 
    ? products 
    : filtroAplicado === 'OFERTAS'
        ? products.filter(p => p.isOffer)
        : products.filter(p => 
            p.name.toLowerCase().includes(filtroAplicado.toLowerCase()) || 
            p.tag.toLowerCase().includes(filtroAplicado.toLowerCase()) ||
            p.description.toLowerCase().includes(filtroAplicado.toLowerCase())
          );

  const ejecutarBusqueda = (termino) => {
    setFiltroAplicado(termino); 
    setMostrarDropdown(false);  
    if (seccionProductosRef.current) {
        seccionProductosRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const resetearFiltro = () => {
    setFiltroAplicado('');
    setTerminoBusqueda('');
  };

  const verOfertas = () => {
    setFiltroAplicado('OFERTAS');
    if (seccionProductosRef.current) {
        seccionProductosRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const abrirVistaRapida = (producto) => {
    setProductoSeleccionado(producto);
    setModalAbierto(true);
  };

  const cerrarVistaRapida = () => {
    setModalAbierto(false);
    setTimeout(() => setProductoSeleccionado(null), 300); 
  };

  const abrirModalEquipo = (miembro) => {
    setMiembroSeleccionado(miembro);
    setModalEquipoAbierto(true);
  };

  const cerrarModalEquipo = () => {
    setModalEquipoAbierto(false);
    setTimeout(() => setMiembroSeleccionado(null), 300);
  };

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => {
        const existe = prev.find(item => item.id === producto.id);
        if (existe) {
            return prev.map(item => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item);
        }
        return [...prev, { ...producto, cantidad: 1 }];
    });
    setCartOpen(true); 
    cerrarVistaRapida(); 
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(prev => prev.filter(item => item.id !== id));
  };

  const cambiarCantidad = (id, delta) => {
    setCarrito(prev => prev.map(item => {
        if (item.id === id) {
            const nuevaCantidad = item.cantidad + delta;
            return nuevaCantidad > 0 ? { ...item, cantidad: nuevaCantidad } : item;
        }
        return item;
    }));
  };

  const totalCarrito = carrito.reduce((sum, item) => sum + (item.price * item.cantidad), 0);
  const cantidadTotal = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  // USAMOS LA NUEVA ALERTA DE D.VA CUANDO ESTÁ VACÍO
  const abrirFactura = () => {
      if (carrito.length === 0) {
          setAlertaSistema({ isOpen: true, mensaje: "Tu carrito está vacío. ¡Añade productos antes de comprar!" });
          return;
      }
      setCartOpen(false); 
      setModalFacturaAbierto(true); 
  };

  const enviarWhatsApp = () => {
      const numeroVendedor = "584220078173"; 
      
      let mensaje = "Hola *GEARSTORE* 🎮, me gustaría concretar el pago de mi orden:\n\n";
      
      carrito.forEach(item => {
          mensaje += `▪ ${item.cantidad}x ${item.name} - $${(item.price * item.cantidad).toFixed(2)}\n`;
      });
      
      if (fechaEntrega) {
          const fechaArr = fechaEntrega.split('-');
          const fechaFormateada = `${fechaArr[2]}/${fechaArr[1]}/${fechaArr[0]}`;
          mensaje += `\n📅 *Fecha de entrega preferida:* ${fechaFormateada}\n`;
      }
      
      mensaje += `\n*TOTAL A PAGAR: $${totalCarrito.toFixed(2)}*\n\n`;
      mensaje += `¡Muchas gracias!`;
      
      const url = `https://wa.me/${numeroVendedor}?text=${encodeURIComponent(mensaje)}`;
      window.open(url, "_blank");
  };

  useEffect(() => {
    const carousel = carouselColRef.current;
    if (!carousel) return;

    const handleWheel = (e) => {
        const { scrollLeft, scrollWidth, clientWidth } = carousel;
        
        const atEnd = Math.round(scrollLeft + clientWidth) >= scrollWidth - 1;
        const atStart = scrollLeft === 0;

        if (e.deltaY > 0 && !atEnd) {
            e.preventDefault();
            carousel.scrollLeft += e.deltaY; 
        } 
        else if (e.deltaY < 0 && !atStart) {
            e.preventDefault();
            carousel.scrollLeft += e.deltaY;
        }
    };

    carousel.addEventListener('wheel', handleWheel, { passive: false });
    return () => carousel.removeEventListener('wheel', handleWheel);
  }, []);

  // ==========================================
  // EFECTO SCROLL ANIMATION APPLE PROGRESO
  // ==========================================
  useEffect(() => {
    const handleScroll = () => {
        if (!appleContainerRef.current) return;
        const rect = appleContainerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const totalScrollableDistance = rect.height - windowHeight;
        let progress = Math.abs(rect.top) / totalScrollableDistance;
        
        if (rect.top > 0) progress = 0; 
        if (rect.top <= -totalScrollableDistance) progress = 1; 
        
        setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="store-layout" onClick={() => setMostrarDropdown(false)}>
      <nav className="store-navbar glassmorphism-nav">
        <div className="nav-logo" onClick={() => {
            resetearFiltro();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <span>GEAR</span>STORE
        </div>
        
        <div className="nav-links">
          <MenuDesplegable contenido={<MegaMenuProducts onCategoryClick={ejecutarBusqueda} />} onToggle={resetearFiltro}>
            <div className="nav-item">Productos ▾</div>
          </MenuDesplegable>
          
          <div className="nav-item" onClick={verOfertas}>Ofertas</div>
          
          <MenuSimple opciones={teamMembers} onSelect={abrirModalEquipo}>
             <div className="nav-item">Sobre Nosotros ▾</div>
          </MenuSimple>

          <MenuSimple opciones={contactLinks} onSelect={abrirRedSocial}>
             <div className="nav-item">Contacto ▾</div>
          </MenuSimple>
        </div>

        <div className="nav-search-container" onClick={(e) => e.stopPropagation()}>
           <div className="search-input-wrapper">
               <input 
                 type="text" 
                 placeholder="Buscar categorías..." 
                 className="custom-search-input"
                 value={terminoBusqueda}
                 onChange={(e) => {
                    setTerminoBusqueda(e.target.value);
                    setMostrarDropdown(true);
                 }}
                 onFocus={() => setMostrarDropdown(true)}
                 onKeyDown={(e) => {
                    if (e.key === 'Enter') ejecutarBusqueda(terminoBusqueda);
                 }}
               />
               <span className="search-icon-btn" onClick={() => ejecutarBusqueda(terminoBusqueda)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
               </span>
           </div>

           {mostrarDropdown && (
               <div className="search-dropdown glassmorphism-nav">
                   <div className="search-dropdown-title">CATEGORÍAS</div>
                   {categoriasMostradas.length > 0 ? (
                       categoriasMostradas.map((cat, idx) => (
                           <div 
                             key={idx} 
                             className="search-category-item"
                             onClick={() => {
                                 setTerminoBusqueda(cat);
                                 ejecutarBusqueda(cat); 
                             }}
                           >
                               {cat}
                           </div>
                       ))
                   ) : (
                       <div className="search-dropdown-empty">Presiona Enter para buscar "{terminoBusqueda}"</div>
                   )}
               </div>
           )}
        </div>
      </nav>

      <div className="store-hero">
        <h1 className="hero-title">PRODUCTOS</h1>
      </div>

      <div className="store-filters-container" ref={seccionProductosRef}>
        <div className="store-filters">
          <button 
             className={`filter-btn ${filtroAplicado === '' ? 'active' : ''}`}
             onClick={resetearFiltro}
          >
             All Products
          </button>
          <button 
             className={`filter-btn ${filtroAplicado === 'OFERTAS' ? 'active' : ''}`}
             onClick={verOfertas}
          >
             Ofertas Especiales
          </button>
        </div>
      </div>

      <div className="store-grid">
        {productosMostrados.length > 0 ? (
            productosMostrados.map(prod => (
              <div 
                key={prod.id} 
                className="product-card fantech-card" 
                onClick={() => abrirVistaRapida(prod)} 
              >
                <div className="product-image-wrapper">
                  {prod.isOffer && <span className="oferta-badge">OFERTA</span>}
                  <img src={prod.image} alt={prod.name} className="product-image main-image" />
                  <img src={prod.hoverImage} alt={`${prod.name} alternate`} className="product-image hover-image" />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{prod.name}</h3>
                  <p className="product-price">From ${prod.price.toFixed(2)}</p>
                </div>
              </div>
            ))
        ) : (
            <div style={{ color: 'white', textAlign: 'center', width: '100%', fontSize: '1.2rem', padding: '50px 0' }}>
               No se encontraron productos para "{filtroAplicado}"
            </div>
        )}
      </div>

      <div className="collection-section">
        <div className="collection-header">
           <h2>Galería</h2>
        </div>
        <div className="collection-carousel" ref={carouselColRef}>
           {collectionItems.map((item) => (
               <div key={item.id} className="collection-card visual-only" style={{ cursor: 'default' }}>
                   <div className="collection-img-wrapper">
                       <img src={item.image} alt={item.name} />
                   </div>
               </div>
           ))}
        </div>
      </div>

      {/* ==========================================
          SECCIÓN APPLE AIRPODS (Sticky & Crossfade Lento)
          ========================================== */}
      <div className="apple-scroll-section" ref={appleContainerRef}>
          <div className="apple-sticky-container">
              
              <h1 className="apple-bg-text">AirPods Pro</h1>

              {/* PASO 1 (0 a 0.33) */}
              <div className={`apple-step ${scrollProgress < 0.33 ? 'active' : 'inactive'}`}>
                  <div className="apple-img-col">
                      <img src={airpods1} alt="AirPods Case" />
                  </div>
                  <div className="apple-text-col">
                      <h2>Cancelación Activa de Ruido.</h2>
                      <p>Silencia el mundo a tu alrededor.</p>
                  </div>
              </div>

              {/* PASO 2 (0.33 a 0.66) */}
              <div className={`apple-step ${scrollProgress >= 0.33 && scrollProgress < 0.66 ? 'active' : 'inactive'}`}>
                  <div className="apple-img-col">
                      <img src={airpods2} alt="AirPods Abiertos" />
                  </div>
                  <div className="apple-text-col">
                      <h2>Diseño ergonómico.</h2>
                      <p>Comodidad para todo el día y ajuste perfecto.</p>
                  </div>
              </div>

              {/* PASO 3 (0.66 a 1.0) */}
              <div className={`apple-step ${scrollProgress >= 0.66 ? 'active' : 'inactive'}`}>
                  <div className="apple-img-col">
                      <img src={airpods3} alt="AirPods Despiece" />
                  </div>
                  <div className="apple-text-col">
                      <h2>Tecnología de punta.</h2>
                      <p>El chip H2 lleva el audio computacional más allá.</p>
                      {/* USAMOS LA NUEVA ALERTA DE D.VA AQUÍ TAMBIÉN */}
                      <button className="apple-buy-btn" onClick={() => setAlertaSistema({ isOpen: true, mensaje: "¡Simulación de Compra de AirPods activada!" })}>Comprar ahora</button>
                  </div>
              </div>

          </div>
      </div>

      {modalAbierto && productoSeleccionado && (
        <Modal isOpen={modalAbierto} onClose={cerrarVistaRapida} titulo="Vista Rápida">
          <div className="quick-view-container">
            <div className="quick-view-gallery">
               {productoSeleccionado.fotosParaCarrusel[0].src.match(/\.(mp4|m4v|webm)$/i) ? (
                 <video src={productoSeleccionado.fotosParaCarrusel[0].src} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               ) : (
                 <Carrusel imagenes={productoSeleccionado.fotosParaCarrusel} intervalo={4000} mostrarBotones={true} altura="100%" />
               )}
            </div>
            <div className="quick-view-info">
               <span className="product-tag">{productoSeleccionado.tag}</span>
               <h2>{productoSeleccionado.name}</h2>
               <hr className="quick-view-divider" />
               <p className="price">${productoSeleccionado.price.toFixed(2)}</p>
               <p className="description">{productoSeleccionado.description}</p>
               <div onClick={(e) => e.stopPropagation()}>
                 <button 
                    className="custom-add-cart-btn" 
                    onClick={() => agregarAlCarrito(productoSeleccionado)}
                 >
                    AÑADIR AL CARRITO
                 </button>
               </div>
            </div>
          </div>
        </Modal>
      )}

      {modalEquipoAbierto && miembroSeleccionado && (
        <Modal isOpen={modalEquipoAbierto} onClose={cerrarModalEquipo} titulo="Desarrollador">
            <div className="team-modal-container">
                <div className="team-modal-image">
                    <img src={miembroSeleccionado.image} alt={miembroSeleccionado.name} />
                </div>
                <div className="team-modal-info">
                    <span className="team-role">{miembroSeleccionado.role}</span>
                    <h2>{miembroSeleccionado.name}</h2>
                    <hr className="quick-view-divider" />
                    <p className="team-bio">{miembroSeleccionado.bio}</p>
                </div>
            </div>
        </Modal>
      )}

      {modalFacturaAbierto && (
        <Modal isOpen={modalFacturaAbierto} onClose={() => setModalFacturaAbierto(false)} titulo="Factura de Compra">
            <div className="invoice-container">
                <div className="invoice-header">
                    <h2>RESUMEN DE ORDEN</h2>
                    <p>¡Gracias por elegir GEARSTORE!</p>
                </div>
                
                <div className="invoice-items">
                    {carrito.map(item => (
                        <div key={item.id} className="invoice-item">
                            <span>{item.cantidad}x {item.name}</span>
                            <span>${(item.price * item.cantidad).toFixed(2)}</span>
                        </div>
                    ))}
                </div>

                <div className="invoice-date-container">
                    <label htmlFor="delivery-date">📅 Fecha de entrega preferida:</label>
                    <input 
                        type="date" 
                        id="delivery-date" 
                        className="custom-date-input" 
                        value={fechaEntrega} 
                        min={new Date().toISOString().split("T")[0]} 
                        onChange={(e) => setFechaEntrega(e.target.value)} 
                    />
                </div>
                
                <div className="invoice-total">
                    <span>TOTAL A PAGAR</span>
                    <span>${totalCarrito.toFixed(2)}</span>
                </div>
                
                <button className="whatsapp-btn" onClick={enviarWhatsApp}>
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                    REALIZAR PAGO POR WHATSAPP
                </button>
            </div>
        </Modal>
      )}

      <div className="floating-cart-btn" onClick={() => setCartOpen(true)}>
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
         </svg>
         {cantidadTotal > 0 && <span className="cart-badge">{cantidadTotal}</span>}
      </div>

      <div className={`cart-overlay ${cartOpen ? 'open' : ''}`} onClick={() => setCartOpen(false)}></div>

      <div className={`cart-sidebar ${cartOpen ? 'open' : ''} glassmorphism-nav`}>
         <div className="cart-header">
             <h2>TU CARRITO</h2>
             <button className="close-cart-btn" onClick={() => setCartOpen(false)}>✕</button>
         </div>

         <div className="cart-items-container">
             {carrito.length === 0 ? (
                 <div className="empty-cart-message">
                     <p>Tu carrito está vacío.</p>
                     <p style={{fontSize: '0.85rem', color: '#666'}}>¡Añade algo de equipo gamer!</p>
                 </div>
             ) : (
                 carrito.map(item => (
                     <div key={item.id} className="cart-item">
                         <img src={item.image} alt={item.name} className="cart-item-img" />
                         <div className="cart-item-details">
                             <h4>{item.name}</h4>
                             <p className="cart-item-price">${(item.price * item.cantidad).toFixed(2)}</p>
                             
                             <div className="cart-item-controls">
                                 <button onClick={() => cambiarCantidad(item.id, -1)}>-</button>
                                 <span>{item.cantidad}</span>
                                 <button onClick={() => cambiarCantidad(item.id, 1)}>+</button>
                             </div>
                         </div>
                         <button className="cart-item-remove" onClick={() => eliminarDelCarrito(item.id)}>
                             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                 <polyline points="3 6 5 6 21 6"></polyline>
                                 <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                             </svg>
                         </button>
                     </div>
                 ))
             )}
         </div>

         <div className="cart-footer">
             <div className="cart-total">
                 <span>TOTAL:</span>
                 <span>${totalCarrito.toFixed(2)}</span>
             </div>
             <button className="checkout-btn" onClick={abrirFactura}>
                 COMPRAR AHORA
             </button>
         </div>
      </div>

      <div className="footer-image-wrapper">
         <img src={imagenFooter} alt="Valorant Champions" className="footer-valorant-img" />
         <div className="footer-gradient-overlay"></div>
      </div>

      {/* RENDERIZAMOS EL MODAL DE ALERTA AL FINAL DE LA PÁGINA */}
      <AlertModal 
         isOpen={alertaSistema.isOpen} 
         mensaje={alertaSistema.mensaje} 
         onClose={() => setAlertaSistema({ ...alertaSistema, isOpen: false })} 
      />

    </div>
  );
}