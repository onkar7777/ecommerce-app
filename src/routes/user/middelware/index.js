
export const createCustomerValidate = async (req, res, next) => {
    try {
        const { name, email, mobile, password } = req.body;
        if (name !== "" && email !== "" && mobile !== "" && password !== "") {
            next();
        } else {
            res.status(200).json({
                message: "flag4",
                status: 404
            });
        }
    } catch (error) {
        res.status(200).json({
            message: "flag3",
            status: 500
        });
    }
}