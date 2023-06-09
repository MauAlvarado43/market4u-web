const applyFilter = (key, filters) => filters[key] != null && filters[key] != "all" && filters[key] != "";

const getProductsFilters = (filters) => {
    const queries = [];

    if (applyFilter("companies", filters)) {
        const queriesCompanies = [];
        for (let company of filters.companies) {
            queriesCompanies.push(`company.id = ${company}`)
        }
        queries.push(queriesCompanies.length == 0 ? "" : "(" + queriesCompanies.join(" OR ") + ")") 
    }

    if (applyFilter("categories", filters)) {
        const queriesCategories = [];
        for (let category of filters.categories) {
            queriesCategories.push(`category.id = ${category}`)
        }
        queries.push(queriesCategories.length == 0 ? "" : "(" + queriesCategories.join(" OR ") + ")") 
    }

    if (applyFilter("prices", filters)) {
        if (filters.prices.length == 2) {
            queries.push(`variants.price >= ${filters.prices[0]}`);
            queries.push(`variants.price <= ${filters.prices[1]}`);
        }
    }

    if (applyFilter("sale", filters)) {
        queries.push(`sale.id = ${filters.sale}`);
    }

    if (queries.length == 0) {
        return "";
    } else {
        return "(" + queries.join(" AND ") + ")";

    }
    
};



export { getProductsFilters };