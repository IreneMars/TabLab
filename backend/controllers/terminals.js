const { Terminal } = require("../models");

exports.getTerminal = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const terminals = await Terminal.find({ 'user': req.params.userId });
        if (terminals.length !== 1) {
            return res.status(500).json({
                message: "Fetching a terminal failed!"
            });
        }
        if (terminals[0].user != current_user_id) {
            return res.status(403).json({
                message: "You are not authorized to fetch this terminal."
            });
        }

        return res.status(200).json({
            message: "Terminal fetched successfully!",
            terminal: terminals[0],
        });

    } catch (err) {
        return res.status(500).json({
            message: "Fetching a terminal failed!"
        });
    }
};

exports.updateTerminal = async(req, res, next) => {
    current_user_id = req.userData.userId;
    try {
        const terminal = await Terminal.findById(req.params.id);
        if (terminal.user != current_user_id) {
            return res.status(403).json({
                message: "You are not authorized to update this terminal."
            });
        }
        terminal.content = req.body.content;
        await Terminal.findByIdAndUpdate(req.params.id, terminal);
        const updatedTerminal = await Terminal.findById(req.params.id);
        return res.status(200).json({
            message: "Update successful!",
            terminal: updatedTerminal
        });
    } catch (err) {
        return res.status(500).json({
            message: "Updating a terminal failed!"
        });
    }
};