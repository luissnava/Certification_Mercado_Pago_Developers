import {initMercadoPago, Wallet} from '@mercadopago/sdk-react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
} from "@material-tailwind/react";
import {useState} from 'react';
const createPreference = async () => {
    try {
        const response = await fetch("http://localhost:8080/create_order", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id: 1234,
                    title: "Laptop lenovo",
                    description: " Laptop Lenovo V15 Gen 3 15.6 Full HD, AMD Ryzen 5 5625U 2.30GHz, 8GB, 512GB SSD, Windows 10 Pro 64-bit, Español, Negro",
                    picture_url: "https://my-test-11.slatic.net/p/927478c23b1dc3c6090da1a13432fa1a.jpg",
                    category_id: "car_electronics",
                    quantity: 1,
                    unit_price: 200,
                    currency_id: "MXN"
                }
            )
        })
        const data = await response.json()
        return data.id_preference
    } catch (error) {
        console.log(error);
    }
}

export function App() {

    const [preferenceId, setPreference] = useState(null)
    const customization = {
        texts: {
          action: 'buy',
          valueProp: 'security_details',
        }
       }

    // Public Key
    initMercadoPago('APP_USR-a68157fb-5513-4dc7-adbf-709ba3e46766');

    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setPreference(id)
        }
    }
    return (
        <Card className="mt-10 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img src="https://my-test-11.slatic.net/p/927478c23b1dc3c6090da1a13432fa1a.jpg" alt="card-image"/>
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Laptop Lenovo Gaming
                </Typography>
                <Typography>
                    Laptop Lenovo V15 Gen 3 15.6" Full HD, AMD Ryzen 5 5625U 2.30GHz, 8GB, 512GB SSD, Windows 10 Pro 64-bit, Español, Negro
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 text-center">
                <Button onClick={handleBuy}>Pagar la Compra</Button>
                {
                preferenceId && <Wallet 
                initialization={ {preferenceId: preferenceId,
                    payer: {
                    name: "Lalo",
                    surname: "Landa",
                    email: "test_user_94708656@testuser.com",
                    phone: {
                        number: 5525634125
                    },
                    address: {
                        street_name: "Calle Falsa", // Dirección de la calle del pagador
                        street_number: 123, // Número de la dirección del pagador
                        zip_code: "11300",
                    }
                  },redirectMode: 'modal'}}
                  customization={customization}/>
            } 
            </CardFooter>
        </Card>

    );
}
export default App
