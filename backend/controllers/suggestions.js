const { query } = require("express");
const { Role, Datafile, Suggestion } = require("../models");

exports.getSuggestionsByDatafile = async(req, res) => {
    try {
        const suggestions = await Suggestion.find({ datafile: req.params.datafileId });
        return res.status(200).json({
            message: "Suggestions fetched successfully!",
            suggestions: suggestions,
        });
    } catch (err) {
        return res.status(500).json({
            message: "Fetching suggestions failed!"
        });
    }
};

exports.createSuggestionsByDatafile = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const datafile = await Datafile.findById(req.params.datafileId);
        if (!datafile) {
            return res.status(500).json({
                message: "Adding suggestions failed! (Datafile not found)."
            });
        }
        const roles = await Role.find({ 'workspace': datafile.workspace, 'user': current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "These suggestions are not allowed to be created!"
            });
        }

        var suggestions = [];
        for (var line of req.body.rawData) {
            var lineAux = line.replace('\r', '');
            var values = lineAux.split(req.body.testDelimiter);
            var tagsStr = values[1].replace(/[\[\]']+/g, '');
            var tags = tagsStr.split(", ");
            const suggestion = new Suggestion({
                errorCode: values[0],
                tags: tags,
                label: values[2],
                fieldName: values[3],
                fieldPosition: Number(values[4]),
                rowPosition: Number(values[5]),
                errorMessage: values[6],
                errorCell: values[7],
                datafile: req.params.datafileId
            });
            suggestions.push(suggestion)

        }
        var suggestionsResult = await Suggestion.insertMany(suggestions);
        return res.status(201).json({
            message: "Suggestions added successfully",
            suggestion: suggestions,
        });
    } catch (err) {
        res.status(500).json({
            message: "Adding suggestions failed!"
        });
    }
};

exports.applySuggestion = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const suggestion = await Suggestion.findById(req.params.id);
        const datafile = await Datafile.findById(suggestion.datafile);
        if (!datafile) {
            return res.status(500).json({
                message: "Using this suggestion failed! (Datafile not found)."
            });
        }
        const roles = await Role.find({ 'workspace': datafile.workspace, 'user': current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "This suggestion are not allowed to be used!"
            });
        }
        const operation = req.body.operation;
        const contentLines = req.body.contentLines;
        const rowNumber = suggestion.rowPosition;
        console.log(operation)
        if (operation === "getRow") {
            const content = contentLines.join("\n");
            return res.status(200).json({
                message: "Suggestion used successfully!",
                data: {
                    "rowContent": contentLines[rowNumber - 1],
                    "content": content
                }
            });
        } else if (operation === "deleteRow") {
            contentLines.splice(rowNumber - 1, 1);
            const content = contentLines.join("\n");

            return res.status(200).json({
                message: "Suggestion used successfully!",
                data: {
                    "rowContent": null,
                    "content": content
                }
            });
        } else if (operation === "updateRow") {
            console.log(contentLines[rowNumber - 1])
            console.log("New content:")
            console.log(req.body.newRowContent)
            contentLines[rowNumber - 1] = req.body.newRowContent;
            console.log("New content lines:")
            console.log(contentLines)
            const content = contentLines.join("\n");
            console.log(content)
            return res.status(200).json({
                message: "Suggestion used successfully!",
                data: {
                    "rowContent": null,
                    "content": content
                }
            });
        } else {
            return res.status(500).json({
                message: "This operation is not contemplated!"
            });
        }

    } catch (err) {
        return res.status(500).json({
            message: "Using a suggestion failed!"
        });
    }
};

exports.deleteSuggestionsByDatafile = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const datafile = await Datafile.findById(req.params.datafileId);
        if (!datafile) {
            return res.status(500).json({
                message: "Adding suggestions failed! (Datafile not found)."
            });
        }
        const roles = await Role.find({ 'workspace': datafile.workspace, 'user': current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "These suggestions are not allowed to be created!"
            });
        }
        await Suggestion.deleteMany({ datafile: req.params.datafileId });

        return res.status(200).json({
            message: "Suggestions deletion successful!"
        });

    } catch (err) {
        return res.status(500).json({
            message: "Deleting suggestions failed!"
        });
    }
};

exports.deleteSuggestion = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const suggestion = await Suggestion.findById(req.params.id);
        const datafile = await Datafile.findById(suggestion.datafile);
        if (!datafile) {
            return res.status(500).json({
                message: "Deleting suggestions failed! (Datafile not found)."
            });
        }
        const roles = await Role.find({ 'workspace': datafile.workspace, 'user': current_user_id });
        if (roles.length !== 1) {
            return res.status(403).json({
                message: "These suggestions are not allowed to be deleted!"
            });
        }

        await Suggestion.deleteOne({ _id: req.params.id });

        return res.status(200).json({
            message: "Suggestion deletion successful!"
        });

    } catch (err) {
        return res.status(500).json({
            message: "Deleting a suggestion failed!"
        });
    }
};