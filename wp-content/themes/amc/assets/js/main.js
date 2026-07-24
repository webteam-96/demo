gsap.registerPlugin(ScrollTrigger);
    window.addEventListener("load", function () {

    AOS.init({

      once: true,

    });

  }, false);

/* Codigo Flecha Scroll*/

const arrow = document.getElementById('scroll-arrow');

window.addEventListener('scroll', function() {
    
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // Show the arrow when scrolling up, and hide it when reaching the bottom
    if (scrollPosition < documentHeight - windowHeight - 800) {
       arrow.classList.add('show-arrow');
    } else {
        arrow.classList.remove('show-arrow');
    }
	
});
//Code respuesta formulario contacto
function moveCf7ResponseMessage(event) {
  const responseOutput = document.querySelector('.wpcf7-response-output');
  const targetContainer = document.getElementById('cf7-response-anchor');

  if (responseOutput && targetContainer) {
    targetContainer.appendChild(responseOutput);
    responseOutput.style.display = 'block';
  }
}

// Catch all types of CF7 responses
document.addEventListener('wpcf7mailsent', moveCf7ResponseMessage);
document.addEventListener('wpcf7mailfailed', moveCf7ResponseMessage);
document.addEventListener('wpcf7spam', moveCf7ResponseMessage);
document.addEventListener('wpcf7invalid', moveCf7ResponseMessage);

var swiperCustom = new Swiper(".swiper-custom-01", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    freeMode: true,
    speed: 1000, // 
    autoplay: {
        delay: 2000, // 
        pauseOnMouseEnter:true,
        disableOnInteraction: false,
    },
    breakpoints:{
        991: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
            freeMode: {
              enabled: true
            },
        }
    },
});

$(".swiper-custom-01").hover(function() {
  swiperProducts.autoplay.stop();
}, function() {
  swiperProducts.autoplay.start();
});
const choicesInstances = {};

//CODE CONTACTO, USA IDS DE LAS PAGINAS DE CONTACTO, EN CASO EN FUTURO DE QUE CAMBIEN, CAMBIAR IDS

if (document.body.classList.contains('page-id-528') || document.body.classList.contains('page-id-592')) {

document.addEventListener('DOMContentLoaded', function () {

  const tryInit = () => {
    const ids = ['countries', 'startup_targetmarke','phone-prefix','startup-phone-prefix'];

    ids.forEach(id => {
      const el = document.getElementById(id);

      if (el && !choicesInstances[id]) {
        choicesInstances[id] = new Choices(el, {
          removeItemButton: true,
          searchEnabled: true,
          shouldSort: false
        });

        el.classList.add('choices-initialized');
      }
    });
  };

  tryInit();

  document.addEventListener('wpcf7submit', tryInit);
  document.addEventListener('wpcf7invalid', tryInit);
});
/*const swiperContacto = new Swiper(".swiper-contacto", {

  direction: "vertical",
  slidesPerView: 1,
  speed: 700,

  navigation: {
    nextEl: "#next",
    prevEl: "#prev"
  },

  mousewheel: false,
  allowTouchMove: false

});*/

//Variables de SALESFORCE
document.addEventListener('DOMContentLoaded', () => {
  const p = new URLSearchParams(location.search);

  document.getElementById('sf_utm_source').value = p.get('utm_source') || '';
  document.getElementById('sf_utm_medium').value = p.get('utm_medium') || '';
  document.getElementById('sf_utm_campaign').value = p.get('utm_campaign') || '';
  document.getElementById('sf_utm_content').value = p.get('utm_content') || '';
  document.getElementById('sf_utm_term').value = p.get('utm_term') || '';
});

function resetFields(container) {
  container.querySelectorAll('input, select, textarea').forEach(el => {


    if (choicesInstances[el.id]) {
      choicesInstances[el.id].removeActiveItems();
      return;
    }

    if (el.tagName === 'TEXTAREA') {
      el.value = '';
      return;
    }

    if (el.tagName === 'SELECT') {
      el.selectedIndex = -1;
      return;
    }

    if (el.type === 'checkbox' || el.type === 'radio') {
      el.checked = false;
      return;
    }

    if (el.type === 'file') {
      el.value = '';
      return;
    }

    el.value = '';
  });
}


const toggleRequirements = (container, makeRequired) => {
  // Find all standard form fields inside the target div
  const fields = container.querySelectorAll('input, select, textarea');
  
  fields.forEach(field => {

    if (field.type === 'hidden' || field.type === 'button' || field.type === 'submit') return;
    
    if (makeRequired) {
      field.setAttribute('required', 'required'); 
    } else {
      field.removeAttribute('required'); 
    }
  });
};

 document.querySelectorAll('input[name="business_type"]').forEach(el => {

  el.addEventListener('change', e => {
    const startup = e.target.value === "Start-up";

    const otherInfo = document.getElementById('other-info');


    if (startup) {

      document.querySelectorAll('.flow-retail:not(.step-06)').forEach(el => {

        resetFields(el);

        el.style.display = "none";

      });


      document.querySelectorAll('.flow-startup').forEach(el => {

        el.style.display = "";

      });

      

      if (otherInfo) otherInfo.style.display = "none";


    } else {

      document.querySelectorAll('.flow-startup').forEach(el => {

        resetFields(el);

        el.style.display = "none";

      });


      document.querySelectorAll('.flow-retail:not(.step-06)').forEach(el => {

        el.style.display = "";

      });

      

      if (otherInfo) otherInfo.style.display = "";

      

    }


  });

}); 

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('next');

  btn.addEventListener('click', () => {

    const steps = Array.from(document.querySelectorAll('.swiper-slide'))
      .filter(el => el.offsetParent !== null); // visible only

    const current = steps.findIndex(el => {
      const rect = el.getBoundingClientRect();
      return rect.top >= -50 && rect.top < window.innerHeight;
    });

    if (current !== -1 && current < steps.length - 1) {
      steps[current + 1].scrollIntoView({
        behavior: 'smooth'
      });
    }

    console.log({ current, steps }); // debug
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('project_attachment');

  input.addEventListener('change', () => {
    if (input.files.length) {
      document.querySelector('.texto-02').textContent = input.files[0].name;
    }
  });
});

document.addEventListener('change', function (e) {
  if (e.target.type !== 'checkbox') return;

  const name = e.target.name;
  if (!name) return;

  // find all checkboxes in this group
  const group = document.querySelectorAll(`input[name="${name}"]`);
  if (!group.length) return;

  // get last checkbox (your "Other")
  const last = group[group.length - 1];

  const wrap = document.querySelector(`.other-wrap[data-for="${name.replace('[]','')}"]`);
  if (!wrap) return;

  const input = wrap.querySelector('input');

  if (last.checked) {
    wrap.style.display = 'block';
    input.setAttribute('required', 'required');
  } else {
    wrap.style.display = 'none';
    input.removeAttribute('required');
    input.value = '';
  }
});


const updateButtons = () => {
  const steps = Array.from(document.querySelectorAll('.step'))
    .filter(el => el.offsetParent !== null);

  const current = steps.findIndex(el => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.top < window.innerHeight / 2;
  });

  document.getElementById('next').disabled = current === steps.length - 1;
};
// 1. UTM Parameter Capture
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const map = {
    sf_utm_source: 'utm_source',
    sf_utm_medium: 'utm_medium',
    sf_utm_campaign: 'utm_campaign',
    sf_utm_content: 'utm_content',
    sf_utm_term: 'utm_term'
  };

  Object.entries(map).forEach(([fieldId, param]) => {
    const el = document.getElementById(fieldId);
    if (el) {
      el.value = params.get(param) || '';
    }
  });
});

const labelMap = {
    // Subject / Department
    "Sales Department": "Sales Department", // Usually stays EN or matches SF ID
    "Customer Service": "Customer Service",
    "Corporate Communication / Events / Sponsorships": "Corporate Communication / Events / Sponsorships",
	
	"Sí" : "1",
	"Yes" : "1",
	"No" : "0",
    
    // Business Type
    "Retailer": "Retailer",
	"Brand": "Marca",
    "Start-up": "Start-up",

    // Project Stage (Startup)
    "Idea / Concept": "Idea/Concepto",
    "Product development": "Desarrollo de producto",
    "Pilot or test market": "Fase piloto o testar el mercado",
    "Ready to scale-up in the market": "Listo para escalar en el mercado",
    "It's already on the market": "Ya está en el mercado",

    // Employees
    "More than 10": "Más de 10",

    // Sales Channels
    "DTC/e-commerce": "DTC / Comercio electrónico",

    // Time to market
    "<6 months": "< 6 meses",
    "6-12 months": "6-12 meses",
    ">12 months": "> 12 meses",
    
    "< 6 meses": "< 6 meses",
    "> 12 meses": "> 12 meses",
    
    // Volume
    "≤ 250 ml": "≤ 250 ml", 
    "> 1L": "> 1L",
    
    // Investment
    "< €250k": "< €250k", 
    "> €1M": "> €1M",
	

    // Marketing Plan
    "Yes": "Si",
    "In progress": "En proceso",
    "Not yet": "Todavía no",

    // Growth Factors
    "Brand and storytelling": "Marca y storytellings",
    "Innovation / functionality": "Innovación / Funcionalidad",
    "Price positioning": "Posicionamiento de precio",
    "Distribution strategy": "Estrategia de distribución",
    "Sustainability credentials": "Credenciales de sostenibilidad",

    // Partnership Vision
    "Product development support": "Soporte para el desarrollo de productos",
    "Industrial manufacturing": "Fabricación industrial",
    "Long-term strategic partner": "Socio estratégico a largo plazo",
    "Market expertise and scalability": "Experiencia en el mercado y escalabilidad",

    // Shelf Life
    "1-3 months": "1-3 meses",
    "6 months": "6 meses",
    "12 months or more": "12 meses o más",

    // Packaging
    "PET Bottle": "Botella PET",
    "Carton": "Cartón",
    "Can": "Lata",
    "Glass": "Botella de vidrio",
    "Other (specify)": "Otro",

    // Storage
    "Chilled": "Refrigerado",
    "Ambient temperature": "Temperatura ambiente",

    // Categories
    "Juices/Smoothies": "Zumos/Smoothies",
    "Plant-based milks/drinks": "Leches/Bebidas vegetales",
    "Functional beverages": "Bebidas funcionales",
    "Kombucha/Kefir": "Kombucha/Kéfir",
    "Lemonades/Fruit drinks": "Limonadas/Bebidas de fruta",
    "RTD teas": "Tés fríos",
    "RTD coffees": "Cafés fríos",
    "Protein drinks": "Proteínas",
    "Others": "Otros",

    // Source
    "Digital search engines": "Buscadores digitales",
    "Fairs/Trade shows": "Ferias",
	"Ferias/Ferias comerciales": "Ferias",
    "Through someone in the industry": "A través de alguien del sector",
    "Other": "Otros"
};


// 2. Helper
function getCf7Value(inputs, name) {
  if (!inputs) return '';
    
    // Find field (handling both single and array names)
    const field = inputs.find(i => i.name === name || i.name === name + '[]');
    if (!field || !field.value) return '';

    let val = field.value.toString().trim();

    // 1. If CF7 actually provides the pipe, take the right side
    if (val.includes('|')) {
        return val.split('|')[1].trim();
    }

    // 2. Check the Translation Map for EN -> ES swap
    if (labelMap[val]) {
        return labelMap[val];
    }

    // 3. Fallback to the original value
    return val;
}

// 3. Helper: Priority check
function getFirstFilledCf7(inputs, names) {
  for (const name of names) {
    const value = getCf7Value(inputs, name);
    if (value && value.trim() !== '') {
      return value;
    }
  }
  return '';
}

// 4. Main Submission Logic
document.addEventListener('wpcf7mailsent', function (e) {
  const inputs = e.detail.inputs;
  const sfData = new FormData();

  // REQUIRED SALESFORCE OID
  sfData.append('oid', '00D09000004X2WQ');

  // MAP FIELDS
  sfData.append('00N0900000IWngP', getCf7Value(inputs, 'business_type'));
  
  const firstName = getFirstFilledCf7(inputs, ['full_name', 'startup_fullname']);
  sfData.append('first_name', firstName);
  const lastName = getFirstFilledCf7(inputs, ['full_surname', 'startup_surname']);
  sfData.append('last_name', lastName); // Salesforce usually requires Last Name
  
  const company = getFirstFilledCf7(inputs, ['company', 'startup_company']);
  sfData.append('company', company);

  const position = getFirstFilledCf7(inputs, ['position', 'startup_position']);
  sfData.append('title', position);
  
  const email = getFirstFilledCf7(inputs, ['email', 'startup_email']);
  sfData.append('email', email);
  
  sfData.append('00NOj00000WUJNl', getFirstFilledCf7(inputs, ['phone_prefix', 'startup_phone_prefix']));
	
  const phone = getFirstFilledCf7(inputs, ['phone', 'startup_phone']);
  sfData.append('mobile', phone);


  // 5. Full Country Mapping
   const countryMap = {
  "ALAND": "AX",

  "Albania": "AL",
  "Algeria": "DZ", "Argelia": "DZ",
  "Andorra": "AD",
  "Angola": "AO",
  "Antigua and Barbuda": "AG", "Antigua y Barbuda": "AG",
  "Argentina": "AR",
  "Armenia": "AM",
  "Australia": "AU",
  "Austria": "AT",
  "Azerbaijan": "AZ", "Azerbaiyán": "AZ",
  "Bahamas": "BS",
  "Bahrain": "BH", "Baréin": "BH",
  "Bangladesh": "BD", "Bangladés": "BD",
  "Barbados": "BB",
  "Belarus": "BY", "Bielorrusia": "BY",
  "Belgium": "BE", "Bélgica": "BE",
  "Belize": "BZ", "Belice": "BZ",
  "Benin": "BJ", "Benín": "BJ",
  "Bolivia": "BO",
  "Bosnia and Herzegovina": "BA", "Bosnia y Herzegovina": "BA",
  "Botswana": "BW", "Botsuana": "BW",
  "Brazil": "BR", "Brasil": "BR",
  "Brunei": "BN", "Brunéi": "BN",
  "Bulgaria": "BG",
  "Burkina Faso": "BF",
  "Burundi": "BI",
  "Bhutan": "BT", "Bután": "BT",
  "Cambodia": "KH", "Camboya": "KH",
  "Cameroon": "CM", "Camerún": "CM",
  "Canada": "CA", "Canadá": "CA",
  "Cape Verde": "CV", "Cabo Verde": "CV",
  "Central African Republic": "CF", "República Centroafricana": "CF",
  "Chad": "TD",
  "Chile": "CL",
  "China": "CN",
  "Colombia": "CO",
  "Comoros": "KM", "Comoras": "KM",
  "Costa Rica": "CR",
  "Ivory Coast": "CI", "Costa de Marfil": "CI",
  "Croatia": "HR", "Croacia": "HR",
  "Cuba": "CU",
  "Cyprus": "CY", "Chipre": "CY",
  "Czech Republic": "CZ", "República Checa": "CZ",
  "Denmark": "DK", "Dinamarca": "DK",
  "Djibouti": "DJ", "Yibuti": "DJ",
  "Dominica": "DM",
  "Dominican Republic": "DO", "República Dominicana": "DO",
  "Ecuador": "EC",
  "Egypt": "EG", "Egipto": "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ", "Guinea Ecuatorial": "GQ",
  "Eritrea": "ER",
  "Estonia": "EE",
  "Ethiopia": "ET", "Etiopía": "ET",
  "Fiji": "FJ", "Fiyi": "FJ",
  "Finland": "FI", "Finlandia": "FI",
  "France": "FR", "Francia": "FR",
  "Gabon": "GA", "Gabón": "GA",
  "Gambia": "GM",
  "Georgia": "GE",
  "Germany": "DE", "Alemania": "DE",
  "Ghana": "GH",
  "Greece": "GR", "Grecia": "GR",
  "Grenada": "GD", "Granada": "GD",
  "Guatemala": "GT",
  "Guinea": "GN",
  "Guinea-Bissau": "GW", "Guinea-Bisáu": "GW",
  "Guyana": "GY",
  "Haiti": "HT", "Haití": "HT",
  "Honduras": "HN",
  "Hungary": "HU", "Hungría": "HU",
  "India": "IN",
  "Indonesia": "ID",
  "Iran": "IR", "Irán": "IR",
  "Iraq": "IQ", "Irak": "IQ",
  "Ireland": "IE", "Irlanda": "IE",
  "Iceland": "IS", "Islandia": "IS",
  "Israel": "IL",
  "Italy": "IT", "Italia": "IT",
  "Jamaica": "JM",
  "Japan": "JP", "Japón": "JP",
  "Jordan": "JO", "Jordania": "JO",
  "Kazakhstan": "KZ", "Kazajistán": "KZ",
  "Kenya": "KE", "Kenia": "KE",
  "Kiribati": "KI",
  "Kosovo": "XK",
  "Kuwait": "KW",
  "Kyrgyzstan": "KG", "Kirguistán": "KG",
  "Laos": "LA",
  "Latvia": "LV", "Letonia": "LV",
  "Lebanon": "LB", "Líbano": "LB",
  "Lesotho": "LS", "Lesoto": "LS",
  "Liberia": "LR",
  "Libya": "LY", "Libia": "LY",
  "Liechtenstein": "LI",
  "Lithuania": "LT", "Lituania": "LT",
  "Luxembourg": "LU", "Luxemburgo": "LU",
  "North Macedonia": "MK", "Macedonia": "MK",
  "Madagascar": "MG",
  "Malawi": "MW", "Malaui": "MW",
  "Malaysia": "MY", "Malasia": "MY",
  "Maldives": "MV", "Maldivas": "MV",
  "Mali": "ML", "Malí": "ML",
  "Malta": "MT",
  "Marshall Islands": "MH", "Islas Marshall": "MH",
  "Mauritania": "MR",
  "Mauritius": "MU", "Mauricio": "MU",
  "Mexico": "MX", "México": "MX",
  "Micronesia": "FM",
  "Moldova": "MD", "Moldavia": "MD",
  "Monaco": "MC", "Mónaco": "MC",
  "Mongolia": "MN",
  "Morocco": "MA", "Marruecos": "MA",
  "Mozambique": "MZ",
  "Myanmar": "MM",
  "Namibia": "NA",
  "Nauru": "NR",
  "Nepal": "NP",
  "Netherlands": "NL", "Países Bajos": "NL",
  "New Zealand": "NZ", "Nueva Zelanda": "NZ",
  "Nicaragua": "NI",
  "Niger": "NE", "Níger": "NE",
  "Nigeria": "NG",
  "North Korea": "KP", "Corea del Norte": "KP",
  "Norway": "NO", "Noruega": "NO",
  "Oman": "OM", "Omán": "OM",
  "Pakistan": "PK",
  "Palau": "PW", "Palaos": "PW",
  "Palestine": "PS", "Palestina": "PS",
  "Panama": "PA", "Panamá": "PA",
  "Papua New Guinea": "PG", "Papúa Nueva Guinea": "PG",
  "Paraguay": "PY",
  "Peru": "PE", "Perú": "PE",
  "Philippines": "PH", "Filipinas": "PH",
  "Poland": "PL", "Polonia": "PL",
  "Portugal": "PT",
  "Qatar": "QA", "Catar": "QA",
  "Republic of the Congo": "CG", "República del Congo": "CG",
  "Romania": "RO", "Rumanía": "RO",
  "Russia": "RU", "Rusia": "RU",
  "Rwanda": "RW", "Ruanda": "RW",
  "Saint Lucia": "LC", "Santa Lucía": "LC",
  "Saint Vincent and the Grenadines": "VC", "San Vicente": "VC",
  "San Marino": "SM",
  "Sao Tome and Principe": "ST", "Santo Tomé y Príncipe": "ST",
  "Saudi Arabia": "SA", "Arabia Saudita": "SA",
  "Senegal": "SN",
  "Serbia": "RS",
  "Seychelles": "SC",
  "Sierra Leone": "SL", "Sierra Leona": "SL",
  "Singapore": "SG", "Singapur": "SG",
  "Slovakia": "SK", "Eslovaquia": "SK",
  "Slovenia": "SI", "Eslovenia": "SI",
  "Solomon Islands": "SB", "Islas Salomón": "SB",
  "Somalia": "SO",
  "South Africa": "ZA", "Sudáfrica": "ZA",
  "South Korea": "KR", "Corea del Sur": "KR",
  "South Sudan": "SS", "Sudán del Sur": "SS",
  "Spain": "ES", "España": "ES",
  "Sri Lanka": "LK",
  "Saint Kitts and Nevis": "KN", "San Cristóbal y Nieves": "KN",
  "Sudan": "SD", "Sudán": "SD",
  "Suriname": "SR", "Surinam": "SR",
  "Sweden": "SE", "Suecia": "SE",
  "Switzerland": "CH", "Suiza": "CH",
  "Syria": "SY", "Siria": "SY",
  "Taiwan": "TW", "Taiwán": "TW",
  "Tajikistan": "TJ", "Tayikistán": "TJ",
  "Tanzania": "TZ",
  "Thailand": "TH", "Tailandia": "TH",
  "Togo": "TG",
  "Tonga": "TO",
  "Trinidad and Tobago": "TT", "Trinidad y Tobago": "TT",
  "Tunisia": "TN", "Túnez": "TN",
  "Turkey": "TR", "Turquía": "TR",
  "Turkmenistan": "TM", "Turkmenistán": "TM",
  "Tuvalu": "TV",
  "Uganda": "UG",
  "Ukraine": "UA", "Ucrania": "UA",
  "United Kingdom": "GB", "Reino Unido": "GB",
  "United States": "US", "Estados Unidos": "US",
  "Uruguay": "UY",
  "Uzbekistan": "UZ", "Uzbekistán": "UZ",
  "Vanuatu": "VU",
  "Vatican City": "VA", "Ciudad del Vaticano": "VA",
  "Venezuela": "VE",
  "Vietnam": "VN",
  "Yemen": "YE",
  "Zambia": "ZM",
  "Zimbabwe": "ZW", "Zimbabue": "ZW"
};

let selectedCountries = inputs
    .filter(i => i.name === 'countries[]')
    .map(i => countryMap[i.value])
    .filter(Boolean);

const selectedStartupMarkets = inputs
    .filter(i => i.name === 'startup_targetmarket[]')
    .map(i => countryMap[i.value]) 
    .filter(Boolean);

if (selectedCountries.length === 0) {
    selectedCountries = selectedStartupMarkets;
}

  sfData.append('00NOj00000TXIVO', selectedCountries.join(';'));

  // 6. Product / Project / Volume
  sfData.append('00NOj00000TrXTP', getFirstFilledCf7(inputs, ['annual_volume_retail', 'annual_volume_startup']));
  sfData.append('00N0900000IWngo', getCf7Value(inputs, 'product_name'));
  sfData.append('00NOj00000TXZPh', getFirstFilledCf7(inputs, ['shelf_life_retail', 'shelf_life_startup'])); 
  sfData.append('00NOj00000Ub0Nx', getFirstFilledCf7(inputs, ['packaging_format_retail', 'packaging_format_startup']));  
  sfData.append('00NOj00000TXC3L', getFirstFilledCf7(inputs, ['storage_conditions_retail', 'storage_conditions_startup']));  
  sfData.append('00NOj00000TriqD', getFirstFilledCf7(inputs, ['desired_volume', 'desired_unit']));
  sfData.append('00NOj00000Ub0B3', getFirstFilledCf7(inputs, ['product_category_retail', 'product_category_startup']));
  sfData.append('00NOj00000TxNZN', getFirstFilledCf7(inputs, ['product_category_retail_other', 'product_category_startup_other']));
  sfData.append('00NOj00000TxPD0', getFirstFilledCf7(inputs, ['packaging_format_retail_other', 'packaging_format_startup_other']));
  sfData.append('00NOj00000VzlHt', getCf7Value(inputs, 'market_status'));
  sfData.append('00NOj00000UhcqL', getCf7Value(inputs, 'startup_investment'));
  

  // 7. Source & Other
  sfData.append('00NOj00000TZwel', getCf7Value(inputs, 'source_other'));
  sfData.append('00NOj00000TaD68', getCf7Value(inputs, 'source'));
  sfData.append('00N0900000IWngD', getCf7Value(inputs, 'accept-this-1'));
  sfData.append('00N0900000IWngL', getCf7Value(inputs, 'other_information'));

  // 8. Startup Data
  sfData.append('00NOj00000UhMaK', getCf7Value(inputs, 'startup_year'));
  sfData.append('00NOj00000UhNjH', getCf7Value(inputs, 'startup_stage'));
  sfData.append('00NOj00000UkPOk', getCf7Value(inputs, 'startup_employees'));
  sfData.append('00NOj00000UhZSi', getCf7Value(inputs, 'startup_saleschannel'));
  sfData.append('00NOj00000UhcqL', getCf7Value(inputs, 'startup_investment'));
  sfData.append('00NOj00000UhLmK', getCf7Value(inputs, 'startup_time'));
  sfData.append('00NOj00000UheYn', getCf7Value(inputs, 'startup_marketing'));
  sfData.append('00NOj00000UhWLC', getCf7Value(inputs, 'startup_investment_amount'));
  sfData.append('00NOj00000WUm4q', getCf7Value(inputs, 'other_partnership'));

const growth = inputs
    .filter(i => i.name === 'startup_growth' || i.name === 'startup_growth[]')
    .map(i => labelMap[i.value] || i.value) // Swaps EN/ES
    .join(';');

sfData.append('00NOj00000UhV0u', growth);

  sfData.append('00NOj00000UhLxc', getCf7Value(inputs, 'startup_partner'));

  // 9. UTM Mapping (Grabbing from the actual inputs populated by DOMContentLoaded)
  sfData.append('00NOj00000TaVHW', getCf7Value(inputs, 'sf_utm_source'));
  sfData.append('00NOj00000TaoLl', getCf7Value(inputs, 'sf_utm_medium'));
  sfData.append('00NOj00000TahiU', getCf7Value(inputs, 'sf_utm_campaign'));
  sfData.append('00NOj00000TaVBB', getCf7Value(inputs, 'sf_utm_content'));
  sfData.append('00NOj00000TabDI', getCf7Value(inputs, 'sf_utm_term'));
  

	
  // 10. Final Sanitize & Post
  for (let [key, value] of sfData.entries()) {
    if (value === 'null' || value === null) {
      sfData.set(key, '');
    }
  }
  console.table(inputs);
  console.log([...sfData.entries()]); 
  const payload = [...sfData.entries()];

  fetch('/wp-json/sf/v1/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
});

document.addEventListener('wpcf7invalid', function () {
  const box = document.createElement('div');
  box.innerText = 'Validation failed. Please check the fields.';
  box.style.position = 'fixed';
  box.style.bottom = '20px';
  box.style.left = '50%';
  box.style.transform = 'translateX(-50%)';
  box.style.background = '#ff4d4d';
  box.style.color = '#fff';
  box.style.padding = '12px 20px';
  box.style.borderRadius = '10px';
  box.style.zIndex = '9999';

  document.body.appendChild(box);

  setTimeout(() => box.remove(), 4000);
  
});

document.addEventListener('wpcf7mailsent', function () {
  const box = document.createElement('div');
  box.innerText = 'Form sent succesfully.';
  box.style.position = 'fixed';
  box.style.bottom = '20px';
  box.style.left = '50%';
  box.style.transform = 'translateX(-50%)';
  box.style.background = '#2ad587';
  box.style.color = '#000';
  box.style.padding = '12px 20px';
  box.style.borderRadius = '10px';
  box.style.zIndex = '9999';

  document.body.appendChild(box);

  setTimeout(() => box.remove(), 4000);
  setTimeout(() => {
    location.reload();
  }, 4000);
});

document.addEventListener('DOMContentLoaded', () => {

  const form = document.querySelector('.wpcf7 form');
  const btn = document.querySelector('#submit-final button');

  if (!form || !btn) return;

  const originalText = btn.innerHTML;

  // when submitting starts
  form.addEventListener('submit', () => {
    btn.disabled = true;
    btn.innerHTML = '<img src="/wp-content/themes/amc/assets/img/loading.svg" alt="loading" style="height:50px;">';
  });

  // when success
  document.addEventListener('wpcf7mailsent', () => {
    resetBtn();
  });

  // when validation fails
  document.addEventListener('wpcf7invalid', () => {
    resetBtn();
  });

  // when error
  document.addEventListener('wpcf7mailfailed', () => {
    resetBtn();
  });

  function resetBtn() {
    btn.disabled = false;
    btn.innerHTML = originalText;
  }

});

/*
if (
  document.body.classList.contains('page-id-592') ||
  document.body.classList.contains('page-id-528')
) {

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
    swiperContacto.slideTo(0, 0);
  });

}*/
}

var swiperEnvironment = new Swiper(".swiper-environment", {
  slidesPerView: 1.4,
  spaceBetween: 0,
  centeredSlides: true,
  breakpoints:{
      320: {
          slidesPerView: 1.4,
          spaceBetween: 0,
          freeMode: {
            enabled: true
          },
      }
  },
});

var swiperCustomFlex = new Swiper(".swiper-custom-flex", {
    slidesPerView: 1,
    slidesPerView: 'auto',
    spaceBetween: 20,
    speed: 1000,
    breakpoints:{
        991: {
            slidesPerView: 'auto',
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1.2,
            spaceBetween: 17,
            freeMode: {
              enabled: true
            },
        }
    },
});

var swiperAchievements = new Swiper(".swiper-achievements", {
    slidesPerView: 1,
    spaceBetween: 5,
    speed: 300,
    centeredSlides:true,
    loop: true,
    breakpoints:{
        991: {
            slidesPerView: 1.5,
            spaceBetween: 5,
        },
        320: {
            slidesPerView: 1.5,
            spaceBetween: 5,
            freeMode: {
              enabled: true
            },
        }
    },
});

var swiperValues = new Swiper(".swiper-values", {
    slidesPerView: 1,
    loop:true,
    autoplay: true,
    spaceBetween: 20,
    mousewheel: true,
    speed:600,
    breakpoints:{
        991: {
            slidesPerView: 1.15,
            spaceBetween: 20,
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        320: {
            slidesPerView: 1.2,
            spaceBetween: 17,
            freeMode: {
              enabled: true
            },
        }
    },
});

var swiperOurServices = new Swiper(".swiper-our-services", {
    slidesPerView: 2.4,
    spaceBetween: 20,
    breakpoints:{
        991: {
            slidesPerView: 2.4,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1.2,
            spaceBetween: 17,
            freeMode: {
              enabled: true
            },
        }
    },
});

var swiperService01 = new Swiper(".swiper-service-01", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    breakpoints:{
        991: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 1.2,
            spaceBetween: 17,
            freeMode: {
              enabled: true
            },
        }
    },
});

var swiperAboutus = new Swiper(".swiper-about-us", {
    spaceBetween: 15,
    freeMode: true,
    speed: 1000, // 
    breakpoints:{
        991: {
            slidesPerView:"auto",
            spaceBetween: 15,
        },
        320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
            freeMode: {
              enabled: true
            },
        }
    },
});


$(".swiper-marquesine-products").hover(function() {
  swiperProducts.autoplay.stop();
}, function() {
  swiperProducts.autoplay.start();
});

// $(".box-content-swiper-marquesine").hover(function() {
//   swiperProducts.autoplay.stop();
// },
//   function(){
//     swiperProducts.autoplay.start();
//   });


const swiperLogos = new Swiper('.swiper-marquesine-logos', {
    loop: true, 
    autoplay: {
        delay: 0,
        disableOnInteraction: false, 
    },
    spaceBetween: 10,
    slidesPerView: 4.5,
    speed: 3000,
    breakpoints:{
        991: {
            slidesPerView: 4.5,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        }
    },
});

const swiperClients = new Swiper('.swiper-marquesine-clients', {
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    spaceBetween: 10,
    slidesPerView: 8,
    speed: 3000, 
    breakpoints:{
        991: {
            slidesPerView: 8,
            spaceBetween: 10,
            speed: 1000, 
        },
        320: {
            slidesPerView: 2.2,
            spaceBetween: 20,
            speed: 1000, 
        }
    },
});




$(".bar-open-menu").click(function (e) { 
    e.preventDefault();
    $(".bar-open-menu").addClass("disable");
    $(".btn-menu").addClass("disable");
    $("body").addClass("menu-open");
    $("header").addClass("active");
    $(".box-menu-open").addClass("active");
    $(".box-lateral-header").addClass("active");
    $(".overlay-menu").fadeIn();
});

$(".btn-close-principal").click(function (e) { 
    e.preventDefault();
    $(this).removeClass("active");
    $(".bar-open-menu").removeClass("disable");
    $(".btn-menu").removeClass("disable");
    $("body").removeClass("menu-open");
    $("header").removeClass("active");
    $(".box-menu-open").removeClass("active");
    $(".box-lateral-header").removeClass("active");
    $(".overlay-menu").fadeOut();
});

$(".link-header-buttom-custom-01").click(function (e) { 
    setTimeout(function(){
    e.preventDefault();
    $(this).removeClass("active");
    $(".bar-open-menu").removeClass("disable");
    $("body").removeClass("menu-open");
    $("header").removeClass("active");
    $(".box-menu-open").removeClass("active");
    $(".box-lateral-header").removeClass("active");
    $(".overlay-menu").fadeOut();
    }, 100);
});

$(".product-buttom").click(function (e) { 
    setTimeout(function(){
        e.preventDefault();
        $(this).removeClass("active");
        $(".bar-open-menu").removeClass("disable");
        $("header").removeClass("active");
        $(".box-menu-open").removeClass("active");
        $(".box-lateral-header").removeClass("active");
        $(".overlay-menu").fadeOut();
        $(".box-secundary-links").fadeOut(300);
        $(".btn-menu").removeClass("disable");
        $("body").removeClass("menu-open");
    }, 100);
});


$(".btn-close-subcategories").click(function (e) { 
    e.preventDefault();
    $(this).removeClass("active");
    $(".box-secundary-links").fadeOut(300);
    $(".btn-close-principal").fadeIn();
    $(".bar-open-menu").removeClass("disable");
    $(".btn-menu").removeClass("disable");
    $("body").removeClass("menu-open");
    $("header").removeClass("active");
    $(".box-menu-open").removeClass("active");
    $(".box-lateral-header").removeClass("active");
    $(".overlay-menu").fadeOut();
});

$(".btn-close-subcategories-mobile").click(function (e) { 
  e.preventDefault();
  $(this).removeClass("active");
  $(".box-secundary-links").fadeOut(300);
  $(".btn-close-principal").fadeIn();
  $(".bar-open-menu").removeClass("disable");
  $(".btn-menu").removeClass("disable");
});

$(".overlay-menu").click(function (e) { 
  e.preventDefault();
  $(this).removeClass("active");
  $(".box-secundary-links").fadeOut(300);
  $(".btn-close-principal").fadeIn();
  $(".bar-open-menu").removeClass("disable");
  $(".btn-menu").removeClass("disable");
  $("body").removeClass("menu-open");
  $("header").removeClass("active");
  $(".box-menu-open").removeClass("active");
  $(".box-lateral-header").removeClass("active");
  $(".overlay-menu").fadeOut();
});



// const counters = document.querySelectorAll(".counter");

// counters.forEach((counter) => {
//   counter.innerText = "0";
//   const updateCounter = () => {
//     const target = +counter.getAttribute("data-number");
//     const count = +counter.innerText;
//     const increment = target / 10000;
//     if (count < target) {
//       counter.innerText = `${Math.ceil(count + increment)}`;
//       setTimeout( updateCounter, 1);
//     } else counter.innerText = numberWithCommas(target);
//   };
//   updateCounter();
// });

$('.marquee_text').marquee({
    direction: 'left',
    duration: 15000,
    gap: 30,
    delayBeforeStart: 0,
    duplicated: true,
    startVisible: true
});

$(".btn-subcategory").click(function (e) {
    e.preventDefault();
    // aqui preguntamos el boton tiene la clase active y si lo tiene ejecutamos esta funcion
    if (!$(this).hasClass("active")) {
      // imprimimos el data
      var target = $(this).data("menu");
      $(".box-secundary-links").fadeOut(300);
      $(".btn-close-principal").fadeOut(300);
      $(this).removeClass("active");
      setTimeout(() => {
        $(target).fadeIn(300).css("display", "block");
      }, 300);
    }
});

$(".box-content-item-culture").click(function (e) {
    // aqui preguntamos el boton tiene la clase active y si lo tiene ejecutamos esta funcion
    if (!$(this).hasClass("active")) {
      // imprimimos el data
      var target = $(this).data("value");
      $(this).removeClass("active");
      setTimeout(() => {
        $(target).fadeIn(300).css("display", "block");
      }, 300);
    }
});


if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    document.getElementById('total-body').className += 'is-safari';
}


// Call the event handler on #text
$(".box-content-item-culture").hover(function(){
    var databutton = $(this).data('value');
    $('.box-content-item-culture').removeClass('active');
    if (databutton) {
        $("#"+databutton).addClass("active");
    }
    $(this).addClass("active")
  },
    // Event two mouse out remove class               
    function(){
});



$(document).ready(function() {
  ScrollTrigger.refresh();
  $(".accordion-titel").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      setTimeout(() => {
        $(this).siblings(".accordion-contant").removeClass("active");
      }, 0);
      $(this)
        .siblings(".accordion-contant")
        .slideUp(400);
      $(".accordion-titel i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".accordion-titel i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".accordion-titel").removeClass("active");
      $(this).addClass("active");
      setTimeout(() => {
        $(this).siblings(".accordion-contant").addClass("active");
      }, 200);
      $(".accordion-contant").slideUp(400);
      $(this)
        .siblings(".accordion-contant")
        .slideDown(400);
    }
  });
});

function animationPreloader(){
  var animationPreloaderGsap = gsap.timeline({paused:true});
  animationPreloaderGsap.to(".box-content-logo",{
    width: "100%",
    duration: 0.1,
    onComplete(){
      $(".preloader-custom-01").addClass("active");
      $(".main-content-total-page-home").addClass("active-preloader");
      $("body").removeClass("active-preload");
      if(window.location.hash){
        let hashUrl = window.location.hash.slice(1);
        setTimeout(() => {
            $('html, body').animate({
                scrollTop: $('#' + hashUrl).offset().top - 0
            },1000);
        }, 100);
      }
    }
  })
  animationPreloaderGsap.play()
}
if($("body.home").length){
  $("body").addClass("active-preload");
}

$(window).on('load', function () {
  // $(".preloader-custom-01").delay(2000).fadeOut(500);
  // $('body').delay(2000).css({'overflow':'visible'});
  if($("body.home").length){
    $("html, body").animate({ scrollTop: 0 }, "fast");
    setTimeout(() => {
      animationPreloader()
    }, 300);
  }
  /* gsap.to(".preloader-custom-01",{
    width: "calc(53% - 77px)",
    left: 59,
    top: 20,
    height: "90vh",
    "border-radius": "30",
    duration: 2
  })*/ 

  
});

if($(".section-values-custom").length){
  const items = document.querySelectorAll(".data");
    gsap.to(".section-values-custom",{
      scrollTrigger: {
        trigger: ".main-content-total-page",
        start: "top 0",
        end: "bottom 0",
        
        onEnter(){
          if (!$(".section-values-custom").hasClass("animate")) {
            $(".section-values-custom").addClass("animate")
            gsap.from(items, {
              textContent: 0,
              duration: 0.1,
              ease: "power1.in",
              snap: { textContent: 1 },
              stagger: {
                  each: 1.0,
                  onUpdate: function() {
                  this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
                  },
              }
              });
          }
        },
      }
    });
  
function numberWithCommas(x) {
return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
}

// if($("body.page-template-sustainability").length)
// {
//   if ($(window).width() > 991) {  
  
//   let panels = gsap.utils.toArray(".panel");
//   // we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
//   let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));
  
//   panels.forEach((panel, i) => {
//     ScrollTrigger.create({
//       trigger: panel,
//       start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
//       pin: true, 
//       pinSpacing: false 
//     });
//   });
  
//   ScrollTrigger.create({
//     // snap: {
//     //   snapTo: (progress, self) => {
//     //     let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
//     //         snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
//     //     return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
//     //   },
//     //   duration: 4
//     // }
//   });
//   }
  
//   let smoother = ScrollSmoother.create({
//   smooth: 1.5,   // seconds it takes to "catch up" to native scroll position
//   effects: true // look for data-speed and data-lag attributes on elements and animate accordingly
//   });
// }



$(".btn-mas-premios").click(function (e) {
  e.preventDefault();
  if ($(this).hasClass("active")) {
      $('.hidden-mobile').fadeOut(300);
      $(this).text('Más premios');
      $(this).removeClass("active");
      $('.main-content-total-page').removeClass("active");
  } else {
      $(this).addClass("active");
      $('.hidden-mobile').fadeIn(300);
      $(this).addClass("active");
      $(this).text('Menos premios');
      $('.main-content-total-page').addClass("active");
  }
});

$(".btn-show-more-products").click(function (e) {
  e.preventDefault();
  if ($(this).hasClass("active")) {
      $('.hidden.box-product-custom').fadeOut(300);
      $(this).removeClass("active");
  } else {
      $(this).addClass("active");
      $('.hidden.box-product-custom').fadeIn(300);
      $(this).fadeOut();
      
  }
});


gsap.to($(".main-content-total-page").last(), {
  y: ($("footer").outerHeight() / 2),
  "margin-bottom": -($("footer").outerHeight() / 1),
  ease: "none",
  scrollTrigger: {
      trigger: document.querySelectorAll("footer")[0],
      scrub: true
  }, 
});


if($(".swiper-marquesine-products").length){
  var swiperProducts = new Swiper('.swiper-marquesine-products', {
    spaceBetween: 10,
    slidesPerView: 4.5,
    speed: 3000, // 
    loop: true, // 
    watchSlidesProgress: true,
    autoplay: {
        delay: 0, // 
        pauseOnMouseEnter:true,
        disableOnInteraction: false,
    },
    breakpoints:{
        991: {
            slidesPerView: 4.5,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        }
    },
});
  
}

