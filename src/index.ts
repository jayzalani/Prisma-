// we will create autogenerted client with prisma where i can use ot call the database 
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string){
  const response = await prisma.user.create({
    data: { username, password, firstName, lastName }
  })
  console.log(response);
}
insertUser('testkajshd', 'tesadast','teasdast', 'test');4