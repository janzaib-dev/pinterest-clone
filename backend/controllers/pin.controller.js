import Pin from "../models/pin.model.js";

export const getPins = async (req, res) => {
    try {
        const pageNumber = +req.query.cursor || 0;
        const LIMIT = 21
        const search = req.query.search;


        const pins = await Pin
            .find(
                search ?{

                $or: [
                    {title:{$regex:search, $options:'i'}},
                    {tags:{$in:[search]}}
                ],

                    } : {}
            )
            .limit(LIMIT)
            .skip(pageNumber * LIMIT);

        const hasNextPage = pins.length === LIMIT;
        await new Promise(resolve => setTimeout(resolve, 500))
        res.status(200).json({
            pins,
            nextCursor: hasNextPage ? pageNumber + 1 : null
        });
    } catch (err) {
        console.error("Failed to fetch pins:", err);
        res.status(500).json({message: "Failed to fetch pins"});
    }
}