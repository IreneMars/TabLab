const { FricError } = require("../models");

exports.getFricErrors = async(req, res, next) => {
    try {
        const fricErrors = await FricError.find();

        return res.status(200).json({
            message: "Frictionless errors fetched successfully!",
            fricErrors: fricErrors,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Fetching frictionless errors failed!"
        });
    }
}