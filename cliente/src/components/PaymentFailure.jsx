import {React, useEffect} from 'react'
import queryString from 'query-string'
import {Card, CardBody, Typography} from "@material-tailwind/react";
import {NavbarSimple} from './navbar';

const PaymentFailure = () => {

    const currentURL = window.location.href
    const paramsURL = queryString.parseUrl(currentURL).query

    return (
        <>
            <NavbarSimple></NavbarSimple>
            <Typography variant="h5" color="blue-gray" className="mb-2 mt-5">
                Payment Failure
            </Typography>
            <Card className="mt-6 w-100">
                <CardBody>

                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <strong>collection_id:
                                </strong>
                            </span>
                            <Typography className="font-normal">
                                {
                                paramsURL.collection_id
                            }</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <strong>collection_status:
                                </strong>
                            </span>
                            <Typography className="font-normal">
                                {
                                paramsURL.collection_status
                            }</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <strong>payment_id:</strong>
                            </span>
                            <Typography className="font-normal">
                                {
                                paramsURL.payment_id
                            }</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <strong>status:</strong>
                            </span>
                            <Typography className="font-normal">
                                {
                                paramsURL.status
                            }</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <strong>
                                    external_reference:
                                </strong>
                            </span>
                            <Typography className="font-normal">
                                {
                                paramsURL.external_reference
                            } </Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <strong>
                                    payment_type:
                                </strong>
                            </span>
                            <Typography className="font-normal">
                                {
                                paramsURL.payment_type
                            } </Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <strong>
                                    merchant_order_id:
                                </strong>
                            </span>
                            <Typography className="font-normal">
                                {
                                paramsURL.merchant_order_id
                            } </Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <strong>
                                    preference_id:
                                </strong>
                            </span>
                            <Typography className="font-normal">
                                {
                                paramsURL.preference_id
                            } </Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <strong>
                                    site_id:
                                </strong>
                            </span>
                            <Typography className="font-normal">
                                {
                                paramsURL.site_id
                            } </Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <strong>
                                    processing_mode:
                                </strong>
                            </span>
                            <Typography className="font-normal">
                                {
                                paramsURL.processing_mode
                            } </Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <strong>
                                    merchant_account_id:
                                </strong>
                            </span>
                            <Typography className="font-normal">
                                {
                                paramsURL.merchant_account_id
                            } </Typography>
                        </li>
                    </ul>
                </CardBody>

            </Card>

        </>
    )
}

export default PaymentFailure
