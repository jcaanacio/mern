function Response (success, details) {
    let _success = success;
    let _details = details;

    this.toJson = () => {
        return {
            success: _success,
            body: {
                details: _details
            }
        };
    }

    this.toXml = () => {
        const response = {
            success: _success,
            body: {
                details: _details
            }
        };
        return new DOMParser().parseFromString(response,"text/xml");
    }
}

module.exports = Response;