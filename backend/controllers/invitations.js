const Invitation = require("../models/invitation");
const User = require("../models/user");
const Workspace = require("../models/workspace");


exports.createInvitation = async(req, res, next) => {
    const current_user_id = req.userData.userId;
    try {
        const receivers = await User.find({ "email": req.body.receiver }).exec();

        if (receivers.length > 1) {
            res.status(500).json({
                message: "Creating an invitation failed!"
            });
        } else if (receivers.length === 0) {
            res.status(500).json({
                message: "Ese usuario no existe."
            });
        } else if (receivers.length === 1) {

            if (receivers[0]._id == current_user_id) {
                res.status(500).json({
                    message: "No puedes enviarte una invitación a ti mism@!"
                });
            }
            const invitations = await Invitation.find({ "receiver": receivers[0]._id, "sender": current_user_id }).exec();
            if (invitations.length > 0) {
                res.status(500).json({
                    message: "Ese ususario ya ha recibido una invitación!"
                });
            } else if (invitations.length === 0) {
                const invitation = new Invitation({
                    sender: current_user_id,
                    receiver: receivers[0]._id,
                    status: 'pending',
                    workspace: req.body.workspace
                });
                await invitation.save(function(err, createdInvitation) {
                    res.status(201).json({
                        message: "Invitation added successfully!",
                        invitation: {
                            ...createdInvitation,
                            id: createdInvitation._id
                        }
                    });

                });
            }
        }
    } catch (err) {
        res.status(500).json({
            message: "Creating an invitation failed!"
        });
    }
};

exports.updateInvitation = async(req, res, next) => {
    current_user_id = req.userData.userId;
    try {
        const invitations = await Invitation.find({ _id: req.params.id }).exec();
        if (invitations.length === 0 || invitations.length > 1) {
            res.status(401).json({ message: "There is no unique invitation with that id!" });
        } else if (invitations.length === 1 && invitations[0].receiver != current_user_id) {
            res.status(401).json({ message: "You are not authorized!" });
        } else if (invitations.length === 1 && invitations[0].receiver == current_user_id) {
            const invitation = new Invitation({
                _id: req.params.id,
                receiver: invitations[0].receiver,
                sender: invitations[0].sender,
                status: req.body.status,
                workspace: invitations[0].workspace
            });
            Invitation.updateOne({ _id: req.params.id }, invitation).then(result => {
                if (result.n > 0) {
                    res.status(200).json({ message: "Update successful!" });
                } else {
                    res.status(401).json({ message: "Not authorized!" });
                }
            });
        }
    } catch (err) {
        res.status(500).json({
            message: "Updating an invitation failed!"
        });
    }
};

exports.getInvitations = async(req, res, next) => {

    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const current_user_id = req.userData.userId;

    try {
        const postQuery = Invitation.find({ receiver: current_user_id });
        if (pageSize && currentPage) {
            postQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
        }
        var documents = await postQuery;

        var new_documents = [];
        for (doc of documents) {
            var sender = await User.findById(doc.sender).exec();
            var workspace = await Workspace.findById(doc.workspace).exec();
            var new_doc = {
                _id: doc._id,
                sender: sender.username,
                receiver: doc.receiver,
                status: doc.status,
                workspace: workspace.title
            };
            new_documents.push(new_doc);
        }
        res.status(200).json({
            message: "Invitations fetched successfully!",
            invitations: new_documents,
            maxInvitations: new_documents.length
        });

    } catch (error) {
        res.status(500).json({
            message: "Fetching invitations failed!"
        });
    }

};

exports.deleteInvitation = async(req, res, next) => {
    const current_user_id = req.userData.userId;

    try {
        const invitation = Invitation.findOne({ receiver: current_user_id }).exec();
        if (!invitation) {
            res.status(401).json({ message: "Not authorized!" });
        } else {
            await Invitation.deleteOne({ _id: req.params.id });
            res.status(200).json({ message: "Invitation deletion successful!" });
        }
    } catch (err) {
        res.status(500).json({
            message: "Deleting an invitation failed!"
        });
    }
};
