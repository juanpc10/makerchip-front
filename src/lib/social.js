module.exports = {};

module.exports.projectUrl = projectId => {
    if (projectId) {
        return `http://167.99.15.99:8333/projects/${projectId}`;
    }
    return '';
};

module.exports.embedHtml = projectId => {
    if (projectId) {
        return `<iframe src="http://167.99.15.99:8333/projects/${projectId}/embed" ` +
            'allowtransparency="true" width="485" height="402" ' +
            'frameborder="0" scrolling="no" allowfullscreen></iframe>';
    }
    return '';
};
