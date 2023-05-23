import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import RayzerPay from "razorpay";


// const Razorpay = require('razorpay')
// const shortid = require('shortid')

interface TemplateData {
    template_header: string;
    amount: string;
}

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    if (req.method === "GET") {



        const all = await prisma.donationDetails.findMany({

            // select: {
            //     // template_headre: true,
            //     // amount: true,
            //     template_headre: true,
            //     amount: true
            // }
        })

        const data: { [ key: string ]: number } = all.reduce((acc: any, item) => {
            const { template_headre, amount } = item;
            acc[ template_headre ] = (acc[ template_headre ] || 0) + parseInt(amount);
            return acc;
        }, {});



        res.status(200).send({ data })
    }

}   