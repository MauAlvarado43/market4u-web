import React from "react";
import PropTypes from "prop-types";
import RelatedProductCard from "./RelatedProductCard";
import { DateTime } from "luxon";

const ProductOpinionListView = ({ 
  opinions,
  product,
  rate,
  opinionRateCount
}) => 
  <div className="row">
    <div className="col-md-4">
      <div className="">
        {
          function(){
            
            let stars = [];

            for(let i = 0; i < 5; i++)
              if(i < rate)
                stars.push(<i key={i} className="fa fa-star text-warning"></i>);
              else
                stars.push(<i key={i} className="far fa-star"></i>);

              return <>
                <span> { stars } </span>
                <span className="ml-2"> { rate } de 5 </span>
              </>

          }()
        }
      </div>
      <div className="my-2">
        { opinions.length } { opinions.length === 1 ? "calificación" : "calificaciones" }
      </div>
      <div>
        <div className="">
          {
            function(){

              let components = [];
              for(let i = 5; i >= 1; i--)
                components.push(
                  <div className="row d-flex align-items-center">
                    <div className="col-md-2 d-flex align-items-center">
                      <div style={{width: "15px"}}> { i } </div> <i className="ml-1 fa fa-star text-warning"></i> 
                    </div>
                    <div className="col-md-10">
                      <div className="progress" style={{height: "5px"}}> 
                        <div 
                          className="progress-bar bg-warning" 
                          role="progressbar" 
                          style={{width: opinionRateCount[i].percent + "%"}} 
                          aria-valuenow={opinionRateCount[i].percent} 
                          aria-valuemin="0" 
                          aria-valuemax="100">
                        </div>
                      </div>
                    </div>
                  </div>
                );

              return components;

            }()
          }
        </div>
      </div>
    </div>
    <div className="col-md-8">

      <div className="row justify-content-center">
        <div className="col-md-6 d-flex">
          <select className="form-control mx-3">
            <option> Ordenar </option>
          </select>
          <select className="form-control mx-3">
            <option> Calificación </option>
          </select>
        </div>
      </div>

      {
        opinions.map((opinion, index) =>
          <div key={"opinion_" + index} className="row my-3 px-6">
            <div className="col-md-12">

              <div className="row">
                <div className="col-md-1 d-flex justify-content-center align-items-center">
                  <img
                    src={opinion.user.photo.url}
                    className="img-fluid rounded-circle ml-3"
                    alt=""
                    style={{ maxWidth: "50px", maxHeight: "50px" }}
                  />
                </div>
                <div className="col-md-11">
                  <h3 className="mt-2">{opinion.user.firstName} {opinion.user.lastName}</h3>
                </div>
              </div>

              <div className="row d-flex justify-content-center align-items-center">

                <div className="col-md-12 d-flex align-items-center">
                  {
                    function(){
                      
                      let stars = [];

                      for(let i = 0; i < 5; i++)
                        if(i < opinion.rate)
                          stars.push(<i key={i} className="fa fa-star text-warning"></i>);
                        else
                          stars.push(<i key={i} className="far fa-star"></i>);

                        return <span className="mr-3"> { stars } </span>

                    }()
                  }
                  <h3 className="mt-2">{opinion.title}</h3>
                </div>
              </div>

              <h5 className="text-muted">{ DateTime.fromISO(opinion.createdAt).toFormat("dd 'de' LLLL 'de' yyyy") }</h5>

              <div class="text-wrap text-break" style={{width: "100%"}}>
                {opinion.description}
              </div>

              <p className="mt-3"></p>

            </div>
          </div>
        )
      }

    </div>
  </div>;

ProductOpinionListView.propTypes = {
  product: PropTypes.object,
  rate: PropTypes.number,
  opinionRateCount: PropTypes.object,
  opinions: PropTypes.array
}

export default ProductOpinionListView;