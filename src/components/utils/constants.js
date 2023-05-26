
const states = [
    "AGUASCALIENTES",
    "BAJA_CALIFORNIA",
    "BAJA_CALIFORNIA_SUR",
    "CAMPECHE",
    "COAHUILA",
    "COLIMA",
    "CHIAPAS",
    "CHIHUAHUA",
    "DURANGO",
    "CIUDAD_DE_MEXICO",
    "GUANAJUATO",
    "GUERRERO",
    "HIDALGO",
    "JALISCO",
    "MEXICO",
    "MICHOACAN",
    "MORELOS",
    "NAYARIT",
    "NUEVO_LEON",
    "OAXACA",
    "PUEBLA",
    "QUERETARO",
    "QUINTANA_ROO",
    "SAN_LUIS_POTOSI",
    "SINALOA",
    "SONORA",
    "TABASCO",
    "TAMAULIPAS",
    "TLAXCALA",
    "VERACRUZ",
    "YUCATAN",
    "ZACATECAS"
];

const getStateName = (state) => {

    if (state == "AGUASCALIENTES") return "Aguascalientes";
    if (state == "BAJA_CALIFORNIA") return "Baja california";
    if (state == "BAJA_CALIFORNIA_SUR") return "Baja california sur";
    if (state == "CAMPECHE") return "Campeche";
    if (state == "COAHUILA") return "Coahuila";
    if (state == "COLIMA") return "Colima";
    if (state == "CHIAPAS") return "Chiapas";
    if (state == "CHIHUAHUA") return "Chihuahua";
    if (state == "DURANGO") return "Durango";
    if (state == "CIUDAD_DE_MEXICO") return "Ciudad de México";
    if (state == "GUANAJUATO") return "Guanajuato";
    if (state == "GUERRERO") return "Guerrero";
    if (state == "HIDALGO") return "Hidalgo";
    if (state == "JALISCO") return "Jalisco";
    if (state == "MEXICO") return "Estado de México";
    if (state == "MICHOACAN") return "Michoacán";
    if (state == "MORELOS") return "Morelos";
    if (state == "NAYARIT") return "Nayarit";
    if (state == "NUEVO_LEON") return "Nuevo león";
    if (state == "OAXACA") return "Oaxaca";
    if (state == "PUEBLA") return "Puebla";
    if (state == "QUERETARO") return "Querétaro";
    if (state == "QUINTANA_ROO") return "Quintana roo";
    if (state == "SAN_LUIS_POTOSI") return "San Luis Potosí";
    if (state == "SINALOA") return "Sinaloa";
    if (state == "SONORA") return "Sonora";
    if (state == "TABASCO") return "Tabasco";
    if (state == "TAMAULIPAS") return "Tamaulipas";
    if (state == "TLAXCALA") return "Tlaxcala";
    if (state == "VERACRUZ") return "Veracruz";
    if (state == "YUCATAN") return "Yucatán";
    if (state == "ZACATECAS") return "Zacatecas";
    return "";

}

export { states, getStateName };