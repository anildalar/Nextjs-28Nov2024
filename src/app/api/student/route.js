//1 IMport area
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

//var co = new ClassName();
const prisma = new PrismaClient();


//1. Function Defination 



//Function Defination
export async function GET(request) { //request is formal arguemnt
    const searchParams = request.nextUrl.searchParams;
    const student_name = searchParams.get('name');
    const student_surname = searchParams.get('surname');
    try {
        //Block of code to try
        const student = await prisma.student.create({
            data: { 
                        student_name, 
                        student_surname,
                        updatedAt: new Date(), // setting the initial value for updatedAt 
                },
        });

        return NextResponse.json(student);
        //Recive studentname and Surname and store in the db
        //return Response.json({ msg:"Hello Keso ho "+name+surname})
    }
    catch(err) {
        //Block of code to handle errors
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
    
}