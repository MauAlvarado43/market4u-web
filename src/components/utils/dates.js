

const getLongFotmatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('es', options).format(date);
    return formattedDate.replace(/(\d+) de (\w+) de (\d+)/, '$1 de $2 de $3');
}

const getShortFotmatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

export { getLongFotmatDate, getShortFotmatDate };