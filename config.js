import * as dotenv from 'dotenv';
dotenv.config()
export const executionEnvironment = process.env.executionEnvironment ?? 'development'
let inProduction = false
if (executionEnvironment === 'production') {
  inProduction = true
} else {
   console.log(
    'Execution environment is in development mode, to change this set executionEnvironment = production, in the environment variables'
  )
}

export default {
    id: process.env.clientID, // Discord Bot ID
    inProduction: inProduction,
    token: process.env.clientToken,
    developers: ['327207082203938818', '653429940502659111']
};