import {json, response} from "express";
import mercadopago from "mercadopago";
export const createOrder = (request, resp) => {
    // Agrega credenciales
    mercadopago.configure({access_token: "APP_USR-2926550097213535-092911-5eded40868803c83f12e9eef1afa99fa-1160956296",integrator_id: "dev_24c65fb163bf11ea96500242ac130004"});
    // Crea un objeto de preferencia
    const {id,title, description, picture_url, category_id, quantity, unit_price, currency_id} = request.body
    const preference = {
       
        items: [
            {
                id: id,
                title: title,
                description:description,
                picture_url: picture_url,
                category_id: category_id,
                quantity: quantity,
                unit_price: unit_price,
                currency_id: currency_id
            },
        ],
        payer: {
            "name": "Lalo",
            "surname": "Landa",
            "email": "test_user_94708656@testuser.com",
            phone: {
                "number": 5525634125
            },
            identification: {
                "type": "DNI",
                "number": "12345678"
            },
            address: {
                "street_name": "Calle Falsa", // Dirección de la calle del pagador
                "street_number": 123, // Número de la dirección del pagador
                "zip_code": "11300",
            }
        },
        back_urls: {
            "success": "http://localhost:5173/success",
            "failure": "http://localhost:5173/failure",
            "pending": "http://localhost:5173/pending"
        },
        payment_methods: {
            excluded_payment_methods:[
                {
                    id: "visa"
                }
            ],
            installments: 6
        },
        external_reference: "boomgrowth1@gmail.com",
        auto_return: "approved",
        notification_url: "https://497f-2806-2a0-142b-3eaa-2445-486c-81b0-fea9.ngrok.io/notification_url",
        
    };

    mercadopago.preferences.create(preference).then(function (result) { 
        // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
        resp.json({
            id_preference: result.body.id,
            body: result.body
        })
    }).catch(function (error) {
        console.log(error);
    });

}

export const notification_url = async (request, resp) => {
    const payment = request.query
    try {

        if (payment.type === 'payment') {
            const data = await mercadopago.payment.findById(payment['data.id'])
            console.log("id_payment",data);
            return resp.sendStatus(202)
        }

    } catch (error) {
        console.log(error);
        return resp.senStatus(500).json({error: error.message})
    }
}
