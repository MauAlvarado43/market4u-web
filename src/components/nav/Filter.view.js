import React from "react";
import PropTypes from "prop-types";
import { Range } from "react-range";

const FilterView = ({
    user,
    values,
    handlePriceChange,
    handleModalToggle,
    categories,
    companies,
    handleCategoryChange,
    handleCompanyChange,
}) => (
  <>
    <div
      className="card position-absolute rounded-0"
      tabIndex="-1"
      role="dialog"
      style={{
        overflowY: "auto",
        backgroundColor: "white",
        top: 0,
        left: 0,
        height: "100vh",
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
      <div className="card-body ml-3 mt-2">
        <h3>ORDENAR POR:</h3>
        <ul style={{ color: "black" }}>
          <li style={{ cursor: "pointer" }}>Precio (Mayor a menor)</li>
          <li style={{ cursor: "pointer" }}>Precio (Menor a mayor)</li>
          <li>Rango de precio</li>
        </ul>
        <div className="col-md-9 ml-6">
          <Range
            values={values}
            min={0}
            max={15000}
            step={100}
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
                    left: `${(values[0] / 15000) * 100}%`,
                    width: `${((values[1] - values[0]) / 15000) * 100}%`,
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
                <input 
                    type="checkbox" 
                    name="category"
                    value={category.name}
                    onChange={handleCategoryChange}
                /> 
                <h4 className="mt-2 ml-1">{category?.name}</h4>
              </label>
            ))}
        </div>
        <hr/>
        <div className="mt-5">
            <h3>MARCA:</h3>
            {companies.map((company) => (
              <label className="ml-4 d-flex" key={company.id}>
                <input 
                  type="checkbox" 
                  name="category"
                  value={company.commonName}
                  onChange={handleCompanyChange}
                />
                <h4 className="mt-2 ml-1">{company?.commonName}</h4>
              </label>
            ))}
        </div>
      </div>
    </div>
    <div className="card position-absolute rounded-0"
        style={{width:"77vw", 
                height:"100vh", 
                margin:0,
                top:"0",
                right:"0",
                backgroundColor: "rgb(0,0,0,0.3)",
                zIndex:9999}}>
    </div>
  </>
);

FilterView.propTypes = {
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
