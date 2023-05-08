import React from "react";
import PropTypes from "prop-types";
import RelatedProductCard from "./RelatedProductCard";

const RelatedProductsView = ({ 
  products,
  pageSize,
  pageIndex,
  setPageIndex
}) => 
  <div className="d-flex justify-content-center align-items-center">

    <div className="d-flex">

      <a
        className="carousel-control-prev text-dark mb-7"
        href="#related-carousel"
        role="button"
        data-slide="prev"
      >
        <i className="fas fa-chevron-left fa-2x"></i>
      </a>

      <div className="">
        <div id="related-carousel" className="carousel slide mb-2 mx-2" data-ride="carousel" >
          <div className="carousel-inner">
            {
              function(){

                let productsComponents = [];
                let productsLength = products.length;

                for(let i = 0; i < productsLength; i += pageSize) {

                  let productsSlice = products.slice(i, i + pageSize);

                  productsComponents.push(
                    <div 
                      key={"products_" + i}
                      className={`carousel-item ${i === 0 ? "active" : ""}`}
                    >
                      <div className="d-flex justify-content-center">
                        {
                          productsSlice.map((product, index) => 
                            <div 
                              key={product.id}
                              className="mx-1"
                            >
                              <RelatedProductCard product={product}/>
                            </div>
                          )
                        }
                      </div>
                    </div>
                  );


                }

                return productsComponents;

              }()
            }
          </div>

          <ol className="carousel-indicators">
            {
              function(){
                  
                let indicatorsComponents = [];
                let productsLength = products.length;

                for(let i = 0; i < productsLength; i += pageSize) {

                  indicatorsComponents.push(
                    <li 
                      key={"control_" + i}
                      data-target="#related-carousel"
                      data-slide-to={i / pageSize}
                      className={`${i === 0 ? "active" : ""}`}
                      style={{ 
                        width: "5px", 
                        height: "5px", 
                        borderRadius: "50%", 
                        position: "relative", 
                        bottom: "-40px",
                        backgroundColor: "#000"
                      }}
                    ></li>
                  );

                }

                return indicatorsComponents;

              }()
            }
          </ol>

        </div>
      </div>

      <a
        className="carousel-control-next text-dark mb-7"
        href="#related-carousel"
        role="button"
        data-slide="next"
      >
        <i className="fas fa-chevron-right fa-2x"></i>
      </a>

    
    </div>

  </div>;

RelatedProductsView.propTypes = {
  products: PropTypes.array 
}

export default RelatedProductsView;