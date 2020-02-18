function Response (success, details) {
    let _success = success;
    let _details = details;

    this.toJson = function () {
        return {
            success: _success,
            body: {
                details: _details
            }
        };
    }
}

module.exports = Response;