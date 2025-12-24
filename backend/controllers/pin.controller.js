import Pin from "../models/pin.model.js";
// Ensure the User model is registered before using populate with ref: "User"
import "../models/user.model.js";

export const getPins = async (req, res) => {
    try {
        const pageNumber = +req.query.cursor || 0;
        const LIMIT = 21
        const search = req.query.search;
        const userId = req.query.userId;
        const boardId = req.query.boardId;


        const pins = await Pin
            .find(search ? {

                $or: [{
                    title: {
                        $regex:   search,
                        $options: 'i'
                    }
                }, {tags: {$in: [search]}}],

            } : userId ? {user: userId}
                : boardId ? {board: boardId}
                    : {})
            .limit(LIMIT)
            .skip(pageNumber * LIMIT);

        const hasNextPage = pins.length === LIMIT;
        // await new Promise(resolve => setTimeout(resolve, 500))
        res.status(200).json({
            pins,
            nextCursor: hasNextPage ? pageNumber + 1 : null
        });
    } catch (err) {
        console.error("Failed to fetch pins:", err);
        res.status(500).json({message: "Failed to fetch pins"});
    }
}


export const getPin = async (req, res) => {
    const {id} = req.params;

    const pin = await Pin.findById(id).populate("user", "username displayName img");
    res.status(200).json(pin);
}
