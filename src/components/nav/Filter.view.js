import React from "react";
import PropTypes from "prop-types";
import { Range } from "react-range";

const FilterView = ({
    user,
    values,
    companies,
    categories,
    priceRange,
    selectedCompanies,
    handleFilterClear,
    handlePriceFilter,
    handlePriceChange,
    handleModalToggle,
    selectedCategories,
    handleCategoryChange,
    handleCompanyChange
}) => (
  <>
    <div
      className="card position-absolute rounded-0"
      tabIndex="1"
      role="dialog"
      style={{
        overflowY: "auto",
        backgroundColor: "white",
        top: 0,
        left: 0,
        height: "100%",
        width: "23vw",
        zIndex: 9999,
      }}
    >
      <div className="card-header rounded-0" style={{ height: "12vh" }}>
        <div className="col-md-2 mt-4" style={{ marginLeft: "-0.2vw" }}>
          <i
            className="fas fa-bars fa-2x"
            onClick={handleModalToggle}
            style={{ cursor: "pointer", color: "black", fontSize: "45px" }}
          ></i>
        </div>
        <div className="col-md-9 mt-4" style={{ marginLeft: "0vw" }}>
          <h2 className="card-title">Bienvenido, {user?.firstName}</h2>
        </div>
      </div>       
      <div className="card-body ml-3">
        <button className="mt-1 mr-5 col-md-12 text-right d-inline" 
          style={{background:"white", border:"none", fontSize:"11px", marginBottom:"-20vh"}} 
            onClick={handleFilterClear}>
          <span className="fa-stack">
            <i 
              style = {{zIndex: 500}}
              className="fas fa-times-circle fa-stack-1x text-danger ml-2 mt-1"></i>
            <i className="fas fa-filter fa-stack-2x"></i>
          </span>
        </button>
        <h3>ORDENAR POR:</h3>
        <ul style={{ color: "black" }}>
          <li 
            style={{ cursor: "pointer" }}
            onClick={() => handlePriceFilter("highest")}>
              Precio (Mayor a menor)
          </li>
          <li 
            style={{ cursor: "pointer" }}
            onClick={() => handlePriceFilter("lowest")}>
              Precio (Menor a mayor)
          </li>
          <li>Rango de precio</li>
        </ul>
        <div className="col-md-9 ml-6">
          <Range
            values={values}
            min={0}
            max={100000}
            step={1000}
            onChange={handlePriceChange}
            renderTrack={({ props, children }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  background: "#ccc",
                  borderRadius: "3px",
                  backgroundColor: "#D9D9D9",
                }}
              >
                {children}
                <div
                  style={{
                    position: "absolute",
                    height: "100%",
                    left: `${(values[0] / 100000) * 100}%`,
                    width: `${((values[1] - values[0]) / 100000) * 100}%`,
                    background: "#FC4B08",
                  }}
                />
              </div>
            )}
            renderThumb={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "16px",
                  width: "16px",
                  backgroundColor: "#FC4B08",
                  borderRadius: "50%",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.16)",
                  outline: "none",
                }}
              />
            )}
            renderRail={({ props }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  background: "#ccc",
                  borderRadius: "3px",
                }}
              />
            )}
          />
          <div className="d-flex justify-content-between">
            <span>${values[0]}</span>
            <span>${values[1]}</span>
          </div>
        </div>
        <hr/>
        <div className="mt-5">
            <h3>CATEGORÍA:</h3>
            {categories.map((category) => (
              <label className="ml-4 d-flex" key={category.id}>
                {selectedCategories.includes(""+category?.id) ? 
                  <input 
                      type="checkbox" 
                      name="category"
                      value={category.id}
                      onChange={handleCategoryChange}
                      checked
                  /> 
                : null}
                {selectedCategories.length == 0 || !selectedCategories.includes(""+category?.id) ?
                  <input
                    type="checkbox"
                    name="category"
                    value={category.id}
                    onChange={handleCategoryChange}
                  />
                : null}
                <h4 className="mt-2 ml-1">{category?.name}</h4>
              </label>
            ))}
        </div>
        <hr/>
        <div className="mt-5">
            <h3>MARCA:</h3>
            {companies.map((company) => (
              <label className="ml-4 d-flex" key={company.id}>
                {selectedCompanies.includes(""+company?.id) ?
                  <input 
                    type="checkbox" 
                    name="category"
                    value={company.id}
                    onChange={handleCompanyChange}
                    checked
                  />
                : null}
                {selectedCompanies.length == 0 || !selectedCompanies.includes(""+company?.id) ?
                  <input
                    type="checkbox"
                    name="category"
                    value={company.id}
                    onChange={handleCompanyChange}
                  />
                : null}
                <h4 className="mt-2 ml-1">{company?.commonName}</h4>
              </label>
            ))}
        </div>
      </div>
    </div>
    <div className="card position-absolute rounded-0"
        onClick={handleModalToggle}
        style={{width:"76.5vw", 
                height:"100%", 
                overflowY:"hidden",
                margin:0,
                top:"0",
                cursor:"default",
                right:"0",
                backgroundColor: "rgb(0,0,0,0.3)",
                zIndex:9999}}>
    </div>
  </>
);

FilterView.propTypes = {
    handleFilterClear: PropTypes.func,
    handlePriceFilter: PropTypes.func,
    selectedCategories: PropTypes.array,
    selectedCompanies: PropTypes.array,
    user: PropTypes.object,
    values: PropTypes.array,
    handlePriceChange: PropTypes.func,
    handleModalToggle: PropTypes.func,
    categories: PropTypes.array,
    companies: PropTypes.array,
    handleCategoryChange: PropTypes.func,
    handleCompanyChange: PropTypes.func,
};

export default FilterView;
