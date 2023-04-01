import { Schema, Types, model, Model } from "mongoose";
import { Message } from "../interfaces/message.interface";

const MessageSchema = new Schema<Message>(
    {
        name: {
            type: String,
            required: true,
        },
        mail: {
            type: String,
            required: true,
        },
        phone: {
            type: String || null
        },
        comments: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const MessageModel = model('message', MessageSchema);

export default MessageModel;