import React from 'react';
import PropTypes from 'prop-types';
import { upload as fileUpload } from '../utils/firebase/file';
import Uploader from './Uploader';

class UploaderContainer extends React.Component {
  state = {
    filesUrls: [],
    files: [],
  }

  triggerChangeValue() {
    const { onChange, name } = this.props;
    const { filesUrls } = this.state;

    if (onChange) {
      onChange({
        target: {
          name: name,
          value: filesUrls
        }
      })
    }
  }

  addFile(file) {
    const { files } = this.state;

    files.push(file);
    this.setState({ files });
  }

  setFileError(file, error) {
    const { files } = this.state;
    const fileIndex = files.findIndex((item) => item.id === file.id);

    if (fileIndex !== -1) {
      files[fileIndex].error = error;

      this.setState({ files });
    }
  }

  updateFileProgress(file, progress) {
    const { files } = this.state;
    const fileIndex = files.findIndex((item) => item.id === file.id);

    if (fileIndex !== -1) {
      files[fileIndex].progress = progress;

      this.setState({ files });
    }
  }

  addFileUrl(file, url) {
    const { files, filesUrls } = this.state;
    const fileIndex = files.findIndex((item) => item.id === file.id);

    filesUrls.push(url);

    if (fileIndex !== -1) {
      files[fileIndex].url = url;
    }

    this.setState({
      files,
      filesUrls
    }, () => {
      this.triggerChangeValue()
    });
  }

  valueChange(e) {
    const files = e.target.files;

    for (var key in files) {
      if (isNaN(key)) {
        return;
      }

      // File
      const file = files[key];
      const fileData = {
        id: `${file.name}-${file.lastModified}-${file.size}`,
        name: file.name,
        type: file.type,
        progress: 0
      }

      this.addFile(fileData);

      fileUpload({
        file,
        ref: 'products_photos',
        onProgress: (progress) => {
          this.updateFileProgress(fileData, progress);
        },
        onError: (error) => {
          this.setFileError(fileData, error);
        },
        onComplete: (url) => {
          this.addFileUrl(fileData, url)
        }
      })
    }
  }

  render () {
    const {
      accept,
      disabled,
      label,
      multiple,
      name,
    } = this.props;

    const { files } = this.state;

    return (
      <Uploader
        accept={accept}
        disabled={disabled}
        files={files}
        label={label}
        multiple={multiple}
        name={name}
        onChange={this.valueChange.bind(this)}
      />
    );
  }
}

UploaderContainer.propTypes = {
  accept: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  multiple: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

UploaderContainer.defaultProps = {
  accept: undefined,
  disabled: false,
  label: '',
  multiple: false,
  onChange: undefined,
};

export default UploaderContainer;
