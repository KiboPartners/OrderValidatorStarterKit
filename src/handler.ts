import { APIGatewayProxyHandler } from 'aws-lambda';
import 'dotenv/config'
import { Order } from '@kibocommerce/rest-sdk/clients/Commerce'

interface Message {
  messageType: string;
  message: string
}

type ValidationResponse = {
  validationId: string;
  validatorName: string;
  validatorType: "Fraud";
  status: "Pass" | "Review" | "Fail";
  createdDate: string; // ISO 8601 string format
  messages: Message[];
};

export const main: APIGatewayProxyHandler = async (event) => {
  try {
    let response: ValidationResponse = {
      "validationId": "orderValidatorStarterKit",
      "validatorName": "orderValidatorStarterKit",
      "validatorType": "Fraud",
      "status": "Pass",
      "createdDate": new Date().toISOString(),
      "messages": [
        { messageType: 'notification', message: 'No issues' }
      ]
    }

    const order: Order = event.body ? JSON.parse(event.body) : {};

    response = await processResponse(response, order);
 
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
};

async function processResponse(response: ValidationResponse, order: Order) {
  return response
}

