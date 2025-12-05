import mongoose, {Schema} from "mongoose";


const userSchema = new Schema(
    {
        displayName:  {
            type:     String,
            required: true,

        },
        username:     {
            type:     String,
            required: true,

        },
        email:        {
            type:     String,
            required: true,

        },
        img:          {
            type:     String,

        },
        hashPassword: {
            type:     String,
            required: true,

        }
    },

    {timestamps: true}
)

export default mongoose.model('User', userSchema)