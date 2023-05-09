import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import View from "components/superadmin/products/PhotosSA.view";
import $ from "jquery";
import { API_URL } from "settings";

function Photos({
  photos,
  setPhotos,
  selectedIndex,
  setHideModal,
}) {

  const [newPhotos, setNewPhotos] = useState(photos[selectedIndex]);
  const [message, setMessage] = useState(null);

  const onClose = () => {
    setHideModal(true);
  }

  const onRemovePhoto = (index) => {
    const splicedPhotos = [...newPhotos];
    splicedPhotos.splice(index, 1);
    setNewPhotos(splicedPhotos);
  }

  const onSave = () => {
    const savedPhotos = [...photos];
    savedPhotos[selectedIndex] = newPhotos;
    setPhotos(savedPhotos);
    setHideModal(true);
  }

  const uploadFiles = async (files) => {

    const upload = async (file) => {

      let url = `${API_URL}/files/`;
  
      return new Promise((resolve, reject) => {

        let formData = new FormData();
        formData.append("file", file);

        $.ajax({
          url: url,
          type: "POST",
          data: formData,
          cache: false,
          contentType: false,
          processData: false,
          xhr: function () {
            var myXhr = $.ajaxSettings.xhr();
            return myXhr;
          },
          success: (json) => {
            resolve({
              body: json,
              ok: true
            });
          },
          error: (error) => {
            reject({
              body: error,
              ok: false
            });
          }
        });
      });
  
    };

    const promises = files.map(async (file) => {
      const uploadFile = await upload(file);
      return uploadFile;
    });

    const uploadFiles = await Promise.all(promises);
    return uploadFiles;

  }

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }
  
  const onDrop = (e) => {

    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer ? [...e.dataTransfer.files] : [];
    const validExtensions = ["jpg", "png", "jpeg"];

    const valid = files.reduce((acc, file) => 
      acc && validExtensions.indexOf(validExtensions.indexOf(file.name.split(".").pop())), true);

    if(!valid) return setMessage("Solo se permiten archivos con extensión .jpg, .png o .jpeg.");

    uploadFiles(files).then((uploadFiles) => {
      const uploadedPhotos = uploadFiles.map(f => f.body);
      setNewPhotos([...newPhotos, ...uploadedPhotos]);
      setMessage(null);
    }).catch((error) => {
      setMessage("Error al subir las imágenes, intenta de nuevo.");
    });

  }

  const onSelectFiles = (e) => {
      
      const files = e.target.files ? [...e.target.files] : [];

      uploadFiles(files).then((uploadFiles) => {
        const uploadedPhotos = uploadFiles.map(f => f.body);
        setNewPhotos([...newPhotos, ...uploadedPhotos]);
        setMessage(null);
      }).catch((error) => {
        setMessage("Error al subir las imágenes, intenta de nuevo.");
      });

  }

  return <View 
    onSave={onSave}
    onRemovePhoto={onRemovePhoto}
    onClose={onClose}
    onDragOver={onDragOver}
    onDrop={onDrop}
    onSelectFiles={onSelectFiles}
    newPhotos={newPhotos}
    message={message}
  />;

}

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
  setPhotos: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  setHideModal: PropTypes.func.isRequired,
};

export default Photos;