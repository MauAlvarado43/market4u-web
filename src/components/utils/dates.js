

const getLongFotmatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('es', options).format(date);
    return formattedDate.replace(/(\d+) de (\w+) de (\d+)/, '$1 de $2 de $3');
}

export { getLongFotmatDate };