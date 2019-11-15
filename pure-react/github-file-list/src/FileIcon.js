import React from 'react';
import PropTypes from 'prop-types';

function FileIcon({ file }) {
    let icon = file.type === 'file' ? 'fa-file-text-o' : 'fa-folder';
    return (
        <>
            <i className={`fa ${icon}`} />
        </>
    );
}
FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};

export default FileIcon;
