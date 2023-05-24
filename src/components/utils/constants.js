
const states = [
    "AGUASCALIENTES",
    "BAJA CALIFORNIA",
    "BAJA CALIFORNIA SUR",
    "CAMPECHE",
    "COAHUILA",
    "COLIMA",
    "CHIAPAS",
    "CHIHUAHUA",
    "DURANGO",
    "CIUDAD DE MEXICO",
    "GUANAJUATO",
    "GUERRERO",
    "HIDALGO",
    "JALISCO",
    "MEXICO",
    "MICHOACAN",
    "MORELOS",
    "NAYARIT",
    "NUEVO LEON",
    "OAXACA",
    "PUEBLA",
    "QUERETARO",
    "QUINTANA ROO",
    "SAN LUIS POTOSI",
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
    if (state == "BAJA CALIFORNIA") return "Baja california";
    if (state == "BAJA CALIFORNIA SUR") return "Baja california sur";
    if (state == "CAMPECHE") return "Campeche";
    if (state == "COAHUILA") return "Coahuila";
    if (state == "COLIMA") return "Colima";
    if (state == "CHIAPAS") return "Chiapas";
    if (state == "CHIHUAHUA") return "Chihuahua";
    if (state == "DURANGO") return "Durango";
    if (state == "CIUDAD DE MEXICO") return "Ciudad de México";
    if (state == "GUANAJUATO") return "Guanajuato";
    if (state == "GUERRERO") return "Guerrero";
    if (state == "HIDALGO") return "Hidalgo";
    if (state == "JALISCO") return "Jalisco";
    if (state == "MEXICO") return "Estado de México";
    if (state == "MICHOACAN") return "Michoacán";
    if (state == "MORELOS") return "Morelos";
    if (state == "NAYARIT") return "Nayarit";
    if (state == "NUEVO LEON") return "Nuevo león";
    if (state == "OAXACA") return "Oaxaca";
    if (state == "PUEBLA") return "Puebla";
    if (state == "QUERETARO") return "Querétaro";
    if (state == "QUINTANA ROO") return "Quintana roo";
    if (state == "SAN LUIS POTOSI") return "San Luis Potosí";
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