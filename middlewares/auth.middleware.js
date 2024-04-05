export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        next()
    } else {
        res.status(401).send("malito")
    }
}