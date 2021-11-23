const { Invitation, User, Workspace, Role, GlobalConfiguration } = require("../models");

exports.getInvitations = async(req, res, next) => {
    const pageSize = +req.query.pagesize;
    const currentPage = +req.query.page;
    const current_user_id = req.userData.userId;
    try {
        const invitationQuery = Invitation.find({ receiver: current_user_id });
        const allInvitations = await invitationQuery.exec();

        if (pageSize && currentPage && pageSize > 0 && currentPage > 0) {
            invitationQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
        }
        var documents = await invitationQuery.exec();

        var new_documents = [];
        for (doc of documents) {
            var sender = await User.findById(doc.sender);
            var workspace = await Workspace.findById(doc.workspace);
            var new_doc = {
                _id: doc._id,
                sender: sender.username,
                receiver: doc.receiver,
                status: doc.status,
                workspace: workspace.title
            };

            new_documents.push(new_doc);
        }
        return res.status(200).json({
            message: "Invitations fetched successfully!",
            invitations: new_documents,
            maxInvitations: new_documents.length,
            totalInvitations: allInvitations.length
        });
    } catch (error) {
        return res.status(500).json({
            message: "Fetching invitations failed!"
        });
    }

};

exports.createInvitation = async(req, res, next) => {
    const current_user_id = req.userData.userId;

    try {
        const configurations = await GlobalConfiguration.find();
        const configuration = configurations[0];
        const roles = await Role.find({ workspace: req.body.workspace });

        if (roles.length === configuration.limitUsers) {
            return res.status(500).json({
                message: `This workspace is not allowed to have more than ${configuration.limitUsers} users!`
            });
        }
        const receiver = await User.findOne({ "email": req.body.receiver });
        if (!receiver) {
            return res.status(500).json({
                message: "Creating an invitation failed! User not found!"
            });
        }
        if (receiver._id == current_user_id) {
            return res.status(500).json({
                message: "You cannot send an invitation to yourself!"
            });
        }

        const invitations = await Invitation.find({ "receiver": receiver._id, "sender": current_user_id });
        if (invitations.length > 0) {
            return res.status(500).json({
                message: "That user has already received an invitation!"
            });
        } else {
            const invitation = new Invitation({
                sender: current_user_id,
                receiver: receiver._id,
                status: "pending",
                workspace: req.body.workspace
            });
            console.log(invitation)
            const createdInvitation = await invitation.save();
            console.log(createdInvitation)
            return res.status(201).json({
                message: "Invitation created successfully!",
                invitation: createdInvitation
            });
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
        const invitation = await Invitation.findById(req.params.id);

        if (invitation.receiver != current_user_id) {
            return res.status(403).json({
                message: "You are not the receiver of this invitation!"
            });
        }
        await Invitation.findByIdAndUpdate(req.params.id, { status: req.body.status });
        const updatedInvitation = await Invitation.findById(req.params.id);
        return res.status(200).json({
            message: "Update successful!",
            invitation: updatedInvitation
        });
    } catch (err) {
        return res.status(500).json({
            message: "Updating an invitation failed!"
        });
    }
};

exports.deleteInvitation = async(req, res, next) => {
    const current_user_id = req.userData.userId;

    try {
        const invitation = await Invitation.findOne({ receiver: current_user_id });
        if (!invitation) {
            return res.status(403).json({ message: "You are not authorized to delete this invitation!" });
        } else {
            await Invitation.deleteOne({ _id: req.params.id });
            return res.status(200).json({
                message: "Invitation deletion successful!"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Deleting an invitation failed!"
        });
    }
};