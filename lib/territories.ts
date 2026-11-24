// Source: CB Franquicias 2026 workbook; Baja California confirmed in Estrategia 2027.
// Priority markets are subject to territorial validation; Baja California Sur remains excluded.
export const territories: Record<string,string[]> = {
  "Baja California": [
    "Mexicali",
    "Rosarito",
    "Valle de Guadalupe"
  ],
  "Chiapas": [
    "San Cristóbal de las Casas",
    "Tuxtla Gutiérrez"
  ],
  "Chihuahua": [
    "Chihuahua"
  ],
  "Ciudad de México": [
    "Bosques de las Lomas / Bosques de Reforma",
    "Coyoacán centro / Del Carmen",
    "Jardines del Pedregal / Fuentes del Pedregal",
    "Nuevo Polanco / Granada",
    "Roma Norte / Condesa / Hipódromo",
    "San Ángel / Altavista",
    "Santa Fe / Contadero"
  ],
  "Coahuila": [
    "Saltillo"
  ],
  "Estado de México": [
    "Interlomas / Herradura / Bosque Real",
    "Ixtapan de la Sal",
    "Malinalco",
    "Metepec premium",
    "Tepotzotlán",
    "Zona Esmeralda (Atizapán)"
  ],
  "Guanajuato": [
    "Celaya",
    "León"
  ],
  "Guerrero": [
    "Ixtapa – Zihuatanejo"
  ],
  "Hidalgo": [
    "Pachuca"
  ],
  "Jalisco": [
    "Guadalajara",
    "Zapopan"
  ],
  "Morelos": [
    "Cuernavaca",
    "Jiutepec / Burgos",
    "Tepoztlán"
  ],
  "Nuevo León": [
    "Monterrey / San Pedro Garza García"
  ],
  "Oaxaca": [
    "Huatulco",
    "Mazunte",
    "Oaxaca capital",
    "Puerto Escondido",
    "San Agustinillo",
    "Zipolite"
  ],
  "Puebla": [
    "Cholula",
    "Puebla (capital)"
  ],
  "Querétaro": [
    "Querétaro"
  ],
  "Quintana Roo": [
    "Akumal",
    "Bacalar",
    "Cancún",
    "Mahahual",
    "Playa del Carmen",
    "Puerto Morelos",
    "Tulum",
    "Xcalak"
  ],
  "San Luis Potosí": [
    "San Luis Potosí"
  ],
  "Sinaloa": [
    "Altata",
    "Mazatlán",
    "Topolobampo"
  ],
  "Sonora": [
    "Hermosillo",
    "Puerto Peñasco"
  ],
  "Tabasco": [
    "Villahermosa"
  ],
  "Yucatán": [
    "Chicxulub",
    "Mérida",
    "Progreso",
    "Telchac"
  ]
};
export function validTerritory(state:string,city:string){return !!territories[state]?.includes(city)}
