import React from 'react';
import PropTypes from 'prop-types';
import logoGrey from '../img/logo-grey.svg';

const Uploader = ({
  accept,
  disabled,
  files,
  label,
  multiple,
  name,
  onChange,
}) => {

  const fieldProps = {
    className: 'uploader__input',
    type: 'file',
    accept,
    disabled,
    multiple,
    name,
    onChange,
  }

  return (
    <div className="uploader">
      <div className="uploader__item">
        <label className="uploader__button">
          <span className="uploader__more">+</span>
          <span className="uploader__label">{label}</span>
          <input {...fieldProps} />
        </label>
      </div>

      {
        files.map(file => (
          <div key={file.id} className="uploader__item uploader__file">
            <div
              className="uploader__file__preview"
              style={!file.url ? {backgroundImage: `url(${logoGrey})`} : null}
            >
              {
                file.url
                ? /.*image.*/.test(file.type)
                  ? (<img className="uploader__file__img" src={file.url} alt={file.name} />)
                  : (<a className="uploader__file__name" href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a>)
                : ''
              }
            </div>
            <div className="uploader__file__progress">
              <div className="uploader__file__progress__current" style={{ width: `${file.progress}%`}} />
            </div>
          </div>
        ))
      }
    </div>
  );
}

Uploader.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    url: PropTypes.string,
    error: PropTypes.string,
  })),
  accept: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Uploader.defaultProps = {
  files: [],
  accept: undefined,
  disabled: false,
  label: 'Arquivos',
  multiple: false,
  onChange: undefined,
};

export default Uploader;
