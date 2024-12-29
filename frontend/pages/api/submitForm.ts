import type { NextApiRequest, NextApiResponse } from "next";

const submitForm =
    async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const apiKey = process.env.API_KEY;

    const formData = {
        ...req.body,
        access_key: apiKey,
    };

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

export default submitForm;
