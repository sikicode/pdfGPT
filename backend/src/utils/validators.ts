import { body, ValidationChain, validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

export const validate = (validations: ValidationChain[]) => {
    return async (req : Request, res: Response, next: NextFunction) => {
        for(let validation of validations) {
            const result = await validation.run(req);
            if(!result.isEmpty()) {
                const errors = validationResult(req);
                if(!errors.isEmpty()) {
                    return res.status(422).json({ errors: errors.array() });
                }
            }
        }
        next();
    };
};

export const signUpValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Password should contain at least 6 characters"),
];