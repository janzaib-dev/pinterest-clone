import mongoose, {Schema} from "mongoose";


const BoardSchema = new Schema(
    {
        title:  {
            type:     String,
            required: true,

        },

        user: {
            type:     Schema.Types.ObjectId,
            ref:"User",
            required: true
        },
    },

    {timestamps: true}
)

export default mongoose.model('Board', BoardSchema)