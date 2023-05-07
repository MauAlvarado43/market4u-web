import React from "react";
import PropTypes from "prop-types";
import Modal from "components/helpers/Modal";

// https://betterprogramming.pub/how-to-implement-files-drag-and-drop-in-react-22cf42b7a7ef

const PhotosView = ({
  message,
  newPhotos = [],
  onSave,
  onRemovePhoto,
  onClose,
  onDragOver,
  onDrop,
  onSelectFiles,
}) =>
  <Modal
    width={800}
    height={700}
    onClose={onClose}
    component={
    () => <div className="card">
      <div className="card-header">
        <h1 class="card-header-title">Galería</h1>
      </div>
      <div className="card-body">

        <div className="d-flex flex-nowrap justify-content-start" style={{overflowX: "auto", width: "100%"}}>
          {
            newPhotos.map((photo, index) =>
              <div className="d-flex flex-nowrap" key={index}>
                <img src={photo.url} height={110} className="mr-3" alt="Producto"/>
                <div style={{}}>
                  <button 
                    style={{left: "-25px", position: "relative", zIndex: "1"}}
                    type="button" 
                    className="btn btn-danger btn-sm rounded-circle" 
                    onClick={() => onRemovePhoto(index)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            )
          }
        </div>

        <div className="d-flex justify-content-center align-items-center px-6 py-6">
          <div 
            className="container" 
            style={{width: "100%", height: "20em", backgroundColor: "#F0F0F0"}} 
            onDrop={onDrop}
            onDragOver={onDragOver}
          >
            
            <div className="d-flex justify-content-center mt-5">
              <i className="fa fa-folder-open fa-4x" aria-hidden="true"/>
            </div>

            <div className="d-flex justify-content-center mt-3">
              <h3>
                Arrastra y suelta las imágenes aquí
              </h3>
            </div>

            <div className="d-flex justify-content-center mt-2">
              <h3>
                o
              </h3>
            </div>

            <div className="d-flex justify-content-center mt-3">
              <input type="file" multiple onChange={onSelectFiles} accept=".jpg,.png,.jpeg" />
            </div>

            <div className="d-flex justify-content-center mt-3 text-danger">
              {message}
            </div>

          </div>
        </div>
        
        <div className="d-flex justify-content-center align-items-center">

            <button 
              type="button" 
              className="btn btn-secondary btn-sm rounded-pill px-4 mr-5" 
              onClick={onClose}
            >
              <i className="fas fa-times mr-3 fa-lg"></i> Cancelar
            </button>

            <button 
              type="button" 
              className="btn btn-primary btn-sm rounded-pill px-4 ml-5" 
              onClick={onSave}
            >
              <i className="fas fa-save mr-3 fa-lg"></i> Guardar
            </button>

        </div>

      </div>
    </div>
    }
  />;

PhotosView.propTypes = {
  message: PropTypes.string,
  newPhotos: PropTypes.array,
  onSave: PropTypes.func,
  onRemovePhoto: PropTypes.func,
  onClose: PropTypes.func,
  onDragOver: PropTypes.func,
  onDrop: PropTypes.func,
  onSelectFiles: PropTypes.func,
};

export default PhotosView;